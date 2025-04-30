// components/ui/Modal.tsx

import React from 'react';

// Define the props for the Modal component
interface ModalProps {
  isOpen: boolean; // Controls whether the modal is visible
  onClose: () => void; // Function to call when the modal should be closed
  children: React.ReactNode; // The content to display inside the modal
  title?: string; // Optional title for the modal
}

/**
 * A reusable Modal component.
 * Displays content in an overlay pop-up.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  // If the modal is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose} // Close modal when clicking backdrop
      ></div>

      {/* Modal content container */}
      <div className="bg-white rounded-lg shadow-xl p-6 z-50 max-w-md w-full mx-4 relative">
        {/* Optional: Modal Title */}
        {title && (
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        )}

        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times; {/* HTML entity for multiplication sign, often used as a close 'x' */}
        </button>

        {/* Modal Content */}
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;