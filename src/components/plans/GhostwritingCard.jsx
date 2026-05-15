import React from 'react';
import { PenTool, CheckCircle2, Gift } from 'lucide-react';
import './GhostwritingCard.css';

const GhostwritingCard = ({ plan }) => {
  if (!plan) return null;

  return (
    <div className="gw-card">
      {/* Left Section: Title & Price */}
      <div className="gw-left">
        <div className="gw-header-row">
          <div className="gw-icon-circle">
            <PenTool size={32} color="#fff" />
          </div>
          <div className="gw-title-area">
            <h3 className="gw-title">{plan.name}</h3>
            <div className="gw-price-badge">{plan.price.display}</div>
          </div>
        </div>
        <p className="gw-desc">{plan.description}</p>
      </div>

      {/* Middle Section: Features List */}
      <div className="gw-middle">
        <ul className="gw-features-grid">
          {plan.features.map((feature, i) => (
            <li key={i}>
              <CheckCircle2 size={16} color={plan.color || '#2E7D32'} className="gw-check" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Footer / Author Copies */}
      <div className="gw-right">
        <div className="gw-gift">
          <Gift size={32} color={plan.color || '#2E7D32'} />
        </div>
        <div className="gw-footer-text">
          <strong>{plan.footer.title}</strong>
          <p>{plan.footer.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default GhostwritingCard;
