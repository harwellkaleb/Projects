 //Create an array of quotes
let quotes = [
    "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
    "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington"
];
 //Function to generate a random quote
function generate(){
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    console.log(quotes[randomNumber]);
    document.getElementById("quote").innerHTML = quotes[randomNumber]
}
 //Call the function
generate();

