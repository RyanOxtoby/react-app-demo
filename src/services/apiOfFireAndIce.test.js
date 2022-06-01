import axios from 'axios'

jest.mock('axios')

import { getGoTHouses } from './apiOfFireAndIce'

const stubName1 = 'House Name 1'
const stubRegion1 = 'Region 1'
const stubWords1 = 'Words 1'
const stubCurrentLordUri1 = 'https://currentlord/1'
const stubCurrentLordName1 = 'CurrentLord1'

const stubName2 = 'House Name 2'
const stubRegion2 = 'Region 2'
const stubWords2 = 'Words 2'
const stubCurrentLordUri2 = 'https://currentlord/2'
const stubCurrentLordName2 = 'CurrentLord2'

const exampleApiResponse = [
    {
        url: 'exampleUrl',
        name: stubName1,
        region: stubRegion1,
        coatOfArms: 'Coat of Arms',
        words: stubWords1,
        titles: ['Title'],
        seats: ['Seats'],
        currentLord: stubCurrentLordUri1,
        heir: 'Heir',
        overlord: 'Overlord',
        founded: 'Founded',
        founder: 'Founder',
        diedOut: 'Died Out',
        ancestralWeapons: ['Ancestral Weapons'],
        cadetBranches: ['Cadet Branches'],
        swornMembers: ['Sworn Members'],
    },
    {
        url: 'exampleUrl',
        name: stubName2,
        region: stubRegion2,
        coatOfArms: 'Coat of Arms',
        words: stubWords2,
        titles: ['Title'],
        seats: ['Seats'],
        currentLord: stubCurrentLordUri2,
        heir: 'Heir',
        overlord: 'Overlord',
        founded: 'Founded',
        founder: 'Founder',
        diedOut: 'Died Out',
        ancestralWeapons: ['Ancestral Weapons'],
        cadetBranches: ['Cadet Branches'],
        swornMembers: ['Sworn Members'],
    },
]

const stubCurrentLord1 = {
    url: stubCurrentLordUri1,
    name: stubCurrentLordName1,
    gender: 'gender',
    culture: 'culture',
    born: 'born',
    died: 'died',
    titles: ['Title'],
    aliases: ['aliases'],
    father: 'father',
    mother: 'mother',
    spouse: 'spouse',
    allegiances: ['allegiances'],
    books: ['books'],
    povBooks: [],
    tvSeries: ['series'],
    playedBy: ['Actor 1'],
}

const stubCurrentLord2 = {
    url: stubCurrentLordUri2,
    name: stubCurrentLordName2,
    gender: 'gender',
    culture: 'culture',
    born: 'born',
    died: 'died',
    titles: ['Title'],
    aliases: ['aliases'],
    father: 'father',
    mother: 'mother',
    spouse: 'spouse',
    allegiances: ['allegiances'],
    books: ['books'],
    povBooks: [],
    tvSeries: ['series'],
    playedBy: ['Actor 2'],
}

describe('getGoTHouses', () => {
    it('should call the fire and ice api to retrieve all house details', async () => {
        axios.get.mockResolvedValueOnce({ data: exampleApiResponse })
        axios.get.mockResolvedValueOnce({ data: stubCurrentLord1 })
        axios.get.mockResolvedValueOnce({ data: stubCurrentLord2 })

        await getGoTHouses()

        expect(axios.get).toBeCalledWith(
            'https://anapioficeandfire.com/api/houses'
        )
    })

    it('should call the fire and ice api to retrieve the details of the current lord for each house', async () => {
        axios.get.mockResolvedValueOnce({ data: exampleApiResponse })
        axios.get.mockResolvedValueOnce({ data: stubCurrentLord1 })
        axios.get.mockResolvedValueOnce({ data: stubCurrentLord2 })

        await getGoTHouses()

        expect(axios.get).toBeCalledWith(stubCurrentLordUri1)
        expect(axios.get).toBeCalledWith(stubCurrentLordUri2)
    })

    it('should return an empty string as the current lord if there is none set', async () => {
        axios.get.mockResolvedValueOnce({
            data: [{ ...exampleApiResponse[0], currentLord: '' }],
        })

        const response = await getGoTHouses()

        console.log(response)
        expect(response[0].CurrentLord).toBe('')
    })

    it('should return only the fields required for each item', async () => {
        const expectedResponse = [
            {
                Name: stubName1,
                Region: stubRegion1,
                Words: stubWords1,
                CurrentLord: stubCurrentLordName1,
            },
            {
                Name: stubName2,
                Region: stubRegion2,
                Words: stubWords2,
                CurrentLord: stubCurrentLordName2,
            },
        ]

        axios.get.mockResolvedValueOnce({ data: exampleApiResponse })
        axios.get.mockResolvedValueOnce({ data: stubCurrentLord1 })
        axios.get.mockResolvedValueOnce({ data: stubCurrentLord2 })

        const response = await getGoTHouses()

        expect(response).toEqual(expectedResponse)
    })
})
