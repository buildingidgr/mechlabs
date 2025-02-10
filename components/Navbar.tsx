"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <div className="sticky top-11 z-50 w-full border-b bg-background h-16 flex flex-row items-center pl-4">
        <Link href="/">
          <Image 
            src="/logo.svg"
            alt="Mechlabs Logo"
            width={20}
            height={20}
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex-grow pt-2">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link href="/getting-started" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md">
                  Product
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/components" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md">
                  Terms
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      </div>
  )
}
