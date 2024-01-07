import React, { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setItems(data.Items)
            })
    }, [])
    return [items, setItems, loading]
};

export default useItems;