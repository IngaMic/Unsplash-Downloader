import React, { useEffect, useState } from "react";

import List from "../components/List";
import LoadingSpinner from "../components/LoadingSpinner";
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
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // Fetchig images from unsplash api
        // fetching 9 pictures per page
        const fetchImages = async () => {
            setLoading(true);

            const apiRoot = "https://api.unsplash.com";

            try {
                const response = await fetch(
                    `${apiRoot}/photos/?page=${pageNumber}&per_page=9&client_id=${REACT_APP_ACCESSKEY}`
                );
                const data = await response.json();

                setLoadedImages([...loadedImages, ...data]);

                setLoading(false);
            } catch (err) {
                setLoading(false);
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

            {!!loading && <LoadingSpinner />}

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
