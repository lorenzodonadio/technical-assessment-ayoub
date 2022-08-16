<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import FilterMenu from '$lib/components/FilterMenu.svelte';
	//TODO complete this type definition and apply it correctly to the incoming data
	import type { Person } from '$lib/types/personType';
	//get data from endpoint
	let countries : string[] = [];
	let selectedCountry : string = "";
	export let data : Person[];
	const getCountries = (data: Person[]) =>{
		for (let person of data) {
			if(person.country != null) {
				if(!countries.includes(person.country))
				{
					countries = [...countries, person.country]
				}
			}
		}
		countries.sort();
	}

	getCountries(data)

	let filteredPerson : Person[] = [];
	const getPersonByCountry = () => {
		 return filteredPerson = data.filter(person => person.country == selectedCountry);
	}



	$: if(selectedCountry)
	{
		getPersonByCountry();
	}

	$: console.log(filteredPerson);
</script>

<h1 class="flex justify-center mt-4 mb-5 font-bold text-lg">Technical Assessment Deerns</h1>


<FilterMenu {countries} bind:selectedCountry />

<!-- TODO: Modify the Card component to display the data. hint:pass one object as a prop -->

<div class="grid grid-cols-3 gap-3">

	{#if filteredPerson.length > 0}
		{#each filteredPerson as item }
		<Card data = {item}/>
		{/each}

	{:else}
		{#each data as item }
		<Card data = {item}/>
		{/each}

	{/if}

</div>

<!-- TODO: use an each block to display multiple cards -->
