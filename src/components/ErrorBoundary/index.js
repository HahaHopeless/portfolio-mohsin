import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <button 
            onClick={() => {
              // Clear all GSAP animations and ScrollTrigger instances
              if (window.gsap) {
                window.gsap.killTweensOf(window);
                if (window.ScrollTrigger) {
                  window.ScrollTrigger.getAll().forEach(t => t.kill());
                }
              }
              this.setState({ hasError: false });
              window.location.href = '/';
            }}
            style={{
              padding: '10px 20px',
              backgroundColor: '#0068ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Return to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;