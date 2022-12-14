import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import { Welcome } from "./pages/Welcome";
import { Wordle } from "./pages/Wordle";


export const router = createBrowserRouter([
  {
    
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Welcome/>
      },
      {
        path: "wordle",
        element: <Wordle />
      }
    ]
  },

]);