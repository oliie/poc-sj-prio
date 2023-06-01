<script lang="ts">
  import Hero from '$lib/components/ui/Hero.svelte';

  export let title: string;
  export let imgUrl: string;
  export let description: string;
  export let buttonText: string;
  export let slug: string;
  export let headingLevel: 'h2' | 'h3' | 'h4' = 'h3';
</script>

<div class="w-full card card-compact card-bordered bg-base-100 hover:shadow-md transition-shadow">
  <figure><img src={imgUrl} alt="" /></figure>
  <div class="card-body">
    <svelte:element this={headingLevel} class="card-title">{title}</svelte:element>
    <p>{description}</p>
    <div class="justify-start card-actions">
      <a
        href="shops/{slug}"
        class="normal-case border-none btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark"
        >{buttonText}</a
      >
    </div>
  </div>
</div>
