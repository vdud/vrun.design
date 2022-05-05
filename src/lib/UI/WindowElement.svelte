<script>
  import { goto } from "$app/navigation";
  import grabState from "$lib/UX/grab-state";
  import { onDestroy, onMount } from "svelte";
  import windowHandler from "../UX/window-state";
  import Button from "./Button.svelte";

  export let height;
  export let width;
  export let parallax;
  export let background = "";
  export let title;
  export let enlargeable = true;
  export let id;
  export let isInForeground = true;
  export let intersections = [];
  export let distanceFromIntersection = 20;
  export let href = undefined;
  export let meta;

  let isMinimized = false;
  let intersectionIsMinimized = false;

  let touched = false;
  let thisWindowObject;

  let enlargeButton;

  let triggerIntroAnimation = false;

  let subpageActive = false;

  let unsubscribe;

  if (intersections.length > 0) {
    windowHandler.registerWindow({
      id: id,
      parallax: parallax,
      isInForeground: isInForeground,
      intersections: intersections,
      intersectionIsMinimized: false,
      touched: touched,
    });

    unsubscribe = windowHandler.subscribe((windows) => {
      thisWindowObject = windows.find((wdws) => wdws.id === id);
      isInForeground = thisWindowObject.isInForeground;
      parallax = thisWindowObject.parallax;
      touched = thisWindowObject.touched;
      intersectionIsMinimized = thisWindowObject.intersectionIsMinimized;
    });
  }

  function toggleMinimize() {
    isMinimized = !isMinimized;
    if (intersections.length != 0) {
      windowHandler.updateIsMinimized(id);
    }
  }

  function triggerGrab(evt) {
    grabState.set(evt);
  }

  let isGrabbing = false;

  // Plain event handler to process clicks (Or currently double clicks) on the window-content
  function handleContentClick() {
    if (href && !isGrabbing && isInForeground) {
      subpageActive = true;
      goto(href);
    }
  }

  function handleContentMousedown(evt) {
    triggerGrab(evt);
    isGrabbing = false;
    setTimeout(() => {
      isGrabbing = true;
    }, 200);
  }

  // Plain event handler to process clicks on the window in general and bring them to the foreground
  // if they are in the background and not minimized or on the enlargeButton
  function handleWindowClick(evt) {
    if (!isInForeground && !isMinimized) {
      if (!href) {
        windowHandler.bringToForeground(id);
      } else if (!enlargeButton.contains(evt.target)) {
        windowHandler.bringToForeground(id);
      }
    }
  }

  function handleWindowMousedown(evt) {
    if (!enlargeButton?.contains(evt.target)) {
      triggerGrab(evt);
    }
  }

  onMount(() => {
    touched = false;
    triggerIntroAnimation = true;
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>

<div
  class:fly-out={subpageActive}
  style="--fly-animation: fly-{parallax};"
  class="parallax-wrapper {parallax}"
>
  <div
    style="width: {width}px; height: {height}px; --baseShuffleDistance: {isMinimized |
    intersectionIsMinimized
      ? 0
      : distanceFromIntersection.base}; --largeShuffleDistance: {isMinimized |
    intersectionIsMinimized
      ? 0
      : distanceFromIntersection.large};"
    class:trigger-forward-shuffle={!isInForeground && touched}
    class:trigger-backward-shuffle={isInForeground && touched}
    class:minimized-notransition={isMinimized | intersectionIsMinimized}
  >
    <section
      style="--windowWidth: {width}; --windowHeight: {height}; --order: {id /
        10};"
      on:mousedown={handleWindowMousedown}
      on:click={handleWindowClick}
      class:grabbing={$grabState}
      class:blur-intro={triggerIntroAnimation}
    >
      <header>
        <Button buttonType="minimize" on:toggle-minimize={toggleMinimize} />
        {#if title}
          <h2>{title}</h2>
        {:else}
          <h2>Title</h2>
        {/if}
        {#if enlargeable}
          <div bind:this={enlargeButton}>
            <Button
              on:enlarge={() => (subpageActive = true)}
              buttonType="subpage"
              {href}
            />
          </div>
        {:else}
          <Button buttonType="hidden" />
        {/if}
      </header>
      <div
        class:slide={isMinimized}
        class:no-events={!isInForeground}
        on:mousedown|stopPropagation={handleContentMousedown}
        on:click={handleContentClick}
        class="content-wrapper"
        style="height: {height -
          0}px; background: {background}; background-size: cover;"
      >
        <slot><p>Content goes here</p></slot>
      </div>
      <div class="text"><p>{meta}</p></div>
    </section>
  </div>
</div>

<style>
  .parallax-wrapper {
    transition: 0.8s;
    position: relative;
    overflow: visible;
  }
  .minimized-notransition {
    transition: transform 0.2s;
  }
 .text{
   text-align: end;
 }

  section {
    pointer-events: auto;
    position: relative;
    width: calc(var(--windowWidth) * 1px);
    max-height: calc(var(--windowHeight) * 1px) + 1px;
    user-select: none;
    cursor: grab;
    transform: scale(1);
    opacity: 0;
    overflow: hidden;
    margin: 0px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    filter: blur(0px);
    border-radius: 10px;
background: #ecf0f3;
box-shadow:  10px 10px 30px #c9cccf,
             -10px -10px 30px #ffffff;
  }

  .grabbing {
    cursor: grabbing;
  }

  .blur-intro {
    animation: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)
      calc(3s + 1s * var(--order)) 1 normal forwards running blur-effect;
  }

  @keyframes blur-effect {
    0% {
      filter: blur(0px);
      transform: scale(0.5);
      opacity: 0;
    background: #e4e9ec;
box-shadow:  0px 0px 10px #c2c6c9,
             0px 0px 10px #ffffff;
    }

    100% {
      filter: blur(0px);
      transform: scale(1);
      opacity: 1;
    background: #e4e9ec;
    
box-shadow:  10px 10px 30px #c2c6c9,
             -10px -10px 30px #ffffff;
    }
  }

  header {
    cursor: default;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0px;
    padding-top: 20px;
    transform: translateY(-5px);
    margin: 0px;
  }

  h2 {
    margin: 0;
    font-size: 12px;
    font-family: PPNueueMachina-light;    
    letter-spacing: -0px;
    
    background: -webkit-linear-gradient( #eee, #111);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
      }

  .content-wrapper {
    overflow: hidden;
    margin: 0px;
    /* Properties for the slide transition */
    height: auto;
    max-height: calc(var(--windowHeight) * 1px);
    transition: all 400ms ease-in-out;
  }

  .slide {
    border-top: 0px solid #fefefe;
    max-height: 0px;
    transition: 400ms cubic-bezier(0.21, 0.22, 0.59, 0.96);
  }

  .no-events {
    pointer-events: none;
  }

  .trigger-forward-shuffle {
    animation: 0.8s ease-in-out 0s forward-shuffle;
  }

  @keyframes forward-shuffle {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(
        calc((var(--baseShuffleDistance) * max(2550px, 250vmax) / 200 * -1))
      );
    }
    100% {
      transform: translateX(0);
    }
  }

  .trigger-backward-shuffle {
    animation: 0.8s ease-in-out 0s backward-shuffle;
  }

  @keyframes backward-shuffle {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(
        calc((var(--baseShuffleDistance) * max(2550px, 250vmax) / 200 * -0.5))
      );
    }
    100% {
      transform: translateX(0);
    }
  }

  /* Different parallax speeds. translateZ has to be a positive value in order to prevent Safari rendering bug*/

  .very-slow {
    transform: translateZ(1.2px) scale(0.88);
    transform-origin: center;
  }

  .slowish {
    transform: translateZ(1px) scale(0.9);
    transform-origin: center;
  }

  .slow {
    transform: translateZ(0.8px) scale(0.92);
    transform-origin: center;
  }
  .medium {
    transform: translateZ(0.6px) scale(0.94);
    transform-origin: center;
  }
  .fast {
    transform: translateZ(0.4px) scale(0.96);
    transform-origin: center;
  }
  .very-fast {
    transform: translateZ(0.2px) scale(0.98);
    transform-origin: center;
  }

  @media only screen and (min-width: 1440px) {
    @keyframes forward-shuffle {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(
          calc((var(--largeShuffleDistance) * max(2880px, 120vmax) / 200 * -1))
        );
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  .fly-out {
    animation: var(--fly-animation) 350ms forwards;
    animation-timing-function: cubic-bezier(0.7, 0, 0.84, 0);
  }

  @keyframes -global-fly-very-slow {
    from {
      transform: translateZ(1.2px) translateY(0px) scale(0.88);
    }
    to {
      transform: translateZ(1.2px) translateY(100vh) scale(0.88);
    }
  }

  @keyframes -global-fly-slowish {
    from {
      transform: translateZ(1px) translateY(0px) scale(0.9);
    }
    to {
      transform: translateZ(1px) translateY(100vh) scale(0.9);
    }
  }

  @keyframes -global-fly-slow {
    from {
      transform: translateZ(0.8px) translateY(0px) scale(0.92);
    }
    to {
      transform: translateZ(0.8px) translateY(100vh) scale(0.92);
    }
  }
  @keyframes -global-fly-medium {
    from {
      transform: translateZ(0.6px) translateY(0px) scale(0.94);
    }
    to {
      transform: translateZ(0.6px) translateY(100vh) scale(0.94);
    }
  }
  @keyframes -global-fly-fast {
    from {
      transform: translateZ(0.4px) translateY(0px) scale(0.96);
    }
    to {
      transform: translateZ(0.4px) translateY(100vh) scale(0.96);
    }
  }
  @keyframes -global-fly-very-fast {
    from {
      transform: translateZ(0.2px) translateY(0px) scale(0.98);
    }
    to {
      transform: translateZ(0.2px) translateY(100vh) scale(0.98);
    }
  }
</style>
