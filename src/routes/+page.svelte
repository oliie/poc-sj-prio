<script lang="ts">
  import Hero from '$lib/components/ui/Hero.svelte';
  import TotalPointsView from '$lib/components/ui/TotalPointsView.svelte';
  import { language } from '$lib/utils/languageUtil';
  import { t } from '$lib/services/i18n';
  import ShopSection from '$lib/components/ui/ShopSection.svelte';
  import type { ShopList } from '$lib/custom-types';

  export let data: { shopList: ShopList[] };

  $: ({ shopList } = data);

  const heroData = {
    title: 'First hotels',
    introText:
      'Dina SJ Prio-poäng kan växlas in mot värdecheckar som kan användas på alla First Hotels i Sverige.',
    imageSrc:
      'https://www.sj.se/content/dam/externt/bilder/natur-landskap/rapsfaltmedskogruntom-2019.jpg/jcr:content/renditions/cq5dam.web.bg.1920.y.jpg',
    imageAltText: 'Ett rapsfält under en blå sommarhimmel.'
  };
</script>

<Hero {...heroData}>
  <TotalPointsView
    lang={language.SV}
    points={34000}
    pointsTitle="Du har"
    pointsLabel="poäng att handla för"
  />
</Hero>

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
