import { useState } from "react"

interface useFetchingProps {
    callback:(id: string) => void;
}

export const useFetching = (callback: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...props: []) => {
        try {
            setIsLoading(true)
            await callback(...props)
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                console.log ('err');
            }
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}