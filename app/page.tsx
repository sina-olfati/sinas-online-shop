import Link from "next/link";
import { ThemeModeToggle } from "./components/theme-mode-toggle";
import { ThemeColorToggle } from "./components/theme-color-toggle";

// Components

export default function Home() {
  return (
    <div className="">
      Hi there!
      {/* <ThemeModeToggle /> */}
      <ThemeColorToggle />
      <br />
      <Link href={"/pages/secondPage"}>Link to pages/secondPage</Link>
    </div>
  );
}
