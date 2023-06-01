<script lang="ts">
  import Hero from '$lib/components/ui/Hero.svelte';

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

<h2>Här ska ett gäng grejer in</h2>

<ul>
  {#each offers as { title, body, points }}
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  {/each}
</ul>
