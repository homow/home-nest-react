import {createBrowserRouter} from "react-router";
import LazyWithSuspense from "@ui/lazy/LazyWithSuspense"
import {BASE_PATH} from "@/config";
import App from "@/App";

const Home = LazyWithSuspense(() => import("@/pages/Home"));
const NotFound = LazyWithSuspense(() => import("@/pages/NotFound"));

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            children: [
                {index: true, element: <Home/>},
                {path: "properties", element: <h1>Properties</h1>},
                {path: "about", element: <h1>About</h1>},
                {path: "contact", element: <h1>Contact</h1>}
            ]
        },
        {path: "*", element: <NotFound/>}
    ],
    {
        basename: BASE_PATH
    }
);

export default routes;