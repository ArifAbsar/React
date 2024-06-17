import React from 'react';
import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

const CheckboxList = () => {
  return (
    <div className="p-4">
      {/* Time Series - By Time */}
      <div className="mb-0">
        <Typography variant="h5" className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-2">
          Time Series - By Time
        </Typography>
        <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md w-32 mb-4"></div>
      </div>
      <List>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-Date"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-Date"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Date
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-Days"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-Days"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Days
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-Weeks"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-Weeks"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Weeks
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-Months"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-Months"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Months
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-Quarter"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-Quarter"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Quarter
            </Typography>
          </label>
        </ListItem>
      </List>

      {/* Time Series - By Cities */}
      <div className="my-0">
        <Typography variant="h5" className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-2">
          Time Series - By Cities
        </Typography>
        <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md w-32 mb-4"></div>
      </div>
      <List>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-ByCities"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-ByCities"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              By Cities
            </Typography>
          </label>
        </ListItem>
      </List>

      {/* Time Series - Others */}
      <div className="my-0">
        <Typography variant="h5" className="font-bold text-2xl text-gray-800 dark:text-gray-100 ">
          Time Series - Others
        </Typography>
        <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md w-32 mb-4"></div>
      </div>
      <List>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-Reach_by_Dayparts"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-Reach_by_Dayparts"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Cumulative Reach by Day parts
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-Reach_accross_Dayparts_weeks"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-Reach_accross_Dayparts_weeks"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Reach Accross Dayparts Weeks
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-Channels_shared_Dayparts"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-Channels_shared_Dayparts"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Channels Shared By Dayparts
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-Channels_shared_Dayparts_Week"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-Channels_shared_Dayparts_Week"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Channels Shared By Dayparts Week
            </Typography>
          </label>
        </ListItem>
      </List>
    </div>
  );
};

export default CheckboxList;
