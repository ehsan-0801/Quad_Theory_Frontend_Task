// ProductsContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ProductsContext = createContext();

const initialState = {
    popularItems: [],
    recommendedItems: [],
    isModalOpen: false,
};

const productsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_POPULAR_ITEMS':
            return { ...state, popularItems: action.payload };
        case 'SET_RECOMMENDED_ITEMS':
            return { ...state, recommendedItems: action.payload };
        case 'OPEN_POP_MODAL':
            return { ...state, isPopModalOpen: true };
        case 'CLOSE_POP_MODAL':
            return { ...state, isPopModalOpen: false };
        case 'OPEN_MODAL':
            return { ...state, isModalOpen: true };
        case 'CLOSE_MODAL':
            return { ...state, isModalOpen: false };
        case 'ADD_POPULAR_PRODUCT':
            return { ...state, popularItems: [...state.popularItems, action.payload] };
        case 'ADD_RECOMMENDED_PRODUCT':
            return { ...state, recommendedItems: [...state.recommendedItems, action.payload] };
        default:
            return state;
    }
};

const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, initialState);

    useEffect(() => {
        const fetchPopularItems = async () => {
            try {
                const response = await fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10');
                const data = await response.json();
                const result = data.Items;
                const popularItems = result.filter((item) => item.IsPopular === true);
                // console.log(popularItems)
                dispatch({ type: 'SET_POPULAR_ITEMS', payload: popularItems });
            } catch (error) {
                console.error('Error fetching popular items:', error);
            }
        };

        const fetchRecommendedItems = async () => {
            try {
                const response = await fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10');
                const data = await response.json();
                const result = data.Items;
                const recommendedItems = result.filter((item) => item.IsRecommended === true);
                // console.log(recommendedItems)
                dispatch({ type: 'SET_RECOMMENDED_ITEMS', payload: recommendedItems });
            } catch (error) {
                console.error('Error fetching recommended items:', error);
            }
        };

        fetchPopularItems();
        fetchRecommendedItems();
    }, []);

    return (
        <ProductsContext.Provider value={ { state, dispatch } }>
            { children }
        </ProductsContext.Provider>
    );
};

const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
};

export { ProductsProvider, useProducts };
