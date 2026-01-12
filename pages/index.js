import { useState, useEffect } from 'react';

export default function Home() {
  const [qty, setQty] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [minDate, setMinDate] = useState('');

  // EFFECT: Set the minimum date to TOMORROW on load
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  // LOGIC: Production Offset Math
  const handoffOffset = 10; // Fixed 10-minute gap
  const totalLeadTime = parseInt(qty || 0) + handoffOffset;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] p-8 font-serif">
      <header className="text-center mb-12">
        <h1 className="text-5xl tracking-tighter border-b border-[#4B5563] pb-4 inline-block">BLACK WHOLE</h1>
        <p className="mt-4 text-[#D97706] tracking-widest text-sm uppercase font-sans">Next-Day Production Engine</p>
      </header>

      <main className="max-w-xl mx-auto space-y-8">
        {/* Step 1: Quantity */}
        <section className="border border-[#4B5563] p-6 rounded-sm bg-black/40">
          <label className="block text-[#4B5563] uppercase text-xs tracking-widest mb-4">01. Select Volume</label>
          <div className="flex items-center gap-6">
            <input 
              type="number" 
              min="1"
              value={qty} 
              onChange={(e) => setQty(e.target.value)}
              className="bg-transparent border-b-2 border-[#D97706] text-3xl text-[#D97706] w-24 outline-none pb-1"
            />
            <span className="italic text-xl">Fresh Roasts</span>
          </div>
        </section>

        {/* Step 2: Date Picker (Tomorrow Only) */}
        <section className="border border-[#4B5563] p-6 rounded-sm bg-black/40">
          <label className="block text-[#4B5563] uppercase text-xs tracking-widest mb-4">02. Pick Orbit (Next Day Only)</label>
          <input 
            type="date" 
            min={minDate}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-transparent border border-[#4B5563] p-3 text-[#D97706] outline-none invert brightness-200"
          />
        </section>

        {/* Logic Results */}
        {selectedDate && (
          <div className="p-6 bg-[#D97706]/10 border-l-4 border-[#D97706] animate-pulse">
            <h4 className="text-[#D97706] uppercase text-xs font-bold mb-2">System Calculation:</h4>
            <p className="italic">
              Target: {selectedDate} <br />
              Machine Ignition: <span className="text-white font-bold">{totalLeadTime} minutes prior</span> to arrival.
            </p>
          </div>
        )}

        <button className="w-full py-5 bg-[#D97706] text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform">
          Finalize Production Block
        </button>
      </main>
    </div>
  );
}
