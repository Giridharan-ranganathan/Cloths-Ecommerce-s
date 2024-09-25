import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllProducts.module.scss";

const AllProducts = () => {
    const AllProduct = [
        {
            image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
            title: "Clothes",
            link: 'AllProducts_data.jsx',
        },
        {
            image: "https://images.unsplash.com/photo-1698995475439-f6fa0734e30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXMlMjBuaWtlfGVufDB8fDB8fHww",
            title: "All Shoes",
            link: 'AllProducts_data.jsx',
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwfGVufDB8fDB8fHww",
            title: "Caps",
            link: 'AllProducts_data.jsx',

        },
        {
            image: "https://images.unsplash.com/photo-1515529706504-b440b49fb63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww",
            title: "Moblie",
            link: 'AllProducts_data.jsx',
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "HeadPhones",
            link: 'AllProducts_data.jsx',
        },
        {
            image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
            title: "Watch",
            link: 'AllProducts_data.jsx',
        },
        {
            image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5vdGVib29rfGVufDB8fDB8fHww",
            title: "Notes",
            link: 'AllProducts_data.jsx',
            
        },
        {
            image: "https://media.istockphoto.com/id/182408953/photo/sunglasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=t3ysADk-Z8tT7FHmrkLPQP_TyQqcyDfBQU39NUqoUac=",
            title: "SunGlass",
            link: 'AllProducts_data.jsx',
            
        },
        {
            image: "https://media.istockphoto.com/id/691988470/photo/set-of-kitchen-home-appliances-toaster-kettle-mixer-blender-yogurt-maker-multicooker-grinder.webp?a=1&b=1&s=612x612&w=0&k=20&c=0Wz25gsYD-KBvkz_L5XNcXHqFoyV9WjNzenfB4NF0Lc=",
            title: "Home Appl",
            link: 'AllProducts_data.jsx',
            
        },
        {
            image: "https://media.istockphoto.com/id/466201823/photo/home-appliances-refrigerator-microwave-and-washing-maching.webp?a=1&b=1&s=612x612&w=0&k=20&c=KohmBhcgP548Hqy165ULywdkQmvuJj5hqqtKFOoRTbI=",
            title: "washing Machine'S",
            link: 'AllProducts_data.jsx',
            
        },
    ];
    return (
        <div className={styles.AllProducts}>
            <div className="container mb-5 mt-5">
                <div className={styles.header}>All Products</div>
                <div className="row g-3">
                    {AllProduct.map((item, index) => (
                        <div className="col-md-3 text-center" key={index}>
                            <div className={styles.item}>
                                <Link to={item.link}><img src={item.image} alt={item.title} /></Link>
                                <div>
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
