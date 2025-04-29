import {
  Celebration,
  Diversity3,
  EmojiEmotions,
  EmojiPeople,
  Favorite,
  WavingHand,
  Close
} from "@mui/icons-material";
import {
  Button,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid2,
  Typography,
  IconButton
} from "@mui/material";
import React from "react";

const RelationshipOptions = ({ open, handleClose, handleValue, value }) => {
  const typeOfRelation = [
    {
      id: 1,
      relation: "Long-term patner",
      icon: <Favorite sx={{ color: "red" }} />,
    },
    {
      id: 2,
      relation: "Long-term, but short-term OK",
      icon: <EmojiEmotions sx={{ color: "#ffff00d4" }} />,
    },
    {
      id: 3,
      relation: "Short-term, but long-term OK",
      icon: <Diversity3 sx={{ color: "#800077" }} />,
    },
    {
      id: 4,
      relation: "short-term fun",
      icon: <Celebration sx={{ color: "#d4ef04" }} />,
    },
    {
      id: 5,
      relation: "New Friends",
      icon: <WavingHand sx={{ color: "#00e3ffd4" }} />,
    },
    {
      id: 6,
      relation: "Still figuring it out",
      icon: <EmojiPeople sx={{ color: "#ff0000" }} />,
    },
  ];

  return (
    <>
      <Dialog
        open={open}
        maxWidth="xs"
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#080908",
            padding: 5,
            borderRadius: 5,
          },
        }}
      >
        <IconButton
          sx={{ position: "absolute", right: "10px", top: "10px",'&:hover':{backgroundColor:'#80808080'}}}
          onClick={() => handleClose(false)}
        >
          <Close sx={{ color: "white" }} />
        </IconButton>

        <DialogTitle
          variant="h5"
          fontWeight={"bold"}
          color="white"
          textAlign={"center"}
        >
          What are you looking for?
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            variant="body1"
            color="lightgray"
            textAlign={"center"}
          >
            All good if it changes. There's something for everyone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid2 container spacing={1}>
            {typeOfRelation.map((item) => (
              <Grid2
                key={item.id}
                size={4}
                height={130}
                sx={{
                  borderRadius: 5,
                  border: value.includes(item.relation)
                    ? "3px solid #fd267a"
                    : "2px solid #80808080",
                }}
              >
                <CardActionArea
                  onClick={() => {
                    handleValue((prev) => {
                      if (value.includes(item.relation)) {
                        return prev.filter((key) => key !== item.relation);
                      } else {
                        return [...prev, item.relation];
                      }
                    });
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    p: 2,
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="subtitle"
                    fontWeight={"bold"}
                    color="white"
                    textAlign={"center"}
                  >
                    {item.relation}
                  </Typography>
                </CardActionArea>
              </Grid2>
            ))}
          </Grid2>
        </DialogActions>
        <Button
          variant="outlined"
          onClick={() => {
            if (value.length !== 0) {
              handleClose(false);
            }
          }}
          sx={{
            mt: 4,
            height: 45,
            textTransform: "capitalize",
            fontWeight: "bold",
            borderRadius: 5,
            backgroundColor: "#80808080",
            color: "white",
            border: value.length !== 0 ? "3px solid #fd267a" : "none",
          }}
        >
          Save
        </Button>
      </Dialog>
    </>
  );
};

export default RelationshipOptions;
