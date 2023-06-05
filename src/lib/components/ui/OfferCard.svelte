<script lang="ts">
  import type { HeadingLevel } from '$lib/custom-types';
  import { user } from '$lib/stores/user';
  import Button from '$lib/components/ui/Button.svelte';
  import { numberWithSpaces } from '$lib/utils/helpers.js';
  import { t } from '$lib/services/i18n';

  export let title: string;
  export let imgUrl: string;
  export let body: string;
  export let points: number;
  export let isLimited: boolean;
  export let headingLevel: HeadingLevel = 'h2';
  export let imgAltText = '';
</script>

<div
  class="h-full w-full card card-compact card-bordered rounded-[8px] bg-base-100 hover:shadow-md transition-shadow"
>
  <figure class="relative">
    <img
      src={`//wsrv.nl/?url=${imgUrl}&w=400&output=webp`}
      alt={imgAltText}
      width="400"
      height="225"
      class="w-full"
    />
    {#if isLimited}
      <div
        class="absolute text-sm text-white border-none badge bg-sj-sky-dark h-1/5 bottom-4 left-4"
      >
        {t('limited_amount')}
      </div>
    {/if}
  </figure>

  <div class="card-body">
    <svelte:element this={headingLevel} class="card-title">{title}</svelte:element>
    <p>{body}</p>
    <div class="flex items-center justify-between gap-2 flex-">
      <div class="text-lg font-bold">{numberWithSpaces(points)}p</div>
      {#if $user}
        <div class="justify-start card-actions">
          <Button on:click>
            {t('buy')}
          </Button>
        </div>
      {/if}
    </div>
  </div>
</div>
