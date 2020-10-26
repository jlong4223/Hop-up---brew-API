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
    //with beer name that I used to test data in the console
https://api.punkapi.com/v2/beers/?beer_name=choco+Libre

    //the api changed to reflect the JS function
https://api.punkapi.com/v2/beers/?beer_name=${searchText}  

    //the random endpoint
https://api.punkapi.com/v2/beers/random 
*/



console.log("its working!")

//functions

function handleGetData(event) {
    event.preventDefault();
    const searchText = $("#search").val()
    $.ajax({
        url: 
            `https://api.punkapi.com/v2/beers/?beer_name=${searchText}`
    }).then(
        (data) => {
            let $beerlogo = $("#beerlogo")
            // if ($beerlogo.attr(data[0].image_url === null)){
            //     return $beerlogo.attr("src", "https://image.freepik.com/free-photo/empty-beer-glass-isolated-white_127657-6823.jpg")
            // } else {
            //     return ($beerlogo.attr("src", data[0].image_url))
            // }
            console.log(data);
            $("#beername").text(data[0].name)
            $("#abv").text(data[0].abv + '%')
            $("#description").text(data[0].description)
            $("#pairing").text(data[0].food_pairing)
            $beerlogo.attr("src", data[0].image_url); 
        },
        (error) => {
            console.log("bad request: ", error), 
            alert("Beer name required for search")
        }, 
    ) 
}

function randomize() {
    event.preventDefault();
    $.ajax ({
        url: `https://api.punkapi.com/v2/beers/random`
    }).then(
       (data) => {
        console.log(data);
        $("#beername").text(data[0].name)
        $("#abv").text(data[0].abv + '%')
        $("#description").text(data[0].description)
        $("#pairing").text(data[0].food_pairing)
        $("#beerlogo").attr("src", data[0].image_url)
       }
    )
}

//Event listeners

$("#mainsearch").on('submit', handleGetData)


$("#random").on('submit', randomize)
