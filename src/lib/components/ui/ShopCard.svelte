<script lang="ts">
  import type { HeadingLevel } from '$lib/custom-types';
  import { goto } from '$app/navigation';

  export let title: string;
  export let imgUrl: string;
  export let description: string;
  export let slug: string;
  export let headingLevel: HeadingLevel = 'h3';

  function handleClick() {
    const isTextSelected = window.getSelection().toString();
    if (!isTextSelected) {
      goto(`shops/${slug}`);
    }
  }
</script>

<!-- Added this ignore since screen readers can safely ignore the onClick behavior in this case and go directly to the actual <a>-tag -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={handleClick}
  class="w-full card card-compact card-bordered rounded-[8px] bg-base-100 hover:shadow-md transition-shadow cursor-pointer card-focused"
>
  <figure>
    <img src={`//wsrv.nl/?url=${imgUrl}&w=400&output=webp`} alt="" width="400" height="225" />
  </figure>
  <div class="card-body">
    <svelte:element this={headingLevel} class="card-title"
      ><a href="shops/{slug}" on:click|stopPropagation class="card-link-focused">{title}</a></svelte:element
    >
    <p>{description}</p>
  </div>
</div>
