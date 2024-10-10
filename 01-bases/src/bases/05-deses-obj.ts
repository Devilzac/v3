interface Hero {
    name:string;
    age:number;
    codeName:string;
    power?: string;

}

export const person: Hero = {
  name: "Tony",
  age: 45,
  codeName: "Ironman",
};


interface CreateHeroArgs {
    name:string;
    age:number;
    codeName:string;
    power?: string;
}
const { name, age, codeName, power ='No tiene poder' } = person;



const createHero = ({ name, age, codeName, power  }:CreateHeroArgs)=>({
    id: 123,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})

console.log(createHero({}));
