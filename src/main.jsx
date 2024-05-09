import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}>

            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </DevSupport>
    </React.StrictMode>,
)
