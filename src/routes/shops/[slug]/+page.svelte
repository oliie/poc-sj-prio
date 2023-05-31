<script lang="ts">
	import Hero from '$lib/components/ui/Hero.svelte';

	export let data;

	const { title, description, heroImageUrl, offers } = data;

	const heroData = {
		title,
		introText: description,
		imageAltText: description,
		imageSrc: heroImageUrl
	};
</script>

<Hero {...heroData} />
