<script lang="ts">
  export let link = '';
  export let variant: 'primary' | 'secondary' = 'primary';
  export let fullWidth = false;
  export let disabled = false;

  let isExternalLink = /^(https?:)?\/\//.test(link);
</script>

{#if link}
  <a
    href={link}
    target={isExternalLink ? '_blank' : '_self'}
    class="button {variant}{fullWidth ? ' full-width' : ''}"
  >
    <slot />
  </a>
{:else}
  <button on:click class="button {variant}{fullWidth ? ' full-width' : ''}" {disabled}>
    <slot />
  </button>
{/if}

<style lang="postcss">
  .button {
    gap: 0.5rem;

    min-width: 64px;
    min-height: 3.5rem;
    padding: 0 1rem;

    font-size: 1.1875rem;
    font-weight: 700;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @apply inline-flex
        items-center
        justify-center
        text-center
        bg-sj-leaf
        hover:bg-sj-leaf-hover
        text-white rounded-[0.5rem];

    &[disabled] {
      color: rgba(0, 0, 0, 0.42);
      background-color: rgb(225, 225, 221);
    }

    &.secondary {
      @apply bg-sj-meadow text-sj-label font-normal;
    }

    &.full-width {
      @apply w-full flex-shrink-0 flex-grow;
    }
  }
</style>
