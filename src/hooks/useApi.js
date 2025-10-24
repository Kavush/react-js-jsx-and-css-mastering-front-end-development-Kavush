import { useState, useEffect } from 'react';

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${url}?_page=${page}&_limit=10`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(prev => page === 1 ? result : [...prev, ...result]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const refresh = () => {
    setPage(1);
    setData([]);
  };

  return { data, loading, error, loadMore, refresh, page };
};

export default useApi;