import React, { useState, useEffect, useRef } from 'react';
import { Calendar, TrendingUp, Briefcase, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

const iconMap = {
  Calendar,
  TrendingUp,
  Briefcase,
  ShieldCheck,
};

const StatCard = ({ stat, index }) => {
  const IconComponent = iconMap[stat.icon] || TrendingUp;
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = stat.numeric;
          const duration = 1500;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(stat.isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [stat.numeric, stat.isDecimal, hasAnimated]);

  const displayValue = stat.isYear
    ? count || stat.value
    : `${stat.prefix || ''}${stat.isDecimal ? (count >= stat.numeric ? stat.numeric : count.toFixed(1)) : count}${stat.suffix || ''}`;

  return (
    <div
      ref={cardRef}
      className="relative bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
    >
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-slate-100 rounded-full blur-xl group-hover:bg-logo-blue/10 transition-colors" />

      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-logo-blue group-hover:bg-logo-blue group-hover:text-white transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
          0{index + 1}
        </span>
      </div>

      <div className="text-4xl sm:text-5xl font-black text-logo-graphite tracking-tight mb-2 group-hover:text-logo-blue transition-colors">
        {displayValue}
      </div>

      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {stat.label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-slate-100 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
