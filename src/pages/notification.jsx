import React from 'react';

const Notification = ({ notification }) => {
  return (
    notification && (
      <div className="fixed top-4 right-56 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-500">
        Button pressed!
      </div>
    )
  );
};

export default Notification;
