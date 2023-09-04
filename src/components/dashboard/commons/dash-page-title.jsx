import React from 'react';

const DashPageTitle = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        color: '#e08cf9',
      }}
    >
      <h5 className="pb-4 text-start" style={{ color: '#eee' }}>
        Welcome to the Admin Dashboard ({title})
      </h5>
    </div>
  );
};

export default DashPageTitle;
