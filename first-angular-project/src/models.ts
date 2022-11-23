export interface ICard {
    id: number,
    img: string,
    category: string,
    name: string,
    liked: boolean,
    price: number
}

export interface IBrand {
    id: number,
    img_src: string
}