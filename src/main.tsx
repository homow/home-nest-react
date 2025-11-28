import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router"
import "@/styles/global.css"
import routes from "./routes/AppRoutes";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <RouterProvider router={routes}/>
    </StrictMode>
);