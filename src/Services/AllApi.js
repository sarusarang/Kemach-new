import { CommonApi } from "./CommonApi";


const base_url = "https://server.kemachequipments.com"



// Get Machine
export const GetMachine = async () => {

    return CommonApi("GET", `${base_url}/machineries/`, "", "")

}



// Get Attachment
export const GetAttachment = async () => {

    return CommonApi("GET", `${base_url}/attachments/`, "", "")

}



// Get Parts
export const GetParts = async () => {

    return CommonApi("GET", `${base_url}/parts/`, "", "")

}


// Get Nearest Showroom
export const GetNearestShowRoom = async () => {

    return CommonApi("GET", `${base_url}/nearest-showroom/`, "", "")

}


// Book Test
export const PostBookTest = async (data, header) => {

    return CommonApi("POST", `${base_url}/test-drive/`, data, header)

}

//Contact Us Form
export const PostContact = async (data, header) => {

    return CommonApi("POST", `${base_url}/contact/`, data, header)

}

//Contact Us Form
export const PostService = async (data, header) => {

    return CommonApi("POST", `${base_url}/service/`, data, header)

}


export const GetComment = async () => {

    return CommonApi("GET", `${base_url}/comment/`, "", "")

}
