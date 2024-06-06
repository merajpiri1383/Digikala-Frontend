"use client"
import API from "../../src/api";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Zoom } from "react-awesome-reveal";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const getData = async () => {
        await API.get("/category/").then((response) => {
            setCategories(response.data);
        }).catch((error) => {
            try {
                if (error.response.status === 401) {
                    Cookies.remove("access_token");
                    Cookies.remove("refresh_token");
                    getData();
                }
            } catch { }
        })
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="p-12">
            <p className="text-rose-500 text-right text-xl font-semibold">خرید بر اساس دسته بندی</p>
            <div className="grid grid-cols-8 p-6 gap-6">
                {
                    categories && categories.map((category, index) => {
                        return (
                            <Zoom key={index}>
                                <div className="col-span-1 grid grdi-cols-1 justify-center">
                                    <img
                                        src={category.image}
                                        className="h-32 w-32 object-cover rounded-full hover:scale-110 
                                    transition duration-200"
                                    />
                                    <p className="text-center text-md text-stone-600 font-md">
                                        {category.name}
                                    </p>
                                </div>
                            </Zoom>
                        )
                    })
                }
            </div>
        </div>
    )
}; export default Categories;