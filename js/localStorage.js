var tasks = [
    { id: 1,
        title: "Make app done",
        date: "2017-11-30",
        priority: 1,
        description:"",
        done: false
    },
    { id: 2,
        title: "Test app ",
        date: "2017-11-30",
        priority: 1,
        description:"",
        done: false
    }
]


// zapis do local storage
localStorage.setItem('tasks', JSON.stringify(tasks));



// odczyt z local storage

//jesli local storage puste tworzy tablice
if(localStorage.length===0) {
    var lsTasks = [];
    console.log('ls puste');
    //jestli local storage nie jest puste wczytuje zapisana tablice
} else {
    var lsTasks = JSON.parse(localStorage.getItem('tasks'));
    console.log('wczytanie z ls');
}

