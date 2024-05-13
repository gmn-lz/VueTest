var a = 10;
function b() {
    console.log(a);
}
(function () {
    var a = 20;
    b()
})()
