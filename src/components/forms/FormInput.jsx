import React, { forwardRef } from 'react';
import './FormInput.css';

const FormInput = forwardRef(({
  label,
  id,
  type = 'text',
  error,
  required,
  options = [],
  ...props
}, ref) => {
  if (type === 'checkbox') {
    return (
      <div className="form-group">
        <label className="form-checkbox-container">
          <input 
            type="checkbox" 
            id={id} 
            ref={ref} 
            className={`form-checkbox ${error ? 'error' : ''}`} 
            {...props} 
          />
          <span className="form-label" style={{ marginBottom: 0 }}>
            {label} {required && <span className="form-required">*</span>}
          </span>
        </label>
        {error && <p className="form-error">{error}</p>}
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label} {required && <span className="form-required">*</span>}
      </label>

      {type === 'select' ? (
        <select 
          id={id} 
          ref={ref} 
          className={`form-control ${error ? 'error' : ''}`}
          {...props}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea 
          id={id} 
          ref={ref} 
          className={`form-control ${error ? 'error' : ''}`} 
          {...props} 
        />
      ) : (
        <input 
          type={type} 
          id={id} 
          ref={ref} 
          className={`form-control ${error ? 'error' : ''}`} 
          {...props} 
        />
      )}

      {error && <p className="form-error">{error}</p>}
    </div>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
