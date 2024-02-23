'use client'

import { useEffect, useState } from 'react';
import { RequestShelf } from './typeShelf';

export function useSearchCollection(queryParams : string) {
  const [products, setProducts] = useState<RequestShelf>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `api/collection?${queryParams}`
        );
        if (!response.ok) {
          throw new Error('Response not ok');
        }
        const data = await response.json();
        console.log("data",data)
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product list:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [queryParams]);

  return { products, loading };
}