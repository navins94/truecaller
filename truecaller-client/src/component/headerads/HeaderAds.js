import React from 'react';

const HeaderAds = () => {
  return (
    <div>
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ marginTop: '20px' }}
        >
          <div>
            <h2 style={{ textAlign: 'center', fontSize: '14px' }}>
              Advertisment
            </h2>
            {window.innerWidth > 768 ? (
              <img
                src="https://via.placeholder.com/728x90"
                alt="ad"
              />
            ) : (
              <img
                src="https://via.placeholder.com/300x250"
                alt="ad"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAds;
