
import type { Metadata } from "next"
import PackagesContent from "@/components/PackagesContent"

export const metadata: Metadata = {
  title: "Cheapest Catering Packages in Karachi | Affordable Event & Wedding Catering",
  description:
    "Looking for the cheapest catering packages in Karachi? Al-Macca Caterers & Event Planner offers budget-friendly wedding, corporate, and party catering with delicious international menus and professional service.",
  keywords: [
    "cheapest catering in Karachi",
    "budget catering Karachi",
    "affordable wedding catering",
    "low price catering Karachi",
    "event planner Karachi",
    "catering packages Karachi",
    "party catering Karachi",
  ],
  openGraph: {
    title: "Cheapest Catering Packages in Karachi | Al-Macca Caterers",
    description:
      "Explore our affordable catering packages for weddings, parties, and corporate events in Karachi. Premium taste, budget-friendly prices!",
    url: "https://almacca.com/packages",
    siteName: "Al-Macca Caterers & Event Planner",
    images: [
      {
        url: "/images/catering-packages.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Catering Packages in Karachi",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
}


export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PackagesContent />
    </div>
  )
}
