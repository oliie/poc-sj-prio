<script lang="ts">
  import type { Offer } from '$lib/custom-types';
  import { t } from '$lib/services/i18n';
  import { user } from '$lib/stores/user';
  import { createEventDispatcher } from 'svelte';
  import SummaryDetails from './SummaryDetails.svelte';
  import Button from './Button.svelte';

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

<SummaryDetails {amount} {offer} />

<Button on:click={handleCloseModal} fullWidth>
  {t('close')}
</Button>
