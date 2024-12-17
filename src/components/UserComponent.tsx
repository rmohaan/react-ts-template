import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/index';
import { fetchData } from '../store/apiSlice';
import { AppDispatch } from '../store/index';

const UserComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.api);

  useEffect(() => {
    dispatch(fetchData(''));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((item: { id: number; username: string }) => (
          <li key={item.id}>{item.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
