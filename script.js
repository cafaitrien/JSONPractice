let house = {
  exterior: "wood siding",
  roof: "spanish tile",
  bedrooms: 2,
  bathrooms: 2,
  sqft: 1200,
  hasYard: true};

  let container = document.querySelector("div#container");

for (let key in house){
  console.log("Key: ", key, " value: ", house[key]);
  let p = document.createElement("p");
  p.innerHTML = key + ": " + house[key];
  //append it to the body
  container.appendChild(p);
}
