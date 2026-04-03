import { Navbar } from "../components/navbar";
import { HeroSection } from "@/components/herosection";
import { Footer } from "@/components/footer";

const sectionClass =
  "mx-auto max-w-5xl px-6 py-10";
const cardClass =
  "rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-[0_24px_80px_rgba(166,61,47,0.08)] backdrop-blur";
const headingClass =
  "text-2xl font-semibold text-stone-900 md:text-3xl";
const textClass = "mt-4 text-base leading-8 text-stone-700";

const experience = [
  {
    title: "Legal Associate",
    organization: "K. AND G. Advocates, Kathmandu",
    period: "August 2024 - November 2025",
    points: [
      "Represented corporate clients independently and with a litigation team in loan recovery, tax liability, and regulatory enforcement cases before the Debt Recovery Tribunal, Revenue Tribunal, District Courts, High Court, and Supreme Court.",
      "Conducted legal research and analysis on banking regulations, corporate compliance, and tax frameworks, advising the internal team and clients on relevant legal developments.",
      "Prepared case files, petitions, replies, written statements, affidavits, contracts, and agreements while tracking litigation timelines, court dates, and filing deadlines.",
      "Supported dispute resolution and settlement discussions through case summaries, risk assessments, and background documentation.",
      "Reviewed commercial contracts, loan documents, and corporate agreements to identify risk areas and improve compliance alignment.",
      "Contributed to internal policy development, SOPs, and compliance frameworks in banking, tax, and corporate regulatory matters.",
    ],
  },
  {
    title: "Intern",
    organization: "Secretariat of Foreign Employment Board",
    period: "December 2023 - July 2024",
    points: [
      "Assisted concerned officials in carrying out day-to-day administrative and institutional activities.",
      "Performed assigned work in compliance with office rules, procedures, and supervisory instructions.",
      "Provided support in different sections and units of the Secretariat in accordance with office requirements.",
      "Maintained professional conduct and discipline throughout the internship period.",
    ],
  },
  {
    title: "Administrative Assistant",
    organization: "National Avian Research Program",
    period: "March 2021 - November 2021",
    points: [
      "Performed administrative duties in support of program operations.",
      "Handled computer-based office work, data entry, documentation, and record management.",
      "Assisted in maintaining accounts and financial records as per institutional requirements.",
      "Executed assigned responsibilities with sincerity, integrity, discipline, and accountability in accordance with government rules and procedures.",
    ],
  },
];

const skills = [
  "Legal Research",
  "Legal Documentation and Translation",
  "Oral Pleading and Court Representation",
  "Communication and Interpersonal Skills",
  "Problem Solving and Analytical Thinking",
  "Nepali Typing (Unicode Traditional)",
  "MS Office Suite (Word, Excel, PowerPoint)",
];

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-[32rem] h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 left-1/3 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />

      <Navbar
        title="Sisir Kafle"
        options={["Home", "Experience", "Education", "Contact"]}
      />

      <section id="Home" className="relative mx-auto max-w-6xl px-4 pt-8 md:px-6 md:pt-12">
        <div className="rounded-[2rem] border border-white/70 bg-white/65 shadow-[0_28px_90px_rgba(91,44,82,0.12)] backdrop-blur">
        <HeroSection
          title={
            <span className="bg-gradient-to-r from-amber-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
              SISIR KAFLE, Advocate
            </span>
          }
          subtext="Litigation, legal research, corporate compliance, and regulatory practice"
          description={
            <span>
              Dedicated legal professional focused on disciplined advocacy,
              precise legal drafting, and dependable representation.
              <br />
              Permanent Address: Waling 2, Syangja
              <br />
              Current Address: Tarkeshwor, Kathmandu
            </span>
          }
          image="/sisir-kafle-profile.jpg"
          imageAlt="Sisir Kafle profile photo"
          availabilityText="Available for legal consultation"
          primaryAction={{
            label: "Email",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=Sisirkafle14@gmail.com&su=Legal%20Consultation",
            newTab: true,
          }}
          secondaryAction={{
            label: "Call",
            href: "tel:9846846206",
          }}
          stats={[
            { value: "2024", label: "B.A.LL.B." },
            { value: "3+", label: "Professional Roles" },
            { value: "4", label: "Practice Areas" },
          ]}
        />
        </div>
      </section>

      <section className={sectionClass}>
        <div className={cardClass}>
          <p className="inline-flex rounded-full bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 px-4 py-2 text-sm font-medium tracking-[0.2em] text-amber-900 uppercase animate-shimmer">
            Professional Summary
          </p>
          <h2 className={`${headingClass} mt-5`}>Objective</h2>
          <p className={textClass}>
            Motivated and detail-oriented professional with comprehensive expertise
            across the criminal, civil, corporate, and regulatory sectors. Skilled
            in drafting, reviewing, and interpreting complex documentation while
            ensuring adherence to governance principles and compliance standards.
            Demonstrates strong analytical ability, effective stakeholder
            coordination, and a results-driven approach to supporting
            organizational integrity and strategic objectives.
          </p>
        </div>
      </section>

      <section id="Experience" className={sectionClass}>
        <div className={cardClass}>
        <h2 className={headingClass}>Work Experience</h2>
        <div className="mt-8 space-y-8">
          {experience.map((item) => (
            <div
              key={`${item.title}-${item.period}`}
              className="rounded-[1.5rem] border border-amber-100 bg-gradient-to-br from-white via-amber-50/40 to-orange-50/70 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-stone-900">{item.title}</h3>
                  <p className="text-base text-stone-700">{item.organization}</p>
                </div>
                <p className="rounded-full bg-stone-900 px-4 py-1 text-sm uppercase tracking-wide text-white">
                  {item.period}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-stone-700">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section id="Education" className={sectionClass}>
        <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
        <div className={cardClass}>
        <h2 className={headingClass}>Education</h2>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-stone-900">B.A.LL.B.</h3>
          <p className="mt-2 text-base text-stone-700">
            Chakrabarti Habi Education Academy College of Law, Purbanchal
            University (PU), Nepal
          </p>
          <p className="mt-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-amber-900">
            2024
          </p>
        </div>
        </div>

      <div className={`${cardClass} bg-gradient-to-br from-stone-900 via-stone-800 to-red-900 text-white`}>
        <h2 className={headingClass}>Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      </div>
      </section>

      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className={headingClass}>Training</h2>
          <p className={textClass}>
            Completed a Training of Trainers (ToT) on Model Youth Parliament
            Practice organized by the National Youth Council, Ministry of Youth
            and Sports, Government of Nepal, in September 2022. The training
            focused on youth leadership capacity development, mobilization, and
            facilitation competencies. During the program, a formal training
            session was conducted in the role of Model Mayor, demonstrating
            applied leadership, coordination, and parliamentary practice skills.
          </p>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className={headingClass}>Reference</h2>
          <p className={textClass}>
            <span className="font-semibold text-stone-900">Advocate Prabin Poudyal</span>
            <br />
            K. and G. Advocates, Kathmandu
            <br />
            Email: Prabin.poudyal@kandgadvocates.com
            <br />
            Contact Number: 9851222652
          </p>
        </div>
      </section>

      <section id="Contact" className="max-w-5xl mx-auto px-6 py-10">
        <div className={`${cardClass} bg-gradient-to-br from-amber-50 via-white to-red-50`}>
        <h2 className={headingClass}>Contact</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-amber-100 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-stone-500">Phone</p>
            <p className="mt-2 text-lg text-stone-900">9846846206</p>
          </div>
          <div className="rounded-[1.5rem] border border-amber-100 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-wide text-stone-500">Email</p>
            <a
              href="mailto:Sisirkafle14@gmail.com"
              className="mt-2 inline-block text-lg text-stone-900 underline decoration-amber-400 underline-offset-4"
            >
              Sisirkafle14@gmail.com
            </a>
          </div>
        </div>
        <p className={textClass}>
          I hereby declare that all the information provided above is true,
          complete, and correct to the best of my knowledge and belief. I take
          full responsibility for the accuracy of the details mentioned in this
          curriculum vitae.
          <br />
          <br />
          Sisir Kafle
          <br />
          Tarkeshwor, Kathmandu
          <br />
          1/16/2026
        </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
