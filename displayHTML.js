//What we display as default
const displayUI = data => {

  //To clear the restaurant listing before printing the default
  document.getElementById("restaurant-list").innerHTML = "";

  //Iterate over the restaurants and print to the HTML
  data.forEach(restos => {
    document.getElementById("restaurant-list").innerHTML +=
      `<div class="restaurant-card">
      <div class="card-img" style="background-image: url(${restos.restaurant.thumb})">
        <div class="bubble">€${restos.restaurant.average_cost_for_two}</div>
      </div>
      <div class="card-info">
        <li><h2>${restos.restaurant.name}</h2></li>
        <p class="card-rating">	&#9733; ${restos.restaurant.user_rating.aggregate_rating} ${restos.restaurant.user_rating.rating_text}</p>
        <p>${restos.restaurant.location.address}</p>
      </div>
    </div>`
  });

};

//What we display when the filter functions is invoked
const displayUIfiltered = data => {

  //To clear the restaurant listing before printing the filtered
  document.getElementById("restaurant-list").innerHTML = "";

  //To print how many restaurants is filtered
  numbers = data.length
  document.getElementById("restaurant-number").innerHTML = `${numbers} restaurants is filtered`

  //Iterate over the restaurants and print to the HTML
  data.forEach(restos => {
    document.getElementById("restaurant-list").innerHTML +=
      `<div class="restaurant-card">
      <div class="card-img" style="background-image: url(${restos.thumb})">
        <div class="bubble">€${restos.average_cost_for_two}</div>
      </div>
      <div class="card-info">
        <li><h2>${restos.name}</h2></li>
        <p class="card-rating">	&#9733; ${restos.user_rating.aggregate_rating} ${restos.user_rating.rating_text}</p>
        <p>${restos.location.address}</p>
      </div>
    </div>`
  });

};
