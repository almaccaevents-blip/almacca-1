import type { Metadata } from "next";
import PackagePageContent from "@/components/PackagePageContent";

export async function generateMetadata(): Promise<Metadata> {
  const packageNames = packages.map((p) => p.name).join(", ");
  return {
    title: "Mehndi & Mayion Packages - Al-Macca Caterers",
    description: `Celebrate with our traditional packages: ${packageNames}. Authentic flavors and festive setups.`,
    alternates: {
      canonical: "./",
    },
  };
}

import {
  mehndiPackages as packages,
  mehndiAdditionalItems as additionalItems,
} from "@/data/packages";

export default function MehndiMayionPage() {
  return (
    <PackagePageContent
      title="Mehndi & Mayion Packages"
      subtitle="Traditional celebrations with authentic Pakistani flavors and cultural elegance"
      packages={packages}
      additionalItems={additionalItems}
      highlightWord="Mehndi"
    />
  );
}
