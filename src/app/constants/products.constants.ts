import { ICarousel } from "./carousel.constants";

export const listProducts1: ICard[] = [
    {
        label: 'Tres fuelles cuadrada',
        path: 'assets/images/products/tres-fuelles-cuadrada/tres-fuelles-cuadrada-3.png',
        info: [
            {
                label: 'Tres fuelles cuadrada',
                path: 'assets/images/products/tres-fuelles-cuadrada/tres-fuelles-cuadrada-1.png'
            },
            {
                label: 'Tres fuelles cuadrada',
                path: 'assets/images/products/tres-fuelles-cuadrada/tres-fuelles-cuadrada-2.png'
            },
            {
                label: 'Tres fuelles cuadrada',
                path: 'assets/images/products/tres-fuelles-cuadrada/tres-fuelles-cuadrada-3.png'
            },
        ]
    },
    {
        label: 'Plana base fuelle',
        path: 'assets/images/products/plana-base-fuelle/plana-base-fuelle-2.png',
        info: [
            {
                label: 'Plana base fuelle',
                path: 'assets/images/products/plana-base-fuelle/plana-base-fuelle-1.png'
            },
            {
                label: 'Plana base fuelle',
                path: 'assets/images/products/plana-base-fuelle/plana-base-fuelle-2.png'
            },
        ]
    },
	{
        label: 'Troquelada',
        path: 'assets/images/products/troquelada/troquelada-1.png',
        info: [
            {
                label: 'Troquelada',
                path: 'assets/images/products/troquelada/troquelada-2.png'
            },
            {
                label: 'Troquelada',
                path: 'assets/images/products/troquelada/troquelada-3.png'
            },
        ]
    },
];

export interface ICard {
    path: string;
    label: string;
    info?: ICarousel[];
}