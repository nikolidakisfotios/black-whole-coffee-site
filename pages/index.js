import { useState } from 'react';

export default function Home() {
  const [qty, setQty] = useState(1);
  
  // LOGIC: Production Offset
  // Requested Time (T) - 10 mins (Delivery) - Qty (Production)
  const calculateStartTime = (deliveryTime) => {
    const handoff = 10; // Fixed delivery buffer
    return `Start production ${parseInt(qty) + handoff} minutes before your requested time.`;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] p-8 font-serif">
      <header className="text-center mb-16">
        <h1 className="text-5xl tracking-tighter border-b border-[#4B5563] pb-4 inline-block">BLACK WHOLE</h1>
        <p className="mt-4 text-[#D97706] tracking-widest text-sm uppercase">Next-Day Mass Production</p>
      </header>

      <main className="max-w-2xl mx-auto space-y-12">
        {/* Rare Variety Section */}
        <section className="border border-[#4B5563] p-6 rounded-sm bg-black/40">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl italic">Rare Variety: Obsidian Roast</h2>
            <span className="text-[#D97706] text-xs border border-[#D97706] px-2 py-1 uppercase">Limited Orbit</span>
          </div>
          <p className="text-[#4B5563] text-sm mb-6">Notes: Dark chocolate, cosmic dust, and deep caramel.</p>
          
          <div className="flex items-center gap-4">
            <label className="font-sans text-xs uppercase text-[#4B5563]">Quantity:</label>
            <input 
              type="number" 
              value={qty} 
              onChange={(e) => setQty(e.target.value)}
              className="bg-transparent border border-[#4B5563] text-[#D97706] px-3 py-1 w-20 outline-none"
            />
          </div>
        </section>

        {/* Scheduling Logic Display */}
        <section className="text-center space-y-4 pt-8">
          <h3 className="text-[#4B5563] uppercase tracking-[0.3em] text-xs">Production Logistics</h3>
          <div className="p-4 border-l-2 border-[#D97706] bg-[#D97706]/5 italic text-sm">
            {qty > 0 ? (
              <p>For a {qty}-coffee order, production will lock your machine for {qty} minutes, 
              completing 10 minutes prior to delivery.</p>
            ) : "Select quantity to calculate window."}
          </div>
          <button className="w-full py-4 bg-[#D97706] text-black font-bold uppercase tracking-widest hover:bg-[#F59E0B] transition-all shadow-[0_0_15px_rgba(217,119,6,0.3)]">
            SELECT TOMORROW'S ORBIT
          </button>
        </section>
      </main>
    </div>
  );
}
