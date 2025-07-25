// Type definitions for dictionary structure
export interface Dictionary {
  navbar: {
    about: string;
    services: string;
    whoIsItFor: string;
    whatIsShiatsu: string;
    practicalInfo: string;
    contact: string;
    bookNow: string;
  };
  homepage: {
    practitionerName: string;
    heroTitle: string;
    heroSubtitle: string;
    scrollDown: string;
  };
  aboutIntro: {
    heading: string;
    paragraph: string;
    cta: string;
  };
  benefitsSection: {
    heading: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
    cta: string;
  };
  whatIsShiatsuSection: {
    heading: string;
    paragraph: string;
    cta: string;
  };
  whoIsItForSection: {
    heading: string;
    testimonials: Array<{
      quote: string;
      name: string;
      designation: string;
      src: string;
    }>;
    cta: string;
  };
  testimonialsSection: {
    heading: string;
    googleHeading: string;
    resalibHeading: string;
    summary: {
      satisfaction: string;
      googleLabel: string;
      resalibLabel: string;
      overallLabel: string;
      googleAverage: string;
      resalibAverage: string;
    };
    staticReviews: Array<{
      author_name: string;
      rating: number;
      text: string;
      date: string;
    }>;
  };
  ctaSection: {
    heading: string;
    subheading: string;
    button: string;
  };
}