<script lang="ts">
  import Hero from '$lib/components/ui/Hero.svelte';
  import Offers from '$lib/components/ui/Offers.svelte';

  export let data;

  const { title, description, heroImageUrl, heroImageAltText, offers } = data;
  console.log(offers);

  const heroData = {
    title,
    introText: description,
    imageAltText: heroImageAltText || '',
    imageSrc: heroImageUrl
  };
</script>

<Hero {...heroData} />

<div class="container p-4 pb-8 mx-auto">
  <Offers {offers} />
</div>
