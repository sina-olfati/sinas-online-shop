import Link from "next/link";
import { Logo } from "./menu/logo";

export function Footer () {

    return (
        <div className="border border-primary bg-secondary-foreground/90">

            <div about="top">

            </div>

            <div about="main">

                <div>
                    <Logo />
                    <p></p>
                    <div about="social">

                    </div>
                </div>

                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>

            <div about="bottom" className="w-full p-3 flex justify-center items-center border border-t-accent text-accent text-sm font-bold">
                <Link href="mailto:sinaolfati6@gmail.com">sinaolfati6@gmail.com</Link>
            </div>

        </div>
    )
}