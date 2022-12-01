////// TESTING JS AND jQuery
// alert('js is working');
// console.log('jQuerry', $);

/// IIFE----> imediatly invoked function expression
/// add at the end
//$(function() {

    /// IPO - Input ---> Process ---> Output --->

    /// Constants and Variables

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://dad-jokes.p.rapidapi.com/random/joke/png",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "67fdb2c8f5msh07c8daabd1899a4p11e21djsnf044be486fc5",
            "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com"
        }
    };
    

    /// Cache DOM element references

    /// Register Event Listners
   
    /// Functions
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    /// manually invoke get data
 
    /// seprating concerns by putting this function here instead of in the dom above


    /// Psuedocoe

    /*
    1) select a dom element I can use to insert some quiz cards into

    2) make an ajax request to the api and get some quiz data

    3) loop over the list of quiz question objects and generate an html card for each object

    4) use the selected dom element to append my quiz cards to the dom

    */
//})



