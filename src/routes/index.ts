/* TODO
    -modify this function to get this json data -> https://jsonkeeper.com/b/OHVP 
    -return it as data in place of the empty array */

export async function get() {
	const url = "https://jsonkeeper.com/b/OHVP";
	const response = await fetch(url);
	const result = await response.json();
	return {
		status: 200,
		body: {
			data: result
		}
	};
}
