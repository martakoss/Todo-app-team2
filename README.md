# Todo-app-team2

STWORZENIE APLIKACJI 


Opis: 

Mamy użytkownika

Główna strona zawiera listę zadań wg terminów + przycisk do dodawania zadania + linki do zmiany filtrowania (priorytety / zadanie wykonane / zadania do wykonania)

Przycisk dodaj - pokazuje formularz do dodawania zadania, po zatwierdzeniu js-em blokujemy wysyłkę, walidujemy dane, dodajemy do tablicy zadań + zapis do local storage + dodanie do listy html i schowanie formularza

# 1 Rejestracja zadań do wykonania

Wprowadzanie zadań do wykonania, mają zawierać:
- temat zadania (obowiązkowe)
- termin
- priorytet (1 - 5, gdzie 1 to najważniejsze, 5 to najmniej istotne)
- opis

Dane wprowadzane przez formularz.

Dane przechowywane w tablicy obiektów w strukturze:

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

<li data-id=1 >

<input type="checkbox" name="done" />
</li>

Zapis
localStorage.setItem('todo_list', JSON.strigify( tasks ) );

Odczyt:
var tasks = JSON.parse( localStorage.getItem('todo_list') );

#1A Wczytanie / Utworzenie danych

Próba odczytu z localStorage , jak jest to zapisanie do tablicy tasks z deserializacją (JSON.parse () ),
jeżeli nie istnieje to utworzenie pustej tablic tasks


#1B - Utworzenie html-a z formularzem

#1C - Tworzenie nowego id dla elementu

Funkcja do pobierania ostatniego id + 1

(Sortowanie po id - malejąco), pobranie pierwszego i zwiększenie o jeden, jak tablica pusta to id = 1

#1D - Obsługa formularza za pomocą js-a

Walidacja danych
Pobrać nowe id (patrz subtask)
Utworzyć obiekt z nowym zadaniem
Dodać obiekt do tablicy
Zapisać całą tablicę do localStorage




