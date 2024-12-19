import Link from "next/link";

// Components
import Header from "./components/index/header";

export default function Home() {
  return (
    <div className="">
      <Header />
      Hi there!
      <br />
      <Link href={"/pages/secondPage"}>Link to pages/secondPage</Link>
    </div>
  );
}
