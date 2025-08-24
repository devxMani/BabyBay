import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { GiButterfly } from 'react-icons/gi';

const SignIn = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
=======
    <div className="min-h-screen" style={{ background: '#1a1a1a' }}>
      <Navigation />
      
      <main className="pt-20 pb-12 px-4">
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
        <div className="max-w-md mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <h1 
              className="text-3xl font-normal text-gray-800 mb-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              {isSignUp ? 'Join BabyBay' : 'Welcome back!'}
            </h1>
            <p 
              className="text-gray-600 text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {isSignUp ? 'Create your own poetry page' : 'Sign in to access your poetry page'}
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
=======
            <div className="flex items-center justify-center mb-6">
              <GiButterfly size={32} className="text-white butterfly-float" />
            </div>
            <h1 
              className="text-3xl font-normal text-white mb-4"
              style={{ fontFamily: "'Indie Flower', cursive" }}
            >
              {isSignUp ? 'Join BabyBay' : 'Welcome to BabyBay'}
            </h1>
            <p 
              className="text-white/70 text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {isSignUp ? 'Create your own poetry page' : 'Sign in to create and share your poems'}
            </p>
          </motion.div>

          {/* Sign in form */}
          <motion.div
            className="glass p-8 mb-6"
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label 
<<<<<<< HEAD
                  className="block text-gray-700 font-medium mb-3 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
=======
                  className="block text-white/80 font-normal mb-3 text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
<<<<<<< HEAD
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:bg-white transition-all duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
=======
                  className="glass-input w-full"
                  style={{ fontFamily: 'Inter, sans-serif' }}
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
                />
              </div>

              <div>
                <label 
<<<<<<< HEAD
                  className="block text-gray-700 font-medium mb-3 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
=======
                  className="block text-white/80 font-normal mb-3 text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
<<<<<<< HEAD
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:bg-white transition-all duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
=======
                  className="glass-input w-full"
                  style={{ fontFamily: 'Inter, sans-serif' }}
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
                />
              </div>

              <motion.button
                type="submit"
<<<<<<< HEAD
                className="w-full bg-gray-800 text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSignUp ? 'Create Account' : 'Sign in'}
              </motion.button>
            </form>

            <div className="mt-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 
                  className="font-medium mb-3 text-gray-800 text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                </h3>
                <p 
                  className="text-sm text-gray-600 mb-4 text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {isSignUp ? 'Sign in to your existing account' : 'Create your own poetry page in just a few steps'}
                </p>
                
                {!isSignUp && (
                  <motion.button
                    onClick={() => setIsSignUp(true)}
                    className="w-full bg-gray-800 text-white py-3 rounded-xl font-medium mb-3 hover:bg-gray-900 transition-all duration-200 flex items-center justify-center space-x-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GiButterfly size={16} className="text-white" />
                    <span>Create Your Poetry Page</span>
                  </motion.button>
                )}
                
                <motion.button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="w-full bg-white text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-200 border border-gray-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSignUp ? 'Sign in instead' : 'Or use traditional signup'}
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-6">
            <motion.button
              onClick={() => navigate('/')}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
=======
                className="glass-button w-full py-3 font-normal"
                style={{ fontFamily: 'Inter, sans-serif' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </motion.button>
            </form>
          </motion.div>

          {/* Toggle between sign in and sign up */}
          <motion.div
            className="glass p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 
              className="font-normal mb-3 text-white text-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            </h3>
            <p 
              className="text-sm text-white/70 mb-4 text-center"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {isSignUp ? 'Sign in to your existing poetry page' : 'Create your own poetry page and share your poems with the world'}
            </p>
            
            <motion.button
              onClick={() => setIsSignUp(!isSignUp)}
              className="glass-button w-full py-3 font-normal flex items-center justify-center space-x-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GiButterfly size={16} className="text-white" />
              <span>{isSignUp ? 'Sign In Instead' : 'Create Poetry Page'}</span>
            </motion.button>
          </motion.div>

          {/* Back to home */}
          <div className="text-center mt-6">
            <motion.button
              onClick={() => navigate('/')}
              className="text-white/60 hover:text-white/80 transition-colors duration-200 text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to home
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;