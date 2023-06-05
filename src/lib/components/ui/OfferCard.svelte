<script lang="ts">
  import type { HeadingLevel } from '$lib/custom-types';
  import Button from '$lib/components/ui/Button.svelte';
  import { numberWithSpaces } from '$lib/utils/helpers.js';

  export let title: string;
  export let imgUrl: string;
  export let body: string;
  export let points: number;
  export let isLimited: boolean;

  let userPoints = 500;
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
        class="badge text-white text-sm bg-sj-sky-dark h-1/5 absolute border-none bottom-4 left-4"
      >
        Få kvar
      </div>
    {/if}
  </figure>

  <div class="card-body">
    <svelte:element this={headingLevel} class="card-title">{title}</svelte:element>
    <p>{body}</p>
    <div class="text-lg font-bold">{numberWithSpaces(points)}p</div>
    {#if userPoints >= points}
      <div class="justify-start card-actions">
        <Button
          on:click
          class="w-full normal-case border-none rounded-none btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark"
        >
          Köp
        </Button>
      </div>
    {/if}
  </div>
</div>
