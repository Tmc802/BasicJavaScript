/* event Listener deleting items */
var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click', function(e){

    const li = e.target.parentElement;

    li.parentNode.removeChild(li)

  });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('navigation to', e.target.textContent, 'was prevented')
});


















/* traversing sibling to sibling */
// const bookList = document.querySelector('#book-list');

// get next node
// console.log('book-list next sibling is:', bookList.nextSibling);

//get next element instead of the next node
// console.log('book-list next sibling is:', bookList.nextElementSibling);

//previousSibling and elements
// console.log('book-list previous sibling is:', bookList.previousElementSibling);
// console.log('book-list previous sibling is:', bookList.previousElementSibling);

//using element siblings to change innerHTML
// document.querySelector("#page-banner").addEventListener("click", function (){
//   bookList.previousElementSibling.querySelector('h1').innerHTML = '<br />Derick Zoolander Center for kids who dont read good';
//   bookList.previousElementSibling.querySelector('p').innerHTML = '<br />and want to learn how to do other stuff good too.';
// });



// bookList.previousElementSibling.querySelector('h1').innerHTML = '<br />Derick Zoolander Center for kids who dont read good';
// bookList.previousElementSibling.querySelector('p').innerHTML = '<br />and want to learn how to do other stuff good too.';









/* traversing nodes */
// const bookList = document.querySelector('#book-list');
//
//
//
// // both output the same
// console.log('the parent node is:', bookList.parentNode);
// // console.log('the parent node is:', bookList.parentElement);
//
// // find parent element of book list then find parent element of that. goes two levels up. traverses up.
// console.log('the parent node is:', bookList.parentElement.parentElement);
//
// //traversing to child nodes. has line breaks
// console.log(bookList.childNodes)
//
// //leaves out the text nodes such as line breaks
// console.log(bookList.children)











// /* Nodes */
// const banner = document.querySelector('#page-banner');
//
// // return node type
// console.log('#page-banner node type is', banner.nodeType);
//
// // return node name
// console.log('#page-banner node type is', banner.nodeName);
//
// //node with methid
// console.log('#page-banner has child nodes', banner.hasChildNodes());
//
// //cloned banner
// const clonedBanner = banner.cloneNode(false);
// console.log(clonedBanner);




/* replacing html*/

// //selecting all with querySelector
// var books = document.querySelectorAll('#book-list li .name');
//
// // create an array from the li elements
// Array.from(books).forEach(function(book){
//   book.textContent += '(book title)';
// });
//
// //replacing HTML
// const bookList = document.querySelector('#book-list');
// // bookList.innerHTML='<h2>Books and more books...</h2>';
//
// // appending not replacing
// bookList.innerHTML+='<p>This is how you add HTML</p>';
//
















/* querySelectors */

//  const wmf = document.querySelector('#book-list li:nth-child(2).name');
//  console.log(wmf);
//
//
//  var books = document.querySelector('#book-list li.name');
//  console.log(books);
//
//  books = document.querySelectorAll('#book-list li.name');
//  console.log(books);
//
//  Array.from(books).forEach(function(book){
//   console.log(book);
// });
