//Script for fetching the API and what to dispay on default

//Variables for the fetch
const apiKey = "93dfda349bc834d0a83157076ecca92f";
const cityId = 91; // Dublin
const cityDescription = "Dublin";
const cuisineId = 82; // Pizza
const cuisineDescription = "Pizza";

//Global variables
let numbers = 0
let filteredCuisines = [];
let restoArray = [];

fetch(
	`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`,
	{ headers: { "user-key": apiKey } }
)
	.then(response => {
		return response.json();
	})
	.then(json => {
		restoArray = json.restaurants;

		displayUI(restoArray);

	})
	.catch(err => {
		return err;
	});
