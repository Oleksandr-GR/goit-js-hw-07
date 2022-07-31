import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener('click', onClickEvent); 

function createGallery(items) {
    
    return items.map(item => ` 
    <div class="gallery__item">
      <a class="gallery__link">
       <img src="${item.preview}" alt="${item.description}" data-sourse="${item.original}" class="gallery__image">
     </a>
    </div> `).join('');
}

const gallery = createGallery(galleryItems);
galleryContainer.innerHTML = gallery;

function onClickEvent(event) {
    
    if (event.target.nodeName !== "IMG") { return };
    
    event.preventDefault();
    const instance = basicLightbox.create(`<img src="${event.target.dataset.sourse}" width="800" height="600" >`);
    instance.show();

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') { instance.close() }
    })
}
