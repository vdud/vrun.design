<script>
  import { createEventDispatcher } from "svelte";
  import { horizontalSlide } from "$lib/UX/css_utils";

  export let buttonType;
  export let href = "/";

  const dispatch = createEventDispatcher();
</script>

{#if buttonType === "subpage"}
  <a
    aria-label="Go to the subpage for this window"
    on:click={() => dispatch("enlarge")}
    sveltekit:prefetch
    class={buttonType}
    {href}
    ><slot />
  </a>
{:else if buttonType === "minimize"}
  <button
    class={buttonType}
    on:click={() => {
      dispatch("toggle-minimize");
    }}
    aria-label="Shrink this window"
  />
{:else}
  <button class={buttonType} />
{/if}

<style>
  .hidden {
    visibility: hidden;
  }

  a, button {
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 5px;
background: #e4e9ec;
box-shadow:  3px 3px 7px #c2c6c9,
             -3px -3px 7px #fff;
    
  }

  a:focus,
  button:focus {
    outline: none;
  }

  .home {
    width: 32px;
    height: 31px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: #e4e9ec solid 1px;
    margin: 0px;
    transition: background-color 300ms ease-in-out;
  }

  .home:active {
    background-color: #222;
  }

  .subpage {
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    margin-right: 10px;

    transition: 300ms ease-in-out;
  }

  .minimize {
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    margin-left: 10px;

    transition: 300ms ease-in-out;
  }
  .minimize:hover {
    border-radius: 5px;
background: #e4e9ec;
box-shadow:  10px 10px 30px #c2c6c9,
             -10px -10px 30px #fff;

    transition: 100ms ease-in;
  }

  .minimize:active {
    border-radius: 5px;
background: #e4e9ec;
box-shadow: inset 5px 5px 7px #c2c6c9,
            inset -5px -5px 7px #fff;

    transition: 100ms ease-in;
  }
  .subpage:hover {
    border-radius: 5px;
background: #e4e9ec;
box-shadow:  10px 10px 30px #c2c6c9,
             -10px -10px 30px #fff;
             

    animation: forwards; transition: 100ms ease-in;
  }

  .subpage:active {
    border-radius: 5px;
background: #e4e9ec;
box-shadow: inset 5px 5px 7px #c2c6c9,
            inset -5px -5px 7px #fff;

    transition: 100ms ease-in;
  }
</style>
