import type { Metadata } from "next";
import PackagePageContent from "@/components/PackagePageContent";

export async function generateMetadata(): Promise<Metadata> {
  const packageNames = packages.map((p) => p.name).join(", ");
  return {
    title: "Shaadi & Valima Packages - Al-Macca Caterers",
    description: `Choose from our premium wedding packages: ${packageNames}. Authentic Pakistani cuisine and luxury services.`,
    alternates: {
      canonical: "./",
    },
  };
}

import {
  shaadiPackages as packages,
  shaadiAdditionalItems as additionalItems,
} from "@/data/packages";

export default function ShaadiValimaPage() {
  return (
    <PackagePageContent
      title="Shaadi & Valima Packages"
      subtitle="Make your wedding day unforgettable with our premium catering and luxury services"
      packages={packages}
      additionalItems={additionalItems}
      highlightWord="Wedding"
    />
  );
}
