import React, { useEffect, useState } from 'react';

const useUser = () => {
    const [loader, setLoader] = useState(false);
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            setLoader(true)
        }
    }, [token, loader]);

    return [token, loader];
};

export default useUser;