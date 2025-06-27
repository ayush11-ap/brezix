import {projects} from './index' 


// Define supporting interfaces first
interface Feature {
  title: string;
  description: string;
  videoUrl: string;
}

interface PricingPlan {
  id: number;
  name: string;
  price: number | string; // Since some prices are ranges or "Custom Pricing"
  description: string;
  features: string[];
  isPopular: boolean;
}

// The full Service interface
export interface Service {
  id: number;
  title: string;
  description: string;
  projects: any[]; // Replace 'any' with your actual Project type if available
  features: Feature[];
  pricingPlans: PricingPlan[];
  domainNote?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "FuturOS Portfolio™",
    description: "Transform your online presence with our cutting-edge portfolio solutions",
    projects: [...projects],
    features: [
      {
        title: "Modern Design",
        description: "Clean, crisp & professional UI/UX design that makes your work shine",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332032/bynpcuidtjtmgndrmk5n.mp4"
      },
      {
        title: "Interactive Experience",
        description: "OS-style interface with smooth animations and immersive interactions",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332023/kv3gvoxgfpsgm7emrjhb.mp4"
      },
      {
        title: "Smart Features",
        description: "Built-in chatbot support and smart contact forms for better engagement",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355586/z255vqkbmpfzfrbj3liu.mp4"
      }
    ],
    pricingPlans: [
      {
        id: 1,
        name: "Starter Portfolio",
        price: 399,
        description: "Clean, crisp & to the point portfolio solution",
        features: [
          "Modern UI/UX design",
          "Mobile-friendly layout",
          "Smart contact form",
          "Basic chatbot support"
        ],
        isPopular: false
      },
      {
        id: 2,
        name: "FuturOS Portfolio™",
        price: 599,
        description: "Interactive OS-style website with unique features",
        features: [
          "Desktop-style UI (apps/windows)",
          "Smooth animations + better UX",
          "Basic chatbot support",
          "Free subdomain included"
        ],
        isPopular: true
      },
      {
        id: 3,
        name: "3D Story Portfolio",
        price: 599,
        description: "Visual + immersive experience with 3D elements",
        features: [
          "Scroll-based 3D storytelling",
          "Stunning motion design",
          "Interactive sections",
          "Advanced chatbot support"
        ],
        isPopular: false
      }
    ],
    domainNote: "📌 Free subdomain included. Custom .com/.in domains optional – approx ₹500–1500/year"
  },
  {
    id: 2,
    title: "SmartLaunch™ Page",
    description: "High-converting landing pages for brands, startups, and coaches",
    projects: [...projects],
    features: [
      {
        title: "Modern Minimalist Design",
        description: "A modern, responsive layout built with precision UI/UX — optimized to capture leads, impress visitors, and earn instant trust.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332032/bynpcuidtjtmgndrmk5n.mp4"
      },
      {
        title: "Saas/Product Landing Design",
        description: "A high-converting, feature-rich layout tailored to showcase your product's value — built to drive signups, build credibility, and earn your trust from concept to launch.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332019/zmk43mqyjsb4wr1nzgks.mp4"
      },
      {
        title: "3D Landing Design",
        description: "An immersive, visually striking layout using 3D and interactive elements — crafted to wow your audience, elevate your brand, and show you're building something bold and unforgettable.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332023/kv3gvoxgfpsgm7emrjhb.mp4"
      }
    ],
    pricingPlans: [
      {
        id: 1,
        name: "Basic Launch Page",
        price: 4999,
        description: "Simple & clean landing page for fast deployment",
        features: [
          "Modern static layout",
          "Mobile-ready & fast-loading",
          "Smart contact form + chatbot",
          "WhatsApp & CTA buttons",
          "Free subdomain"
        ],
        isPopular: false
      },
      {
        id: 2,
        name: "Pro AI Launch Page",
        price: 6999,
        description: "Interactive & AI-powered for lead generation",
        features: [
          "Animated engaging sections",
          "Voice-enabled AI sales agent",
          "Lead capture + auto-respond",
          "Smart form + WhatsApp connect",
          "CRM, SEO & analytics ready",
          "Free subdomain"
        ],
        isPopular: true
      }
    ],
    domainNote: "📌 Free subdomain included. Custom .com/.in domains optional – approx ₹500–1500/year"
  },
  {
    id: 3,
    title: "ImmersiView™ – 3D Business Tour with AI Agent",
    description: "Immersive 3D walkthroughs with AI chatbots and voice assistance for real estate, cafés, salons, and more.",
    projects: [...projects],
    features: [
      {
        title: "360° Virtual Tour",
        description: "Walk through cafés, stores, or properties like you're really there — in full first-person 3D.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332023/kv3gvoxgfpsgm7emrjhb.mp4"
      },
      {
        title: "Interactive Product/Service Layers",
        description: "Clickable hotspots for clothes, furniture, menus, rooms, or bookings inside the tour.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332019/zmk43mqyjsb4wr1nzgks.mp4"
      },
      {
        title: "AI Sales Assistant",
        description: "Answers visitor questions, guides them via voice, and helps them inquire or book instantly.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355586/z255vqkbmpfzfrbj3liu.mp4"
      }
    ],
    pricingPlans: [
      {
        id: 1,
        name: "Standard 3D Tour",
        price: 999,
        description: "Basic immersive tour with first-person view and chatbot",
        features: [
          "360° 3D walkthrough (VR-ready)",
          "Clickable product/service highlights",
          "Basic smart chatbot",
          "Booking or inquiry buttons",
          "Free subdomain"
        ],
        isPopular: false
      },
      {
        id: 2,
        name: "Advanced 3D Experience",
        price: 1499,
        description: "Fully interactive 3D with assistant, customization & checkout",
        features: [
          "Full VR tour + advanced navigation",
          "Customizable products inside tour",
          "Virtual 3D assistant chatbot",
          "Cart, booking or checkout inside tour",
          "Free subdomain"
        ],
        isPopular: true
      }
    ],
    domainNote: "📌 Free subdomain included. Custom domain optional (₹500–1500/year)"
  },
  {
    id: 4,
    title: "GenAI Apps™ – AI-Powered Web Applications",
    description: "Build smart AI-based apps that talk, guide, book, and automate — from clinics to SaaS to learning platforms.",
    projects: [...projects],
    features: [
      {
        title: "Smart AI Agents",
        description: "Voice/chat agents that answer queries, help book, explain services, or even assist in shopping.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355586/z255vqkbmpfzfrbj3liu.mp4"
      },
      {
        title: "Custom AI Workflows",
        description: "Appointment booking, product advice, smart dashboards – all powered by GPT-style logic.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355586/z255vqkbmpfzfrbj3liu.mp4"
      },
      {
        title: "Convert Existing App to AI-Powered",
        description: "Already have a site or web app? Add AI layers to automate booking, sales, queries & insights — without starting from scratch.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355564/p3bd8wszbeb42cm4s9ns.mp4"
      }
    ],
    pricingPlans: [
      {
        id: 1,
        name: "Smart Starter",
        price: "₹3499 – ₹4999",
        description: "Get started with AI automation tools for your business",
        features: [
          "AI Chatbot for customer interaction",
          "Voice assistant or smart form support",
          "Lead generation + FAQ automation",
          "AI-powered appointment, product or info flow",
          "Connects with your existing site",
          "One-tool integration (e.g., Google Sheet or WhatsApp)"
        ],
        isPopular: false
      },
      {
        id: 2,
        name: "AI Pro Engine",
        price: "₹5999 – ₹9999+",
        description: "Full AI layer – from smart agents to automation workflows",
        features: [
          "GPT-style smart assistant logic",
          "Voice + visual chatbot with dynamic flows",
          "Custom AI dashboards or tools",
          "AI lead handling, product advisors, booking bots",
          "Backend CRM, analytics + 3rd party integrations",
          "Social media & workflow integrations",
          "Can convert existing apps to AI-powered versions"
        ],
        isPopular: true
      }
    ],
    domainNote: "📌 Project type defines scope. Final cost depends on features, complexity & your use-case."
  },
  {
    id: 5,
    title: "ThinkCustom™ Apps – Custom Projects, Custom Pricing",
    description: "We build unique websites, tools, or platforms based on your ideas, needs, or business challenges – with no templates or limits.",
    projects: [...projects],
    features: [
      {
        title: "Saas & AI Automation",
        description: "We build AI-powered SaaS tools, CRMs, and internal systems that automate your reports, approvals, and lead tracking — giving you smart, scalable, and high-value solutions tailored to your business.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355586/z255vqkbmpfzfrbj3liu.mp4"
      },
      {
        title: "MSME / Local Businesses",
        description: "From bookings to GST invoicing, local pricing, and feedback — we build smart tools that simplify operations and boost your business growth.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355582/sj9e8k9onszpallle9zn.mp4"
      },
      {
        title: "Build Your Idea —— Apps / Websites",
        description: "Your vision, our execution — crafted with sleek design, intelligent workflows, and future-ready tech.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355564/p3bd8wszbeb42cm4s9ns.mp4"
      }
    ],
    pricingPlans: [
      {
        id: 1,
        name: "ThinkCustom™ Projects",
        price: "Custom Pricing",
        description: "Pricing depends on your problem, idea, and complexity — because custom means built just for you.",
        features: [
          "Tailored apps, tools, platforms, or websites",
          "No templates – everything designed from scratch",
          "Flexible architecture (CMS, SaaS, dashboard, etc.)",
          "Full-stack solution – frontend + backend",
          "PWA or responsive builds for mobile",
          "Optional AI automation modules",
          "Integration with APIs, 3rd-party tools or databases"
        ],
        isPopular: true
      }
    ],
    domainNote: "📌 Every custom project is different. Pricing is shared after scoping your idea, goals, and required modules."
  },
  {
    id: 6,
    title: "AppPrime™ Development – Android/iOS Business Apps",
    description: "We build mobile apps that people actually use — whether it's booking, browsing, or ordering, your customers can now do it all from an app.",
    projects: [...projects],
    features: [
      {
        title: "Booking & Service Apps",
        description: "From salons to clinics, let users book or schedule with a few taps – includes AI chat for instant interaction.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332032/bynpcuidtjtmgndrmk5n.mp4"
      },
      {
        title: "Menu & Order Apps",
        description: "Perfect for cafés, restaurants, or product-based businesses – show your menu/catalog and take orders with ease.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332023/kv3gvoxgfpsgm7emrjhb.mp4"
      },
      {
        title: "Website → App Conversion",
        description: "Already have a site? We can turn it into an Android/iOS app without starting from scratch.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332019/zmk43mqyjsb4wr1nzgks.mp4"
      },
    ],
    pricingPlans: [
      {
        id: 1,
        name: "Starter App",
        price: "₹2,500",
        description: "Basic business app with clean UI and chatbot support – great for cafés, salons, shops, and clinics.",
        features: [
          "Business info page (services, images, contact)",
          "Booking or inquiry form",
          "Product/menu showcase",
          "Basic chatbot for user queries",
          "Android APK for direct install"
        ],
        isPopular: false
      },
      {
        id: 2,
        name: "Advanced App",
        price: "₹4,999",
        description: "Feature-rich daily-use app with smart logic, booking flow, voice chatbot and real estate/product functionality.",
        features: [
          "Real-time booking or scheduling system",
          "Smart order/catalog UI",
          "Real estate / listing functionality",
          "Voice chatbot for assistance",
          "Android APK + Play Store-ready setup",
          "Optional AI assistant modules"
        ],
        isPopular: true
      }
    ],
    domainNote: "📌 iOS version, custom features, or Play Store listing support available as add-ons. Custom pricing available for more complex flows or designs."
  },
  {
    id: 7,
    title: "AutoAgentOS™ – AI Agents That Work Like Staff",
    description: "Deploy AI agents that talk, reply, guide, and automate tasks like real team members. Perfect for sales, support, lead gen & customer workflows.",
    projects: [...projects],
    features: [
      {
        title: "Sales Chat & Voice Agents",
        description: "Deploy 24/7 smart agents that talk to your customers, answer queries, and collect leads automatically.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332032/bynpcuidtjtmgndrmk5n.mp4"
      },
      {
        title: "Booking & WhatsApp Automations",
        description: "Integrate with forms, calendars, or WhatsApp flows – agents book, confirm, and handle next steps.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332023/kv3gvoxgfpsgm7emrjhb.mp4"
      },
      {
        title: "MCP-Enabled Tools Access",
        description: "Your AI agent connects with Notion, Sheets, CRMs – it can read, update, and respond with live info.",
        videoUrl: "https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332019/zmk43mqyjsb4wr1nzgks.mp4"
      },
    ],
    pricingPlans: [
      {
        id: 1,
        name: "Starter Agent",
        price: "₹599",
        description: "Ideal for small businesses who want to try AI – a basic chatbot or voice agent to answer questions and guide visitors.",
        features: [
          "1 AI Chatbot or Voice Agent",
          "Basic lead collection or FAQs",
          "Simple embed or link integration",
          "MCP (data logic) support"
        ],
        isPopular: false
      },
      {
        id: 2,
        name: "Pro Agent Suite",
        price: "₹999",
        description: "Add up to 2 AI agents with automation flows, CRM integration, and smart voice/chat assistance.",
        features: [
          "Up to 2 AI agents (chat or voice)",
          "Form + WhatsApp automation flows",
          "Tool/data integration (Notion, Sheets, CRMs)",
          "Voice-ready assistant capability"
        ],
        isPopular: true
      },
      {
        id: 3,
        name: "AutoAgentOS Pro+",
        price: "₹1,499",
        description: "Build your own AI-powered digital team – chat, voice, video agents with workflows, automations, and tool access.",
        features: [
          "Multi-agent system (chat + voice + video)",
          "Lead routing & smart CRM actions",
          "Booking, WhatsApp, Email workflows",
          "MCP-integrated automation logic",
          "Video agent avatar setup (optional)"
        ],
        isPopular: true
      }
    ],
    domainNote: "📌 This is the age of AI – final price depends on how deep your automation goes. Advanced workflows, agent count, or tool complexity may affect total cost."
  }
];
