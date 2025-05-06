"use client"
 
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export default function Header() {
    return (
        <NavigationMenu className="pb-4 font-[family-name:var(--font-mouse)]">
            <NavigationMenuList className="flex items-center">
                <NavigationMenuItem className="mr-4">
                    <Link href="/Home" className="flex items-center">
                        <Image 
                            src="/BlogLogo.png" 
                            alt="Blog Logo" 
                            width={120} 
                            height={120} 
                            className="rounded-full"
                        />
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink 
                        className={`${navigationMenuTriggerStyle()} text-lg sm:text-base md:text-3xl`}
                        asChild
                    >
                        <Link href="/posts">Posts</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink 
                        className={`${navigationMenuTriggerStyle()} text-lg sm:text-base md:text-3xl`}
                        asChild
                    >
                        <Link href="/gallery">Gallery</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink 
                        className={`${navigationMenuTriggerStyle()} text-lg sm:text-base md:text-3xl`}
                        asChild
                    >
                        <Link href="/vlogs">Vlogs</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink 
                        className={`${navigationMenuTriggerStyle()} text-lg sm:text-base md:text-3xl`}
                        asChild
                    >
                        <Link href="/about">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}