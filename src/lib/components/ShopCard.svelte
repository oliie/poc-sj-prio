<script>
	export let title = '';
	export let imgUrl = '';
	export let description = '';
	export let buttonText = '';
	export let slug = '';
</script>

<div class="card card-compact w-full md:w-56 lg:w-60 2xl:w-80 bg-base-100 shadow-xl rounded-none">
	<figure><img src={imgUrl} alt={title} /></figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
		<div class="card-actions justify-start">
			<a
				href="poangshop/{slug}"
				class="btn btn-primary bg-sj-leaf-dark hover:bg-sj-leaf-hover-dark rounded-none border-none normal-case"
				>{buttonText}</a
			>
		</div>
	</div>
</div>
