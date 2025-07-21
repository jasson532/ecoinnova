import { ICarousel } from "./carousel.constants";

export const listProducts1: ICard[] = [
    {
        label: 'Plana base fuelle',
        path: 'assets/images/products/tres-fuelles/1.webp',
        info: [
            {
                label: 'Tres fuelles cuadrada',
                path: 'assets/images/products/tres-fuelles/2.webp'
            },
            {
                label: 'Tres fuelles cuadrada',
                path: 'assets/images/products/tres-fuelles/1.webp'
            },
        ]
    },
    {
        label: 'Tres fuelles',
        path: 'assets/images/products/tres-fuelles/3.webp',
        info: [
            {
                label: '-',
                path: 'assets/images/products/tres-fuelles/1.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tres-fuelles/2.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tres-fuelles/3.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tres-fuelles/4.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tres-fuelles/5.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tres-fuelles/6.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tres-fuelles/7.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tres-fuelles/8.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tres-fuelles/9.webp'
            },
        ]
    },
	{
        label: 'Troquelada',
        path: 'assets/images/products/troquelada/1.webp',
        info: [
            {
                label: 'Troquelada',
                path: 'assets/images/products/troquelada/2.webp'
            },
            {
                label: 'Troquelada',
                path: 'assets/images/products/troquelada/3.webp'
            },
        ]
    },
    {
        label: 'Fuelle bajo',
        path: 'assets/images/products/bolsa-fuelle-bajo/1.webp',
        info: [
            {
                label: '-',
                path: 'assets/images/products/bolsa-fuelle-bajo/2.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/bolsa-fuelle-bajo/3.webp'
            },
        ]
    },
    {
        label: 'Tipo sobre',
        path: 'assets/images/products/tipo-sobre/1.webp',
        info: [
            {
                label: '-',
                path: 'assets/images/products/tipo-sobre/2.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tipo-sobre/1.webp'
            },
        ]
    },
    {
        label: 'Plana manija',
        path: 'assets/images/products/plana-manija/1.webp',
        info: [
            {
                label: '-',
                path: 'assets/images/products/plana-manija/2.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/plana-manija/3.webp'
            },
        ]
    },
    {
        label: 'Plana troquel 20x25',
        path: 'assets/images/products/plana-troquel-20-25/1.webp',
        info: [
            {
                label: '-',
                path: 'assets/images/products/plana-troquel-20-25/2.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/plana-troquel-20-25/3.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/plana-troquel-20-25/4.webp'
            },
        ]
    },
    {
        label: 'Plana troquel 37x50',
        path: 'assets/images/products/plana-troquel-37-50/1.webp',
        info: [
            {
                label: '-',
                path: 'assets/images/products/plana-troquel-37-50/2.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/plana-troquel-37-50/1.webp'
            },
        ]
    },
    {
        label: 'Playa-sin-manija',
        path: 'assets/images/products/playa-sin-manija/1.webp',
        info: [
            {
                label: '-',
                path: 'assets/images/products/playa-sin-manija/2.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/playa-sin-manija/1.webp'
            },
        ]
    },
    {
        label: 'Tula con ojales',
        path: 'assets/images/products/tula-con-ojales/1.webp',
        info: [
            {
                label: '-',
                path: 'assets/images/products/tula-con-ojales/2.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tula-con-ojales/3.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tula-con-ojales/4.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tula-con-ojales/5.webp'
            },
            {
                label: '-',
                path: 'assets/images/products/tula-con-ojales/6.webp'
            },
        ]
    },
];

export interface ICard {
    path: string;
    label: string;
    info?: ICarousel[];
}