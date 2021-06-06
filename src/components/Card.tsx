import React, { useState } from "react";

import "./Card.css";

interface CardProps {
    key: string;
    username: string;
    title: string;
    url: string;
    downloader: string;
}

const Card: React.FC<CardProps> = (props) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img alt={props.title} loading="lazy" src={props.url} />
            {hover && (
                <>
                    <div className="card-text">
                        <h4 className="username">{props.username}</h4>
                        <h4 className="title">{props.title}</h4>
                    </div>

                    <a download href={props.downloader + "?force=true"}>
                        <button className="download-button">Download</button>
                    </a>
                </>
            )}
        </div>
    );
};

export default Card;
