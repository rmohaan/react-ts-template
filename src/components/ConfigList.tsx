import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { updateConfig } from '../store/configSlice';

const ConfigList: React.FC = () => {
  const configs = useSelector((state: RootState) => state.config.configs);
  const dispatch = useDispatch<AppDispatch>();

  // State to track which config is being edited
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // State to track the edited values
  const [editData, setEditData] = useState<{ name: string; value: string }>({
    name: '',
    value: '',
  });

  const handleEditClick = (index: number, config: { name: string; value: string }) => {
    setEditIndex(index);
    setEditData(config);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    if (editIndex !== null) {
      dispatch(updateConfig(editData));
    }
    setEditIndex(null); // Exit edit mode
  };

  const handleCancelClick = () => {
    setEditIndex(null); // Cancel editing
  };

  return (
    <div>
      <h2>Configuration List</h2>
      <ul>
        {configs.map((config, index) => (
          <li key={config.name}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleInputChange}
                  placeholder="Key"
                  disabled // Disable editing of the key for existing configurations
                />
                <input
                  type="text"
                  name="value"
                  value={editData.value}
                  onChange={handleInputChange}
                  placeholder="Value"
                />
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
            ) : (
              <div>
                <strong>{config.name}</strong>: {config.value}{' '}
                <button onClick={() => handleEditClick(index, config)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConfigList;