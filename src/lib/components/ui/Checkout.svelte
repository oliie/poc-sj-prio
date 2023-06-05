<script lang="ts">
  import type { Offer } from '$lib/custom-types';
  import { t } from '$lib/services/i18n';
  import { user } from '$lib/stores/user';
  import { createEventDispatcher } from 'svelte';
  import CheckoutSummary from './CheckoutSummary.svelte';
  import { numberWithSpaces } from '$lib/utils/helpers.js';
  import Button from '$lib/components/ui/Button.svelte';

  export let offer: Offer;

  let amount = 1;
  let acceptedTerms = false;
  let purchaseSuccessful = false;
  let loading = false;

  $: ({ title, points, body } = offer);
  $: tooExpensive = $user && $user?.points < points * amount;
  $: disableCheckoutButton = !acceptedTerms || tooExpensive || loading;

  const dispatch = createEventDispatcher();

  const incrementAmount = () => amount++;
  const decrementAmount = () => amount > 1 && amount--;

  const handleCloseModal = () => {
    amount = 1;
    acceptedTerms = false;
    purchaseSuccessful = false;
    dispatch('closeModal');
  };

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    mockSuccessfulPurchase();
  };

  function mockSuccessfulPurchase() {
    const apiTimerMs = 1200;

    loading = true;
    setTimeout(() => {
      purchaseSuccessful = user.withdrawPoints(points * amount);
      loading = false;
    }, apiTimerMs);
  }
</script>

{#if $user && $user.points < points}
  <h3 class="my-4 text-4xl font-bold">{t('not_enough_points_header')}</h3>
  <p>{t('not_enough_points_description')}</p>

  <div class="pt-4">
    <Button fullWidth on:click={handleCloseModal}>
      {t('close')}
    </Button>
  </div>
{:else if purchaseSuccessful}
  <CheckoutSummary {offer} {amount} on:closeModal={handleCloseModal} />
{:else}
  <h3 class="pb-4 text-2xl font-bold">{title}</h3>

  <p class="text-sm">{body}</p>

  <div class="w-full mx-auto my-4 md:w-2/3">
    <div class="divider" />
    <div class="flex justify-between">
      <div class="self-start">{title}</div>
      <div class="self-end">
        <button
          class="border-none btn btn-sm btn-circle bg-sj-leaf hover:bg-sj-leaf-hover"
          on:click={decrementAmount}
        >
          -
        </button>
        <div class="inline-block w-8 text-center">{amount}</div>
        <button
          class="border-none btn btn-sm btn-circle bg-sj-leaf hover:bg-sj-leaf-hover"
          on:click={incrementAmount}
        >
          +
        </button>
      </div>
    </div>

    <div class="mt-4 form-control">
      <label class="cursor-pointer label">
        <span class="label-text">{t('accept_terms')}</span>
        <input
          type="checkbox"
          bind:checked={acceptedTerms}
          class="checkbox checkbox-success checked:bg-sj-leaf"
        />
      </label>
    </div>

    <div class="divider" />

    <div class="text-sm text-center text-gray-400">
      {t('confirmation_will_be_sent_to')}
      {$user?.email}
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
    <Button on:click={handleCloseModal} variant="secondary">{t('close')}</Button>

    <Button on:click={handleCheckout} disabled={disableCheckoutButton}>
      {#if tooExpensive}
        {t('not_enough_points_header')}
      {:else if loading}
        {t('handling_purchase')}
      {:else}
        {t('use')}
        {numberWithSpaces(points * amount)}p
      {/if}
    </Button>
  </div>
{/if}
