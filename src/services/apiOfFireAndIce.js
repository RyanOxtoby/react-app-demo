const axios = require('axios')

const baseUri = 'https://anapioficeandfire.com'

export const getGoTHouses = async () => {
    const response = await axios.get(`${baseUri}/api/houses`)

    const houseDetails = response.data

    const houses = []

    for (const house of houseDetails) {
        let currentLordName = ''

        if (house.currentLord) {
            const currentLordResponse = await axios.get(house.currentLord)
            currentLordName = currentLordResponse.data.name
        }

        houses.push({
            Name: house.name,
            Region: house.region,
            Words: house.words,
            CurrentLord: currentLordName,
        })
    }

    return houses
}
