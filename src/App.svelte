<script>
	// If you want to import each component directly instead of importing all (see main.js), this
	// is how it would work:
	// import { CalciteIcon } from '@esri/calcite-components/';
	// customElements.define('calcite-icon', CalciteIcon);

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<calcite-icon icon="banana" />

	<calcite-dropdown>
		<calcite-button slot="dropdown-trigger">Open Dropdown</calcite-button>
		<calcite-dropdown-group>
			<calcite-dropdown-item>Relevance</calcite-dropdown-item>
			<calcite-dropdown-item active>Date modified</calcite-dropdown-item>
			<calcite-dropdown-item>Title</calcite-dropdown-item>
		</calcite-dropdown-group>
	</calcite-dropdown>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>