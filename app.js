// JavaScript source code


//button declarations here  + JSON file gathering:
let $buttons = document.getElementsByTagName("button");
let $output = document.getElementById("output");

let statArea = document.getElementById("stats");


//json declarations
let classes = classesList;
let tiers = tierlist;
let champs = champions;


let tierList = [];

for (let x = 0; x < $buttons.length; x++) {
    $buttons[x].addEventListener("click", function (e) {

        getTierList($buttons[x].id);

    })
}
function getTierList(buttonId) {
        switch (buttonId) {

        //case "tierOne":
        //    displayTier(buttonId, 1);
        //    break;
        //case "tierTwo":
        //    displayTier(buttonId, 2);
        //    break;
        //case "tierThree":
        //    displayTier(buttonId, 3);
        //    break;
        //case "tierFour":
        //    displayTier(buttonId, 4);
        //    break;
        //case "tierFive":
        //    displayTier(buttonId, 5);
        //        break;
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


    tierList = [];
    $output.innerHTML = "";
    //let titleElement = document.createElement("h1");
    //titleElement.innerHTML = "Tier List - " + num;
    //$output.appendChild(titleElement);

    //for (let i = 0; i < tiers.length; i++) {

    //    for (let j = 0; j < tiers[i].all[num].length; j++) {
    //        //console.log(tiers[i].all[num][j]);
    //        tierList.push(tiers[i].all[num][j])
    //        //$output.innerHTML += " - " + tiers[i].all[num][j] + "<br>";


    //    }

    //}




 

    for (let k = 0; k < champs.length; k++) {
   
        for (champ in champs[k]) {

            //console.log(champs[k][champ])


            //for (let i = 0; i < tierList.length; i++) {
                //if (champs[k][champ].key == tierList[i]) {

                    console.log(champs[k][champ])
            let champNames = document.createElement("li");
            champNames.id = champs[k][champ].name
                    champNames.innerHTML = champs[k][champ].name;
                    $output.appendChild(champNames);

                    //let champClasses = document.createElement("ul");
                    //champClasses.innerHTML = champs[k][champ].origin + " - " + champs[k][champ].class;
                    //$output.appendChild(champClasses);

                    //let champSkill = document.createElement("p");
                    //champSkill.innerHTML = "<b>Ability: </b>"  + champs[k][champ].ability.name + "<br>" + "<b>Description: </b>"+ champs[k][champ].ability.description;
                    //$output.appendChild(champSkill);

                    //let recoItems = document.createElement("ul");
                    //if (!champs[k][champ].items[2]) {
                    //    recoItems.innerHTML = "Best Items:  " + (champs[k][champ].items[0].charAt(0).toUpperCase() + champs[k][champ].items[0].slice(1)) + " - " + (champs[k][champ].items[1].charAt(0).toUpperCase() + champs[k][champ].items[1].slice(1))
                    //} else {
                    //    recoItems.innerHTML = "Best Items:  " + (champs[k][champ].items[0].charAt(0).toUpperCase() + champs[k][champ].items[0].slice(1)) + " - " + (champs[k][champ].items[1].charAt(0).toUpperCase() + champs[k][champ].items[1].slice(1)) + " - " + (champs[k][champ].items[2].charAt(0).toUpperCase() + champs[k][champ].items[2].slice(1));

                    //}
                    //$output.appendChild(recoItems);
                    //$output.innerHTML += (" - " + champs[k][champ].origin + champs[k][champ].class + "<br>");
                //}

            //}
           
        }
    }
    let charList = document.querySelectorAll("li");
  


  

    for (let i = 0; i < charList.length; i++) {

        charList[i].addEventListener("click", function (e) {
            
         
          
            removeLinks();
                e.target.classList.add("linkactive");

               
            displayStats(this.id);

            
                
            
            
            
            

        })
     
    }

    
}

function displayStats(champion) {


    statArea.innerHTML = "";
    for (let k = 0; k < champs.length; k++) {
        for (champ in champs[k]) {
            
            if (champion == champs[k][champ].name) {

                let champName = document.createElement("h3");
                champName.innerHTML = champs[k][champ].name;
                statArea.appendChild(champName);
                statArea.innerHTML += (" - " + champs[k][champ].origin + " - " + champs[k][champ].class + "<br>");
                    //let champClasses = document.createElement("ul");
                    //champClasses.innerHTML = champs[k][champ].origin + " - " + champs[k][champ].class;
                    //statArea.appendChild(champClasses);

                let champSkill = document.createElement("p");
                champSkill.innerHTML = "<b>Ability: </b>"  + champs[k][champ].ability.name + "<br>" + "<b>Description: </b>"+ champs[k][champ].ability.description;
                statArea.appendChild(champSkill);

                let manaStat = document.createElement("p");
                manaStat.innerHTML = "<b>Mana Cost: </b>" + champs[k][champ].ability.manaCost + "<br>" + "<b>Mana Start: </b>" + champs[k][champ].ability.manaStart;
                statArea.appendChild(manaStat);



               
                let abilityStats = document.createElement("p"); 
                for (let j = 0; j < champs[k][champ].ability.stats.length; j++) {

                    abilityStats.innerHTML += "<br><b>Stat Type: </b>" + champs[k][champ].ability.stats[j].type + "<br>" + "<b>Stat Value: </b>" + champs[k][champ].ability.stats[j].value +"<br>";
                
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
                    recoItems.innerHTML = "Best Items:  " + (champs[k][champ].items[0].charAt(0).toUpperCase() + champs[k][champ].items[0].slice(1)) + " | " + (champs[k][champ].items[1].charAt(0).toUpperCase() + champs[k][champ].items[1].slice(1))
                } else {
                    recoItems.innerHTML = "Best Items:  " + (champs[k][champ].items[0].charAt(0).toUpperCase() + champs[k][champ].items[0].slice(1)) + " | " + (champs[k][champ].items[1].charAt(0).toUpperCase() + champs[k][champ].items[1].slice(1)) + " | " + (champs[k][champ].items[2].charAt(0).toUpperCase() + champs[k][champ].items[2].slice(1));
                }
                statArea.appendChild(recoItems);
               
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




