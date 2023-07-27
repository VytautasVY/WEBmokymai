/* 01.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
*/
let actor1 = "Brad Pitt"
let actor2 = "Leonardo DiCaprio"

if (actor1.length > actor2.length) {
    console.log(actor2)
} else if (actor1.length < actor2.length) {
    console.log(actor1)
} else {
    console.log("The strings have equal length")
}

/* 02.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)
*/
let favactor1FirstName = "Brad"
let favactor1LastName = "Pitt"
let favactor2FirstName = "Leonardo"
let favactor2LastName = "DiCaprio"
console.log(favactor1FirstName.toUpperCase(), favactor1LastName.toLowerCase())
console.log(favactor2FirstName.toUpperCase(), favactor2LastName.toLowerCase())


/* 03.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
let actor1FirstName = "Brad"
let actor1LastName = "Pitt"
let actor2FirstName = "Leonardo"
let actor2LastName = "DiCaprio"
let initials = actor1FirstName.charAt(0) + actor1LastName.charAt(0) + actor2FirstName.charAt(0) + actor2LastName.charAt(0)
console.log(initials)

/* 04.
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
let firstName = "Brad";
let lastName = "Pitt"; 
let lastThreeLetters = firstName.substring(firstName.length - 3) + lastName.substring(lastName.length - 3);
console.log(lastThreeLetters);


/* 05.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
*/
const text = "An American in Paris";
let replacedText = "";

for (let i = 0; i < text.length; i++) {
  const char = text[i];
  if (char === "a" || char === "A") {
    replacedText += "*";
  } else {
    replacedText += char;
  }
}

console.log(replacedText);


/* 06.
Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
*/



/* 07.
Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
*/

const generatedString = "Star Wars: Episode " + " ".repeat(Math.ceil(Math.random() * 10)) + (Math.ceil(Math.random() * 7) + 1) + " - A New Hope";

    const episodeStart = "Episode ".length;

    const episodeEnd = generatedString.indexOf(" -");

    const episodeNumber = generatedString.substring(episodeStart, episodeEnd);

    console.log("Episode Number:", episodeNumber);
/* 08.
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/

const string1 = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
const string2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";

    let count1 = 0;
    let count2 = 0;

    let currentWordLength = 0;
    let insideWord = false;

    for (let i = 0; i < string1.length; i++) {
      const char = string1[i];

      if (char !== " ") {
        insideWord = true;
        currentWordLength++;
      } else {
        if (insideWord && currentWordLength <= 5) {
          count1++;
        }
        insideWord = false;
        currentWordLength = 0;
      }
    }

    if (insideWord && currentWordLength <= 5) {
        count1++;
      }
  
      currentWordLength = 0;
      insideWord = false;
  
      for (let i = 0; i < string2.length; i++) {
        const char = string2[i];
  
        if (char !== " ") {
          insideWord = true;
          currentWordLength++;
        } else {
          if (insideWord && currentWordLength <= 5) {
            count2++;
          }
          insideWord = false;
          currentWordLength = 0;
        }
      }
  
      if (insideWord && currentWordLength <= 5) {
        count2++;
      }
  
      console.log("Number of short words in string 1:", count1);
      console.log("Number of short words in string 2:", count2);

/* 09.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
*/
const characters = "abcdefghijklmnopqrstuvwxyz";
let randomString = "";

for (let i = 0; i < 3; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomString += characters.charAt(randomIndex);
}

console.log("Random String:", randomString);
 

/* 10. 
Parašykite kodą, kuris generuotų atsitiktinį stringą su 10 atsitiktine tvarka išdėliotų žodžių, o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. Žodžiai neturi kartotis. (reikės masyvo)
*/

