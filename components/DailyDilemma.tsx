// components/DailyDilemma.tsx
'use client';

import { useEffect, useState } from 'react';
import { dailyDilemma, DailyDilemma as D } from '@/data/daily';

export default function DailyDilemma() {
  const [timeLeft, setTimeLeft] = useState<number>(dailyDilemma.duration);
  const [selected, setSelected] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0 || submitted) return;
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, submitted]);

  const handleSubmit = () => setSubmitted(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-debate-panel p-8 rounded-2xl max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Daily Dilemma</h2>
        <p className="mb-6 text-lg">{dailyDilemma.question}</p>

        {!submitted ? (
          <>
            <div className="space-y-4 mb-6">
              {dailyDilemma.options.map((opt) => (
                <label key={opt} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="daily"
                    value={opt}
                    checked={selected === opt}
                    onChange={() => setSelected(opt)}
                    className="form-radio h-5 w-5 text-portal-gold"
                  />
                  <span className="text-mindscape-fg">{opt}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-xl">{timeLeft}s</span>
              <button
                onClick={handleSubmit}
                disabled={!selected}
                className="px-6 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <p className="text-lg">
              You chose: <span className="font-semibold">{selected}</span>
            </p>
            <p className="text-green-400 font-bold">+10 XP!</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-3 bg-portal-gold text-mindscape-bg rounded-full font-semibold"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
