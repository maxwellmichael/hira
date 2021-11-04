import { getProductsWithCategory, getAllProducts, getProductsWithMaterial } from '../../services/products';
import { getAllCategories } from '../../services/categories';
import { HandleErrorResponse } from '../../services/errors/handleErrorResponse';
import { getAllMaterials } from '../../services/materials';

export const GET_PRODUCTS_FROM_FIRESTORE = (query) => async (dispatch) => {
    if (query) {
        //Get Products by Category
        if (query.category) {
            const response = await getProductsWithCategory(query.category);
            if (response.hasError) {
                return HandleErrorResponse(response);
            }
            dispatch(REMOVE_ALL_PRODUCTS_FROM_STORE());
            return response.data.forEach(product => {
                dispatch(ADD_PRODUCT_TO_STORE(product));
            });
        }

    }
    //Get All the Products
    else {
        const response = await getAllProducts();
        if (response.hasError) {
            return HandleErrorResponse(response);
        }
        dispatch(REMOVE_ALL_PRODUCTS_FROM_STORE());
        return response.data.forEach(product => {
            dispatch(ADD_PRODUCT_TO_STORE(product));
        });
    }
}

export const GET_PRODUCTS_BY_FILTERS_FROM_FIRESTORE = (filters) => async (dispatch) => {
    dispatch(REMOVE_ALL_PRODUCTS_FROM_STORE());
    const handleProductsWithoutFilters = async ()=>{
        const response = await getAllProducts();
        if (response.hasError) {
            return HandleErrorResponse(response);
            
        }
        return response.data;
    }
    if (!filters || filters.length === 0) {
        const data = await handleProductsWithoutFilters();
        return dispatch(SET_PRODUCTS_TO_STORE([...data]));
    }
    filters.forEach(async filter => {
        if (filter.name === 'CATEGORIES' && filter.types.length > 0) {
            const response = await getProductsWithCategory(filter.types);
            if (response.hasError) {
                return HandleErrorResponse(response);
            }
            return response.data.forEach(product=>dispatch(ADD_PRODUCT_TO_STORE(product)))
        }
        else if (filter.name === 'MATERIALS' && filter.types.length > 0) {
            const response = await getProductsWithMaterial(filter.types);
            if (response.hasError) {
                return HandleErrorResponse(response);
            }
            return response.data.forEach(product=>dispatch(ADD_PRODUCT_TO_STORE(product)))
        }
        
       
    })
    
}



export const ADD_PRODUCT_TO_STORE = (product) => {
    return {
        type: "ADD_PRODUCT_TO_STORE",
        payload: {
            product: product,
        }
    }
}

export const SET_PRODUCTS_TO_STORE = (products) => {
    return {
        type: "SET_PRODUCTS_TO_STORE",
        payload: {
            products: products,
        }
    }
}

export const REMOVE_ALL_PRODUCTS_FROM_STORE = () => {
    return {
        type: "REMOVE_ALL_PRODUCTS_FROM_STORE",
    }
}

export const GET_CATEGORIES_FROM_FIRESTORE = () => async (dispatch) => {

    const response = await getAllCategories();
    if (response.hasError) {
        return HandleErrorResponse(response);
    }
    dispatch(REMOVE_ALL_CATEGORIES_FROM_STORE());
    return dispatch(SET_CATEGORIES_TO_STORE(response.data))

}


export const ADD_CATEGORY_TO_STORE = (category) => {
    return {
        type: "ADD_CATEGORY_TO_STORE",
        payload: {
            category: category,
        }
    }
}

export const SET_CATEGORIES_TO_STORE = (categories) => {
    return {
        type: "SET_CATEGORIES_TO_STORE",
        payload: {
            categories: categories,
        }
    }
}

export const REMOVE_ALL_CATEGORIES_FROM_STORE = () => {
    return {
        type: "REMOVE_ALL_CATEGORIES_FROM_STORE",
    }
}



export const GET_MATERIALS_FROM_FIRESTORE = () => async (dispatch) => {

    const response = await getAllMaterials();
    if (response.hasError) {
        return HandleErrorResponse(response);
    }
    dispatch(REMOVE_ALL_MATERIALS_FROM_STORE());
    return dispatch(SET_MATERIALS_TO_STORE(response.data))

}


export const ADD_MATERIAL_TO_STORE = (category) => {
    return {
        type: "ADD_MATERIAL_TO_STORE",
        payload: {
            category: category,
        }
    }
}

export const SET_MATERIALS_TO_STORE = (materials) => {
    return {
        type: "SET_MATERIALS_TO_STORE",
        payload: {
            materials: materials,
        }
    }
}

export const REMOVE_ALL_MATERIALS_FROM_STORE = () => {
    return {
        type: "REMOVE_ALL_MATERIALS_FROM_STORE",
    }
}
