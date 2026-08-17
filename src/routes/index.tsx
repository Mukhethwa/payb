import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Mail,
  Mic,
  FileText,
  ShieldCheck,
  Smartphone,
  ArrowUpRight,
  Store,
  Truck,
  ChefHat,
  HardHat,
} from "lucide-react";

import logoUrl from "../assets/payb4-logo.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "PayB4 | WhatsApp Quotes & Instant Payment Links, South Africa" },
      {
        name: "description",
        content:
          "PayB4 is an AI agent inside WhatsApp that turns customer messages and voice notes into VAT-ready quotes and instant Stitch or PayFast payment links for South African businesses.",
      },
      { property: "og:title", content: "PayB4 | WhatsApp Quotes & Instant Payment Links" },
      {
        property: "og:description",
        content:
          "Messages in. Quotes out. Money in the bank. Built for South African SMEs, tradespeople and wholesale suppliers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP_DEMO_LINK = "https://wa.me/27788648190?text=Hi%20PayB4%2C%20I%27d%20like%20to%20try%20the%20demo";
const GET_STARTED_LINK = "https://wa.me/27788648190?text=Hi%20PayB4%2C%20I%27d%20like%20to%20get%20started%20for%20my%20business";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <Ticker />
        <ReceiptSection />
        <FeaturesSection />
        <AudienceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <span className="inline-flex items-center bg-background px-2 py-1 ink-frame">
      <img
        src={logoUrl}
        alt="PayB4 - AI Payments"
        width={1190}
        height={312}
        className={`w-auto ${size === "md" ? "h-7 sm:h-8" : "h-7"}`}
      />
    </span>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-[3px] border-ink bg-background">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="PayB4 home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 text-xs font-bold uppercase tracking-[0.14em] md:flex">
          {[
            { href: "#ledger", label: "How it works" },
            { href: "#features", label: "Features" },
            { href: "#audience", label: "Who it's for" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-[3px] border-transparent px-3 py-2 transition-colors hover:border-ink hover:bg-acid hover:text-acid-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_DEMO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="ink-frame hard-shadow-sm press inline-flex items-center gap-2 bg-flare px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-flare-foreground"
        >
          Try the demo
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="grid-paper relative overflow-hidden border-b-[3px] border-ink px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          {/* Left: type stack */}
          <div className="lg:col-span-7">
            <p className="inline-block ink-frame bg-acid px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-acid-foreground">
              WhatsApp agent / South Africa
            </p>

            <h1 className="mt-8 text-[3.25rem] leading-[0.88] tracking-tight sm:text-[4.5rem] lg:text-[5.75rem]">
              <span className="block">Messages in.</span>
              <span className="relative -ml-1 block text-flare">Quotes out.</span>
              <span className="mt-2 inline-block bg-ink px-3 py-1 text-ink-foreground">
                Money in.
              </span>
            </h1>

            <p className="mt-8 max-w-xl border-l-[6px] border-flare pl-5 text-lg font-medium leading-7 text-foreground">
              PayB4 is an autonomous AI agent living in your WhatsApp. It reads texts and voice notes,
              builds a line-item quote with 15% SA VAT, and fires back a Stitch or PayFast payment link
              before your customer changes their mind.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-frame hard-shadow press inline-flex items-center justify-center gap-2 bg-flare px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-flare-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Try demo on WhatsApp
              </a>
              <a
                href={GET_STARTED_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-frame hard-shadow press inline-flex items-center justify-center gap-2 bg-background px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-foreground"
              >
                Get started
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 border-[3px] border-ink divide-x-[3px] divide-ink">
              {[
                { k: "No app", v: "Zero downloads" },
                { k: "15%", v: "SA VAT built in" },
                { k: "2 rails", v: "Stitch + PayFast" },
              ].map((s) => (
                <div key={s.k} className="p-4">
                  <dt className="font-display text-xl uppercase leading-none">{s.k}</dt>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: broken-grid chat + quote slip */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:mt-6">
              <div className="ink-frame hard-shadow-flare relative z-10 rotate-[-1.5deg] bg-background">
                <div className="flex items-center justify-between border-b-[3px] border-ink bg-ink px-4 py-2.5 text-ink-foreground">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                    WhatsApp / +27
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Live</span>
                </div>
                <div className="space-y-3 p-4">
                  <div className="ink-frame max-w-[85%] bg-secondary px-3 py-2 text-sm font-medium">
                    <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      <Mic className="h-3.5 w-3.5" /> Voice note 0:14
                    </span>
                    <p className="mt-1">
                      "Howzit, need 40 bags cement and 12 sheets IBR delivered Benoni Thursday."
                    </p>
                  </div>
                  <div className="ml-auto ink-frame max-w-[85%] bg-acid px-3 py-2 text-sm font-semibold text-acid-foreground">
                    Quote QT-1042 ready. R 18 630,00 incl. VAT. Tap to pay.
                  </div>
                  <div className="ml-auto ink-frame max-w-[65%] bg-flare px-3 py-2 text-sm font-bold uppercase tracking-wider text-flare-foreground">
                    Pay now link
                  </div>
                </div>
              </div>

              <div className="ink-frame hard-shadow relative z-20 mt-6 ml-auto w-[82%] rotate-[2deg] bg-background">
                <div className="border-b-[3px] border-ink px-4 py-2">
                  <p className="font-display text-sm uppercase">Quote QT-1042</p>
                </div>
                <table className="w-full text-[13px] font-medium">
                  <tbody>
                    {[
                      ["Cement 32,5N x40", "R 6 200,00"],
                      ["IBR sheeting x12", "R 8 940,00"],
                      ["Delivery Benoni", "R 1 060,00"],
                      ["VAT 15%", "R 2 430,00"],
                    ].map(([label, amount]) => (
                      <tr key={label} className="border-b border-ink/20">
                        <td className="px-4 py-1.5">{label}</td>
                        <td className="px-4 py-1.5 text-right tabular-nums">{amount}</td>
                      </tr>
                    ))}
                    <tr className="bg-ink text-ink-foreground">
                      <td className="px-4 py-2 font-display text-xs uppercase">Total</td>
                      <td className="px-4 py-2 text-right font-display tabular-nums">R 18 630,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "Voice notes parsed",
    "15% VAT calculated",
    "Stitch payment links",
    "PayFast payment links",
    "No app download",
    "Quotes in seconds",
    "Hours saved on manual quotes",
    "Payments verified instantly",
  ];

  return (
    <div className="overflow-hidden border-b-[3px] border-ink bg-flare py-3 text-flare-foreground">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-xs font-bold uppercase tracking-[0.2em]">
            {item} <span className="ml-8">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ReceiptSection() {
  const steps = [
    {
      n: "01",
      title: "Customer messages",
      body: "A text or a rambling voice note lands on your WhatsApp Business number, exactly like it does today.",
    },
    {
      n: "02",
      title: "Agent writes the quote",
      body: "PayB4 pulls out products, quantities and delivery, prices the job and adds 15% SA VAT. You approve the quote before it goes out. Nothing is sent without the business owner's sign-off.",
    },
    {
      n: "03",
      title: "Link gets paid",
      body: "A Stitch or PayFast link goes back in the thread. Payment verified, you get pinged, job confirmed.",
    },
  ];

  return (
    <section id="ledger" className="border-b-[3px] border-ink bg-paper px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl leading-[0.95] sm:text-5xl">
              Three lines
              <br />
              <span className="text-flare">on the ledger.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base font-medium leading-7">
              No forms. No PDF attachments. No Sunday-night follow-up calls. No time wasted on chats that
              never convert. One conversation that ends with cleared funds.
            </p>
          </div>

          <ol className="lg:col-span-8 lg:pt-4">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className={`ink-frame bg-background p-6 sm:p-8 ${i > 0 ? "-mt-[3px]" : ""} ${
                  i === 1 ? "lg:ml-10" : i === 2 ? "lg:ml-20" : ""
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                  <span className="font-display text-4xl leading-none text-flare sm:text-5xl">{s.n}</span>
                  <div>
                    <h3 className="text-xl sm:text-2xl">{s.title}</h3>
                    <p className="mt-2 max-w-xl text-base font-medium leading-7">{s.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      title: "Zero app download",
      body: "Runs natively inside WhatsApp for you and your customers. No onboarding, no forgotten passwords.",
      tone: "bg-background",
    },
    {
      icon: Mic,
      title: "Voice note fluent",
      body: "Messy voice notes and shorthand texts become structured line items, quantities and delivery notes.",
      tone: "bg-acid",
    },
    {
      icon: FileText,
      title: "Instant VAT invoicing",
      body: "Quotes with unit prices, subtotals and 15% South African VAT generated and sent in seconds.",
      tone: "bg-background",
    },
    {
      icon: ShieldCheck,
      title: "Local payment rails",
      body: "Stitch and PayFast links your customers already trust, with payment verification straight to you.",
      tone: "bg-flare text-flare-foreground",
    },
  ];

  return (
    <section id="features" className="border-b-[3px] border-ink px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 border-b-[3px] border-ink pb-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-4xl leading-[0.95] sm:text-5xl">
            Quote, invoice and collect from one chat thread.
          </h2>
          <p className="max-w-sm text-base font-medium leading-7">
            Spreadsheets, manual quotes and follow-ups replaced by a single WhatsApp number that sells and
            settles.
          </p>
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={`ink-frame -mt-[3px] p-7 sm:-ml-[3px] ${f.tone} ${
                i % 2 === 1 ? "lg:mt-6" : ""
              }`}
            >
              <div className="ink-frame inline-flex h-12 w-12 items-center justify-center bg-background text-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg leading-tight">{f.title}</h3>
              <p className="mt-3 text-[15px] font-medium leading-6">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const audiences = [
    {
      icon: Store,
      title: "Trade suppliers",
      body: "Bulk materials, fittings and stock orders quoted straight off a WhatsApp enquiry.",
    },
    {
      icon: ChefHat,
      title: "Caterers",
      body: "Event enquiries and menu requests turned into confirmed, paid bookings.",
    },
    {
      icon: HardHat,
      title: "Contractors",
      body: "Price labour and materials on site, take the deposit before you leave.",
    },
    {
      icon: Truck,
      title: "Distributors",
      body: "Repeat orders, delivery notes and invoice confirmations without leaving the chat.",
    },
  ];

  return (
    <section id="audience" className="border-b-[3px] border-ink bg-ink px-5 py-20 text-ink-foreground sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="max-w-3xl text-4xl leading-[0.95] sm:text-5xl">
          Built for the way South Africa
          <span className="text-acid"> actually sells.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base font-medium leading-7 text-ink-foreground/80">
          If your customers already order by WhatsApp, PayB4 is the shortest route from chat to cleared
          payment.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <article
              key={a.title}
              className={`border-[3px] border-ink-foreground bg-ink p-6 ${
                i % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <a.icon className="h-6 w-6 text-acid" />
              <h3 className="mt-5 text-lg leading-tight">{a.title}</h3>
              <p className="mt-2 text-[15px] font-medium leading-6 text-ink-foreground/80">{a.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 border-[3px] border-ink-foreground bg-acid p-6 text-acid-foreground sm:p-8 lg:mt-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display text-4xl leading-none sm:text-5xl">+ Many more</p>
              <p className="mt-3 max-w-xl text-[15px] font-semibold leading-6">
                Salons, car washes, mobile mechanics, tutors, nurseries, event hire, plumbers, printers,
                spaza wholesalers. If you quote it on WhatsApp, PayB4 can sell it and collect for it.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Salons", "Car washes", "Barbers", "Tutors", "Event hire", "Mechanics", "Nurseries"].map(
                (t) => (
                  <span
                    key={t}
                    className="border-[3px] border-ink bg-background px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-foreground"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="grid-paper border-b-[3px] border-ink px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="ink-frame hard-shadow bg-acid px-7 py-14 text-acid-foreground sm:px-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <h2 className="text-4xl leading-[0.92] sm:text-5xl">
              Stop chasing.
              <br />
              Start banking.
            </h2>

            <div className="flex flex-col gap-4">
              <a
                href={WHATSAPP_DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-frame hard-shadow-sm press inline-flex items-center justify-center gap-2 bg-flare px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-flare-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Try demo on WhatsApp
              </a>
              <a
                href={GET_STARTED_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-frame hard-shadow-sm press inline-flex items-center justify-center gap-2 bg-background px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-foreground"
              >
                Get started for your business
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Logo size="sm" />

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-[0.14em]">
            <a href="#features" className="hover:text-flare">
              Features
            </a>
            <a href="#ledger" className="hover:text-flare">
              How it works
            </a>
            <a
              href="mailto:support@payb4.co.za"
              className="inline-flex items-center gap-2 hover:text-flare"
            >
              <Mail className="h-4 w-4" />
              support@payb4.co.za
            </a>
          </div>
        </div>

        <p className="mt-8 border-t-[3px] border-ink pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          © {new Date().getFullYear()} PayB4. Autonomous WhatsApp orders, quotes and payments for South
          African business.
        </p>
      </div>
    </footer>
  );
}
