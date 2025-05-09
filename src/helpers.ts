import {DebounceFn, ICartItem} from "./types.ts";

export const getTotalSale = (cartItems: ICartItem[]): number => {
    if (cartItems.length) {
        return cartItems.reduce((prev, item) => {
            if (item.oldPrice) {
                return prev + ((item.oldPrice - item.price) * item.count);
            }

            return prev;
        }, 0);
    }

    return 0;
}

export const getTotalPrice = (cartItems: ICartItem[]): number => {
    if (cartItems && cartItems.length) {
        return cartItems.reduce((prev, item) => prev + (item.price * item.count), 0);
    }

    return 0;
}


export const debounce: DebounceFn = (func, delay) => {
    let timeoutID: ReturnType<typeof setTimeout>;

    return function (...args) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            func(...args);
        }, delay)
    }
}