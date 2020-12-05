let addBtn = document.getElementById('addbtn');
shownotes();

//to add the data in local storage
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addtext');
    let addTitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let myobj = {
        title: addTitle.value,
        text: addText.value
    }

    notesobj.push(myobj);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addText.value = "";
    addTitle.value = "";
    shownotes();

})

// show the data on web page ,from localstorage.
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` <div class="card mx-2 my-2 notecard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> ${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>`;
    });

    let noteselement = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselement.innerHTML = html;
    }
    else {
        noteselement.innerHTML = `Nothing to show! "ADD A NOTE" from above section.`
    }
}

//to delete the notes
function deletenote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    shownotes();
}

//to serach the element
let search = document.getElementById('searchtxt');
search.addEventListener('input', function () {
    let inputvalue = search.value.toLowerCase();
    let notesdetails = document.getElementsByClassName('notecard');
    Array.from(notesdetails).forEach(function (element) {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;

        if (cardtxt.includes(inputvalue)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})
