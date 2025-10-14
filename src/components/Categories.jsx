import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Categories = () => {
   const location = useLocation()
    localStorage.setItem("previousPath",location.pathname)

  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setcategories(res);
      });
  }, []);



  return (
    <div className="filter-div filterbyCategory">
      <h3>Category</h3>
      {categories.map((category) => (
        <Link to={"/category/"+category.slug} >{category.name}</Link>
      ))}
    </div>
  );
};

export default Categories;
