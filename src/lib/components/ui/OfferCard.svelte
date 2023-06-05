<script lang="ts">
  import type { HeadingLevel } from '$lib/custom-types';
  import Button from '$lib/components/ui/Button.svelte';

  export let title: string;
  export let imgUrl: string;
  export let body: string;
  export let points: number;
  export let isLimited: boolean;

  let userPoints = 500;
  export let headingLevel: HeadingLevel = 'h2';
  export let imgAltText = '';
</script>

<div class="flex flex-col w-full max-w-sm rounded-none shadow-xl card card-compact bg-base-100">
  <div class="order-2 card-body">
    <svelte:element this={headingLevel} class="card-title">{title}</svelte:element>
    <p>{body}</p>
    <div class="pl-0 stat">
      <div class="text-2xl stat-value">{points}p</div>
    </div>
    <div class="justify-start card-actions">
      {#if userPoints >= points}
        <Button
          on:click
          class="w-full normal-case border-none rounded-none btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark"
        >
          Köp
        </Button>
      {/if}
    </div>
  </div>
  <figure class="relative order-1">
    <img
      src={`//wsrv.nl/?url=${imgUrl}&w=400&output=webp`}
      alt={imgAltText}
      width="400"
      height="225"
      class="w-full"
    />
    {#if isLimited}
      <div
        class="absolute bottom-0 left-0 flex items-center justify-center w-1/5 text-white bg-sj-sky-dark h-1/5"
      >
        <span class="text-sm">Få kvar</span>
      </div>
    {/if}
  </figure>
</div>
