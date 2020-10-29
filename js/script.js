/* Beer API 
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
        url: `https://api.punkapi.com/v2/beers/?beer_name=${searchText}`
    }).then(
        (data) => {
            let $beerlogo = $("#beerlogo")
            console.log(data);
            $("#beername").text(data[0].name)
            $("#abv").text(data[0].abv + '%')
            $("#description").text(data[0].description)
            $("#pairing").text(data[0].food_pairing)
            // $beerlogo.attr("src", data[0].image_url);
            $("#search").val("");
            if (data[0].image_url === null) {
                return $beerlogo.attr("src", "https://cdn.pixabay.com/photo/2018/08/21/21/49/beer-3622237_960_720.png")
            } else {
                return ($beerlogo.attr("src", data[0].image_url))
            }
        },
        (error) => {
            console.log("bad request: ", error),
                alert("Beer name required for search")
        },
    )
}

function randomize() {
    event.preventDefault();
    $.ajax({
        url: `https://api.punkapi.com/v2/beers/random`
    }).then(
        (data) => {
            console.log(data);
            $("#beername").text(data[0].name)
            $("#abv").text(data[0].abv + '%')
            $("#description").text(data[0].description)
            $("#pairing").text(data[0].food_pairing);
            // $("#beerlogo").attr("src", data[0].image_url);
            if (data[0].image_url === null) {
                return $("#beerlogo").attr("src", "https://cdn.pixabay.com/photo/2018/08/21/21/49/beer-3622237_960_720.png")
            } else {
                return ($("#beerlogo").attr("src", data[0].image_url))
            }
        }
    )
}

//Event listeners
$("#mainsearch").on('submit', handleGetData)
$("#random").on('submit', randomize)