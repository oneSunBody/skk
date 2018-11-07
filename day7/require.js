var paths = [];

function define(name, cb) {

}


function require(devs, cb) {
    if (typeof devs == "object") {
        cb(...devs)
    } else {
        cb(devs)
    }
}

require(["aa", "bb", "cb"], function (a, b, c) {
    console.log(a, b, c)
})