import React from 'react'
import { Button } from '@mui/material'

const LoginButton = ({setSignInVisble}) => {
  return (
    <>
        <Button
              variant="contained"
              sx={{
                borderRadius: 5,
                ml: 2,
                backgroundColor: "white",
                color: "black",
                fontWeight: "bolder",
                textTransform: "capitalize",
              }}
              onClick={() => setSignInVisble((prev) => !prev)}
            >
              Log in
            </Button>
    </>
  )
}

export default LoginButton
