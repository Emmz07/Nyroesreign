"use client";

import { Card } from "@/components/ui/card";
import { Laptop, Shirt, Sofa, Car, Book, Camera } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    icon: Laptop,
    description: "Computers, phones, and gadgets",
    href: "/category/electronics",
  },
  {
    name: "Fashion",
    icon: Shirt,
    description: "Clothing, shoes, and accessories",
    href: "/category/fashion",
  },
  {
    name: "Furniture",
    icon: Sofa,
    description: "Home and office furniture",
    href: "/category/furniture",
  },
  {
    name: "Vehicles",
    icon: Car,
    description: "Cars, bikes, and parts",
    href: "/category/vehicles",
  },
  {
    name: "Books",
    icon: Book,
    description: "Books, magazines, and media",
    href: "/category/books",
  },
  {
    name: "Photography",
    icon: Camera,
    description: "Cameras and equipment",
    href: "/category/photography",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Browse Categories
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Find exactly what you're looking to trade
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link key={category.name} href={category.href}>
              <Card className="group relative overflow-hidden p-6 transition-all hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}