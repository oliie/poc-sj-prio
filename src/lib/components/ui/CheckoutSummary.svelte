<script lang="ts">
  import type { Offer } from '$lib/custom-types';
  import { t } from '$lib/services/i18n';
  import { user } from '$lib/stores/user';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const handleCloseModal = () => dispatch('closeModal');

  export let offer: Offer;
  export let amount: number;
</script>

<div class="w-2/3 mx-auto text-center">
  <div class="mb-8 text-8xl">🎊</div>
  <h3 class="text-4xl font-bold">{t('summary_header')}</h3>
  <p class="py-4">{t('summary_confirmation_email')} {$user?.email}.</p>
</div>

<div class="w-full pb-6 mx-auto md:w-1/3">
  <div class="grid grid-cols-2 py-2">
    <p>{t('summary_product')}</p>
    <p class="font-bold text-right">{offer.title}</p>
  </div>
  <div class="grid grid-cols-2 py-2">
    <p>{t('summary_amount')}</p>
    <p class="font-bold text-right">{amount}</p>
  </div>
  <div class="grid grid-cols-2 py-2">
    <p>{t('summary_points')}</p>
    <p class="font-bold text-right">{offer.points * amount}</p>
  </div>
</div>

<button
  class="w-full normal-case border-none rounded-none btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark"
  on:click={handleCloseModal}
>
  {t('close')}
</button>
