function encryptApiKey() {
                    var t = "a2c903cc-b31e-4547-9299-b6d07b7631ab"
                      , e = t.split("")
                      , r = e.splice(0, 8);
                    return e.concat(r).join("")
                }
var p =  (new Date).getTime()
e = encryptApiKey();

function forget  (t){
                        var e = (1 * t + 1111111111111).toString().split("")
                          , r = parseInt(10 * Math.random(), 10)
                          , n = parseInt(10 * Math.random(), 10)
                          , o = parseInt(10 * Math.random(), 10);
                        return e.concat([r, n, o]).join("")
                    }

function base64_encode(str) {
    var c1, c2, c3;
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var i = 0, len = str.length, string = '';

    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            string += base64EncodeChars.charAt(c1 >> 2);
            string += base64EncodeChars.charAt((c1 & 0x3) << 4);
            string += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            string += base64EncodeChars.charAt(c1 >> 2);
            string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            string += base64EncodeChars.charAt((c2 & 0xF) << 2);
            string += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        string += base64EncodeChars.charAt(c1 >> 2);
        string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        string += base64EncodeChars.charAt(c3 & 0x3F)
    }
    return string
}

function comb() {

                    var r = "".concat(e, "|").concat(p);
                    //console.log(p)

                    //console.log(e)

                    //console.log(r)
    var a = Buffer.from(r).toString('base64')

                    return Buffer.from(r).toString('base64')
                }
