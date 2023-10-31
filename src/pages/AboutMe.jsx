import me from '../assets/img/profile/profile.jpg'
export default function AboutMe() {
  return (
    <main className="flex flex-col md:mt-8 md:flex-row items-center md:space-x-12 space-y-6 md:space-y-0 p-6 mt-24">
      {/* Profile Image */}
      <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full">
        <img src={me} alt="Didier Thomas Muñoz" className="w-full h-full object-cover"/>
      </div>

      {/* About Me Content */}
      <section className="flex-1 space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Didier Thomas Muñoz – that's me. Born in the vibrant Port of Veracruz and now carving a niche for myself in
          the bustling city of Monterrey, Nuevo Leon.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Professionally, I wear the hat of a manager at a bar that prides itself on its craft beer selection. My passion
          for the intricacies and depth of craft beer led me to become a Certified Beer Server from Cicerone. It's not
          just about serving beer; it's about creating an experience. The joy of customer service in the craft beer domain
          is unparalleled – witnessing the community bond over a pint of good beer is deeply satisfying.
        </p>
        <p className="text-gray-700 leading-relaxed">
          But when I'm not navigating the world of craft beers, my palette indulges in a myriad of flavors – from the
          earthy notes of coffee to the smoky allure of mezcal and the rich diversity of food and other beverages. Away
          from the gastronomic world, you'll find me immersed in sci-fi shows, diving into a good read, or battling it out
          in a video game.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Interestingly, this love for craft, whether it's in beer or in the digital domain, has steered me towards a new
          journey. I'm currently honing my skills in Full Stack Web Development. Combining the precision and craft I've
          learned from my beer experience with the digital realm is an exciting new chapter, and I can't wait to share my
          projects and journey with you.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Cheers to new beginnings and memorable brews!
        </p>
      </section>
    </main>
  )
}
