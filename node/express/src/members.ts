import MembersInterface from "./interfaces/MembersInterface"
import User from "./models/User"

const serhii = new User('Serhii Cho')
const anna = new User('Anna Korotchaeva')
const diana = new User('Diana Sedniva')

const json: MembersInterface[] = [
    {first: serhii.getFirst, last: serhii.getLast},
    {first: anna.getFirst, last: anna.getLast},
    {first: diana.getFirst, last: diana.getLast},
]

export default json