import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../assets/img/avatar.jpg';
const Navbar = () => {
  const location = useLocation();
  const isSignIn = location.pathname === '/signin';
  const isSignUp = location.pathname === '/signup';
  
  // Vous pouvez importer votre avatar ici
  // import avatar from '../path/to/your/avatar.jpg';

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">DREAM HABITAT</span>
            </Link>
          </div>

          {/* Navigation Links and User Info */}
          <div className="flex items-center space-x-4">
            {/* Authentication Links */}
            <Link
              to="/signin"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isSignIn
                  ? 'text-white bg-black hover:bg-gray-800'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isSignUp
                  ? 'text-white bg-black hover:bg-gray-800'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Sign up
            </Link>

            {/* Main Navigation Links */}
            <Link to="/caracteristiques" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Caractéristiques
            </Link>
            <Link to="/comment-ca-marche" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Comment ça marche
            </Link>
            <Link to="/tarifs" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Tarification
            </Link>
            <Link to="/blog" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Blog
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Contact
            </Link>
            
            {/* Pro Button */}
            <Link to="/pro" className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              Passer à Pro 👑
            </Link>

            {/* Credits and Avatar */}
            <div className="flex items-center space-x-4 ml-4 border-l pl-4">
              <span className="text-sm font-medium text-gray-600">1 credits</span>
              <div className="relative group">
              <img src={avatar} alt=""  className="w-8 h-8 rounded-full object-cover cursor-pointer ring-2 ring-gray-200 hover:ring-blue-500 transition-all"/>
                {/* <img 
                  src="/api/placeholder/32/32" // Remplacez ceci par votre avatar: src={avatar}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover cursor-pointer ring-2 ring-gray-200 hover:ring-blue-500 transition-all"
                /> */}
                {/* Optional: Dropdown menu on avatar click */}
                <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;