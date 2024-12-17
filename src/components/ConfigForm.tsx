import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { addConfig } from "../store/configSlice";

const ConfigForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [formData, setFormData] = useState({
            name: '',
            value: '',
            description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addConfig(formData));
        setFormData({ name: '', value: '', description: '' });
    };

    return (
        <div className="border-b border-gray-900/10 pb-12">
        <hr />
        <form onSubmit={handleSubmit}>
            <div className="mt-5 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
            <label htmlFor="name">Configuration Name:</label>
            <input className="mt-5"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </div>
            <div className="mt-5 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
                <label htmlFor="value">Value:</label>
                <input className="mt-5"
                    type="text"
                    id="value"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mt-5 grid grid-cols-6 gap-x-6 gap-y-8 sm:grid-cols-6">
                <label htmlFor="description">Description:</label>
                <textarea className="mt-5"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div className="mt-5 ml-6 grid grid-cols-6 gap-x-1 gap-y-8 sm:grid-cols-6">
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Configuration</button>
            </div>
        </form>
        </div>
    );
};
    
export default ConfigForm;