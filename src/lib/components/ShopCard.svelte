<script>
	export let title = '';
	export let imgUrl = '';
	export let description = '';
	export let buttonText = '';
	export let slug = '';
</script>

<div class="card card-compact w-80 bg-base-100 shadow-xl rounded-none">
	<figure><img src={imgUrl} alt={title} /></figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
		<div class="card-actions justify-start">
			<a
				href="/{slug}"
				class="btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark rounded-none border-none"
				>{buttonText}</a
			>
		</div>
	</div>
</div>
