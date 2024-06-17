import { useState,useEffect } from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import { fetchAuthSession } from 'aws-amplify/auth'
import '@aws-amplify/ui-react/styles.css';

//upload docs https://docs.amplify.aws/nextjs/build-a-backend/storage/upload-files/



export const ImageUploader = () => {
    const [files, setFiles] = useState([]);
    const [credentials,setCredentials] = useState({})

    useEffect(() => {
      fetchAuthSession().then((creds) => {
        setCredentials(creds)
      });
    }, []);
    const uPath = `image-gallery/${credentials.identityId}/`
    //const uPath = `image-gallery/${credentials.identityId}/`;
    //console.log(credentials.identityId);
    
    const processFile = ({ file, key }) => {
        const fileParts = key.split('.');
        const ext = fileParts.pop();
        const nKey = `${Date.now()}${fileParts.join('.')}.${ext}`
        console.log(nKey)
        console.log(file)
        return {
          file,
          // This will prepend a unix timestamp
          // to ensure all files uploaded are unique
          key: nKey,
        };
      }

        
  return (
    <div>
        <StorageManager
        acceptedFileTypes={['image/*']}
        path={uPath}
        maxFileCount={10}
        isResumable
        processFile={processFile}
        />
    </div>
  );
};



/*

const file = document.getElementById("file");
const upload = document.getElementById("upload");

  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file.files[0]);

  fileReader.onload = async (event) => {
    console.log("Complete File read successfully!", event.target.result);
    try {
      await uploadData({
                data: event.target.result, 
                path: file.files[0].name 
            });
    } catch (e) {
      console.log("error", e);
    }
  };
*/