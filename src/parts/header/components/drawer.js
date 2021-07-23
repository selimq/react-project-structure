import { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import pages from "../../../pages/index";

const MyDrawer = ({ handleDrawerToggle }) => {


  return (
    <div className="flex flex-column">
      <div className="flex flex-row ">
        <ul className=" justify-center lg:space-x-5 ">

          {pages.map((page, index) => (
            <div key={page.name}>
              <Link
                className="justify-between space-x-5 "
                to={page.path}
              >
                <li className="p-4 hover:bg-green-500 flex flex-row text-xl">
                  <div className=" flex flex-row">
                    {page.icon}
                    {page.name}
                  </div>

                </li>

                <Divider></Divider>
              </Link>
              {page.children &&
                page.children.map((item, index) => {
                  return (
                    item.visible &&
                    <Link

                      className="space-x-5 "
                      to={`${page.path}${item.path}`} key={index}
                    >
                      <li className="py-2 px-6 hover:bg-green-500 justify-center text-l  flex flex-row">
                        <div className=" flex flex-row">
                          {item.icon}
                          <p> {item.name}</p>
                        </div>

                      </li>

                      <Divider></Divider>
                    </Link>

                  );
                })}
            </div>
          ))}
        </ul>
        <div>
          <IconButton onClick={() => handleDrawerToggle()}>
            <RemoveIcon></RemoveIcon>
          </IconButton>
        </div>
      </div>
    </div >
  );
};

export default MyDrawer;
