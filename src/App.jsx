
import './App.css'
import SideBar from "./Components/SideBar.jsx";
import Feed from "./Components/Feed.jsx";
import RightBar from "./Components/RightBar.jsx";
import {Box, Container, createTheme, Stack, ThemeProvider} from "@mui/material";
import NavBar from "./Components/NavBar.jsx";
import Add from "./Components/Add.jsx";
import {useState} from "react";
function App() {
    const [mode,setMode]= useState("light");

    const darkTheme= createTheme({
        palette:{
            mode:mode,
        }
    })

   return(  <>
             <ThemeProvider theme={darkTheme}>
           <Box bgcolor={"background.default"} color={"text.primary"}>
               <NavBar/>
               <Stack direction="row" spacing={2} justifyContent="space-evenly">
                   <SideBar setMode={setMode} mode={mode}/>
                   <Feed/>
                   <RightBar/>
               </Stack>
              <Add/>
           </Box>
                 </ThemeProvider>
       </>
  )
}

export default App
