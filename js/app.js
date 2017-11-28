document.addEventListener("DOMContentLoaded", function() {

    var submitButton = document.querySelector(".btnPrimary");
    console.log(submitButton);

    //Do czego umieszczamy nasze nowe ul
    var herePush = document.getElementById("createList");
    console.log(herePush);


    var listTitle = document.getElementById("title");
    console.log(listTitle);
    var listDate = document.getElementById("date");
    console.log(listDate);
    var listPrior = document.getElementById("prior");
    console.log(listPrior);
    var listDesc = document.getElementById("desc");
    console.log(listDesc);
    var listDone = document.getElementById("done");
    console.log(listDone);

    submitButton.addEventListener("click", function (e) {

        e.preventDefault();

        var newUl = document.createElement("ul");

        var newLiTitle = document.createElement("li");
        newLiTitle.innerText = listTitle.value;
        newUl.appendChild(newLiTitle);

        var newLiDate = document.createElement("li");
        newLiDate.innerText = listDate.value;
        newUl.appendChild(newLiDate);

        var newLiPrior = document.createElement("li");
        newLiPrior.innerText = listPrior.value;
        newUl.appendChild(newLiPrior);

        var newLiDesc = document.createElement("li");
        newLiDesc.innerText = listDesc.value;
        newUl.appendChild(newLiDesc);

        var newLiDone = document.createElement("li");
        newLiDone.innerText = listDone.value;
        newUl.appendChild(newLiDone);

        herePush.appendChild(newUl);

    });
});


