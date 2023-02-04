import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import createGalleryCard from './js-modules-01/create-gallary-card';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems); 

const galleryEl = document.querySelector('.gallery');
const galleryCardEl = createGalleryCard(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryCardEl);



let gallery = new SimpleLightbox('.gallery a',
    {
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });


