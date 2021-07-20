import { React, useState } from "react";
import pages from "../../pages/index";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MyDrawer from "./components/drawer";
import Drawer from "@material-ui/core/Drawer";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav>
      <Hidden xsDown>
        <header className="bg-gray-600 text-white text-xl ">

          <ul className="flex justify-center lg:space-x-5 ">

            <Link to={"/"}>

              <li className="p-4 hover:bg-gray-400 left-10 absolute">
                <ShoppingCartIcon style={{ fontSize: 35 }}></ShoppingCartIcon>

                Shopping Store
              </li>
            </Link>

            {pages.map((module) =>
              module.name !== "Cart" ? (
                <Link to={module.routeProps.path}>
                  <li key={module.name} className="p-4 hover:bg-gray-400">
                    {module.name}
                  </li>
                </Link>
              ) : (
                <Link to={module.routeProps.path}>
                  <li
                    className="absolute right-5 p-4 hover:bg-gray-400"
                    key={module.name}
                  >
                    <ShoppingCartIcon></ShoppingCartIcon>
                  </li>
                </Link>
              )
            )}
          </ul>
        </header>
      </Hidden>

      <Hidden smUp>
        <header className="bg-gray-600 text-white text-xl ">
          <ul className="flex lg:space-x-5 ">
            <IconButton onClick={() => handleDrawerToggle()}>
              <MenuIcon className="text-white" />
            </IconButton>
            <li className="p-4 hover:bg-gray-400"> Shopping Store</li>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <MyDrawer handleDrawerToggle={handleDrawerToggle} />
            </Drawer>
          </ul>
        </header>
      </Hidden>
    </nav>
  );
};

export default Header;
