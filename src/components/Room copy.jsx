import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import imageAvant from '../assets/img/image-avant.svg';
import avatar from '../assets/img/avatar.jpg';

const Room = () => {
  const [selectedRoomType, setSelectedRoomType] = useState('Living Room');
  
  const roomThemes = [
    { name: 'Modern', image: imageAvant },
    { name: 'Summer', image: imageAvant },
    { name: 'Professional', image: imageAvant },
    { name: 'Tropical', image: imageAvant },
    { name: 'Coastal', image: imageAvant },
    { name: 'Vintage', image: imageAvant },
    { name: 'Industrial', image: imageAvant },
    { name: 'Neoclassic', image: imageAvant },
    { name: 'Tribal', image: imageAvant }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header with Logo and Navigation */}
      <nav className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
          roomGPT
        </h1>
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-800 font-medium">Redesign</button>
          <button className="text-gray-600 hover:text-gray-800 font-medium">Pricing</button>
          <span className="text-gray-600 font-medium">1 credits</span>
          <div >
            <img src={avatar} alt=""  className="w-10 h-10 bg-gray-200 rounded-full"/>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Controls */}
        <div className="lg:w-1/3 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Upload a photo of your room</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50">
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center mb-3 hover:from-blue-600 hover:to-blue-700 transition-all">
                <Upload className="mr-2" size={20} />
                Upload an image
              </button>
              <p className="text-gray-500 text-sm">...or drag and drop an image.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Select Room Type</h2>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              value={selectedRoomType}
              onChange={(e) => setSelectedRoomType(e.target.value)}
            >
              <option>Living Room</option>
              <option>Bedroom</option>
              <option>Kitchen</option>
              <option>Bathroom</option>
              <option>Office</option>
            </select>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Select Room Themes (up to 4)</h2>
            <div className="grid grid-cols-3 gap-4">
              {roomThemes.map((theme, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all">
                    <img 
                      src={theme.image} 
                      alt={theme.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-center mt-2 text-gray-700 group-hover:text-blue-500 font-medium">
                    {theme.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
              Render designs
            </button>
            <span className="text-gray-600 font-medium">Cost: 0 credit</span>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="lg:w-2/3">
          <div className="relative">
            <h1 className="text-3xl font-bold mb-6">
              Redesign your <span className="text-blue-500">room</span> in seconds
            </h1>
            <p className="text-gray-600 mb-8">
              Upload a room, specify the room type, and select your room theme to redesign.
            </p>
            <div className="bg-gray-800 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-teal-400">
                <Upload size={48} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;