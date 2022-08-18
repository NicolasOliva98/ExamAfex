import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ListData } from "./ts/routes";
import { GET } from "../api/api_service";
import { ListIterfaces } from "../interfaces";

interface IState {
  loading: boolean;
  data?: ListIterfaces[];
  error: boolean | null;
}

const initialState: IState = {
  loading: true,
  data: [],
  error: null,
};

export const getData = createAsyncThunk(
  "example/getDatax",
  async (_, { rejectWithValue }) => {
    const response: any = await GET(ListData());
    if (response.error) rejectWithValue(response.error);
    return response.data;
  }
);

export const listadoSlice = createSlice({
  name: "listado",
  initialState,
  reducers: {
    clearSlice: () => ({ ...initialState }),
    setLoading: (state, action: { payload: { load: boolean } }) => {
      const { load } = action.payload ?? {};
      state.loading = load;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        if (action.payload === undefined) {
          state.error = true;
        }
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { clearSlice, setLoading } = listadoSlice.actions;

export const exampleGetData = (state: RootState) => ({
  loading: state.listado.loading,
  data: state.listado.data,
  error: state.listado.error,
});

export default listadoSlice;
