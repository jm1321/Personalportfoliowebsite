import React from 'react';
import { SectionTitle } from './SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "What are your pricing models?",
    answer: "I offer both fixed-price project quotes and hourly rates depending on the nature of the work. For ongoing support, I have monthly retainer packages available."
  },
  {
    question: "How long does a typical website project take?",
    answer: "A standard 5-page business website typically takes 2-4 weeks from design to launch. E-commerce or custom web applications may take 6-10 weeks depending on complexity."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes! I provide a 30-day support period for all projects to address any bugs or minor adjustments. I also offer long-term maintenance plans."
  },
  {
    question: "Can you help with cloud migration?",
    answer: "Absolutely. I specialize in migrating on-premise infrastructure to AWS and Microsoft 365, ensuring data integrity and minimal downtime."
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept bank transfers, PayPal, and major credit cards. A 50% deposit is required to start the project, with the remaining balance due upon delivery."
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-[#F4F6F9]">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <SectionTitle title="Frequently Asked Questions" subtitle="FAQ" />
        
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-gray-100">
                <AccordionTrigger className="text-left font-semibold text-[#0A1A3F] hover:text-[#00E5FF] hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
