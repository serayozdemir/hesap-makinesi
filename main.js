// hesap makinesinin fonksiyonlari, islemlerin yaplidigi yer
let gecici = 0;
let geciciIslem;
const sonuc = document.getElementById("sonuc");
var sonucDeger = "";
function ekle(eleman){
    console.log(eleman)
    if (sonuc.value.length < 8)
    {
        if (eleman.value == ","){
            if (sonuc.value.search(",") == -1)
                sonuc.value += eleman.value;
        }
        else
            sonuc.value += eleman.value;
    }
}
function islem(islemTipi){
    sonucDeger += sonuc.value + islemTipi.textContent;
    console.log("Ara adım : " + sonucDeger);
    sonuc.value = "";
}
function hesapla(){
    //secilen islemin istedigimiz islem mi olup olmadigini konturol ediyoruz sonra gelen islem turune gore fonksiyon dan deva ediyor 
    if(islem == '^') {
        sonuc.value = Math.pow(gecici,sonuc.value)
        gecici = ""
        return
    }
    if(islem == '%') {
        sonuc.value = gecici * sonuc.value / 100;
        gecici = ""
        return
    }
    sonucDeger += sonuc.value;
    sonucDeger = sonucDeger.replace(",", ".");
    sonuc.value = eval(sonucDeger);
}
function temizle(){
    sonucDeger = "";
    sonuc.value= "";
}
// ilemleri'Math'hazir fonsiyonundan kolaylikla yapabiliyoruz .
function cos() {
    sonuc.value= Math.cos(sonuc.value);
}
function sec() {
    sonuc.value = 1 / Math.cos(sonuc.value);
}
function sin() {
    sonuc.value= Math.sin(sonuc.value);
}
function csc() {
    sonuc.value = 1 / Math.sin(sonuc.value);
}
function tan() {
    sonuc.value = Math.tan(sonuc.value);
}
function cot() {
    sonuc.value = 1/Math.tan(sonuc.value);
}
function karek() {
    sonuc.value = Math.sqrt(sonuc.value);
}
function ln() {
    sonuc.value = Math.log(sonuc.value);
}
function log(){
    sonuc.value=Math.log10(sonuc.value);
}
function us(){
    //Iki islem gerektirdiginden,gecici veri olan girilen ilk veriyi tutmak icinkullaniyoruz islemi hesapla fonksiyonunda yapiyoruz.
    if(!geciciIslem) {
        gecici = sonuc.value 
        islem = "^"
        temizle()
    }
}
function kare(){ 
    sonuc.value=Math.pow(sonuc.value, 2);
}
function eus(){
    sonuc.value=Math.exp(sonuc.value);
}
function mutlak(){
    sonuc.value=Math.abs(sonuc.value);
}
function Pi(){
    sonuc.value=Math.PI*(sonuc.value);
}
function degisim(){
    sonuc.value=-1*sonuc.value
}
function yuzde() {
    //Iki islem gerektirdiginden,gecici veri olan girilen ilk veriyi tutmak icinkullaniyoruz islemi hesapla fonksiyonunda yapiyoruz.
    if(!geciciIslem) {
        gecici = sonuc.value 
        islem = "%"
        temizle()
    }
}
//faktoriyel fonksiyonu yok ama kendimiz bu sekilde yapabildik 
function faktoriyel() {
    var tabanSayi=1;
    for (var i =2;i <= sonuc.value; i++){
        tabanSayi = tabanSayi * i;}

    return sonuc.value=tabanSayi;
}
function ekleTus(tus){        
  if (!isNaN(tus.key))
  {
      if (sonuc.textContent.length < 8)
      {
          sonuc.value += tus.key;
      }  
  }  
}
window.addEventListener('keyup', ekleTus, true)
            
 