import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Target, CheckCircle2, TrendingUp, Lightbulb, Github, ExternalLink } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const ProjectDetail = () => {
    const { projectId } = useParams();

    console.log('ProjectDetail loaded, projectId:', projectId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);
  
    // UNIFIED Projects Database (PM + FE)
    const projectsData = {
      // ==================== PM PROJECTS ====================
      'urjobs': {
        type: 'pm', // ← Project type identifier
        title: "UrJobs",
        tagline: "Smart Steps Towards Your Dream Career",
        category: "Career-Tech Platform",
        role: "Marketing & GTM Strategy Lead",
        context: "Business Plan Competition - IT Fest (BPC Multimedia) | 3-person team",
        achievement: "🥉 3rd Place Winner",
        timeline: "3 months",
        teamSize: "3 people (CEO, CTO, CMO)",
        
        bannerImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
        ],
        
        overview: `UrJobs is a comprehensive career development platform designed to address Indonesia's unemployment crisis, particularly among young job seekers aged 18-45. As CMO, I led the market research, positioning strategy, and go-to-market planning that secured us 3rd place in BPC Multimedia.

The Problem: As of February 2025, Indonesia faces 7.28 million unemployed individuals, with fresh graduates struggling not just to find jobs, but to prepare adequately for the competitive job market. Existing platforms focus solely on job listings without addressing career readiness.

Our Solution: UrJobs integrates job search with career preparation services including one-on-one mentoring, skill development courses, and industry certifications—creating a holistic ecosystem that bridges the gap between job seekers and employers.

Judges specifically praised our partnership strategy with universities and youth organizations, noting it would enable rapid initial user acquisition.`,
        
        problem: "7.28 million unemployed individuals in Indonesia, with highest concentration in 18-35 age group. Fresh graduates lack practical career preparation skills.",
        
        approach: `As CMO, I led our market validation through:
• Conducted surveys and interviews with 10+ fresh graduates and job seekers
• Analyzed competitor platforms (JobStreet, Kalibrr, LinkedIn, Glints) to identify gaps
• Developed strategic positioning: "Smart steps towards your dream career"
• Created comprehensive go-to-market strategy using AIDA framework`,
        
        myRole: [
          "Led market research and user validation (surveys + interviews)",
          "Developed product positioning and brand messaging strategy",
          "Created go-to-market strategy with segmentation, targeting, and 4P marketing mix",
          "Designed partnership strategy with universities and youth organizations",
          "Facilitated MoSCoW prioritization framework for feature decisions",
          "Built risk mitigation strategies for user acquisition and conversion",
          "Contributed to financial projections and CAC modeling"
        ],
        
        keyFeatures: [
          "JobMatch - AI-powered job recommendations based on skills and career goals",
          "CareerTalk - One-on-one mentoring with industry professionals",
          "SkillPath - Curated learning paths with industry certifications",
          "Application Tracking System for job seekers",
          "Company profiles and reviews for transparency",
          "Skill assessment tests visible to employers"
        ],
        
        impact: [
          "🥉 Secured 3rd place in BPC Multimedia competition",
          "Judges praised partnership strategy for rapid user acquisition",
          "Projected 5,000 users in Year 1 with 30% premium conversion",
          "IRR 45%, ROI 55%, Payback Period 2.2 years",
          "Addressed SDG 4 (Quality Education) and SDG 8 (Decent Work)",
          "Differentiated from competitors through integrated career development approach"
        ],
        
        challenges: [
          {
            title: "Differentiating in Crowded Market",
            problem: "Team initially wanted to build 'another JobStreet but better'",
            solution: "Conducted competitor analysis showing no major platform integrated career development + job search + skill certification. Repositioned as 'career development ecosystem' not 'job platform'",
            result: "Judges praised our integrated approach and clear differentiation"
          },
          {
            title: "Balancing Vision vs. Realistic MVP",
            problem: "Team had ambitious ideas: AI matching, VR job fairs, predictive algorithms. Limited 3-month timeline.",
            solution: "Facilitated MoSCoW prioritization workshop. Categorized features by user value, differentiation, feasibility, and competitive gap. Three core features emerged because no competitor offered all three integrated.",
            result: "Clear roadmap impressed judges with realistic execution plan"
          },
          {
            title: "Proving Financial Viability",
            problem: "How to convince judges that complex multi-sided platform can acquire users and generate revenue?",
            solution: "Built detailed CAC model, AIDA-based marketing funnel with conversion assumptions, partnership ROI projections showing university collaborations reduce CAC",
            result: "Judges appreciated realistic yet ambitious projections showing profitability by Year 3"
          }
        ],
        
        learnings: [
          "Strategic market positioning is as important as product features",
          "Partnership-driven growth can significantly reduce customer acquisition costs",
          "MoSCoW prioritization helps balance ideal vision with realistic execution",
          "Execution credibility matters as much as idea quality in competitions",
          "User validation should start Week 1, not Week 3"
        ],
        
        technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Figma", "Notion", "Google Analytics"],
        
        metrics: {
          tam: "300M users globally",
          sam: "22M users Indonesia",
          som: "200K-500K in 3 years",
          conversion: "30% premium target",
          irr: "45%",
          roi: "55%",
          payback: "2.2 years"
        }
      },

      'styleme': {
        type: 'pm',
        title: "StyleMe",
        tagline: "When 'Nothing to Wear' Meets 'What to Wear Next'",
        category: "Fashion-Tech Platform",
        role: "Strategy & Product Lead",
        context: "Business Plan Competition - EBI Fest 2025 | 3-person team",
        achievement: "🏆 Top 7 Finalist",
        timeline: "12 months",
        teamSize: "3 people (CEO, CTO, CMO)",
        
        bannerImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558769132-cb1aea3c8c7f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop",
        ],
        
        overview: `StyleMe is Indonesia's first hybrid fashion assistant that combines AI-powered outfit recommendations with professional human stylist consultations. As CEO, I led the product vision, team coordination, and strategic decisions that earned us Top 7 Finalist position in BPC EBI Fest 2025.

The Problem: Gen Z in Indonesia faces "decision fatigue" - standing in front of full closets feeling like they have "nothing to wear." 88% of Gen Z consider fashion important, yet 64.4% spend less than Rp 500k per shopping trip while constantly feeling stuck in style ruts.

Our Innovation: StyleMe introduced a hybrid model combining AI efficiency (for daily outfit suggestions from digital wardrobe) with human nuance (professional stylists for important occasions). This differentiation addressed the gap we found: pure AI apps sometimes give "horrendous" recommendations, while human stylists are too expensive for daily use.

Market Opportunity: Indonesia's fashion e-commerce market is Rp 232 trillion, with 87.5-88% cart abandonment rate indicating massive decision uncertainty that StyleMe directly addresses.`,
        
        problem: "Decision fatigue from overchoice, pressure to meet social media aesthetic standards, 88% cart abandonment in fashion e-commerce due to styling uncertainty.",
        
        approach: `As CEO, I drove strategic decisions:
• Conducted primary research with 3 users (Rheina, Asma, Devi) to validate "nothing to wear" problem
• Identified competitive gap: no platform offered hybrid AI + human stylist model
• Defined freemium strategy: AI features free, human consultation premium (Rp 30k-50k/month)
• Positioned as solution to 88% cart abandonment through style validation`,
        
        myRole: [
          "Led product vision and strategic direction as CEO",
          "Conducted primary user research validating core problem",
          "Decided on hybrid AI + human stylist differentiation strategy",
          "Coordinated cross-functional team (CTO handling tech, CMO handling marketing)",
          "Made key decisions on freemium vs. premium feature split",
          "Presented pitch at BPC EBI Fest (secured Top 7 finalist)",
          "Developed financial projections (IRR 43%, ROI 25%, PBP 1.5 years)"
        ],
        
        keyFeatures: [
          "ClosetSnap - Upload clothes to AI-powered digital wardrobe",
          "SmartMatch - AI stylist for automatic mix & match recommendations",
          "StyleShare - Save and share favorite outfit combinations",
          "TrendTalks - Fashion trend articles and updates",
          "ProStylist (Premium) - Consultation with professional human stylists",
          "Mix & Match Challenge - Gamified styling for engagement"
        ],
        
        impact: [
          "🏆 Top 7 Finalist out of hundreds of teams in BPC EBI Fest 2025",
          "Identified unique market positioning: first hybrid AI + human in Indonesia",
          "Validated problem through primary research with real users",
          "TAM: Rp 232T Indonesian fashion e-commerce market",
          "SAM: Rp 194T Pulau Jawa market (83.8% of TAM)",
          "SOM: Rp 19.4T realistic target (10% of SAM in 3 years)"
        ],
        
        challenges: [
          {
            title: "Proving Hybrid Model Viability",
            problem: "Why would users pay for human stylists when AI is free?",
            solution: "Research showed AI-only apps give inconsistent recommendations. Positioned human stylists for high-stakes moments (job interviews, dates, important events) where emotional stakes are high. Offered affordable pricing (Rp 30k-50k/month) vs. traditional stylists (Rp 500k+).",
            result: "Judges appreciated nuanced understanding of when AI falls short and human touch matters"
          },
          {
            title: "Addressing 88% Cart Abandonment",
            problem: "Fashion e-commerce has massive abandonment - how does StyleMe solve this?",
            solution: "StyleMe provides 'style validation' before purchase. Users can see how items fit into their existing wardrobe through AI suggestions, reducing uncertainty. Integrated affiliate model where users can buy directly from recommendations.",
            result: "Clear value proposition connecting product to major market pain point"
          }
        ],
        
        learnings: [
          "Hybrid models can differentiate in AI-dominated spaces by adding human nuance",
          "User research with just 3-5 users can provide powerful validation stories",
          "Freemium pricing requires careful thought about what creates enough value gap to convert",
          "Addressing market-level problems (cart abandonment) makes business case stronger",
          "Even reaching Top 7 (not winning) provides valuable validation and learning"
        ],
        
        technologies: ["React Native", "TensorFlow", "Python", "Firebase", "Figma", "Google Cloud Vision AI"],
        
        metrics: {
          tam: "Rp 232.28T Indonesia",
          sam: "Rp 194.68T Pulau Jawa",
          som: "Rp 19.47T (10% in 3yr)",
          year1Revenue: "Rp 101.35M",
          irr: "43%",
          roi: "25%",
          payback: "1.5 years"
        }
      },

      'saveup': {
        type: 'pm',
        title: "SaveUp",
        tagline: "Smart Habits for Your Brighter Financial Future",
        category: "Fintech App",
        role: "Product Manager",
        context: "Internal Organization Competition (HackJam #14) | 3-person team",
        achievement: "🎯 Completed MVP Prototype",
        timeline: "Sprint-based (Agile)",
        teamSize: "3 people (PM, UI/UX Designer, Programmer)",
        
        bannerImage: "https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?q=80&w=2000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1579621970563-ebec7560eb3e?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
        ],
        
        overview: `SaveUp is an AI-powered money management app designed to help Gen Z build healthy financial habits. As Product Manager, I led the product definition, feature prioritization, and Agile development process for this internal hackathon project.

The Problem: Indonesia's financial literacy index is 65.43%, but Gen Z (ages 15-17) scores only 51.7%. 41% of Gen Z struggle to save due to impulsive spending driven by FOMO and YOLO culture. More than 50% run out of money before month-end, and 1 in 3 have consumer debt from paylater/credit.

Our Solution: SaveUp makes financial tracking effortless through AI-powered receipt scanning, chatbot-based expense logging, and visual cash flow tracking. It addresses the core issue: Gen Z know they should track expenses, but find manual entry too tedious to maintain consistently.

This project aligned with SDG 12 (Responsible Consumption and Production), promoting mindful spending habits among young people.`,
        
        problem: "Low financial literacy (51.7% for Gen Z), impulsive spending driven by FOMO, 50%+ running out of money before month-end, tedious manual expense tracking leading to inconsistency.",
        
        approach: `As Product Manager, I:
• Defined product vision and MVP scope (3 core features: ScanMe, AssistMe, TrackMe)
• Conducted user research through empathy mapping and persona development
• Facilitated Agile Scrum sprints for rapid prototyping
• Collaborated with UI/UX designer on design system and user flows`,
        
        myRole: [
          "Defined product vision and MVP scope as Product Manager",
          "Created user personas (Eryca - Student, Rheina - Entrepreneur)",
          "Developed empathy maps to understand user behaviors and pain points",
          "Facilitated Agile Scrum process with 2-week sprint cycles",
          "Wrote user stories and acceptance criteria for each feature",
          "Collaborated with UI/UX designer on wireframes and design system",
          "Coordinated with developer on technical implementation",
          "Conducted user testing sessions and gathered feedback"
        ],
        
        keyFeatures: [
          "ScanMe - AI-powered receipt scanning for automatic expense logging",
          "AssistMe - Chatbot assistant for quick expense entry via natural language",
          "TrackMe - Visual cash flow tracking with weekly/monthly graphs",
          "Budget alerts and notifications when approaching spending limits",
          "Expense categorization (food, transport, entertainment, etc.)",
          "Simple, Gen Z-friendly interface with minimal friction"
        ],
        
        impact: [
          "🎯 Successfully completed MVP prototype in internal hackathon",
          "Validated problem-solution fit through user testing with target demographic",
          "Demonstrated Agile/Scrum methodology in compressed timeline",
          "Addressed SDG 12 (Responsible Consumption) through conscious spending promotion",
          "TAM: 749k Indonesian Gen Z users (18-25), Rp 74.9B market"
        ],
        
        challenges: [
          {
            title: "Defining MVP in Tight Timeline",
            problem: "Limited hackathon timeframe. Team wanted many features: multi-account support, e-wallet integration, advanced analytics.",
            solution: "As PM, I facilitated prioritization workshop. Focused on 3 core features (Scan, Assist, Track) that directly address main pain point: tedious manual entry. Put other features in 'Future Development' backlog.",
            result: "Delivered working prototype that demonstrated core value proposition within deadline"
          },
          {
            title: "Making Finance Tracking 'Fun' for Gen Z",
            problem: "Gen Z find traditional finance apps boring and intimidating.",
            solution: "Collaborated with UI/UX designer on friendly, approachable design system. Used conversational chatbot (AssistMe) to make tracking feel like texting a friend. Simple graphs (not complex tables) for TrackMe. Avoided finance jargon.",
            result: "User testing showed positive response to 'non-intimidating' and 'actually want to use this' feedback"
          }
        ],
        
        learnings: [
          "Agile methodology forces ruthless prioritization - good constraint for product clarity",
          "User personas and empathy maps are invaluable for team alignment on 'who we're building for'",
          "Working with designer and developer taught cross-functional communication skills",
          "Internal hackathons are great for rapid prototyping and validation before full investment",
          "Gen Z products need to feel 'effortless' - every extra tap is a barrier to adoption"
        ],
        
        technologies: ["React Native", "Python (OCR)", "Firebase", "Figma", "Natural Language Processing", "Chart.js"],
        
        metrics: {
          tam: "749K Gen Z (18-25)",
          sam: "55K East Java",
          som: "2.2K in 1-2 years",
          literacyRate: "51.7% Gen Z",
          savingDifficulty: "41% struggle",
          deficit: "50%+ run out monthly"
        }
      },

      // ==================== FE PROJECTS ====================
      'personalsite-v1': {
        type: 'fe',
        title: "PersonalSite-v1",
        tagline: "Modern Portfolio Crafted with Performance & Motion in Mind",
        description: `My personal portfolio website built to showcase projects and PM case studies with a focus on performance, accessibility, and delightful user experience.

Built with modern React ecosystem, featuring smooth animations powered by Framer Motion, responsive design with Tailwind CSS, and polished UI components from shadcn/ui. The site achieves 95+ Lighthouse scores across all metrics while maintaining fluid interactions.

This project demonstrates my frontend development capabilities alongside PM work, showing technical execution skills that complement strategic product thinking.`,
        
        bannerImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2000&auto=format&fit=crop",
        ],
        
        features: [
          "Fully responsive design - seamless experience across mobile, tablet, and desktop",
          "Smooth page transitions and micro-interactions powered by Framer Motion",
          "SEO optimized with meta tags, Open Graph, and semantic HTML",
          "Fast performance with code splitting and lazy loading (95+ Lighthouse score)",
          "Dynamic project showcase with case study integration",
          "Accessible UI following WCAG guidelines with keyboard navigation support"
        ],
        
        technologies: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "React Router", "Vite"],
        
        highlights: [
          "Implemented custom animation sequences for smooth, purposeful page transitions",
          "Optimized bundle size through code splitting, reducing initial load to <100KB",
          "Built reusable component system using shadcn/ui for consistent design language",
          "Achieved 95+ Lighthouse scores across Performance, Accessibility, Best Practices, and SEO",
          "Designed mobile-first responsive layouts that adapt fluidly to any screen size"
        ],
        
        liveUrl: "https://your-deployed-site.vercel.app", // ← REPLACE with your actual URL
        repoUrl: "https://github.com/yourusername/personalsite-v1", // ← REPLACE with your actual repo
        
        myRole: "Frontend Developer & Designer",
        timeline: "2 months (ongoing iterations)"
      },

      'your-fe-project': {
        type: 'fe', // ← Different type!
        title: "Your Frontend Project",
        tagline: "Descriptive tagline here",
        description: "Full project description focusing on technical implementation, challenges solved, and technologies used.",
        
        bannerImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
        ],
        
        features: [
          "Feature 1 - Description",
          "Feature 2 - Description",
          "Feature 3 - Description",
          "Feature 4 - Description"
        ],
        
        technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
        
        highlights: [
          "Technical challenge 1 and how you solved it",
          "Performance optimization achieved",
          "Interesting implementation detail",
          "Key learning or innovation"
        ],
        
        // FE-specific fields
        liveUrl: "https://your-project.com",
        repoUrl: "https://github.com/yourusername/project",
        
        myRole: "Full Stack Developer / Frontend Developer",
        timeline: "2 months"
      }
    };
  
    const project = projectsData[projectId];

    if (!project) {
      return (
        <div className="min-h-screen bg-[#0F172A] flex items-center justify-center text-[#F8FAFC] px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-slate-400 mb-6">The project "{projectId}" doesn't exist.</p>
            <Link to="/#projects" className="text-[#F1A7C6] hover:underline">
              ← Back to Projects
            </Link>
          </div>
        </div>
      );
    }

    // ==================== CONDITIONAL RENDERING ====================
    // Render different layouts based on project type
    
    if (project.type === 'fe') {
      // FE PROJECT LAYOUT
      return (
        <section className="min-h-screen bg-[#0F172A] text-slate-100 pt-28 pb-12 lg:pt-20 px-4 md:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div>
              <Link 
                to="/#projects" 
                className="inline-flex items-center gap-2 mb-6 text-slate-400 hover:text-[#F8FAFC] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-2">{project.title}</h1>
              <p className="text-xl text-slate-400">{project.tagline}</p>
            </div>

            {/* Image Carousel */}
            <div className="w-full">
                {project.images && project.images.length > 0 ? (
                    <Carousel className="w-full rounded-xl overflow-hidden border border-slate-800 bg-[#1E293B]">
                        <CarouselContent>
                            {project.images.map((img, index) => (
                                <CarouselItem key={index}>
                                    <div className="aspect-video w-full relative">
                                        <img 
                                            src={img} 
                                            alt={`${project.title} screenshot ${index + 1}`} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-slate-900/50 hover:bg-slate-900 border-slate-700 text-[#F8FAFC]" />
                        <CarouselNext className="right-4 bg-slate-900/50 hover:bg-slate-900 border-slate-700 text-[#F8FAFC]" />
                    </Carousel>
                ) : (
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#1E293B] aspect-video w-full relative">
                        <img 
                            src={project.bannerImage} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* About the Project */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">About the Project</h3>
                    <div className="text-slate-300 leading-relaxed whitespace-pre-line text-sm">
                      {project.description}
                    </div>
                  </CardContent>
                </Card>

                {/* Key Features */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#F1A7C6] shrink-0 mt-0.5" /> 
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Highlights */}
                {project.highlights && (
                  <Card className="bg-[#1E293B] border-slate-700">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Highlights</h3>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#F1A7C6] mt-1">•</span>
                            <span className="text-slate-300 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                
                {/* Technologies */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">Technologies</h3>
                    <p className="text-xs text-slate-400 mb-3">Built with</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="bg-slate-900/60 border border-slate-600 text-slate-300 px-2 py-1 text-xs font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Project Links */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-3">Links</h3>
                    <div className="flex flex-col gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full border border-[#F1A7C6]/30 bg-[#F1A7C6]/10 text-[#F1A7C6] hover:bg-[#F1A7C6]/20 hover:border-[#F1A7C6]/50 font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 text-sm"
                        >
                          <ExternalLink className="h-4 w-4" /> View Live Demo
                        </a>
                      )}
                      
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full border border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:border-slate-500 font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 text-sm"
                        >
                          <Github className="h-4 w-4" /> View Source Code
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* My Role */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">My Role</h3>
                    <p className="text-sm text-[#F1A7C6] mb-2">{project.myRole}</p>
                    {project.timeline && (
                      <p className="text-xs text-slate-400">Timeline: {project.timeline}</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // ==================== PM PROJECT LAYOUT (DEFAULT) ====================
    return (
        <section className="min-h-screen bg-[#0F172A] text-slate-100 pt-28 pb-12 lg:pt-20 px-4 md:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto space-y-8">            
            
            {/* Header */}
            <div>
              <Link 
                to="/#projects" 
                className="inline-flex items-center gap-2 mb-6 text-slate-400 hover:text-[#F8FAFC] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Link>
              
              {/* Achievement Badge */}
              {project.achievement && (
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-[#F1A7C6]/10 border border-[#F1A7C6]/30 rounded-full">
                  <Award className="h-4 w-4 text-[#F1A7C6]" />
                  <span className="text-sm font-medium text-[#F1A7C6]">{project.achievement}</span>
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-2">{project.title}</h1>
              <p className="text-xl text-slate-400 mb-4">{project.tagline}</p>
              
              {/* Meta info */}
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-[#F1A7C6]" />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#F1A7C6]" />
                  <span>{project.teamSize}</span>
                </div>
                <div>
                  <span className="text-slate-500">•</span> {project.timeline}
                </div>
              </div>
            </div>
    
            {/* Image Carousel */}
            <div className="w-full">
                {project.images && project.images.length > 0 ? (
                    <Carousel className="w-full rounded-xl overflow-hidden border border-slate-800 bg-[#1E293B]">
                        <CarouselContent>
                            {project.images.map((img, index) => (
                                <CarouselItem key={index}>
                                    <div className="aspect-video w-full relative">
                                        <img 
                                            src={img} 
                                            alt={`${project.title} visual ${index + 1}`} 
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-slate-900/80 hover:bg-slate-900 border-slate-700 text-[#F8FAFC]" />
                        <CarouselNext className="right-4 bg-slate-900/80 hover:bg-slate-900 border-slate-700 text-[#F8FAFC]" />
                    </Carousel>
                ) : (
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#1E293B] aspect-video w-full relative">
                        <img 
                            src={project.bannerImage} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>
    
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Context */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-[#F1A7C6]/10 rounded-lg">
                        <Target className="h-5 w-5 text-[#F1A7C6]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#F8FAFC]">Competition Context</h3>
                        <p className="text-sm text-slate-400">{project.context}</p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">
                      {project.category}
                    </p>
                  </CardContent>
                </Card>

                {/* Overview */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Project Overview</h3>
                    <div className="text-slate-300 leading-relaxed whitespace-pre-line text-sm">
                      {project.overview}
                    </div>
                  </CardContent>
                </Card>

                {/* Problem & Approach */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Problem & Approach</h3>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#F1A7C6] mb-2">The Problem</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#F1A7C6] mb-2">My Approach</h4>
                      <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                        {project.approach}
                      </div>
                    </div>
                  </CardContent>
                </Card>
    
                {/* Key Features */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#F1A7C6] shrink-0 mt-0.5" /> 
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <Card className="bg-[#1E293B] border-slate-700">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Challenges & Solutions</h3>
                      <div className="space-y-4">
                        {project.challenges.map((challenge, idx) => (
                          <div key={idx} className="border-l-2 border-[#F1A7C6] pl-4">
                            <h4 className="font-semibold text-[#F8FAFC] mb-2 text-sm">{challenge.title}</h4>
                            <div className="space-y-2 text-xs">
                              <div>
                                <span className="text-slate-400 font-medium">Problem:</span>
                                <p className="text-slate-300 mt-1">{challenge.problem}</p>
                              </div>
                              <div>
                                <span className="text-slate-400 font-medium">Solution:</span>
                                <p className="text-slate-300 mt-1">{challenge.solution}</p>
                              </div>
                              <div>
                                <span className="text-[#F1A7C6] font-medium">Result:</span>
                                <p className="text-slate-300 mt-1">{challenge.result}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Impact */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-[#F1A7C6]/10 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-[#F1A7C6]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#F8FAFC]">Impact & Results</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.impact.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#F1A7C6] shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Learnings */}
                {project.learnings && project.learnings.length > 0 && (
                  <Card className="bg-[#1E293B] border-slate-700">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-[#F1A7C6]/10 rounded-lg">
                          <Lightbulb className="h-5 w-5 text-[#F1A7C6]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#F8FAFC]">Key Learnings</h3>
                      </div>
                      <ul className="space-y-2">
                        {project.learnings.map((learning, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#F1A7C6] mt-1">•</span>
                            <span className="text-slate-300 text-sm">{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
    
              {/* Right Sidebar */}
              <div className="space-y-6">
                
                {/* My Role */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">My Role</h3>
                    <p className="text-sm text-[#F1A7C6] mb-3">{project.role}</p>
                    <ul className="space-y-2">
                      {project.myRole.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="h-3 w-3 text-[#F1A7C6] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Metrics */}
                {project.metrics && (
                  <Card className="bg-[#1E293B] border-slate-700">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-[#F8FAFC] mb-3">Key Metrics</h3>
                      <div className="space-y-3">
                        {Object.entries(project.metrics).map(([key, value], idx) => (
                          <div key={idx} className="flex justify-between items-start gap-2">
                            <span className="text-xs text-slate-400 uppercase tracking-wide">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className="text-xs font-semibold text-[#F8FAFC] text-right">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {/* Technologies */}
                <Card className="bg-[#1E293B] border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">Technologies</h3>
                    <p className="text-xs text-slate-400 mb-3">Built with</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="bg-slate-900/60 border border-slate-600 text-slate-300 px-2 py-1 text-xs font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    export default ProjectDetail;