import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface AddonOption {
  id: string;
  name: string;
  priceEstimate: number;
}

export const QuoteCalculator: React.FC = () => {
  const navigate = useNavigate();

  const [serviceType, setServiceType] = useState('business');
  const [pagesCount, setPagesCount] = useState('1-5');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo', 'responsive']);

  const serviceBases: Record<string, { label: string; base: number; weeks: string }> = {
    business: { label: 'Business Website', base: 799, weeks: '2-3 weeks' },
    restaurant: { label: 'Cafe & Restaurant Website', base: 699, weeks: '2 weeks' },
    ecommerce: { label: 'E-Commerce Storefront', base: 1299, weeks: '3-4 weeks' },
    portfolio: { label: 'Portfolio & Personal', base: 499, weeks: '1-2 weeks' },
    custom: { label: 'Custom Web Application', base: 1899, weeks: '4-6 weeks' }
  };

  const pagesMultiplier: Record<string, number> = {
    '1-5': 1.0,
    '6-10': 1.35,
    '11-20': 1.7,
    '20+': 2.2
  };

  const addonsList: AddonOption[] = [
    { id: 'seo', name: 'Advanced SEO & Schema Indexing', priceEstimate: 199 },
    { id: 'direct-chat', name: 'Instant Social DM & Click-to-Chat CRM Funnel', priceEstimate: 99 },
    { id: 'responsive', name: 'Full Responsive Optimization across 5 Devices', priceEstimate: 149 },
    { id: 'speed', name: 'Core Web Vitals & Sub-Second Optimization', priceEstimate: 199 },
    { id: 'content', name: 'Copywriting & Content Architecture', priceEstimate: 249 },
    { id: 'support', name: 'First 3 Months Priority Support Retainer', priceEstimate: 299 }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate ballpark
  const baseCost = serviceBases[serviceType].base;
  const multiplier = pagesMultiplier[pagesCount];
  const addonsCost = selectedAddons.reduce((acc, curr) => {
    const item = addonsList.find((a) => a.id === curr);
    return acc + (item ? item.priceEstimate : 0);
  }, 0);

  const estimatedTotal = Math.round(baseCost * multiplier + addonsCost);

  const handleProceed = () => {
    const query = new URLSearchParams({
      service: serviceType,
      pages: pagesCount,
      budget: `$${estimatedTotal}`
    }).toString();
    navigate(`/contact?${query}`);
  };

  return (
    <div className="bg-[#111111] border border-[#242424] rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <span className="p-2 rounded-xl bg-[#1A1A1A] border border-[#333333] text-[#FF7518]">
          <Calculator className="w-5 h-5" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-[#FFAD33]">
          Interactive Project Estimator
        </span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
        Estimate Your <span className="text-[#FF7518]">Website Investment</span>
      </h3>
      <p className="text-sm text-[#B0B0B0] mb-8">
        Transparent, realistic estimates without hidden agency surprises. Configure your requirements below:
      </p>

      <div className="space-y-6">
        {/* Step 1: Project Type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3">
            1. Select Project Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {Object.entries(serviceBases).map(([key, val]) => (
              <button
                key={key}
                type="button"
                onClick={() => setServiceType(key)}
                className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                  serviceType === key
                    ? 'bg-[#1C1C1C] border-[#FF7518] text-white shadow-[0_0_15px_rgba(255,117,24,0.2)]'
                    : 'bg-[#141414] border-[#222222] text-[#B0B0B0] hover:border-white/20 hover:text-white'
                }`}
              >
                {val.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Page Scale */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3">
            2. Scope & Page Count
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {['1-5', '6-10', '11-20', '20+'].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setPagesCount(count)}
                className={`py-2.5 px-3 rounded-xl text-center border text-xs font-bold transition-all ${
                  pagesCount === count
                    ? 'bg-[#1C1C1C] border-[#FF7518] text-white shadow-[0_0_12px_rgba(255,117,24,0.2)]'
                    : 'bg-[#141414] border-[#222222] text-[#B0B0B0] hover:border-white/20 hover:text-white'
                }`}
              >
                {count} Pages
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Addons */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3">
            3. Recommended Engineering & Growth Add-ons
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {addonsList.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all select-none ${
                    isSelected
                      ? 'bg-[#181818] border-[#FF7518]/60 text-white'
                      : 'bg-[#141414] border-[#222222] text-[#8E8E8E] hover:border-white/20'
                  }`}
                >
                  <span className="text-xs font-medium">{addon.name}</span>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center border ${
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

        {/* Total Estimate Calculation Result Box */}
        <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0B0B0B] p-6 rounded-2xl border border-[#1E1E1E]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#FF7518]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#B0B0B0]">
                Estimated Ballpark Investment
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFAD33] to-[#FF7518]">
                ${estimatedTotal.toLocaleString()}
              </span>
              <span className="text-xs text-[#8E8E8E]">
                (Est. Timeline: {serviceBases[serviceType].weeks})
              </span>
            </div>
            <p className="text-[11px] text-[#777777] mt-1">
              *Preliminary estimate based on standard agency engineering. Final scope confirmed during blueprint.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={handleProceed}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Lock In This Estimate
          </Button>
        </div>
      </div>
    </div>
  );
};
