<script lang="ts">
  import Hero from '$lib/components/ui/Hero.svelte';
  import { t } from '$lib/services/i18n';
  import ShopSection from '$lib/components/ui/ShopSection.svelte';
  import type { ShopList } from '$lib/custom-types';

  export let data: { shopList: ShopList[] };

  const heroData = {
    title: t('start_page_hero_title'),
    introText: t('start_page_hero_description'),
    imageSrc:
      'https://www.sj.se/content/dam/externt/bilder/natur-landskap/rapsfaltmedskogruntom-2019.jpg/jcr:content/renditions/cq5dam.web.bg.1920.y.jpg',
    imageAltText: t('start_page_hero_alt_text')
  };

  $: ({ shopList } = data);
</script>

<svelte:head>
  <title>SJ Prio</title>
</svelte:head>

<Hero {...heroData} />

<div class="container p-4 pb-8 mx-auto">
  <div class="grid grid-cols-3 my-8">
    <div class="col-span-3 md:col-span-2">
      <h1 class="text-4xl font-bold">{t('start_page_title')}</h1>
      <!-- eslint-disable svelte/no-at-html-tags -->
      <p class="mt-4 html-content">{@html t('start_page_description')}</p>
    </div>
  </div>

  <ShopSection {shopList} />
</div>

<style lang="postcss">
  .html-content {
    & :global(a) {
      @apply text-cyan-600 underline;
    }
  }
</style>
