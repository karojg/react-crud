import React, { useState, useEffect } from 'react';
import Image from './Image';

const initialState = {
  title: '',
  description: '',
  imageUrl: '',
  tags: [''],
};

const Form = ({ add, update, selectedImage, showAdd, deleteImageData }) => {
  const [imageData, setImageData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setImageData({ ...imageData, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // dont allow to post empty imageData without imgUrl

    if (imageData.imageUrl) selectedImage ? update(imageData) : add(imageData);
    setImageData(initialState);
  };

  const handleOnDelete = () => {
    setImageData(initialState);
  };

  useEffect(() => {
    selectedImage && setImageData(selectedImage);
  }, [selectedImage]);

  useEffect(() => {
    if (showAdd === true) setImageData(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAdd]);

  return (
    <form onSubmit={(event) => handleOnSubmit(event)}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={imageData?.title}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={imageData?.description}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Tags</label>
        <input
          type="text"
          name="tags"
          value={imageData?.tags}
          onChange={handleInputChange}
        />
      </div>

      <div className="wrapper-column">
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={imageData?.imageUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        {imageData?.imageUrl && <Image src={imageData?.imageUrl} />}
      </div>

      <button>{showAdd ? 'Submit' : 'Update'}</button>

      {!showAdd && <button onClick={deleteImageData}>Delete</button>}
    </form>
  );
};

export default Form;
