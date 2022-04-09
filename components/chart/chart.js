import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Legend } from 'recharts';

const data = [
  { label: 'مربی', sales: 21 },
  { label: 'مقدماتی', sales: 35 },
  { label: 'مبتدی', sales: 75 },
  { label: 'متوسطه', sales: 51 },
  { label: 'پیشرفته', sales: 41 },
  { label: 'تندم', sales: 47 },
  { label: 'آزاد', sales: 47 }
];

export default function Recharts() {
  return (
    <div className="row" style={{width: '100%'}}>

      <div className="section col-md-6">
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <XAxis dataKey="label" />
              <Tooltip />
              <Legend/>
              <Bar dataKey="sales" fill="rgb(0,255,0)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  )
}