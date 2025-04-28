import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'
import TinderLogo from '../Components/TinderLogo'
import CreateAccountForm from '../Components/CreateAccountForm'

const CreateAccount = () => {
  return (
    <>
      <Box sx={{backgroundColor:'rgb(0 0 0 / 95%)',pt:5,pb:10}} >

        <AppBar position='static' sx={{backgroundColor:'#19d22000',borderBottom:'2px solid #80808042'}} >
          <Toolbar>
            <TinderLogo fill={'red'} color={"white"} />
          </Toolbar>
        </AppBar>

        <CreateAccountForm/>

      </Box>

    </>
  )
}

export default CreateAccount
