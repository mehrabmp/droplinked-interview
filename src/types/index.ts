export interface Root {
  statusCode: number;
  message: any;
}

export interface GetProductsResponse extends Root {
  data: [
    {
      _id: string;
      title: string;
      nftImages: any[];
      ownerID: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
      products: Product[];
    }
  ];
}

export interface GetProductResponse extends Root {
  data: Product;
}

export interface Product {
  _id: string;
  type: string;
  shopifyShopDomain: string;
  ownerID: string;
  productCollectionID: ProductCollection;
  skuIDs: any[];
  shopifyData: ShopifyData;
  createdAt: string;
  updatedAt: string;
  media: any[];
  __v: number;
  ruleSet: any;
}

export interface ProductCollection {
  _id: string;
  title: string;
  nftImages: any[];
  ownerID: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ShopifyData {
  body_html: string;
  images: Image[];
  available: boolean;
  created_at: string;
  handle: string;
  variants: Variant[];
  title: string;
  tags: string;
  product_type: string;
  updated_at: string;
  vendor: string;
  product_id: number;
  options: Option[];
  published_at: string;
}

export interface Image {
  updated_at: string;
  src: string;
  product_id: number;
  width: number;
  created_at: string;
  variant_ids: number[];
  id: number;
  position: number;
  height: number;
}

export interface Variant {
  formatted_price: string;
  inventory_quantity: number;
  compare_at_price: any;
  taxable: boolean;
  inventory_management: any;
  fulfillment_service: string;
  requires_shipping: boolean;
  option_values: OptionValue[];
  available: boolean;
  weight: number;
  created_at: string;
  title: string;
  inventory_policy: string;
  weight_unit: string;
  updated_at: string;
  price: string;
  id: number;
  position: number;
  grams: number;
  sku: string;
  image_id: number;
  barcode: string;
}

export interface OptionValue {
  name: string;
  option_id: number;
  value: string;
}

export interface Option {
  product_id: number;
  values: string[];
  name: string;
  id: number;
  position: number;
}
