export const businessDetails = {
  name: "Frady's Flooring Service",
  location: "Sylva, North Carolina",
  serviceArea: "Western North Carolina",
  serviceAreaSentence:
    "Serving Sylva and surrounding areas across Western North Carolina.",
  owners: "Hoot and Ott Frady",
  email: "Pamfrady29@gmail.com",
  phones: ["828-506-7925", "828-506-7555"],
  hours: [
    { day: "Mon-Fri", time: "9am-7pm" },
    { day: "Sat", time: "11am-5pm" },
  ],
};

export const primaryPhone = businessDetails.phones[0];
export const businessTagline =
  "Professional hardwood, LVP, and laminate installation backed by over 30 years of combined experience.";

export function toTelHref(phoneNumber: string) {
  return `tel:${phoneNumber.replace(/\D/g, "")}`;
}

export const homeTrustBarItems = [
  "Family Owned & Operated",
  "30+ Years Combined Experience",
  "Serving Western North Carolina",
  "Free Quotes",
];

export const servicePreviewItems = [
  {
    title: "Hardwood Floor Installation",
    description:
      "Solid and engineered hardwood installation done with the proper prep, layout, and finishing detail.",
  },
  {
    title: "LVP Installation",
    description:
      "Durable, low-maintenance luxury vinyl plank installation built for everyday living.",
  },
  {
    title: "Laminate Installation",
    description:
      "Professional laminate flooring installation with clean lines, proper spacing, and reliable performance.",
  },
  {
    title: "Floor Removal & Tear-Out",
    description:
      "Removal of old flooring materials and preparation for a clean new installation.",
  },
  {
    title: "Sanding & Refinishing",
    description:
      "Restore worn hardwood floors with professional sanding and a fresh finish.",
  },
  {
    title: "Subfloor Prep",
    description:
      "Proper surface preparation to help ensure a smooth, lasting finished floor.",
  },
];

export const servicesPageSections = [
  {
    title: "Hardwood Floor Installation",
    description:
      "Frady's installs both solid and engineered hardwood flooring with careful attention to layout, subfloor condition, transitions, and finish details. The goal is a clean, durable floor that looks right and performs well for years to come.",
  },
  {
    title: "Luxury Vinyl Plank (LVP) Installation",
    description:
      "Luxury vinyl plank is a popular option for homeowners who want the look of wood with added durability and lower maintenance. Frady's installs LVP with the proper prep, spacing, and finishing details for a clean, professional result.",
  },
  {
    title: "Laminate Flooring Installation",
    description:
      "Laminate flooring offers a durable, cost-effective option for many spaces. Frady's handles installation with attention to underlayment, alignment, transitions, and overall fit so the finished floor looks clean and holds up well over time.",
  },
  {
    title: "Floor Removal & Tear-Out",
    description:
      "Before a new floor goes in, the old material has to come out the right way. Frady's handles flooring tear-out and removal with care, helping prepare the space for a smooth installation process.",
  },
  {
    title: "Hardwood Floor Sanding & Refinishing",
    description:
      "Existing hardwood floors can often be brought back to life with the right refinishing work. Frady's sands and refinishes worn hardwood to improve appearance, restore character, and add a fresh protective finish.",
  },
  {
    title: "Subfloor Preparation",
    description:
      "A good flooring job starts underneath the surface. Frady's addresses subfloor readiness as part of the installation process to help support a better finished product.",
  },
];

export const whyChooseItems = [
  {
    title: "Family-owned and operated",
    description:
      "You work directly with a local family team that values clear communication and reliable service.",
  },
  {
    title: "Passed down through generations",
    description:
      "The business has been handed down through the Frady family, carrying forward proven flooring standards.",
  },
  {
    title: "Local Western NC focus",
    description:
      "Frady's Flooring Service is built around homes and families throughout Western North Carolina.",
  },
  {
    title: "Experienced craftsmanship",
    description:
      "More than 30 years of combined hands-on flooring experience goes into every installation and refinish.",
  },
  {
    title: "Honest service",
    description:
      "Straight answers, fair recommendations, and workmanship focused on long-term results.",
  },
];

export const siteKeywords = [
  "flooring Sylva NC",
  "flooring Western NC",
  "hardwood installation",
  "LVP installation",
  "sanding refinishing",
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80",
    alt: "Hardwood floor installation in living room",
  },
  {
    src: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm wood flooring in modern home interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    alt: "Durable plank flooring with natural finish",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    alt: "Clean laminate flooring installation",
  },
  {
    src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
    alt: "Refinished hardwood floors in open living space",
  },
  {
    src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury vinyl plank flooring detail",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154780-5e3d7f4e8b6d?auto=format&fit=crop&w=1200&q=80",
    alt: "Installed flooring and trim transitions",
  },
  {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    alt: "Flooring project with natural light",
  },
];
