import React from 'react';


export const Loading = () => {
  return (
    <div className="col-12">
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
