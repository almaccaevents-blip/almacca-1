
import type { Metadata } from "next"
import EnhancedOrderPage from "@/components/EnhancedOrderPage"
import UnifiedHero from "@/components/UnifiedHero"
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Online Order - Al-Macca Caterers & Event Planner",
  description: "Place your catering order online with our easy-to-use order system.",
}

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-white">
       {/* Unified Hero Section */}
            <UnifiedHero
              title="Order"
              subtitle="Crafting memorable experiences through exceptional cuisine and professional service since 2010"
              highlightWord=" Now"
              
            />


      {/* Enhanced Order System */}
      <section className="py-20">
        <div className="container mx-auto px-4">
           <Suspense fallback={<div>Loading...</div>}>
          <EnhancedOrderPage />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
