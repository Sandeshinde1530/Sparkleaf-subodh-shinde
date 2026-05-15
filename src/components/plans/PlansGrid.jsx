import React from 'react';
import { Book, PenTool, AlignLeft, User, Star, Megaphone, Gift, ShoppingCart } from 'lucide-react';
import { plans } from '../../data/plans';
import './PlansGrid.css';

const getFeatureIcon = (type) => {
  switch (type) {
    case 'isbn': return <Book size={18} />;
    case 'design': return <PenTool size={18} />;
    case 'format': return <AlignLeft size={18} />;
    case 'support': return <User size={18} />;
    case 'star': return <Star size={18} />;
    case 'marketing': return <Megaphone size={18} />;
    case 'amazon': return (
      <span style={{ 
        fontWeight: 'bold', 
        fontSize: '18px', 
        fontFamily: 'serif',
        display: 'inline-block',
        borderBottom: '2px solid currentColor',
        lineHeight: 1
      }}>a</span>
    );
    default: return <Check size={18} />;
  }
};

const PlansGrid = () => {
  return (
    <div className="plans-grid">
      {plans.map((plan, index) => (
        <div key={plan.id} className={`plan-grid-card ${plan.isPopular ? 'popular' : ''}`} style={{ '--plan-color': plan.color }}>
          {/* Card Header */}
          <div className="plan-grid-header">
            {plan.isPopular && <div className="plan-grid-badge">MOST POPULAR</div>}
            <div className="plan-grid-title-row" style={{ background: plan.color }}>
              <div className="plan-number">{index + 1}. {plan.name}</div>
              <div className="plan-grid-price">{plan.price.display}</div>
            </div>
          </div>

          {/* Card Features */}
          <div className="plan-grid-body">
            <ul className="plan-grid-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <div className="feature-icon-wrapper" style={{ color: plan.color }}>
                    {getFeatureIcon(feature.type)}
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Footer (Author Copies) */}
          <div className="plan-grid-footer">
            <div className="gift-icon-wrapper">
              <Gift size={24} color={plan.color} />
            </div>
            <div className="footer-text-content">
              <strong>{plan.footer.title}</strong>
              <p>{plan.footer.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlansGrid;
