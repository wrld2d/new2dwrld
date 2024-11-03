let currentIndex = 0;
let imagesList = [];

function openPopup(contentClass) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');

    const imagesContainer = document.querySelector(`.${contentClass}-images`);
    imagesList = Array.from(imagesContainer.getElementsByTagName('img'));
    currentIndex = 0;


    if (imagesList.length > 0) {
        popupImage.src = imagesList[currentIndex].src;
        console.log("Отображаемое изображение:", popupImage.src); 
        popup.style.display = 'flex';
        updateImageVisibility();
    }
}


function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    console.log(imagesList);
    console.log(currentIndex);

}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = imagesList.length - 1;
    if (currentIndex >= imagesList.length) currentIndex = 0;

    const popupImage = document.getElementById('popup-image');
    popupImage.src = imagesList[currentIndex].src;
}

function updateImageVisibility() {
    const popupImage = document.getElementById('popup-image');
    popupImage.src = imagesList[currentIndex].src;
}
