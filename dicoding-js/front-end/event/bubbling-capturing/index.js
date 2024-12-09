const divs = document.getElementsByTagName('div');


// event bubbling
for (let el of divs) {
  el.addEventListener('click', function () {
    alert('ELEMEN ' + el.getAttribute('id').toUpperCase());
  });
}

// event capturing (with true statement)
for (let el of divs) {
  el.addEventListener('click', function() {
    alert('ELEMEN ' + el.getAttribute('id').toUpperCase());
  }, true);
}

/* catatan[event-bubbling-capturing] 
  
  document.addEventListener(event, function, Capture)
  https://www.w3schools.com/jsref/met_document_addeventlistener.asp
*/
