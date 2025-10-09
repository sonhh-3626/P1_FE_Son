import { useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-center">{t("hello")}</h1>
    </>
  )
}

export default App
