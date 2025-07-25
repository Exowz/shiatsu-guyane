// Shared component prop types
export interface Review {
  author_name: string;
  rating: number;
  text: string;
  date: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export interface BenefitCard {
  title: string;
  description: string;
}

export interface RatingSummaryProps {
  googleAverage: string;
  resalibAverage: string;
  googleLabel: string;
  resalibLabel: string;
  overallLabel: string;
  satisfaction: string;
}