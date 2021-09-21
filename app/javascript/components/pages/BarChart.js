import React from "react";
import { Bar } from "react-chartjs-2";
import { format } from "date-fns";

const BarChart = ({ logs }) => {
  console.log({ logs });
  return (
    <div>
      {logs &&
        logs.map((log) => {
          return (
            <Bar
              data={{
                labels: ["sad", "happy", "energetic", "lethargic"],
                datasets: [
                  {
                    label: `${format(new Date(log.date), "MMMM dd yy")}`,
                    data: [
                      `${log.sad}`,
                      `${log.happy}`,
                      `${log.energetic}`,
                      `${log.lethargic}`,
                    ],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.5)",
                      "rgba(54, 162, 235, 0.5)",
                      "rgba(255, 206, 86, 0.5)",
                      "rgba(75, 192, 192, 0.5)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                    ],
                    borderWidth: 1,
                  }
                ],
              }}
              height={100}
              width={300}
              options={{
                mainAspectRatio: false,
                scales: {
                  y: 
                    {
                        beginAtZero: true,
                        max: 5
                    }
                },
              }}
            />
          );
        })}
    </div>
  );
};

export default BarChart;
