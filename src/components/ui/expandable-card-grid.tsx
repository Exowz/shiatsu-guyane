'use client';

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { Check } from "lucide-react";

type Card = {
  title: string;
  description: string;
  src: string;
  ctaText?: string;
  ctaLink?: string;
  content: { heading: string; text: string; list?: string[]; listTitle?: string }[];
};

export const ExpandableCardGrid = ({ cards }: { cards: Card[] }) => {
  const [active, setActive] = useState<Card | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 items-center justify-center bg-background rounded-full h-8 w-8 z-[101]"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-2xl h-[80%] md:h-fit md:max-h-[90%] flex flex-col bg-card text-card-foreground sm:rounded-2xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={600}
                  height={400}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 object-cover"
                />
              </motion.div>

              <div className="flex-grow overflow-y-auto">
                <div className="flex justify-between items-start p-6 border-b border-border">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`} // Changed ID to be unique
                      className="text-muted-foreground text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="relative p-6 space-y-6">
                  {active.content.map(section => (
                    <div key={section.heading}>
                        <h4 className="font-semibold text-lg mb-2">{section.heading}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{section.text}</p>
                        {section.list && (
                            <div className="mt-4">
                                {section.listTitle && (
                                    <p className="font-semibold mb-2 text-sm">{section.listTitle}</p>
                                )}
                                <ul className="space-y-2">
                                    {section.list.map(item => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 bg-secondary rounded-xl cursor-pointer hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col gap-4 w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={400}
                  height={300}
                  src={card.src}
                  alt={card.title}
                  className="h-48 w-full rounded-lg object-cover"
                />
              </motion.div>
              <div className="flex flex-col items-center text-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-lg text-secondary-foreground"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.title}-${id}`} // Changed ID to be unique
                  className="text-muted-foreground text-sm"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg> );