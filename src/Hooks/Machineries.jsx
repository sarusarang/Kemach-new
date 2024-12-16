import { useQuery } from "@tanstack/react-query"
import { GetMachine,GetNearestShowRoom } from "../Services/AllApi"



export const Machineries = () => {


    return useQuery({

        queryKey: ["ProductData"],
        queryFn: async () => {

            const response = await GetMachine()

            return response.data

        }

    })

}

export const NearestShowroom = () => {


    return useQuery({

        queryKey: ["ShowRoom"],
        queryFn: async () => {

            const response = await GetNearestShowRoom()

            return response.data

        }

    })

}

