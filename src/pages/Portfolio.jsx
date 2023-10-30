const imgs = [
  {src: 'pto1', alt: 'First project portfolio'},
]
export default function Portfolio() {
  return (
    <main className='grid grid-cols-3 gap-4'>
      {imgs.map((im))}
{/*      {imgs.map((img) => {
      <div>

          <img src={img.src} alt={img.alt} className='h-36'/>

      </div>
      })}*/}
    </main>
  )
}