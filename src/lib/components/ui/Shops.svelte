<script lang="ts">
  import type { Shop } from '$lib/custom-types';
  import ShopCard from './ShopCard.svelte';

  export let shops: Shop[];
</script>

<ul class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
  {#each shops as { description, imgUrl, slug, title }}
    <li>
      <ShopCard {title} {description} {imgUrl} {slug} />
    </li>
  {/each}
</ul>
