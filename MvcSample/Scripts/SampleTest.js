// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    var phone = S.replace(/ |-/gi, "");
    var n = phone.length % 3;
    var len = ((n == 1) ? phone.length - 4 : phone.length);
    var returnValue = "";
    for (i = 0; i + 3 <= len; i = i + 3) {
        if (returnValue != "")
            returnValue += "-";
        returnValue += phone.substr(i, 3);
    }
    if (n == 1)
        returnValue += "-" + phone.substr(len, 2) + "-" + phone.substr(len + 2, 2);
    else if (n == 2)
        returnValue += "-" + phone.substr(len - 2, 2);

    return returnValue;
}


//function cmp(a, b) { return a - b; }

//function solution(A, B) {
//    var n = A.length;
//    var m = B.length;
//    A.sort(cmp);
//    B.sort(cmp);
//    var i = 0;
//    for (var k = 0; k < n; k++) {
//        if (i < m - 1 && B[i] < A[k]) {
//            i += 1; k--;
//        }
//        if (A[k] == B[i])
//            return A[k];
//    }
//    return -1;
//}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//function solution() {
//    // write your code in Javascript
//    //
//    // you can access DOM Tree using DOM Object Model:
//    //    document.getElementsByTagName
//    // or using jQuery:
//    //    $('some_tag')
//    var depth = 0;
//    var d = $("li:not(:has(ol)):not(:has(ul))");
//    for (i = 0; i < d.length; i++) {
//        var dl = $(d[i]).parents("ol,ul").length;
//        if (dl > depth)
//            depth = dl;
//    }
//    return depth;
//}