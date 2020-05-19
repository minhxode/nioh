export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = (number) => {
    return {
        type: 'DECREMENT',
        payload: number
    }
}

export const sign_in = (stat) => {
    return {
        type: 'SIGN_IN',
        payload: stat
    }
}