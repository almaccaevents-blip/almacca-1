"use client";

import { motion } from "framer-motion";
import {
  Star,
  Crown,
  Users,
  Check,
  ShoppingCart,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { useState } from "react";

// All packages data
import { allPackages, type Package } from "@/data/packages";

const categories = ["All", "Mehndi & Mayion", "Shaadi & Valima", "Farmhouse"];

export default function PackagesContent() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredPackages = allPackages.filter(
    (pkg) => selectedCategory === "All" || pkg.category === selectedCategory
  );

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === "popular") return b.popular ? 1 : -1;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "guests") return a.minGuests - b.minGuests;
    return 0;
  });

  // Removed local Package type definition as it is imported

  const handleAddToCart = (pkg: Package) => {
    addToCart({
      id: Date.now(),
      name: pkg.name,
      price: pkg.price,
      image: "/images/hero-food.jpeg",
      category: pkg.category,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-food.jpeg"
            alt="Premium Catering Packages"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQEBAYEBAQUEBQKFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIDAgIDBQMEBAUGBQUFBQYIBgYGBgYICggICAgICAoKCgoKCgoKDAwMDAwMDQ0NDQ0ODg4ODg4ODg4O/9sAQwECAgIEBAQHBAQHDQsKCw0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ0ODQ4O/90ABAAFAAP/2gAIAQEAAAH8A5T/2Q=="
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cheapest <span className="text-yellow-400">Catering Packages</span>{" "}
            in Karachi for Weddings & Events
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our affordable wedding, mehndi, valima, and farmhouse
            catering packages — perfectly tailored for every budget in Karachi.
          </motion.p>

          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400">
                6
              </div>
              <div className="text-sm sm:text-base text-gray-300">
                Exclusive Packages
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400">
                3
              </div>
              <div className="text-sm sm:text-base text-gray-300">
                Event Types
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400">
                100%
              </div>
              <div className="text-sm sm:text-base text-gray-300">
                Customer Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "border-gray-300 hover:border-yellow-400"
                  } text-xs sm:text-sm`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="guests">Guest Capacity</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {sortedPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  pkg.popular
                    ? "border-4 border-yellow-400 transform scale-105"
                    : "border border-gray-200"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 sm:px-6 py-2 rounded-b-lg font-semibold flex items-center gap-2 text-sm sm:text-base z-10">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge
                    variant="secondary"
                    className="bg-black/80 text-white text-xs"
                  >
                    {pkg.category}
                  </Badge>
                </div>

                {/* Savings Badge */}
                {pkg.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold z-10">
                    Save Rs. {pkg.originalPrice - pkg.price}
                  </div>
                )}

                {/* Package Image */}
                <div className="relative h-40 sm:h-48">
                  <Image
                    src="/images/hero-food.jpeg"
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-4 sm:p-6">
                  {/* Header */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="bg-yellow-400 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-black">
                      <Crown className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl sm:text-3xl font-bold text-black">
                        Rs. {pkg.price}
                      </span>
                      <span className="text-gray-600 text-sm">per person</span>
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-gray-500 line-through text-base sm:text-lg">
                        Rs. {pkg.originalPrice}
                      </div>
                    )}
                    <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>
                        {pkg.minGuests}-{pkg.maxGuests} guests
                      </span>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="bg-yellow-400 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-black" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                    {pkg.features.length > 3 && (
                      <div className="text-sm text-gray-500 ml-7">
                        +{pkg.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => handleAddToCart(pkg)}
                        className={`w-full ${
                          pkg.popular
                            ? "bg-yellow-400 text-black hover:bg-yellow-500"
                            : "bg-black text-white hover:bg-gray-800"
                        } py-3 font-semibold text-sm sm:text-base`}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </motion.div>

                    <Link href={pkg.link}>
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 hover:border-yellow-400 hover:text-yellow-600 text-sm sm:text-base bg-transparent"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <p className="text-center text-xs text-gray-500 mt-3 sm:mt-4">
                    *Prices may vary based on location and requirements
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
              Looking for{" "}
              <span className="text-white">Customized Catering</span> in
              Karachi?
            </h2>
            <p className="text-black/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let us design your dream catering package that fits your event,
              budget, and preferences — whether it’s a corporate dinner,
              engagement, or family gathering.
            </p>
            <Link href="/order?tab=custom">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                Create Custom Package
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
