<script>
      import WindowElement from "../UI/WindowElement.svelte";
      import { Swipe, SwipeItem } from "svelte-swipe";
      import Button from "$lib/UI/Button.svelte";
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
      parallax="very-slow"
      background="transparent"
      title={"lil-birdie collection"}
      enlargeable={false}
      meta=" "
      id={1}>
      <Swipe {...swipeConfig}>
        
    <SwipeItem>
      <div class="container">
        <div>
          <img src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1639291226/everydays/Wings_hwvez5.png" /> 
        </div>
      <div class="container">
          <h1> Angel Wings </h1>
          <!-- <p>not for sale</p> -->
      </div>
    </SwipeItem>
    
        <SwipeItem>
      <div class="container">
        <div>
          <img src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1641204168/everydays/Cloudy_woman_3_rh5cys.png" /> 
        </div>
      <div class="container">
          <h1> Elevation </h1>
          <!-- <p>not for sale</p> -->
      </div>
    </SwipeItem>


  </Swipe>
  </WindowElement>
</div>
    
    <style>
      /* .wrapper {
    grid-column: 120/130;
        grid-row: 50/80;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
      }
        */
    
        
	div {
		grid-column: 65/85;
		grid-row: 124/156;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media only screen and (min-width: 1440px) {
		div {
			grid-column: 65/85;
			grid-row: 124/151;
		}
	}
      .container {
        padding-top: 0;
        padding-left: 0;
        border-radius: 0px;
        display: grid;
        justify-items: center;
        align-items: end;
        width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.562));
          }

          h1 {
    
    font-family: PPNueueMachina-regular;
    font-weight: bold;
    padding: 0px 15px;
    margin: 6px 0;
    font-size: 17px;
    
    background: -webkit-linear-gradient(  #eee, #555);
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
                                background: -webkit-linear-gradient(#EEE, #eee);
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
    
      
      .swipe-holder{
    height: 100%;
    width: 100%;
  }

  img{
    max-width: 100%; 
  }

    </style>
    