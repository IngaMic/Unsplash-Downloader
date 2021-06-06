import React from "react";

import Card from "./Card";

import "./List.css";

interface ListProps {
    images: {
        id: string;
        user: {
            name: string;
        };
        alt_description: string;
        urls: {
            small: string;
        };
        links: { download: string };
    }[];
}

const List: React.FC<ListProps> = (props) => {
    return (
        <div className="image-list">
            {props.images.map((img) => {
                return (
                    <Card
                        key={img.id}
                        username={img.user.name}
                        title={img.alt_description}
                        url={img.urls.small}
                        downloader={img.links.download}
                    />
                );
            })}
        </div>
    );
};

export default List;
