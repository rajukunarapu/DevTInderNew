import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { InterestsArray } from "../utils/InterestBoxPopUp";
import { Close } from "@mui/icons-material";

const InterestsBox = ({
  open,
  handleClose,
  interestValue,
  interestedHandle,
}) => {
  return (
    <>
      <Dialog
        maxWidth="sm"
        open={open}
        sx={{
          "& .MuiPaper-root": {
            padding: 2,
            borderRadius: 3,
            backgroundColor: "#080908",
            position: "relative",
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
          sx={{ color: "white" }}
          textAlign={"center"}
        >
          What are you into?
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            variant="body1"
            color="lightgray"
            textAlign={"center"}
          >
            You like what you like. Now, let everyone know.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Stack
            maxHeight={"300px"}
            direction={"row"}
            justifyContent="flex-start"
            flexWrap={"wrap"}
            gap={1.1}
            p={2}
            // overflow={"scroll"}
          >
            {InterestsArray.map((item) => (
              <Button
                key={item.id}
                variant="outlined"
                size="small"
                onClick={() => {
                  interestedHandle((prev) => {
                    if (interestValue.includes(item.name)) {
                      return prev.filter((key) => key !== item.name);
                    } else {
                      return [...prev, item.name];
                    }
                  });
                }}
                sx={{
                  p: "6px 15px",
                  textTransform: "capitalize",
                  border: interestValue.includes(item.name)
                    ? "3px solid #fd267a"
                    : "3px solid #80808080",
                  borderRadius: 5,
                  color: "white",
                }}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
        </DialogActions>

        <Stack justifyContent={"center"} alignItems={"center"} mt={2}>
          <Button
            variant="outlined"
            onClick={() => {
              if (interestValue.length === 5) {
                handleClose(false);
              }
            }}
            sx={{
              width: "150px",
              background: "linear-gradient(to right, #fd267a, #ff6036)",
              border: "none",
              borderRadius: 5,
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Save ({interestValue.length}/5)
          </Button>
        </Stack>
      </Dialog>
    </>
  );
};

export default InterestsBox;
