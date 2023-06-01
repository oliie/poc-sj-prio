<script lang="ts">
  import type { Offer } from '$lib/custom-types';
  import OfferCard from './OfferCard.svelte';

  export let offers: Offer[];
</script>

<ul class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
  {#each offers as offer}
    <li>
      <OfferCard {...offer} />
    </li>
  {/each}
</ul>
