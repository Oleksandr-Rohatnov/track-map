import React, { useEffect, useState } from 'react';
import objectApi from '../api/objectApi';

const ObjectList: React.FC = () => {
  const [objects, setObjects] = useState<any>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Окрема функція для отримання об'єктів
  const fetchObjects = async () => {
    try {
      setLoading(true);
      const response = await objectApi.getObjects();
      setObjects(response.data);
    } catch {
      setError('Error fetching objects');
    } finally {
      setLoading(false);
    }
  };

  // Виклик функції всередині useEffect
  useEffect(() => {
    fetchObjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Object List</h1>
      <ul>
        {objects?.map((obj: any) => (
          <li key={obj.id}>
            ID: {obj.id}, Coordinates: ({obj.coordinates.lat}, {obj.coordinates.lng})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectList;