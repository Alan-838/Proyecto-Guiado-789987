export type DummySession = {
    accessToken: string,
    email: string,
    firtName: string,
    gender: string,
    id: number,
    image: string,
    lastName: string,
    refreshToken: string,
    username: string
}

export type DummyUser = {
    username: string,
    password: string
}

export type DummyProducts = {
    limit: number,
    products: Array<DummyProduct>,
    skip: number,
    total: number
}

export type DummyProduct = {
    id: number,
    title: string,
    description: string,
    price: number,
    rating: number,
    returnPolicy: string,
    stock: number,
    discountPercentage: number,
    category: string
}

export enum DummyEndpoints {
    LOGIN = 'https://dummyjson.com/auth/login',
    PRODUCTS = 'https://dummyjson.com/products'
}