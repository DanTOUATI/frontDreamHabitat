import { useState, useRef, useEffect } from 'react';
import { Upload } from 'lucide-react';
import avatar from '../assets/img/avatar.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Room = () => {
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [userRooms, setUserRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchUserRooms = async () => {
      try {
        const response = await fetch('https://dreamhabitat.victor-zhang.fr/api/room/user', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des pièces');
        }

        const data = await response.json();
        setUserRooms(data);

        // Si un type est passé dans la navigation, l'utiliser
        const selectedType = location.state?.selectedType;
        if (selectedType && data.some(room => room.title === selectedType)) {
          setSelectedRoomType(selectedType);
        } else if (data.length > 0) {
          setSelectedRoomType(data[0].title);
        }
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchUserRooms();
    }
  }, [token, location.state]);


  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please upload an image file');
      }
    }
  };

  const handleUploadClick = () => {
    if (!selectedImage) {
      fileInputRef.current?.click();
    }
  };
  if (!token) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Veuillez vous connecter pour accéder à cette page
          </p>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Se connecter
          </button>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p>Chargement...</p>
      </div>
    );
  }
  if (userRooms.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Aucun type de pièce créé
          </h2>
          <p className="text-gray-600 mb-6">
            Vous devez d'abord créer au moins un type de pièce pour continuer.
          </p>
          <button
            onClick={() => navigate('/create-room-type')}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
          >
            Créer un type de pièce
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Controls */}
        <div className="lg:w-1/3 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Upload a photo of your room</h2>
            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-gray-50 hover:border-blue-400'
                }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleUploadClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileInput}
                accept="image/*"
              />
              {!selectedImage ? (
                <>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center mb-3 hover:from-purple-600 hover:to-blue-600 transition-all">
                    <Upload className="mr-2" size={20} />
                    Upload an image
                  </button>
                  <p className="text-gray-500 text-sm">...or drag and drop an image.</p>
                </>
              ) : (
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Uploaded room"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(null);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Select Room Type</h2>
            <div className="flex items-center space-x-4">
              <select
                className="flex-1 p-3 border border-gray-300 rounded-lg bg-white"
                value={selectedRoomType}
                onChange={(e) => setSelectedRoomType(e.target.value)}
              >
                {userRooms.map((room) => (
                  <option key={room.id} value={room.title}>
                    {room.title}
                  </option>
                ))}
              </select>
              <button
                onClick={() => navigate('/create-room-type')}
                className="p-3 text-blue-500 hover:text-blue-600 border border-blue-500 hover:border-blue-600 rounded-lg transition-colors"
                title="Créer un nouveau type"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
              onClick={() => {
                if (!selectedImage) {
                  alert('Please upload an image first');
                  return;
                }
                // Add your render logic here
              }}
            >
              Render designs
            </button>
            <span className="text-gray-600 font-medium">Cost: 0 credit</span>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="lg:w-2/3">
          <div >
            <h1 className="text-3xl font-bold mb-4">
              Redesign your <span className="text-blue-500">room</span> in seconds
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Upload a room, specify the room type, and select your room theme to redesign.
            </p>
            <div className="bg-gray-700 rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Room preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-teal-400">
                  <Upload size={48} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;