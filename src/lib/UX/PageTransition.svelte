<script>
  import { fly } from "svelte/transition";
  import { quartInOut } from "svelte/easing";
  export let innerHeight;
</script>

<main
  on:touchstart|passive
  in:fly={{
    delay: 300,
    duration: 500,
    y: -innerHeight,
    opacity: 1,
    easing: quartInOut,
  }}
  out:fly={{
    delay: 300,
    duration: 500,
    y: -innerHeight,
    opacity: 1,
    easing: quartInOut,
  }}
  style="--windowInnerHeight: {innerHeight}px;"
>
  <slot />
</main>

<style>
  main {
    height: 100vh;
    height: var(--windowInnerHeight);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
  }
</style>
