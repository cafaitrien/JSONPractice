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
for(let i=0; i<neighborhood.length; i++){
  let container = document.querySelector("div#container");
  let divider = document.createElement("p");
  divider.style.backgroundColor = "limegreen"
  divider.innerHTML = "This neighbor " + neighborType[Math.floor(neighborType.length*Math.random())];
  container.appendChild(divider);
  build(neighborhood[i], container);

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
