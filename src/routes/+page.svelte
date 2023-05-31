<script lang="ts">
	import type { ShopSection } from '$lib/custom-types';
	import Hero from '$lib/components/ui/Hero.svelte';
	import TotalPointsView from '$lib/components/ui/TotalPointsView.svelte';
	import { language } from '$lib/utils/languageUtil';

	export let data: { shopList: ShopSection[] };

	$: ({ shopList } = data);

	const heroData = {
		title: 'First hotels',
		introText:
			'Dina SJ Prio-poäng kan växlas in mot värdecheckar som kan användas på alla First Hotels i Sverige.',
		imageSrc: '/images/hero1.jpg',
		imageAltText: 'Ett rapsfält under en blå sommarhimmel.'
	};
</script>

<Hero {...heroData}>
	<TotalPointsView
		lang={language.SV}
		points={34000}
		pointsTitle="Du har"
		pointsLabel="poäng att handla för"
	/>
</Hero>

<div class="container mx-auto">
	{#each shopList as { header, shops }}
		<div class="divider" />

		<h2 class="mb-4 text-2xl font-bold text-center">{header}</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
			{#each shops as { description, imgUrl, slug, title }}
				<!-- WIP placeholder for #3: https://github.com/users/oliie/projects/1/views/1?pane=issue&itemId=29368801 -->
				<h3>{title}</h3>
			{/each}
		</div>
	{/each}
</div>
