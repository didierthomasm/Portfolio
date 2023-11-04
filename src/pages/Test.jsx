import {useState} from "react";
import * as portfolioImages from '../assets/img/portfolio/portfolioImages.js';
import github from "../assets/img/portfolio/github-50.png";

const images = [
  {
    src: portfolioImages.pto1,
    alt: 'Universe Map',
    href: 'https://didierthomasm.github.io/Project-One/',
    srcGif: github,
    altGif: 'GitHub Image',
    hrefGithub: 'https://github.com/didierthomasm/Project-One'
  },
  {
    src: portfolioImages.pto2,
    alt: 'Blog',
    href: 'https://glacial-beach-50205-ef9587d9a5cc.herokuapp.com/',
    srcGif: github,
    altGif: 'GitHub Image',
    hrefGithub: 'https://github.com/didierthomasm/Blogger'
  },
  {
    src: portfolioImages.pto3,
    alt: 'Text Editor',
    href: 'https://still-coast-34648-3df93645c337.herokuapp.com/',
    srcGif: github,
    altGif: 'GitHub Image',
    hrefGithub: 'https://github.com/didierthomasm/J.A.D.E.'
  },
  {
    src: portfolioImages.pto4,
    alt: 'Password Generator',
    href: 'https://didierthomasm.github.io/js-awesome-password-generator',
    srcGif: github,
    altGif: 'GitHub Image',
    hrefGithub: 'https://github.com/didierthomasm/JS-Awesome-Password-Generator'
  },
  {
    src: portfolioImages.pto5,
    alt: 'Diet Generator',
    href: 'https://diet-wizard-930125214349.herokuapp.com/',
    srcGif: github,
    altGif: 'GitHub Image',
    hrefGithub: 'https://github.com/didierthomasm/dietWizard'
  },
  {
    src: portfolioImages.pto6,
    alt: 'Weather Page',
    href: 'https://didierthomasm.github.io/Weather-Chanel/',
    srcGif: github,
    altGif: 'GitHub Image',
    hrefGithub: 'https://github.com/didierthomasm/Weather-Chanel'
  },
]

export function Test() {
  // Using an object to keep track of which image is hovered
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="flex w-96">
      {images.map((image, index) => (
        // Wrap the two divs for each image in a parent div or a fragment
        <div
          key={image.src}
          className={`h-96 w-96 flex-1 transition-all duration-700 relative ${
            hoveredImage === index ? 'custom-flex-grow' : ''
          }`}
          onMouseEnter={() => setHoveredImage(index)}
          onMouseLeave={() => setHoveredImage(null)}
          style={hoveredImage === index ? { flexGrow: 3 } : {}}
        >
          <img
            src={image.src}
            alt={image.alt}
            className='w-96 h-96 object-cover'
          />
          {/* This div is now positioned relative to its parent */}
          <div
            className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center opacity-0 transition-opacity delay-150 ease-in hover:opacity-100'
            style={{ display: hoveredImage === index ? 'flex' : 'none' }} // Show this div only when the item is hovered
          >
            <h2 className='text-white'>
              <a href={image.href} target='_blank' rel='noopener noreferrer'>{image.alt}</a>
            </h2>
            <a href={image.hrefGithub}>
              <img src={image.srcGif} alt={image.altGif} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
