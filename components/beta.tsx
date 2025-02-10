'use client'
import { HeroPill } from "@/components/ui/hero-pill"
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

export function HeroPillFirst() {
  return (
    <HeroPill 
      href="https://badget.tech/blog/introducing-Badget-ai"
      label="Mechlabs public beta has opened waiting list"
      announcement="📣 Announcement"
      isExternal
      className="bg-[hsl(187,80.8%,34.7%)] ring-[hsl(210,40%,96.1%)] [&_div]:bg-[hsl(210,40%,96.1%)] [&_div]:text-[hsl(187,80.8%,34.7%)] [&_p]:text-[hsl(187,80.8%,34.7%)] [&_svg_path]:fill-[hsl(187,80.8%,34.7%)]"
    />
  )
}

export function HeroPillSecond() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      <HeroPill 
        href="#"
        label="Register with your email"
        announcement="🛠️ Beta waiting list opened"
        isExternal={false}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      />

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Join Beta Waiting List</AlertDialogTitle>
            <AlertDialogDescription>
              Enter your email to get early access to our beta program.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <Input 
            type="email" 
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4"
          />

          <AlertDialogFooter className="mt-6">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => {
                // Add your submission logic here
                console.log("Submitted email:", email);
                setIsOpen(false);
              }}
            >
              Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}