import { useState } from "react";
import { connectionAPIPost, connetionAPIGet } from "../functions/connection/connectionAPI";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../../modules/product/routes";
import { useGlobalContext } from "./useGlobalContext";
import { URL_AUTH } from "../constants/urls";
import { ERROR_AUTH, ERROR_CONNECTION } from "../constants/errosStatus";
import { setAuthorizationToken } from "../functions/connection/auth";
import { AuthType } from "../../modules/login/types/AuthType";

export const useRequests = () => {
    const [loading] = useState(false);
    const navigate = useNavigate();
    const { setNotification } = useGlobalContext()

    const getRequest = async (url: string) => {
        const response = await connetionAPIGet(url)
            .then((data) => {
                return data;
            }).catch(() => {
                setNotification(ERROR_CONNECTION, 'error');
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

    const authRequest = async (body: unknown): Promise<void>  => {
        await connectionAPIPost<AuthType>(URL_AUTH, body)
        .then((data) => {
            setAuthorizationToken(data.access_token);
            navigate(ProductRoutesEnum.PRODUCT);
        }).catch((error: Error) => {
            console.log(error.message);
            setNotification(ERROR_AUTH, 'error');
            return undefined;
        });
        
    }

    return {
        loading,
        getRequest,
        postRequest,
        authRequest
    }
}

