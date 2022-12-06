////// TESTING JS AND jQuery
// alert('js is working');
// console.log('jQuerry', $);

/// IIFE----> imediatly invoked function expression
/// add at the end
$(function() {

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
    const $punchlineSection = $('#punchline-section');
    //voting section buttons
    const $burnIt = $('#burn')
    const $toss = $('#toss-it')
    const $chuckle = $('#chuckle')
    const $laughed = $('#laughed-out')
    const $tears = $('#left-me-in-tears')
    // media output location for votes
    const $voteMedia = $('#animation')

    /// Register Event Listners
    $grabJoke.on('click', getJoke);

    //second on click for punchline button
    $punchLine.on('click', getPunchline);

    // listners for voting buttons
    $burnIt.on('click', burnIt);
    $toss.on('click', maybeToss);
    $chuckle.on('click', chuckleWorthy);
    $laughed.on('click', laughedOutLoud);
    $tears.on('click', leftMeTears);

    // testing to on.Click listener
    // function getJoke() {
    //     console.log('click');
    // }

    let joke 

    // on click functions for voting
function burnIt() {
    $voteMedia.text('');
    $voteMedia.append('<img src="https://www.shutterstock.com/image-vector/continuous-line-drawing-red-flame-600w-2072513354.jpg"></img>');
    }

function maybeToss() {
    $voteMedia.text('');
    $voteMedia.append('<img src="https://www.shutterstock.com/image-vector/trash-can-doodle-600w-747594328.jpg"></img>');
        }
function chuckleWorthy() {
    $voteMedia.text('');
    $voteMedia.append('<img src="https://www.shutterstock.com/image-vector/chuckle-emoji-emoticon-cover-mouth-600w-2070374948.jpg"></img>');
        }
function laughedOutLoud() {
    $voteMedia.text('');
    $voteMedia.append('<img src="https://www.shutterstock.com/image-vector/trash-can-doodle-600w-747594328.jpg"></img>');
        }
function leftMeTears() {
    $voteMedia.text('');
    $voteMedia.append('<img src="https://www.shutterstock.com/image-vector/trash-can-doodle-600w-747594328.jpg"></img>');
        }

    /// Functions

    function getJoke() {
        $punchlineSection.text('');
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


// Media Query

    /// Psuedocoe

    /*
    1) select a dom element I can use to insert the jokes into

    2) make an ajax request to the api and get joke data 

    3) loop over the list of dad joke objects and generate an html output for each joke and punchline object

    4) use the selected dom element to append joke section to the dom

    */
})

