import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ article }) => {
  console.log(article);
  return (
    <div className="blog-card">
      <div>
        <h3>{article[0]}</h3>
        <h4>{article[1]}</h4>
      </div>
      <p className="overflow-ellipsis">{article[2]}</p>
      <Link to={article[3]} className="btnLink">
        Try now →
      </Link>
    </div>
  );
};

export default BlogCard;
