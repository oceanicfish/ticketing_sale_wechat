/**
 * Created by yang on 25/04/2017.
 */
var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 150,
    height : 150
});

function makeCode () {
    // var elText = document.getElementById("text");
    //
    // if (!elText.value) {
    //     alert("Input a text");
    //     elText.focus();
    //     return;
    // }

    qrcode.makeCode('TCKGLL170424LJA420');
}

makeCode();

// $("#text").
// on("blur", function () {
//     makeCode();
// }).
// on("keydown", function (e) {
//     if (e.keyCode == 13) {
//         makeCode();
//     }
// });