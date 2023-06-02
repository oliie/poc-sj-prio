<script lang="ts">
  import type { Offer } from '$lib/custom-types';
  import { createEventDispatcher } from 'svelte';
  import OfferCard from './OfferCard.svelte';

  export let offers: Offer[];

  const dispatch = createEventDispatcher();

  const handleSelectOffer = (offer: Offer) => {
    dispatch('selectOffer', { offer });
  };
</script>

<ul class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
  {#each offers as offer}
    <li>
      <OfferCard on:click={() => handleSelectOffer(offer)} {...offer} />
    </li>
  {/each}
</ul>
