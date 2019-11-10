//FUNCTIONS
//Function to filter on review rating text good/very good
const filterOnReviews = (restos, rating) => {
	let newArray = restos.filter((rest) => {
		return rest.user_rating.rating_text === rating;
	});

	return newArray;
};

//Function to compare each restaurants average cost to the others?
const compare = (a, b) => {
	const restA = a.average_cost_for_two;
	const restB = b.average_cost_for_two;

	let compare = 0;
	if (restA > restB) {
		compare = 1;
	} else if (restA < restB) {
		compare = -1;
	}
	return compare;
};

//Function to sort the restaurants with the compare result
const sortByPrice = restoArray => {
	return restoArray.sort(compare);
};

//Function for filtering on price range
const filterPriceRange = () => {
	//Gets the chosen value in the form
	const priceRangeElement = document.getElementById("price-ranges").value;
	//Split the chosen value since there are two values in the coice
	const priceRange = priceRangeElement.split("-");
	//Creates a variable for each chosen value
	const priceRangeLow = parseInt(priceRange[0]);
	const priceRangeHigh = parseInt(priceRange[1]);
	//Creates a temporary array with the items from restoArray by using map()
	const tempArray = restoArray.map(item => {
		return item.restaurant;
	});
	//filteredCuisines returns the restaurants that has average price for two between our chosen values in the filter-form
	filteredCuisines = tempArray.filter(item => {
		return (
			item.average_cost_for_two <= priceRangeHigh &&
			item.average_cost_for_two >= priceRangeLow
		);
	});
};

//ADD EVENT LISTENER
//Declare the the filter-form from HTML
const form = document.getElementById("filters");

//Adds eventlistener when submitting the filter-form
form.addEventListener("submit", e => {
	e.preventDefault();

	//If the option for price ranges is anything but none, invoke the function for filterPriceRange
	if (document.getElementById("price-ranges").value !== "no-price") {
		filterPriceRange();
	}
	//If the option for sorting y price is checked, invoke the function sortByPrice with the argument filteredCuisines
	if (document.getElementById("sort-by-price").checked) {
		sortByPrice(filteredCuisines);
	}
	//If the option for review ranges is anything bot none, ??
	if (document.getElementById("review-ranges").value !== "no-review") {
		const review = document.getElementById("review-ranges").value;
		filteredCuisines = filterOnReviews(filteredCuisines, review);
	}

	displayUIfiltered(filteredCuisines);
});


