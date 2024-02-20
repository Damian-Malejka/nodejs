"use strict";
//KLASY: 
/*
class Klient{ //Przyjmuje się, że nazwy klas z dużej litery
    imie:string;
    nazwisko:string;
    wiek:number;
    kontakt:string[];//tablica stringów
}
const Nowak = new Klient();
Nowak.imie="Tadeusz";
Nowak.nazwisko= "Nowak";
Nowak.wiek=45;
Nowak.kontakt=["782237364","tadzik@02.pl"]

console.log(`imie i nazwisko klienta: ${Nowak.imie} ${Nowak.nazwisko} \nDane kontaktowe: tel ${Nowak.kontakt[0]},email:${Nowak.kontakt[1]}; ` );
*/
let suma = (x, y) => x + y; //wtedy juz pozniej nie musimy okreslac typu argumentow i zwracanego wyniku
const czyPrawda = (name, age) => name.length > 5 || age > 18; //funkcja sprawdza czy imie jest dluzsze niz 5 znakow lub czy wiek wiekszy niz 18
console.log(suma(35, 23));
//console.log(czyPrawda(10,10))//tutaj wyswietli sie błąd ponieważ jako argumentów użyliśmy number number a w typie było zdefiniowane string i number
console.log(czyPrawda("Adam", 30));
console.log(czyPrawda("Ewa", 12));
