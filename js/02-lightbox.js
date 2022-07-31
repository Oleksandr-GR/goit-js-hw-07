import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGallery(items) {
    
    return items.map(item => ` 
    <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join('');
}

const wholeGallery = createGallery(galleryItems);
galleryContainer.innerHTML = wholeGallery;

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
gallery.on('show.simplelightbox');

