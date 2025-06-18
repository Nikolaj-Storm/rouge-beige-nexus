
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const BouncingProfileCircle = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ x: 2, y: 1.5 });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [draggedFile, setDraggedFile] = useState(false);

  const circleSize = 120;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVelX = velocity.x;
        let newVelY = velocity.y;

        // Bounce off walls
        if (newX <= 0 || newX >= window.innerWidth - circleSize) {
          newVelX = -newVelX;
          newX = newX <= 0 ? 0 : window.innerWidth - circleSize;
        }
        if (newY <= 0 || newY >= window.innerHeight - circleSize) {
          newVelY = -newVelY;
          newY = newY <= 0 ? 0 : window.innerHeight - circleSize;
        }

        setVelocity({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [velocity.x, velocity.y]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDraggedFile(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setDraggedFile(true);
  };

  const handleDragLeave = () => {
    setDraggedFile(false);
  };

  return (
    <>
      <motion.div
        className={`fixed w-[120px] h-[120px] rounded-full border-4 border-medium-blue bg-light-teal shadow-lg cursor-pointer z-10 ${
          draggedFile ? 'ring-4 ring-medium-blue' : ''
        }`}
        style={{
          left: position.x,
          top: position.y,
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-medium-blue to-light-teal flex items-center justify-center">
            <span className="text-off-white text-4xl font-bold">?</span>
          </div>
        )}
        
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </motion.div>

      {/* Upload instruction tooltip */}
      {!profileImage && (
        <div className="fixed top-4 right-4 z-20 bg-dark-blue/80 backdrop-blur-md text-off-white p-3 rounded-lg text-sm">
          Click or drag image to the bouncing circle to set profile picture
        </div>
      )}
    </>
  );
};
