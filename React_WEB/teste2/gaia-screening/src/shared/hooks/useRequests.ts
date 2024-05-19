import { useState } from "react"
import axios from 'axios';

export const useRequests = () => {
    const [loading, setLoading] = useState(false);

    const getRequest = async (url: string) => {
        setLoading(true);
        const response = await axios({
                    method: 'GET',
                    url: url
                }).then((data) => {
                    return data;
                }).catch(() => {
                    console.log('Erro');
                });
        setLoading(false);
        return response;
    }

    const postRequest = async <T>(url: string, body: T) => {
        setLoading(true);
        const response = await axios({
            method: 'GET',
            url: url,
            data: body    
        }).then((data) => {
            console.log(data);
            return data;
        }).catch(() => {
            console.log('Erro');
        });
        setLoading(false);
        return response;
    }

    return {
        loading,
        getRequest,
        postRequest
    }
}

