let isi=document.querySelector("#isi");
isi.innerHTML="<h1> soto </h1>"+"<p>deskripsi soto</p>"+'<img src="slider2.jpg">';
isi.innerHTML= "<h1>rawon</h1>";
isi.innerHTML += "<p>deskripsi rawon</p>";
isi.innerHTML +='<img src="slider2.jpg" alt="">';






// let table=document.querySelector("#table");
// table.innerHTML="<table>"
//                 + "<thead> <tr> <th> NOMOR </th> </tr> </thead>"
//                 + "<tbody>"
//                 + "<tr> <td> 1 </td></tr>"
//                 + "<tr> <td> 2 </td></tr>"
//                 + "<tr> <td> 3 </td></tr>"
//                 + "<tr> <td> 4 </td></tr>"
//                 + "<tr> <td> 5 </td></tr>"
//                 + "</tbody>"
//                 + "</table>"




                // let table=document.querySelector("#table");
                // table.innerHTML ="<th> nomor </th>";
                // table.innerHTML +="<td>1 </td>"
                // table.innerHTML +="<td>2 </td>"
                // table.innerHTML +="<td>3 </td>"

let table =document.querySelector("#table");
table.innerHTML = "<table><thead><tr><th>NONOR</th></tr></thead><tbody>"

for (let o=0; o <8 ;o++){
table.innerHTML += "<tr><td>"+ o + "</td> </tr>"
}

table.innerHTML +="</tbody></table>";








for (let i = 0; i < 10 ; i++) {
    // console.log(i);
    document.querySelector("#paragraf").innerHTML += "<h1>"+i+"</h1><br>" ;
    
}
