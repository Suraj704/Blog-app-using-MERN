import {List,Button, Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText,ListItem } from "@mui/material";
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';
import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Drawercomp = ({links}) => {
     const [open, setOpen] = useState(false);
     const dispath = useDispatch();
  return (
    <>
        <Drawer PaperProps={{
          sx: {background: "rgb(34,193,195)",
 background:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"}
        }}
        
         open={open}  onClose={()=> setOpen(false)}>

<List>


    <ListItemButton onClick = {()=> setOpen(false)} divider>
<ListItemIcon>
<List sx={{color: "white"}}>

         <ListItem onClick={() => setOpen(false)}>
           <ListItemText>
              <Link style={{textDecoration: 'none'}} to="/blogs">All Blogs</Link>
           </ListItemText>
         </ListItem>

          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <Link style={{textDecoration: 'none'}} to="/myBlogs">My Blogs</Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <Link style={{textDecoration: 'none'}} to="/blogs/add">Add Blogt</Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>
              <Link style={{textDecoration: 'none'}} to="/About">About Us</Link>
            </ListItemText>
            </ListItem>


            <Button 
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
      
          <ListItemText />
    
          </List>
</ListItemIcon> 
</ListItemButton>

</List>
</Drawer>

<IconButton  sx={{marginLeft:"auto", color:"white"}} onClick ={()=>setOpen(!open)}>
    <MenuOpenTwoToneIcon/>
</IconButton>
        
    </>
  )
}

export default Drawercomp;


