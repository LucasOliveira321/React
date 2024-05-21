import { useState } from "react";
import { connectionAPIPost, connetionAPIGet } from "../functions/connection/connectionAPI";
import { URL_AUTH } from "../constants/urls";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../../modules/product/routes";

export const useRequests = () => {
    const [loading] = useState(false);
    const navigate = useNavigate();

    const getRequest = async (url: string) => {
        const response = await connetionAPIGet(url)
            .then((data) => {
                return data;
            }).catch(() => {
                console.log('Erro');
            });
        return response;
    }

    const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined>  => {
        const response = await connectionAPIPost<T>(url, body).then((data) => {
            return data;
        }).catch((error: Error) => {
            console.log(error.message);
            return undefined;
        });
        return response;
    }

    const authRequest = async <T>(body: unknown): Promise<T | undefined>  => {
        const response = await connectionAPIPost<T>(URL_AUTH, body).then((data) => {
            navigate(ProductRoutesEnum.PRODUCT);
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
        postRequest,
        authRequest
    }
}

