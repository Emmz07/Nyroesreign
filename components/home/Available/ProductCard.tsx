"use client";

import { Heart, Maximize2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: string;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  discount,
}: ProductCardProps) {
  return (
    <div className="group relative">
      {discount && (
        <span className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-sm font-medium z-10">
          {discount}
        </span>
      )}
      <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 transform origin-top group-hover:scale-105"
        />
        <div className="absolute right-4 flex flex-col gap-2 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Heart className="w-4 h-4 text-black" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full">
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="mt-4 space-y-2 absolute bottom-4 left-4 text-white px-3 py-1 text-sm font-medium z-10">
        <h3 className="text-xl font-serif text-black font-lg">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-black">${price}</span>
          {originalPrice && ( 
            <span className="text-sm text-muted-foreground line-through text-black">
              ${originalPrice}
            </span>
          )}
        </div>
        <Button className="w-full gap-2 bg-black hover:bg-gray-800">
          <ShoppingCart className="w-4 h-4" />
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}