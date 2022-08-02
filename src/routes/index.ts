/* TODO
    -modify this function to get this json data -> https://jsonkeeper.com/b/OHVP 
    -return it as data in place of the empty array */

export async function get() {
	return {
		status: 200,
		body: {
			data: [] //return data here!
		}
	};
}
