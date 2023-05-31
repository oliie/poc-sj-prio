<script lang="ts">
  export let title: string;
  export let imgUrl: string;
  export let body: string;
  export let points: number;
  export let isLimited: boolean;

  let userPoints = 500;
</script>

<div class="card card-compact w-full bg-base-100 shadow-xl rounded-none max-w-sm">
  <figure class="relative">
    <img src={imgUrl} alt={title} class="w-full" />
    {#if isLimited}
      <div
        class="bg-sj-sky-dark text-white w-1/5 h-1/5 flex justify-center items-center absolute left-0 bottom-0"
      >
        <span>Få kvar</span>
      </div>
    {/if}
  </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{body}</p>
    <div class="stat pl-0">
      <div class="stat-value">{points}p</div>
    </div>
    <div class="card-actions justify-start">
      {#if userPoints >= points}
        <button
          class="btn btn-primary w-full bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark rounded-none border-none normal-case"
        >
          Köp
        </button>
      {/if}
    </div>
  </div>
</div>
