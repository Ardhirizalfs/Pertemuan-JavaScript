// let buah = ["mangga", "jambu", "jeruk", "sawo", "duren"];

// console.log(buah);

// document.querySelector("#tampil").innerHTML = buah[0];

// buah.forEach(a =>
//     [
//         console.log(a)
//     ]
//     );

    // function kali(a,b) {
    //      return a*b;

    // }function tampil(a) {
    //     return a;
    // }
    // console.log(kali(2,3));
    // console.log(tampil(2));

    // let kali= function(a){
    //     console.log(a*b);
    // };

    // kali("2");
//     function kali(a,b) {
//         return a*b;

//    }function tampil(a) {
//        console.log(a);
//    }
//    console.log(kali(2,5));
//    tampil("belajar"); 


//    let siswa = {
//        nama: ["Yanto","bambang","Fatmawati","andreads","rayac"],
//        sekolah : "SMKN 2 Buduran",
//        kelas : "11 RPL"
//    }
//    console.log(siswa);
//    console.log(siswa.nama[4]);



   let siswa = '{"data" : [' + 
   ' {"nama":"abdul" ,"alamat":"Sidoarjo"},'+
   '{"nama":"somad","alamat":"Bandung"},'+
   '{"nama":"Roslun","alamat":"Jakarta"},'+
   '{"nama":"KADAFI","alamat":"pakistan"} ]}';
   
   const obj = JSON.parse(siswa);
//    document.querySelector("#tampil").innerHTML = obj.data[3].nama 
//    + " " +
//    obj.data[3].alamat;


obj.data.forEach(i =>{
    console.log(i);
    document.querySelector("#tampil").innerHTML += i.nama+" "+i.alamat + "<br>";
    
});