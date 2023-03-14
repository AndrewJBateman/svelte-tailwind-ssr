<script>
	// core components
	const globeLoc = '../assets/globe.jpg';
</script>

<nav
	class="flex flex-row content-center justify-between w-full font-sans text-center text-white bg-blue-900 shadow sm:items-baseline"
>
	<!--navbar LHS-->
	<div class="self-center">
		<a class="mx-2 bg-blue-900" aria-label="home nav link" href="/">
			<div class="flex mx-2">
				<img class="mx-2 hover:bg-blue-400" src={globeLoc} width="30" height="30" alt="Globe" />
				<p class="pt-1 hover:bg-blue-400">Countries</p>
			</div>
		</a>
	</div>

	<!--navbar RHS-->
	<div class="self-center">
		<a class="bg-blue-900 mx-4 rounded hover:bg-blue-400" aria-label="about nav link" href="/about"
			>About</a
		>
		<a
			class="bg-blue-900 mx-4 rounded hover:bg-blue-400"
			aria-label="contact nav link"
			href="/contact">Contact</a
		>
	</div>
</nav>
