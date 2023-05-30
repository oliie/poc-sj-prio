<button class="root">
	<slot />
</button>

<style lang="postcss">
	.root {
		@apply rounded-lg;
		@apply w-full;
		@apply px-4;
		@apply py-[0.875rem];
		@apply bg-sj-leaf;
		@apply hover:bg-sj-leaf-hover;
		@apply text-sj-label-dark;
		@apply text-xl;
		@apply font-bold;
		@apply transition-all;
		@apply duration-[250ms];
	}
</style>
