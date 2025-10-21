import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { type Review } from '../../types/Review';

const serverUrl = import.meta.env.VITE_SERVER_URL;

interface ReviewsState {
  items: Review[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ReviewsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchReviewsByProductId = createAsyncThunk(
  'reviews/fetchReviewsByProductId',
  async (productId: number) => {
    const response = await fetch(`${serverUrl}/products/${productId}/get_reviews`);
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const data: Review[] = await response.json();
    console.log(data);
    return data;
  }
);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsByProductId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReviewsByProductId.fulfilled, (state, action: PayloadAction<Review[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchReviewsByProductId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch reviews';
      });
  },
});

export default reviewsSlice.reducer;
