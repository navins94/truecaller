import React from 'react';
import Categories from '../categories/Categories';
import Tags from '../tags/Tags';

const Sidebar = () => {
  return (
    <div className="col col-sm-4">
      <div className="cat-container">
        <Categories />
      </div>
      <div
        className="sidebar-ad"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '14px' }}>
          Advertisment
        </h2>
        <img src="https://via.placeholder.com/300x250" alt="ad" />
      </div>
      <div className="tag-container">
        <Tags />
      </div>
    </div>
  );
};

export default Sidebar;
