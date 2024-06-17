import { useEffect, useState } from "react";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { ImageUploader } from "./assets/pages/upload/UploadImage";

function App() {


  return (
        
    <Authenticator>
      {({ signOut, user }) => (
              
    <main>
      <h1>Image Gallery</h1>
      <h1>Hello {user?.username}</h1>
      <ImageUploader />
      
      <button onClick={signOut}>Sign out</button>
    </main>
        
      )}
      </Authenticator>
  );
}

export default App;
