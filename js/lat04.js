let tampil = document.querySelector("#belajar");

// klik.addEventlistener("clik",hasil);
// var b = 5;
// klik.onclick = function (b){
//     alert(b)
// }
// function hasil(a) {
//     // let a = document.querySelector("#tgl").value;
//     // tampil.innerHTML = a;

//     alert(a)
// }
let bln = document.getElementById("#bulan").value;
let tgl = document.getElementById("#tgl").value;

zodiak(bulan,tgl); 
function zodiak(bln,tgl) {

     let hasil = "salah";
     if (bln > 0 && bln < 13 && tgl > 0 && tgl < 33 ) {
        hasil = "zodiak belum dibuat";
        if (bln == 1) {
            hasil = "Capricon";
            if (tgl > 21) {
                hasil = "Aquarius";
            }
        }
        if (bln==2 ) {
           if ( tgl<18) {
               hasil = "Aquarius";
               
           }
           if (tgl>18 && tgl<30) {
               hasil = "pisces";
           }if (tgl>30) {
               hasil = "tanggal salah";
           }
            
           
        }
        if (bln==4) {
            hasil = "Aries";
            if (tgl>18&&tgl<31) {
                hasil="taurus";
            }
        }
    }
     console.log(hasil);
     tampil.innerHTML=hasil;
    
}

lulus(89);
function lulus(nilai) {
    let hasil= "hasil tidak valid"
    if (nilai >0 && nilai <101) {
        if (nilai >=90) {
            hasil = " Anda lulus";
        }
        if (nilai <90 ) {
            hasil = "anda lulus mohon tingkatkan lagi";
        }
        if (nilai <80 ) {
            hasil = "anda tidak lulus";
        }
    }
    console.log(hasil);

}

function terbilang(nilai){
    nilai = Math.abs(nilai);
    var Bagi=0;
    var huruf = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    var hasil="";
 
    if (nilai < 12) {
        hasil = " "+huruf[nilai];
    }
    else if (nilai <20) {
        hasil = terbilang(nilai - 10) + " Belas";
    }
    else if (nilai < 100) {
        Bagi = Math.floor(nilai/10);
        hasil = terbilang(Bagi)+" Puluh"+ terbilang(nilai % 10);
    }
    else if (nilai < 200) {
        hasil = " Seratus" + terbilang(nilai - 100);
    }
    else if (nilai < 1000) {
        Bagi = Math.floor(nilai/100);
        hasil = terbilang(Bagi) + " Ratus" + terbilang(nilai % 100);
    }
     else if (nilai < 2000) {
        hasil = " Seribu" + terbilang(nilai - 1000);
    }
    else if (nilai < 1000000) {
        Bagi = Math.floor(nilai/1000);
        hasil = terbilang(Bagi) + " Ribu" + terbilang(nilai % 1000);
    } 
    else if (nilai < 1000000000) {
        Bagi = Math.floor(nilai/1000000);
        hasil =terbilang(Bagi) + " Juta" + terbilang(nilai % 1000000);
    } 
    else if (nilai < 1000000000000) {
        Bagi = Math.floor(nilai/1000000000);
        hasil = terbilang(Bagi) + " Miliar" + terbilang(nilai % 1000000000);
    } 
    else if (nilai < 1000000000000000) {
        Bagi = Math.floor(nilai/1000000000000);
        hasil = terbilang(nilai/1000000000000) + " Triliun" + terbilang(nilai % 1000000000000);
    }
 
    return hasil;
}
 
console.log(terbilang(128));


prima(12);
function prima(bilangan) {
    let pembagi = 0;
    let hasil = "";
    
    for (let i = 1; i <=bilangan; i++) {
         if (bilangan%i == 0) {
            pembagi ++
         } 
    }
    if (pembagi == 2) {
        hasil="Bilangan Prima";
    }else{
        hasil="Bukan Prima";
    }
    console.log(hasil);
}
