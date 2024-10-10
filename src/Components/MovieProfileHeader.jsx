import React from 'react';

export default function MovieProfileHeader({ title }) {
  return (
    <div className="movie-profile-header d-flex flex-column align-items-center p-5">
      <h3 className="movie-profile-header-title">{title}</h3>
      <ul className="movie-profile-breadcrumb d-flex justify-content-between align-items-center">
        <li>Home ➨ &nbsp;</li>
        <li>{title}</li>
      </ul>
    </div>
  );
}
