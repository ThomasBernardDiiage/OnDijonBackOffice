import { ShelterHistory } from "./shelter.history.interface"

export interface Shelter {
    id : Number
    name : String
    longitude : number
    latitude : number
    capacity : Number
    occupation : Number
    history : ShelterHistory[]
}