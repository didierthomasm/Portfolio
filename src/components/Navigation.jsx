import {NavLink} from 'react-router-dom';

const links = [
  {path: '/Home', label: 'Home'},
  {path: '/AboutMe', label: 'About Me'},
  {path: '/Portfolio', label: 'Portfolio'},
  {path: '/Resume', label: 'Resume'},
  {path: '/Contact', label: 'Contact'}
];

const classType = {
  active: 'text-Cardinal hover:text-Bright-pink-crayola bg-gradient-to-r from-pink-100 to-transparent px-2 py-1 rounded-md font-semibold',
  pending: 'text-gray-600 hover:text-black'
}

export function Navigation()  {

  return (
    <ul className="flex space-x-4 md:space-x-8">
      {links.map((link) => (
        <li key={link.path} className='text-gray-600 hover:text-black'>
          <NavLink
            to={link.path}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? classType.active : ""
            }>
            {link.label}</NavLink>
        </li>
      ))}
    </ul>
  )
}
