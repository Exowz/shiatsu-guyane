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
            className="fixed inset-0 bg-black/40 h-full w-full z-50"
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
              className="flex absolute top-4 right-4 items-center justify-center bg-white/70 dark:bg-black/70 backdrop-blur-xl backdrop-saturate-150 rounded-full h-8 w-8 z-[101] shadow-lg ring-1 ring-white/20"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              // True glassmorphism with floating effect
              className="w-full max-w-2xl h-full md:h-fit md:max-h-[90vh] flex flex-col bg-white/70 dark:bg-neutral-900/70 backdrop-blur-2xl backdrop-saturate-150 text-card-foreground sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={600}
                  height={400}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 object-cover object-top sm:rounded-tr-3xl sm:rounded-tl-3xl"
                />
              </motion.div>

              <div className="flex-grow overflow-y-auto">
                <div className="flex justify-between items-start p-6">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-neutral-900 dark:text-neutral-100"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-neutral-700 dark:text-neutral-300 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="relative p-6 space-y-6">
                  {active.content.map(section => (
                    <div key={section.heading}>
                        <h4 className="font-semibold text-lg mb-2 text-neutral-900 dark:text-neutral-100">{section.heading}</h4>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">{section.text}</p>
                        {section.list && (
                            <div className="mt-4">
                                {section.listTitle && (
                                    <p className="font-semibold mb-2 text-sm text-neutral-900 dark:text-neutral-100">{section.listTitle}</p>
                                )}
                                <ul className="space-y-2">
                                    {section.list.map(item => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                                            <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0"/>
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
            className="p-4 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-xl backdrop-saturate-150 rounded-xl cursor-pointer hover:shadow-2xl hover:bg-white/70 dark:hover:bg-neutral-800/70 transition-all duration-300 h-full ring-1 ring-white/10 hover:ring-white/20 shadow-lg"
          >
            <div className="flex flex-col gap-4 w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={400}
                  height={300}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex flex-col items-center text-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-lg text-neutral-900 dark:text-neutral-100"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.title}-${id}`}
                  className="text-neutral-700 dark:text-neutral-300 text-sm"
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

const CloseIcon = () => ( 
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-5 w-5 text-neutral-900 dark:text-neutral-100"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg> 
);