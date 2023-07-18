import { ShelterHistoryResponse } from "./shelterHistory.response.interface"
import { ShelterReportResponse } from "./shelterReport.response.interface"

export interface ShelterResponse {
    id : Number
    name : String
    longitude : number
    latitude : number
    capacity : Number
    occupation : Number
    history : ShelterHistoryResponse[]
    reports : ShelterReportResponse[]
}