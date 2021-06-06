import React, { useEffect, useState } from "react";

import List from "../components/List";
//importing dummy data before using api
import imagesArray from "../imagesArray";

import "./Homepage.css";

type LoadedImage = {
    id: number;
    name: string;
    tag: string;
    url: string;
};

const Homepage: React.FC = () => {
    const [loadedImages, setLoadedImages] = useState<LoadedImage[]>([]);

    useEffect(() => {
        //fetching from API will happen here
        //dummy data for testing = imagesArray
        setLoadedImages(imagesArray);
    }, [loadedImages]);

    const handleClick = () => {
        console.log("Click on Load More Button");
    };

    return (
        <div className="homepage">
            <h1>Unsplash Wallpaper Downloader </h1>
            {loadedImages.length > 0 && (
                <>
                    <List images={loadedImages}></List>

                    <button className="load-more-button" onClick={handleClick}>
                        Load More
                    </button>
                </>
            )}
        </div>
    );
};

export default Homepage;
