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

const instance = basicLightbox.create(`<img src="" width="800" height="600" >`, {
    onShow: (instance) => {
        document.addEventListener('keydown', onEscClickEvent)
    },
    onClose: (instance) => {
        document.removeEventListener('keydown', onEscClickEvent)
    }
});

function onClickEvent(event) {
    
    if (event.target.nodeName !== "IMG") { return };
    
    event.preventDefault();
    instance.element().querySelector('img').src = event.target.dataset.sourse;
    instance.show();

}

function onEscClickEvent(event) {
    if (event.code === 'Escape') { instance.close() };
    return;
}