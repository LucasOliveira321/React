import { useState } from "react";
import { connectionAPIPost, connetionAPIGet } from "../functions/connection/connectionAPI";

export const useRequests = () => {
    const [loading] = useState(false);

    const getRequest = async (url: string) => {
        const response = await connetionAPIGet(url)
            .then((data) => {
                return data;
            }).catch(() => {
                console.log('Erro');
            });
        return response;
    }

    const postRequest = async <T>(url: string, body: Object): Promise<T | undefined>  => {
        const response = await connectionAPIPost<T>(url, body).then((data) => {
            return data;
        }).catch((error: Error) => {
            console.log(error.message);
            return undefined;
        });
        return response;
    }

    return {
        loading,
        getRequest,
        postRequest
    }
}

