import axios from 'axios';
import Data from '@/types/Data';

const base_url = import.meta.env.VITE_API_URL;

export async function getData(): Promise<Data | null> {
    const {data, status} = await axios.get(base_url);

    if (status === 200) {
        return data;
    }

    return null
}


