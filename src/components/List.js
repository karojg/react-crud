import React, { useState, useEffect } from 'react';
import Image from './Image';

const List = ({ images, setSelectedImage, setShowAdd }) => {
  const [filteredData, setFilteredData] = useState(images);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setFilteredData(images);
  }, [images]);

  // TODO: Search Input should be in its own component
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setQuery(searchWord);
    const newFilter = images.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData(images);
    } else {
      setFilteredData(newFilter);
    }
  };

  // TODO: Sort by tag
  // Must be mindful with performance

  const handleOnClick = (value, index) => {
    setSelectedImage({ value, index });
    setShowAdd(false);
  };

  // TODO: Improve lazy loading
  // current implementation is not the best UX
  // could remove the lazy implementation and slice the array?
  // could use a debounce.
  return (
    <div className="wrapper-column">
      <div className="wrapper">
        <input
          type="text"
          placeholder="Filter by image name"
          value={query}
          onChange={handleFilter}
        />
        {/* look for a better placement, ugly UX*/}
        <button className="right" onClick={() => setShowAdd(true)}>
          Add new image
        </button>
      </div>
      <div className="list">
        {filteredData.length !== 0 && (
          <>
            {filteredData.map((value, index) => {
              return (
                <div
                  key={index}
                  className="image-wrapper"
                  onClick={() => handleOnClick(value, index)}
                >
                  <Image
                    src={value.imageUrl}
                    description={value.description}
                    title={value.title}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default List;
