import { useEffect, useState } from 'react';
import apiClient from '../assets/services/api-client';
import { AxiosRequestConfig } from 'axios';

interface FetchResponse<T> {
    count: number;
    results: T[];
}

function useData<T>(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: any[] | undefined
) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await apiClient.get<FetchResponse<T>>(endpoint, requestConfig);

                if (isMounted) {
                    setData(response.data.results);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    return { data, error, isLoading };
}

export default useData;
