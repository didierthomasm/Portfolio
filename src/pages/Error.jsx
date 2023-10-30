import { useRouteError } from 'react-router-dom';
import img1 from '../assets/img/404_1.jpg';
import img2 from '../assets/img/404_2.jpg';
import img3 from '../assets/img/404_3.jpg';
import img4 from '../assets/img/404_4.jpg';

// Create an array of images
const images = [img1, img2, img3, img4];

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // Randomly select an image
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <img src={randomImage} alt='Code 404 Not Found' className='w-auto max-h-[47rem]'/>
  );
}
