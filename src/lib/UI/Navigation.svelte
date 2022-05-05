<script>
	import Button from './Button.svelte';
	import { fly } from 'svelte/transition';
	import { t } from 'svelte-intl-precompile';
	import navState from '$lib/UX/nav-state';
	export let currentPage;
	export let nextLink;
	export let previousLink;
	export let innerWidth;
</script>
