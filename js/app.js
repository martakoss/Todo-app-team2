document.addEventListener("DOMContentLoaded", function() {

//sprawdzanie czy local storage jest pusty
    if(localStorage.length===0)
    {
        //jesli tak to tworzy pusta tablice
        var tasks = [];
        console.log('ls puste');
        console.log(tasks);

        //jesli nie to laduje tablice
    } else {

        var ul = document.querySelector('ul');

        var tasks = JSON.parse(localStorage.getItem('todo_list'));


// i przechodzi po wszystkich elementach i laduje je na stronie
        var herePush = document.getElementById("createList");

        tasks.forEach(function (element, index) {

            var newUl = document.createElement("ul");

            var newLiTitle = document.createElement("li");
            newLiTitle.innerText = element.title;
            newLiTitle.setAttribute("contenteditable", "true");//edytowanie danego pola, niestety nie zapisuje do ls

            newUl.appendChild(newLiTitle);

            var newLiPrior = document.createElement("li");
            newLiPrior.innerText = element.date;
            newUl.appendChild(newLiPrior);

            var newLiDesc = document.createElement("li");
            newLiDesc.innerText = element.priority;
            newUl.appendChild(newLiDesc);

            var newLiDone = document.createElement("li");
            newLiDone.innerText = element.done;
            newUl.appendChild(newLiDone);

            //dodawanie buttona delete z klasa del
            var newDelBtn = document.createElement("button");
            newDelBtn.innerText = "delete";
            newDelBtn.setAttribute("class", "del");
            newUl.appendChild(newDelBtn);


            //dodanie przycisku done do odznaczania wykonanych zadan
            var doneBtn = document.createElement("button");
            doneBtn.innerText = "done";
            doneBtn.setAttribute("class", "done");
            newUl.appendChild(doneBtn);

            herePush.appendChild(newUl);

        });

    }
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



//co sie dzieje po nacisnieciu przycisku

    submitButton.addEventListener("click", function (e) {

        e.preventDefault();

        //dodajemy nowe elementy z formularza
        var newUl = document.createElement("ul");

        var newLiTitle = document.createElement("li");
        newLiTitle.innerText = listTitle.value;
        newLiTitle.setAttribute("contenteditable", "true");

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
        newDelBtn.innerText = "delete";
        newDelBtn.setAttribute("class", "del");
        newUl.appendChild(newDelBtn);

        //dodanie przycisku done do odznaczania wykonanych zadan
        var doneBtn = document.createElement("button");
        doneBtn.innerText = "done";
        doneBtn.setAttribute("class", "done");
        newUl.appendChild(doneBtn);

        herePush.appendChild(newUl);

//tworzymy obiekt z dodanymi danymi z formularza
        var Con = function(lastId, id, title, date, priority, description, done)
        {

            this.id = tasks.length + 1;
            this.title = listTitle.value;
            this.date = listDate.value;
            this.priority = listPrior.value;
            this.description = listDesc.value;
            this.done = listDone.value;

        };

        var addObject = new Con(this.id , this.title, this.date, this.priority, this.description, this.done)

//dodajemy kazdy obiekt do glownej tablicy z taskami
        tasks.push(addObject);

        title.value = "";
        date.value = "";
        prior.value = "1";

        console.log(tasks);

        //usuniecie calego ul z taskiem i info

        document.querySelectorAll(".del").forEach(function(button){
            button.addEventListener("click", function(e){
                e.preventDefault();

                var ul = this.parentElement;
                ul.parentElement.removeChild(ul);

            });
        });

        // odznaczanie zrobionego zadania, dodaje klase hide dla calego tasku-ul

        document.querySelectorAll(".done").forEach(function(button){
            button.addEventListener("click", function(e){
                e.preventDefault();

                console.log('click');
                this.parentElement.classList.toggle('hide');

            });
        });


//zapisanie tablicy z taskami do local stotage
        localStorage.setItem('todo_list', JSON.stringify(tasks));



    });


//usuniecie calego ul z taskiem i info

    document.querySelectorAll(".del").forEach(function(button){
        button.addEventListener("click", function(e){
            e.preventDefault();

            var ul = this.parentElement;
            ul.parentElement.removeChild(ul);

        });
    });

    // odznaczanie zrobionego zadania, dodaje klase hide dla calego tasku-ul

    document.querySelectorAll(".done").forEach(function(button){
        button.addEventListener("click", function(e){
            e.preventDefault();

            console.log('click');
            this.parentElement.classList.toggle('hide');

        });
    });

    //sortowanie po dacie od najblizszej do najdalszej
    document.querySelectorAll("#byDate").forEach(function(button){
        button.addEventListener("click", function(e){
            e.preventDefault();

            tasks = tasks.sort(function (a, b) {
                return parseInt(a.date.replace(/-/g, ""), 10) - parseInt(b.date.replace(/-/g, ""), 10);
            });

            console.log(tasks);
            localStorage.setItem('todo_list', JSON.stringify(tasks));
            location.reload();

        });
    });

//sortowanie po priorytecie od 1 w gore
    document.querySelectorAll("#byPrior").forEach(function(button){
        button.addEventListener("click", function(e){
            e.preventDefault();

            tasks.sort(function (a, b) {
                return parseInt(a.priority, 10) - parseInt(b.priority, 10);
            });

            console.log(tasks);
            localStorage.setItem('todo_list', JSON.stringify(tasks));
            location.reload();

        });
    });


});



