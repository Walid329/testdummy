import React from 'react';
import IconLinks from './IconLinks';

export default function Card({ title, links }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <IconLinks links={links} />
    </div>
  );
}
