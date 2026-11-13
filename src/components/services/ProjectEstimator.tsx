import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldAlert } from 'lucide-react';
import { pricingConfig } from '../../config/pricingConfig';
import { Button } from '../ui/Button';

export const ProjectEstimator: React.FC = () => {
  const navigate = useNavigate();

  const [websiteType, setWebsiteType] = useState('business');
  const [scope, setScope] = useState('growth');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo', 'booking']);
  const [timeline, setTimeline] = useState('standard');

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculation
  const selectedTypeData = pricingConfig.websiteTypes[websiteType];
  const selectedScopeData = pricingConfig.scopes[scope];
  const selectedTimelineData = pricingConfig.timelines[timeline];

  const basePrice = selectedTypeData.basePrice;
  const scopeMultiplier = selectedScopeData.multiplier;
  const timelineMultiplier = selectedTimelineData.multiplier;

  const addonsTotal = selectedAddons.reduce((acc, curr) => {
    const item = pricingConfig.addons.find((a) => a.id === curr);
    return acc + (item ? item.price : 0);
  }, 0);

  const rawTotal = Math.round((basePrice * scopeMultiplier + addonsTotal) * timelineMultiplier);
  // Round to nearest 500
  const estimatedMin = Math.round(rawTotal * 0.9 / 500) * 500;
  const estimatedMax = Math.round(rawTotal * 1.15 / 500) * 500;

  const handleRequestQuote = () => {
    const query = new URLSearchParams({
      service: websiteType,
      scope: scope,
      budget: `${pricingConfig.currencySymbol}${estimatedMin.toLocaleString('en-IN')} – ${pricingConfig.currencySymbol}${estimatedMax.toLocaleString('en-IN')}`,
      timeline: timeline,
      addons: selectedAddons.join(',')
    }).toString();

    navigate(`/contact?${query}`);
  };

  return (
    <div id="project-estimator" className="bg-[#111111] border border-[#242424] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <span className="p-2 rounded-xl bg-[#1A1A1A] border border-[#333333] text-[#FF7518]">
          <Calculator className="w-5 h-5" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-[#FFAD33]">
          Interactive Project Estimator
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
        Estimate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33]">Website Investment</span>
      </h3>
      <p className="text-sm text-[#B0B0B0] mb-8">
        Transparent, realistic estimates without hidden agency surprises. Configure your requirements below:
      </p>

      <div className="space-y-8">
        {/* Step 1: Website Type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3">
            Step 1 — Website Type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(pricingConfig.websiteTypes).map(([key, val]) => (
              <button
                key={key}
                type="button"
                onClick={() => setWebsiteType(key)}
                className={`p-3.5 rounded-2xl text-left border text-xs transition-all ${
                  websiteType === key
                    ? 'bg-[#1C1C1C] border-[#FF7518] text-white shadow-[0_0_15px_rgba(255,117,24,0.2)]'
                    : 'bg-[#141414] border-[#222222] text-[#B0B0B0] hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="font-bold text-sm text-white mb-1">{val.label}</div>
                <div className="text-[11px] text-[#8E8E8E] leading-relaxed line-clamp-2">{val.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Project Scope */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3">
            Step 2 — Project Scope
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {Object.entries(pricingConfig.scopes).map(([key, val]) => (
              <button
                key={key}
                type="button"
                onClick={() => setScope(key)}
                className={`p-3.5 rounded-2xl text-left border text-xs transition-all ${
                  scope === key
                    ? 'bg-[#1C1C1C] border-[#FF7518] text-white shadow-[0_0_15px_rgba(255,117,24,0.2)]'
                    : 'bg-[#141414] border-[#222222] text-[#B0B0B0] hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-white">{val.label}</span>
                  <span className="text-[10px] text-[#FFAD33]">{val.turnaround}</span>
                </div>
                <div className="text-[11px] text-[#8E8E8E] leading-relaxed">{val.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Add-On Features */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3">
            Step 3 — Recommended Add-On Features (Multi-Select)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {pricingConfig.addons.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3 rounded-xl border flex items-start justify-between cursor-pointer transition-all select-none ${
                    isSelected
                      ? 'bg-[#181818] border-[#FF7518]/70 text-white'
                      : 'bg-[#141414] border-[#222222] text-[#8E8E8E] hover:border-white/20'
                  }`}
                >
                  <div className="pr-2">
                    <span className="text-xs font-bold block text-white">{addon.name}</span>
                    <span className="text-[10px] text-[#8E8E8E] leading-tight block mt-0.5">{addon.description}</span>
                  </div>
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border flex-shrink-0 ${
                      isSelected
                        ? 'bg-[#FF7518] border-[#FF7518] text-black'
                        : 'border-[#444444]'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 4: Timeline */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3">
            Step 4 — Desired Timeline
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {Object.entries(pricingConfig.timelines).map(([key, val]) => (
              <button
                key={key}
                type="button"
                onClick={() => setTimeline(key)}
                className={`p-3 rounded-xl text-left border text-xs transition-all ${
                  timeline === key
                    ? 'bg-[#1C1C1C] border-[#FF7518] text-white shadow-[0_0_12px_rgba(255,117,24,0.2)]'
                    : 'bg-[#141414] border-[#222222] text-[#B0B0B0] hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="font-bold text-white mb-0.5">{val.label}</div>
                <div className="text-[10px] text-[#8E8E8E]">{val.note}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Output Estimation Box */}
        <div className="pt-6 border-t border-[#222222] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-[#0B0B0B] p-6 rounded-2xl border border-[#1E1E1E]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF7518]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#B0B0B0]">
                Indicative Estimate Range
              </span>
            </div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7518] to-[#FFAD33] font-display">
                {pricingConfig.currencySymbol}{estimatedMin.toLocaleString('en-IN')} – {pricingConfig.currencySymbol}{estimatedMax.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#8E8E8E] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#FFAD33]" />
                Est. Turnaround: {selectedScopeData.turnaround}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#777777] pt-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>*Illustrative estimate for planning purposes. Final commercial scope is confirmed in discovery.</span>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={handleRequestQuote}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="w-full lg:w-auto"
          >
            Request a Detailed Quote
          </Button>
        </div>
      </div>
    </div>
  );
};
