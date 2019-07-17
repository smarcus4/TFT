// JavaScript source code


//button declarations here  + JSON file gathering:
let $buttons = document.getElementsByTagName("button");
let $output = document.getElementById("output");
let $itemOutput = document.getElementById("itemOutput");
let statArea = document.getElementById("stats");
let $itemArea = document.getElementById("itemArea");

//json declarations
let classes = classesList;
let tiers = tierlist;
let champs = champions;
let itemList = items;

let tierList = [];

for (let x = 0; x < $buttons.length; x++) {
    $buttons[x].addEventListener("click", function (e) {

        getTierList($buttons[x].id);

    })
}
function getTierList(buttonId) {
        switch (buttonId) {
        case "mainMenu":
            displayTier();
                break;
            case "itemList":
                displayItems();
                break;
        case "classes":
            displayClasses(buttonId);
                break;

        default:
            alert("You have not selected a tier level.... Please try clicking the buttons for further tier level information");
    }

}



function removeLinks() {
    let classLists = document.querySelectorAll(".linkactive");
    console.log(classLists);
    for (let j = 0; j < classLists.length; j++) {
        if (classLists[j].classList.contains("linkactive")) {
            classLists[j].classList.remove("linkactive");
        }
    }
}


function displayTier() {

    $itemArea.innerHTML = "";
    tierList = [];
    $output.innerHTML = "";
    



 

    for (let k = 0; k < champs.length; k++) {
   
        for (champ in champs[k]) {

           
                    console.log(champs[k][champ])
            let champNames = document.createElement("li");
            champNames.classList.add("championNames");
            champNames.id = champs[k][champ].name
                    champNames.innerHTML = champs[k][champ].name;
                    $output.appendChild(champNames);


           
        }
    }
    let charList = document.querySelectorAll("li");
  


  

    for (let i = 0; i < charList.length; i++) {

        charList[i].addEventListener("click", function (e) {
            
         
          
            removeLinks();
                e.target.classList.toggle("linkactive");

               
            displayStats(this.id);

            
                
            
            
            
            

        })
     
    }

    
}

function displayStats(champion) {

    statArea.style.visibility = "visible";
    statArea.innerHTML = "";
    for (let k = 0; k < champs.length; k++) {
        for (champ in champs[k]) {
            
            if (champion == champs[k][champ].name) {

                let champName = document.createElement("h1");
                champName.innerHTML = champs[k][champ].name;
                statArea.appendChild(champName);
                statArea.innerHTML += (" - " + champs[k][champ].origin + " - " + champs[k][champ].class + "<br>");
                



                   

                let champSkill = document.createElement("p");
                champSkill.innerHTML = "<b>Ability: </b>"  + champs[k][champ].ability.name + "<br>" + "<b>Description: </b>"+ champs[k][champ].ability.description;
                statArea.appendChild(champSkill);

                let manaStat = document.createElement("p");
                manaStat.innerHTML = "<b>Mana Cost: </b>" + champs[k][champ].ability.manaCost + "<br>" + "<b>Mana Start: </b>" + champs[k][champ].ability.manaStart;
                statArea.appendChild(manaStat);



               
                let abilityStats = document.createElement("p"); 
                for (let j = 0; j < champs[k][champ].ability.stats.length; j++) {

                    abilityStats.innerHTML += "<br><b>"+champs[k][champ].ability.stats[j].type + "</b><br>"  + champs[k][champ].ability.stats[j].value +"<br>";
                
                }
                statArea.appendChild(abilityStats);

               

                let baseDmg = document.createElement("span");
                let baseSpd = document.createElement("span");
                let baseRng = document.createElement("span");
                let baseDps = document.createElement("span");

                let baseHp = document.createElement("span");
                let baseArmor = document.createElement("span");
                let baseMr = document.createElement("span");

                //for (let base in champs[k][champ]) {
                    baseDmg.innerHTML = "Base Stats Offense: <br>" + "<b>Damage: </b>" + champs[k][champ].stats.offense.damage;
                    baseDps.innerHTML = "<b>DPS: </b>" + champs[k][champ].stats.offense.dps + "\n";
                    baseRng.innerHTML = "<b>Range:</b> " + champs[k][champ].stats.offense.range;
                     baseSpd.innerHTML = "<b>Speed: </b>" + champs[k][champ].stats.offense.attackSpeed;

                //defense
                baseHp.innerHTML = "Base Stats Defense: <br>" + "<b>Health: </b>" + champs[k][champ].stats.defense.health;
                baseArmor.innerHTML = "<b>Armor: </b>" + champs[k][champ].stats.defense.armor;
                baseMr.innerHTML = "<b>Magic Resist: </b>" + champs[k][champ].stats.defense.magicResist;


                //}
                statArea.appendChild(baseDmg);
                statArea.appendChild(baseSpd);
                statArea.appendChild(baseRng);
                statArea.appendChild(baseDps);
                statArea.appendChild(baseHp);
                statArea.appendChild(baseArmor);
                statArea.appendChild(baseMr);

                let recoItems = document.createElement("p");
                if (!champs[k][champ].items[2]) {
                    recoItems.innerHTML = "<b>Recommended Items:</b><br>  " + (champs[k][champ].items[0].charAt(0).toUpperCase() + champs[k][champ].items[0].slice(1)) + " ---  " + (champs[k][champ].items[1].charAt(0).toUpperCase() + champs[k][champ].items[1].slice(1))
                } else {
                    recoItems.innerHTML = "<b>Recommended Items:</b><br>  " + (champs[k][champ].items[0].charAt(0).toUpperCase() + champs[k][champ].items[0].slice(1)) + " ---  " + (champs[k][champ].items[1].charAt(0).toUpperCase() + champs[k][champ].items[1].slice(1)) + " --- " + (champs[k][champ].items[2].charAt(0).toUpperCase() + champs[k][champ].items[2].slice(1));
                }
                statArea.appendChild(recoItems);
                statArea.className = "";
                manaStat.className = "";
                abilityStats.className = "";

                if (champs[k][champ].origin == "Demon") {
                    champSkill.classList.add("demonSkill");
                    statArea.classList.add("demonStats");
                    manaStat.classList.add("demonMana");
                    abilityStats.classList.add("demonAbility");
                    recoItems.classList.add("recoItemsArea");

                } else if (champs[k][champ].origin == "Phantom") {
                    champSkill.classList.add("phantomSkill");

                    statArea.classList.add("phantomStats");
                    manaStat.classList.add("phantomMana");
                    abilityStats.classList.add("phantomAbility");
                    recoItems.classList.add("recoItemsArea");

                } else if (champs[k][champ].origin == "Void") {
                    champSkill.classList.add("voidSkill");

                    statArea.classList.add("voidStats");
                    manaStat.classList.add("voidMana");
                    abilityStats.classList.add("voidAbility");
                    recoItems.classList.add("recoItemsArea");


                } else if (champs[k][champ].origin == "Noble") {
                    champSkill.classList.add("nobleSkill");

                    statArea.classList.add("nobleStats");
                    manaStat.classList.add("nobleMana");
                    abilityStats.classList.add("nobleAbility");
                    recoItems.classList.add("recoItemsArea");

                } else if (champs[k][champ].origin == "Glacial") {
                    champSkill.classList.add("glacialSkill");

                    statArea.classList.add("glacialStats");
                    manaStat.classList.add("glacialMana");
                    abilityStats.classList.add("glacialAbility");
                    recoItems.classList.add("recoItemsArea");

                } else if (champs[k][champ].origin == "Wild,Yordle" || champs[k][champ].origin == "Wild") {
                    champSkill.classList.add("wildSkill");

                    statArea.classList.add("wildStats");
                    manaStat.classList.add("wildMana");
                    recoItems.classList.add("recoItemsArea");
                    abilityStats.classList.add("wildAbility");
                } else if (champs[k][champ].origin == "Imperial" || champs[k][champ].origin == "Imperial,Demon") {
                    champSkill.classList.add("imperialSkill");

                    statArea.classList.add("imperialStats");
                    manaStat.classList.add("imperialMana");
                    abilityStats.classList.add("imperialAbility");
                    recoItems.classList.add("recoItemsArea");

                } else if (champs[k][champ].origin == "Ninja" || champs[k][champ].origin == "Ninja,Yordle") {
                    champSkill.classList.add("ninjaSkill");

                    statArea.classList.add("ninjaStats");
                    manaStat.classList.add("ninjaMana");
                    abilityStats.classList.add("ninjaAbility");
                    recoItems.classList.add("recoItemsArea");

                } else if (champs[k][champ].origin == "Pirate") {
                    champSkill.classList.add("pirateSkill");

                    statArea.classList.add("pirateStats");
                    manaStat.classList.add("pirateMana");
                    abilityStats.classList.add("pirateAbility");
                    recoItems.classList.add("recoItemsArea");

                } else if (champs[k][champ].origin == "Robot" || champs[k][champ].origin == "Dragon") {
                    champSkill.classList.add("robotSkill");

                    statArea.classList.add("robotStats");
                    manaStat.classList.add("robotMana");
                    abilityStats.classList.add("robotAbility");
                    recoItems.classList.add("recoItemsArea");

                } else if (champs[k][champ].origin == "Yordle") {
                    champSkill.classList.add("yordSkill");

                    statArea.classList.add("yordStats");
                    manaStat.classList.add("yordMana");
                    abilityStats.classList.add("yordAbility");
                    recoItems.classList.add("recoItemsArea");

                } else {
                    manaStat.classList.add("manaArea");
                    champSkill.classList.add("skillArea");
                    abilityStats.classList.add("abilityStatsArea");
                    recoItems.classList.add("recoItemsArea");

                }
            } 
        }
    }
}




//end function
displayTier();

function displayClasses(id) {

    statArea.innerHTML = "";
    $output.innerHTML = "";

    for (let i = 0; i < classes.length; i++) {
        for (let classOne in classes[i]) {
            console.log(classes[i][classOne]);

            let classTitle = document.createElement("h2");
            classTitle.innerHTML = classes[i][classOne].name;

            $output.appendChild(classTitle);
           

            let classImage = document.createElement("img");
            classImage.src = classes[i][classOne].accentChampionImage;
            if (classes[i][classOne].name == "Elementalist" || classes[i][classOne].name == "Sorcerer") {
                classImage.id = "mage";
            } else if (classes[i][classOne].name == "Ranger" || classes[i][classOne].name == "Gunslinger") {
                classImage.id = "range";
            }
            classImage.style.width = "200px";
            classImage.style.height = "140px";
            $output.appendChild(classImage);

            let classDesc = document.createElement("p");
            if (classes[i][classOne].description != null) {
                classDesc.innerHTML = " + " + classes[i][classOne].description;

            } else {
                classDesc.innerHTML = " no desc "
            }
            $output.appendChild(classDesc);

            let bonus = document.createElement("ul");
            for (let j = 0; j < classes[i][classOne].bonuses.length; j++) {
               
                 bonus.innerHTML += "Required: " + classes[i][classOne].bonuses[j].needed + "<br>" + "Bonus Effect: " + classes[i][classOne].bonuses[j].effect + "<br><br>";
                
            }
            //bonus.innerHTML = "Required: " + classes[i][classOne].bonuses[0].needed + "<br>"+  "Bonus Effect: " +  classes[i][classOne].bonuses[0].effect;
            $output.appendChild(bonus);
        }
    }


}

function displayItems() {

    
    $itemArea.innerHTML = "";
    let unlist = document.createElement("ul");
    $itemArea.appendChild(unlist);
    $output.innerHTML = "";
    statArea.innerHTML = "";

    for (let i = 0; i < itemList.length; i++) {

     
        for (item in items[i]) {
            console.log(items[i][item]);
            if (items[i][item].kind == "basic") {
                let listItem = document.createElement("li");
                
                listItem.innerHTML = items[i][item].name;

                listItem.classList.add("item");
                unlist.appendChild(listItem);

               


 
            }
        }

    
    }
    eventAdding();



}


function eventAdding() {
    let iList = document.querySelectorAll(".item");
    for (let j = 0; j < iList.length; j++) {
        iList[j].addEventListener("click", function (e) {
            outputItem(this.innerHTML);
        })
    }
}


function outputItem(itemName) {

    for (let i = 0; i < items.length; i++) {
        for (item in items[i]) {

            if (itemName == items[i][item].name) {


                $itemOutput.innerHTML = "";
                let nameOfItem = document.createElement("h3");
                nameOfItem.innerHTML = "Item Name: " + itemName;
                nameOfItem.id = items[i][item].name;

                $itemOutput.appendChild(nameOfItem);


                let itemStats = document.createElement("p");
                itemStats.innerHTML = "Title: " + items[i][item].stats[0].title + "<br>" + "Amount: " + items[i][item].stats[0].amount;
                $itemOutput.appendChild(itemStats)


                let buildInto = document.createElement("ul");
                
              

                
                
                for (let j = 0; j < items[i][item].buildsInto.length; j++) {
                    let listInto = document.createElement("li");
                    listInto.id = items[i][item].buildsInto[j]
                    listInto.innerHTML += items[i][item].buildsInto[j];
                    buildInto.appendChild(listInto);
                    console.log(items[i][item].buildsInto[j]);




                    $itemOutput.appendChild(listInto);
                    listInto.addEventListener("click", function (e) {

                        displayHoverBuild(this.id);
                        
                    })


                }
               
                
            }
        }

    }
}

function displayHoverBuild(itemId) {

    console.log(itemId)
    let selector = "#" + itemId
    let itemsLists = document.querySelector(selector);
    let buildFrom = document.createElement("p");
   

    for (let i = 0; i < items.length; i++) {
        for (item in items[i]) {
            if (itemId == items[i][item].key) {
                buildFrom.innerHTML = (items[i][item].buildsFrom[0] + "   " + items[i][item].buildsFrom[1]);
                itemsLists.innerHTML = itemId

        
            }
        }

     
        itemsLists.appendChild(buildFrom);
    }
   
}
