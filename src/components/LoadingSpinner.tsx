import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner: React.FC = () => {
    return (
        <div>
            <div className="overlay">
                <div className="ring"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
