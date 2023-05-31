<script lang="ts">
  export let title: string;
  export let imgUrl: string;
  export let description: string;
  export let buttonText: string;
  export let slug: string;
</script>

<div class="w-full rounded-none shadow-xl card card-compact bg-base-100">
  <figure><img src={imgUrl} alt={title} /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
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
