import { CiCalendarDate } from "react-icons/ci";

const Sports = ({ data }) => {
   const {cover_image, title, sports_tag, date} = data;
    return (
        <div>
            <div className="card mt-10 rounded-xl  w-96 bg-slate-100 shadow-xl">
                <figure><img className="h-60" src={cover_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge badge-secondary">{title}</div>
                    </h2>
                    <div className="card-actions items-center justify-between flex ">
                        <h3>{sports_tag}</h3>
                        <div className="flex gap-1 items-center">
                        <CiCalendarDate className="h-5 w-5"/>
                        <p>{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;