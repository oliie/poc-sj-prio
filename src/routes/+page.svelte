<script>
	import Hero from '$lib/components/ui/Hero.svelte';
	import TotalPointsView from '$lib/components/ui/TotalPointsView.svelte';
	import { language } from '$lib/utils/languageUtil';

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
