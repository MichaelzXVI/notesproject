// ------
let today = new Date();
let year = today.getFullYear();
let mes = today.getMonth() + 1;
let dia = today.getDate();
// ---




const todayDate = dia + "." + mes + "." + year;
const noteBar = document.querySelector(".take-a-note textarea");
const noteContainer = document.querySelector(".container-child");


class Note {
    constructor(noteThis) {
        this.noteThis = noteThis;

    }

    getHtml() {

        noteContainer.innerHTML += `
            <div class="note">
                <i class="fa-solid fa-paperclip"></i>
                <p>${this.noteThis}</p>
                <span>${todayDate}</span><br><br>
                <i id="delete" class="fa-solid fa-square-xmark"></i>
            </div>

      </div>
    `;
    }
}


function addNote() {
    let plusNote = new Note(noteBar.value);
    plusNote.getHtml();
    noteBar.value = "";
    saveNotesToLocalStorage()

}

function deleteNote() {
    const note = event.target.closest(".note");
    note.remove();
    saveNotesToLocalStorage();
}

function saveNotesToLocalStorage() {
    const notes = noteContainer.innerHTML;
    localStorage.setItem("notes", notes);
}

function loadNotesFromLocalStorage() {
    const notes = localStorage.getItem("notes");
    if (notes) {
        noteContainer.innerHTML = notes;
    }
}

// Load notes from local storage when the page is loaded
window.addEventListener("DOMContentLoaded", loadNotesFromLocalStorage);

