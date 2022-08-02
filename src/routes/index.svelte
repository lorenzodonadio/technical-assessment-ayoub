<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	//TODO complete this type definition and apply it correctly to the incoming data
	import type { Person } from '$lib/types/personType';
	//get data from endpoint
	export let data;
</script>

<h1>Technical Assessment Deerns</h1>

<!-- TODO: Modify the Card component to display the data. hint:pass one object as a prop -->
<Card />
<!-- TODO: use an each block to display multiple cards -->
