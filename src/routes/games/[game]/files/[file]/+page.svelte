<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import gameStore from '../../../../../stores/gameStore'
  import { page } from '$app/stores'
  import Content from '$lib/components/Content.svelte'
  import ContentName from '$lib/components/ContentName.svelte'
  import ImageContent from '$lib/components/ImageContent.svelte'
  import TextContent from '$lib/components/TextContent.svelte'
  import ContentWrapper from '$lib/components/ContentWrapper.svelte'
  import Image from '$lib/components/Image.svelte'
  import Credit from '$lib/components/Credit.svelte'

  let options = { loop: true }
  let emblaApi = $state()
  function onInit(event) {
    emblaApi = event.detail
  }
</script>

<svelte:head>
  {#each $gameStore as game}
    {#each game.files as file}
      {#if `${game.url}${file.url}` === `/games/${$page.params.game}/files/${$page.params.file}`}
        <title>{file.title}</title>
      {/if}
    {/each}
  {/each}
</svelte:head>

{#each $gameStore as game}
  {#each game.files as file}
    {#if `${game.url}${file.url}` === `/games/${$page.params.game}/files/${$page.params.file}`}
      <ContentWrapper additionalClasses='xl:w-[40rem] lg:w-[calc(100svw-34rem)] md:w-[calc(100svw-25rem)]'>
        <Content>
          <ImageContent>
            <Image src={file.fileImageUrl} alt={`${file.title} file image`} />
            <Credit imageSourceUrl={file.fileImageSourceUrl} imageSource={file.fileImageSource} />
          </ImageContent>
          <ContentName type='special'>
            Document Image
          </ContentName>
        </Content>
        {#if file.location}
          <Content>
            {#each file.location as location}
              <Content>
                {#if location.locationImageUrl}
                  <ImageContent>
                    <Image src={location.locationImageUrl} alt={`${file.title} in-game location`} />
                    {#if location.locationImageSource}
                      <Credit imageSourceUrl={location.locationImageSourceUrl} imageSource={location.locationImageSource} />
                    {/if}
                  </ImageContent>
                {/if}
                {#if location.mapImageUrl}
                  <ImageContent>
                    {#if typeof location.mapImageUrl === 'object'}
                      <div class="relative overflow-hidden embla" use:emblaCarouselSvelte={{ options }} onemblaInit={onInit}>
                        <div class="flex embla__container">
                          <div class="w-full embla__slide shrink-0">
                            <Image src={location.mapImageUrl.default} alt={`${file.title} location on the map`} />
                          </div>
                          <div class="w-full embla__slide shrink-0">
                            <Image src={location.mapImageUrl.near} alt={`${file.title} near-view location on the map`} />
                          </div>
                          <div class="w-full embla__slide shrink-0">
                            <Image src={location.mapImageUrl.far} alt={`${file.title} far-view location on the map`} />
                          </div>
                        </div>
                        <button class="absolute inset-y-0 left-0 w-10 transition-opacity hover:opacity-60" onclick={() => emblaApi.scrollPrev()}>
                          <svg class="absolute w-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" color="#ffffff" viewBox="7 4 9 16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button class="absolute inset-y-0 right-0 w-10 transition-opacity hover:opacity-60" onclick={() => emblaApi.scrollNext()}>
                          <svg class="absolute w-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" color="#ffffff" viewBox="8 4 9 16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                      </div>
                      {:else}
                        <Image src={location.mapImageUrl} alt={`${file.title} location on the map`} />
                    {/if}
                    {#if location.mapImageSource}
                      <Credit imageSourceUrl={location.mapImageSourceUrl} imageSource={location.mapImageSource} />
                    {/if}
                  </ImageContent>
                {/if}
                <ContentName type='special'>
                  {location.text}
                </ContentName>
              </Content>
            {/each}
          </Content>
        {/if}
        <Content additionalClasses='text-white'>
          <TextContent additionalClasses='xl:leading-[3rem] lg:leading-[2.75rem] md:leading-9 leading-8'>
            {#each file.originalContent as content}
              <p style={`text-align: ${content.paragraphDirection}`}>
                {content.paragraph}
              </p>
            {/each}
            <ContentName type='special'>
              English Script
            </ContentName>
          </TextContent>
          <TextContent additionalClasses='tracking-normal [direction:rtl] font-b-mitra xl:leading-[2.75rem] lg:leading-10 md:leading-9 leading-8 xl:text-xl text-lg'>
            {#each file.farsiContent as content}
              <p style={`text-align: ${content.paragraphDirection}`}>
                {content.paragraph}
              </p>
            {/each}
            <ContentName type='special'>
              ترجمۀ فارسی
            </ContentName>
          </TextContent>
        </Content>
      </ContentWrapper>
    {/if}
  {/each}
{/each}
