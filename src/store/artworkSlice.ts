import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { ArtworkState } from '../types/artworks';

const ARTIC_URL = encodeURIComponent('https://api.artic.edu/api/v1/artworks');
const API_BASE_URL = `https://corsproxy.io/?${ARTIC_URL}`;

const initialState: ArtworkState = {
  list: [],
  items: {},
  status: 'idle',
  error: null,
};

export const fetchArtworkData = createAsyncThunk(
  'artworks/fetchArtwork',
  async (page: number) => {
    const res = await fetch(
      `${API_BASE_URL}/?fields=id,image_id,thumbnail,title,artist_title&page=${page}`,
    );
    const { pagination, data } = await res.json();

    return { pagination, data };
  },
);

export const fetchArtworkDetailData = createAsyncThunk(
  'artworks/fetchArtworkDetail',
  async (id: number) => {
    const res = await fetch(
      `${API_BASE_URL}/${id}?fields=id,image_id,thumbnail,title,artist_title,place_of_origin,date_start,description,medium_display,dimensions,credit_line,main_reference_number`,
    );
    const { data } = await res.json();

    return { id, data };
  },
);

const artworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArtworkData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArtworkData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list[action.payload.pagination.current_page - 1] =
          action.payload.data;
      })
      .addCase(fetchArtworkDetailData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArtworkDetailData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items[action.payload.id] = action.payload.data;
      });
  },
});

export default artworkSlice.reducer;
