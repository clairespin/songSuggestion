// Declare your arrays here
let country = ["./images/spcode-1dgWTMoHwTUnQhOQ8SR5fV.jpeg", "./images/spcode-2hNQDbZcN3vqRAuwiz7poI.jpeg", "./images/spcode-5uTQC24DoCTc287oH8Xpp4.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg"];
let indie = ["./images/spcode-5uTQC24DoCTc287oH8Xpp4.jpeg", "./images/spcode-7H0ya83CMmgFcOhw0UB6ow.jpeg", "./images/spcode-07MDkzWARZaLEdKxo6yArG.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg"];
let pop = ["./images/spcode-7H0ya83CMmgFcOhw0UB6ow.jpeg", "./images/spcode-07MDkzWARZaLEdKxo6yArG.jpeg", "./images/spcode-58pTPJPBjw1xL9OcLcQczU.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg"];
let hiphop = ["./images/spcode-7H0ya83CMmgFcOhw0UB6ow.jpeg", "./images/spcode-07MDkzWARZaLEdKxo6yArG.jpeg", "./images/spcode-58pTPJPBjw1xL9OcLcQczU.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg"];
let oldies = ["./images/spcode-7H0ya83CMmgFcOhw0UB6ow.jpeg", "./images/spcode-07MDkzWARZaLEdKxo6yArG.jpeg", "./images/spcode-58pTPJPBjw1xL9OcLcQczU.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg"];
let rock = ["./images/spcode-07nxmAxwhY51juyImllKD2.jpeg", "./images/spcode-58pTPJPBjw1xL9OcLcQczU.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg", "./images/spcode-3439OLNIeD3y68kVuoZUO5.jpeg"];
let jazz = ["./images/spcode-7oTaBk0IrTeO7dKlUIn1k1.jpeg", "./images/spcode-58pTPJPBjw1xL9OcLcQczU.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg", "./images/spcode-3439OLNIeD3y68kVuoZUO5.jpeg"];
let classical = ["./images/spcode-61dYvvfIRtIDFuqZypPAta.jpeg", "./images/spcode-64ZxBE1ZgK4C0lGljXzDcG.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg", "./images/spcode-3439OLNIeD3y68kVuoZUO5.jpeg"];
let kids = ["./images/spcode-61dYvvfIRtIDFuqZypPAta.jpeg", "./images/spcode-64ZxBE1ZgK4C0lGljXzDcG.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg", "./images/spcode-3439OLNIeD3y68kVuoZUO5.jpeg"];
let emo = ["./images/spcode-61dYvvfIRtIDFuqZypPAta.jpeg", "./images/spcode-64ZxBE1ZgK4C0lGljXzDcG.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg", "./images/spcode-3439OLNIeD3y68kVuoZUO5.jpeg"];
let alt = ["./images/spcode-61dYvvfIRtIDFuqZypPAta.jpeg", "./images/spcode-64ZxBE1ZgK4C0lGljXzDcG.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg", "./images/spcode-3439OLNIeD3y68kVuoZUO5.jpeg"];
let folk = ["./images/spcode-61dYvvfIRtIDFuqZypPAta.jpeg", "./images/spcode-64ZxBE1ZgK4C0lGljXzDcG.jpeg", "./images/spcode-65M92JpTbAdHmTQm4jGaDa.jpeg", "./images/spcode-3439OLNIeD3y68kVuoZUO5.jpeg"];

// Submit Button 
let submitButton = document.querySelector("button");
let images = document.querySelectorAll("div img");

submitButton.addEventListener("click", function() {
    let genre = document.querySelector(".input").value.toLowerCase();
    let genreArray;

    switch(genre) {
        case "country":
            genreArray = country;
            break;
        case "indie":
            genreArray = indie;
            break;
        case "pop":
            genreArray = pop;
            break;
        case "hiphop":
            genreArray = hiphop;
            break;
        case "oldies":
            genreArray = oldies;
            break;
        case "rock":
            genreArray = rock;
            break;
        case "jazz":
            genreArray = jazz;
            break;
        case "classical":
            genreArray = classical;
            break;
        case "kids":
            genreArray = kids;
            break;
        case "emo":
            genreArray = emo;
            break;
        case "alt":
            genreArray = alt;
            break;
        case "folk":
            genreArray = folk;
            break;
        default:
            genreArray = [];
            alert("Genre not recognized. Please enter a valid genre.");
    }

    // Update image sources
    images.forEach((img, index) => {
        if (genreArray[index]) {
            img.src = genreArray[index];
        } else {
            img.src = ""; // Clear the src if there are not enough images in the array
        }
    });
});
