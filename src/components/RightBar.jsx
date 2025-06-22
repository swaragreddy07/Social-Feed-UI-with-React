import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageListItem,
  ImageList,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import * as React from "react";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
];
function RightBar() {
  return (
    <Box
      flex={2}
      sx={{
        display: { xs: "none", sm: "block" },
        p: 2,
      }}
    >
      <Box
        position="fixed"
        sx={{
          width: {
            sm: 150,
            md: 250,
            lg: 400,
          },
        }}
      >
        <Typography variant="h6" fontWeight={100} mb={2} mt={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          <Avatar alt="Remy Sharp" src="/src/photo/person5.jpg" />
          <Avatar alt="Travis Howard" src="/src/photo/person1.jpg" />
          <Avatar alt="Cindy Baker" src="/src/photo/person2.jpg" />
          <Avatar alt="Agnes Walker" src="/src/photo/person3.jpg" />
          <Avatar alt="Swarag" src="/src/photo/person4.jpg" />
          <Avatar alt="Reddy" src="/src/photo/person5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mb={2} mt={2}>
          Lastest posts
        </Typography>
        <ImageList cols={3} rowHeight="auto" gap={10}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mb={2} mt={2}>
          Lastest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/src/photo/person5.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/src/photo/person1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/src/photo/person3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
