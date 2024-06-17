//import { useEffect, useState } from "react";
import { Authenticator } from '@aws-amplify/ui-react'
import { ImageUploader } from "./assets/components/UploadImage";
import { Outlet, Link } from "react-router-dom";
import './App.css'
function App() {


  return (

    <Authenticator>
      {({ signOut, user }) => (

        <main className='header'>
          <h1>Image Drive</h1>
          <ul className='nav'>
            <li>
              <Link to={`upload`}>Upload Images</Link>
            </li>
            <li>
              <Link to={`gallery`}>View Images</Link>
            </li>
            <li>
            <button onClick={signOut}>Sign out</button>
            </li>
          </ul>
          <Outlet />
          
        </main>

      )}
    </Authenticator>
  );
}

export default App;
