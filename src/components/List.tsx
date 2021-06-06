import React from "react";
import Card from "./Card";

interface ListProps {
    images: { id: number; name: string; tag: string; url: string }[];
}

const List: React.FC<ListProps> = (props) => {
    return (
        <div className="image-list">
            {props.images.map((img) => {
                return (
                    <Card
                        key={img.id}
                        username={img.name}
                        title={img.tag}
                        url={img.url}
                    />
                );
            })}
        </div>
    );
};

export default List;
