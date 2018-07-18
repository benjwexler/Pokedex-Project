// const multiplyES6 = (x, y) => { return x * y };

let percentAdded = 22

let initiate = () => {
    let mainScreenParent = document.getElementById("mainScreenParent");
    mainScreenParent.style.display="inline";
    let btn = document.getElementById("start");
    btn.style.display="none";
    let prev=document.getElementById("prev");
    prev.style.display="inline";
    let next=document.getElementById("next");
    next.style.display="inline";
}

setTimeout(initiate, 1200);

let hpNumber = document.getElementById("hpNumber");
let attackNumber = document.getElementById("attackNumber");
let defenseNumber = document.getElementById("defenseNumber");
let name = document.getElementById("name");
// let talents = document.getElementById("arrayOfSkills");
let image= document.getElementById("image");

class Pokemon {
    constructor(name, hp, attack, defense, abilities, picUrl) {
        this.name = name
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.picUrl = picUrl
    }
};

class Trainer {
    constructor() {
        this.listOfPokemon = {};
    }
    all() {
        // console.log(this.listOfPokemon);
        return Object.values(this.listOfPokemon);
    };

    get(nameOfPoke) {
        return (this.listOfPokemon[nameOfPoke])

    }
    add(pokemonObject) {
        this.listOfPokemon[pokemonObject.name] = pokemonObject
    }
};

let ben = new Trainer();

let nameOfPokemon = "charizard";

link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;

// link = "https://pokeapi-nycda.firebaseio.com/pokemon/25.json"

function changePoke(link) {
    axios.get(link).then((response) => {
        let allData = response.data;
        console.log(allData);
        let statistics = allData.stats;
        // console.log(statistics);

        // name 
        let pokeName = allData.name;
        // console.log(pokeName);
        // hp level
        let aychPee = statistics[5].base_stat;
        // attack level
        let pokeAttack = statistics[4].base_stat;
        // defense level
        let pokeDefense = statistics[3].base_stat;

        let pic = allData.sprites.front_default;

        // abilities - array of strings
        let arrayOfSkills = [];
        let skills = allData.abilities;
        skills.forEach((element) => {
            arrayOfSkills.push(element.ability.name)
        })

        let pokemon = new Pokemon(pokeName, aychPee, pokeAttack, pokeDefense, arrayOfSkills, pic);

        ben.add(pokemon);

        // ben.get(pokemon.pokeName)
        
    }).then( () => {

        image.src = ben.get(nameOfPokemon).picUrl;


        hpNumber.innerText=ben.get(nameOfPokemon).hp;


        attackNumber.innerText=ben.get(nameOfPokemon).attack;


        defenseNumber.innerText=ben.get(nameOfPokemon).defense;

        // let arrayOfSkills = document.getElementById("arrayOfSkills");
        // arrayOfSkills.innerText=ben.listOfPokemon.charmander.abilities;

        let lowerCaseName = ben.get(nameOfPokemon).name;

        let upperCaseName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);

        name.innerText=upperCaseName;
        // name.innerText=ben.get(nameOfPokemon).name;


        // talents.innerText=(ben.get(nameOfPokemon).abilities).toString()
        // talents.innerText="blah"

        let hpBar = document.getElementById("hpParent");
        let hpNumberText = hpNumber.innerText
        hpBar.style.width = ((hpNumberText/255)*100)+percentAdded + "%"
        
        let attackBar = document.getElementById("attackParent");
            let attackNumberText = attackNumber.innerText
            attackBar.style.width = ((attackNumberText/190)*100)+percentAdded + "%"
        
            let defenseBar = document.getElementById("defenseParent");
            let defenseNumberText = defenseNumber.innerText
            defenseBar.style.width = ((defenseNumberText/230)*100)+percentAdded + "%"
    }
        
    )

};

changePoke(link);

nameOfPokemon = "jigglypuff"
// link = "https://pokeapi-nycda.firebaseio.com/pokemon/149.json"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
changePoke(link);

nameOfPokemon = "pikachu"
// link = "https://pokeapi-nycda.firebaseio.com/pokemon/59.json"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
setTimeout(changePoke(link), 1500);

setTimeout(ben.all(), 1000);

i=0


function slideNext(){

    let arrayofPoke = ben.all()

    if (i>arrayofPoke.length-2) {
        i=0;
    } else {
    i++
    }

    let lowerCaseName = ben.all()[i].name;

    let upperCaseName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);

    name.innerText=upperCaseName;

    // name.innerText = ben.all()[i].name;
    image.src = ben.all()[i].picUrl;
    hpNumber.innerText=ben.all()[i].hp;
    attackNumber.innerText=ben.all()[i].attack;
    defenseNumber.innerText=ben.all()[i].defense;
    // talents.innerText = ((ben.all()[i].abilities).join(", "))

    // console.log((ben.all()[i].abilities).toString())
    
    // i++;

    // if (i>arrayofPoke.length-1) {
    //     i=0
    // }   

    let hpBar = document.getElementById("hpParent");
    let hpNumberText = hpNumber.innerText
    hpBar.style.width = ((hpNumberText/255)*100)+percentAdded + "%"

    let attackBar = document.getElementById("attackParent");
    let attackNumberText = attackNumber.innerText
    attackBar.style.width = ((attackNumberText/190)*100)+percentAdded + "%"

    let defenseBar = document.getElementById("defenseParent");
    let defenseNumberText = defenseNumber.innerText
    defenseBar.style.width = ((defenseNumberText/230)*100)+percentAdded + "%"
}

function slidePrev(){

    let arrayofPoke = ben.all()

    if (i<1) {
        i=arrayofPoke.length-1
    } else {
        i--;
    }

    let lowerCaseName = ben.all()[i].name;

    let upperCaseName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);

    name.innerText=upperCaseName;

    // name.innerText = ben.all()[i].name;
    image.src = ben.all()[i].picUrl;
    hpNumber.innerText=ben.all()[i].hp;
    attackNumber.innerText=ben.all()[i].attack;
    defenseNumber.innerText=ben.all()[i].defense;
    // let talents = document.getElementById("arrayOfSkills");
    // talents.innerText = (ben.all()[i].abilities).toString()

    let hpBar = document.getElementById("hpParent");
let hpNumberText = hpNumber.innerText
hpBar.style.width = ((hpNumberText/255)*100)+percentAdded + "%"

let attackBar = document.getElementById("attackParent");
    let attackNumberText = attackNumber.innerText
    attackBar.style.width = ((attackNumberText/190)*100)+percentAdded + "%"

    let defenseBar = document.getElementById("defenseParent");
    let defenseNumberText = defenseNumber.innerText
    defenseBar.style.width = ((defenseNumberText/230)*100)+percentAdded + "%"
    
}

// let hpBar = document.getElementById("hpParent");
// let hpNumberText = hpNumber.innerText
// hpBar.style.width = ((hpNumberText/255)*100) + "%"


