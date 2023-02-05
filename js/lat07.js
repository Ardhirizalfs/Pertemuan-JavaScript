let bil= [1,3,5,7,9];

function kali (num) {
      return num *2;
}

console.log(kali(2));

let hasil = bil.map(num => num +2);

console.log(hasil);

hasil.forEach( e =>{
    console.log(e);
});

document.querySelector("#tampil").innerHTML = hasil;

// let out = '<tbody>';
// hasil.forEach(element => {
//     out +=`<tr><td>${element}</td></tr>`;
// });

// out += '</tbody>';

// document.querySelector("#table").innerHTML = out ;

let siswa = [
    {nama : "yanto", sekolah : "smkn2 buduran", kelas : "11rpl"},
    {nama : "irumyui", sekolah : "smpn 2 sukodono", kelas: "2smp"},
    {nama : "abdi", sekolah : "Banjar utara 2 ", kelas : "11 otomotif" },
    {nama : "joni", sekolah : "Banjar utara 3 ", kelas : "12 otomotif" }
];

console.log(siswa);

out = '<thead><tr><th>Nama</th><th>Sekolah</th><th>kelas</th></tr></thead><tbody>'
has = siswa.map(a => out +=`<tr>
<td>${a.nama}</td>
<td>${a.sekolah}</td>
<td>${a.kelas}</td>
</tr>` );
out  += '</tbody>';

document.querySelector("#table").innerHTML = out;


// function sis(item){
// console.log(item.nama,item.sekolah,item.kelas);
// .join(" ");
// }

