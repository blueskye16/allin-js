const books = [];
const RENDER_EVENT = 'render-book';

document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('bookForm');
  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
    // const { doneContainerElement: alertContainer, btnCloseDoneAlert: closeButton } = getDoneAlert();
    const doneAlert = getDoneAlert();
    doneAlert.btnCloseDoneAlert.addEventListener('click', function () {
      doneAlert.doneContainerElement.classList.add('hidden');
    });
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

function getBookDetailsFromForm() {
  return {
    titleElement: document.getElementById('bookFormTitle'),
    authorElement: document.getElementById('bookFormAuthor'),
    yearElement: document.getElementById('bookFormYear'),
  };
}

function getDoneAlert() {
  return {
    doneContainerElement: document.getElementById('doneAlert'),
    btnCloseDoneAlert: document.getElementById('btnCloseDoneAlert'),
  };
}

function addBook() {
  const { titleElement, authorElement, yearElement } = getBookDetailsFromForm();

  const generatedID = generateId();
  const checkState = bookFormCheckState();
  const bookObject = generateBookObject(
    generatedID,
    titleElement.value,
    authorElement.value,
    parseInt(yearElement.value),
    checkState
  );

  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();

  clearFormInput();
}

function generateBookObject(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year,
    isComplete,
  };
}

function clearFormInput() {
  const { titleElement, authorElement, yearElement } = getBookDetailsFromForm();
  const doneAlert = document.getElementById('doneAlert');

  titleElement.value = '';
  authorElement.value = '';
  yearElement.value = '';
  document.getElementById('bookFormIsComplete').checked = false;

  doneAlert.classList.remove('hidden');
}

function searchBooks() {
  const searchInput = document
    .getElementById('searchBookTitle')
    .value.toLowerCase();
  const btnClearSearchInput = document.getElementById('clearSearch');
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput)
  );
  renderBooks(filteredBooks);

  btnClearSearchInput.classList.remove('hidden');
}

function clearInput() {
  document.getElementById('searchBookTitle').value = '';
}

function renderBooks(bookList = books) {
  const incompleteBookList = document.getElementById('incompleteBookList');
  const completeBookList = document.getElementById('completeBookList');

  incompleteBookList.innerHTML = '';
  completeBookList.innerHTML = '';

  for (const bookItem of bookList) {
    const bookElement = makeBook(bookItem);
    if (!bookItem.isComplete) {
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

function makeBook(bookObject) {
  const btnClass = [
    'sm:col-start-2',
    'text-center',
    'p-1',
    'text-sm',
    'rounded-md',
    'focus:outline-none',
    'text-white',
    'w-full',
  ];
  const btnContainerClass = [
    'grid',
    'grid-cols-2',
    'mt-2',
    'w-full',
    'gap-2',
    'sm:grid-rows-3',
    'sm:place-items-end',
    'sm:col-start-2',
    'sm:row-start-1',
    'sm:row-span-3',
  ];

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

  const btnContainer = document.createElement('div');
  btnContainer.classList.add(...btnContainerClass);

  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.classList.add(
    ...btnClass,
    'sm:row-start-2',
    'bg-yellow-600',
    'hover:bg-yellow-700'
  );

  editBtn.setAttribute('data-testid', 'bookItemEditButton');
  editBtn.addEventListener('click', function () {
    editBook(bookObject.id);
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Hapus';
  deleteBtn.classList.add(
    ...btnClass,
    'sm:row-start-3',
    'bg-red-500',
    'hover:bg-red-600'
  );

  deleteBtn.setAttribute('data-testid', 'bookItemDeleteButton');
  const deleteBookNotification = document.getElementById('deleteAlert');
  const btnDeleteBookNotification = document.getElementById(
    'btnCloseDeleteAlert'
  );

  btnDeleteBookNotification.addEventListener('click', function () {
    deleteBookNotification.classList.add('hidden');
  });

  deleteBtn.addEventListener('click', function () {
    deleteBook(bookObject.id);
    deleteBookNotification.classList.remove('hidden');
  });

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
  container.setAttribute('data-bookid', `book-${bookObject.id}`);
  container.setAttribute('data-testid', 'bookItem');

  if (bookObject.isComplete) {
    const undoBtn = document.createElement('button');
    undoBtn.innerText = 'Belum Selesai dibaca';
    undoBtn.classList.add(
      ...btnClass,
      'col-span-2',
      'sm:col-span-1',
      'bg-orange-600',
      'hover:bg-orange-700'
    );

    undoBtn.setAttribute('data-testid', 'bookItemIsCompleteButton');
    undoBtn.addEventListener('click', function () {
      undoBookFromCompleted(bookObject.id);
    });

    btnContainer.append(undoBtn, deleteBtn, editBtn);
  } else {
    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Selesai dibaca';
    doneBtn.classList.add(
      ...btnClass,
      'col-span-2',
      'sm:col-span-1',
      'bg-green-500',
      'hover:bg-green-600'
    );

    doneBtn.setAttribute('data-testid', 'bookItemIsCompleteButton');
    doneBtn.addEventListener('click', function () {
      addBookToCompleted(bookObject.id);
    });

    btnContainer.append(doneBtn, deleteBtn, editBtn);
  }

  container.append(textTitle, textAuthor, textYear, btnContainer);
  return container;
}

function addBookToCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoBookFromCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function findBook(bookId) {
  for (const bookItem of books) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }
  return null;
}

function deleteBook(bookId) {
  const bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;

  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function findBookIndex(bookId) {
  for (const index in books) {
    if (books[index].id === bookId) {
      return index;
    }
  }

  return -1;
}

document.addEventListener(RENDER_EVENT, function () {
  console.log(books);
  renderBooks();
});

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'BOOK_APPS';

function isStorageExist() {
  if (typeof Storage === undefined) {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
}

document.addEventListener(SAVED_EVENT, function () {
  console.log(localStorage.getItem(STORAGE_KEY));
});

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const todo of data) {
      books.push(todo);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}
