import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./assets/components/ErrorPage.tsx";
import { ImageUploader } from "./assets/components/UploadImage.tsx";
import { ImageGallery } from "./assets/components/ImageGallery.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "upload",
        element: <ImageUploader/>,
      },
      {
        path: "gallery",
        element: <ImageGallery/>,
      }
    ],
  }
]);


Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
