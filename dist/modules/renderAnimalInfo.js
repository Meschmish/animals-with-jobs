export default function renderAnimalInfo(animal) {
    const animalContainer = document.querySelector(".animal-info");
    if (!animalContainer)
        return;
    animalContainer.replaceChildren();
    // Skapar img
    const animalImg = document.createElement("img");
    animalImg.src = `./images/${animal.imageUrl}`;
    animalImg.alt = animal.name;
    // Skriver ut name och kindOfAnimal
    const nameAndtype = `${animal.name} the ${animal.kindOfAnimal}`;
    const nameHeader = document.createElement("h2");
    nameHeader.textContent = nameAndtype;
    // Skapar en div att lägga h3orna i för att styla enklare
    const infoContainer = document.createElement("div");
    infoContainer.id = "infoContainer";
    const jobInfo = document.createElement("h3");
    jobInfo.id = "jobInfo";
    // Sätter ihop texten. Om employmentEndDate saknas läggs (not) till, annars tomt
    jobInfo.textContent = `${animal.job} - Currently ${animal.employmentEndDate ? "(not) " : ""}employed`;
    // Hämtar nuvarande år
    const currentYear = new Date().getFullYear();
    // Nuvarande år - birthYear som gjorts om från string till number
    const currentAge = currentYear - Number(animal.birthYear);
    const animalAge = document.createElement("h3");
    animalAge.id = "age";
    animalAge.textContent = `${currentAge} years old.`;
    infoContainer.append(jobInfo, animalAge);
    animalContainer.append(animalImg, nameHeader, infoContainer);
    const animalSkills = document.createElement("h3");
    animalSkills.id = "skills";
    // Om animal.skills finns skrivs h3an ut
    if (animal.skills) {
        // om animal.skills är en array, ersätter "," mellan elementen med en radbrytning
        if (Array.isArray(animal.skills)) {
            animalSkills.textContent = animal.skills.join("\n");
            // Om det inte är en array utan en sträng skrivs animal.skills ut
        }
        else {
            animalSkills.textContent = animal.skills;
        }
        infoContainer.append(animalSkills);
    }
    ;
    //=====================================================//
    //Rendera ut bilden på djuret
    //Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
    //=====================================================//
    //=====================================================//
    //Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
    //Följ formatet: "Trash Analyst - Currently (not) employed"
    //Använd template literals
    //=====================================================//
    //=====================================================//
    //Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
    //Följ formatet:  Age: 9 years old.
    //Använd template literals
    //Bonus om du skriver ut rubriken "Age" med CSS.
    //=====================================================//
    //=====================================================//
    //Skriv ut en lista på djurets färdigheter
    //Följ formatet:    Skills:
    //                  Flying
    //                  Eating
    //Bonus om du skriver ut rubriken "Skills" med CSS.
    //=====================================================//
}
;
