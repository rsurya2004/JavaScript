let books = {
    "Surya" : 2004,
    "Dhruv" : 2010,
    "Kiran" : 2015,
    "Ash"   : 2004,
    "Simar" : 2012
}

let capitalizeAuthorsAfter2010 = Object.fromEntries(
    Object.entries(books).map(([author, year]) => 
    [year>2010 ? author.toUpperCase() : author,year ]
    )
)

console.log(capitalizeAuthorsAfter2010);


