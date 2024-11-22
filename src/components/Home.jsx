import React from 'react';
import { Link } from 'react-router-dom';
import ImageApres from '../assets/img/image-apres.svg';
import ImageAvant from '../assets/img/image-avant.svg';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left side with SVG images */}
        <div className="md:w-1/2 relative">
          <div className="w-full">
            <img src={ImageApres} alt="Après" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="absolute bottom-0 right-0 w-2/3">
            <img src={ImageAvant} alt="Avant" className="w-full h-auto rounded-lg shadow-lg border-4 border-white" />
          </div>
          <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-md text-sm font-bold">
            Après
          </div>
          <div className="absolute bottom-4 right-4 bg-white px-2 py-1 rounded-md text-sm font-bold">
            Avant
          </div>
        </div>
        
        {/* Right side with text and button */}
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold mb-6">
            Transformez vos espaces intérieurs et extérieurs en un instant grâce à notre technologie IA
          </h1>
          <p className="text-xl mb-8">
            Choisissez un style, téléchargez votre photo, réinventez votre chez-vous maintenant
          </p>
          <Link
            to="/create-room-type"
            className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Commancez
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;