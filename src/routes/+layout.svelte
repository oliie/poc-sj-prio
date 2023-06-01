<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import '../app.css';
</script>

<header>
  <NavBar />
</header>

<main>
  <slot />
</main>
