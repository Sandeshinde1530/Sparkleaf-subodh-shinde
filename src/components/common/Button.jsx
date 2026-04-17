import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  type = 'button',
  ...props 
}) => {
  const classes = `btn btn-${size} btn-${variant} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {loading && <Loader2 className="animate-spin w-4 h-4 mr-2" />}
      {children}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={classes} onClick={onClick} {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick} 
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
