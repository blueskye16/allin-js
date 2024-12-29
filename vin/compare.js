const books = [];
const RENDER_EVENT = 'render-book';

document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('bookForm');
  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
  });

  const searchForm = document.getElementById('searchBook');
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    searchBooks();
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
  const checkState = bookFormCheckState();
  const bookObject = generateBookObject(
    generatedID,
    textTitle,
    textAuthor,
    textYear,
    checkState
  );
  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function searchBooks() {
  const searchInput = document.getElementById('searchBookTitle').value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchInput)
  );
  renderBooks(filteredBooks);
}

function renderBooks(bookList = books) {
  const incompleteBookList = document.getElementById('incompleteBookList');
  const completeBookList = document.getElementById('completeBookList');

  incompleteBookList.innerHTML = '';
  completeBookList.innerHTML = '';

  for (const bookItem of bookList) {
    const bookElement = makeBook(bookItem);
    if (!bookItem.isCompleted) {
      incompleteBookList.append(bookElement);
    } else {
      completeBookList.append(bookElement);
    }
  }
}

function generateId() {
  return +new Date();
}

function bookFormCheckState() {
  return document.getElementById('bookFormIsComplete').checked;
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
  const textTitle = document.createElement('h3');
  textTitle.innerText = `Judul Buku: ${bookObject.title}`;
  textTitle.classList.add('sm:col-start-1', 'text-xl', 'font-medium');
  textTitle.setAttribute('data-testid', 'bookItemTitle');

  const textAuthor = document.createElement('p');
  textAuthor.innerText = `Penulis: ${bookObject.author}`;
  textAuthor.classList.add('sm:col-start-1');
  textAuthor.setAttribute('data-testid', 'bookItemAuthor');

  const textYear = document.createElement('p');
  textYear.innerText = `Tahun: ${bookObject.year}`;
  textYear.classList.add('sm:col-start-1');
  textYear.setAttribute('data-testid', 'bookItemYear');

  const container = document.createElement('div');
  container.classList.add(
    'sm:grid',
    'sm:grid-cols-2',
    'gap-1',
    'p-3',
    'bg-stone-200',
    'my-4',
    'rounded-lg'
  );
  container.append(textTitle, textAuthor, textYear);

  return container;
}

// Render all books initially
document.addEventListener(RENDER_EVENT, function () {
  renderBooks();
});

function isStorageExist() {
  // Check for storage availability (not implemented here)
  return true;
}

function saveData() {
  // Save data to local storage (not implemented here)
}

function loadDataFromStorage() {
  // Load data from local storage (not implemented here)
}
