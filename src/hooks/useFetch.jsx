import axios from 'axios';
import { useEffect, useState } from 'react'
// import Loading from '../components/Loader/Loading';

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      const { data } = await axios.get(url)
      setData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getData();
  }, [])


  return  {data,isLoading,error}
}

export default useFetch