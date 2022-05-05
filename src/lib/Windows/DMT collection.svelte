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
      height={360}
      parallax="very-slow"
      background="transparent"
      title={" D.M.T. collection "}
      href="https://nft.wazirx.org/collection/DMT-Club?sort=recent-desc"
      enlargeable={true}   
      meta=" "   
      id={3}
      ><Swipe {...swipeConfig}>
        
        
        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1646109610/DMT%20Collection/DMT_no_15_bqxeti.png"
            />
          </div>
          <div class="container black">
            <h1>#15</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>
        
        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1646109615/DMT%20Collection/DMT_no_14_o6ruzo.png"
            />
          </div>
          <div class="container black ">
            <h1>#14</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>
        
        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1646109610/DMT%20Collection/DMT_no_13_pziczd.png"
            />
          </div>
          <div class="container black ">
            <h1>#13</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>
        
        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1645537135/DMT%20Collection/DMT_no_12_voggwu.png"
            />
          </div>
          <div class="container black ">
            <h1>#12</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>
        
        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1645537135/DMT%20Collection/DMT_no_11_ficrkh.png"
            />
          </div>
          <div class="container black ">
            <h1>#11</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>
        
        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1645537138/DMT%20Collection/DMT_no_10_rseqrn.png"
            />
          </div>
          <div class="container black ">
            <h1>#10</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>
        
        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1645537142/DMT%20Collection/DMT_no_9_tbfvwq.png"
            />
          </div>
          <div class="container black ">
            <h1>#9</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>
        
        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1645537135/DMT%20Collection/DMT_no_8_xpwtwp.png"
            />
          </div>
          <div class="container black ">
            <h1>#8</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>

        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1645537135/DMT%20Collection/DMT_no_7_oga62y.png"
            />
          </div>
          <div class="container black ">
            <h1>#7</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>

        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1645537150/DMT%20Collection/DMT_no_6_auxlxt.png"
            />
          </div>
          <div class="container black ">
            <h1>#6</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>

        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1645537140/DMT%20Collection/DMT_no_5_red1rr.png"
            />
          </div>
          <div class="container black ">
            <h1>#5</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>

        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1645537138/DMT%20Collection/DMT_no_4_fpnu42.png"
            />
          </div>
          <div class="container black ">
            <h1>#4</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>

        <SwipeItem
        ><div class="container">
          <div>
            <img
              src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1644124915/DMT%20Collection/DMT_no_3_b03z3u.png"
            />
          </div>
          <div class="container black ">
            <h1>#3</h1>
            <!-- <p>Sold for</p> -->
          </div>
        </div></SwipeItem>

        <SwipeItem
          ><div class="container">
            <div>
              <img
                src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1644124916/DMT%20Collection/DMT_no_2_krypfb.png"
              />
            </div>
            <div class="container black">
              <h1>#2</h1>
              <!-- <p>Sold for</p> -->
            </div>
          </div></SwipeItem>

        <SwipeItem
          ><div class="container">
            <div>
              <img src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1644124916/DMT%20Collection/DMT_no_1_srirrc.png"/>
            </div>
            <div class="container black "><h1>#1</h1></div>
          </div>
        </SwipeItem>

         </Swipe>
        </WindowElement>
        
 
     
        
    </div>
    
    <style>

div {
    grid-column: 95/105;
    grid-row: 80/100;
    display: grid;
    justify-content: right;
    align-items: end;
  }
  @media only screen and (min-width: 1440px) {
    div {
      grid-column: 70/85;
      grid-row: 85/100;
    }
  }

       
    
      .container {
        padding-top: 0;
        padding-left: 0;
        border-radius: 25px;
        display: grid;
        justify-items: left;
  align-items: end;
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

    h1 {
    
    font-family: PPNueueMachina-regular;
    font-weight: bold;
    padding: 0px 15px;
    margin: 10px 0;
    font-size: 12px;
    background: -webkit-linear-gradient(#eee, #eee);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
    }

    .black{
      background: rgba(0, 0, 0, .1);
      margin: 10px;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(10px);
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
    