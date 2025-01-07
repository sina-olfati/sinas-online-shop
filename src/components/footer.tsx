'use client'
import Link from "next/link";
import { Logo } from "./menu/logo";
import { Diamond, Sparkles } from "lucide-react";
// icons
import { Send, Phone, Linkedin, Mail, Github } from "lucide-react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";


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
        { name: "buttons.shop", href: "/shop" },
        { name: "buttons.aboutUs", href: "/about-us" },
        { name: "buttons.contact", href: "/contact" },
        { name: "buttons.faqs", href: "/faq" },
    ],
    [
        { name: "buttons.return", href: "/returns" },
        { name: "buttons.shipping", href: "/shipping" },
        { name: "buttons.size", href: "/size-guide" },
        { name: "buttons.track", href: "/track-order" },
    ],
    [
        { name: "buttons.privacy", href: "/privacy-policy" },
        { name: "buttons.terms", href: "/terms" },
        { name: "buttons.careers", href: "/careers" },
        { name: "buttons.blog", href: "/blog" },
    ],
];

export function Footer () {

    // Next-intl
    const t = useTranslations('Footer');

    return (
        // <div className="bg-secondary-foreground/90">
        // <div className="bg-primary/30 relative mt-96 flex flex-col items-center">
        <div className="bg-secondary-foreground/90 mysm:bg-transparent dark:bg-secondary/70 mysm:dark:bg-transparent text-white relative mt-96 flex flex-col items-center">

            <div about="top" className="rounded-3xl flex mysm:flex-col mysm:items-center mysm:justify-center px-10 mysm:pb-10 w-[80%] mysm:w-[90%] aspect-[40/10] mysm:aspect-auto absolute mysm:relative bottom-[80%] mysm:bottom-24 sm bg-secondary shadow-lg">
                <div className="w-[40%] mysm:w-[80%] h-full relative mysm:absolute mysm:top-[-60%] myxs:top-[-42%]">
                    <Image src={'/footer/clothes.png'} className="w-full scale-125 relative bottom-[50%] mysm:bottom-0 drop-shadow-[-10px_10px_5px_rgba(0,0,0,0.25)]" alt="footer" width={0}  height={0} sizes="100vw" />
                </div>
                <div className="w-[60%] mysm:w-full mysm:pt-[35%] flex flex-col items-start mysm:items-center justify-center gap-3 mylg:gap-6 pl-20 mysm:pl-0 mysm:text-center text-secondary-foreground">
                    <h2 className="font-semibold text-primary">{t('offer.title')}</h2>
                    <p className="text-sm pb-5 mylg:hidden mysm:flex">{t('offer.explanation')}</p>
                    <Button variant="shadow" color="primary" className="font-bold">
                        <Sparkles />
                        {t('offer.button')}
                    </Button>
                </div>
            </div>


            <div about="main" className="flex items-start gap-20 p-16 pt-52 mysm:hidden">
            {/* <div about="main" className="flex items-start gap-20 p-16 h-[500px]"> */}

                {/* Logo and Tagline */}
                <div className="w-[31%] mylg:w-[40%] mymd:w-[50%] pr-10 h-full flex flex-col items-start justify-start gap-4">
                    <div className="scale-150 h-10 relative r-5">
                        <Logo />
                    </div>
                    <p className="mt-4 text-sm">{t('shopText')}</p>

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
                    <div key={index} className={`w-[23%] mylg:w[30%] mymd:w[50%] h-[100%] flex flex-col items-start justify-start ${index === 1 ? "mylg:hidden" : index === 2 ? "mymd:hidden" : null}`}>
                        <ul className="flex flex-col gap-4">
                            {list.map((link, index) => (
                                <Link  key={index} href={link.href}>
                                    <li className="flex gap-2 items-center group transition-all">
                                        <Diamond strokeWidth={4} width={13} fill="transparent" className="text-primary group-hover:fill-primary transition-all" />
                                        {t(link.name)}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )}

            </div>


            <div about="bottom" className="w-full pb-4 pt-4 flex justify-center items-center border border-t-white/20 border-x-0 border-b-0 text-sm font-semibold mysm:hidden">
                <Link href="mailto:sinaolfati6@gmail.com">sinaolfati6@gmail.com</Link>
            </div>

        </div>
    )
}