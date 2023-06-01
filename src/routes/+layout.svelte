<script>
  import '../app.css';
  import Header from '$lib/components/HeaderProvider.svelte';
</script>

<svelte:head>
  <meta name="author" content="SJ" />
</svelte:head>

<Header />

<main>
  <slot />
</main>
