<script lang="ts">
  import type { Offer } from '$lib/custom-types';
  import { t } from '$lib/services/i18n';
  import { user } from '$lib/stores/user';
  import { createEventDispatcher } from 'svelte';

  export let offer: Offer;
  $: ({ title, points, body } = offer);
  $: tooExpensive = $user && $user?.points < points * amount;

  let amount = 1;
  let acceptedTerms = false;
  let purchaseSuccessful = false;

  const dispatch = createEventDispatcher();

  const increment = () => amount++;
  const decrement = () => amount > 1 && amount--;

  const handleCloseModal = () => {
    amount = 1;
    acceptedTerms = false;
    purchaseSuccessful = false;
    dispatch('closeModal');
  };

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    // 1. Remove points from user

    purchaseSuccessful = true;
  };
</script>

{#if $user && $user?.points < points}
  <h3 class="my-4 text-4xl font-bold">{t('not_enough_points_header')}</h3>
  <p>{t('not_enough_points_description')}</p>
  <button
    class="w-full mt-6 normal-case border-none rounded-none btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover"
    on:click={handleCloseModal}
  >
    {t('close')}
  </button>
{:else if purchaseSuccessful}
  HTMLObjectElement
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
          on:click={decrement}
        >
          -
        </button>
        <div class="inline-block w-8 text-center">{amount}</div>
        <button
          class="border-none btn btn-sm btn-circle bg-sj-leaf hover:bg-sj-leaf-hover"
          on:click={increment}
        >
          +
        </button>
      </div>
    </div>

    <div class="mt-4 form-control">
      <label class="cursor-pointer label">
        <span class="label-text">{t('accept_terms')}</span>
        <input type="checkbox" bind:checked={acceptedTerms} class="checkbox checkbox-success" />
      </label>
    </div>

    <div class="divider" />

    <div class="text-sm text-right text-gray-400">
      {t('confirmation_will_be_sent_to')}
      {$user?.email}
    </div>
  </div>

  <div class="grid grid-cols-2 gap-4 pt-4">
    <button
      class="w-full normal-case rounded-none text-sj-leaf border-sj-leaf btn btn-outline hover:bg-gray-100 hover:border-sj-leaf hover:text-sj-leaf"
      on:click={handleCloseModal}
    >
      {t('close')}
    </button>
    <button
      class="w-full normal-case border-none rounded-none btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark"
      on:click={handleCheckout}
      disabled={!acceptedTerms || tooExpensive}
    >
      {#if tooExpensive}
        {t('not_enough_points_header')}
      {:else}
        {t('use')}
        {points * amount}p
      {/if}
    </button>
  </div>
{/if}
