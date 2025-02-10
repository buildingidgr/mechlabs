"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

function smoothScrollTo(targetPosition: number, duration: number) {
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    // Easing function: easeInOutCubic
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2

    window.scrollTo(0, startPosition + distance * ease)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

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
              <NavigationMenuTrigger 
                className="px-4 py-2 text-base font-medium data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
                onClick={(e) => e.preventDefault()}
              >
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-[200px] p-1">
                <div className="grid gap-0.5">
                  {['projects', 'pages', 'knowledge-base', 'library', 'templates', 'features', 'faq'].map((section) => (
                    <Link 
                      key={section}
                      href={`#${section}`}
                      legacyBehavior
                      passHref
                      onClick={(e) => {
                        e.preventDefault()
                        const target = document.getElementById(section)
                        if (target) {
                          const headerOffset = 120
                          const elementPosition = target.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                          smoothScrollTo(offsetPosition, 1000) // 1000ms = 1 second duration
                        }
                      }}
                    >
                      <NavigationMenuLink className="flex px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                        {section.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
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
