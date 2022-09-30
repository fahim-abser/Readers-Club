import { useEffect, useState } from "react"

const useWriters = () => {
    const [writers, setWriters] = useState([]);
    useEffect(() => {
        fetch('writers.json')
            .then(res => res.json())
            .then(data => setWriters(data));
    }, []);
    return [writers, setWriters];
}
export default useWriters;