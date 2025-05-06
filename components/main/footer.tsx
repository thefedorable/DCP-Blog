"use client"
 
import * as React from "react"
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export default function Footer() {
    return (
        <NavigationMenu className="pb-4 font-[family-name:var(--font-mouse)] container mx-auto flex justify-center w-full">
            <NavigationMenuList className="flex items-center justify-center">
                <NavigationMenuItem>
                    <NavigationMenuLink 
                        className={`${navigationMenuTriggerStyle()} text-lg sm:text-base md:text-3xl`}
                        asChild
                    >
                        <Link href="https://photos.app.goo.gl/2oc5rvTJZh1JkvcX6">Google Photos Album</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink 
                        className={`${navigationMenuTriggerStyle()} text-lg sm:text-base md:text-3xl`}
                        asChild
                    >
                        <Link href="https://youtube.com/playlist?list=PL8wxK76EOUTcahStsnMCboDOa89qo8OK5&si=mFrLTwxefeh5kS4W">Youtube Vlog Playlist</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}