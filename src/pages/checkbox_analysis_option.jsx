import React from 'react';
import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

const CheckboxOption = () => {
  return (
    <div className="p-1 flex-1 overflow-auto">
      {/* Time Series - Others */}
      <div className="my-0">
        <Typography variant="h5" className="font-bold text-xl md:text-2xl text-gray-800 dark:text-gray-100">
          Analysis Options
        </Typography>
        <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md w-32 mb-4"></div>
      </div>
      <List className="flex flex-col space-y-2">
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-tvr"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-tvr"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium text-xs sm:text-sm md:text-base">
              TVR(000)
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-tvr_percentage"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-tvr_percentage"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium text-xs sm:text-sm md:text-base">
              TVR-By Percentage
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-share"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-share"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium text-xs sm:text-sm md:text-base">
              Share
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-time_spent"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-time_spent"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium text-xs sm:text-sm md:text-base">
              Time Spent(Universe)
            </Typography>
          </label>
        </ListItem>
      </List>
    </div>
  );
};

export default CheckboxOption;
