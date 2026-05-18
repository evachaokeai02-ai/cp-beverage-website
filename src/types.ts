export type ProductCategory = 'sparkling-water' | 'mineral-water' | 'functional-beverage';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  flavor: string;
  size: string;
  tags: string[];
  keySellingPoints: string[];
  ingredientHighlights: string[];
  suggestedChannels: string[];
  consumptionOccasions: string[];
  gradientClass: string;
  themeColor: string;
  imageScaleClass?: string;
  imagePositionClass?: string;
}

export interface ProductTab {
  id: 'all' | ProductCategory;
  label: string;
}

export interface ValueProposition {
  title: string;
  description: string;
  icon: string;
}
