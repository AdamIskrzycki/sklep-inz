export const ADD = 'ADD';
export const REMOVE_ONE = 'REMOVE_ONE';
export const REMOVE_ALL = 'REMOVE_ALL';

export const add = (product) => {
    return {
        type: ADD,
        product: product
    }
}

export const removeOne = (id) => {
    return {
        type: REMOVE_ONE,
        productId: id
    }
}

export const removeAll = (id) => {
    return {
        type: REMOVE_ALL,
        productId: id
    }
}