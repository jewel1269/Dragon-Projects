import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navber from "../Navber/Navber";
import Right from "../RIght/Right";

const CardDetails = () => {
    const { id } = useParams();
    
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid ml-32  grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    <div className="max-w-[900px] h-auto p-4 shadow-md  dark:text-gray-800">
                        <div className="flex justify-between pb-4 border-bottom">
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />

                            </div>
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold  dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                                </a>
                                <p className="leading-snug  dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <Right></Right>
                </div>
            </div>

        </div>
    );
};

export default CardDetails;