export type ProductType = {
    id: number;
    name: string;
    category: string;
    original_price: number;
    discounted_price: number;
    discount_percent: number;
    ratings: number;
    views: number;
    sales_count: number;
    brand: string;
    fabric_type: string;
    color: string;
    gender: string;
    season: string;
    images: string[];
    reviews: {
      summary: string;
      pros: string[];
      cons: string[];
    }[];
  };
  