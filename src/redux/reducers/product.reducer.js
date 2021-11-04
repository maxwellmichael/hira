
const initialState = { categories: [], materials: [], products: [] };


const productReducer = (state = initialState, action) => {
    let product = {};
    let category = {};
    let material = {};
    switch (action.type) {

        case 'ADD_PRODUCT_TO_STORE':
            product = action.payload.product;
            return { ...state, products: [...state.products, product] };

        case 'SET_PRODUCTS_TO_STORE':
            let products = action.payload.products;
            return { ...state, products: [...products] };

        case 'REMOVE_ALL_PRODUCTS_FROM_STORE':
            return { ...state, products: [] };

        case 'ADD_CATEGORY_TO_STORE':
            category = action.payload.category;
            return { ...state, categories: [...state.categories, category] };

        case 'SET_CATEGORIES_TO_STORE':
            let categories = action.payload.categories;
            return { ...state, categories: [...categories] };

        case 'REMOVE_ALL_CATEGORIES_FROM_STORE':
            return { ...state, categories: [] };

        case 'ADD_MATERIAL_TO_STORE':
            material = action.payload.material;
            return { ...state, materials: [...state.materials, material] };

        case 'SET_MATERIALS_TO_STORE':
            let materials = action.payload.materials;
            return { ...state, materials: [...materials] };

        case 'REMOVE_ALL_MATERIALS_FROM_STORE':
            return { ...state, materials: [] };


        default:
            return { ...state };

    }
}

export default productReducer;