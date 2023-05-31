<script lang="ts">
	import { language, locale } from '$lib/utils/languageUtil';

	export let pointsTitle;
	export let points = 0;
	export let pointsLabel;

	// TODO: Don't know if this is the right place for this but looking at the component library this property is prevalent.
	export let lang: language = language.SV;

	const pointsFormatter = new Intl.NumberFormat(locale[lang]);
	$: formattedPoints = pointsFormatter.format(points);
</script>

<div class="stats shadow">
	<div class="stat">
		<div class="stat-title">{pointsTitle}</div>
		<div class="stat-value">{formattedPoints}</div>
		<div class="stat-desc">{pointsLabel}</div>
	</div>
</div>
