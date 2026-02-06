import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Shield,
  ArrowRightLeft,
  Diamond,
  Menu,
  X,
  Zap,
  Lock,
  Globe,
  Cpu,
  ChevronRight,
  Activity,
  Wallet
} from 'lucide-react';

// SafeIcon Component for dynamic icon rendering
const SafeIcon = ({ name, size = 24, className = '', color }) => {
  const icons = {
    Shield, ArrowRightLeft, Diamond, Menu, X, Zap, Lock, Globe, Cpu, ChevronRight, Activity, Wallet
  };
  const IconComponent = icons[name] || Shield;
  return <IconComponent size={size} className={className} color={color} />;
};

// Glitch Text Component
const GlitchText = ({ text, className = '' }) => {
  return (
    <span className={`glitch-text ${className}`} data-text={text}>
      {text}
    </span>
  );
};

// 3D Hypercube Component
const Hypercube = () => {
  const [rotation, setRotation] = useState({ x: -20, y: 45 });
  const [isHovering, setIsHovering] = useState(false);
  const cubeRef = useRef(null);

  useEffect(() => {
    let animationId;
    let baseSpeed = 0.3;
    let currentSpeed = baseSpeed;

    const animate = () => {
      setRotation(prev => ({
        x: prev.x + currentSpeed * 0.5,
        y: prev.y + currentSpeed
      }));

      if (isHovering && currentSpeed < 3) {
        currentSpeed += 0.1;
      } else if (!isHovering && currentSpeed > baseSpeed) {
        currentSpeed -= 0.05;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovering]);

  return (
    <div
      className="relative w-48 h-48 md:w-64 md:h-64 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={cubeRef}
    >
      <motion.div
        className="w-full h-full preserve-3d relative"
        style={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        animate={{
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Front */}
        <div
          className="cube-face flex items-center justify-center"
          style={{ transform: 'translateZ(100px)' }}
        >
          <div className="w-24 h-24 border-2 border-lime-400/50 rounded-lg flex items-center justify-center shadow-toxic">
            <Zap className="w-12 h-12 text-lime-400" />
          </div>
        </div>
        {/* Back */}
        <div
          className="cube-face flex items-center justify-center"
          style={{ transform: 'rotateY(180deg) translateZ(100px)' }}
        >
          <div className="w-24 h-24 border-2 border-fuchsia-500/50 rounded-lg flex items-center justify-center neon-border-magenta">
            <Lock className="w-12 h-12 text-fuchsia-500" />
          </div>
        </div>
        {/* Right */}
        <div
          className="cube-face flex items-center justify-center"
          style={{ transform: 'rotateY(90deg) translateZ(100px)' }}
        >
          <div className="w-24 h-24 border-2 border-cyan-400/50 rounded-lg flex items-center justify-center neon-border-cyan">
            <Globe className="w-12 h-12 text-cyan-400" />
          </div>
        </div>
        {/* Left */}
        <div
          className="cube-face flex items-center justify-center"
          style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}
        >
          <div className="w-24 h-24 border-2 border-lime-400/50 rounded-lg flex items-center justify-center shadow-toxic">
            <Cpu className="w-12 h-12 text-lime-400" />
          </div>
        </div>
        {/* Top */}
        <div
          className="cube-face flex items-center justify-center"
          style={{ transform: 'rotateX(90deg) translateZ(100px)' }}
        >
          <div className="w-24 h-24 border-2 border-fuchsia-500/50 rounded-lg flex items-center justify-center neon-border-magenta">
            <Activity className="w-12 h-12 text-fuchsia-500" />
          </div>
        </div>
        {/* Bottom */}
        <div
          className="cube-face flex items-center justify-center"
          style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}
        >
          <div className="w-24 h-24 border-2 border-cyan-400/50 rounded-lg flex items-center justify-center neon-border-cyan">
            <Wallet className="w-12 h-12 text-cyan-400" />
          </div>
        </div>

        {/* Inner glowing core */}
        <div
          className="absolute inset-0 flex items-center justify-center preserve-3d"
          style={{ transform: 'translateZ(0px)' }}
        >
          <motion.div
            className="w-16 h-16 bg-lime-400/20 rounded-full blur-xl"
            animate={{
              scale: isHovering ? [1, 1.5, 1] : [1, 1.2, 1],
              opacity: isHovering ? [0.5, 1, 0.5] : [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: isHovering ? 0.5 : 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Floor reflection */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-32 h-8 bg-lime-400/20 blur-2xl rounded-full" />
    </div>
  );
};

// Infinite Ticker Component
const InfiniteTicker = () => {
  const [data, setData] = useState([
    { label: 'APY', value: '12.47%', trend: 'up' },
    { label: 'TX SPEED', value: '<0.1s', trend: 'stable' },
    { label: 'TVL', value: '$4.2B', trend: 'up' },
    { label: 'NEXUS_ID', value: 'ACTIVE', trend: 'active' },
    { label: 'GAS', value: '4 GWEI', trend: 'down' },
    { label: 'NODES', value: '15,847', trend: 'up' },
    { label: 'UPTIME', value: '99.99%', trend: 'stable' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(item => {
        if (item.label === 'APY') {
          return { ...item, value: `${(Math.random() * 5 + 10).toFixed(2)}%` };
        }
        if (item.label === 'GAS') {
          return { ...item, value: `${Math.floor(Math.random() * 10 + 2)} GWEI` };
        }
        if (item.label === 'NODES') {
          return { ...item, value: `${(15847 + Math.floor(Math.random() * 100)).toLocaleString()}` };
        }
        return item;
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const tickerContent = (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-2 px-8 whitespace-nowrap">
          <span className="text-gray-500 font-mono text-sm">{item.label}:</span>
          <span className={`font-mono font-bold ${
            item.trend === 'up' ? 'text-lime-400' :
            item.trend === 'down' ? 'text-fuchsia-500' :
            item.trend === 'active' ? 'text-cyan-400 animate-pulse' : 'text-white'
          }`}>
            {item.value}
          </span>
          <span className="text-gray-700 mx-4">///</span>
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full overflow-hidden bg-black/50 border-y border-lime-400/20 py-3 backdrop-blur-sm">
      <div className="flex animate-ticker hover:[animation-play-state:paused]">
        <div className="flex">{tickerContent}</div>
        <div className="flex">{tickerContent}</div>
      </div>
    </div>
  );
};

// Glitch Feature Card Component
const FeatureCard = ({ icon, title, description, color = 'lime' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const colorClasses = {
    lime: 'border-lime-400/30 hover:border-lime-400 shadow-toxic text-lime-400',
    magenta: 'border-fuchsia-500/30 hover:border-fuchsia-500 neon-border-magenta text-fuchsia-500',
    cyan: 'border-cyan-400/30 hover:border-cyan-400 neon-border-cyan text-cyan-400',
  };

  const handleHover = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  return (
    <motion.div
      className={`relative glass-panel p-8 rounded-sm border transition-all duration-300 group cursor-pointer ${colorClasses[color]}`}
      onMouseEnter={handleHover}
      whileHover={{ scale: 1.02, y: -5 }}
      animate={isGlitching ? {
        x: [0, -2, 2, -2, 0],
        filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(180deg)', 'hue-rotate(0deg)'],
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Glitch overlay effect */}
      <AnimatePresence>
        {isGlitching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-lime-400/20 via-fuchsia-500/20 to-cyan-400/20 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className={`w-16 h-16 mb-6 flex items-center justify-center border border-current rounded-lg ${color === 'lime' ? 'bg-lime-400/10' : color === 'magenta' ? 'bg-fuchsia-500/10' : 'bg-cyan-400/10'}`}>
        <SafeIcon name={icon} size={32} className={color === 'lime' ? 'text-lime-400' : color === 'magenta' ? 'text-fuchsia-500' : 'text-cyan-400'} />
      </div>

      <h3 className="font-display text-2xl mb-3 text-white group-hover:text-shadow-neon transition-colors">
        {title}
      </h3>

      <p className="font-mono text-sm text-gray-400 leading-relaxed">
        {description}
      </p>

      {/* Decorative corner accents */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${color === 'lime' ? 'border-lime-400' : color === 'magenta' ? 'border-fuchsia-500' : 'border-cyan-400'}`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${color === 'lime' ? 'border-lime-400' : color === 'magenta' ? 'border-fuchsia-500' : 'border-cyan-400'}`} />
    </motion.div>
  );
};

// Staking Calculator Component
const StakingCalculator = () => {
  const [stakeAmount, setStakeAmount] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const width = useTransform(x, [0, 300], ['0%', '100%']);

  const apy = 12.5;
  const projectedEarnings = (stakeAmount * 1000 * (apy / 100)).toFixed(2);
  const monthlyReturn = (projectedEarnings / 12).toFixed(2);

  // Synthetic sound effect using Web Audio API
  const playDragSound = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(200 + (stakeAmount * 5), audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Audio context might be blocked
    }
  }, [stakeAmount]);

  useEffect(() => {
    if (isDragging) {
      const unsubscribe = x.on('change', (latest) => {
        const percentage = Math.min(100, Math.max(0, (latest / 300) * 100));
        setStakeAmount(Math.round(percentage));
        if (Math.random() > 0.7) playDragSound();
      });
      return () => unsubscribe();
    }
  }, [isDragging, x, playDragSound]);

  return (
    <div className="glass-panel rounded-2xl p-8 md:p-12 border border-lime-400/30 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left side - Controls */}
        <div className="flex-1">
          <h3 className="font-display text-3xl mb-2 text-white">PROTOCOL STAKING</h3>
          <p className="font-mono text-sm text-gray-400 mb-8">Drag energy bar to calculate yields</p>

          <div className="mb-8">
            <div className="flex justify-between mb-4 font-mono text-sm">
              <span className="text-gray-500">STAKE AMOUNT</span>
              <span className="text-lime-400 font-bold">{stakeAmount}%</span>
            </div>

            <div className="relative h-12 bg-black/50 rounded-lg overflow-hidden border border-lime-400/30" ref={constraintsRef}>
              {/* Background grid */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(90deg, rgba(191,255,0,0.3) 1px, transparent 1px)',
                backgroundSize: '10% 100%'
              }} />

              {/* Fill */}
              <motion.div
                className="h-full bg-gradient-to-r from-lime-400/20 to-lime-400/40"
                style={{ width }}
              />

              {/* Draggable handle */}
              <motion.div
                className="absolute top-0 h-full w-8 bg-lime-400 cursor-grab active:cursor-grabbing flex items-center justify-center shadow-toxic"
                style={{ x }}
                drag="x"
                dragConstraints={{ left: 0, right: 300 }}
                dragElastic={0}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-1 h-4 bg-black/50 rounded-full" />
              </motion.div>
            </div>

            <div className="flex justify-between mt-2 font-mono text-xs text-gray-600">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="space-y-4 font-mono">
            <div className="flex justify-between py-3 border-b border-white/10">
              <span className="text-gray-400">APY Rate</span>
              <span className="text-cyan-400 font-bold">{apy}%</span>
            </div>
            <div className="flex justify-between py-3 border-b border-white/10">
              <span className="text-gray-400">Monthly Return</span>
              <span className="text-fuchsia-400 font-bold">${monthlyReturn}</span>
            </div>
          </div>
        </div>

        {/* Right side - Visualization */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative h-64 bg-black/30 rounded-lg border border-lime-400/20 p-6 overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(0deg, rgba(191,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(191,255,0,0.5) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />

            {/* Dynamic bars */}
            <div className="relative h-full flex items-end justify-between gap-2">
              {[...Array(12)].map((_, i) => {
                const height = Math.min(100, (stakeAmount * 0.8) + (Math.sin(i * 0.5) * 20) + (i * 5));
                const isActive = i < (stakeAmount / 10);
                return (
                  <motion.div
                    key={i}
                    className={`flex-1 rounded-t-sm transition-colors duration-300 ${
                      isActive ? 'bg-gradient-to-t from-lime-400 to-lime-300' : 'bg-white/10'
                    }`}
                    initial={{ height: '10%' }}
                    animate={{ height: `${height}%` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {isActive && (
                      <motion.div
                        className="w-full h-1 bg-white/50"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Glow effect */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none transition-opacity duration-300"
              style={{
                background: `linear-gradient(to top, rgba(191,255,0,${stakeAmount / 200}), transparent)`,
              }}
            />
          </div>

          <div className="mt-6 text-center">
            <div className="font-mono text-sm text-gray-400 mb-1">PROJECTED ANNUAL YIELD</div>
            <motion.div
              className="font-display text-5xl text-lime-400"
              key={projectedEarnings}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              ${projectedEarnings}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-lime-400/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-lime-400/50 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-lime-400/10 translate-y-full group-hover:translate-y-0 transition-transform" />
            <span className="font-mono font-bold text-lime-400 text-lg">N</span>
          </div>
          <span className="font-display text-xl tracking-wider hidden sm:block">NEXUS</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['PROTOCOL', 'STAKE', 'DOCS', 'CONNECT'].map((item) => (
            <button
              key={item}
              className="font-mono text-sm text-gray-400 hover:text-lime-400 transition-colors relative group"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-lime-400 group-hover:w-full transition-all" />
            </button>
          ))}
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 transition-colors broken-icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SafeIcon name={isOpen ? 'X' : 'Menu'} size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-lime-400/20 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {['PROTOCOL', 'STAKE', 'DOCS', 'CONNECT'].map((item) => (
                <button
                  key={item}
                  className="font-mono text-lg text-gray-400 hover:text-lime-400 transition-colors text-left py-2 border-b border-white/5"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-void relative overflow-x-hidden selection:bg-lime-400 selection:text-black">
      {/* Texture overlays */}
      <div className="noise-overlay" />
      <div className="scanline-overlay" />

      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-900/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[150px]" />
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="font-mono text-lime-400 text-sm tracking-[0.3em] border border-lime-400/30 px-4 py-2 rounded-full bg-lime-400/5">
                SYSTEM ONLINE // V2.0.4
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-6 leading-none tracking-tighter"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlitchText text="WEALTH" /> UNCHAINED.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500">
                THE PROTOCOL IS LIVE.
              </span>
            </motion.h1>

            <motion.p
              className="font-mono text-gray-400 text-lg md:text-xl max-w-2xl mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Zero-knowledge DeFi infrastructure. Anonymous. Unstoppable.
              <span className="text-lime-400"> Yield optimized by AI.</span>
            </motion.p>

            <motion.div
              className="mb-16"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, type: 'spring' }}
            >
              <Hypercube />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="group relative px-8 py-4 bg-lime-400 text-black font-display font-bold text-lg tracking-wider overflow-hidden transition-transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  ENTER PROTOCOL
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
              <button className="px-8 py-4 border border-lime-400/50 text-lime-400 font-mono font-bold tracking-wider hover:bg-lime-400/10 transition-colors">
                READ DOCS
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-lime-400/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-lime-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Ticker Section */}
      <section className="relative z-10">
        <InfiniteTicker />
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-32 px-6" id="features">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              <span className="text-white">PROTOCOL</span>{' '}
              <span className="text-lime-400">FEATURES</span>
            </h2>
            <p className="font-mono text-gray-400 max-w-xl mx-auto">
              Next-generation financial primitives. Built for the anonymous economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FeatureCard
                icon="Shield"
                title="ZERO-KNOWLEDGE PRIVACY"
                description="zk-SNARKs powered transactions. Your financial history stays yours. Complete anonymity with mathematical guarantees."
                color="lime"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeatureCard
                icon="ArrowRightLeft"
                title="INSTANT FIAT BRIDGE"
                description="Seamless on/off ramps in 140+ countries. Convert fiat to crypto in seconds. No KYC required for DeFi access."
                color="magenta"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FeatureCard
                icon="Diamond"
                title="NFT COLLATERAL LOANS"
                description="Borrow against your blue-chip NFTs without selling. AI-powered valuation. Instant liquidity for illiquid assets."
                color="cyan"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staking Calculator Section */}
      <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              <span className="text-white">STAKING</span>{' '}
              <span className="text-fuchsia-500">CALCULATOR</span>
            </h2>
            <p className="font-mono text-gray-400">
              Simulate yields. Optimize returns. Compound wealth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <StakingCalculator />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            className="glass-panel rounded-3xl p-12 md:p-20 border border-lime-400/30 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(191,255,0,0.3),transparent_70%)]" />
            </div>

            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl mb-6">
                JOIN THE <span className="text-lime-400">NEXUS</span>
              </h2>
              <p className="font-mono text-gray-400 mb-8 max-w-lg mx-auto">
                The future of finance is being written now. Be among the first to access unrestricted yield.
              </p>
              <button className="group relative px-12 py-5 bg-lime-400 text-black font-display font-bold text-xl tracking-wider overflow-hidden transition-all hover:scale-105 shadow-toxic">
                <span className="relative z-10">INITIALIZE WALLET</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </button>

              <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs text-gray-500">
                <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                12,847 wallets connected
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-lime-400/20 bg-black/50 backdrop-blur-sm py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-lime-400/50 flex items-center justify-center">
                <span className="font-mono font-bold text-lime-400">N</span>
              </div>
              <span className="font-display text-lg">NEXUS PROTOCOL</span>
            </div>

            <div className="flex gap-6 font-mono text-sm text-gray-500">
              <a href="#" className="hover:text-lime-400 transition-colors">TERMS</a>
              <a href="#" className="hover:text-lime-400 transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-lime-400 transition-colors">AUDIT</a>
              <a href="#" className="hover:text-lime-400 transition-colors">GITHUB</a>
            </div>

            <div className="font-mono text-xs text-gray-600">
              © 2024 NEXUS PROTOCOL. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;