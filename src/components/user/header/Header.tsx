import TopBar from "./TopBar/TopBar";
import PrimaryHeader from "./PrimaryHeader/PrimaryHeader";
import MenuBar from "./MenuBar/MenuBar";
import "./Header.css";

export default function Header() {
  return (
    <>
      <TopBar />
      <PrimaryHeader />
      <MenuBar />
    </>
  )
}
