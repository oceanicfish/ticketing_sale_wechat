/**
 * Created by yang on 25/04/2017.
 */
var qrcode = new QRCode(document.getElementById("qrcode"), {
    // width : 150,
    // height : 150
});

function makeCode () {
    qrcode.makeCode('TCKGLL170424LJA420');
    var screen_width = $('window').width();
    console.log(screen_width);
}

makeCode();
