<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import '../app.css';
</script>

<nav>
  <NavBar />
</nav>

<main>
  <slot />
</main>
