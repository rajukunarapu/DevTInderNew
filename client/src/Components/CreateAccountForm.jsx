import { Add } from "@mui/icons-material";
import {
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Box,
  IconButton,
  Grid2,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import RelationshipOptions from "./RelationshipOptions";

const CreateAccountForm = () => {

  // For firstName
  const [firstName, setFirstName] = useState('')

  //For LastName
  const [lastName, setLastName] = useState('')

  // For Birthday
  const [birthdayDate, setBirthdayDate] = useState('')

  // For gender
  const gender = [
    { id: 1, name: "Male" },
    { id: 2, name: "Woman" },
    { id: 3, name: "Other" },
  ];
  const [genderVariable, setgenderVariable] = useState("");

  // For InterestedIn
  const interestedIn = [
    { id: 1, name: "Male" },
    { id: 2, name: "Woman" },
    { id: 3, name: "Everyone" },
  ];
  const [interestedVariable, setInterestedVariable] = useState("");

  // For ImageBoxes
  const imageCaptureBoxes = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  // For Looking for
  const [openLookingForDialog, setopenLookingForDialog] = useState(false);
  // For relationShip type
  const [typeOfRelationValue, settypeOfRelationValue] = useState([]);

  //For Debugging
  console.log({firstName})
  console.log({lastName})
  console.log({genderVariable})
  console.log({birthdayDate})
  console.log({interestedVariable})
  console.log({typeOfRelationValue})

  return (
    <>
      <Container maxWidth="md" sx={{ pt: 15 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          color="white"
          textAlign={"center"}
        >
          Create account
        </Typography>

        <Stack
          id="stack-container"
          direction={"row"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          spacing={10}
          mt={4}
        >
          <Stack direction={"column"} spacing={2} mt={3}>
            <Typography variant="body1" fontWeight={"bold"} color="white">
              First name
            </Typography>
            <TextField
              placeholder="Enter the name"
              size="small"
              type="text"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              sx={{
                width: 470,
                input: { color: "white", backgroundColor: "black" },
                "& .MuiInputBase-root": {
                  height: 45,
                  "& fieldset": { border: "2px solid #80808080" },
                  "&:hover fieldset ": { border: "2px solid #80808080" },
                  "&.Mui-focused fieldset ": { border: "2px solid #80808080" },
                  "&:active fieldset ": { border: "2px solid #80808080" },
                  "&.Mui-disabled fieldset ": { border: "2px solid #80808080" },
                },
              }}
            />
            <Typography variant="body1" fontWeight={"bold"} color="white">
              Last name
            </Typography>
            <TextField
              placeholder="Enter the last name"
              size="small"
              type="text"
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
              sx={{
                width: 470,
                input: { color: "white", backgroundColor: "black" },
                "& .MuiInputBase-root": {
                  height: 45,
                  "& fieldset": { border: "2px solid #80808080" },
                  "&:hover fieldset ": { border: "2px solid #80808080" },
                  "&.Mui-focused fieldset ": { border: "2px solid #80808080" },
                  "&:active fieldset ": { border: "2px solid #80808080" },
                  "&.Mui-disabled fieldset ": { border: "2px solid #80808080" },
                },
              }}
            />
            <Typography variant="body1" fontWeight={"bold"} color="white">
              Birthday
            </Typography>
            <TextField
              placeholder="Enter the email address"
              size="small"
              type="date"
              value={birthdayDate}
              onChange={(e)=>setBirthdayDate(e.target.value)}
              sx={{
                width: 470,
                input: { color: "white", backgroundColor: "black" },
                "& .MuiInputBase-root": {
                  height: 45,
                  "& fieldset": { border: "2px solid #80808080" },
                  "&:hover fieldset ": { border: "2px solid #80808080" },
                  "&.Mui-focused fieldset ": { border: "2px solid #80808080" },
                  "&:active fieldset ": { border: "2px solid #80808080" },
                  "&.Mui-disabled fieldset ": { border: "2px solid #80808080" },
                },
              }}
            />
            <Typography variant="body1" fontWeight={"bold"} color="white">
              Gender
            </Typography>
            <Stack spacing={2} direction={"row"}>
              {gender.map((item) => (
                <Button
                  key={item.id}
                  variant="outlined"
                  onClick={() => setgenderVariable(item.name)}
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    width: 145,
                    borderRadius: 5,
                    color: "white",
                    border: genderVariable === item.name? "2px solid #fd267a" : "3px solid #80808080",
                    
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Stack>

            <Typography
              variant="body1"
              fontWeight={"bold"}
              color="white"
              mt={2}
            >
              Interested in
            </Typography>
            <Stack spacing={2} direction={"row"}>
              {interestedIn.map((item) => (
                <Button
                  key={item.id}
                  variant="outlined"
                  onClick={() => setInterestedVariable(item.name)}
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    width: 145,
                    borderRadius: 5,
                    color: "white",
                    border: interestedVariable === item.name? "2px solid #fd267a" : "3px solid #80808080",
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Stack>

            <Typography
              variant="body1"
              fontWeight={"bold"}
              color="white"
              mt={2}
            >
              Looking for
            </Typography>
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() => setopenLookingForDialog(true)}
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                width: 250,
                borderRadius: 5,
                color: "white",
                border: "3px solid #80808080",
              }}
            >
              Add relationship intent
            </Button>
          </Stack>

          <Box>
            <Typography
              variant="body1"
              fontWeight={"bold"}
              color="white"
              mb={2}
            >
              Profile photos
            </Typography>
            <Grid2 container columnSpacing={3} rowSpacing={1}>
              {imageCaptureBoxes.map((item) => (
                <Grid2 key={item.id} size={4}>
                  <Box
                    sx={{
                      position: "relative",
                      border: "4px dashed #80808080",
                      width: 100,
                      height: 130,
                      borderRadius: 2,
                      backgroundColor: "#72768836",
                    }}
                  >
                    <IconButton
                      size="small"
                      sx={{
                        position: "absolute",
                        bottom: -10,
                        right: -10,
                        background:
                          "linear-gradient(to right, #fd267a, #ff6036)",
                        color: "white",
                      }}
                    >
                      <Add sx={{ fontWeight: "bolder" }} />
                    </IconButton>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
            <Typography
              variant="body1"
              textAlign={"center"}
              color="#ffffff91"
              mt={4}
            >
              Upload 2 photos to start. Add 4 or more to make your profile stand
              out.
            </Typography>
          </Box>
        </Stack>

        <Divider
          variant="middle"
          sx={{
            color: "white",
            fontWeight: "bolder",
            mt: 6,
            mb: 2,
            "&::before,&::after": { borderColor: "#80808080" },
          }}
        >
          Optional
        </Divider>

        <Typography variant="body1" fontWeight={"bold"} color="white" mt={10}>
          Interests
        </Typography>
        <Button
          variant="outlined"
          startIcon={<Add />}
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            width: 250,
            borderRadius: 5,
            color: "white",
            border: "3px solid #80808080",
            mt: 2,
          }}
        >
          Add Interests
        </Button>

        <Typography variant="body1" fontWeight={"bold"} color="white" mt={2}>
          SEXUAL ORIENTATION
        </Typography>
        <Button
          variant="outlined"
          startIcon={<Add />}
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            width: 250,
            borderRadius: 5,
            color: "white",
            border: "3px solid #80808080",
            mt: 2,
            mb: 10,
          }}
        >
          Add sexual orientation
        </Button>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              fontWeight: "bolder",
              width: 170,
              height: 50,
              borderRadius: 7,
              color: "lightgray",
              border: "none",
              backgroundColor: "#80808080",
            }}
          >
            Continue
          </Button>
        </Box>

        {openLookingForDialog && (
          <RelationshipOptions
            open={setopenLookingForDialog}
            handleColse={setopenLookingForDialog}
            handleValue={settypeOfRelationValue}
            value = {typeOfRelationValue}
          />
        )}
      </Container>
    </>
  );
};

export default CreateAccountForm;
