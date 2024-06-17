import React from 'react';
import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

const Header = () => {
  return(
<div className="my-0">
<Typography variant="h5" className="font-bold text-2xl text-gray-800 dark:text-gray-100 ">
  Channels
</Typography>
<div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md w-32 mb-4"></div>
</div>);
};

export default Header;
