import { useState,useEffect } from 'react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { list } from 'aws-amplify/storage';


export const ImageGallery = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
      try {
        list({
          path: ({identityId}) => `image-gallery/${identityId}/`,
          // Alternatively, path: ({identityId}) => `protected/${identityId}/photos/`
          options: {
            listAll: true
          }
        }).then((res) => {
          setImages(res["items"])
        })


        // render list items from response.items
      } catch (error) {
        console.log('Error ', error);
      }
      
      }, []);


      
      const imagesList = images.map( (image) => 
        <StorageImage alt="image from user gallery" path={image.path} />
        //console.log(image.path)
      )



    return(
        <>
            <h1>Galeria</h1>
            <ul className='image-collection'>
              {
                imagesList.map((image,index) => (
                  <li key={index}>{image}</li>
                ))
              }
            </ul>
        </>
    )
}