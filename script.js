// Importing neccessary variables/functions for later use
import { url } from "./url.js";
import { random } from "./random.js";

// Accessing specific html elements
let showCase = document.getElementById("showCase");
let button = document.getElementById("nextBtn")
let disclaimer = document.getElementById("disclaimer")

// Assigning an event listener to the button for user interaction
button.addEventListener("click", async function initialLoad() {

    // Wrapping API get methods in a try catch to avoid potential crashing
    try {
        // Assigning the api to a variable with a limit of 151
        // to simulate all of the pokemon in generation 1
        let response = await axios.get(url + "?limit=151");

        // Assigning the data of the api to a variable for later access
        let poke = response.data;

        // Storing the length of the array of pokemon
        let length = poke.results.length

        // Storing the name of all the pokemon in the array
        let mon = poke.results[random(length)]
        let pokemon = mon.name

        // Function to set a 1 second delay
        setTimeout(() => {
            // Making the disclaimer disappear once the button is clicked
            disclaimer.innerText = ''
            // Posting the pokemon names(with first letter capitalization) so they're visible on the HTML
            showCase.innerText = pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
        }, 1000);

        // Catching potential errors that occur in the axios get function
    } catch (error) {
        console.log(error)
    }
})