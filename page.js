import React, { useState, useEffect } from 'react';
import { 
  Search, Utensils, Bike, ChevronRight, ArrowLeft, 
  Eye, EyeOff, Check, Bell, Mic, MapPin, ChevronDown, 
  Heart, ShoppingCart, User, Star, Flame
} from 'lucide-react';

export default function FoodieHubApp() {
  // Navigation State: 'splash' | 'onboarding1' | 'onboarding2' | 'onboarding3' | 'signin' | 'otp_empty' | 'otp_filled' | 'welcome' | 'dashboard'
  const [currentScreen, setCurrentScreen] = useState('splash');
  
  // Input Form States
  const [email, setEmail] = useState('jamshed7256@gmail.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '']);

  // Simulate Splash Screen Auto-transition after 2.5 seconds
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('onboarding1');
      }, 2500);
      return () => clearTimeout(timer);
    }
    
    // Simulate Welcome Transition Auto-fade to Dashboard after 2 seconds
    if (currentScreen === 'welcome') {
      const timer = setTimeout(() => {
        setCurrentScreen('dashboard');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // Handle virtual keyboard press for OTP simulation
  const handleKeyPress = (num) => {
    if (currentScreen === 'otp_empty') {
      // Transition to filled screen simulation state
      setOtp(['1', '3', '5', '9', '9']);
      setCurrentScreen('otp_filled');
    }
  };

  const handleBackspace = () => {
    setOtp(['', '', '', '', '']);
    setCurrentScreen('otp_empty');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#111] font-sans p-4 select-none">
      
      {/* Mobile Device Wrapper Frame */}
      <div className="w-[390px] h-[844px] bg-[#FDF8F2] rounded-[44px] shadow-2xl overflow-hidden relative border-[10px] border-[#1f1f1f] flex flex-col">
        
        {/* iOS Global Status Bar Simulation */}
        <div className={`px-6 pt-3 pb-2 flex justify-between items-center text-xs font-semibold z-50 ${currentScreen === 'splash' ? 'text-white' : 'text-black'}`}>
          <span>9:41</span>
          <div className="flex items-center space-x-1.5">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M2 16h3v5H2v-5zm5-4h3v9H7v-9zm5-4h3v13h-3V8zm5-4h3v17h-3V4z"/></svg>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a5.978 5.978 0 0 0-4.24 1.76l1.42 1.42a3.96 3.96 0 0 1 5.64 0l1.42-1.42A5.978 5.978 0 0 0 12 15zm0-4a9.96 9.96 0 0 0-7.07 2.93l1.42 1.42a7.96 7.96 0 0 1 11.3 0l1.42-1.42A9.96 9.96 0 0 0 12 11z"/></svg>
            <div className="w-5 h-2.5 border border-current rounded-sm p-0.5 flex items-center"><div className="bg-current h-full w-full rounded-2xs"></div></div>
          </div>
        </div>

        {/* ------------------------------------------- */}
        {/* SCREEN 1: SPLASH SCREEN                     */}
        {/* ------------------------------------------- */}
        {currentScreen === 'splash' && (
          <div className="flex-1 bg-gradient-to-b from-[#EF4E4E] to-[#CC2B2B] flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              {/* Outer Custom Logo Icon */}
              <div className="border-[4px] border-white/90 rounded-[28px] p-6 bg-transparent relative mb-4 shadow-inner">
                <span className="text-white text-5xl block">🍔</span>
                <div className="absolute -top-5 -right-3 text-3xl">🥤</div>
              </div>
              <h1 className="text-white text-4xl font-black tracking-wider uppercase drop-shadow-md">
                Foodie Hub
              </h1>
            </div>
          </div>
        )}

        {/* ------------------------------------------- */}
        {/* SCREEN 2: ONBOARDING 1 - SEARCH RESTAURANTS */}
        {/* ------------------------------------------- */}
        {currentScreen === 'onboarding1' && (
          <div className="flex-1 flex flex-col justify-between px-6 pb-6 pt-1 relative">
            <div className="flex justify-end"><button onClick={() => setCurrentScreen('signin')} className="text-[#EF4E4E] text-sm font-semibold flex items-center">Skip <ChevronRight size={16} /></button></div>
            <div className="flex flex-col items-center flex-1 justify-center relative">
              <div className="absolute top-10 right-4 w-16 h-16 bg-[#FCEAEA] rounded-full blur-xl opacity-70"></div>
              <div className="text-[#EF4E4E] mb-8 p-7 bg-[#FFF2F2] rounded-[32px] shadow-sm"><Search size={72} strokeWidth={1.5} /></div>
              <h2 className="text-[#EF4E4E] text-2xl font-extrabold mb-3 text-center">Search Restaurants</h2>
              <p className="text-gray-500 text-sm text-center max-w-[260px] leading-relaxed">Browse top-rated restaurants, discover new flavors, and order with just a few taps.</p>
              <div className="flex space-x-2 mt-8"><div className="w-2.5 h-2.5 rounded-full bg-[#EF4E4E]"></div><div className="w-2 h-2 rounded-full bg-gray-300"></div><div className="w-2 h-2 rounded-full bg-gray-300"></div></div>
            </div>
            <button onClick={() => setCurrentScreen('onboarding2')} className="w-full bg-[#EF4E4E] text-white py-4 rounded-2xl font-bold transition-transform active:scale-[0.99]">Next</button>
          </div>
        )}

        {/* ------------------------------------------- */}
        {/* SCREEN 3: ONBOARDING 2 - CHOOSE DISHES     */}
        {/* ------------------------------------------- */}
        {currentScreen === 'onboarding2' && (
          <div className="flex-1 flex flex-col justify-between px-6 pb-6 pt-1 relative">
            <div className="flex justify-between items-center">
              <button onClick={() => setCurrentScreen('onboarding1')} className="text-gray-400"><ArrowLeft size={20} /></button>
              <button onClick={() => setCurrentScreen('signin')} className="text-[#EF4E4E] text-sm font-semibold flex items-center">Skip <ChevronRight size={16} /></button>
            </div>
            <div className="flex flex-col items-center flex-1 justify-center relative">
              <div className="absolute top-1/3 left-2 w-14 h-14 bg-[#FCEAEA] rounded-full blur-xl opacity-70"></div>
              <div className="text-[#EF4E4E] mb-8 p-7 bg-[#FFF2F2] rounded-[32px] shadow-sm"><Utensils size={72} strokeWidth={1.5} /></div>
              <h2 className="text-[#EF4E4E] text-2xl font-extrabold mb-3 text-center">Choose favourite dishes!</h2>
              <p className="text-gray-500 text-sm text-center max-w-[260px] leading-relaxed">Craving something delicious? Find your favorite dishes in seconds.</p>
              <div className="flex space-x-2 mt-8"><div className="w-2 h-2 rounded-full bg-gray-300"></div><div className="w-2.5 h-2.5 rounded-full bg-[#EF4E4E]"></div><div className="w-2 h-2 rounded-full bg-gray-300"></div></div>
            </div>
            <button onClick={() => setCurrentScreen('onboarding3')} className="w-full bg-[#EF4E4E] text-white py-4 rounded-2xl font-bold transition-transform active:scale-[0.99]">Next</button>
          </div>
        )}

        {/* ------------------------------------------- */}
        {/* SCREEN 4: ONBOARDING 3 - GET YOUR FOOD      */}
        {/* ------------------------------------------- */}
        {currentScreen === 'onboarding3' && (
          <div className="flex-1 flex flex-col justify-between px-6 pb-6 pt-1 relative">
            <div className="flex justify-between items-center">
              <button onClick={() => setCurrentScreen('onboarding2')} className="text-gray-400"><ArrowLeft size={20} /></button>
              <button onClick={() => setCurrentScreen('signin')} className="text-[#EF4E4E] text-sm font-semibold flex items-center">Skip <ChevronRight size={16} /></button>
            </div>
            <div className="flex flex-col items-center flex-1 justify-center relative">
              <div className="absolute bottom-1/4 right-2 w-16 h-16 bg-[#FCEAEA] rounded-full blur-xl opacity-70"></div>
              <div className="text-[#EF4E4E] mb-8 p-7 bg-[#FFF2F2] rounded-[32px] shadow-sm"><Bike size={72} strokeWidth={1.5} /></div>
              <h2 className="text-[#EF4E4E] text-2xl font-extrabold mb-3 text-center">Get your food</h2>
              <p className="text-gray-500 text-sm text-center max-w-[260px] leading-relaxed">Order your favorite meals with ease. Quick delivery whenever hunger strikes.</p>
              <div className="flex space-x-2 mt-8"><div className="w-2 h-2 rounded-full bg-gray-300"></div><div className="w-2 h-2 rounded-full bg-gray-300"></div><div className="w-2.5 h-2.5 rounded-full bg-[#EF4E4E]"></div></div>
            </div>
            <button onClick={() => setCurrentScreen('signin')} className="w-full bg-[#EF4E4E] text-white py-4 rounded-2xl font-bold transition-transform active:scale-[0.99]">Next</button>
          </div>
        )}

        {/* ------------------------------------------- */}
        {/* SCREEN 5: SIGN IN SCREEN                    */}
        {/* ------------------------------------------- */}
        {currentScreen === 'signin' && (
          <div className="flex-1 flex flex-col px-6 pt-1 pb-6 justify-between">
            <div>
              <button onClick={() => setCurrentScreen('onboarding3')} className="text-gray-400 mb-4 block"><ArrowLeft size={20} /></button>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Sign in</h2>
              
              {/* Email Input Field */}
              <div className="mb-4">
                <label className="text-xs font-semibold text-gray-400 block mb-1">Email</label>
                <div className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-3.5 flex justify-between items-center shadow-sm">
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent text-sm text-gray-800 outline-none w-full font-medium" />
                  <div className="w-4 h-4 bg-red-50 rounded-full flex items-center justify-center"><Check size={10} className="text-[#EF4E4E]" strokeWidth={3} /></div>
                </div>
              </div>

              {/* Password Input Field */}
              <div className="mb-2">
                <label className="text-xs font-semibold text-gray-400 block mb-1">Password</label>
                <div className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-3.5 flex justify-between items-center shadow-sm">
                  <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="bg-transparent text-sm text-gray-800 outline-none w-full font-medium tracking-wide" />
                  <button onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-gray-600">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end mb-6">
                <a href="#forgot" className="text-[#EF4E4E] text-xs font-semibold">Forgot password?</a>
              </div>

              {/* Action Button */}
              <button onClick={() => setCurrentScreen('otp_empty')} className="w-full bg-[#EF4E4E] text-white py-4 rounded-2xl font-bold shadow-md shadow-red-100 transition-transform active:scale-[0.99] mb-4">
                SIGN IN
              </button>

              {/* Toggle Account text */}
              <div className="text-center text-xs text-gray-600 font-medium">
                Dont have an account? <span className="text-[#EF4E4E] cursor-pointer">sign up</span>
              </div>
            </div>

            {/* Social Authentication Segment */}
            <div className="flex flex-col items-center mb-4">
              <div className="text-xs font-bold text-gray-800 mb-4 relative w-full text-center flex items-center justify-center before:content-[''] before:w-12 before:h-[1px] before:bg-gray-200 before:mr-3 after:content-[''] after:w-12 after:h-[1px] after:bg-gray-200 after:ml-3">Or</div>
              <div className="flex space-x-4">
                <button className="w-11 h-11 border border-gray-200 rounded-full flex items-center justify-center bg-white shadow-xs font-black text-sm">f</button>
                <button className="w-11 h-11 border border-gray-200 rounded-full flex items-center justify-center bg-white shadow-xs font-bold text-sm">𝕏</button>
                <button className="w-11 h-11 border border-gray-200 rounded-full flex items-center justify-center bg-white shadow-xs font-black text-sm text-red-500">G</button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------- */}
        {/* SCREEN 6 & 7: OTP VERIFICATION SCREENS     */}
        {/* ------------------------------------------- */}
        {(currentScreen === 'otp_empty' || currentScreen === 'otp_filled') && (
          <div className="flex-1 flex flex-col justify-between">
            <div className="px-6 pt-1">
              <button onClick={() => setCurrentScreen('signin')} className="text-gray-400 mb-4 block"><ArrowLeft size={20} /></button>
              <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">Verifying its you</h2>
              <p className="text-xs text-gray-400 text-center max-w-[240px] mx-auto mb-8 leading-relaxed">
                We have sent you an code to your email <span className="text-gray-600 font-semibold">jamshed7256@gmail.com</span>
              </p>

              {/* Code Slots Container */}
              <div className="flex justify-between px-2 mb-4">
                {otp.map((digit, idx) => (
                  <div key={idx} className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${digit ? 'bg-gray-200 text-gray-900' : 'bg-gray-200/60 text-transparent'}`}>
                    {digit || '•'}
                  </div>
                ))}
              </div>

              {/* Resend Helper */}
              <div className="text-center text-xs text-gray-500 font-medium mb-6">
                Didnt receive the OTP <span className="text-[#EF4E4E] font-bold cursor-pointer">Resend code</span>
              </div>

              <button onClick={() => currentScreen === 'otp_filled' ? setCurrentScreen('welcome') : setCurrentScreen('otp_filled')} className="w-full bg-[#EF4E4E] text-white py-4 rounded-2xl font-bold shadow-md">
                Verify
              </button>
            </div>

            {/* Custom Interactive iOS Simulated Grid Keyboard */}
            <div className="bg-[#D1D5DB] p-1.5 grid grid-cols-3 gap-1.5 text-black font-normal pb-4 select-none">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button key={num} onClick={() => handleKeyPress(num)} className="bg-white py-3 rounded-md shadow-xs text-xl active:bg-gray-200 font-semibold flex flex-col items-center justify-center leading-none">
                  {num}
                  {num === 2 && <span className="text-[9px] font-bold text-gray-400 tracking-widest mt-0.5">ABC</span>}
                  {num === 3 && <span className="text-[9px] font-bold text-gray-400 tracking-widest mt-0.5">DEF</span>}
                  {num === 4 && <span className="text-[9px] font-bold text-gray-400 tracking-widest mt-0.5">GHI</span>}
                  {num === 5 && <span className="text-[9px] font-bold text-gray-400 tracking-widest mt-0.5">JKL</span>}
                  {num === 6 && <span className="text-[9px] font-bold text-gray-400 tracking-widest mt-0.5">MNO</span>}
                  {num === 7 && <span className="text-[9px] font-bold text-gray-400 tracking-widest mt-0.5">PQRS</span>}
                  {num === 8 && <span className="text-[9px] font-bold text-gray-400 tracking-widest mt-0.5">TUV</span>}
                  {num === 9 && <span className="text-[9px] font-bold text-gray-400 tracking-widest mt-0.5">WXYZ</span>}
                </button>
              ))}
              <div className="bg-transparent"></div>
              <button onClick={() => handleKeyPress(0)} className="bg-white py-3 rounded-md shadow-xs text-xl font-semibold active:bg-gray-200">0</button>
              <button onClick={handleBackspace} className="bg-transparent py-3 text-lg flex items-center justify-center active:opacity-50 font-bold">⌫</button>
            </div>
          </div>
        )}

        {/* ------------------------------------------- */}
        {/* SCREEN 8: WELCOME TRANSITION SCREEN        */}
        {/* ------------------------------------------- */}
        {currentScreen === 'welcome' && (
          <div className="flex-1 flex flex-col justify-center items-center px-6">
            <h2 className="text-3xl font-serif font-semibold italic text-gray-900 tracking-wide animate-pulse">
              Welcome Jamshed 👋
            </h2>
          </div>
        )}

        {/* ------------------------------------------- */}
        {/* SCREEN 9: MAIN DASHBOARD HOME VIEW         */}
        {/* ------------------------------------------- */}
        {currentScreen === 'dashboard' && (
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            {/* Main Content Area (Scrollable Sandbox) */}
            <div className="flex-1 overflow-y-auto px-5 pt-1 space-y-4 pb-4 scrollbar-none">
              
              {/* Header Profile Section */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[11px] font-bold text-gray-400 block leading-tight">Good Morning,</span>
                  <h3 className="text-base font-black text-gray-900 flex items-center">Jamshed 👋</h3>
                </div>
                <div className="w-9 h-9 border border-gray-200 rounded-xl flex items-center justify-center bg-white shadow-xs text-gray-700 relative">
                  <Bell size={18} />
                  <span className="w-2 h-2 bg-[#EF4E4E] rounded-full absolute top-2 right-2.5"></span>
                </div>
              </div>

              {/* Delivery Dropdown Pill */}
              <div className="bg-white border border-gray-100 rounded-xl p-2.5 flex items-center justify-between shadow-xs">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-red-50 text-[#EF4E4E] rounded-lg"><MapPin size={16} strokeWidth={2.5} /></div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 block leading-none mb-0.5">Deliver to</span>
                    <span className="text-xs font-bold text-gray-800">Home</span>
                  </div>
                </div>
                <ChevronDown size={16} className="text-gray-400 mr-1" />
              </div>

              {/* Search Bar Row */}
              <div className="w-full bg-white border border-gray-100 rounded-xl px-3.5 py-2.5 flex items-center justify-between shadow-xs">
                <div className="flex items-center space-x-2.5 flex-1">
                  <Search size={18} className="text-gray-400" />
                  <input type="text" placeholder="Search for burgers, pizzas, etc..." className="bg-transparent text-xs text-gray-700 outline-none w-full" />
                </div>
                <Mic size={18} className="text-gray-400" />
              </div>

              {/* Categories Block */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <h4 className="text-sm font-black text-gray-900">Catagories</h4>
                  <span className="text-[11px] font-bold text-[#EF4E4E] cursor-pointer">See All</span>
                </div>
                <div className="flex space-x-3 overflow-x-auto scrollbar-none py-1">
                  {[
                    { name: 'Burger', emoji: '🍔' },
                    { name: 'Pizza', emoji: '🍕' },
                    { name: 'Fries', emoji: '🍟' },
                    { name: 'Salad', emoji: '🥗' },
                    { name: 'Drinks', emoji: '🥤' }
                  ].map((cat, idx) => (
                    <div key={idx} className="flex flex-col items-center shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-xs border ${idx === 0 ? 'bg-amber-400 border-amber-400' : 'bg-white border-gray-100'}`}>
                        {cat.emoji}
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 mt-1">{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promotional Banner */}
              <div className="w-full bg-[#EF4E4E] rounded-3xl p-4 text-white relative overflow-hidden flex items-center justify-between shadow-md shadow-red-100">
                <div className="z-10 max-w-[55%]">
                  <span className="bg-white/20 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mb-1">Limited Offer</span>
                  <h3 className="text-lg font-black leading-tight mb-1">40% OFF <br />FREE Delivery</h3>
                  <p className="text-[9px] text-red-100 mb-2">on your first order</p>
                  <button className="bg-white text-[#EF4E4E] text-[10px] font-extrabold px-3 py-1.5 rounded-lg shadow-sm">Order now</button>
                </div>
                <div className="absolute right-2 bottom-0 text-7xl select-none opacity-90 drop-shadow-md">🧑‍🍳</div>
                {/* Visual Indicator Dots inside the card */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  <div className="w-1 h-1 rounded-full bg-white/40"></div>
                  <div className="w-1 h-1 rounded-full bg-white/40"></div>
                </div>
              </div>

              {/* Popular Restaurants Section */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-black text-gray-900">Popular Restaurants</h4>
                  <span className="text-[11px] font-bold text-[#EF4E4E] cursor-pointer">See All</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'Burger House', emoji: '🍔', time: '30 min', rating: '4.3' },
                    { name: 'Pizza Hut', emoji: '🍕', time: '25 min', rating: '4.5' }
                  ].map((res, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs relative">
                      <div className="h-20 bg-orange-50 flex items-center justify-center text-4xl relative">
                        {res.emoji}
                        <button className="absolute top-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-xs rounded-full flex items-center justify-center text-gray-400 hover:text-red-500"><Heart size={12} /></button>
                      </div>
                      <div className="p-2">
                        <h5 className="text-xs font-black text-gray-800 truncate">{res.name}</h5>
                        <div className="flex items-center justify-between text-[9px] text-gray-400 mt-1 font-bold">
                          <span>{res.time} • Free delivery</span>
                          <span className="flex items-center text-amber-500"><Star size={8} className="fill-current mr-0.5"/>{res.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Items Horizontal Section */}
              <div>
                <h4 className="text-sm font-black text-gray-900 mb-2">Popular Items</h4>
                <div className="flex space-x-3 overflow-x-auto scrollbar-none py-0.5">
                  {[
                    { name: 'Chicken Karahi', emoji: '🍲', price: 'Rs. 1200', rating: '4.8' },
                    { name: 'Chicken Biryani', emoji: '🍛', price: 'Rs. 650', rating: '4.9' },
                    { name: 'Delicious Kheer', emoji: '🥣', price: 'Rs. 350', rating: '4.6' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-xl p-2 shrink-0 w-32 shadow-xs relative">
                      <div className="text-3xl text-center mb-1 bg-amber-50/50 py-2 rounded-lg">{item.emoji}</div>
                      <h5 className="text-[11px] font-black text-gray-800 truncate leading-tight">{item.name}</h5>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] font-black text-[#EF4E4E]">{item.price}</span>
                        <span className="text-[8px] font-bold text-amber-500 flex items-center"><Star size={8} className="fill-current mr-0.5"/>{item.rating}</span>
                      </div>
                      <button className="absolute top-1 right-1 w-4 h-4 text-gray-300 hover:text-red-500"><Heart size={10} /></button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sticky Modern Bottom Navigation Bar */}
            <div className="bg-white border-t border-gray-100 py-2 px-6 flex justify-between items-center shadow-md">
              <button onClick={() => setCurrentScreen('splash')} className="flex flex-col items-center text-[#EF4E4E]"><User size={18} strokeWidth={2.5} /><span className="text-[9px] font-bold mt-0.5">Home</span></button>
              <button className="flex flex-col items-center text-gray-400 hover:text-[#EF4E4E]"><Heart size={18} /><span className="text-[9px] font-bold mt-0.5">Favourites</span></button>
              <button className="flex flex-col items-center text-gray-400 hover:text-[#EF4E4E]"><ShoppingCart size={18} /><span className="text-[9px] font-bold mt-0.5">Cart</span></button>
              <button className="flex flex-col items-center text-gray-400 hover:text-[#EF4E4E]"><User size={18} /><span className="text-[9px] font-bold mt-0.5">Profile</span></button>
            </div>

          </div>
        )}

        {/* Global Bottom iOS Home Screen Indicator Bar */}
        <div className="w-32 h-1 bg-black rounded-full mx-auto mb-2 shrink-0 z-50"></div>
      </div>
    </div>
  );
}
