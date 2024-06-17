import { useState } from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

//upload docs https://docs.amplify.aws/nextjs/build-a-backend/storage/upload-files/



export const ImageUploader = () => {
    const [files, setFiles] = useState([]);
    
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
    <div className='image-uploader'>
        <StorageManager
        acceptedFileTypes={['image/*']}
        path={({ identityId }) => `image-gallery/${identityId}/`}
        maxFileCount={10}
        isResumable
        processFile={processFile}
        
        />
    </div>
  );
};

