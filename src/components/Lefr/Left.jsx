import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Active/Active.css"
import Sports from "../Sports/Sports";


const Left = () => {
    const [categories, setCategories] = useState([])
    const [sports, setSports] = useState([])

    useEffect(() => {
        fetch("card.json")
            .then(res => res.json())
            .then(data => setSports(data))

    }, [])

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1>All Categories: {categories.length}</h1>
            <div>
                {
                    categories.map((item) => <NavLink to={`/category/${item.id}`} id="sidebar" className="block text-xl font-semibold font-Poppins text-black" key={categories.id}> <a>{item.name}</a></NavLink>)
                }
            </div>
            <div>
                {
                    sports.map(data => <Sports key={data.id} data={data}></Sports>)
                }
            </div>
        </div>
    );
};

export default Left;