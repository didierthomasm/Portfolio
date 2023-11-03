import * as portfolioImages from '../assets/img/portfolio/portfolioImages.js';
import github from '../assets/img/portfolio/github-50.png';

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
export default function Project() {
  return (
    <>
      {images.map((image) => (
        <div key={image.src}
             className='flex justify-center shadow-2xl w-38 hover:drop-shadow-2xl relative bg-gray-100 transition-allopacity-100 before:hover:opacity-40'>
          {/* Original image */}
          <img src={image.src} alt={image.alt} className='h-36 ' loading="lazy"/>
          {/* Container for hover content */}
          <div
            className='absolute top-0 left-0 right-0 bottom-0 flex flex-row justify-center items-center opacity-0 transition-opacity delay-150 ease-in hover:opacity-100'>
            <h2 className='text-white'><a href={image.href} target='_blank' rel='noopener noreferrer'>{image.alt}</a>
            </h2>
            <a href={image.hrefGithub}><img src={image.srcGif} alt={image.altGif}/></a>
          </div>
        </div>
      ))}
    </>
  )
}
