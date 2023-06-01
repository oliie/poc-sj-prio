<script lang="ts">
  import type { ShopSection } from '$lib/custom-types';
  import Hero from '$lib/components/ui/Hero.svelte';
  import { t } from '$lib/services/i18n';
  import ShopCard from '$lib/components/ui/ShopCard.svelte';

  export let data: { shopList: ShopSection[] };

  $: ({ shopList } = data);

  const heroData = {
    title: 'First hotels',
    introText:
      'Dina SJ Prio-poäng kan växlas in mot värdecheckar som kan användas på alla First Hotels i Sverige.',
    imageSrc: '/images/hero1.jpg',
    imageAltText: 'Ett rapsfält under en blå sommarhimmel.'
  };
</script>

<Hero {...heroData} />

<div class="container p-4 pb-8 mx-auto">
  <div class="grid grid-cols-3 my-8">
    <div class="col-span-3 md:col-span-2">
      <h1 class="text-4xl font-bold">{t('start_page_title')}</h1>
      <!-- eslint-disable svelte/no-at-html-tags -->
      <p class="mt-4 html-content">{@html t('start_page_description')}</p>
    </div>
  </div>

  {#each shopList as { header, shops }}
    <div class="divider" />

    <h2 class="mb-4 text-2xl font-bold text-center">{header}</h2>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {#each shops as { description, imgUrl, slug, title, buttonText }}
        <ShopCard {title} {description} {imgUrl} {slug} {buttonText} />
      {/each}
    </div>
  {/each}
</div>

<style lang="postcss">
  .html-content {
    & :global(a) {
      @apply text-cyan-600 underline;
    }
  }
</style>
