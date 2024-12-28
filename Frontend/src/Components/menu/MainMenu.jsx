import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const handleClose = () => {};
  const handleToggleTheme = () => {};
  const handleLogout = () => {};

  return (
    <>
      <Menu
        //   the anchorEl holds the value of the object beside which we want to open the hamburgermenu
        anchorEl={""}
        open={true}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleToggleTheme}>Toggle Theme</MenuItem>
        <Link to={`/profile/threads/1`} className="link">
          <MenuItem>My Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MainMenu;
