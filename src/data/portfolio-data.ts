// Portfolio data structure
export interface PortfolioSample {
  img: string
  fallbackImg?: string
  title: string
  description: string
  mockup?: string
  mediaType?: "image" | "video"
}

export interface PortfolioService {
  service: string
  description: string
  samples: PortfolioSample[]
  results: string
}

// Portfolio services data
// Images and videos are stored in /portfolio-assets/pics/
export const rawPortfolioServices: PortfolioService[] = [
  {
    service: "Social Media Management",
    description:
      "Creative content, engaging posts, and strategic social media campaigns",
    samples: [
      {
        img: "/portfolio-assets/pics/SMM/Apsara Developers Kirty_s Design (1).png",
        title: "Apsara Developers Campaign",
        description: "Professional design for developer services",
      },
      {
        img: "/portfolio-assets/pics/SMM/Apsara Developers Kirty_s Design.png",
        title: "Apsara Developers Design",
        description: "Professional developer services content",
      },
      {
        img: "/portfolio-assets/pics/SMM/Finest Furniture Kirty_s Design  (1).png",
        title: "Furniture Brand Content",
        description: "Creative posts for furniture business",
      },
      {
        img: "/portfolio-assets/pics/SMM/Finest Furniture Kirty_s Design  (2).png",
        title: "Furniture Design 2",
        description: "Modern furniture marketing content",
      },
      {
        img: "/portfolio-assets/pics/SMM/Finest Furniture Kirty_s Design  (3).png",
        title: "Furniture Design 3",
        description: "Elegant furniture promotional posts",
      },
      {
        img: "/portfolio-assets/pics/SMM/Finest Furniture Kirty_s Design  (5).png",
        title: "Furniture Design 5",
        description: "Premium furniture brand content",
      },
      {
        img: "/portfolio-assets/pics/SMM/Kirty Design_s (18).png",
        title: "Design Collection 18",
        description: "Creative design showcase",
      },
      {
        img: "/portfolio-assets/pics/SMM/Kirty Design_s (19).png",
        title: "Design Collection 19",
        description: "Modern design portfolio",
      },
      {
        img: "/portfolio-assets/pics/SMM/Kirty Design_s (22).png",
        title: "Design Collection 22",
        description: "Innovative design solutions",
      },
      {
        img: "/portfolio-assets/pics/SMM/Kirty Design_s (5).png",
        title: "Design Collection 5",
        description: "Creative design work",
      },
      {
        img: "/portfolio-assets/pics/SMM/Living Concept Kirty Design_s (2).png",
        title: "Living Concept Posts",
        description: "Lifestyle and home decor content",
      },
      {
        img: "/portfolio-assets/pics/SMM/Living Concept Kirty Design_s (3).png",
        title: "Living Concept Design 3",
        description: "Modern living space content",
      },
      {
        img: "/portfolio-assets/pics/SMM/Living Concept Kirty Design_s (4).png",
        title: "Living Concept Design 4",
        description: "Contemporary lifestyle posts",
      },
      {
        img: "/portfolio-assets/pics/SMM/My talent win (1080 x 1350 px).png",
        title: "Talent Showcase",
        description: "Creative talent highlight",
      },
      {
        img: "/portfolio-assets/pics/SMM/Roy Academy Posts (4).png",
        title: "Educational Content",
        description: "Academic institution social media",
      },
      {
        img: "/portfolio-assets/pics/SMM/Splendore Kirty_s design (1).png",
        title: "Splendore Brand",
        description: "Luxury brand social media strategy",
      },
      {
        img: "/portfolio-assets/pics/SMM/Splendore Kirty_s design (3).png",
        title: "Splendore Design 3",
        description: "Premium luxury content",
      },
      {
        img: "/portfolio-assets/pics/SMM/Splendore Kirty_s design (5).png",
        title: "Splendore Design 5",
        description: "Elegant luxury marketing",
      },
      {
        img: "/portfolio-assets/pics/SMM/Sri kala chakra Kirty_s Design (1).png",
        title: "Cultural Arts Content",
        description: "Traditional arts and culture posts",
      },
      {
        img: "/portfolio-assets/pics/SMM/Sri kala chakra Kirty_s Design (2).png",
        title: "Cultural Arts Design 2",
        description: "Heritage cultural content",
      },
      {
        img: "/portfolio-assets/pics/SMM/Sri kala chakra Kirty_s Design.png",
        title: "Cultural Arts Design",
        description: "Traditional cultural showcase",
      },
    ],
    results: "Average 60% increase in followers, 45% boost in engagement",
  },
  {
    service: "Website Development",
    description:
      "Modern, responsive websites that convert visitors into customers",
    samples: [
      {
        img: "/portfolio-assets/mockups/Shyara_premium_restaurant_sample_1.PNG",
        title: "Premium Restaurant",
        description:
          "Elegant fine-dining experience with curated menus",
        mockup: "/portfolio-assets/mockups/Shyara_premium_restaurant_sample_1.html",
      },
      {
        img: "/portfolio-assets/mockups/Shyara_BurgerCafe.PNG",
        title: "Burger Cafe Concept",
        description: "Playful landing page for a quick-service cafe brand",
        mockup: "/portfolio-assets/mockups/Shyara_BurgerCafe.html",
      },
      {
        img: "/portfolio-assets/mockups/Shyara_Restaurant_Sample_1.PNG",
        title: "Corporate Restaurant",
        description: "Upscale dining website with reservation flow",
        mockup: "/portfolio-assets/mockups/Shyara_Restaurant_Sample_1.html",
      },
      {
        img: "/portfolio-assets/mockups/Shyara_Banquete_Website.PNG",
        title: "Banquete Experience",
        description: "Multi-page banquet showcase with CTA driven sections",
        mockup: "/portfolio-assets/mockups/Shyara_Banquete_Website.html",
      },
    ],
    results:
      "40% more bookings, improved lead generation and conversion rates",
  },
  {
    service: "App Development",
    description: "Cross-platform mobile applications that solve real problems",
    samples: [
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.12.07.jpeg",
        title: "Mobile App Interface",
        description: "Modern mobile app design and development",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.12.08 (1).jpeg",
        title: "App Dashboard",
        description: "User-friendly dashboard design",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.12.08.jpeg",
        title: "App Interface 2",
        description: "Clean mobile interface design",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.12.18 (1).jpeg",
        title: "App Features",
        description: "Core functionality implementation",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.12.18.jpeg",
        title: "App Features 2",
        description: "Advanced app functionality",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.12.31.jpeg",
        title: "User Experience",
        description: "Intuitive user interface design",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.12.55 (1).jpeg",
        title: "App Screens",
        description: "Multiple screen designs",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.12.55.jpeg",
        title: "App Screens 2",
        description: "Comprehensive screen layouts",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.13.10 (1).jpeg",
        title: "Mobile Solution",
        description: "Cross-platform mobile development",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.13.10.jpeg",
        title: "Mobile Solution 2",
        description: "Advanced mobile development",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.13.11 (1).jpeg",
        title: "App Development 1",
        description: "Professional app development",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.13.11.jpeg",
        title: "App Development 2",
        description: "Innovative app solutions",
      },
      {
        img: "/portfolio-assets/pics/App Dev/WhatsApp Image 2025-09-08 at 23.13.12.jpeg",
        title: "App Development 3",
        description: "Complete mobile application",
      },
    ],
    results: "Launched within 8 weeks, secured initial funding",
  },
  {
    service: "Video Editing & Reels",
    description:
      "Engaging video content that captures attention and drives engagement",
    samples: [
      {
        img: "/portfolio-assets/pics/Reels/Black Pink Fashion Modern Outfit Style Photo Collage Instagram Reel.mp4",
        title: "Fashion Reel",
        description: "Trendy fashion content for Instagram",
        mediaType: "video",
      },
      {
        img: "/portfolio-assets/pics/Reels/Gray Beige Modern Spa Treatment Mobile Video (2).mp4",
        title: "Spa Treatment Video",
        description: "Relaxing spa and wellness content",
        mediaType: "video",
      },
      {
        img: "/portfolio-assets/pics/Reels/Neutral Modern Skincare Instagram Reels.mp4",
        title: "Skincare Reel",
        description: "Beauty and skincare promotional video",
        mediaType: "video",
      },
      {
        img: "/portfolio-assets/pics/Reels/Yellow and White Minimalist Video Centric Financial Tips Instagram Reel.mp4",
        title: "Financial Tips Video",
        description: "Educational financial content",
        mediaType: "video",
      },
    ],
    results: "Tripled follower count, boosted engagement significantly",
  },
  {
    service: "Ad Campaign Management",
    description:
      "Strategic advertising campaigns that deliver measurable results",
    samples: [
      {
        img: "/portfolio-assets/pics/ads/Apsara Developers Kirty_s Design (2).png",
        title: "Developer Services Ad",
        description: "Professional services advertising campaign",
      },
      {
        img: "/portfolio-assets/pics/ads/Living Concept Kirty Design_s.png",
        title: "Living Concept Ad",
        description: "Lifestyle brand advertising",
      },
      {
        img: "/portfolio-assets/pics/ads/Quickcontrol_fb_post (1).png",
        title: "QuickControl Campaign",
        description: "Tech product advertising",
      },
      {
        img: "/portfolio-assets/pics/ads/Quickcontrol_fb_post.png",
        title: "QuickControl Ad 2",
        description: "Technology product promotion",
      },
      {
        img: "/portfolio-assets/pics/ads/Roy Academy Posts (1).png",
        title: "Educational Ad",
        description: "Academic institution promotion",
      },
      {
        img: "/portfolio-assets/pics/ads/Roy Academy Posts (2).png",
        title: "Educational Ad 2",
        description: "Learning institution marketing",
      },
      {
        img: "/portfolio-assets/pics/ads/Roy Academy Posts (3).png",
        title: "Educational Ad 3",
        description: "Academic excellence promotion",
      },
      {
        img: "/portfolio-assets/pics/ads/Roy Academy Posts.png",
        title: "Educational Ad 4",
        description: "Educational services advertising",
      },
      {
        img: "/portfolio-assets/pics/ads/Splendore Kirty_s design (2).png",
        title: "Splendore Ad",
        description: "Luxury brand advertising",
      },
      {
        img: "/portfolio-assets/pics/ads/Splendore Kirty_s design (4).png",
        title: "Splendore Ad 2",
        description: "Premium luxury brand campaign",
      },
    ],
    results: "30% increase in sales, 25% reduction in acquisition cost",
  },
  {
    service: "Festive Posts",
    description:
      "Special occasion content and festive celebrations for brands",
    samples: [
      {
        img: "/portfolio-assets/pics/Festive Posts/Finest Furniture Kirty_s Design  (4).png",
        title: "Festive Furniture Design",
        description: "Holiday-themed furniture promotion",
      },
      {
        img: "/portfolio-assets/pics/Festive Posts/Finest Furniture Kirty_s Design .png",
        title: "Festive Furniture Design 2",
        description: "Seasonal furniture marketing",
      },
      {
        img: "/portfolio-assets/pics/Festive Posts/Gold Red and Pink Traditional Varalakshmi Vratham Instagram Post.png",
        title: "Traditional Festival",
        description: "Cultural festival celebration post",
      },
      {
        img: "/portfolio-assets/pics/Festive Posts/Living Concept Kirty Design_s (1).png",
        title: "Festive Living",
        description: "Holiday home decor content",
      },
      {
        img: "/portfolio-assets/pics/Festive Posts/Quickcontrol_fb_post (2).png",
        title: "Festive Tech",
        description: "Holiday tech promotion",
      },
      {
        img: "/portfolio-assets/pics/Festive Posts/Splendore Kirty_s design.png",
        title: "Festive Splendore",
        description: "Luxury festive celebration",
      },
    ],
    results:
      "Enhanced brand engagement during special occasions and festivals",
  },
]

// Process portfolio data to add media types and fallback URLs
const IMAGE_EXTENSION_REGEX = /\.(png|jpe?g)$/i

const resolveMediaSources = (originalUrl: string) => {
  const normalized = originalUrl.replace(/\\/g, "/")
  const isImage = IMAGE_EXTENSION_REGEX.test(normalized)

  return {
    optimized: normalized,
    fallback: normalized,
    mediaType: isImage ? ("image" as const) : ("video" as const),
  }
}

export const attachOptimizedMedia = (
  services: PortfolioService[]
): PortfolioService[] =>
  services.map((service) => ({
    ...service,
    samples: service.samples.map((sample) => {
      const sources = resolveMediaSources(sample.img)
      return {
        ...sample,
        img: sources.optimized,
        fallbackImg: sources.fallback,
        mediaType: sources.mediaType,
      }
    }),
  }))

export const portfolioServices = attachOptimizedMedia(rawPortfolioServices)
