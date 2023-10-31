import {Navigation} from "./Navigation.jsx";
import logo from '../assets/img/logo.png';

export function Header() {
  return (
    <header className="sticky top-0 z-50 mb-8 pt-2 w-full max-w-screen-md">
      <nav className="flex justify-between items-center bg-white p-4 rounded-md shadow-lg">
        <img src={logo} alt='Logo of the page, Didier' className='w-14'/>
        <Navigation/>
      </nav>
    </header>
  )
}