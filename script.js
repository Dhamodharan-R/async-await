/* European countries speaking sweedish*/
async function nice(){
  const data = await fetch("https://restcountries.eu/rest/v2/region/europe");
  const countries = await data.json();
  let sweedish = countries.filter((x)=>{
    return x.languages[0].name === "Swedish" ;
  })
 
  sweedish.forEach((x)=>{
    console.log(x.name)
  })
}
nice()  


/* Combining two arrays from two promise*/
const europe = fetch("https://restcountries.eu/rest/v2/region/europe")
.then((data)=>data.json())


const asia = fetch("https://restcountries.eu/rest/v2/region/asia")
.then((data)=>data.json())

async function nice1(){
  const eur = await (europe);
  const asi = await (asia);
  
  let join = eur.concat(asi);
  console.log(join);
  
}

nice1();
