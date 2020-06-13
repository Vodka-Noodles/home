var books;

function preload(){
    books = loadTable('book.tsv', 'tsv', 'header');
}

function setup(){
    noCanvas();
    console.log(books.getColumn('Titolo'));
}