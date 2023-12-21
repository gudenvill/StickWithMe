import React, { useState, useRef, useEffect } from 'react';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>Collections</button>
      {isOpen && (
        <ul className='absolute'>
          <li>Trippy Stickers</li>
          <li>Young Wizard</li>
          <li>Animal Stickers</li>
          {/* Add more list items here */}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
