import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Leaf, ArrowRight } from 'lucide-react';

const Auth = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (isSignUp && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Store user data in localStorage (in a real app, this would be handled by your backend)
      const userData = {
        name: formData.name || formData.email.split('@')[0],
        email: formData.email,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('plantWikiUser', JSON.stringify(userData));
      onLogin(userData);
    }, 1500);
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  const InputField = ({ icon: Icon, type, name, placeholder, value, error, showPasswordToggle }) => (
    <div className="input-group">
      <div className="input-wrapper">
        <Icon size={20} className="input-icon" />
        <input
          type={showPasswordToggle ? (name === 'password' ? (showPassword ? 'text' : 'password') : (showConfirmPassword ? 'text' : 'password')) : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className={`auth-input ${error ? 'error' : ''}`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => {
              if (name === 'password') {
                setShowPassword(!showPassword);
              } else {
                setShowConfirmPassword(!showConfirmPassword);
              }
            }}
          >
            {(name === 'password' ? showPassword : showConfirmPassword) ? 
              <EyeOff size={18} /> : <Eye size={18} />
            }
          </button>
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="floating-plants">
          <div className="floating-plant">🌿</div>
          <div className="floating-plant">🌱</div>
          <div className="floating-plant">🍃</div>
          <div className="floating-plant">🌾</div>
          <div className="floating-plant">🌿</div>
        </div>
      </div>
      
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <Leaf size={32} />
            <h1>Plant Wiki</h1>
          </div>
          <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
          <p>{isSignUp ? 'Join our community of plant enthusiasts' : 'Sign in to explore the world of plants'}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <InputField
              icon={User}
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              error={errors.name}
            />
          )}

          <InputField
            icon={Mail}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            error={errors.email}
          />

          <InputField
            icon={Lock}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            error={errors.password}
            showPasswordToggle={true}
          />

          {isSignUp && (
            <InputField
              icon={Lock}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              error={errors.confirmPassword}
              showPasswordToggle={true}
            />
          )}

          <button 
            type="submit" 
            className={`auth-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <>
                {isSignUp ? 'Create Account' : 'Sign In'}
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button 
              type="button" 
              className="auth-switch" 
              onClick={toggleAuthMode}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>

        {!isSignUp && (
          <div className="demo-credentials">
            <h4>Demo Credentials:</h4>
            <p><strong>Email:</strong> demo@plantwiki.com</p>
            <p><strong>Password:</strong> demo123</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;