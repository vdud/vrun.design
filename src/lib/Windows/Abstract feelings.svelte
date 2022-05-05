<script>
  import WindowElement from "../UI/WindowElement.svelte";
  import { Swipe, SwipeItem } from "svelte-swipe";
  const swipeConfig = {
    autoplay: false,
    delay: 0,
    showIndicators: false,
    transitionDuration: 750,
    defaultIndex: 0,
  };
</script>

<div class="wrapper grid-area">
  <WindowElement
    width={360}
    height={435}
    parallax="fast"
    background="transparent"
    title={" Abstract feelings "}
    enlargeable={false}
    meta=" "
    id={7}
  > <Swipe {...swipeConfig}>
    <SwipeItem>
    <div class="container">
      <div>
        <img src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1638523291/everydays/2_k2tciv.png"/>
      </div>
      <div class="container gradient">
        <h1>dispersedfeelings</h1>
        <!-- <p>not for sale</p> -->
      </div>
    </div>
  </SwipeItem>
  <SwipeItem>
    <div class="container">
      <div>
        <img
          src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1642927199/everydays/Gates_etmsvw.jpg"
        />
      </div>
      <div class="container gradient">
        <h1>Gates of patience</h1>
        <!-- <p>not for sale</p> -->
      </div>
    </div></SwipeItem>
  </Swipe>
  </WindowElement>
</div>

<style>

	div {
		grid-column: 136/123;
		grid-row: 50/65;
		display: grid;
    justify-content: right;
    align-items: end;
	}
	@media only screen and (min-width: 1440px) {
		div {
			grid-column: 120/130;
			grid-row: 60/75;
		}
	}

  .container {
        padding-top: 0;
        padding-left: 0;
        display: grid;
        justify-items: left;
        align-items: end;
  }

  h1 {
    font-family: PPNueueMachina-regular;
    font-weight: bold;
    color: transparent;
    font-size: 1em;
    line-height: 36px;
    /* letter-spacing: 1.72px; */
    /* padding: 0; */
    margin: 0px;
    animation: shuffle 16s cubic-bezier(0.83, 0, 0.15, 1)
      calc(var(--animation-order) * 200ms) infinite;
    padding: 0px 15px;
    background: -webkit-linear-gradient( #eee, #eee);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
  }

  p {
    font-family: PPNueueMachina-regular;
    font-weight: bold;
    color: transparent;
    font-size: 10px;
    line-height: 45.5px;
    /* letter-spacing: 1.72px; */
    /* padding: 0; */
    margin: -10px 0px;
    margin-top: -25px;
    animation: shuffle 16s cubic-bezier(0.83, 0, 0.15, 1)
      calc(var(--animation-order) * 200ms) infinite;
    padding: 0px 15px;
    background: -webkit-linear-gradient(transparent, #222);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes shuffle {
    0% {
      transform: translateX(0);
    }
    5% {
      transform: translateX(calc(var(--left-offset) * 1px));
    }
    10% {
      transform: translateX(calc(var(--left-offset) * 1px));
    }
    20% {
      transform: translateX(0);
    }
    35% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(calc(var(--left-offset) * 1px));
    }
    65% {
      transform: translateX(calc(var(--left-offset) * 1px));
    }
    70% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (hover: hover) {
    p {
      animation: none;
      transition: 0.8s cubic-bezier(0.83, 0, 0.15, 1);
      transition-delay: calc(var(--animation-order) * 200ms);
    }
    .container:hover p {
      transform: translateX(calc(var(--left-offset) * 1px));
    }
  }

  .swipe-holder {
    height: 100%;
    width: 100%;
  }
  img {
    max-width: 100%;
  }
</style>
