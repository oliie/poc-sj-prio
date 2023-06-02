<script lang="ts">
  export let show = false;

  let modal: HTMLDialogElement;

  $: if (modal) {
    show ? modal.showModal() : modal.close();
  }

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
</script>

<!-- Won't use a on:key-event since screen readers can't click outside -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  class="w-full p-6 transition-all rounded-lg backdrop:bg-black/50 lg:w-1/2 md:2/3"
  bind:this={modal}
  on:click={handleOutsideClick}
>
  <slot />
</dialog>
