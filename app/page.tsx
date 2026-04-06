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
    title: "Legal Executive",
    organization: "Religare Construction Pvt. Ltd, Lalitpur",
    period: "November 2025 - Present",
    points: [
      "Drafted and reviewed agreements between suppliers and purchasers, contractors and subcontractors.",
      "Attended pre-bid and bid opening meetings, representing the legal and compliance function.",
      "Reviewed RFP bids and prepared checklists of eligible bids for company decision-making.",
      "Forwarded bid evaluation checklists and findings to the CEO and Director for approval and guidance.",
      "Attended courts for official company matters, ensuring proper compliance and documentation.",
    ],
  },
  {
    title: "Legal Associate",
    organization: "K. AND G. Advocates, Kathmandu",
    period: "August 2024 - November 2025",
    points: [
      "Represented corporate clients independently and with a litigation team in loan recovery, tax liability, and regulatory enforcement cases before the Debt Recovery Tribunal, Revenue Tribunal, District Courts, High Court, and Supreme Court.",
      "Conducted legal research and analysis on banking regulations, corporate compliance, and tax frameworks, advising the internal team and clients on relevant legal developments.",
      "Prepared case files, petitions, replies, written statements, and other legal documents while tracking litigation timelines, court dates, and filing deadlines.",
      "Supported dispute resolution and settlement discussions through case summaries, risk assessments, and background documentation.",
      "Contributed to internal policy development and compliance frameworks aligned with banking, tax, and corporate regulatory requirements.",
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
  "Nepali Typing (Unicode Traditional)",
  "Legal Research",
  "Legal Documentation and Translation",
  "Oral Pleading and Court Representation",
  "Communication and Interpersonal Skills",
  "Problem Solving and Analytical Thinking",
  "MS Office Suite (Word, Excel, PowerPoint)",
];

const achievements = [
  {
    title: "Youth Leadership Development Training",
    source: "National Youth Council, Government of Nepal (2022)",
    description:
      "Officially certified for a significant role in leadership training, enhancing organizational, communication, and advocacy abilities.",
  },
  {
    title: "National Youth Conference",
    source: "Kadambari Memorial College (2019)",
    description:
      "Actively engaged in Idea into Action on Sustainable Cities and Communities, applying problem-solving and community engagement skills to promote Sustainable Development Goals.",
  },
  {
    title: "NextGen Youth Fellowship Award",
    source: "(2019)",
    description:
      "Recognized as a NextGen Youth Fellow for successfully completing the fellowship program and strengthening leadership, teamwork, and cross-cultural collaboration skills.",
  },
];

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-[32rem] h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 left-1/3 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />

      <Navbar
        title="Sisir Kafle"
        options={["Home", "Experience", "Education", "Achievements", "Contact"]}
      />

      <section id="Home" className="relative mx-auto max-w-6xl px-4 pt-8 md:px-6 md:pt-12">
        <div className="rounded-[2rem] border border-white/70 bg-white/65 shadow-[0_28px_90px_rgba(91,44,82,0.12)] backdrop-blur">
        <HeroSection
          title={
            <span className="bg-gradient-to-r from-amber-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
              SISIR KAFLE, Advocate
            </span>
          }
          subtext="Legal Executive | Advocate | Litigation, legal research, corporate compliance, and regulatory practice"
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
          tertiaryAction={{
            label: "WhatsApp",
            href: "https://wa.me/9779846846206",
            newTab: true,
            icon: (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.61 2 2.2 6.41 2.2 11.83c0 1.74.46 3.43 1.33 4.92L2 22l5.39-1.49a9.8 9.8 0 0 0 4.64 1.18h.01c5.42 0 9.83-4.41 9.83-9.83a9.77 9.77 0 0 0-2.82-6.95Zm-7.02 15.12h-.01a8.13 8.13 0 0 1-4.14-1.14l-.3-.18-3.2.88.86-3.12-.2-.32a8.15 8.15 0 0 1-1.25-4.31c0-4.49 3.65-8.14 8.15-8.14 2.17 0 4.22.84 5.75 2.39a8.07 8.07 0 0 1 2.38 5.77c0 4.49-3.65 8.14-8.14 8.14Zm4.46-6.11c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.41l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.11.2-.54.2-1.01.14-1.11-.06-.1-.22-.16-.46-.28Z" />
              </svg>
            ),
          }}
          stats={[
            { value: "2024", label: "B.A.LL.B." },
            { value: "4", label: "Professional Roles" },
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

      <section id="Achievements" className={sectionClass}>
        <div className={cardClass}>
          <h2 className={headingClass}>Achievements</h2>
          <div className="mt-8 grid gap-5">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="rounded-[1.5rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50/50 to-rose-50/50 p-6"
              >
                <h3 className="text-xl font-semibold text-stone-900">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                  {achievement.source}
                </p>
                <p className="mt-4 text-base leading-7 text-stone-700">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={`${cardClass} overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-red-950 text-white`}>
          <div className="absolute" />
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            Professional Reference
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-white">Reference</h2>
              <p className="mt-5 text-lg leading-8 text-stone-200">
                Advocate Prabin Poudyal
                <br />
                K. and G. Advocates, Kathmandu
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">Email</p>
                <p className="mt-3 break-all text-lg font-semibold text-white">
                  Prabin.poudyal@kandgadvocates.com
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">Contact Number</p>
                <p className="mt-3 text-lg font-semibold text-white">9851222652</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Contact" className="max-w-5xl mx-auto px-6 py-10">
        <div className={`${cardClass} bg-gradient-to-br from-amber-50 via-white to-rose-50`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex rounded-full bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-900">
              Direct Contact
            </p>
            <h2 className={`${headingClass} mt-5`}>Contact</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-600">
            Available for professional consultation, case preparation support,
            legal drafting, and representation-related communication.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-amber-200 bg-white p-7 shadow-[0_20px_50px_rgba(183,121,31,0.08)] transition-transform duration-300 hover:-translate-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">Phone</p>
            <p className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-950">9846846206</p>
            <p className="mt-2 text-sm text-stone-500">For consultation and professional communication</p>
          </div>
          <div className="rounded-[1.75rem] border border-amber-200 bg-gradient-to-br from-stone-950 via-stone-900 to-red-900 p-7 shadow-[0_20px_50px_rgba(91,44,82,0.18)] transition-transform duration-300 hover:-translate-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">Email</p>
            <a
              href="mailto:Sisirkafle14@gmail.com"
              className="mt-4 inline-block break-all text-2xl font-black tracking-[-0.04em] text-white underline decoration-amber-400 underline-offset-6"
            >
              Sisirkafle14@gmail.com
            </a>
            <p className="mt-2 text-sm text-stone-300">For formal legal correspondence and document sharing</p>
          </div>
        </div>
        <div className="mt-8 rounded-[1.75rem] border border-white/80 bg-white/80 p-7 shadow-[0_18px_50px_rgba(28,25,23,0.05)]">
          <p className="text-base leading-8 text-stone-700">
            I hereby declare that all the information provided above is true,
            complete, and correct to the best of my knowledge and belief. I take
            full responsibility for the accuracy of the details mentioned in this
            curriculum vitae.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
          <div className="mt-6">
            <p className="text-2xl font-black tracking-[-0.04em] text-stone-950">Sisir Kafle</p>
            <p className="mt-2 text-base text-stone-600">Tarkeshwor, Kathmandu</p>
            <p className="mt-1 text-base text-stone-600">04/04/2026</p>
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
