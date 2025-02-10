"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="flex justify-center container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12">Common Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {/* Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl flex items-center font-semibold">What does your platform offer?</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <p>
                Our platform provides a comprehensive suite of tools for document management,
                collaboration, and project tracking. Key features include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-powered document processing</li>
                <li>Real-time collaboration tools</li>
                <li>Advanced search and organization</li>
                <li>Cross-platform synchronization</li>
                <li>Enterprise-grade security</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">How does your pricing work?</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <p>We offer three simple pricing tiers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Basic:</strong> Free for individual users with core features</li>
                <li><strong>Pro:</strong> $9.99/month for advanced features and team collaboration</li>
                <li><strong>Enterprise:</strong> Custom pricing for large organizations</li>
              </ul>
              <p>All plans come with a 30-day money-back guarantee.</p>
            </AccordionContent>
          </AccordionItem>

          {/* Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">Is my data secure?</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <p>
                Security is our top priority. We use:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>End-to-end encryption</li>
                <li>Two-factor authentication</li>
                <li>Regular security audits</li>
                <li>GDPR-compliant data handling</li>
              </ul>
              <p>
                Your documents and data remain private and under your control at all times.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">Can I collaborate with team members?</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <p>
                Yes! Our platform offers robust collaboration features:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Real-time document editing</li>
                <li>Comments and annotations</li>
                <li>Version control</li>
                <li>Task assignments</li>
                <li>Team permissions management</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">How does the AI integration work?</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <p>
                Our AI features help you work smarter through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Smart document suggestions</li>
                <li>Automated formatting</li>
                <li>Content generation templates</li>
                <li>Data extraction tools</li>
                <li>Predictive organization</li>
              </ul>
              <p>
                All AI features are optional and can be disabled at any time.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Item 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline text-left">
              <h3 className="text-xl font-semibold">How do I get started?</h3>
            </AccordionTrigger>
            <AccordionContent className="pt-4 text-lg text-gray-600 space-y-4">
              <p>Starting is easy:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Create a free account</li>
                <li>Choose your plan</li>
                <li>Upload or create your first document</li>
                <li>Invite team members (optional)</li>
                <li>Explore our template library</li>
              </ol>
              <p>Need help? Visit our <a href="/support" className="text-primary underline">support center</a>.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
} 