//posortowanie rzeczy w tablicy po date z wycieciem myslnikow, bo wtedy zle sortuje i wypisaniem
tasks.sort(function (a, b) {
    return parseInt(a.date.replace(/-/g, ""), 10) - parseInt(b.date.replace(/-/g, ""), 10);
});

console.log(tasks);

var herePush = document.getElementById("createList");

tasks.forEach(function (product, index) {



    var newUl = document.createElement("ul");

    var newLiTitle = document.createElement("li");
    newLiTitle.innerText = product.title;
    newUl.appendChild(newLiTitle);

    var newLiPrior = document.createElement("li");
    newLiPrior.innerText = product.date;
    newUl.appendChild(newLiPrior);

    var newLiDesc = document.createElement("li");
    newLiDesc.innerText = product.priority;
    newUl.appendChild(newLiDesc);

    var newLiDone = document.createElement("li");
    newLiDone.innerText = product.done;
    newUl.appendChild(newLiDone);

    //dodawanie buttona delete z klasa del
    var newDelBtn = document.createElement("button");
    newDelBtn.innerText = "delete";
    newDelBtn.setAttribute("class", "del");
    newUl.appendChild(newDelBtn);


    //dodanie przycisku done z klasa hide
    var doneBtn = document.createElement("button");
    doneBtn.innerText = "done";
    doneBtn.setAttribute("class", "done");
    newUl.appendChild(doneBtn);

    herePush.appendChild(newUl);

});


//posortowanie rzeczy w tablicy po priority i wypisaniem
tasks.sort(function (a, b) {
    return parseInt(a.priority, 10) - parseInt(b.priority, 10);
});

console.log(tasks);

var herePush = document.getElementById("createList");

tasks.forEach(function (product, index) {



    var newUl = document.createElement("ul");

    var newLiTitle = document.createElement("li");
    newLiTitle.innerText = product.title;
    newUl.appendChild(newLiTitle);

    var newLiPrior = document.createElement("li");
    newLiPrior.innerText = product.date;
    newLiPrior.setAttribute("contenteditable", "true");
    newUl.appendChild(newLiPrior);

    var newLiDesc = document.createElement("li");
    newLiDesc.innerText = product.priority;
    newUl.appendChild(newLiDesc);

    var newLiDone = document.createElement("li");
    newLiDone.innerText = product.done;
    newUl.appendChild(newLiDone);

    //dodawanie buttona delete z klasa del
    var newDelBtn = document.createElement("button");
    newDelBtn.innerText = "delete";
    newDelBtn.setAttribute("class", "del");
    newUl.appendChild(newDelBtn);


    //dodanie przycisku done z klasa hide
    var doneBtn = document.createElement("button");
    doneBtn.innerText = "done";
    doneBtn.setAttribute("class", "done");
    newUl.appendChild(doneBtn);

    herePush.appendChild(newUl);


});
