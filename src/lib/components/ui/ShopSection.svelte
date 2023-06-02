<script lang="ts">
  import type { ShopList } from '$lib/custom-types';
  import ShopCard from './ShopCard.svelte';

  export let shopList: ShopList[];
</script>

{#each shopList as { header, shops }}
  <h2 class="my-8 text-2xl font-bold text-center">{header}</h2>

  <div class="grid grid-cols-1 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-4">
    {#each shops as { description, imgUrl, slug, title }}
      <ShopCard {title} {description} {imgUrl} {slug} />
    {/each}
  </div>

  <div class="divider" />
{/each}
