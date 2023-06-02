<script lang="ts">
  import { page } from '$app/stores';
  import Hero from '$lib/components/ui/Hero.svelte';
  import Offers from '$lib/components/ui/Offers.svelte';

  export let data;

  const { title, description, heroImageUrl, heroImageAltText, offers } = data;

  const heroData = {
    title,
    introText: description,
    imageAltText: heroImageAltText || '',
    imageSrc: heroImageUrl
  };

  const metaTags = [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: heroImageUrl },
    { property: 'og:url', content: $page.url }
  ];
</script>

<svelte:head>
  <title>SJ Prio - {title}</title>
  {#each metaTags as { name, content, property }}
    <meta {name} {content} {property} />
  {/each}
</svelte:head>

<Hero {...heroData} />

<div class="container p-4 pb-8 mx-auto">
  <Offers {offers} />
</div>
