import { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(39642);

  useEffect(() => {
    // Simulate visitor count increment
    const interval = setInterval(() => {
      setVisitors(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-8">
      <p className="text-sm text-muted-foreground font-medium">
        Visitors: {visitors.toLocaleString()}
      </p>
    </div>
  );
};

export default VisitorCounter;