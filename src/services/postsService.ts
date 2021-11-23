interface Post {
    id?: string,
    img?: string,
    username?: string,
    description?: string,
    profilePic?: string,
    likes?: number,
    time?: string
}

export const postsList: Post[] = [
    {
        id: "21", img: "https://picsum.photos/400?random=21", username: "gburdikin", 
        description: "La primavera comienza, en el hemisferio sur, el 21 de septiembre.", 
        profilePic: "https://picsum.photos/400?random=31", likes: 125, time: "Hace 15 minutos"
    },
    {
        id: "22", img: "https://picsum.photos/400?random=22", username: "mvanderhoeven1", 
        description: "El labrador es una de las clases más conocidas en el mundo, es originaria de Canadá, es destacado  por ser un animal trabajador, juguetón e inteligente.", 
        profilePic: "https://picsum.photos/400?random=32", likes: 52, time: "Hace 32 minutos"
    },
    {
        id: "23", img: "https://picsum.photos/400?random=23", username: "kgeorgius2", 
        description: "Vive, en su mayoría, en las regiones cálidas de América, principalmente en Perú, Bolivia, Colombia, Brasil y Argentina.", 
        profilePic: "https://picsum.photos/400?random=33", likes: 412, time: "Hace 1 hora"
    },
    {
        id: "24", img: "https://picsum.photos/400?random=24", username: "hpeasgood3", 
        description: "Normalmente solo aparecen en ciertas épocas del año, pues no sobreviven mucho al apareamiento ni se les admite en el nido tras el vuelo nupcial.", 
        profilePic: "https://picsum.photos/400?random=34", likes: 95, time: "Hace 2 horas"
    },
    {
        id: "25", img: "https://picsum.photos/400?random=25", username: "fblanchet4", 
        description: "Seis maleantes ingresaron al banco y tomaron las pertenencias de todos los que allí estaban.", 
        profilePic: "https://picsum.photos/400?random=35", likes: 86, time: "Hace 4 horas"
    },
    {
        id: "26", img: "https://picsum.photos/400?random=26", username: "jberney5", 
        description: "El bar de la esquina de mi casa es un edificio antiguo, con catorce mesas y sesenta sillas de madera.", 
        profilePic: "https://picsum.photos/400?random=36", likes: 71, time: "Hace 7 horas"
    },
]