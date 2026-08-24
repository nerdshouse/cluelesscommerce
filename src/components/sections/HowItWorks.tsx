'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    title: 'Apply',
    description: 'Fill out a short form and we\'ll review your brand and see if we are a fit.',
  },
  {
    title: 'Consultation Call',
    description: 'No pitch, just an honest look at where your brand stands and what\'s broken.',
  },
  {
    title: 'Custom Retainer',
    description: 'A retainer designed around the outcomes that actually matter to your business.',
  },
  {
    title: 'Onboard and Execute',
    description: 'A dedicated in-house team with regular review calls directly with top management.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-bg w-full">
      <div className="w-full flex flex-col justify-center overflow-hidden py-12 md:py-16">
        <div className="section-inner w-full">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 px-4 md:px-0">
            <p className="text-fg text-sm max-w-sm mb-4 md:mb-0 md:text-left hidden md:block">
              Our proven 4-step framework to transform your ecommerce brand.
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-heading max-w-2xl md:text-right"
            >
              How We {' '}
              <span className="text-accent font-black-italic">Go From Clueless to Compounding</span>
            </motion.h2>
          </div>

          {/* Mobile Vertical Timeline Layout */}
          <div className="block md:hidden mt-8 relative px-4">
            {/* The continuous vertical line */}
            <div className="absolute left-[35px] top-4 bottom-8 w-[1px] bg-border/60" />

            <div className="flex flex-col gap-10 relative z-10">
              {STEPS.map((step, i) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-5 items-start"
                >
                  {/* The Circle */}
                  <div className="w-10 h-10 rounded-full border border-border/60 bg-bg flex items-center justify-center shrink-0">
                    <span className="text-accent font-medium text-base">{i + 1}</span>
                  </div>

                  {/* The Content */}
                  <div className="pt-1.5">
                    <h3 className="text-accent text-[17px] font-normal mb-1.5 leading-snug">{step.title}</h3>
                    <p className="text-fg text-[14px] leading-relaxed pr-2">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:grid md:grid-cols-4 border-l border-border relative w-full mt-16"
          >
            {STEPS.map((step, i) => (
              <div key={step.title} className="flex flex-col border-r border-border relative bg-bg min-h-[300px] md:min-h-[450px]">

                {/* Heading at the top */}
                <div className="px-4 py-6 md:px-6 md:py-8">
                  <h3 className="font-serif text-lg md:text-xl text-accent font-medium">{step.title}</h3>
                </div>

                {/* Arch Container at the bottom */}
                <div className="relative w-full h-[150px] md:h-[250px] mt-auto flex flex-col justify-end">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="hidden md:block absolute bottom-0 left-0 w-full h-full overflow-visible pointer-events-none">
                    <path
                      d="M 0,100 Q 50,-30 100,100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      className="text-fg/40"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Grid intersections marker (bottom-right) */}
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-fg rounded-full -mr-[3px] -mb-[3px] z-20" />

                  {/* Grid intersection marker (bottom-left) */}
                  {(i === 0 || i === 2) && (
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-fg rounded-full -ml-[3px] -mb-[3px] z-20 md:hidden" />
                  )}
                  {i === 0 && (
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-fg rounded-full -ml-[3px] -mb-[3px] z-20 hidden md:block" />
                  )}

                  {/* Animated Circle (Desktop) */}
                  <motion.div
                    initial={{ left: "0%", top: "100%" }}
                    whileInView={{ left: "50%", top: "35%" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 1.5,
                      delay: 0.2,
                      left: { ease: "linear", duration: 1.5 },
                      top: { ease: "easeOut", duration: 1.5 }
                    }}
                    className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full border-2 border-border bg-bg flex items-center justify-center z-10"
                  >
                    <span className="text-base font-black text-fg">0{i + 1}</span>
                  </motion.div>

                  {/* Text Content */}
                  <div className="px-4 pb-4 md:px-10 md:pb-6 flex flex-col items-center text-center relative z-0">
                    <p className="text-fg font-medium text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
