export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-8">
      <div className="text-4xl md:text-5xl font-bold">Hi,</div>
      <div className="text-4xl md:text-5xl">I'm Didier</div>
      <div className="text-2xl md:text-3xl text-blue-600">Web Developer</div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none">Contact</button>
    </div>
  )
}