import { useEffect, useState } from "react";
import Card from "./Card";

const News = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => setCard(data))

    }, [])
    return (
        <div>
            <h1>Dragon News Home</h1>
            <div >
                {
                    card.map((item)=> <Card key={item.id} item={item}></Card>)
                }
            </div>

        </div>
    );
};

export default News;