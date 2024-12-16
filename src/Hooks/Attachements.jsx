import { GetAttachment,GetParts,GetComment } from "../Services/AllApi";
import { useQuery } from "@tanstack/react-query";




export const Attachments = () => {


    return useQuery({

        queryKey: ["Attachemnt"],
        queryFn: async () => {

            const response = await GetAttachment()

            return response.data

        }

    })


}


export const ProductParts = () => {


    return useQuery({

        queryKey: ["Parts"],
        queryFn: async () => {

            const response = await GetParts()

            return response.data

        }

    })


}


export const Comments = () => {


    return useQuery({

        queryKey: ["Comment"],
        queryFn: async () => {

            const response = await GetComment()

            return response.data

        }

    })


}