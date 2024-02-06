import React from 'react';
import "./Gallery.css"
import ido1 from './assets/images/ido1.jpg';
import ido2 from './assets/images/ido2.jpg';
import ido3 from './assets/images/ido3.jpg';
import ido4 from './assets/images/ido4.jpg';
import ido5 from './assets/images/ido5.jpg';
import ido6 from './assets/images/ido6.jpg';
import ido7 from './assets/images/ido7.jpg';
import ido8 from './assets/images/ido8.jpg';

const Gallery = () => {
const images = [
    { src: ido1, title: 'Puppy 1 ' },
    { src: ido2, title: 'Puppy 2' },
    { src: ido3, title: 'Puppy 3' },
    { src: ido4, title: 'Puppy 4' },
    { src: ido5, title: 'Puppy 5' },
    { src: ido6, title: 'Puppy 6' },
    { src: ido7, title: 'Puppy 7' },
    { src: ido8, title: 'Puppy 8' }

];
return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((image, index) => (
          <div className="image-container" key={index}>
            <img src={image.src} alt={image.title} />
            <div className="image-title">{image.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

 
export default Gallery;

