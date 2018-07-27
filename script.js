let house = {
exterior: "wood siding",
roof: "spanish tile",
bedrooms: 2,
bathrooms: 2,
sqft: 1200,
hasYard: true};

neightborhood = [
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

function build(obj){
  let container = document.querySelector("div#container");

  for (let key in obj){
    let p = document.createElement("p");
    p.innerHTML = key + ": " + obj[key];
    //append it to the body
    container.appendChild(p);
  }
}
