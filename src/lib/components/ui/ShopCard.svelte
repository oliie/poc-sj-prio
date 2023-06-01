<script lang="ts">
  import { onMount } from 'svelte';
  import type { HeadingLevel } from '$lib/custom-types';

  let card;
  let mainLink;

  export let title: string;
  export let imgUrl: string;
  export let description: string;
  export let slug: string;
  export let headingLevel: HeadingLevel = 'h3';

  onMount(() => {
    card.onclick = handleClick;
    mainLink.onclick = (event) => event.stopPropagation();
  });

  function handleClick(event) {
    const isTextSelected = window.getSelection().toString();
    if (!isTextSelected) {
      mainLink.click();
    }
  }
</script>

<div
  bind:this={card}
  class="w-full card card-compact card-bordered rounded-[8px] bg-base-100 hover:shadow-md transition-shadow cursor-pointer"
>
  <figure>
    <img src={`//wsrv.nl/?url=${imgUrl}&w=400&output=webp`} alt="" width="400" height="225" />
  </figure>
  <div class="card-body">
    <svelte:element this={headingLevel} class="card-title"
      ><a href="shops/{slug}" bind:this={mainLink}>{title}</a></svelte:element
    >
    <p>{description}</p>
  </div>
</div>
