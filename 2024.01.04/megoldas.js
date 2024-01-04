console.log("Pethe Bálint")
console.log("#Team13")
console.log("HTML: 100")
console.log("CSS: 90")
console.log("JavaScript: 10")
//Második feladat
let szam = prompt("Add meg a számot")
let hatvany = prompt("Add meg hogy hanyadikra emeljem")

console.log(szam ** hatvany)
//Harmadik feladat de azt nem értem

let felsoHatar = Number(prompt("Add meg a felső határát az intervallumnak"))
let alsoHatar = Number(prompt("Add meg az alsó határát az intervallumnak"))

let randomSzam = Math.floor(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;

if (randomSzam%2==0) {
	console.log(randomSzam)
}
else if (randomSzam%2>0) {
	console.log(randomSzam+1)
}

//Negyedik feladat
let number = prompt("Adj meg egy életkort 1-120 között")

if (number <= 0) { 
    console.log("A számnak 1-120 között kell lennie")
}
else if (number < 6) {
    console.log("Kisgyermekkor")
}
else if (number < 12) {
    console.log("Gyermekkor")
}
else if (number < 16) {
    console.log("Serdülőkor")
}
else if (number < 20) {
    console.log("Ifjókor")
}
else if (number < 30) {
    console.log("Fiatal felnőtt kor")
}
else if (number < 60) {
    console.log("Felnőtt kor")
}
else if (number < 120) {
    console.log("Aggkor")
}
else {
    console.log("A számnak 1-120 között kell lennie")
}

//Ötödik feladat
let szam = prompt("Add meg a számot")
let osztó = prompt("Add meg az osztót")

if (szam % osztó == 0) {
    console.log("Ez az osztó ennek a számnak osztólya")
}
else {
    console.log("Ez a osztó nem osztja a számot maradék nélkül")
}

//Hatodik feladat

for (let i = 1; i < 11; i++) {
    console.log(i ** 2)
}