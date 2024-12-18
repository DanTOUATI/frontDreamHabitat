import React, { useState, useRef, useEffect } from 'react';
import { Upload } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Composant UploadZone
const UploadZone = ({ onImageSelect, selectedImage }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

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

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = async (files) => {
    if (files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      onImageSelect(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        bg-gray-700 
        rounded-xl 
        aspect-[4/3] 
        flex 
        items-center 
        justify-center 
        cursor-pointer 
        overflow-hidden
        transition-all
        ${isDragging ? 'bg-gray-600 border-2 border-teal-400' : 'hover:bg-gray-600'}
      `}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileInput}
        accept="image/jpeg,image/png"
      />
      
      {selectedImage ? (
        <div className="relative w-full h-full group">
          <img
            src={selectedImage}
            alt="Original room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <div className="text-center text-white">
              <Upload size={48} className="mx-auto mb-2" />
              <p className="text-sm">Click to change image</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-teal-400 p-6">
          <Upload size={48} className="mx-auto mb-4" />
          <p className="text-lg font-medium mb-2">Click to upload an image</p>
          <p className="text-sm text-teal-300">or drag and drop</p>
          <p className="text-xs text-teal-300 mt-2">JPG or PNG only</p>
        </div>
      )}
    </div>
  );
};
export default UploadZone