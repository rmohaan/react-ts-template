import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Configuration {
    name: string;
    value: string;
    description?: string;
}

interface ConfigState {
    configs: Configuration[];
}

const initialState: ConfigState = {
    configs: []
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        addConfig: (state, action: PayloadAction<Configuration>) => {
            state.configs.push(action.payload);
        },
        updateConfig: (state, action: PayloadAction<Configuration>) => {
            const index = state.configs.findIndex(config => config.name === action.payload.name);
            if (index !== -1) {
                state.configs[index] = action.payload;
            }
        },
        deleteConfig: (state, action: PayloadAction<Configuration>) => {
            state.configs = state.configs.filter(config => config.name !== action.payload.name);
        },
    }
});

export const { addConfig, updateConfig, deleteConfig } = configSlice.actions;
export default configSlice.reducer;