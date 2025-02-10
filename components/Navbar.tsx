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
    <div className="sticky top-11 z-50 w-full border-b bg-background h-14 flex items-center pl-4">
      <div className="flex items-center w-full max-w-7xl mx-auto">
        <Link href="/" className="flex items-center mr-6">
          <Image 
            src="/logo.svg"
            alt="BuildingID Logo"
            width={16}
            height={16}
            className="h-6 w-auto"
          />
        </Link>
        
        <NavigationMenu className="w-full">
          <NavigationMenuList className="justify-start w-auto gap-1">
            <NavigationMenuItem>
              <Link href="/getting-started" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md">
                  Getting started
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/components" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md">
                  Components
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md">
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
