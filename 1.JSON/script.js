// // // objek ke JSON
// let mahasiswa   =   {
//     "nama"  :   "Orlando",
//     "nrp"   :   "029298483",
//     "email" :   "orlando@gmail.com"
// }
// JSON.stringify(mahasiswa);

// //JSON ke objek
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if(xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET','file.json',true);
// xhr.send();

//jquery
$.getJSON('file.json', function (data) {
   console.log(data); 
});