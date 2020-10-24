// alert("this is js speaking")

//Beer API
// https://sandbox-api.brewerydb.com/v2/beer/random/?key=203519b93825fa67c097215a92281dc0

//https://sandbox-api.brewerydb.com/v2/{endpoint}?key=203519b93825fa67c097215a92281dc0


//search beers by id:
//https://sandbox-api.brewerydb.com/v2/beer/eVgnFV/?key=203519b93825fa67c097215a92281dc0


console.log("its working!")

function handleGetData(event) {
    event.preventDefault();
    const searchText = $("#search").val()
    $.ajax({
        url: 
        `https://sandbox-api.brewerydb.com/v2/beer/${searchText}/?key=203519b93825fa67c097215a92281dc0`
    }).then(
        (data) => {
            console.log(data);
            $("#beername").text(data.name)
            $("#abv").text(data.abv)
            $("#description").text(data.style.description)
            $("#created").text(data.createDate)
        },
        (error) => {
            console.log("bad request: ", error)
        } 
    )
}




$("form").on('submit', handleGetData)