import Link from "next/link";
import { Logo } from "./menu/logo";
import { Diamond } from "lucide-react";
// icons


const lists = [
    [
        { name: "Shop", href: "/shop" },
        { name: "About Us", href: "/about-us" },
        { name: "Contact", href: "/contact" },
        { name: "FAQs", href: "/faq" },
    ],
    [
        { name: "Returns & Refunds", href: "/returns" },
        { name: "Shipping Information", href: "/shipping" },
        { name: "Size Guide", href: "/size-guide" },
        { name: "Track Order", href: "/track-order" },
    ],
    [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
    ],
];

export function Footer () {

    return (
        // <div className="bg-secondary-foreground/90">
        <div className="bg-primary/30">

            <div about="top">

            </div>

            <div about="main" className="flex items-start gap-20 p-16 pt-32">

                {/* Logo and Tagline */}
                <div className="w-[31%] pr-10 h-full flex flex-col items-start justify-start">
                    <Logo />
                    <p className="mt-4 text-sm">Elevate your style with our exclusive collection of men's and women's fashion. Discover the perfect pieces to complement your wardrobe and make a lasting impression.</p>

                    <div about="social" className="mt-4 flex gap-4">
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                {/* Links Section */}
                {lists.map((list, index) => 
                    <div key={index} className="w-[23%] h-[100%] flex flex-col items-start justify-start">
                        <ul className="flex flex-col gap-4">
                            {list.map((link, index) => (
                                <Link  key={index} href={link.href}>
                                    <li className="flex gap-2 items-center group transition-all">
                                        <Diamond strokeWidth={4} width={15} fill="transparent" className="text-primary group-hover:fill-primary transition-all" />
                                        {link.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )}

            </div>


            <div about="bottom" className="w-full pb-4 pt-4 flex justify-center items-center border border-t-accent/50 border-x-0 border-b-0 text-sm">
                <Link href="mailto:sinaolfati6@gmail.com">sinaolfati6@gmail.com</Link>
            </div>

        </div>
    )
}