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
				}, 
				{ id: 4,
				title: "Test app1 ",
				date: "2017-11-30",
				priority: 1,
				description:"",
				done: false
				}
			]

/*

Walidacja danych - do dodania
Pobrać nowe id (patrz subtask) - jest
Utworzyć obiekt z nowym zadaniem - jest
Dodać obiekt do tablicy - jest
Zapisać całą tablicę do localStorage - jest

*/		


<<<<<<< HEAD
			var vTab = JSON.parse( localStorage.getItem('todo_list') );

			function validiate()
			{
				for(var i = 0; i < vTab.length; i++)
				{
					console.log(vTab[i].title);	
					
					if(vTab[i].title == 'undefined')
					{
						vTab[i].title = "wpisz co najmniej 5 znaków";
					}
							
			
				}
			}
			validiate();
			
=======
	
		
		
>>>>>>> 65a8b277141740c7fd500193e8c80dfde2e4d402
			var Con = function(lastId, id, title, date, priority, description, done)
			{
				lastId = tasks[tasks.length-1].id;	
				this.id = lastId + 1;
				this.title = title;
				this.date = date;
				this.priority = priority;
				this.description = description;
				this.done = done;
				
			};
			
	
			var addObject = new Con(this.id, this.title, this.date, this.priority, this.description, this.done);
		

			tasks.push(addObject);

			console.log(tasks);
			console.log(tasks[4]);
			
			if( localStorage.length === 0) 
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
