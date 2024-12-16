// Do your work here...
// console.log('Hello, world!');
const books = [];
const RENDER_EVENT = 'render-book';

document.addEventListener('DOMContentLoaded', function() {
    const submitForm = document.getElementById('bookForm');
    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addBook();;
    });
    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

function addBook() {
    const textTitle = document.getElementById('bookFormTitle').value;
    const textAuthor = document.getElementById('bookFormAuthor').value;
    const textYear = document.getElementById('bookFormYear').value;

    const generatedID = generateId();
    const bookObject = generateBookObject(
        generatedID,
        textTitle,
        textAuthor,
        textYear,
        false
    );
    books.push(bookObject);

    document.dispatchEvent(new Event (RENDER_EVENT));
    saveData();
}

function generateId() {
    return +new Date();
}

function generateBookObject(id, title, author, year, isCompleted) {
    return {
        id,
        title,
        author,
        year,
        isCompleted,
    };
}

function makeBook(bookObject) {
    const textClasses = ['sm:col-start-1', 'text-sm'];

    const textTitle = document.createElement('h3');
    textTitle.innerText = bookObject.title;
    textTitle.classList.add(...textClasses);

    const textAuthor = document.createElement('p');
    textAuthor.innerText = bookObject.author;
    textAuthor.classList.add(...textClasses);

    const textYear = document.createElement('p');
    textYear.innerText = bookObject.year;
    textYear.classList.add(...textClasses);

    // adding check function

    if(bookObject.isCompleted) {    
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText('Hapus');
        deleteBtn.classList.add(`sm:row-start-2 text-center text-sm p-1 text-sm rounded-md focus:outline-none text-white bg-red-500 w-full`);
    
        const editBtn = document.createElement('button');
        editBtn.innerText('Edit');
        editBtn.classList.add(`sm:row-start-3 text-center text-sm p-1 text-sm rounded-md focus:outline-none text-white bg-yellow-500 w-full`);
    } else {
        const doneBtn = document.createElement('button');
        doneBtn.innerText('Selesai dibaca');
        doneBtn.classList.add(`col-span-2 sm:col-span-1 text-center p-1 text-sm rounded-md focus:outline-none text-white bg-green-500 w-full`);
    }

    // perhitungin append-nya

    const btnContainer = document.createElement('div');
    btnContainer.classList.add(`grid grid-cols-2 mt-2 w-full gap-2 sm:grid-rows-3 sm:place-items-end sm:col-start-2 sm:row-start-1 sm:row-span-3`);
    btnContainer.append(doneBtn, deleteBtn, editBtn);

    const container = document.createElement('div');
    container.classList.add(`sm:grid sm:grid-cols-2 gap-1`)
    container.append(textTitle, textAuthor, textYear, btnContainer);
    container.setAttribute('data-bookid', `book-${bookObject.id}`);
    // data-testid belum
}