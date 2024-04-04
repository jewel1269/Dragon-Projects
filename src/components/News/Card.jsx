import { IoEyeOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";

const Card = ({ item }) => {
    const { title, name, image_url, img, details, total_view, rating } = item
    return (
        <div>
            <div className="flex mt-10 flex-col max-w-lg p-6 space-y-6 overflow-hidden bg-slate-100 rounded-2xl shadow-md dark:bg-gray-50  dark:text-gray-800">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <img alt="" src={item.author.img} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{item.author.name}</a>
                            <span className="text-xs  dark:text-gray-600">{item.author.published_date}</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                            <IoBookmarkOutline className="h-5 w-5"></IoBookmarkOutline>
                            <CiShare2 className="h-5 w-5"></CiShare2>
                            
                        </div>
                </div>
                <div>
                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                    <img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" />
                    <p className="text-sm  dark:text-gray-600">{details.split(' ').slice(0, 50).join(' ')}......</p>
                    <strong className="text-red-400">Read More.....</strong>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2 flex items-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <p>{rating?.number}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm  dark:text-gray-600">

                        <IoEyeOutline className="h-4 w-4"></IoEyeOutline>
                        <span>{total_view}</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;