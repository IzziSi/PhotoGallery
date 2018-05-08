var images = document.getElementsByClassName('mainPhoto');
var thumbnails = document.getElementsByClassName('thumbnail');
var currentPhoto = 0;
var maxPhotos = images.length;

function makeVisible(i) {
    images[i].style.display = 'block';
    images[i].style.visibility = 'visible';
}

function makeInvisible(i) {
    images[i].style.display = 'none';
    images[i].style.visibility = 'hidden';
}

function next() {
    if (currentPhoto <= images.length) {
        makeInvisible(currentPhoto);
        currentPhoto = currentPhoto + 1;
        makeVisible(currentPhoto);
    }
}

function back() {
    if (currentPhoto >= 0) {
        makeInvisible(currentPhoto);
        currentPhoto = currentPhoto - 1;
        makeVisible(currentPhoto);
    }
}