export type ProductReview =
  | "unsatisfied"
  | "neutral"
  | "satisfied"
  | "very_satisfied"
  | "";

export interface FormData {
  comment: string;
  name: string;
  email: string;
  review: ProductReview;
}

export const defaultFormData = {
  comment: "",
  name: "",
  email: "",
  review: "",
} as FormData;
