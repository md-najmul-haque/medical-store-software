import React from 'react';
import { FadeLoader } from 'react-spinners';


const Loading = () => {

    return (
        <div className="flex items-center justify-center h-full text-secondary">

            <FadeLoader
                color={"#02094c"}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

        </div>
    );
};

export default Loading;