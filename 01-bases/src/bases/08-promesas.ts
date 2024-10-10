import type{ Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";



const getHeroByIdAsync = ( id:number ):Promise<Hero>=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const hero = getHeroById(id);
            hero ? resolve(hero):reject(`Heroe no encontrado #${id}`)                
        }, 1500);
    })
}

getHeroByIdAsync(1)
    .then(hero=> console.log("El nombre del heroe es",hero.name))
    .catch(console.log)