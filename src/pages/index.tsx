/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import Header from './header'
import { useState } from 'react';

export default function Home() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e: { target: { files: string | any[]; }; }) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Header />
      <h1>Home Page</h1>

      {/* // file upload */}

      <input
        type="file"
        accept='image/*'
        onChange={() => handleImageChange}
      />

      {selectedImage && (
        <div >
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Thumb"
            style={{ height: 100, width: 100 }}
          />
          <button onClick={removeImage} >
            Remove This Image
          </button>
        </div>
      )}


    </div>
  )
}
