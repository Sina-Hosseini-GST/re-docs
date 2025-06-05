<script>
  let { items, searchedItems, type } = $props()
  import { fade } from 'svelte/transition'
	import gameStore from '../../stores/gameStore'
  import { page } from '$app/stores'
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import ContentName from '$lib/components/ContentName.svelte'
  
  let options = { loop: true, axis: 'y', dragFree: true }
  let value = $state('')
  let slides = []
  let searchedSlides = []
  let emblaApi = $state()
  let gameSlideId = $state(- 1)
  let gameSlideIndex = $state(- 1)
  let fileSlideId = $state(- 1)
  let fileSlideIndex = $state(- 1)
  let ableToLoop = $state(true)
  function onInit(event) {
    emblaApi = event.detail
    ableToLoop = emblaApi.internalEngine().slideLooper.canLoop()
  }
  
	const select = (index, id) => {
    if (value) {
      const elements = searchedSlides.filter(slide => slide)
      for (let i = 0; i < elements.length && elements[i]; i++) {
        const element = elements[i]
        element.lastChild.classList.remove('bg-opacity-0')
        element.lastChild.classList.add('bg-opacity-60')
      }
      const selectedElement = elements[index]
      selectedElement.lastChild.classList.remove('bg-opacity-60')
      selectedElement.lastChild.classList.add('bg-opacity-0')
    }
    else {
      const elements = slides
      for (let i = 0; i < elements.length && elements[i]; i++) {
        const element = elements[i]
        element.lastChild.classList.remove('bg-opacity-0')
        element.lastChild.classList.add('bg-opacity-60')
      }
      const selectedElement = elements[index]
      selectedElement.lastChild.classList.remove('bg-opacity-60')
      selectedElement.lastChild.classList.add('bg-opacity-0')
    }
    emblaApi.scrollTo(index)
    if (type === 'game') {
      gameSlideId = id
    }
    else {
      fileSlideId = id
    }
	}

	$effect(() => {
    if (!$page.params.file) {
      fileSlideId = - 1
    }
    
		if (value) {
			searchedItems = items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
		}
    
    if (type === 'game') {
      gameSlideIndex = items.findIndex(item => item.url === `/games/${$page.params.game}/files`)
      if (emblaApi) {
        emblaApi.scrollTo(gameSlideIndex)
      }
      gameSlideId = items.find(item => item.url === `/games/${$page.params.game}/files`)?.id
    }
    else {
      fileSlideIndex = items.findIndex(item => `/games/${$page.params.game}/files${item.url}` === $page.url.pathname)
      if (emblaApi) {
        emblaApi.scrollTo(fileSlideIndex)
      }
      fileSlideId = items.find(item => `/games/${$page.params.game}/files${item.url}` === $page.url.pathname)?.id
    }
	})
</script>

<div class="border border-gray-500 sticky xl:top-[calc(3.5rem+1.75rem+1px)] lg:top-[calc(3rem+1.5rem+1px)] md:top-[calc(3rem+1.25rem+1px)] xl:h-[calc(100svh-calc(7rem+1px))] lg:h-[calc(100svh-calc(6rem+1px))] md:h-[calc(100svh-calc(5.5rem+1px))] md:flex hidden flex-col xl:text-base text-sm xl:w-64 lg:w-56 md:w-40" in:fade={{ duration: 300 }}>
  <input type="search" class="relative w-full text-black bg-gray-200 placeholder:text-gray-700 xl:h-10 lg:h-9 md:h-8 xl:pl-4 lg:pl-3 md:pl-2 xl:pr-[3.25rem] lg:pr-[2.625rem] md:pr-8 focus:outline-none" placeholder="Search..." bind:value={value}>
  <div class="flex-1 overflow-hidden text-xs embla xl:text-sm bg-stone-900" use:emblaCarouselSvelte={{ options }} onemblaInit={onInit}>
    <div class="flex flex-col h-full embla__container">
      {#if value}
        {#each searchedItems as item, index}
          <a class="flex flex-col embla__slide xl:p-3.5 p-2.5 gap-[.4375rem] border-b border-gray-500 relative group w-full xl:h-64 lg:h-56 md:h-40 shrink-0 text-center" href={type === 'game' ? `${item.url}` : `/games/${$page.params.game}/files${item.url}`} onclick={() => select(index, item.id)} bind:this={searchedSlides[index]}>
            <div class="flex-1 bg-center bg-cover border border-gray-500" style="background-image: url({type === 'game' ? item.gameImageUrl : item.fileImageUrl});"></div>
            <div>
              {item.title}
            </div>
            {#if type === 'game'}
              <div>
                ({item.releaseDate})
              </div>
            {/if}
            <div class="absolute inset-0 transition-colors bg-black {item.id === (type === 'game' ? gameSlideId : fileSlideId) ? 'bg-opacity-0' : 'bg-opacity-60'} group-hover:bg-opacity-0"></div>
          </a>
        {/each}
        {:else}
          {#each items as item, index}
            <a class="flex flex-col embla__slide xl:p-3.5 p-2.5 gap-[.4375rem] border-b border-gray-500 relative group w-full xl:h-64 lg:h-56 md:h-40 shrink-0 text-center" href={type === 'game' ? `${item.url}` : `/games/${$page.params.game}/files${item.url}`} onclick={() => select(index, item.id)} bind:this={slides[index]}>
              <div class="flex-1 bg-center bg-cover border border-gray-500" style="background-image: url({type === 'game' ? item.gameImageUrl : item.fileImageUrl});"></div>
              <div>
                {item.title}
              </div>
              {#if type === 'game'}
                <div>
                  ({item.releaseDate})
                </div>
              {/if}
              <div class="absolute inset-0 transition-colors bg-black {item.id === (type === 'game' ? gameSlideId : fileSlideId) ? 'bg-opacity-0' : 'bg-opacity-60'} group-hover:bg-opacity-0"></div>
            </a>
          {/each}
      {/if}
    </div>
  </div>
  <ContentName>
    {type === 'game' ? 'Games' : 'Documents'}
  </ContentName>
</div>