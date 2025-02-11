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
  const [value, setValue] = React.useState("")

  const _icons: Record<string, string> = {
    opportunities: '/icons/briefcase.svg',
    projects: '/icons/folder.svg',
    pages: '/icons/file.svg',
    'knowledge-base': '/icons/book.svg',
    templates: '/icons/layout.svg',
    features: '/icons/sparkles.svg',
    faq: '/icons/help-circle.svg'
  };

  const menuItems = [
    { 
      id: 'opportunities',
      title: 'Ευκαιρίες',
      description: 'Ανακάλυψε νέα έργα στην περιοχή σου',
      icon: '/icons/briefcase.svg'
    },
    {
      id: 'projects',
      title: 'Έργα',
      description: 'Οργάνωσε και παρακολούθησε τα έργα σου',
      icon: '/icons/folder.svg'
    },
    {
      id: 'editor',
      title: 'Έγγραφα',
      description: 'Δημιούργησε και επεξεργάσου έγγραφα',
      icon: '/icons/file.svg'
    },
    {
      id: 'knowledge-base',
      title: 'Βιβλιοθήκη',
      description: 'Νομοθεσία, διαδικασίες και συμβουλές',
      icon: '/icons/book.svg'
    },
    {
      id: 'templates',
      title: 'Πρότυπα',
      description: 'Έτοιμα πρότυπα για κάθε περίπτωση',
      icon: '/icons/layout.svg'
    },
    {
      id: 'features',
      title: 'Δυνατότητες',
      description: 'Όλα τα εργαλεία σε μία πλατφόρμα',
      icon: '/icons/sparkles.svg'
    },
    {
      id: 'faq',
      title: 'Συχνές Ερωτήσεις',
      description: 'Βρες γρήγορα απαντήσεις',
      icon: '/icons/help-circle.svg'
    }
  ];

  return (
    <div className="sticky top-11 z-50 w-full border-b bg-background h-16 flex flex-row items-center pl-4">
        <Link href="/">
          <Image 
            src="/logo.svg"
            alt="Mechlabs Logo"
            width={20}
            height={20}
            className="h-6 w-auto"
          />
        </Link>
        <div className="flex-grow pt-2">
        <NavigationMenu value={value} onValueChange={setValue}>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem value="product">
              <NavigationMenuTrigger 
                className="px-4 py-2 text-base font-medium data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
                onClick={(e) => e.preventDefault()}
              >
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-1 w-auto min-w-[320px]">
                <div className="grid gap-0.5">
                  {menuItems.map((item) => (
                    <Link 
                      key={item.id}
                      href={`#${item.id}`}
                      legacyBehavior
                      passHref
                      onClick={(e) => {
                        e.preventDefault()
                        const target = document.getElementById(item.id)
                        if (target) {
                          const headerOffset = 120
                          const elementPosition = target.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                          smoothScrollTo(offsetPosition, 1000)
                          setValue("")
                        }
                      }}
                    >
                      <NavigationMenuLink className="flex items-center px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-transparent active:bg-transparent transition-colors group-data-[active]:bg-transparent min-h-[40px]">
                        <Image 
                          src={item.icon}
                          alt=""
                          width={28}
                          height={28}
                          className="mr-3 h-7 w-7"
                        />
                        <div className="flex-1 leading-tight">
                          <div className="text-sm font-semibold">{item.title}</div>
                          <div className="text-xs text-muted-foreground mt-0">
                            {item.description}
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/privacy-terms" legacyBehavior passHref>
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
