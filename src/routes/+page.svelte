<script lang="ts">
  import Hero from '$lib/components/ui/Hero.svelte';
  import { t } from '$lib/services/i18n';
  import ShopSection from '$lib/components/ui/ShopSection.svelte';
  import type { ShopList } from '$lib/custom-types';

  export let data: { shopList: ShopList[] };

  const heroData = {
    title: t('start_page_hero_title'),
    introText: t('start_page_description'),
    imageSrc:
      'https://www.sj.se/content/dam/externt/bilder/natur-landskap/rapsfaltmedskogruntom-2019.jpg/jcr:content/renditions/cq5dam.web.bg.1920.y.jpg',
    imageAltText: t('start_page_hero_alt_text')
  };

  $: ({ shopList } = data);
</script>

<svelte:head>
  <title>SJ Prio</title>
  <meta
    name="description"
    content="Använd dina SJ Prio-poäng till bl.a. biobiljetter, ljudböcker och mer. Besök SJ Prios Poängshop här och nyttja dina poäng!"
  />
</svelte:head>

<Hero {...heroData} />

<div class="container p-4 pb-8 mx-auto">
  <ShopSection {shopList} />
</div>
