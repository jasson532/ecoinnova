import { ICarousel } from "./carousel.constants";

export const listProducts1: ICard[] = [
    {
        label: 'Bolsa de fuelle bajo',
        path: 'assets/images/carousel/1.jpeg',
        info: [
            {
                label: '20 ANCHO X 30 ALTO X 6 FUELLE',
                path: 'assets/images/carousel/1.jpeg'
            },
            {
                label: '30 ANCHO X 30 ALTO X 8 FUELLE',
                path: 'assets/images/carousel/2.jpeg'
            },
        ]
    },
    {
        label: 'Imagen 2',
        path: 'assets/images/carousel/2.jpeg'
    },
    {
        label: 'Imagen 3',
        path: 'assets/images/carousel/3.jpeg',
        info: [
            {
                label: '20 ANCHO X 30 ALTO X 6 FUELLE',
                path: 'assets/images/carousel/1.jpeg'
            },
        ]
    },
    {
        label: 'Imagen 4',
        path: 'assets/images/carousel/4.jpeg'
    },
    {
        label: 'Imagen 5',
        path: 'assets/images/carousel/5.png'
    },
    {
        label: 'Imagen 6',
        path: 'assets/images/carousel/1.jpeg'
    },
    {
        label: 'Imagen 7',
        path: 'assets/images/carousel/3.jpeg'
    },
    {
        label: 'Imagen 8',
        path: 'assets/images/carousel/3.jpeg'
    },
    {
        label: 'Imagen 9',
        path: 'assets/images/carousel/3.jpeg'
    },
    {
        label: 'Imagen 10',
        path: 'assets/images/carousel/3.jpeg'
    },
];

export interface ICard {
    path: string;
    label: string;
    info?: ICarousel[];
}