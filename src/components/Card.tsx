import React from "react";

interface CardProps {
    key: number;
    username: string;
    title: string;
    url: string;
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <div className="card">
            <img alt={props.title} src={props.url}></img>
        </div>
    );
};

export default Card;
