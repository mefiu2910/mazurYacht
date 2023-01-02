const mongoose = require('mongoose')
const Yacht = require('../models/yacht')

mongoose.connect('mongodb://localhost:27017/mazur-yacht')

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

//Yacht.deleteMany({})

Yacht.insertMany([
    {
        name: 'Cobra Futura 36 | Bella Gold',
        type: 'HOUSEBOAT',
        desctription: 'Futura 36 w wersji Bella Gold to luksusowy jacht motorowy, czyli jednostka motorowa o najwyższym standardzie mieszkalnym. W komfortowych warunkach w czterech oddzielnych zamykanych kajutach może na niej nocować osiem osób.',
        photo: 'https://imageresizer.yachtsbt.com/boats/5fd1f37f402d7c2f792d77a7/5fd1f474c693db771201bbc6.jpeg?method=fit&width=1022&height=450&format=webp',
        price: '1100',
        bookings: [
            {
                dateFrom: '2023-06-30',
                dateTo: '2023-07-01'
            },
            {
                dateFrom: '2023-05-25',
                dateTo: '2023-05-27'
            },
            {
                dateFrom: '2023-04-30',
                dateTo: '2023-05-01'
            },
            {
                dateFrom: '2023-06-10',
                dateTo: '2023-06-15'
            }
        ]
    },
    {
        name: 'Antila 27 | Majster',
        type: 'Jacht Żaglowy',
        desctription: 'Antila 27 to rekreacyjny jacht żaglowy zdolny zakwaterować ośmioosobową załogę. Już na pierwszy rzut oka widać znaczną różnicę między Antilą 27 a mniejszymi jednostkami tej stoczni. Jacht świetnie sprawdza się w Krainie Wielkich jezior Mazurskich. Dzięki zwrotności i lekkości prowadzenia manewrów Antila 27 od swojej premiery jest jedną z najczęściej wybieranych łódek tej klasy.',
        photo: 'https://bielakczartery.pl/wp-content/uploads/2015/07/antila27_cicily-7-scaled.jpg',
        price: '450',
        bookings: [
            {
                dateFrom: '2023-05-03',
                dateTo: '2023-05-10'
            },
            {
                dateFrom: '2023-08-02',
                dateTo: '2023-08-08'
            },
            {
                dateFrom: '2023-05-01',
                dateTo: '2023-05-14'
            },
            {
                dateFrom: '2023-06-12',
                dateTo: '2023-06-16'
            },
            {
                dateFrom: '2023-04-01',
                dateTo: '2023-04-10'
            },
            {
                dateFrom: '2023-07-01',
                dateTo: '2023-07-14'
            },
        ]
    },
    {
        name: 'Bayliner 175 | Ciera 8',
        type: 'Motorówka',
        desctription: 'Bayliner Ciera 8 to absolutny hit. To duża łódź kabinowa typu cruiser, oferująca wygodny nocleg dla 4 osób, wysokość stania w kabinie oraz wyposażona i wykończona na bardzo wysokim poziomie. Jest to łódź w której chce się przebywać i z której nie chce się wychodzić. Wyjątkowo przestronna kabina z aneksem kuchennym, łóżko dziobowe przemieniane na stolik oraz opcjonalne ogrzewanie lub klimatyzacja tworzą prawdziwą alternatywę do pokoju hotelowego.',
        photo: 'https://bielakczartery.pl/wp-content/uploads/2015/07/antila27_cicily-7-scaled.jpg',
        price: '1500',
        bookings: [
            {
                dateFrom: '2023-05-30',
                dateTo: '2023-06-01'
            },
            {
                dateFrom: '2023-07-01',
                dateTo: '2023-07-02'
            }
        ]
    },
]).then(function () {
    console.log("Data inserted")  // Success
}).catch(function (error) {
    console.log(error)      // Failure
});