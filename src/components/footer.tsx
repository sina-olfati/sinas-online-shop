'use client'
import Link from "next/link";
import { Logo } from "./menu/logo";
import { Diamond, Sparkles } from "lucide-react";
// icons
import { Send, Phone, Linkedin, Mail, Github } from "lucide-react";
import Image from "next/image";
import { Button } from "@nextui-org/react";


const socials = [
    {
        name: "mail",
        link: "mailto:sinaolfati6@gmail.com",
        icon: <Mail className="group-hover:text-primary transition-all w-5" />
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/sina-olfati-872950233",
        icon: <Linkedin className="group-hover:text-primary transition-all w-5" />
    },
    {
        name: "github",
        link: "https://github.com/sina-olfati",
        icon: <Github className="group-hover:text-primary transition-all w-5" />
    },
    {
        name: "phone",
        link: "tel:+989941669736",
        icon: <Phone className="group-hover:text-primary transition-all w-5" />
    },
    {
        name: "telegram",
        link: "https://t.me/sinaolfati",
        icon: <Send className="group-hover:text-primary transition-all w-5" />
    }
];


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
        <div className="bg-primary/30 relative mt-96 flex flex-col items-center">

            <div about="top" className="rounded-3xl flex px-10 w-[80%] aspect-[40/10] absolute bottom-[80%] bg-secondary shadow-lg">
                <div className="w-[40%] h-full relative">
                    <Image src={'/footer/clothes.png'} className="w-full scale-125 relative bottom-[50%] drop-shadow-[-10px_10px_5px_rgba(0,0,0,0.25)]" alt="footer" width={0}  height={0} sizes="100vw" />
                </div>
                <div className="w-[60%] flex flex-col items-start justify-center gap-3 pl-20">
                    <h2 className="font-bold text-primary">Expert Styling Advice – Find Your Signature Look!</h2>
                    <p className="text-sm pb-5">Let our professional stylists guide you to outfits that bring out your best. With quick and personalized styling tips, shop confidently and create a wardrobe that truly reflects your style. We're here to help you make the perfect choice!</p>
                    <Button variant="shadow" color="primary" className="font-bold">
                        <Sparkles />
                        {/* Book Your Consultation */}
                        Get Styling Tips
                    </Button>
                </div>
            </div>


            <div about="main" className="flex items-start gap-20 p-16 pt-52">
            {/* <div about="main" className="flex items-start gap-20 p-16 h-[500px]"> */}

                {/* Logo and Tagline */}
                <div className="w-[31%] pr-10 h-full flex flex-col items-start justify-start gap-4">
                    <div className="scale-150 h-10 relative r-5">
                        <Logo />
                    </div>
                    <p className="mt-4 text-sm">Elevate your style with our exclusive collection of men's and women's fashion. Discover the perfect pieces to complement your wardrobe and make a lasting impression.</p>

                    <div about="social" className="mt-4 flex gap-4">

                        {socials.map((social) => 
                            <Link key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="group">
                                {social.icon}
                            </Link>
                        )}

                    </div>
                </div>

                {/* Links Section */}
                {lists.map((list, index) => 
                    <div key={index} className="w-[23%] h-[100%] flex flex-col items-start justify-start">
                        <ul className="flex flex-col gap-4">
                            {list.map((link, index) => (
                                <Link  key={index} href={link.href}>
                                    <li className="flex gap-2 items-center group transition-all">
                                        <Diamond strokeWidth={4} width={13} fill="transparent" className="text-primary group-hover:fill-primary transition-all" />
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