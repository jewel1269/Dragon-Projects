import logoImage from "../../assets/logo.png";
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <img src={logoImage} alt="Logo" />
            </div>
            <div className="text-center ">
                <h2>Journalism Without Fear or Favour</h2>
            </div>
            <div className="text-xl text-center">
                {moment().format("dddd, MMMM D - YYYY, h:mm a")}
            </div>
            <br />
            <div className="flex items-center bg-slate-100 shadow-xl gap-5 lg:ml-32 lg:mr-20">
                <button className="btn bg-red-500 text-white">Latest</button>
                <Marquee pauseOnHover={true}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam veniam cumque qui sit distinctio quae corrupti quia nihil eum vero, nesciunt amet fugiat molestiae totam, repellat sint magnam cum! Illo!</p>
                </Marquee>
            </div>
        </div>
    );
};

export default Header;
