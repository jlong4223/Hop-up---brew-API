// alert("this is js speaking")

/* This was my first API that I tried to connect to but kept recieving CORS error
Beer API
https://sandbox-api.brewerydb.com/v2/beer/random/?key=203519b93825fa67c097215a92281dc0

https://sandbox-api.brewerydb.com/v2/{endpoint}?key=203519b93825fa67c097215a92281dc0

Search beers by name: 
`https://sandbox-api.brewerydb.com/v2/beers/?name=freedom+Tickler&key=203519b93825fa67c097215a92281dc0`

`https://sandbox-api.brewerydb.com/v2/beer/${searchText}/?key=203519b93825fa67c097215a92281dc0`

`https://sandbox-api.brewerydb.com/v2/beers/?name=%27murican+Pilsner&key=203519b93825fa67c097215a92281dc0`

search beers by id:
https://sandbox-api.brewerydb.com/v2/beer/eVgnFV/?key=203519b93825fa67c097215a92281dc0
*/

/* API number 2


*/



console.log("its working!")

function handleGetData(event) {
    event.preventDefault();
    const searchText = $("#search").val()
    $.ajax({
        url: 
            `https://api.punkapi.com/v2/beers/?beer_name=choco+Libre`
    }).then(
        (data) => {
            console.log(data);
            $("#beername").text(data[0].name)
            $("#abv").text(data[0].abv + '%')
            $("#description").text(data[0].description)
            $("#pairing").text(data[0].food_pairing)
        },
        (error) => {
            console.log("bad request: ", error), 
            alert("bad request")
        } 
    )
}




$("form").on('submit', handleGetData)