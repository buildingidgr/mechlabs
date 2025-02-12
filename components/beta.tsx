'use client'
import { useState } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { HeroPill } from "@/components/ui/hero-pill";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function BetaDialog({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [area, setArea] = useState("");
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    occupation: '',
    area: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Reset all errors
    setErrors({ name: '', email: '', occupation: '', area: '' });

    // Validate individual fields
    let hasErrors = false;
    const newErrors = { name: '', email: '', occupation: '', area: '' };

    if (!name) {
      newErrors.name = 'Full Name is required';
      hasErrors = true;
    }
    
    if (!occupation) {
      newErrors.occupation = 'Occupation is required';
      hasErrors = true;
    }

    if (!area) {
      newErrors.area = 'Area of operation is required';
      hasErrors = true;
    }

    if (!email) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // If all validations pass
    try {
      const response = await fetch(`${window.location.origin}/api/send-confirmation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          occupation,
          area
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send confirmation');
      }

      setIsSubmitted(true);
    } catch (error) {
      setErrors(prev => ({ ...prev, email: 'Failed to send confirmation. Please try again.' }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmitted(false);
    setErrors({ name: '', email: '', occupation: '', area: '' });
    // Reset form fields when closing
    setName("");
    setOccupation("");
    setArea("");
    setEmail("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            {isSubmitted ? "🎉 Thank you for joining!" : "Join Beta Waiting List"}
          </DialogTitle>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors(prev => ({ ...prev, name: '' }));
                }}
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && (
                <div className="flex items-center gap-2 text-destructive text-sm mt-1">
                  <AlertTriangle className="h-4 w-4" />
                  <span>{errors.name}</span>
                </div>
              )}
              <Input
                type="text" 
                placeholder="Occupation"
                value={occupation}
                onChange={(e) => {
                  setOccupation(e.target.value);
                  setErrors(prev => ({ ...prev, occupation: '' }));
                }}
                className={errors.occupation ? 'border-destructive' : ''}
              />
              {errors.occupation && (
                <div className="flex items-center gap-2 text-destructive text-sm mt-1">
                  <AlertTriangle className="h-4 w-4" />
                  <span>{errors.occupation}</span>
                </div>
              )}
              <Input
                type="text" 
                placeholder="Area of operation"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                  setErrors(prev => ({ ...prev, area: '' }));
                }}
                className={errors.area ? 'border-destructive' : ''}
              />
              {errors.area && (
                <div className="flex items-center gap-2 text-destructive text-sm mt-1">
                  <AlertTriangle className="h-4 w-4" />
                  <span>{errors.area}</span>
                </div>
              )}
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors(prev => ({ ...prev, email: '' }));
                }}
                onBlur={() => {
                  if (email && !isValidEmail(email)) {
                    setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
                  }
                }}
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && (
                <div className="flex items-center gap-2 text-destructive text-sm mt-1">
                  <AlertTriangle className="h-4 w-4" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <DialogClose className={cn(buttonVariants({ variant: "outline" }))}>
                Cancel
              </DialogClose>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <span className="animate-spin">🌀</span>
                    Sending...
                  </div>
                ) : (
                  'Submit'
                )}
              </Button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-48 h-48 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-24 w-24 text-green-600" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold tracking-tight">
                You&apos;re on the list!
              </h3>
              <p className="text-sm text-muted-foreground">
                We&apos;ll let you know when we&apos;re ready.
              </p>
            </div>

            <DialogClose className={cn(buttonVariants({ variant: "default" }), "w-full mt-4")}>
              Close
            </DialogClose>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function HeroPillFirst() {
  return (
    <HeroPill 
      href=""
      label="Mechlabs public beta has opened waiting list"
      announcement="📣 Announcement"
      isExternal
      className="bg-[hsl(187,80.8%,34.7%)] ring-[hsl(210,40%,96.1%)] [&_div]:bg-[hsl(210,40%,96.1%)] [&_div]:text-[hsl(187,80.8%,34.7%)] [&_p]:text-[hsl(187,80.8%,34.7%)] [&_svg_path]:fill-[hsl(187,80.8%,34.7%)]"
    />
  )
}

export function HeroPillSecond() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeroPill 
        href="#"
        label="Waiting list for private Beta opened, join now!"
        announcement=""
        isExternal={false}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      />
      <BetaDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}