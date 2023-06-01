<script lang="ts">
  import type { Offer } from '$lib/custom-types';

  export let show = false;
  export let offer: Offer;

  let modal: HTMLDialogElement;

  $: ({ title, points, body } = offer);
  $: if (modal) show ? modal.showModal() : modal.close();

  const handleOutsideClick = (e: MouseEvent) => {
    const dialogDimensions = modal.getBoundingClientRect();
    const isOutsideDialog =
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom;

    if (isOutsideDialog) {
      show = false;
      modal.close();
    }
  };

  const handleClose = () => {
    show = false;
    modal.close();
  };
</script>

<!-- Disabled since screen readers can't click outside -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  class="w-full transition-all backdrop:bg-black/50 sm:w-1/2"
  bind:this={modal}
  on:click={handleOutsideClick}
>
  <h3 class="text-2xl font-bold">{title}</h3>

  <p class="py-2 pb-4 text-sm">{body}</p>

  <div class="grid grid-cols-2 gap-4">
    <button
      class="w-full normal-case rounded-none text-sj-leaf border-sj-leaf btn btn-outline hover:bg-gray-100 hover:border-sj-leaf hover:text-sj-leaf"
      on:click={handleClose}>Stäng</button
    >
    <button
      class="w-full normal-case border-none rounded-none btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark"
      on:click={handleClose}
    >
      Använd {points}p
    </button>
  </div>
</dialog>
