import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import { type RootState, type AppDispatch } from "./redux/store";
import { fetchProducts } from "./redux/features/productSlice";
import store from "./redux/store";
import { router } from "./routes";

function AppContent() {
  const dispatch: AppDispatch = useDispatch();
  const { t } = useTranslation();
  const { status, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  if ( status === 'loading') {
    return <div>{t('product.loading')}</div>;
  }

  if (error) {
    return <div>{t('product.error', { error })}</div>;
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
