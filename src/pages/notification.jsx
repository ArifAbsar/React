import React from 'react';
import { Alert} from "@material-tailwind/react";
const Notification = ({ notification }) => {
  const [open] = React.useState(true);
  return (
    notification && (
      <div className="fixed top-4 right-56 bg-green-500 text-white px-2 py-2 rounded-md shadow-lg transition-opacity duration-500">
        <Alert
        open={open}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        A dismissible alert with custom animation.
      </Alert>
      </div>
    )
  );
};

export default Notification;
