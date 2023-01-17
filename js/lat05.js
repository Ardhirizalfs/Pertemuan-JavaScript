function perkali(a,b) { 
    return a*b;

 }

 console.log(perkali(3,5));

 let kali = (a,b) => a*b;

 console.log(kali(4,2));

 let zodiak = (tg,bl)=> {
    let hasil = "invalid";
     if (bl<13 && bl >0 && tg <32 && tg > 0) {
         hasil = "ntar";
         if ( bl == 1) {
              hasil="capricon";             
         }if (tg >21){
             hasil = "aquarius";
         }
     }
     return  hasil;
    }
 console.log(zodiak(23,1));


 let lulus = (nilai) => {
   let result="invalid";
   if (nilai >0 && nilai <101) {
       if (nilai >90) {
           result = "Lulus";
       }
       if (nilai <90) {
           result = "tidak lulus";
       }
   }
   return result;
 }
 console.log(lulus(87));

 