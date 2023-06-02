<script lang="ts">
  import type { ShopList } from '$lib/custom-types';
  import { t } from '$lib/services/i18n';
  import { user } from '$lib/stores/user';
  import ShopCard from './ShopCard.svelte';

  export let shopList: ShopList[];
</script>

{#if !$user}
  <div class="alert alert-info justify-start bg-sky-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="stroke-current shrink-0 w-6 h-6"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <span>{t('login_info_box')}</span>
  </div>
{/if}

{#each shopList as { header, shops }}
  <h2 class="my-8 text-2xl font-bold text-center">{header}</h2>

  <div class="grid grid-cols-1 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-4">
    {#each shops as { description, imgUrl, slug, title }}
      <ShopCard {title} {description} {imgUrl} {slug} />
    {/each}
  </div>

  <div class="divider" />
{/each}
