////// TESTING JS AND jQuery
// alert('js is working');
// console.log('jQuerry', $);

/// IIFE----> imediatly invoked function expression
/// add at the end
//$(function() {

    /// IPO - Input ---> Process ---> Output --->

    /// Constants and Variables

    // const API_URL = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://dad-jokes.p.rapidapi.com/random/joke/png",
    //     "method": "GET",
    //     "headers": {
    //         "X-RapidAPI-Key": "67fdb2c8f5msh07c8daabd1899a4p11e21djsnf044be486fc5",
    //         "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com"
    //     }
    // };


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

    /// Functions

    function getJoke() {
            ($jokeSection).html("What is so great about a boolean?");
    }

    // second on click doesnt need a second api call 
    function getPunchline() {
        ($punchlineSection).html("if you use it wrong you're only off by a little bit")
        }

    /// Psuedocoe

    /*
    1) select a dom element I can use to insert the jokes into

    2) make an ajax request to the api and get joke data 

    3) loop over the list of dad joke objects and generate an html output for each joke and punchline object

    4) use the selected dom element to append joke section to the dom

    */
//})

