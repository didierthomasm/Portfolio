import * as portfolioImages from '../assets/img/portfolio/portfolioImages.js';

const images = [
  {src: portfolioImages.pto1, alt: 'Universe Map', href: 'https://didierthomasm.github.io/Project-One/'},
  {src: portfolioImages.pto2, alt: 'Blog', href: 'https://glacial-beach-50205-ef9587d9a5cc.herokuapp.com/'},
  {src: portfolioImages.pto3, alt: 'Text Editor', href: 'https://still-coast-34648-3df93645c337.herokuapp.com/'},
  {
    src: portfolioImages.pto4,
    alt: 'Password Generator',
    href: 'https://didierthomasm.github.io/js-awesome-password-generator'
  },
  {src: portfolioImages.pto5, alt: 'Diet Generator', href: 'https://diet-wizard-930125214349.herokuapp.com/'},
  {src: portfolioImages.pto6, alt: 'Weather Page', href: 'https://didierthomasm.github.io/Weather-Chanel/'},
]
export default function Portfolio() {
  return (
    <main className='grid md:mt-16 md:grid-cols-3 gap-4 mt-32 grid-cols-1'>
      {images.map((image) => (
        <div key={image.src} className='flex justify-center shadow-2xl w-38 hover:drop-shadow-2xl'>
          <a href={image.href} target='_blank' rel='noopener noreferrer'>
            <img src={image.src} alt={image.alt} className='h-36' loading="lazy" />
          </a>
        </div>
      ))}
    </main>
  )
}
