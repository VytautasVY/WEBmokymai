/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let firstname = "Vardenis"
let lastname = "Pavardenis"
let yearofbirth = 1992
let metai = new Date().getFullYear()
console.log(`Aš esu ${firstname} ${lastname}. Man yra ${metai - yearofbirth} metai(-ų).`)


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
let w = Math.round(Math.random() * 4)
let t = Math.round(Math.random() * 4)
console.log("skaiciai: "+ w + ", " + t)
if (w == 0 || t == 0) {
    console.log("Dalyba is nulio negalima.")
} else if (w > t) {
    console.log((w / t).toFixed(2))
} else {
    console.log((t / w).toFixed(2))
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let u = Math.round(Math.random() * 25)
let o = Math.round(Math.random() * 25)
let p = Math.round(Math.random() * 25)
console.log("skaiciai: "+ u + ", "+ o + ", "+ p)

let largest = Math.max(u,o,p)
let smallest = Math.min(u,o,p)
let middleNum

if(u != largest && u != smallest) {
    middleNum = u
} else if (o != largest && o != smallest) {
    middleNum = o
} else if (p != largest && p != smallest) {
    middleNum = p
} else {
    middleNum = "undetermined as 2 or more numbers were equal."
}
console.log(`The middle number is ${middleNum}`)

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.ceil(Math.random() * 10)
let kr2 = Math.ceil(Math.random() * 10)
let kr3 = Math.ceil(Math.random() * 10)
console.log(`Skaiciai: ${kr1}, ${kr2}, ${kr3}`)

if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr2) {
    console.log("triangle is valid")
} else {
    console.log("triangle is not valid")
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let sk1 = Math.round(Math.random() * 2)
let sk2 = Math.round(Math.random() * 2)
let sk3 = Math.round(Math.random() * 2)
let sk4 = Math.round(Math.random() * 2)
console.log(`Skaiciai: ${sk1}, ${sk2}, ${sk3}, ${sk4}`)

let sum0 = 0
let sum1 = 0
let sum2 = 0

if (sk1 == 0) {
    sum0++  
}
if (sk1 == 1) {
    sum1++
}
if (sk1 == 2) {
    sum2++
}

if (sk2 == 0) {
    sum0++  
}
if (sk2 == 1) {
    sum1++
}
if (sk2 == 2) {
    sum2++
}
if (sk3 == 0) {
    sum0++  
}
if (sk3 == 1) {
    sum1++
}
if (sk3 == 2) {
    sum2++
}
if (sk4 == 0) {
    sum0++  
}
if (sk4 == 1) {
    sum1++
}
if (sk4 == 2) {
    sum2++
}
console.log(`Nuliai: ${sum0} vienetai: ${sum1} dvejetai: ${sum2}`)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

let randomNum = Math.floor(Math.random() * 21) - 10;
console.log(randomNum)
let randomNum1 = Math.floor(Math.random() * 21) - 10;
let randomNum2 = Math.floor(Math.random() * 21) - 10;
let randomNum3 = Math.floor(Math.random() * 21) - 10;

if (randomNum1 < 0) {
    console.log(`[${randomNum1}]`)
} 
if (randomNum1 == 0) {
    console.log(`(${randomNum1})`)
}
if (randomNum1 > 0) {
    console.log(`{${randomNum1}}`) 
}

if (randomNum2 < 0) {
    console.log(`[${randomNum2}]`)
} 
if (randomNum2 == 0) {
    console.log(`(${randomNum2})`)
}
if (randomNum2 > 0) {
    console.log(`{${randomNum2}}`) 
}

if (randomNum3 < 0) {
    console.log(`[${randomNum3}]`)
} 
if (randomNum3 == 0) {
    console.log(`(${randomNum3})`)
}
if (randomNum3 > 0) {
    console.log(`{${randomNum3}}`) 
}


/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let candlesCount = Math.floor(Math.random() * 3006) - 5
    console.log(candlesCount)

let canndlesPrice = 1
let totalPrice = canndlesPrice * candlesCount
    console.log(totalPrice)

let discount = 0
if (totalPrice > 1000) {
    discount = 0.03 
} else if (totalPrice > 2000) {
    discount = 0.04
}

// pritaikoma suma su nuolaida yra = 0 ir skaiciuojama galutine suma kai nuolaida yra > 0 //
let discountTotal = 0
if (discount > 0) {
    discountTotal = totalPrice * discount
    totalPrice = totalPrice - discountTotal 
}
console.log(`Perkamas žvakių kiekis: ${candlesCount}`)
console.log(`Žvakių kaina: ${totalPrice.toFixed(2)}, EUR`)


/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
let e = Math.round(Math.random() * 100)
let r = Math.round(Math.random() * 100)
let d = Math.round(Math.random() * 100)
    console.log(`Skaiciai: ${e}, ${r}, ${d}`)

let average = (e + r + d) / 3
    console.log(average)

let updatedAverage = average
    if (e < 10 || e > 90) {
        updatedAverage = (r + d) / 2
    }
    if (r < 10 || r > 90) {
        updatedAverage = (e + d) / 2
    }
    if (d < 10 || d > 90) {
        updatedAverage = (e + r) / 2
    }
console.log(`average: ${Math.round(average)}`)
console.log(`updatedAverage: ${Math.round(updatedAverage)}`)

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/





/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

const var1 = Math.floor(Math.random() * 9000) + 1000;
const var2 = Math.floor(Math.random() * 9000) + 1000;
const var3 = Math.floor(Math.random() * 9000) + 1000;
const var4 = Math.floor(Math.random() * 9000) + 1000;
const var5 = Math.floor(Math.random() * 9000) + 1000;
const var6 = Math.floor(Math.random() * 9000) + 1000;


const min1 = Math.min(var1, var2, var3, var4, var5, var6);
const max1 = Math.max(var1, var2, var3, var4, var5, var6);
const min2 = Math.min(var1, var2, var3, var4, var5, var6, max1);
const max2 = Math.max(var1, var2, var3, var4, var5, var6, min1);


console.log(max1, max2, min2, min1, min2, max1);