import {
  IconButton,
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";
const CustomBox = styled(Box)(({ theme }) => ({
  height: "40%",
  width: "40%",
  borderRadius: theme.spacing(6),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    height: "30%",
    width: "80%",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  mt: theme.spacing(3),
}));

const CustomModal = styled(Modal)(({ theme }) => ({
  borderRadius: theme.spacing(6),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

function AddPost() {
  const [open, setOpen] = useState(false);
  return (
    <Box bgcolor={"background.default"} color={"white"}>
      <Tooltip
        title="Add Post"
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "1.2rem", // custom font size
            },
          },
        }}
        sx={{ position: "fixed", bottom: "5%", left: "2%" }}
      >
        <Fab color="primary" aria-label="add" size="large">
          <AddIcon onClick={() => setOpen(true)} fontSize="large" />
        </Fab>
      </Tooltip>

      <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ invisible: "#e8e5e5" }}
        bgcolor={"background.default"}
        color={"white"}
      >
        <CustomBox>
          <Typography variant="h5" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="/src/photo/profile.jpg"
              sx={{
                width: { sm: 40, md: 60 },
                height: { sm: 40, md: 60 },
              }}
            />
            <Typography sx={{ fontSize: { sm: "1rem", md: "1.4rem" } }}>
              Morgan Smith
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="what's on your mind"
            variant="standard"
            sx={{ mt: 3, width: "100%" }}
            InputProps={{
              sx: {
                fontSize: { sm: "1rem", md: "1.3rem" },
              },
            }}
          />
          <Stack direction="row" spacing={2} mt={1} mb={2}>
            <VideoCameraBackIcon
              color="primary"
              sx={{
                fontSize: { xs: 25, md: 35 },
                cursor: "pointer",
              }}
            />
            <PersonAddIcon
              color="error"
              sx={{
                fontSize: { xs: 25, md: 35 },
                cursor: "pointer",
              }}
            />
            <EmojiEmotionsIcon
              color="info"
              sx={{
                fontSize: { xs: 25, md: 35 },
                cursor: "pointer",
              }}
            />
            <ImageIcon
              color="warning"
              sx={{
                fontSize: { xs: 25, md: 35 },
                cursor: "pointer",
              }}
            />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            sx={{ width: "100%", height: { xs: "2.1rem", sm: "3rem" } }}
          >
            <Button
              sx={{ width: "80%", fontSize: { xs: "1rem", sm: "1.3rem" } }}
            >
              Post
            </Button>
            <Button
              sx={{ width: "20%", fontSize: { xs: "1rem", sm: "1.3rem" } }}
            >
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </CustomBox>
      </CustomModal>
    </Box>
  );
}

export default AddPost;
