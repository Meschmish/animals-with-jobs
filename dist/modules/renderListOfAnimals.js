//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter
import renderAnimalInfo from "./renderAnimalInfo.js";
export default function renderListOfAnimals(animals) {
    const listContainer = document.querySelector(".list-of-animals ul");
    if (!listContainer)
        return;
    // Rensar allt innehåll i listContainer innan de skrivs ut igen. Säkrare än innerHTML
    listContainer.replaceChildren();
    // Loopar igenom varje djur
    animals.forEach((animal) => {
        const li = document.createElement("li");
        li.className = "listOfNames";
        li.textContent = animal.name;
        li.addEventListener("click", () => {
            renderAnimalInfo(animal);
        });
        listContainer.appendChild(li);
    });
}
;
