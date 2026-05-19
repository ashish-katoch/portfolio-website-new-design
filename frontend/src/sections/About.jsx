import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

const PRINCIPLES = [
  { n: "01", t: "Editorial first", d: "Type and grid lead. Decoration earns its place." },
  { n: "02", t: "Motion as information", d: "If it moves, it should mean something." },
  { n: "03", t: "Performance is a feature", d: "Slow products are ugly products." },
  { n: "04", t: "Accessible by default", d: "WCAG AA is the floor, not the ceiling." },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="about-section"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <p className="overline mb-4">— About</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
              A frontend
              <br />
              <span className="italic">with a point of view.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7 space-y-5 text-base md:text-lg text-foreground/85 leading-relaxed">
            <p>
              I&apos;m Ashish — a frontend web developer based in Chandigarh, India.
              For the last seven years I&apos;ve built interfaces for fintech, travel,
              media and luxury brands; sometimes leading teams, often coding alone,
              always typesetting headings far too carefully.
            </p>
            <p>
              I care about the boring parts. Bundle size. Render budgets.
              Tab order. The hover state at 3am when nobody&apos;s looking. The
              difference between a button that compiles and a button that{" "}
              <span className="italic font-serif">feels right</span>.
            </p>
            <p>
              When I&apos;m not in a code editor I&apos;m usually reading editorial
              design archives or hiking the foothills of the Himalayas.
            </p>
          </Reveal>
        </div>

        {/* Principles grid */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-4 gap-px bg-border/60 border border-border/60">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/40 transition-colors"
              data-testid={`principle-${p.n}`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
                / {p.n}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-3">
                {p.t}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
