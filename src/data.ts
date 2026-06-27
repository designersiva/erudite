import { NavLink, ServiceItem, PortfolioItem, Testimonial, StatItem } from './types';

export const navLinks: NavLink[] = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Our Expertise', id: 'expertise' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Why Choose Us', id: 'why-choose-us' },
  { label: 'Contact Us', id: 'contact' },
];

export const stats: StatItem[] = [
  { value: '250+', label: 'PROJECTS DONE' },
  { value: '40+', label: 'HAPPY CLIENTS' },
  { value: '30+', label: 'TEAM MEMBERS' },
  { value: '15+', label: 'YEARS EXP.' },
];

export const corePurposeCards = [
  {
    title: 'Audience Magnet',
    description: 'Attract, engage, and retain your ideal audience with purposeful animation.',
    iconType: 'smile',
  },
  {
    title: 'Insight-Driven',
    description: 'Content designed to boost your KPIs and support smarter decision-making.',
    iconType: 'squares',
  },
  {
    title: 'Visual Brilliance',
    description: 'From the first sketch to the final frame, every detail crafted to stand out.',
    iconType: 'sparkles',
  },
];

export const services: ServiceItem[] = [
  {
    id: 'whiteboard',
    title: 'Whiteboard & Infographic',
    description: 'Sleek visual representation of complex systems, workflows, or metrics. Translates intricate dry data into highly engaging storyboards and hand-drawn layouts.',
    iconName: 'whiteboard',
    longDescription: 'Our whiteboard and infographic solutions merge data-driven analytical clarity with hand-drawn warmth. Ideal for complex corporate training, technical software guides, or public awareness campaigns.'
  },
  {
    id: 'animation-opt',
    title: 'Animation Optimization',
    description: 'Enhancing interactive timelines, keyframe dynamics, and asset files. We reduce render overhead and optimize format delivery for seamless web and device performance.',
    iconName: 'optimize',
    longDescription: 'Performance matters. We review, rebuild, and optimize existing animations to compress files, preserve crisp vector paths, and guarantee smooth 60fps responsive rendering.'
  },
  {
    id: 'character-design',
    title: 'Character & Assets Design',
    description: 'Crafting unique, relatable mascots and custom digital components. Tailored styling ensures consistent visual identity across brand guidelines and layouts.',
    iconName: 'character',
    longDescription: 'Custom characters build empathy and brand recollection. Our illustration team drafts bespoke characters with comprehensive expression sheets and articulation frameworks ready for 2D or 3D rigging.'
  },
  {
    id: 'elearning-content',
    title: 'E-Learning Content Development',
    description: 'Designing structured modular education slides, video scripts, interactive quizzes, and visual courses that boost cognitive learning retention and employee training score.',
    iconName: 'elearning',
    longDescription: 'Modern learning requires narrative momentum. We design comprehensive LMS-compatible interactive courses, blending storytelling, animated explainers, and real-time assessments.'
  },
  {
    id: 'product-visual',
    title: 'Product Visual Design',
    description: 'Photorealistic asset rendering, 3D rotating previews, and exploded interface layouts. Best suited for software product tour showcases and hardware launches.',
    iconName: 'product',
    longDescription: 'Bring products to life before they reach physical production. We render high-fidelity 3D modeling and motion walkthroughs demonstrating internal mechanics and software value-propositions.'
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Motion Graphics Design Portfolio',
    category: 'Motion Graphics',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    client: 'Joydeep Pani',
    year: '2025',
    color: 'from-emerald-500/20 to-teal-500/10',
    tags: ['Motion Design', 'Typography', 'Explainer'],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-subway-station-with-neon-lights-42504-large.mp4',
  },
  {
    id: 'p2',
    title: 'Agency Annual Showreel',
    category: 'Showreel',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    client: 'Erudite Internal',
    year: '2026',
    color: 'from-purple-500/20 to-indigo-500/10',
    tags: ['Showreel', '3D Render', 'Audio Sync'],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-spheres-and-mesh-41666-large.mp4',
  },
  {
    id: 'p3',
    title: 'Dynamic Brand Launch Reel',
    category: '3D & Character',
    imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    client: 'Cosmic Tech Inc.',
    year: '2025',
    color: 'from-blue-500/20 to-cyan-500/10',
    tags: ['Brand Identity', 'Kinetic Typography', 'CGI'],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-glowing-particles-in-cyber-space-41981-large.mp4',
  },
  {
    id: 'p4',
    title: 'Abstract 3D Typography "BEEF"',
    category: 'Motion Graphics',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    client: 'Gourmet Studio',
    year: '2026',
    color: 'from-amber-500/20 to-orange-500/10',
    tags: ['3D Type', 'Texturing', 'Looping'],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-glowing-futuristic-lines-of-light-on-black-background-42173-large.mp4',
  },
  {
    id: 'p5',
    title: 'Interactive Learning Platform',
    category: 'eLearning',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    client: 'EduCore Global',
    year: '2025',
    color: 'from-slate-700/20 to-zinc-700/10',
    tags: ['eLearning', 'Courseware', 'UI Animation'],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hand-clicking-on-a-digital-screen-close-up-34283-large.mp4',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'Erudite translated our highly complex developer APIs into an elegant, three-minute motion explainer that dramatically boosted our signup conversions by 38% in the first month alone.',
    author: 'Braydon Butler',
    role: 'Director of Brand Communications',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't2',
    quote: 'The level of craftsmanship in their character design is unmatched. They designed a lovable robotic mascot and rigged it for interactive e-learning modules that our enterprise clients absolutely adore.',
    author: 'Sarah Jenkins',
    role: 'VP of Product Education',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't3',
    quote: 'Responsive, precise, and highly creative. They acted as a true extension of our design team, delivery flawless 60fps web assets and optimized motion guidelines.',
    author: 'Marcus Vance',
    role: 'Creative Director',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  }
];
