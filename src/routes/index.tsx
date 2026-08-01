import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Mail,
  Mic,
  FileText,
  ShieldCheck,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Store,
  Truck,
  ChefHat,
  HardHat,
} from "lucide-react";

import heroImage from "../assets/hero-payb4.jpg";
import logoImage from "../assets/payb4-logo.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "PayB4 | WhatsApp Orders, Quotes & Payments for SA Businesses" },
      {
        name: "description",
        content:
          "PayB4 turns WhatsApp messages into instant quotes and paid invoices for South African SMEs. AI-powered, 15% VAT ready, with Stitch and PayFast payment links.",
      },
      { property: "og:title", content: "PayB4 | WhatsApp Orders, Quotes & Payments for SA Businesses" },
      {
        property: "og:description",
        content:
          "Turn WhatsApp messages into instant quotes and paid invoices. Built for South African SMEs, tradespeople and wholesale suppliers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP_DEMO_LINK = "https://wa.me/27123456789?text=Hi%20PayB4%2C%20I%27d%20like%20to%20try%20the%20demo";
const GET_STARTED_LINK = "https://wa.me/27123456789?text=Hi%20PayB4%2C%20I%27d%20like%20to%20get%20started%20for%20my%20business";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <FeaturesSection />
        <HowItWorksSection />
        <AudienceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <img
      src={logoImage}
      alt="PayB4 - AI Payments"
      width={1408}
      height={768}
      className={`w-auto ${size === "md" ? "h-10 sm:h-11" : "h-9"}`}
    />
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" aria-label="PayB4 home">
          <Logo />
        </Link>


        <nav className="hidden items-center gap-8 text-[15px] font-medium text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#audience" className="transition-colors hover:text-foreground">
            For your business
          </a>
        </nav>

        <a
          href={WHATSAPP_DEMO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-emerald-foreground shadow-glow transition-all hover:bg-emerald/90 hover:shadow-none"
        >
          Try Demo
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pt-20 pb-24 sm:px-8 lg:px-12 lg:pt-28 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-2xl">
            <h1 className="text-[2.75rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] text-balance">
              Turn WhatsApp chats into{" "}
              <span className="text-emerald">paid invoices</span>.
            </h1>

            <p className="mt-7 text-lg leading-8 text-muted-foreground text-balance">
              PayB4 is an autonomous AI agent that runs inside WhatsApp. It parses customer orders and
              voice notes, builds accurate quotes with 15% SA VAT, and sends instant payment links via
              Stitch and PayFast, so you get paid faster with zero manual admin.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={WHATSAPP_DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-8 py-4 text-base font-semibold text-emerald-foreground shadow-glow transition-all hover:bg-emerald/90 hover:shadow-none"
              >
                <MessageCircle className="h-5 w-5" />
                Try Demo on WhatsApp
              </a>
              <a
                href={GET_STARTED_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Get Started for Your Business
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald" />
                No app download
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald" />
                15% VAT included
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald" />
                Instant payment links
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-emerald/10 via-transparent to-ocean/10 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
              <img
                src={heroImage}
                alt="PayB4 WhatsApp order to invoice flow showing an AI agent parsing a WhatsApp order and generating a South African Rand invoice with VAT and a Pay Now button"
                width={1280}
                height={720}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const stats = [
    { label: "Payment gateways", value: "Stitch + PayFast" },
    { label: "VAT compliance", value: "15% SA VAT" },
    { label: "Customer touchpoint", value: "WhatsApp Native" },
  ];

  return (
    <section className="border-y border-border bg-card px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-semibold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      title: "Zero App Download",
      description:
        "PayB4 works natively inside WhatsApp for both you and your customers. No new apps, no onboarding friction, no forgotten passwords.",
    },
    {
      icon: Mic,
      title: "Voice Note & Text Support",
      description:
        "Customers can send messy voice notes or quick texts. PayB4 extracts products, quantities, delivery details, and prices automatically.",
    },
    {
      icon: FileText,
      title: "Automated Instant Invoicing",
      description:
        "Dynamic quotes with line items, quantities, unit prices, subtotals, and 15% South African VAT, generated and sent in seconds.",
    },
    {
      icon: ShieldCheck,
      title: "Built for SA Business",
      description:
        "Tailored for local trade suppliers, caterers, contractors, and boutique distributors. Local payment methods your customers already trust.",
    },
  ];

  return (
    <section id="features" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
            Everything you need to quote and collect payment in one chat.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Replace spreadsheets, manual quotes, and follow-up calls with a single WhatsApp number that
            sells, invoices, and gets you paid.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center rounded-3xl border border-border bg-card p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Customer messages you on WhatsApp",
      description:
        "They send a voice note or text asking for products or services, just like they already do.",
    },
    {
      step: "02",
      title: "PayB4 builds the quote instantly",
      description:
        "The AI agent parses the request, adds line items, calculates 15% SA VAT, and replies with a clean, professional quote.",
    },
    {
      step: "03",
      title: "Customer pays through a secure link",
      description:
        "A direct Stitch or PayFast payment link is sent inside the chat. You get notified the moment payment is verified.",
    },
  ];

  return (
    <section id="how-it-works" className="gradient-hero px-5 py-24 text-ocean-foreground sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
            From WhatsApp message to paid invoice in three steps.
          </h2>
          <p className="mt-5 text-lg text-ocean-foreground/80">
            No forms, no PDFs, no chasing. Just a conversation that ends with money in your account.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-3xl bg-white/8 p-8 backdrop-blur-sm">
              <span className="text-5xl font-extrabold text-emerald/90">{item.step}</span>
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ocean-foreground/80">{item.description}</p>
            </div>
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
      title: "Trade Suppliers",
      description: "Send quotes for bulk materials, fittings, and stock orders straight from WhatsApp enquiries.",
    },
    {
      icon: ChefHat,
      title: "Caterers & Food Businesses",
      description: "Turn event enquiries and menu requests into confirmed, paid bookings with instant payment links.",
    },
    {
      icon: HardHat,
      title: "Contractors",
      description: "Quote labour and materials on-site, collect deposits, and keep every job organised in one thread.",
    },
    {
      icon: Truck,
      title: "Boutique Distributors",
      description: "Handle repeat orders, delivery notes, and invoice confirmations without leaving WhatsApp.",
    },
  ];

  return (
    <section id="audience" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
            Built for the way South African businesses actually sell.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            If your customers already order by WhatsApp, PayB4 is the fastest way to turn those chats into
            revenue.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-3xl border border-border bg-card p-7 transition-colors hover:border-emerald/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-foreground">
                <audience.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{audience.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-foreground text-background">
        <div className="grid items-center gap-10 px-8 py-16 md:grid-cols-2 md:px-16 lg:py-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] text-balance">
              Ready to stop chasing invoices?
            </h2>
            <p className="mt-5 text-lg text-background/80">
              Join South African SMEs using PayB4 to quote faster, get paid sooner, and run their business
              entirely from WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={WHATSAPP_DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-8 py-4 text-base font-semibold text-emerald-foreground shadow-glow transition-all hover:bg-emerald/90"
            >
              <MessageCircle className="h-5 w-5" />
              Try Demo on WhatsApp
            </a>
            <a
              href={GET_STARTED_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 bg-transparent px-8 py-4 text-base font-semibold text-background transition-colors hover:bg-background/10"
            >
              Get Started for Your Business
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link to="/" aria-label="PayB4 home">
            <Logo size="sm" />
          </Link>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PayB4. Autonomous WhatsApp orders, quotes & payments for South
            African businesses.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="transition-colors hover:text-emerald">
              Features
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-emerald">
              How it works
            </a>
            <a
              href="mailto:support@payb4.co.za"
              className="inline-flex items-center gap-2 transition-colors hover:text-emerald"
            >
              <Mail className="h-4 w-4" />
              support@payb4.co.za
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
