import App from './App.svelte';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath(document.currentScript.src);

// Since we aren't passing any arguments to defineCustomElements, this will define all of the available components. You can also import just what you need: https://developers.arcgis.com/calcite-design-system/framework-examples/rollup/
defineCustomElements();

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;