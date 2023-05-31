export type Offer = {
  imgUrl: string;
  title: string;
  body: string;
  points: number;
  isLimited: boolean;
};

export type ShopDetails = {
  title: string;
  description: string;
  heroImageUrl: string;
  offers: Offer[];
};

export type Shop = {
  imgUrl: string;
  title: string;
  description: string;
  slug: string;
};

export type ShopSection = {
  header: string;
  shops: Shop[];
};

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  token: string;
  points: number;
};
