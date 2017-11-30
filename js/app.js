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
				title: "Tes",
				date: "2017-11-30",
				priority: 1,
				description:"",
				done: false
				}, 
				{ id: 4,
				title: "Tes",
				date: "2017-11-30",
				priority: 1,
				description:"",
				done: false
				}
			]

/*

Walidacja danych - jest
Pobrać nowe id (patrz subtask) - jest
Utworzyć obiekt z nowym zadaniem - jest
Dodać obiekt do tablicy - jest
Zapisać całą tablicę do localStorage - jest

*/		
			
			
			
			
			var lsTasks = [];
			var lsGet = [];

			if( localStorage.length === 0) 
				{
				console.log('ls puste');
				} else {
					
					var lsTasks = localStorage.setItem('todo_list', JSON.stringify( tasks ) );
					var lsGet = JSON.parse(localStorage.getItem('todo_list'));
					console.log(lsGet);
		
				}

			function validiate()
			{
				for(var i = 0; i < lsGet.length; i++)
				{
					
						
					if(lsGet[i].title.length < 5)
					{
						lsGet[i].title = "wpisz co najmniej 5 znaków";
					}
								
				
				}
				function newObjt(){
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
					
					
		
					lsGet.push(addObject);
		
				
					}
					newObjt();
					console.log(lsGet);
					console.log(lsGet[4]);
					}
			
			validiate();
	

//Zapis

// localStorage.setItem('todo_list', JSON.stringify( tasks ) );

//Odczyt


//var tasks = JSON.parse( localStorage.getItem('todo_list') );



});
