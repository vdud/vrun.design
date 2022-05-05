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
  parallax="very-slow"
  background="transparent"
  title={"Casanova collection"}
  href="https://nft.wazirx.org/assets/0x23Cad0003e3A2b27b12359B25c25dD9a890AF8e1/26624"
  enlargeable={true}   
  meta="  "   
  id={11}
  > <Swipe {...swipeConfig}>
    <SwipeItem
      >
      <div class="container"><div>
    <img src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1639890252/everydays/humans_2_kxt5hf.png"/>
    <!-- <video src="https://res.cloudinary.com/vrun/video/upload/v1639291380/everydays/Raycast_woman_cg8mt7.mp4" type="video/mp4" playsinline autoplay muted loop  /> -->
  </div>
  <div class="container">
    <h1>In Demand</h1>
    <!-- <p>not for sale</p> -->
  </div></div></SwipeItem>
  <SwipeItem
    ><div class="container">
      <div>
        <img
          src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1641188911/everydays/Shelby_stary_nights_azusdk.png"
        />
      </div>
      <div class="container ">
        <h1>The starry night</h1>
        <!-- <p>not for sale</p> -->
      </div>
    </div></SwipeItem>
    <SwipeItem
    ><div class="container">
      <div>
        <img
          src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1642926969/everydays/New_man_uf8vsz.jpg"
        />
      </div>
      <div class="container ">
        <h1>New Man</h1>
        <!-- <p>not for sale</p> -->
      </div>
    </div></SwipeItem>
<!-- <SwipeItem><video src="everydays/cliche coin graphic/Ether_1.mp4" type="video/mp4" playsinline autoplay muted loop  /></SwipeItem> -->
</Swipe>
 
  
  
    </WindowElement>
    

 
    
</div>

<style>
  
  div {
  grid-column: 110/135;
  grid-row: 110/118;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  @media only screen and (min-width: 1440px) {
  div {
    grid-column: 100/135;
    grid-row: 110/118;
  }
  }
  .container {
        padding-top: 0;
        padding-left: 0;
        border-radius: 25px;
        display: grid;
        justify-items: right;
        align-items: end;
  }
    h1 {
    
    font-family: PPNueueMachina-regular;
    font-weight: bold;
    padding: 0px 15px;
    margin: 6px 0;
    font-size: 17px;
    
    
    background: -webkit-linear-gradient( #eee, rgb(19, 19, 19));
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
video{
max-width: 100%; 
}

img{
    max-width: 100%; 
  }
</style>
