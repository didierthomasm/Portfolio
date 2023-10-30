import {memo} from 'react';
import {NavLink} from 'react-router-dom';

const links = [
  {path: '/', label: 'Home'},
  {path: '/AboutMe', label: 'About'},
  {path: '/Portfolio', label: 'Portfolio'},
  {path: '/Resume', label: 'Resume'},
  {path: '/Contact', label: 'Contact'}
];

const Navigation = memo(() => {

  const classType = {
    active: 'text-rose-600 hover:text-rose-200 bg-gradient-to-r from-pink-100 to-transparent px-2 py-1 rounded-md font-semibold',
    pending: 'text-gray-600 hover:text-black'
  }

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
});

export default Navigation;