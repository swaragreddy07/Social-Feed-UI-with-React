import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import NotificationsIcon from "@mui/icons-material/Notifications";

function NavBar() {
  const chnageOpen = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  const [open, setOpen] = useState(false);
  const CustomTool = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    height: "35px",
    paddingLeft: "10px",
  }));

  const Icon = styled(Box)(({ theme }) => ({
    height: "35px",
    display: "none",
    gap: "15px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    height: "35px",
    display: "none",
    gap: "15px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  }));

  return (
    <AppBar position="sticky">
      <CustomTool>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          Insta
        </Typography>
        <InstagramIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="...search" />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={chnageOpen}
            sx={{
              cursor: "pointer",
            }}
            alt="Remy Sharp"
            src="/src/photo/profile.jpg"
          />
        </Icon>
        <UserBox onClick={chnageOpen}>
          <Avatar
            sx={{
              cursor: "pointer",
            }}
            alt="Remy Sharp"
            src="/src/photo/profile.jpg"
          />
          <p>John</p>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={chnageOpen}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </CustomTool>
    </AppBar>
  );
}

export default NavBar;
