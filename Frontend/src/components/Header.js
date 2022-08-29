import Drawercomp from "./Drawercomp";
import { Link } from "react-router-dom";
// import DevicesIcon from '@mui/icons-material/Devices';
import {Grid} from '@mui/material';

import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";


const Header = ({links}) => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles();
    const dispath = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
  
    const [value, setValue] = useState();

  return (

<AppBar className="bar"
      position="sticky"
      sx={{
        background:
        "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(157,239,198,1) 100%)",
      }}
>
      <Toolbar>
 { isMatch ? 
 <>
 <Typography className={classes.font} variant="h4">  BlogsApp </Typography>

 <Drawercomp links={links} />

 </>   :   <Grid container> 

        {/* ----------1st grid item ---------*/}
        <Grid item xs={2}>
        <Typography className={classes.font} variant="h4">  BlogsApp</Typography>
          </Grid>

{/* ----------2nd grid item ---------*/}
          <Grid item xs={6}>
          {isLoggedIn && (
            <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs>
            <Tab
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            />
             <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label="All Blogs"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/myBlogs"
                label="My Blogs"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs/add"
                label="Add Blog"
              />
                 <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/About"
                label="About Us"
              />
            </Tabs>
            </Box>
        )}
          </Grid>

{/* ----------3rd grid item ---------*/}
<Grid item xs={2}></Grid>


<Grid item={4}>
<Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
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
          )}
        </Box>
     </Grid>

</Grid>}
        
</Toolbar>
    </AppBar>


  )
}

export default Header;