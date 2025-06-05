<script>
  import { fade } from 'svelte/transition'
  import VerticalItems from '$lib/components/VerticalItems.svelte'
  import gameStore from '../../../../stores/gameStore'
  import { page } from '$app/stores'

	let files = $derived(
    $gameStore.find(game => game.url === `/games/${$page.params.game}/files`).files
  )
  // svelte-ignore state_referenced_locally
  let searchedFiles = $state(files)
</script>

<div class="xl:w-[40rem] lg:w-[calc(100svw-34rem)] md:w-[calc(100svw-25rem)] xl:h-[calc(100svh-calc(7rem+1px))] lg:h-[calc(100svh-calc(6rem+1px))] md:h-[calc(100svh-calc(5.5rem+1px))] md:flex hidden items-center justify-center border-4 border-white border-dashed text-center xl:text-base text-sm font-mono" in:fade={{ duration: 300, delay: 300 }}>
  Select a document!
</div>

<VerticalItems items={files} searchedItems={searchedFiles} type='file' />
