<script>
      import WindowElement from "../UI/WindowElement.svelte";
      import Button from "$lib/UI/Button.svelte";
      
</script>

    
    <div class="wrapper grid-area">
      
      <WindowElement
      width={360}
      height={430}
      parallax="very-slow"
      background="transparent"
      title={" "}
      enlargeable={false}   
      meta=" "   
      id={8}
      > <div class="container"><div>
      <img src="https://res.cloudinary.com/vrun/image/upload/q_auto/v1639291210/everydays/abstract_flower_1_shvwz6.png" /> 
        </div>
        
        <div class="container">
          <h1> flowerofhope </h1>
          <!-- <p> not nor sale </p> -->
        </div>  
    </div>
      
      
        </WindowElement>
        
 
     
        
    </div>
    
    <style>
      
	div {
		grid-column: 155/165;
		grid-row: 45/65;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media only screen and (min-width: 1440px) {
		div {
			grid-column: 155/165;
			grid-row: 45/65;
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
    margin: 10px 0;
    font-size: 18px;
    
    background: -webkit-linear-gradient( #999, #eee);
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
    