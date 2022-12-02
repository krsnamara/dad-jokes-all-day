////// TESTING JS AND jQuery
// alert('js is working');
// console.log('jQuerry', $);

/// IIFE----> imediatly invoked function expression
/// add at the end
//$(function() {

    /// IPO - Input ---> Process ---> Output --->

    /// Constants and Variables

    const API_URL = {
        "async": true,
        "crossDomain": true,
        "url": "https://dad-jokes.p.rapidapi.com/random/joke/png",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "67fdb2c8f5msh07c8daabd1899a4p11e21djsnf044be486fc5",
            "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com"
        }
    };


    //use to generate api object to grab values
    // $.ajax(API_URL).done(function (response) {
    //     console.log(response)
    // });

    /// Cache DOM element references
    const $grabJoke = $('#joke');
    const $punchLine = $('#punchline');
    const $jokeSection = $('#joke-section');
    const $punchlineSection = $('#punchline-section')

    /// Register Event Listners
    $grabJoke.on('click', getJoke);

    //second on click for punchline button
    $punchLine.on('click', getPunchline);

    // testing to on.Click listener
    function getJoke() {
        console.log('click');
    }

    let joke 

    /// Functions

    function getJoke() {
        $.ajax(API_URL)
        .then(( data ) => {
            joke = data
            $jokeSection.text(data.body.setup);
        }, function(error) {
            console.log(error);
        });
    }

    // second on click doesnt need a second api call 
    function getPunchline() {
        $punchlineSection.text(joke.body.punchline);
        }
    // /// seprating concerns by putting this function here instead of in the dom above
    // function render(getJokes) {
    //     const jokeDisplay = getJokes.map(function(jokesObject) {
    //         return `
    //         <article data-index="${index}">
    //             <p>${jokesObject.setup}</p>
    //         </article>`;
    //     }).join('');

    //     $jokeSection.html(jokeDisplay);
    // }

    /// Psuedocoe

    /*
    1) select a dom element I can use to insert the jokes into

    2) make an ajax request to the api and get joke data 

    3) loop over the list of dad joke objects and generate an html output for each joke and punchline object

    4) use the selected dom element to append joke section to the dom

    */
//})

