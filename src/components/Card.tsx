import React, { useState } from "react";

import "./Card.css";

interface CardProps {
    key: number;
    username: string;
    title: string;
    url: string;
}

const Card: React.FC<CardProps> = (props) => {
    const [hover, setHover] = useState<boolean>(false);

    const clickHandler = () => {
        console.log("Click on Download Button");
    };

    return (
        <div
            className="card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img alt={props.title} src={props.url} />
            {hover && (
                <>
                    <div className="card-text">
                        <h4 className="username">{props.username}</h4>
                        <h4 className="title">{props.title}</h4>
                    </div>

                    <button className="download-button" onClick={clickHandler}>
                        Download
                    </button>
                </>
            )}
        </div>
    );
};

export default Card;
