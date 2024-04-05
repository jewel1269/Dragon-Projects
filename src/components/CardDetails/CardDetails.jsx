import { NavLink, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navber from "../Navber/Navber";
import Right from "../RIght/Right";
import { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import Sports from './../Sports/Sports';
import Slider from "../Slider/Slider";

const CardDetails = () => {
    const [newsItem, setNewsItem] = useState([]);
    const [sports, setSports] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`/news.json`)
            .then(res => res.json())
            .then(data => (
                setNewsItem(data.find(item => item._id === id))
            ))
            .catch(error => console.error("Error fetching news:", error));
    }, [id]);
    console.log(newsItem)



    useEffect(() => {
        fetch("/card.json")
            .then(res => res.json())
            .then(data => setSports(data))

    }, [])
    console.log(sports)



    return (
        <div>
            <Header />
            <Navber />
            <div className="grid ml-32 grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    <div className="max-w-[1050px] rounded-md shadow-md  dark:bg-gray-50  dark:text-gray-800">
                        <img src={newsItem?.image_url} alt="" className="object-cover object-center w-full rounded-t-md h-[500px] bg-gray-500 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">{newsItem?.title}</h2>
                                <p className=" dark:text-gray-800">{newsItem?.details}</p>
                            </div>
                            <NavLink to={-1}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:bg-violet-600  dark:text-gray-50">🔙 All Categories News</button></NavLink>
                        </div>
                    </div>


                    <div>
                       
                        <Slider sports={sports}></Slider>

                    </div>
                </div>
                <div>
                    <Right />
                </div>
            </div>

        </div>
    );
};

export default CardDetails;
