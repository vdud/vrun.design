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
    width={350}
    height={340}
    parallax="very-slow"
    background="transparent"
    meta=" "
    title={"uninspired cubes collection"}
    enlargeable={false}
    id={2}
  >
    <Swipe {...swipeConfig}>
      <SwipeItem
        ><div class="container">
          <div>
            <img src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1638523291/everydays/11_czjbwu.png"/>
          </div>
          <div class="container "><h1>Protagonist</h1></div>
        </div>
      </SwipeItem>
      <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1638808401/everydays/uninspiredcube_2_goxtuf.png"
            />
          </div>
          <div class="container ">
            <h1>Cube friendships</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>
        <SwipeItem
          ><div class="container">
            <div>
              <img
                src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1641186227/everydays/uninspiredcube_3_mopyia.png"
              />
            </div>
            <div class="container ">
              <h1>Cube family</h1>
              <!-- <p>Sold for</p> -->
            </div>
          </div></SwipeItem>
      <!-- <SwipeItem><video src="everydays/cliche coin graphic/Ether_1.mp4" type="video/mp4" playsinline autoplay muted loop  /></SwipeItem> -->
    </Swipe>
  </WindowElement>
</div>

<style>
  div {
    grid-column: 70/85;
    grid-row: 42/62;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 1440px) {
    div {
      grid-column: 70/85;
      grid-row: 42/62;
    }
  }
  .container {
    padding-top: 0;
    padding-left: 0;
    display: grid;
    justify-items: center;
    align-items: end;
  }
  .gradient{
    background: linear-gradient(transparent, black);
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
    background: -webkit-linear-gradient(#eee, #eee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    font-family: PPNueueMachina-regular;
    font-weight: bold;
    padding: 0px 15px;
    margin: 10px 0;
    font-size: 16px;
    background: -webkit-linear-gradient(  #eee, #777);
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
  video {
    max-width: 100%;
  }
</style>
