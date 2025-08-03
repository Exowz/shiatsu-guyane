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
  shiatsuPage: {
    title: string;
    subtitle: string;
    general: {
      definition: {
        heading: string;
        p1: string;
      };
      history: {
        heading: string;
        p1: string;
      };
      principles: {
        heading: string;
        p1: string;
      };
      objectives: {
        heading: string;
        points: string[];
      };
      techniques: {
        heading: string;
        p1: string;
        p2: string;
      };
    };
    schools: {
      heading: string;
      items: Array<{
        title: string;
        description: string;
        src: string;
        content: Array<{
          heading: string;
          text: string;
          list?: string[];
          listTitle?: string;
        }>;
      }>;
    };
    sessionFlow: {
      heading: string;
      p1: string;
      p2: string;
    };
  };
}