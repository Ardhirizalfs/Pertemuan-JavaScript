let url = "https://dummyjson.com/products";

function getdata(){
    let out;
    $.ajax({
        type: "get",
        url: url,
        data: "contentType",
        dataType: "json",
        success: function (response) {
            console.log(response);
            // $.$.each(response.products, function (key,val) { 
            //      out += `<tr>
            //      <td>${val.title}</td>
            //      <td>${val.description}</td>
            //      </tr>`
            // });
            // document.querySelector("#tabel").innerHTML = response;
            // res = response.products.map(a => out += `<tr>
            // <td>${val.title}</td>
            // <td>${val.description}</td>
            // </tr>`);

            response.products.forEach(a => {
                out += `<tr>
                 <td>${val.title}</td>
                 <td>${val.description}</td>
                 </tr>`;
                
            });
            document.querySelector("#tabel").innerHTML = response;
        }
    });
}

// getdata();