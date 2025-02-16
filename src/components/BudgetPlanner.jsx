// src/components/BudgetPlanner.jsx
import { useState } from 'react';

export default function BudgetPlanner() {
  const [income, setIncome] = useState('');
  
  // Ensure income is a number. If not, default to 0.
  const monthlyIncome = parseFloat(income) || 0;
  const essentials = monthlyIncome * 0.5;
  const discretionary = monthlyIncome * 0.3;
  const savings = monthlyIncome * 0.2;

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>50/30/20 Budget Planner</h2>
      <p>
        Enter your monthly net income below to see how you can allocate your money following the popular 50/30/20 rule.
      </p>
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        <strong>Monthly Net Income (£):</strong>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="e.g. 2000"
          style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
        />
      </label>
      {monthlyIncome > 0 && (
        <div>
          <h3>Budget Breakdown</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>Category</th>
                <th style={{ textAlign: 'right', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>Allocation (£)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Essentials (50%)</td>
                <td style={{ textAlign: 'right' }}>£{essentials.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Discretionary (30%)</td>
                <td style={{ textAlign: 'right' }}>£{discretionary.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Savings (20%)</td>
                <td style={{ textAlign: 'right' }}>£{savings.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
