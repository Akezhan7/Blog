import { useMemo } from "react"

export const usePagination = (totalPages: number) => {
    const newArr = useMemo (() => {
        let pageArr = [];
        for (let i = 0; i < totalPages; i++) {
            pageArr.push (i + 1);
        }
        return pageArr;
    }, [totalPages]);
    
    return newArr;
}