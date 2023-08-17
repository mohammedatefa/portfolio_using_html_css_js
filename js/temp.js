/*global alert,console ,prompt*/
var poldOne = document.getElementById("1"),
    poldTwo = document.getElementById("2"),
    poldThree = document.getElementById("3"),
    poldFour = document.getElementById("4");
poldOne.onclick = function () {
    "use strict";
    document.getElementById("quote").textContent = "About me is your place to control what people see about you as you use Google services. Our products are for everyone, and we want you to be in control of how your place to control what people see about you as you use Google";
    poldOne.className = "active";
    poldTwo.className = "";
    poldFour.className = "";
    poldThree.className = "";
};
poldTwo.onclick = function () {
    "use strict";
    document.getElementById("quote").textContent = " It Is Very Good WebSite It Is Easy And Fast Thanks";
    poldTwo.className = "active";
    poldThree.className = "";
    poldFour.className = "";
    poldOne.className = "";
};
poldThree.onclick = function () {
    "use strict";
    document.getElementById("quote").textContent = "awsoem how it very good and sweet it can be the best in the websites continue in your design ";
    poldThree.className = "active";
    poldTwo.className = "";
    poldFour.className = "";
    poldOne.className = "";
};
poldFour.onclick = function () {
    "use strict";
    document.getElementById("quote").textContent = "i love this designe it perfect";
    poldFour.className = "active";
    poldThree.className = "";
    poldTwo.className = "";
    poldOne.className = "";
};