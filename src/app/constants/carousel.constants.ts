export const dataCarousel: ICarousel[] = [
    {
        label: 'Imagen 1',
        path: 'assets/images/carousel/1.jpeg'
    },
    {
        label: 'Imagen 2',
        path: 'assets/images/carousel/2.jpeg'
    },
    {
        label: 'Imagen 3',
        path: 'assets/images/carousel/3.jpeg'
    },
    {
        label: 'Imagen 4',
        path: 'assets/images/carousel/4.jpeg'
    }
];

export interface ICarousel {
    path: string;
    label: string;
}