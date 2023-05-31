<script lang="ts">
  export let imageSrc: string;
  export let title: string;
  export let introText: string;
  export let imageAltText: string;
</script>

<div class="hero h-[61.8vmax] max-h-[min(70vh,1280px)] bg-sj-dark-sky">
  {#if imageSrc}<div class="w-full h-full overflow-hidden">
      <img
        class="object-cover object-center h-full w-full block"
        src={imageSrc}
        alt={imageAltText}
      />
    </div>
  {/if}
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
