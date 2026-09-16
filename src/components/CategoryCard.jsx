import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <Link to={category.path} className="text-decoration-none">
      <div className="card simple-card h-100 p-3 text-center border">
        <div className="fs-1 mb-2">{category.icon}</div>
        <h5 className="fw-bold text-dark mb-1">{category.title}</h5>
        <p className="text-muted small mb-2">{category.count}</p>
        <span className="btn btn-sm btn-outline-primary rounded-pill mt-auto">
          Explore &rarr;
        </span>
      </div>
    </Link>
  );
}
