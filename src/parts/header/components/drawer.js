import React from 'react'
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import pages from "../../../pages/index";

const MyDrawer = ({ handleDrawerToggle }) => {


    return (
        <div className="flex flex-column  text-sm " >
            <div className="flex flex-row ">
                <ul className=" justify-center lg:space-x-5 ">
                    <Link to={"/"} >
                        <li className="p-4 hover:bg-green-500">Home</li>
                    </Link>
                    <Divider></Divider>
                    {pages.map((module) => (
                        <Link to={module.routeProps.path}>
                            <li key={module.name} className="p-4 hover:bg-green-500">
                                {module.name}
                            </li>
                            <Divider></Divider>
                        </Link>
                    ))}
                </ul>
                <div>
                    <IconButton onClick={() => handleDrawerToggle()}>
                        <RemoveIcon></RemoveIcon>
                    </IconButton>
                </div>
            </div>
        </div>

    );
}

export default MyDrawer


