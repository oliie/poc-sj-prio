<script lang="ts">
  export let title: string;
  export let imgUrl: string;
  export let description: string;
  export let buttonText: string;
  export let slug: string;
  export let headingLevel: 'h2' | 'h3' | 'h4' = 'h3';
</script>

<div class="w-full rounded-none shadow-xl card card-compact bg-base-100">
  <figure>
    <!-- TODO: Ändra alt till korrekt -->
    <img
      src={`//wsrv.nl/?url=${imgUrl}&w=400&output=webp`}
      alt={description}
      width="400"
      height="225"
    />
  </figure>
  <div class="card-body">
    <svelte:element this={headingLevel} class="card-title">{title}</svelte:element>
    <p>{description}</p>
    <div class="justify-start card-actions">
      <a
        href="shops/{slug}"
        class="normal-case border-none rounded-none btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark"
        >{buttonText}</a
      >
    </div>
  </div>
</div>
