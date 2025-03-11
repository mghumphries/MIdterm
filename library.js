const books = [
    {
        bookTitle: "To Kill a Mockingbird",
        bookAuthor: "Harper Lee",
        pubYear: "1960",
    },
    {
        bookTitle: "1984",
        bookAuthor: "George Orwell",
        pubYear: "1949",
    },
    {
        bookTitle: "Lord of The Flies",
        bookAuthor: "William Golding",
        pubYear: "1954",
    },
    {
        bookTitle: "The Handmaid's Tale",
        bookAuthor: "Margaret Atwood",
        pubYear: "1985",
    },
    {
        bookTitle: "Fahrenheit 451",
        bookAuthor: "Ray Bradbury",
        pubYear: "1953",
    },
    {
        bookTitle: "Of Mice and Men",
        bookAuthor: "John Steinbeck",
        pubYear: "1937",
    },
    {
        bookTitle: "Kite Runner",
        bookAuthor: "Khaled Hosseini",
        pubYear: "2003",
    },
    {
        bookTitle: "The Color Purple",
        bookAuthor: "Alice Walker",
        pubYear: "1982",
    },
    {
        bookTitle: "I Know Why the Caged Bird Sings",
        bookAuthor: "Maya Angelou",
        pubYear: "1969",
    },
    {
        bookTitle: "The Catcher in the Rye",
        bookAuthor: "JD Salinger",
        pubYear: "1951",
    }
];

const act = () => {
    let actions = document.querySelector(".bookchoice");
    switch (actions) {
        case "C":
            createABook();
            break;
        case "R":
            readABook();
            break;
        case "U":
            updateABook();
            break;
        case "D":
            deleteABook();
            break;
    }
}

const listBooks = () => {
    let bookList = document.querySelector(".bookList");

    bookList.forEach((book) => {
        allBooks += `<li> ${books.bookTitle}</li><br>`;
    })
    allBooks += `</ul>`;
    
    bookList.innerText = allBooks;
    console.log("allBooks");
}