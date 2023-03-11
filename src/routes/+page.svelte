<script lang="ts">
	import ScrollHandler from '$lib/UX/ScrollHandler.svelte'
	import WindowView from '$lib/WindowView.svelte'
	// import { prefetchRoutes } from '$app/navigation'
	import { browser } from '$app/environment'
	import PageTransition from '$lib/UX/PageTransition.svelte'

	let innerHeight = 0

	let scroll_element
	// if (browser) {
	// 	window.onload = () => prefetchRoutes()
	// }
</script>

<svelte:head>
	<title>vrun.design</title>
	<meta name="description" content="Varun is a creative designer, 3D works, video editing" />
	<!-- <link rel="preload" href="/fonts/PPNeueMachina-Light.otf" as="font" type="font/otf" crossorigin /> -->
</svelte:head>

<svelte:window bind:innerHeight />
<PageTransition {innerHeight}>
	<div class="container">
		<div class="varun_dudeja">
			<svg width="462" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.63 121.36"
				><defs>
					<style>
						.cls-1 {
							font-size: 100px;
							fill: #e0e0e0;
							font-family: ElefantDisplay;
						}
						.cls-2 {
							font-size: 70px;
							fill: #e0e0e0;
							font-family: PPNueueMachina-light;
						}
					</style></defs>
				<g id="Layer_2" data-name="Layer 2"
					><g id="Mortimer" data-name="Layer 1" class="mask intro-animation" style="--animation-order: 0;">
						<text class="cls-1" transform="translate(-125 98.24)">vrun</text>
						<text class="cls-2" transform="translate(30 98.24)">.design</text>
					</g>
				</g>
			</svg>
			<noscript>
				<h1 style="font-size: 4vh; margin: 0 8vw 0 8vw;">
					Please enable your JavaScript! <br /> I have put a lot of effort into this Website, and would love for you to see it the way it was ment to be seen!
				</h1>
			</noscript>
			<div class="masking">
				<h2 lang="en">
					<span class="mask intro-animation" style="--animation-order: 2;">Varun</span>
					<span class="mask intro-animation" style="--animation-order: 2.2;">is</span>
					<span class="mask intro-animation" style="--animation-order: 2.4;">a</span>
					<span class="mask intro-animation" style="--animation-order: 2.6;">creative</span>
					<span class="mask intro-animation" style="--animation-order: 2.8;">designer</span>
					<span class="mask intro-animation" style="--animation-order: 3;">,</span>
				</h2>
			</div>
			<div class="masking">
				<h2 lang="en">
					<span class="mask intro-animation" style="--animation-order: 3.2;">piquing</span>
					<span class="mask intro-animation" style="--animation-order: 3.4;">interest</span>
					<span class="mask intro-animation" style="--animation-order: 3.6;">in</span>
					<span class="mask intro-animation" style="--animation-order: 3.8;">3D,</span>
					<span class="mask intro-animation" style="--animation-order: 4;">generative</span>
					<span class="mask intro-animation" style="--animation-order: 4.2;">art</span>
					<span class="mask intro-animation" style="--animation-order: 4.4;">&</span>
					<span class="mask intro-animation" style="--animation-order: 4.6;">abstractionism</span>
					<span class="mask intro-animation" style="--animation-order: 4.6;">.</span>
				</h2>
			</div>
		</div>

		<div class="scroller" bind:this={scroll_element}>
			<div class="grid-box">
				<WindowView />
				{#if scroll_element?.scrollHeight > 2500}
					<ScrollHandler {scroll_element} />
				{/if}
			</div>
		</div>
	</div>
</PageTransition>

<style>
	.container {
		width: 100%;
		height: 100%;
	}

	.scroller {
		width: 100%;
		height: 100%;
		overflow: scroll;
		perspective-origin: center;
		perspective: 5px;
		top: 0px;
		left: 0px;
	}

	.grid-box {
		width: max(2550px, 250vmax);
		height: max(2550px, 250vmax);
		display: grid;
		grid-template-columns: repeat(200, 1fr);
		grid-template-rows: repeat(200, 1fr);
		margin: 0;
	}

	.grid-box {
		transform-style: preserve-3d;
	}

	@media only screen and (min-width: 1440px) {
		.grid-box {
			width: max(2880px, 120vmax);
			height: max(2880px, 120vmax);
		}
	}

	.mask {
		transform: translateY(100px);
	}

	.intro-animation {
		animation-fill-mode: forwards;
		animation-name: slideIn;
		animation-duration: 4s;
		animation-delay: calc(var(--animation-order) * 300ms + 300ms);
	}

	@keyframes slideIn {
		0% {
			transform: translateY(120px);
		}

		20% {
			transform: translateY(0px);
		}
		90% {
			transform: translateY(0px);
		}

		100% {
			transform: translateY(0px);
		}
	}

	.masking {
		height: calc(min(1.88vw, 1.5px) * 20);
		overflow: hidden;
	}

	span {
		display: inline-block;
		font-size: 0.5em;
		font-family: PPNueueMachina-light;
		color: #bcbcbc;
	}

	.varun_dudeja {
		pointer-events: none;
		position: fixed;
		z-index: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
</style>
