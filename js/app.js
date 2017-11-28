// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {


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
				}, 
				{ id: 3,
				title: "Test app ",
				date: "2017-11-30",
				priority: 1,
				description:"",
				done: false
				}
			]

/*

Walidacja danych
Pobrać nowe id (patrz subtask)
Utworzyć obiekt z nowym zadaniem
Dodać obiekt do tablicy
Zapisać całą tablicę do localStorage

*/


	
		
		
			var Con = function(lastId, id, title, date, priority, description, done, addToArr)
			{
				lastId = tasks[tasks.length-1].id;	
				this.id = lastId + 1;
				this.title = title;
				this.date = date;
				this.priority = priority;
				this.description = description;
				this.done = done;
	
			};
			
			var addObject = new Con(this.id , this.title, this.date, this.priority, this.description, this.done)
			
			
			tasks.push(addObject);

			
		
			
			console.log(tasks);
			console.log(tasks[3]);
			
			if(localStorage.length===0) 
				{
				var lsTasks = [];
				console.log('ls puste');
				} else {
					
			var lsTasks = localStorage.setItem('todo_list', JSON.stringify( tasks ) );
			var lsGet = JSON.parse(localStorage.getItem('todo_list'));
			console.log(lsGet);
	
				}
		
		
		
	
		


//Zapis

// localStorage.setItem('todo_list', JSON.stringify( tasks ) );

//Odczyt


//var tasks = JSON.parse( localStorage.getItem('todo_list') );



});