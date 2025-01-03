<script>
  import VerticalCarousel from '$lib/components/VerticalCarousel.svelte'
	import Header from '$lib/components/Header.svelte'
	let { children } = $props()
	import { fade } from 'svelte/transition'
	import gameStore from '../../stores/gameStore'
	import logo from '$lib/assets/images/logo/logo.png'
</script>

<svelte:head>
  <title>REdocs - Games</title>
</svelte:head>

<Header />

<main class="max-w-[96rem] w-full mx-auto text-white xl:pt-[calc(3.5rem+1.75rem+1px)] lg:pt-[calc(3rem+1.5rem+1px)] pt-[calc(3rem+1.25rem+1px)] md:flex md:justify-between xl:px-7 xl:pb-7 lg:px-6 lg:pb-6 px-5 pb-5">
	<VerticalCarousel items={$gameStore} searchedItems={$gameStore} type='game' />
	{@render children()}
</main>
