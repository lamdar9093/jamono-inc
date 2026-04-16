import type { Translations } from "./fr";

export const en: Translations = {
  nav: {
    products: "Products",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Talk to us",
  },
  hero: {
    badge: "Tech holding company",
    title: "We build tools\nthat matter.",
    subtitle:
      "Jamono Inc. crafts vertical SaaS products and delivers tech services for professionals who want to move faster, without friction.",
    cta_primary: "See our products",
    cta_secondary: "Contact us",
  },
  products: {
    title: "Our products",
    subtitle: "Purpose-built tools for specific vertical markets.",
    visit_site: "Visit site",
    in_development: "In development",
    items: [
      {
        name: "Gobering",
        tag: "SaaS · Healthcare",
        description:
          "Online booking platform for clinics and therapists. Calendar, SMS reminders, automatic waitlist management.",
        status: "live",
        label: "Live",
        url: "https://gobering.com",
      },
      {
        name: "Golamda",
        tag: "SaaS · DevOps",
        description:
          "AI-powered Kubernetes cluster monitoring and auto-remediation. Visualize, diagnose, fix — from a single interface.",
        status: "soon",
        label: "Coming soon",
        url: null,
      },
      {
        name: "LexBook",
        tag: "SaaS · Legal",
        description:
          "Internal management for law firms: appointments, client files, invoicing. Simplicity first.",
        status: "soon",
        label: "Coming soon",
        url: null,
      },
    ],
  },
  services: {
    title: "Technical services",
    subtitle: "You don't need a big IT team. You need us.",
    items: [
      {
        icon: "wrench",
        title: "Setup & configuration",
        description:
          "Software, server, network and equipment deployment for clinics and offices.",
      },
      {
        icon: "support",
        title: "Technical support",
        description:
          "Responsive support for your teams. Remote or on-site depending on your needs.",
      },
      {
        icon: "training",
        title: "Training",
        description:
          "Get your team up to speed on your tools. Simple, effective, in plain language.",
      },
      {
        icon: "cloud",
        title: "Cloud infrastructure",
        description:
          "Deployment and maintenance of secure, scalable cloud infrastructure for your organization.",
      },
    ],
  },
  about: {
    title: "Why Jamono",
    text: "Jamono Inc. was born from a simple belief: professionals deserve tools as well-crafted as those used by large enterprises — without the complexity, without the outrageous costs.\n\nWe build vertical products designed for specific trades, and we provide the services to make adoption painless.",
    values: ["Simplicity first", "Uncompromising quality", "Client proximity"],
  },
  contact: {
    title: "Let's talk",
    subtitle: "A project, a question, a demo — we reply fast.",
    email: "info@jamono.io",
    cta: "Send a message",
    placeholder_name: "Your name",
    placeholder_email: "Your email",
    placeholder_message: "Your message",
  },
  footer: {
    tagline: "Build. Ship. Scale.",
    rights: "All rights reserved.",
  },
};
