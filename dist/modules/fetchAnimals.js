//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar
export default async function fetchAnimals() {
    try {
        const response = await fetch("data.json");
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Ta bort console log innan inlämning
            return data;
        }
        return null;
    }
    catch (error) {
        console.error("Error:", error);
        return null;
    }
}
;
