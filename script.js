let house = {
exterior: "wood siding",
roof: "spanish tile",
bedrooms: 2,
bathrooms: 2,
sqft: 1200,
hasYard: true};

neighborhood = [
  house,
  {
  exterior: "brick",
  roof: "galvanized aluminum",
  bedrooms: 4,
  bathrooms: 2,
  sqft: 1700,
  hasYard: true},
  {
  exterior: "river rock",
  roof: "asphalt shingle",
  bedrooms: 1,
  bathrooms: 1,
  sqft: 800,
  hasYard: false}
];

let neighborType = ["is Awesome", "is great", "is fantastic", "very Disneyesque", "is Terrible", "talks A LOT", "yells at people walking on the sidewalk"];
// TODO Randomly name our neighbors from potentially from external site to give us a wide choice of names
function drawNeighborhood(){
  let container = document.querySelector("div#container");
  container.innerHTML = "";
  for(let i=0; i<neighborhood.length; i++){

  let divider = document.createElement("p");
  divider.style.backgroundColor = "limegreen"
  divider.innerHTML = "This neighbor " + neighborType[Math.floor(neighborType.length*Math.random())];
  container.appendChild(divider);
  build(neighborhood[i], container);
}
}

function build(obj, container){
  let div = document.createElement("div");
  div.classList.add("house");
  div.style.border = "thick solid green";

  for (let key in obj){
    let p = document.createElement("p");
    p.innerHTML = key + ": " + obj[key];

    //append it to the body
    div.appendChild(p)
  }
  container.appendChild(div);
}

//New form submission handler
const form = document.querySelector("form");
form.addEventListener("submit", function(event){
  event.preventDefault()
  console.log("form is being handled!")

  let errorMessages = "";
  let newRoof = this.roof.value;
  if(newRoof === "" || newRoof.trim().length === 0){
    newRoof = "unknown";
  }
  let newExterior = this.exterior.value;
  if(newExterior === "" || newExterior.trim().length === 0){
    newExterior = "unknown";
  }

  let newBathrooms = parseFloat(this.bathrooms.value);
  if(isNaN(newBathrooms)|| newBathrooms > 5 || newBathrooms < 0.5){
    errorMessages += "Number of bathrooms must be a number between 0.5 and 5";
  }
  let newBedrooms = parseInt(this.bedrooms.value);
  if(isNaN(newBedrooms) || newBedrooms > 5 || newBedrooms < 1){
    errorMessages += "Number of bedrooms must be a number between 1 and 5";
  }
  let newSqft = parseInt(this.sqft.value);
  if(isNaN(newSqft)){
    errorMessages += "sqft is required";
  }
  let newHasYard = this.hasYard.value;
  if(isNaN(newHasYard)){
    errorMessages += "Has Yard is required";
  }
  console.log(errorMessages)
  if(errorMessages !== ""){
    //print to page, return
    let p = document.createElement("p");
    p.innerHTML = errorMessages;
    return;
  }
  else{
    //clear form fields
    //create object, put in neighborhood
    const newHouse = {
    exterior: newExterior,
    roof: newRoof,
    bedrooms: newBedrooms,
    bathrooms: newBathrooms,
    sqft: newSqft,
    hasYard: newHasYard};
  }
})

//build new house and insert in neighborhood if good
