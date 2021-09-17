import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = ({ logs }) => {
    return (
      <div>
      {logs && logs.map((log) => {
        return (
      < Bar
        data= {{
          labels: ['sad', 'happy', 'energetic', 'lethargic'],
          datasets: [
            {
              label: 'Day',
              data: [12, 19, 3, 2],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
              ],
              borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
            },
            {
              label: 'week',
              data: [8, 12, 5, 14],
              backgroundColor: [
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)',
              ]
            }
          ],
        }}
        height= {400}
        width= {600}
        options={{
          mainAspectRatio: false,
          scales: {
            yAxis: [
              {
                ticks: {
                  beginAtZero: true,
                }
              }
            ]
          }
        }}
      />
      </div>
    )
  )
}
  }

export default BarChart
