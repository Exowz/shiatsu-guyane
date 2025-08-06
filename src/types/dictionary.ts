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
    badge: string;
    trustElements: {
      personalizedConsultation: string;
      certifiedPractitioner: string;
      kindApproach: string;
    };
    bookingSection: {
      title: string;
      description: string;
      reassurance: string;
    };
    secondaryButtons: {
      question: string;
      pricing: string;
    };
    quote: {
      text: string;
      attribution: string;
    };
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
  pourQuiPage: {
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      description: string;
      src: string;
      content: Array<{
        heading: string;
        text?: string;
        list?: string[];
      }>;
    }>;
  };
  pricingPage: {
    title: string;
    subtitle: string;
    priceRange: string;
    individualSessions: {
      heading: string;
      sessions: Array<{
        name: string;
        description: string;
      }>;
    };
    packages: {
      heading: string;
      description: string;
      items: Array<{
        name: string;
        price: string;
        description: string;
      }>;
    };
    otherServices: {
      heading: string;
      intro: string;
      workshops: Array<{
        title: string;
        price: string;
        duration: string;
        items: Array<{
          name: string;
          description: string;
        }>;
      }>;
    };
  };
  practicalInfoPage: {
    title: string;
    subtitle: string;
    sessionFlow: {
      heading: string;
      steps: Array<{
        name: string;
        description: string;
      }>;
    };
    recommendations: {
      heading: string;
      points: Array<{
        name: string;
        description: string;
      }>;
    };
    location: {
      heading: string;
      address: string;
      cta: string;
    };
  };
  contactPage: {
    title: string;
    subtitle: string;
    labels: {
      firstname: string;
      lastname: string;
      email: string;
      message: string;
    };
    placeholders: {
      firstname: string;
      lastname: string;
      email: string;
      message: string;
    };
    button: string;
    form: {
      submitting: string;
      success: {
        title: string;
        description: string;
        sendAnother: string;
      };
      privacy: {
        title: string;
        description: string;
      };
    };
    enhanced: {
      badge: string;
      quickInfo: {
        rapidResponse: string;
        personalizedExchange: string;
        maxTime: string;
      };
      leftColumn: {
        badge: string;
        title: string;
        description: string;
        benefits: {
          freeConsultation: string;
          personalizedAdvice: string;
          kindApproach: string;
        };
        otherContact: {
          title: string;
          phone: string;
          email: string;
          office: string;
        };
      };
      rightColumn: {
        formTitle: string;
        formSubtitle: string;
      };
    };
  };
  components: {
    testimonials: {
      badge: string;
      description: string;
      quickInfo: {
        verifiedReviews: string;
        satisfiedClients: string;
        authenticExperiences: string;
      };
      loading: string;
      verifiedBadge: string;
      wellbeingMessage: string;
      footerDescription: string;
    };
    benefits: {
      badge: string;
      quickInfo: {
        physicalWellbeing: string;
        emotionalBalance: string;
        vitalEnergy: string;
      };
      description: string;
      ctaTitle: string;
      ctaDescription: string;
      traditionMessage: string;
      cards: {
        vitality: {
          title: string;
          description: string;
        };
        relief: {
          title: string;
          description: string;
        };
        balance: {
          title: string;
          description: string;
        };
        prevention: {
          title: string;
          description: string;
        };
      };
    };
    aboutIntro: {
      badge: string;
      certifiedBadge: string;
      experience: {
        years: string;
        label: string;
      };
      qualities: {
        personalizedApproach: {
          title: string;
          description: string;
        };
        compassionateListening: {
          title: string;
          description: string;
        };
      };
      additionalCta: string;
      imageAlt: string;
    };
    whatIsShiatsu: {
      badge: string;
      qualities: {
        energeticBalance: {
          title: string;
          description: string;
        };
        holisticApproach: {
          title: string;
          description: string;
        };
      };
      tradition: string;
      shiatsuMeaning: {
        title: string;
        description: string;
      };
      vitalEnergy: string;
      imageAlt: string;
    };
    whoIsItFor: {
      badge: string;
      quickInfo: {
        allAges: string;
        allNeeds: string;
        personalizedApproach: string;
      };
      description: string;
      findProfileTitle: string;
      findProfileDescription: string;
      uniqueMessage: string;
      cards: {
        globalWellbeing: {
          title: string;
          description: string;
        };
        tailored: {
          title: string;
          description: string;
        };
        forEveryone: {
          title: string;
          description: string;
        };
      };
    };
    footer: {
      practitioner: {
        name: string;
        description: string;
        longDescription: string;
        certification: string;
        experience: string;
        membershipFFST: string;
      };
      contact: {
        title: string;
        office: {
          title: string;
          address: string;
          schedule: string;
        };
        email: {
          address: string;
          responseTime: string;
        };
      };
      schedule: {
        title: string;
        weekdays: {
          label: string;
          hours: string;
        };
        saturday: {
          label: string;
          hours: string;
        };
        sunday: {
          label: string;
          hours: string;
        };
      };
      navigation: {
        title: string;
        home: string;
      };
      legal: {
        mentions: string;
        privacy: string;
        terms: string;
      };
      backToTop: string;
      copyright: string;
    };
    hero: {
      socialLabels: {
        whatsapp: string;
        instagram: string;
        facebook: string;
      };
      videoNotSupported: string;
    };
    reviews: {
      verifiedReview: string;
    };
    navbar: {
      socialLabels: {
        whatsapp: string;
        instagram: string;
        facebook: string;
      };
    };
  };
  pages: {
    practicalInfo: {
      badge: string;
      quickNav: {
        flow: string;
        recommendations: string;
        location: string;
      };
      sessionFlow: {
        badge: string;
        description: string;
      };
      recommendations: {
        badge: string;
        description: string;
      };
      location: {
        badge: string;
        address: string;
      };
    };
    leShiatsu: {
      badge: string;
      foundations: string;
      philosophyPractice: string;
      methodsTechniques: string;
      schoolsTraditions: string;
      imageAlt: string;
      schoolsDescription: string;
    };
    pourQui: {
      badge: string;
      loading: string;
      exploreBelow: string;
      personalizedProfiles: string;
      findIdealSupport: string;
      notFindProfile: string;
      personalizedConsultation: string;
      contactUs: string;
      personalizedConsultationSection: {
        description: string;
        title: string;
        cta: string;
      };
    };
    servicesPricing: {
      badge: string;
      quickInfo: {
        flexibleScheduling: string;
        expertGuidance: string;
        personalizedApproach: string;
      };
      individualServices: string;
      valuePackages: string;
      mostPopular: string;
      bestValue: string;
      corporateSolutions: string;
      learnMore: string;
      packageBenefits: {
        flexibleScheduling: string;
        priorityBooking: string;
        transferable: string;
      };
      getStarted: string;
      workshops: {
        description: string;
        priceLabel: string;
        durationLabel: string;
      };
    };
  };
  metadata: {
    title: string;
    description: string;
  };
  aboutPage: {
    title: string;
    subtitle: string;
    intro: {
      heading: string;
      p1: string;
      p2: string;
    };
    timeline: {
      heading: string;
      events: Array<{
        year: string;
        title: string;
        description: string;
      }>;
    };
  };
  signupDemo: {
    title: string;
    subtitle: string;
    fields: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      twitterPassword: string;
    };
    placeholders: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    };
    buttons: {
      signUp: string;
      github: string;
      google: string;
      onlyFans: string;
    };
  };
  uiDemo: {
    dropdown: {
      postActions: string;
      edit: string;
      duplicate: string;
      share: string;
      remove: string;
    };
  };
}