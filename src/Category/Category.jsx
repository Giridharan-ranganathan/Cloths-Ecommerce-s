import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.scss";
import axios from "axios";

const Category = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetchCategorysDB();
    }, []);

    const fetchCategorysDB = async () => {
        try {
            const response = await axios.get('http://localhost:5000/categories');
            console.log(response.data);
            setCategorys(response.data);
        } catch (error) {
            console.error('Error fetching categories', error);
        }
    };

    return (
        <div className={styles.category}>
            <div className="container mb-5 mt-5">
                <div className={styles.header}>New Fashion</div>
                <div className="row g-3">
                    {categorys.length > 0 ? (
                        categorys.map((item, index) => (
                            <div className="col-md-3 text-center" key={index}>
                                <div className={styles.item}>
                                    <Link to={item.link}><img src={item.image} alt={item.title} /></Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading categories...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Category;
