import React,{useState} from "react";
import { Avatar, Box, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Stack, Tab, Tabs, Typography } from "@mui/material";
import { ContentPasteSearch, Leaderboard, Shield } from "@mui/icons-material";

const SidebarContent = ({ profileImage, Name }) => {
    // indexes for tabs
    const [value, setValue] = useState(0)
  const Icons = [
    { id: 1, icon: <ContentPasteSearch /> },
    { id: 2, icon: <Leaderboard /> },
    { id: 3, icon: <Shield /> },
  ];

  return (
    <>
      <Drawer open={true}  sx={{width:500,backgroundColor:'black','& .MuiPaper-root':{backgroundColor:'rgb(94 100 100 / 19%)',borderRight:'2px solid #d3d3d34d'}}} >
        <List disablePadding >
            <ListItem sx={{background:"linear-gradient(to right, #fd267a, #ff6036)",height:75,pr:0}} >
                <ListItemAvatar>
                    <Avatar component={'a'} alt={Name} src={profileImage} sx={{width:35,height:35,backgroundColor:'black',cursor:'pointer'}} />
                </ListItemAvatar>
                <Typography sx={{width:50,fontWeight:'bolder',color:'white',marginRight:6,ml:-1}} >{Name}</Typography>
                {
                    Icons.map((item)=>(
                        <ListItemAvatar  key={item.id} >
                            <Avatar sizes="larg" sx={{backgroundColor:'black'}} >
                                <IconButton  size="small" sx={{color:'white'}} >
                                    {item.icon}
                                </IconButton>
                            </Avatar>
                        </ListItemAvatar>
                    ))
                }
            </ListItem>
        </List>
        <Box>
            <Tabs value={value} onChange={(e,newValue)=>setValue(newValue)} sx={{color:'white'}} >
                <Tab label='Matches'  sx={{color:'white'}} />
                <Tab label='Messages' sx={{color:'white'}} />
                
            </Tabs>
        </Box>
      </Drawer>
    </>
  );
};

export default SidebarContent;


// const TabContent= ({children})=>{
//     return(
//         <>
//             <Box  >

//             </Box>
//         </>
//     )
// }


// <Stack
//           id="profile-wrapper"
//           direction={"row"}
//           spacing={2}
//           alignItems={"center"}
//           sx={{
//             height: 70,
//             background: "linear-gradient(to right, #fd267a, #ff6036)",
//             paddingRight: 1,
//             pl: 0.3,
//           }}
//         >
//           <Avatar
//             alt={Name}
//             src={profileImage}
//             sx={{ width: 35, height: 35, backgroundColor: "black" }}
//           />
//           <Typography
//             variant="body1"
//             sx={{
//               fontWeight: "bold",
//               textTransform: "capitalize",
//               color: "white",
//               flexGrow: 1,
//             }}
//           >
//             {Name}
//           </Typography>
//           {Icons.map((item) => (
//             <Avatar
//               key={item.id}
//               sx={{ width: 35, height: 35, backgroundColor: "black" }}
//             >
//               {item.icon}
//             </Avatar>
//           ))}
//         </Stack>