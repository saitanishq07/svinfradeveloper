import React from 'react';
import { Building2, Target, Eye, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

const CompanyProfile = () => {
  return (
    <section id="company-profile" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-200/80 border border-slate-300 mb-3">
            <Building2 className="w-4 h-4 text-logo-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-logo-blue">
              Corporate Profile
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-logo-graphite tracking-tight mb-4">
            About <span className="text-logo-blue">SV Infra Developers</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Rapidly growing infrastructure company headquartered in Hyderabad, delivering specialized engineering services across South India.
          </p>
          <div className="w-20 h-1 bg-logo-blue mx-auto rounded-full mt-4" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Machinery Visual + Specs List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <img
                src="/sai-kishore.jpg"
                alt="Mr. K. Sai Kishore - Founder & Managing Director"
                className="w-full h-[380px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-extrabold uppercase tracking-wider text-logo-cyan mb-1">
                  Founder & Managing Director
                </div>
                <div className="text-lg font-extrabold">
                  Mr. K. Sai Kishore
                </div>
              </div>
            </div>

            {/* Quick Fact Sheet Box */}
            <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-logo-blue border-b border-slate-100 pb-3 flex items-center">
                <ShieldCheck className="w-4 h-4 mr-2 text-emerald-600" />
                Verified Corporate Metadata
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Founder & Director</span>
                  <span className="font-bold text-slate-900">{companyData.founder}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Year Established</span>
                  <span className="font-bold text-logo-blue">{companyData.establishedYear}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Annual Turnover</span>
                  <span className="font-bold text-slate-900">{companyData.turnover}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Safety Record</span>
                  <span className="font-bold text-emerald-600">100% Incident Free</span>
                </div>
                <div className="flex justify-between items-start py-1.5">
                  <span className="text-slate-500 font-medium flex-shrink-0">Headquarters</span>
                  <span className="font-bold text-slate-900 text-right ml-4">{companyData.shortAddress}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Mission, Vision & Timeline */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Overview */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-2xl font-bold text-logo-graphite">Company Overview</h3>
              <p className="text-slate-700 leading-relaxed text-base">
                Established in 2023 by Mr. K. Sai Kishore, SV Infra Developers is a rapidly growing infrastructure company with a turnover of ₹1.5 Crores. We specialize in control blasting, open blasting, chemical blasting, earthwork excavations, road works, and canal works.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                With a strong focus on safety, precision, and quality, we deliver reliable engineering solutions that drive progress and sustainability. Our mission is to build enduring infrastructure through innovation, expertise, and a commitment to excellence in every project.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-logo-blue text-white flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-logo-graphite">Our Mission</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {companyData.mission}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-logo-blue text-white flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-logo-graphite">Our Vision</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {companyData.vision}
                </p>
              </div>
            </div>

            {/* Growth Timeline */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-logo-graphite">Growth Milestones</h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                
                <div className="relative flex items-start space-x-4 pl-8">
                  <div className="absolute left-0 w-7 h-7 rounded-full bg-logo-blue text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    1
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-logo-blue uppercase tracking-wider">2023 — Establishment</div>
                    <div className="text-sm font-bold text-slate-900">Founded by Mr. K. Sai Kishore</div>
                    <p className="text-xs text-slate-600 mt-1">Incorporated with a vision to provide precision blasting and earthwork solutions for major civil projects.</p>
                  </div>
                </div>

                <div className="relative flex items-start space-x-4 pl-8">
                  <div className="absolute left-0 w-7 h-7 rounded-full bg-logo-graphite text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    2
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-logo-blue uppercase tracking-wider">2023 to Present — Expansion</div>
                    <div className="text-sm font-bold text-slate-900">Achieved ₹1.5 Crore Annual Turnover</div>
                    <p className="text-xs text-slate-600 mt-1">Expanded operational fleet into 6 core infrastructure domains and secured partnerships with MEIL, NCC, Aparna, and State Governments.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyProfile;
