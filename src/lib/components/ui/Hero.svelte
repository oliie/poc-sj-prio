<script lang="ts">
  export let imageSrc: string;
  export let title: string;
  export let introText: string;
  export let imageAltText: string;
</script>

<div class="hero md:h-[61.8vh] h-[40vh] bg-sj-dark-sky overflow-y-hidden">
  {#if imageSrc}
    <div class="w-full h-full overflow-hidden">
      <img
        class="block object-cover object-center w-full h-full"
        src={`//wsrv.nl/?url=${imageSrc}&w=1920&output=webp`}
        alt={imageAltText}
        width="1920"
        height="630"
      />
    </div>
  {/if}
  {#if title || introText}
    <div class="hero-overlay bg-opacity-60" />
    <div class="text-left hero-content text-neutral-content">
      <div class="max-w-md">
        {#if title}<h1 class="mb-5 text-5xl font-bold hero-title">{title}</h1>{/if}
        <!-- eslint-disable svelte/no-at-html-tags -->
        {#if introText}<p class="mb-5 html-content">{@html introText}</p>{/if}
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  @supports (text-wrap: balance) {
    .hero-title {
      text-wrap: balance;
    }
  }

  .html-content {
    & :global(a) {
      @apply text-cyan-200 underline;
    }
  }
</style>
