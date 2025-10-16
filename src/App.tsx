import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';

import { type RootState, type AppDispatch } from "./redux/store";
import { fetchProducts } from "./redux/features/productSlice";
import store from "./redux/store";
import { router } from "./routes";

function AppContent() {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <RouterProvider router={router} />
  );
}
function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
export default App;
