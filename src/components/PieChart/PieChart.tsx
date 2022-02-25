import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

import { CategoriesData } from "../Search";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface PieProps {
  metrics: CategoriesData[];
}

export const PieChart = ({ metrics }: PieProps): JSX.Element => {
  const data = {
    title: {
      display: true,
      text: "Categories by value",
    },
    labels: metrics.map(({ category }) => category),
    datasets: [
      {
        label: "# of Votes",
        data: metrics.map(({ data }) =>
          data.reduce((prev, next) => prev + next.value, 0)
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    title: {
      display: true,
      text: "Categories by value",
    },
    labels: metrics.map(({ data }) => data.map(({ label }) => label))[0],
    datasets: [
      {
        label: "# of Votes",
        data: metrics.map(({ data }) => data.map(({ value }) => value))[0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const data3 = {
    title: {
      display: true,
      text: "Categories by value",
    },
    labels: metrics.map(({ data }) => data.map(({ label }) => label))[1],
    datasets: [
      {
        label: "# of Votes",
        data: metrics.map(({ data }) => data.map(({ value }) => value))[1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const data4 = {
    title: {
      display: true,
      text: "Categories by value",
    },
    labels: metrics.map(({ data }) => data.map(({ label }) => label))[2],
    datasets: [
      {
        label: "# of Votes",
        data: metrics.map(({ data }) => data.map(({ value }) => value))[2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        width: "250px",
        margin: "50px 0",
      }}
    >
      <Pie data={data} />
      <Pie data={data2} />
      <Pie data={data3} />
      <Pie data={data4} />
    </div>
  );
};
