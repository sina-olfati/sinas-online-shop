import Image from "next/image";

// Components
import MainPage from "./pages/mainPage";
import Header from "./components/index/header";

export default function Home() {
  return (
    <div className="">
      <Header />
      Hi there!
      <MainPage />
      
    </div>
  );
}
