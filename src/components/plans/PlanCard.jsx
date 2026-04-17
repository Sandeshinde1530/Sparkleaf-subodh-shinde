import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../common/Button';
import { getFeaturesByCategory, formatPrice } from '../../utils/helpers';

const PlanCard = ({ plan }) => {
  const featureCategories = getFeaturesByCategory();
  const [expandedCats, setExpandedCats] = useState({});

  const toggleCategory = (catId) => {
    setExpandedCats(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  return (
    <div className={`plan-card-mobile ${plan.featured ? 'featured-mobile' : ''}`}>
      <div className="plan-card-header" style={{ background: plan.headerGradient }}>
        {plan.featured && <div className="plan-card-featured-badge">Most Popular</div>}
        <h2>{plan.name}</h2>
        <div style={{ opacity: 0.9, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>{plan.tagline}</div>
        <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 'bold' }}>{formatPrice(plan.price.amount)}</div>
      </div>

      <div className="plan-card-highlights">
        <ul>
          {plan.highlights.map((hlt, i) => (
            <li key={i}>
              <Check size={16} color="var(--leaf-500)" /> {hlt}
            </li>
          ))}
        </ul>
      </div>

      <div className="plan-card-features">
        {featureCategories.map(cat => {
          const isExpanded = expandedCats[cat.id];
          return (
            <div key={cat.id} className="plan-category-accordion">
              <button className="accordion-header" onClick={() => toggleCategory(cat.id)}>
                {cat.name}
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="accordion-content">
                      {cat.features.map(f => {
                        const val = f.planValues[plan.id];
                        return (
                          <div key={f.id} className="accordion-feature-item">
                            <span>{f.name}</span>
                            <span>
                              {val === true ? <Check size={16} color="var(--leaf-500)" /> : 
                               val === false ? <Minus size={16} color="var(--gray-400)" /> : 
                               val}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="plan-card-footer">
        <Button href={plan.cta.link} variant={plan.featured ? 'primary' : 'outline'} fullWidth>
          {plan.cta.text}
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;
