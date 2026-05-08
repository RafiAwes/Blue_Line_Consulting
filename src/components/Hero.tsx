import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FileText, Layout, Users, BarChart3 } from 'lucide-react';

export const Hero = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-brand-blue" />,
      title: "LLC FORMATION",
      description: "We make it simple to form your LLC and get your business legally registered."
    },
    {
      icon: <Layout className="w-8 h-8 text-brand-blue" />,
      title: "WEBSITE DESIGN",
      description: "Professional, modern websites that build trust and convert visitors into customers."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-blue" />,
      title: "LEAD GENERATION",
      description: "Targeted strategies that attract quality leads and help you grow faster."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-brand-blue" />,
      title: "BUSINESS SUPPORT",
      description: "Ongoing support and guidance so you can focus on running your business."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Main Hero Split Area */}
      <div className="relative h-[70vh] lg:h-[80vh] flex items-center">
        {/* Background Image (Right Side) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Business Workspace" 
            className="w-full h-full object-cover object-right lg:object-center"
          />
          <div className="absolute inset-0 bg-slate-900/10 lg:bg-transparent" />
        </div>

        {/* Diagonal Overlays (LG only) */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          {/* Blue Stripe */}
          <div 
            className="absolute inset-y-0 left-0 w-full bg-brand-blue z-20"
            style={{ clipPath: 'polygon(0 0, 77% 0, 52% 100%, 0 100%)' }}
          />
          {/* White Overlay */}
          <div 
            className="absolute inset-y-0 left-0 w-full bg-white z-30"
            style={{ clipPath: 'polygon(0 0, 75% 0, 50% 100%, 0 100%)' }}
          />
        </div>

        {/* Mobile White Overlay */}
        <div className="absolute inset-0 z-10 bg-white/90 lg:hidden" />

        {/* Hero Content */}
        <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col space-y-8 lg:pl-8 lg:border-l-2 border-brand-blue/20 items-start text-left"
            >
              <div className="space-y-6">
                <h1 className="heading-serif text-4xl sm:text-5xl md:text-7xl font-bold text-brand-dark leading-[1.1]">
                  We Help You <br className="hidden sm:block" />
                  Build Your <br className="hidden sm:block" />
                  <span className="text-brand-blue relative inline-block">
                    Business.
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-blue" />
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-500 max-w-sm leading-relaxed font-medium mx-0">
                  Blu Line Consulting Group provides everything <br className="hidden md:block" />
                  you need to launch, grow, and scale your <br className="hidden md:block" />
                  business with confidence.
                </p>
              </div>
              
              <div>
                <Link to="/get-started">
                  <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 sm:px-10 py-4 text-sm sm:text-base font-bold tracking-wider rounded-sm shadow-lg hover:shadow-xl transition-all">
                    GET STARTED TODAY
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="relative z-40 bg-[#F0F7FF] border-t border-slate-100 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-0">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start space-x-4 group cursor-default ${
                  index !== features.length - 1 ? 'lg:border-r lg:border-slate-300/50' : ''
                } ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'} lg:px-8`}
              >
                <div className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-[13px] tracking-widest text-brand-dark uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-slate-500 font-medium max-w-[180px]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
