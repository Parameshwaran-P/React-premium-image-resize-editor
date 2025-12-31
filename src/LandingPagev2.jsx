import React, { useState } from 'react';
import { Moon, Sun, Download, Star, Zap, Image, Crop, Sliders, Sparkles } from 'lucide-react';
import PSHImageEditor from 'react-psh-image-editor-modal';
import 'react-psh-image-editor-modal/dist/index.css'; 
import PshImage2 from './assets/psh_image_editor.png'
export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleImageSubmit = (file) => {
    console.log('Edited image:', file);
    
    // Upload to server
    const formData = new FormData();
    formData.append('image', file);
    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData
    // });
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'
    }`}>
      {/* Header */}
   <header
  className={`backdrop-blur-md border-b sticky top-0 z-50
    ${darkMode ? 'bg-slate-900/50 border-purple-500/20' : 'bg-white/50 border-purple-200'}
  `}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

    {/* Logo + Title */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600
        rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50
        rotate-3 hover:rotate-0 transition-transform"
      >
        <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
      </div>

      <div className="leading-tight">
        <h1
          className={`font-black tracking-tight text-lg sm:text-xl
            ${darkMode ? 'text-white' : 'text-slate-900'}
          `}
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          PSH Image Editor
        </h1>

        <p
          className={`text-sm sm:text-base font-medium
            ${darkMode ? 'text-white' : 'text-slate-600'}
          `}
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Premium React Component
        </p>
      </div>
    </div>

    {/* Actions */}
    <div className="flex items-center gap-2 sm:gap-3">
      <button
        onClick={toggleTheme}
        className={`p-2 sm:p-3 rounded-xl transition-all duration-300 hover:scale-110
          ${
            darkMode
              ? 'bg-purple-600/30 text-yellow-300 hover:bg-purple-600/50 border border-purple-400/30'
              : 'bg-purple-100 text-purple-600 hover:bg-purple-200 border border-purple-300'
          }
        `}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
      </button>

      <a
        href="https://www.npmjs.com/package/react-psh-image-editor-modal"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white
          bg-gradient-to-r from-purple-500 to-purple-700
          rounded-lg shadow-lg hover:scale-105 transition-transform"
      >
        Install
      </a>
    </div>

  </div>
</header>




      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-5xl mx-auto">
          <div className="h-40 w-40 bg-gray-200 flex items-center justify-center">
  <img
    src={PshImage2}
    alt="Editor Platform Logo"
    className="h-16 w-16 object-contain"
  />
</div>
<div className='p-5'>
 <h3 className={`text-3xl sm:text-4xl font-bold p-3 ${
            darkMode ? 'text-white' : 'text-purple-900'
          }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            One-Line Integration
          </h3>
          
          <p className={`text-xl sm:text-4xl mb-10 leading-relaxed ${
             darkMode ? 'text-white' : 'text-purple-900'
          }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            A modern, production-ready image editor modal for React apps.
            <br />
            Resize, crop, adjust, and export images effortlessly - just like Canva.
          </p>
          <div className='py-10 mt-4'>
 {/* <button onSubmit={handleImageSubmit} className="px-40 py-15 p-5 mt-10 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all transform hover:scale-105 animate-pulse hover:animate-none">
            🚀 Try it Now
          </button> */}
          </div>
         
</div>
         
        </div>
      </section>

        {/* Code Section */}
      <section className="max-w-6xl mx-auto px-4 mt-4 sm:px-6 py-16">
        <div className={`backdrop-blur-xl p-8 sm:p-12 border shadow-2xl rounded-2xl ${
          darkMode 
            ? 'bg-slate-800/50 border-purple-500/30 shadow-purple-900/50 rounded-2xl' 
            : 'bg-white/70 border-purple-200 shadow-purple-200/50 rounded-2xl'
        }`}>
          <h3 className={`text-3xl sm:text-4xl font-black mb-8 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Simple, clean, one-line integration
          </h3>
          
          {/* Terminal */}
          <div className={`rounded-2xl overflow-hidden mb-6 border p-2 ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-800 border-slate-700'
          }`}>
            <div className={`flex items-center p-2 px-6 py-6 ${
              darkMode ? 'bg-slate-900' : 'bg-slate-900'
            }`}>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-semibold text-white">Terminal</span>
            </div>
            <pre className="px-6 py-6 p-2 overflow-x-auto">
              <code className="text-purple-400 font-mono text-white mb-2">
                npm install react-psh-image-editor-modal
              </code>
            </pre>
          </div>

          {/* Code Editor */}
          <div className={`rounded-2xl overflow-hidden border ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-800 border-slate-700'
          }`}>
            <div className={`flex items-center p-2 px-6 py-4 ${
              darkMode ? 'bg-slate-900' : 'bg-slate-900'
            }`}>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-semibold text-white">App.jsx</span>
            </div>
            <pre className="px-6 py-6 overflow-x-auto">
              <code className="text-gray-300 font-mono text-sm leading-relaxed">
{`import PSHImageEditor from 'react-psh-image-editor-modal';

function App() {
  return (
    <PSHImageEditor onSubmit={(file) => {
      console.log('Edited image:', file);
    }}
    name="Upload Image" />
  );
}`}
              </code>
            </pre>
          </div>

          <div className="mt-8 text-center">
            <p className={`text-2xl font-bold ${
              darkMode ? 'text-purple-300' : 'text-purple-700'
            }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              That's it! You're ready to go. 👈
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="relative rounded-3xl p-12 sm:p-16 text-center text-white overflow-hidden">

          <div className="relative z-10">
                <div className='py-10 p-5'>
 <button>
               <PSHImageEditor onSubmit={handleImageSubmit} name={" ✨ Upload Image"} />
          </button>
          </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
    
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 mt-10">
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-2 sm:gap-8
    "
  >
    <FeatureCard
      icon={<Image className="w-10 h-10" strokeWidth={2} />}
      title="Platform Presets"
      description="Instagram, LinkedIn, Twitter, Custom sizes"
      darkMode={darkMode}
      className="p-6 flex flex-col items-start justify-start bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
    />

    <FeatureCard
      icon={<Sliders className="w-10 h-10" strokeWidth={2} />}
      title="Edit & Adjust"
      description="Resize, crop, brightness, contrast & more"
      darkMode={darkMode}
      className="p-6 flex flex-col items-start justify-start bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
    />

    <FeatureCard
      icon={<Download className="w-10 h-10" strokeWidth={2} />}
      title="Export Ready"
      description="Blob output + instant download"
      darkMode={darkMode}
      className="p-6 flex flex-col items-start justify-start bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
    />

    <FeatureCard
      icon={<Crop className="w-10 h-10" strokeWidth={2} />}
      title="Modern Formats"
      description=".jpg, .jpeg, .png, .webp supported"
      darkMode={darkMode}
      className="p-6 flex flex-col items-start justify-start bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
    />
  </div>
</section>


    

      {/* Footer */}
      <footer className={`backdrop-blur-md border-t py-10 p-4 ${
        darkMode ? 'bg-slate-900/30 border-purple-500/20' : 'bg-white/30 border-purple-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className={`text-lg font-semibold ${
            darkMode ? 'text-white' : 'text-slate-700'
          }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Made with ❤️ for the React community
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, darkMode }) {
  return (
    <div className={`backdrop-blur-xl rounded-2xl p-4 border ${
      darkMode 
        ? 'bg-purple-900/30 border-purple-500/30' 
        : 'bg-white/70 border-purple-200'
    }`}>
      <div className={`mb-5 p-2 ${darkMode ? 'text-white' : 'text-purple-600'}`}>
        {icon}
      </div>
      <h4 className={`text-xl font-black mb-3 ${
        darkMode ? 'text-white' : 'text-slate-900'
      }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {title}
      </h4>
      <p className={`text-base font-medium leading-relaxed ${
        darkMode ? 'text-white' : 'text-slate-600'
      }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {description}
      </p>
    </div>
  );
}