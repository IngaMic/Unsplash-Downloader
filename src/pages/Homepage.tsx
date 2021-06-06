import React, { useEffect, useState } from "react";

import List from "../components/List";
import "./Homepage.css";

import { REACT_APP_ACCESSKEY } from "../secrets.json";

type LoadedImage = {
    id: string;
    user: {
        name: string;
    };
    alt_description: string;
    urls: {
        small: string;
    };
    links: { download: string };
};

const Homepage: React.FC = () => {
    const [loadedImages, setLoadedImages] = useState<LoadedImage[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);

    useEffect(() => {
        // Fetchig images from unsplash api
        // fetching 9 pictures per page
        const fetchImages = async () => {
            //loading starts here

            const apiRoot = "https://api.unsplash.com";

            try {
                const response = await fetch(
                    `${apiRoot}/photos/?page=${pageNumber}&per_page=9&client_id=${REACT_APP_ACCESSKEY}`
                );
                const data = await response.json();

                //console.log("Data", data);

                setLoadedImages([...loadedImages, ...data]);

                //loading state ends here
            } catch (err) {
                //loading state ends here
                throw new Error("Could not fetch images");
            }
        };

        fetchImages();
    }, [pageNumber]);

    const handleClick = () => {
        setPageNumber(pageNumber + 1);
    };

    return (
        <div className="homepage">
            <h1>Unsplash Wallpaper Downloader </h1>

            {/* Loading Spinner Component will go here */}

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
