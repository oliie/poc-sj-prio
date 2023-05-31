<script lang="ts">
  export let imageSrc: string;
  export let title: string;
  export let introText: string;
  export let imageAltText: string;
</script>

<div
  class="min-h-[60vh] hero bg-sj-dark-sky"
  style="background-image: url({imageSrc});"
  aria-label={imageAltText}
>
  {#if title || introText}
    <div class="hero-overlay bg-opacity-60" />
    <div class="text-left hero-content text-neutral-content">
      <div class="max-w-md">
        {#if title}<h1 class="mb-5 text-5xl font-bold hero-title">{title}</h1>{/if}
        {#if introText}<p class="mb-5">{introText}</p>{/if}
      </div>
      <slot />
    </div>
  {/if}
</div>

<style lang="postcss">
  @supports (text-wrap: balance) {
    .hero-title {
      text-wrap: balance;
    }
  }
</style>
