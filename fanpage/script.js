/* =========================
   FUN FACT GENERATOR
========================= */

const facts = [

    "Admiral General Aladeen is the fictional leader of the Republic of Wadiya.",

    "Aladeen is portrayed by actor and comedian Sacha Baron Cohen.",

    "The Dictator was released in 2012.",

    "Aladeen travels to New York City during the events of the film.",

    "Aladeen's full title is Admiral General Aladeen.",

    "The character is deliberately portrayed as an exaggerated authoritarian dictator.",

    "The Dictator is a comedy film directed by Larry Charles.",

    "Wadiya is a fictional country created for the film."

];

const factButton = document.getElementById("factButton");

const factText = document.getElementById("fact");


factButton.addEventListener("click", function () {

    // Generate a random number
    const randomNumber = Math.floor(Math.random() * facts.length);

    // Display the randomly selected fact
    factText.textContent = facts[randomNumber];

});


/* =========================
   IMAGE GALLERY
========================= */

function selectImage(image) {

    const selectedImage = document.getElementById("selectedImage");

    selectedImage.src = image.src;

    selectedImage.alt = image.alt;

}


/* =========================
   NAVBAR EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.backgroundColor = "rgba(5, 5, 5, 1)";

    } else {

        navbar.style.backgroundColor = "rgba(10, 10, 10, 0.95)";

    }

});