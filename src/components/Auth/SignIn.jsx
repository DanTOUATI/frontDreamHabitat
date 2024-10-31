import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600">Bon retour !</h2>
          <button className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full text-sm flex items-center">
            Passer à Pro
            <span className="ml-1 text-yellow-300">👑</span>
          </button>
        </div>
        
        <p className="text-gray-600 mb-6">
          Connectez-vous à votre compte Dream Habitat.
        </p>
        
        <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow flex items-center justify-center mb-4">
          <FcGoogle className="mr-2" size={20} />
          Se connecter avec Google
        </button>
        
        <div className="flex items-center mb-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">ou</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        
        <form className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Votre email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mot de passe
            </label>
            <input className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Votre mot de passe" />
          </div>
          <button className="w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition duration-300" type="button">
            connexion
          </button>
        </form>
        
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-sm text-gray-500">
            <input type="checkbox" className="mr-2 leading-tight" />
            Se souvenir de moi la prochaine fois
          </label>
        </div>
        
        <div className="text-sm text-gray-600">
          <a href="#" className="text-blue-500 hover:text-blue-700">Mot de passe oublié ? Cliquez ici pour réinitialiser.</a>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <span>Vous n'avez pas de compte ? </span>
          <a href="#" className="text-blue-500 hover:text-blue-700">Inscrivez-vous ici.</a>
        </div>
      </div>
    </div>
  );
}