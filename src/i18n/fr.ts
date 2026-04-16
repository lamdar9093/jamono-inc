export const fr = {
  nav: {
    products: "Produits",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    cta: "Parler à l'équipe",
  },
  hero: {
    badge: "Holding technologique",
    title: "On construit des\noutils qui comptent.",
    subtitle:
      "Jamono Inc. conçoit des logiciels SaaS et offre des services tech pour les professionnels qui veulent avancer sans friction.",
    cta_primary: "Voir nos produits",
    cta_secondary: "Nous contacter",
  },
  products: {
    title: "Nos produits",
    subtitle: "Des outils pensés pour des marchés verticaux précis.",
    visit_site: "Visiter le site",
    in_development: "En développement",
    items: [
      {
        name: "Gobering",
        tag: "SaaS · Santé",
        description:
          "Plateforme de prise de rendez-vous en ligne pour cliniques et thérapeutes. Agenda, rappels SMS, liste d'attente automatique.",
        status: "live",
        label: "En ligne",
        url: "https://gobering.com",
      },
      {
        name: "Golamda",
        tag: "SaaS · DevOps",
        description:
          "Monitoring et correction automatique de clusters Kubernetes par l'IA. Visualisez, diagnostiquez, corrigez — depuis une seule interface.",
        status: "soon",
        label: "Bientôt",
        url: null,
      },
      {
        name: "LexBook",
        tag: "SaaS · Juridique",
        description:
          "Gestion interne des cabinets d'avocats : rendez-vous, dossiers clients, facturation. Simplicité d'abord.",
        status: "soon",
        label: "Bientôt",
        url: null,
      },
    ],
  },
  services: {
    title: "Services techniques",
    subtitle:
      "Vous n'avez pas besoin d'une grande équipe IT. Vous avez besoin de nous.",
    items: [
      {
        icon: "wrench",
        title: "Installation & configuration",
        description:
          "Mise en place de logiciels, serveurs, réseaux et équipements pour cliniques et cabinets.",
      },
      {
        icon: "support",
        title: "Support technique",
        description:
          "Assistance réactive pour vos équipes. Télémaintenance ou sur site selon vos besoins.",
      },
      {
        icon: "training",
        title: "Formation",
        description:
          "Formation de vos équipes à l'utilisation de vos outils. Simple, efficace, en français.",
      },
      {
        icon: "cloud",
        title: "Infrastructure cloud",
        description:
          "Déploiement et maintenance d'infrastructures cloud sécurisées et scalables pour votre organisation.",
      },
    ],
  },
  about: {
    title: "Pourquoi Jamono",
    text: "Jamono Inc. est né d'une conviction simple : les professionnels méritent des outils aussi bien conçus que ceux des grandes entreprises — sans la complexité, sans les frais exorbitants.\n\nNous construisons des produits verticaux pensés pour des métiers précis, et nous offrons les services pour que l'adoption soit sans douleur.",
    values: ["Simplicité d'abord", "Qualité sans compromis", "Proximité client"],
  },
  contact: {
    title: "Parlons",
    subtitle: "Un projet, une question, une démo — on vous répond rapidement.",
    email: "info@jamono.io",
    cta: "Envoyer un message",
    placeholder_name: "Votre nom",
    placeholder_email: "Votre courriel",
    placeholder_message: "Votre message",
    card_response: "Réponse rapide",
    card_bilingual: "Français & anglais",
    card_tech: "Support technique",
    card_human: "Approche humaine",
  },
  footer: {
    tagline: "Build. Ship. Scale.",
    rights: "Tous droits réservés.",
  },
};

export type Translations = typeof fr;
