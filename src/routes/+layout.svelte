<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import '../app.css';
</script>

<svelte:head>
  <meta name="author" content="SJ" />
</svelte:head>

<header>
  <NavBar />
</header>

<main>
  <slot />
</main>
