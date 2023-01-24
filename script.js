const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = []

// Unsplash API
const count = 30;
const apiKey = 'MfeaRMk2vEccFHppeYOBU1xSgoP-ri5uWByf05FWM8c';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`



//Create Element for link and photos add to DOM

function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo

        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put <img> insiDE <a> then both inside img element
        item.appendChild(img);
        imageContainer.appendChild(item)

    });
}


// Get Photos from unsplash api

async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos()
      
      
    } catch (error) {
        console.log(error);
    }
}

// check to see if scrolling near bottom of page load more photos

window.addEventListener('scroll', () => {
    // console.log("Page Scroll");
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos();

    }
})

//onload
getPhotos()