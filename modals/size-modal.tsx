import React from 'react';
import Image from 'next/image';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      {/* Modal Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3 mx-4 max-h-3/4 overflow-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Sticker Size Guide</h2>
        <hr className="my-4 border-gray-300" />
        
        {/* Content */}
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Small Size Section */}
          <div className="text-center">
            <h2 className="text-md font-semibold my-3">Small (5.4cm x 5.4cm)</h2>
            <div className='w-64'>
              <Image
                src="/images/size/sizeSmall.jpg"
                alt="Small sticker size"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </div>
          </div>

          {/* Medium Size Section */}
          <div className="text-center">
            <h2 className="text-md font-semibold my-3">Medium (6.97cm x 6.97cm)</h2>
            <div className='w-64'>
              <Image
                src="/images/size/sizeMedium.jpg"
                alt="Medium sticker size"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </div>
          </div>

          {/* Large Size Section */}
          <div className="text-center">
            <h2 className="text-md font-semibold my-3">Large (9.27cm x 9.27cm)</h2>
            <div className='w-64'>
              <Image
                src="/images/size/sizeLarge.jpg"
                alt="Large sticker size"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-gray-300" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SizeGuideModal;
