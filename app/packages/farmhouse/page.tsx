import type { Metadata } from "next";
import PackagePageContent from "@/components/PackagePageContent";

export async function generateMetadata(): Promise<Metadata> {
  const packageNames = packages.map((p) => p.name).join(", ");
  return {
    title: "Farmhouse Packages - Al-Macca Caterers",
    description: `Enjoy outdoor dining with our packages: ${packageNames}. BBQ specialties and rustic ambiance.`,
    alternates: {
      canonical: "./",
    },
  };
}

import {
  farmhousePackages as packages,
  farmhouseAdditionalItems as additionalItems,
} from "@/data/packages";

export default function FarmhousePage() {
  return (
    <PackagePageContent
      title="Farmhouse Packages"
      subtitle="Experience authentic outdoor dining with BBQ specialties and rustic farmhouse charm"
      packages={packages}
      additionalItems={additionalItems}
      highlightWord="Farmhouse"
    />
  );
}
