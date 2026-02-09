import { ArrowRight } from "lucide-react";

/**
 * Reusable Flow Diagram component showing Input → Traigent → Output
 * @param {Object} props
 * @param {string} props.variant - "light" for Homepage (white bg), "dark" for OnePager (dark bg)
 */
export default function FlowDiagram({ variant = "light" }) {
  const isDark = variant === "dark";

  const boxBg = isDark ? "bg-slate-800" : "bg-slate-900";
  const arrowColor1 = isDark ? "text-blue-400" : "text-blue-500";
  const arrowColor2 = isDark ? "text-emerald-400" : "text-emerald-500";
  const mobileTextColor = isDark ? "text-blue-400" : "text-indigo-600";

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-11 gap-2 items-stretch">
        {/* Input Box */}
        <div className={`md:col-span-4 ${boxBg} rounded-xl p-5 border border-slate-700`}>
          <h4 className="font-bold text-white mb-3">Input: <span className="text-blue-300">The Tunable Universe</span></h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
              <span><strong className="text-white">Agent Blueprint:</strong> Initial logic, prompts, and tool definitions.</span>
            </li>
            <li className="flex items-start gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
              <span><strong className="text-white">Optimization Goal:</strong> Your EvalSet (.jsonl) and KPI weights.</span>
            </li>
            <li className="flex items-start gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
              <span><strong className="text-white">Search Space:</strong> Massive N-dimensional grid (Models × RAG × ... × <em>k</em> × Temp).</span>
            </li>
          </ul>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:flex justify-center items-center">
          <ArrowRight className={`w-6 h-6 ${arrowColor1}`} />
        </div>

        {/* Center - Traigent Engine */}
        <div className="md:col-span-1 flex justify-center items-center">
          <div className="relative">
            {isDark ? (
              <div className="w-24 h-24 flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/traigent-logo-icon.png`}
                  alt="Traigent"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                />
              </div>
            ) : (
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-3xl">⚡</span>
              </div>
            )}
            <div className={`absolute ${isDark ? '-bottom-4' : '-bottom-6'} left-1/2 -translate-x-1/2 whitespace-nowrap`}>
              <span className={`text-xs ${isDark ? 'text-blue-400' : 'text-indigo-600'} font-semibold`}>TRAIGENT</span>
            </div>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:flex justify-center items-center">
          <ArrowRight className={`w-6 h-6 ${arrowColor2}`} />
        </div>

        {/* Output Box */}
        <div className={`md:col-span-4 ${boxBg} rounded-xl p-5 border border-emerald-500/30`}>
          <h4 className="font-bold text-white mb-3 whitespace-nowrap">Output: <span className="text-emerald-300">The Safest Implementation</span></h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></span>
              <span><strong className="text-white">Optimal Config:</strong> The mathematically best-performing implementation.</span>
            </li>
            <li className="flex items-start gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></span>
              <span><strong className="text-white">Validated KPI:</strong> Proven accuracy, speed, and cost efficiency.</span>
            </li>
            <li className="flex items-start gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></span>
              <span><strong className="text-white">Evidence Report:</strong> Full trial history and KPI validation data.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile arrows */}
      <div className="flex md:hidden justify-center my-4">
        <div className={`flex flex-col items-center gap-2 ${mobileTextColor}`}>
          <span className="rotate-90">→</span>
          <span className="text-xs font-semibold">TRAIGENT</span>
          <span className="rotate-90">→</span>
        </div>
      </div>
    </div>
  );
}
