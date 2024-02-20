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

//////////////////////////////////////////////////////////////////////////
//Utwórz klasę samochody. Klasa powinna mieć właściwości:
//model:string, marka:string, przebieg:number,wiek:number 
//oraz metodę szczegoly(), która wypisze w konsoli powyższe właściwości.
//Na podstawie tak utworzonej klasy utwórz obiekt.
/*
class Samochody{
    model:string;
    marka:string;
    przebieg:number;
    wiek:number;
    szczegoly(){
        console.log(`Model: ${this.model} \nMarka: ${this.marka} \nPrzebieg: ${this.przebieg} \nWiek: ${this.wiek}`);
    }
}

var samochodzik= new Samochody();
samochodzik.model="TurboCorsa";
samochodzik.marka="opel";
samochodzik.przebieg=199500;
samochodzik.wiek=20;

samochodzik.szczegoly();
*/
///////////////////////////////////////////////////////////////////////////////

//KONSTRUKTORY:
/*
class Klient{ //Przyjmuje się, że nazwy klas z dużej litery
    imie:string;
    nazwisko:string;
    wiek:number;
    kontakt:string[];//tablica stringów
    wyswietl(){
        console.log(`imie i nazwisko klienta: ${this.imie} ${this.nazwisko} \nDane kontaktowe: tel ${this.kontakt[0]},email:${this.kontakt[1]}; ` );
    }
    constructor(imie:string,nazwisko:string,wiek:number,kontakt:string[])
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.wiek=wiek;
        this.kontakt=kontakt;
    }
}

const Nowak=new Klient("Jan","Nowak",45,["782332238","janeczek@o2.pl"]);
Nowak.wyswietl();
*/
//////////////////////////////////////////////////
//ZADANIE
/*Do zdefiniowanej wcześniej klasy Samochody utwórz własny konstruktor*/


//////////////////////////////////////////////////////////////////////
//Przykład modyfikatora dostępu public w konstruktorze
/*
class Koty{

    miauczenie(){
        console.log('Miau! Miau')
    }
    blagajOJedzenie(){
        console.log('O Mój Panie najwspanialszy jestem bardzo głodny i konam');
    }
    prezentacja(){
        console.log("Jestem SuperKicia i wabię się: " + this.imie);
    }
    constructor(public imie:string,public rasa:string,public wiek:number, public liczbaLap:number, public masa:number)
    {}//tworzymy właściwości w konstruktorze, od razu wpisujemy do nich wartosci, unikamy zbędnego kodu
}
const Mruczek=new Koty("Dziadostwo","Brytyjski",2,4,35);
Mruczek.prezentacja();*/
//////////////////////////////
/*
Zadanie: wykorzystując modyfikator dostępu public w konstruktorze obiektu
utworz klasę Samochody o właściwościach i metodach jak w poprzedniej wersji
*/
///////////////////////////////////////////////////////////////////////////


//Dziedziczenie klas: 
/*
class Klient{
    imie:string;
    nazwisko: string;
    wiek:number;
    constructor(imie:string, nazwisko:string, wiek:number)
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.wiek=wiek;
    }
    powitanie(){
        console.log(`Witaj, ${this.imie} ${this.nazwisko}`);
    }
    czyPelnoletni(){
        if(this.wiek>=18) return true;
        else return false;
    }
}
let Nowak=new Klient("Tadeusz", "Nowak",44)
console.log(Nowak.czyPelnoletni());//sprawdzamy czy Nowak jest pelnoletni
console.log(new Klient("Jan","Kowalski",17).czyPelnoletni());//tworzymy nowy obiekt bez zapisywania i wykonujemy na nim metode czyPelnoletni
*/
////////////////////////////////////////////////////////////////////////////
/*

class Klient{
    imie:string;
    nazwisko: string;
    wiek:number;
    constructor(imie:string, nazwisko:string, wiek:number)
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.wiek=wiek;
    }
    powitanie(){
        console.log(`Witaj, ${this.imie} ${this.nazwisko}`);
    }
    czyPelnoletni(){
        if(this.wiek>=18) return true;
        else return false;
    }
}

class DaneKlienta extends Klient{}//dodajemy klase o nazwie DaneKlienta ktora dziedziczy po klasie Klient extends wskazuje na dziedziczenie
//w klasie DaneKlienta konstruktor wykorzystujemy z klasy Klient
let Nowak=new DaneKlienta("Tadeusz", "Nowak",44)//tu tworzymy obiekt klasy DaneKlienta
let Kowalski=new DaneKlienta("Jan","Kowalski",17);

console.log(Nowak.czyPelnoletni());//sprawdzamy czy Nowak jest pelnoletni
Kowalski.powitanie();

*/
////////////////////////////////////////////////////////////////////////////
//

//uzyie extends i super
/*
class Klient{
    imie:string;
    nazwisko: string;
    wiek:number;
    constructor(imie:string, nazwisko:string, wiek:number)
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.wiek=wiek;
    }
    powitanie(){
        console.log(`Witaj, ${this.imie} ${this.nazwisko}`);
    }
    czyPelnoletni(){
        if(this.wiek>=18) return true;
        else return false;
    }
}

class DaneKlienta extends Klient{
    adres:string;// w klasie dziedziczacej dodajemy nowa properte(właściwość) adres
    constructor(imie:string,nazwisko:string,wiek:number,adres:string){//tutaj definiujemy wlasny konstruktor w tej klasie 
        super(imie,nazwisko,wiek);//aby przekazać z klasy nadrzędnej właściwości do konstruktora należy użyć słowa kluczowego super
        //slowo kluczowe super nalezy zastosowac w pierwszej linijce konstruktora
        this.adres=adres;
    }
}

let Nowak=new DaneKlienta("Tadeusz","Nowak",44,"Opole Portowa 13");
let Kowalski = new DaneKlienta("Jan","Kowalski",17,"Szczecin,Mickiewicza 19");
Kowalski.powitanie();
let wartosc:keyof DaneKlienta//definiujemy zmienna jako typ danych przechowującą klucze klasy DaneKlienta
for(wartosc in Nowak)
{
    console.log(Nowak[wartosc])
}
*/
/*ZADANIE*/
/*Wykorzystaj klasę Samochody . Utwórz nową klasę kolorSamochodu, która będzie dziedziczyć 
właściwości i metody z klasy Samochody oraz będzie mieć dodatkową właściwość kolor:string.
Na podstawie nowej klasy utwórz obiekt i wyświetl w konsoli jego właściwości.

*/
///////////////////////////////////////////////////////////////////////////////////////////
///NADPISYWANIE DZIEDZICZONYCH METOD
/*
class Klient{
    imie:string;
    nazwisko: string;
    wiek:number;
    constructor(imie:string, nazwisko:string, wiek:number)
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.wiek=wiek;
    }
    powitanie(){
        console.log(`Witaj, ${this.imie} ${this.nazwisko}`);
    }
    czyPelnoletni(){
        if(this.wiek>=18) return true;
        else return false;
    }
}

class DaneKlienta extends Klient{
    adres:string;

    constructor(imie:string, nazwisko:string, wiek:number, adres:string)
    {
        super(imie,nazwisko,wiek);
        this.adres=adres;
    }
    powitanie()//w klasie dziedziczącej będzie obowiązywała ta metoda, a nie z klasy z której dziedziczymy, ponieważ tutaj nadpisujemy metodę
    {
        console.log(`Dzień dobry ${this.imie} ${this.nazwisko}`)
    }
}
let Kowalski = new DaneKlienta("Jan","Kowalski",17,"Szczecn, Mickiewicza 19");
Kowalski.powitanie();//tu wykona się nadpisana metoda z klasy dziedziczącej.


*/
////////////////////////////////////////////////////////////////////////////////////////////
//MODYFIKATORY DOSTĘPU PUBLIC, PRIVATE, PROTECTED

/*
//////PUBLIC///////////////////////////////
class Klient{
    public imie:string;//używamy tutaj modyfikatora public, jak nie zdefiniujemy dostępu to domyślnie są publiczne
    public nazwisko: string;
    public wiek:number;
    constructor(imie:string, nazwisko:string, wiek:number)
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.wiek=wiek;
    }
    powitanie(){
        console.log(`Witaj, ${this.imie} ${this.nazwisko}`);
    }
    czyPelnoletni(){
        if(this.wiek>=18) return true;
        else return false;
    }
}

let Kaszuba = new Klient("Zdzisław", "Kaszuba", 19);
Kaszuba.powitanie();
Kaszuba.imie="Michał";//modyfikatorem właściwości imie jest public więc możemy tutaj zmienić imie (poza klasa i dziedziczaca klasa).
Kaszuba.powitanie();//wyświetli się nowe imie

class DaneKlienta extends Klient{
    adres:string;

    constructor(imie:string, nazwisko:string, wiek:number, adres:string)
    {
        super(imie,nazwisko,wiek);
        this.adres=adres;
    }
    powitanie()
    {
        console.log(`Dzień dobry ${this.imie} ${this.nazwisko}`)////////////te property w klasie z ktorej dziedziczymy są public wiec zadziala 
    }
}

let KaszubaMniejszy=new DaneKlienta("Alan","Kaszuba",3,"Łowicz, Blich 12");

KaszubaMniejszy.powitanie();

*/


/////////////////////////PRIVATE
/*
class Klient{
    private imie:string;//używamy tutaj modyfikatora private
    private nazwisko: string;
    private wiek:number;
    constructor(imie:string, nazwisko:string, wiek:number)
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.wiek=wiek;
    }
    powitanie(){
        console.log(`Witaj, ${this.imie} ${this.nazwisko}`);
    }
    czyPelnoletni(){
        if(this.wiek>=18) return true;
        else return false;
    }
}

let Kaszuba = new Klient("Zdzisław", "Kaszuba", 19);
Kaszuba.powitanie();
Kaszuba.imie="Michał";//modyfikatorem właściwości imie jest private więc nie możemy tutaj zmienić imienia(poza klasa i dziedziczaca klasa).
Kaszuba.powitanie();//wyświetli się nowe imie

class DaneKlienta extends Klient{//modyfikatory właściwości które dziedziczymy z klasy Klient są public więc działa
    adres:string;

    constructor(imie:string, nazwisko:string, wiek:number, adres:string)
    {
        super(imie,nazwisko,wiek);
        this.adres=adres;
    }
    powitanie()
    {
        console.log(`Dzień dobry ${this.imie} ${this.nazwisko}`)////////////te property są private w klasie z ktorej dziedziczymy wiec nie zadziala w metodzie nadpisanej w klasie dziedziczacej
    }
}

let KaszubaMniejszy=new DaneKlienta("Alan","Kaszuba",3,"Łowicz, Blich 12");

KaszubaMniejszy.powitanie();


*/

/////////////////////////PROTECTED/////////
/*
class Klient{
    protected imie:string;//używamy tutaj modyfikatora private
    protected nazwisko: string;
    protected wiek:number;
    constructor(imie:string, nazwisko:string, wiek:number)
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.wiek=wiek;
    }
    powitanie(){
        console.log(`Witaj, ${this.imie} ${this.nazwisko}`);
    }
    czyPelnoletni(){
        if(this.wiek>=18) return true;
        else return false;
    }
}

let Kaszuba = new Klient("Zdzisław", "Kaszuba", 19);
Kaszuba.powitanie();
Kaszuba.imie="Michał";//modyfikatorem właściwości imie jest protected więc nie możemy tutaj zmienić imienia(poza klasa i dziedziczaca klasa).
Kaszuba.powitanie();//wyświetli się nowe imie

class DaneKlienta extends Klient{//modyfikatory właściwości które dziedziczymy z klasy Klient są public więc działa
    adres:string;

    constructor(imie:string, nazwisko:string, wiek:number, adres:string)
    {
        super(imie,nazwisko,wiek);
        this.adres=adres;
    }
    powitanie()
    {
        console.log(`Dzień dobry ${this.imie} ${this.nazwisko}`)////////////te property są protected w klasie z ktorej dziedziczymy wiec  ZADZIAŁA w metodzie nadpisanej w klasie dziedziczacej
    }
}

let KaszubaMniejszy=new DaneKlienta("Alan","Kaszuba",3,"Łowicz, Blich 12");

KaszubaMniejszy.powitanie();

*/

/////////////////UŻYWANIE MODYFIKATORÓW W KONSTUKTORZE////////////////////////////
/*

class Klient{//property definiujemy tylko w konstruktorze
    constructor(protected imie:string,protected nazwisko:string,protected wiek:number)
    {//nie używamy przypisywania z uzyciem this w konstruktorze
    }
    powitanie(){
        console.log(`Witaj, ${this.imie} ${this.nazwisko}`);
    }
    czyPelnoletni(){
        if(this.wiek>=18) return true;
        else return false;
    }
}

let Kaszuba = new Klient("Zdzisław", "Kaszuba", 19);
Kaszuba.powitanie();
//Kaszuba.imie="Michał";//modyfikatorem właściwości imie jest protected więc nie możemy tutaj zmienić imienia(poza klasa i dziedziczaca klasa).
Kaszuba.powitanie();//wyświetli się nowe imie

class DaneKlienta extends Klient{//modyfikatory właściwości które dziedziczymy z klasy Klient są public więc działa
    

    constructor(imie:string, nazwisko:string, wiek:number, public adres:string)
    {
        super(imie,nazwisko,wiek);

    }
    powitanie()
    {
        console.log(`Dzień dobry ${this.imie} ${this.nazwisko}`)////////////te property są protected w klasie z ktorej dziedziczymy wiec  ZADZIAŁA w metodzie nadpisanej w klasie dziedziczacej
    }
}

let KaszubaMniejszy=new DaneKlienta("Alan","Kaszuba",3,"Łowicz, Blich 12");

KaszubaMniejszy.powitanie();



*/
////////////////////////////////////////////////////////////////////////////
//////////////////////////readonly/////////////////////
/*
class Uzytkownik{
    imie:string;
    constructor(imie:string="Tomek")//wartosc domyslna Tomek
    {
        this.imie=imie;
    }
    aktualizujImie()//metoda ta aktualizuje imie na Adam
    {
        this.imie="Adam";
    }
}
let Admin = new Uzytkownik();
console.log(Admin.imie);
Admin.aktualizujImie();//zaktualizowalismy imie za pomoca metody aktualizujImie() tutaj bez problemu zadziała
console.log(Admin.imie);//wyswietli sie nowe imie


*/
/*
class Uzytkownik{
    readonly imie:string;//to jest wlasciwosc readonly wiec jej wartosc mozna zmienic tylko w konstruktorze podczas tworzenia obiektu
    constructor(imie:string="Tomek")//wartosc domyslna Tomek
    {
        this.imie=imie;
    }
    aktualizujImie()//metoda ta aktualizuje imie na Adam
    {
        this.imie="Adam";//nie mozna zmieniac imienia bo wlasciwosc jest readonly
    }
}
let Admin = new Uzytkownik();
console.log(Admin.imie);
Admin.imie="Adam";//w ten sposos tez nie mozna zmienic imienia bo ta properta jest readonly
console.log(Admin.imie);//wyswietli sie nowe imie
*/





///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////INTERFEJSY
/*
interface InterfejsKlient{
    imie:string;
    nazwisko:string;
    wiek:number;
}

let klient:InterfejsKlient={//uzycie interfejsu bezposrednio w obiektach wskazuje jakie konkretnie wlasciwosci i metody maja miec tworzone obiekty wiecej nie mozna dodac
    imie:"Tomasz",
    nazwisko:"Tryla",
    wiek:35,///dopoki nie napiszemy definicji wszystkich właściwości to będzie zgłaszany błąd 
    //test:83 w obiektach nie mozemy sobie dodac nic poza interfejsem
}

*/
/////Zadanie:
/*Zaprojektuj interfejs do utworzonej wcześniej klasy samochod, następnie połącz go z klasą.  */
//DODAJ do klasy metoda test ktora jako argument przyjmuje liczbe a nastepnie ja zwraca.
//W klasie Cars dodaj dodatkowo propertę propertyTestowa:number której nie ma zdefiniowanej w interfejsie
/*
interface ICars{
    model:string;// dodanie readonly w interfejsie uniemożliwi zmianę danej właściwości
    marka:string;
    przebieg:number;
    wiek:number;
    szczegoly():void
    test(x:number):number
}
class Cars implements ICars{//podajemy implements przed nazwą przypisanego interfejsu iCars
    model:string;
    marka:string;
    przebieg:number;
    wiek:number;//jak bysmy np zakomentowali properte wiek to wyskoczy błąd bo wiek jest wymagany w interfejsie
    propertyTestowa:number;//to properta ktorej nie ma w interfejsie, dodana dodatkowo
    szczegoly(){
        console.log(`Model: ${this.model} \nMarka: ${this.marka} \nPrzebieg: ${this.przebieg} \nWiek: ${this.wiek}`);
    }
    test(x:number)
    {
        return x;//ta metoda przyjmuje wartosc i ją zwraca
    }
    constructor(model:string,marka:string,przebieg:number,wiek:number,propertyTestowa:number)
    {
        this.model=model;
        this.marka=marka;
        this.przebieg=przebieg;
        this.wiek=wiek;
        this.propertyTestowa=propertyTestowa;
    }
}
let samochod=new Cars("Mazda","RX8",90000,3,99)
console.log(samochod.propertyTestowa);
*/
//Interfejsy wskazują na to jakie właściwości i metody i jakich typów musi mieć dana klasa
// w klasiemusimy zdefiniować wszystkie własciwości i metody wskazane w interfejsie
//ale ponadto możemy dodać własne dodatkowe property i właściwości do klasy których nie ma w interfejsie

//np stworzymy interfejs figur szachowych, ktory bedzie mowil jakie wlasciwosci i metody musi miec kazda klasa figur np pionki, krolowa, gonce, 
//np kazda z figur musi miec properte kolor
//ale dodatkowo kazda z klas figur moze miec swoje dodatkowe metody i właściwości

/*
////////////POLA OPCJONALNE  i READONLY W INTERFEJSACH
interface InterfejsKlient{
    readonly imie:string;// dodanie readonly w interfejsie uniemożliwi zmianę danej właściwości
    nazwisko:string;
    wiek:number;
    email?:string;
}

let klient:InterfejsKlient={
    imie:"Tomasz",
    nazwisko:"Tryla",
    wiek:35//mimo, że nie zdefiniowaliśmy tutaj emaila nie jest zgłaszany błąd ponieważ jest to properta opcjonalna
}

klient.email="tomasztryla@o2.pl";
klient.imie="Adrian";//jest tutaj zgłaszany błąd, ponieważ w interfejsie dla tej właściwości jest dodane readonly
console.log(klient.email);

*/

//////////////
/////////////////////////////////////użycie interfejsu dla obiektów będącymi argumentami funkcji
/*
interface InFaktura{
    doZaplaty:number;
    od:string;
}

function faktura(a:InFaktura)// podczas uruchamiania funkcji będziemy musieli podawać w argumencie obiekt który spełnia założenia interfejsu InFaktura
{
    return `Twoja faktura ${a.od} opiewa na kwotę ${a.doZaplaty}`;

}
const kwota:InFaktura={
    doZaplaty:230,
    od:"Zdzisław Jakubczyk"
}
const test={
    doZaplaty:200//zeby obiekt spełniał interfejs InFaktura brakuje nam właściwości od
}
const test2={//tutaj nie napisalismy ze obiekt ma spełniać interfejs InFaktura, ale posiada on property takie jak w interfejsie InFaktura
    doZaplaty:200,
    od:"Ala"
}
console.log(faktura(kwota));
console.log(faktura(test));//zgłosi błąd ponieważ obiekt test nie jest zgodny z interfejsem InFaktura przypisanym do argumentu funkcji
console.log(faktura(test2));//mimo, że podczas deklaracji obiektu nie napisalismy ze ma on spełniać interfejs InFaktura, to posiada on właściwości te które są podane w interfejsie InFaktura, wiec mozemy go uzyc jako argument funkkcji faktura

/////funkcja strzałkowa:
let innaFaktura=(a:InFaktura)=>(`Twoja faktura ${a.od} opiewa na kwotę ${a.doZaplaty}`);
//nazwa_funkcji=(argumenty)=>Zwracana_wartosc
console.log(innaFaktura(kwota));

*/
//////////////////////////////////////////////////////////////////////
////DEFINICJA TYPU PARAMETRÓW FUNKCJI

type mojTyp=(x:number,y:number)=> number; //aby zdefiniowac typ dajemy przed napis type nastepnie nazwe typu pozniej atrgumenty a na koncu typ zwracanej wartosci

let suma:mojTyp=(x,y)=>x+y;//wtedy juz pozniej nie musimy okreslac typu argumentow i zwracanego wyniku

type test=(name:string,age:number)=>boolean;
const czyPrawda:test=(name,age)=>name.length>5||age>18;//funkcja sprawdza czy imie jest dluzsze niz 5 znakow lub czy wiek wiekszy niz 18
console.log(suma(35,23))
//console.log(czyPrawda(10,10))//tutaj wyswietli sie błąd ponieważ jako argumentów użyliśmy number number a w typie było zdefiniowane string i number
console.log(czyPrawda("Adam",30))
console.log(czyPrawda("Ewa",12))
