
//najpierw sprawdzamy czy local storage jest pusty

if(localStorage.getItem("toDoStorage") === null) {
    var tasks = [];
    localStorage.setItem("toDoStorage", JSON.stringify(tasks));
}else{
    var tasks = JSON.parse(localStorage.getItem("toDoStorage"));
}

// i przechodzimy po wszystkich elementach i ladujemy je na stronie

tasks.forEach(function(element) {

    var herePush = document.getElementById("createList");

    var newUl = document.createElement("ul");

    var newLiTitle = document.createElement("li");
    newLiTitle.innerText = element.title;

    newUl.appendChild(newLiTitle);

    var newLiDate = document.createElement("li");
    newLiDate.innerText = element.date;
    newUl.appendChild(newLiDate);

    var newLiPrior = document.createElement("li");
    newLiPrior.innerText = element.priority;
    newUl.appendChild(newLiPrior);

    var newLiDesc = document.createElement("li");
    newLiDesc.innerText = element.description;
    newUl.appendChild(newLiDesc);

    var newLiDone = document.createElement("li");
    newLiDone.innerText = element.done;
    newUl.appendChild(newLiDone);

    //dodawanie buttona delete z klasa del
    var newDelBtn = document.createElement("button");
    newDelBtn.innerText = "Delete";
    newDelBtn.setAttribute("class", "del");

    newDelBtn.addEventListener("click", function (e) {
        var ul = this.parentElement;
        ul.parentElement.removeChild(ul);
        e.preventDefault();
    });

    newUl.appendChild(newDelBtn);

    //dodanie przycisku done do odznaczania wykonanych zadan
    var doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.setAttribute("class", "done");

    doneBtn.addEventListener("click", function (e) {
        this.parentElement.classList.toggle('hide');
        e.preventDefault();
    });

    newUl.appendChild(doneBtn);


    herePush.appendChild(newUl);

});

//zmienne

//guzik zatwierdz
var submitButton = document.querySelector(".btnPrimary");
console.log(submitButton);

//element do ktorego pushujemy
var herePush = document.getElementById("createList");
console.log(herePush);

//inputy w naszym formularzu z ktorych pobieramy glownie value

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

//co sie dzieje po nacisnieciu przycisku

submitButton.addEventListener("click", function(e) {

    e.preventDefault();

    //powiedzmy niech walidacja idzie na poczatek

    if (!listTitle.value || !listDate.value) {
        alert("Please fill in the form correctly");
        return false;
    }

    //dodajemy nowe elementy z formularza

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
    newLiDone.innerText = listDone.checked;

    newUl.appendChild(newLiDone);

    //dodawanie buttona delete z klasa del
    var newDelBtn = document.createElement("button");
    newDelBtn.innerText = "Delete";
    newDelBtn.setAttribute("class", "del");

    newDelBtn.addEventListener("click", function (e) {
        var ul = this.parentElement;
        ul.parentElement.removeChild(ul);
        e.preventDefault();
    });

    newUl.appendChild(newDelBtn);

    //dodanie przycisku done do odznaczania wykonanych zadan
    var doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.setAttribute("class", "done");

    doneBtn.addEventListener("click", function (e) {
        this.parentElement.classList.toggle('hide');
        e.preventDefault();
    });

    newUl.appendChild(doneBtn);

    //final aplication
    herePush.appendChild(newUl);

    //tworzymy konstruktor dla dodawania wartosci do tablicy task
    var Con = function (title, date, priority, description, done) {

        this.id = tasks.length + 1;
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.description = description;
        this.done = done;
    };

    var addObject = new Con(listTitle.value, listDate.value, listPrior.value, listDesc.value, listDone.checked);

    //dodajemy kazdy obiekt do glownej tablicy z taskami
    tasks.push(addObject);

    //zapisanie tablicy z taskami do local storage
    localStorage.setItem("toDoStorage", JSON.stringify(tasks));

    //clear formularza
    document.getElementById("myForm").reset();

});


//sortowanie po dacie od najblizszej do najdalszej

var dateSortButton = document.getElementById("byDate");

dateSortButton.addEventListener("click", function (e) {

    e.preventDefault();

    tasks.sort(function (a, b) {
        return parseInt(a.date.replace(/-/g, ""), 10) - parseInt(b.date.replace(/-/g, ""), 10);
    });

    console.log(tasks);
    localStorage.setItem("toDoStorage", JSON.stringify(tasks));
    location.reload();

});

//nie wiem jak to sortuje skoro tasks jest objektem, probowalem petle foreach ale nie dziala.

//sortowanie po priorytecie od 1 w gore

var priorSortButton = document.getElementById("byPrior");

priorSortButton.addEventListener("click", function (e) {
    e.preventDefault();

    tasks.sort(function (a, b) {
        return parseInt(a.priority, 10) - parseInt(b.priority, 10);
    });

    console.log(tasks);
    localStorage.setItem("toDoStorage", JSON.stringify(tasks));
    location.reload();

});

//sortowanie najpierw false
var whatToDoSortButton = document.getElementById("byWhatToDo");

whatToDoSortButton.addEventListener("click", function (e) {

    e.preventDefault();

    tasks.sort(function (a, b) {
        return a.done > b.done;
    });

    console.log(tasks);
    localStorage.setItem("toDoStorage", JSON.stringify(tasks));
    location.reload();

});

//sortowanie najpier true
var whatIsDone = document.getElementById("byWhatsDone");

whatIsDone.addEventListener("click", function (e) {

    e.preventDefault();

    tasks.sort(function (a, b) {
        return b.done > a.done;
    });

    console.log(tasks);
    localStorage.setItem("toDoStorage", JSON.stringify(tasks));
    location.reload();

});