const movies = [
    {
        _id: '033cdbbcc3014a7b898d4f6c3faad787',
        title: 'Avatar',
        genre: { _id: "2c24c9553d324996b5307696daf6a00e", name: 'Action' },
        numberInStock: 4,
        dailyRentalRate: 6
    },
    {
        _id: 'f483b66f9c72435aa1cfa159a908ea3e',
        title: 'Harry Potter',
        genre: { _id: "acbcb600820c4927ae6bff608049fd0c", name: 'Comedy' },
        numberInStock: 3,
        dailyRentalRate: 4
    },
    {
        _id: 'de6646a6a62a491094711be2aafe1018',
        title: 'It',
        genre: { _id: "b19530e9c60d4508b8a4e5700aae5c7e", name: 'Drama' },
        numberInStock: 2,
        dailyRentalRate: 3.5
    },
    {
        _id: 'd7063bdb3d5b49abb8a9d237193767f7',
        title: 'Transformers',
        genre: { _id: "5bf59e378f9d49c292cb885882f4bb83", name: 'Fantasy' },
        numberInStock: 3,
        dailyRentalRate:8
    },
    {
        _id: 'b5b75b63178541c89cb2ef34d4949f1f',
        title: 'Batman',
        genre: { _id: "6576708e9bb9441a8c18bc118ebddc32", name: 'Horror' },
        numberInStock: 3,
        dailyRentalRate: 2
    },
    {
        _id: 'c04ebee6067945798244b40248740fa4',
        title: 'Avengers',
        genre: { _id: "46c73605bbe446aabb3efb89d9e3654c", name: 'Mystery' },
        numberInStock: 4,
        dailyRentalRate: 5
    },
    {
        _id: 'a3c34cf605c24166bc631d7b65b620a0',
        title: 'Dumbo',
        genre: { _id: "c7d9f6d0a4d142599380152855f23234", name: 'Romance' },
        numberInStock: 3,
        dailyRentalRate: 1
    },
    {
        _id: '7b0db359bc5346dabf4ec07a29012d8f',
        title: 'Avatar',
        genre: { _id: "7b9f9eae929b4667bcb0034bc2dcbf97", name: 'Thriller' },
        numberInStock: 9,
        dailyRentalRate: 7
    },
    {
        _id: 'd2ae9ae7e4524583a6526b025c53ada7',
        title: '007',
        genre: { _id: "5c6ad99bd0ec45a691e071f7be148f6d", name: 'Western' },
        numberInStock: 6,
        dailyRentalRate: 3
    },
    {
        _id: '93ff704459d34c869098edd3ad043ce1',
        title: 'Airplane',
        genre: { _id: "b9718ed6515f4deeb8a40b750f923e70", name: 'Crime Thriller' },
        numberInStock: 4,
        dailyRentalRate: 3.5
    }
]



export function getMovies(){
    return movies
}
