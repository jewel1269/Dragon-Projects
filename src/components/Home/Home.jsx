import Header from "../Header/Header";
import Left from "../Lefr/Left";
import Navber from "../Navber/Navber";
import News from "../News/News";
import Right from "../RIght/Right";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid text-slate-700 grid-cols-4 lg:ml-32">
                <div className="border ">
                    <Left></Left>
                </div>
                <div className="col-span-2 border lg:ml-52">
                    <News></News>
                </div>
                <div className="border mr-32">
                    <Right></Right>
                </div>
            </div>

        </div>
    );
};

export default Home;