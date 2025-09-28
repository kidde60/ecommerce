export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  category?: string;
  rating?: number;
  tags?: string[];
  sku?: string;
  weight?: number; // in grams
  discountPercentage?: number;
  brand?: string;
  dimensions?: {
    width?: number;
    height?: number;
    depth?: number;
  };
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail?: string;
}
