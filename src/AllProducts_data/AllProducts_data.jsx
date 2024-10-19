import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllProducts_data.module.scss";
// import { ProductCard } from "../ProductCard";

const AllProductsData = () => {
  const allProductsData = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Shirts",
      des: "New cotton shirts for men",
      price: 500,
      link: "/DemoPage.jsx", // Change the link to a string
    },
    {
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Shirts",
      des: "New cotton shirts for men",
      price: 500,
      link: "/ShirtsPage", // Add link for other products
    },
    {
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Shirts",
      des: "New cotton shirts for men",
      price: 500,
      link: "/ShirtsPage",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Shirts",
      des: "New cotton shirts for men",
      price: 500,
      link: "/ShirtsPage",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      title: "Shirts",
      des: "New cotton shirts for men",
      price: 500,
      link: "/ShirtsPage",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      title: "Shirts",
      des: "New cotton shirts for men",
      price: 500,
      link: "/ShirtsPage",
    },
  ];

  return (
    <div className={styles.AllProducts}>
      <div className="container mb-5 mt-5">
        <div className={styles.header}>New Trends</div>
        <div className="row g-3">
          {allProductsData.map((item, index) => (
            <div className="col-md-3 text-center" key={index}>
              <div className={styles.item}>
                {/* Use Link here and pass the item.link */}
                <Link to={item.link}>
                  <img src={item.image} alt={item.title} />
                </Link>
                <div>
                  <h4>{item.title}</h4>
                  <p className="text-center">{item.des}</p>
                  <p className="text-center">$ {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsData;
