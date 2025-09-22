import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

// Chart.js elementlarini ro'yxatdan o'tkazish
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

// Pie chart uchun ma'lumotlar
const pieData = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#6C63FF', // Soft Indigo
        '#00C9A7', // Mint Green
        '#FFB627', // Amber Yellow
        '#FF6B6B', // Coral Red
        '#5F6CAF', // Slate Blue
        '#C1C8E4', // Light Grayish Blue
      ],
      borderColor: [
        '#4B44E0', // Indigo Dark
        '#00B092', // Darker Mint
        '#E09B00', // Amber Dark
        '#E05B5B', // Coral Dark
        '#4C538E', // Slate Dark
        '#AAB3D0', // Gray Blue Dark
      ],
      borderWidth: 1,
    },
  ],
};

// Bar chart uchun opsiyalar va ma'lumotlar
export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const, // 'top' ni aniq string literal sifatida belgilash
    },
    title: {
      display: true,
      text: 'Bar Chart Statistics',
    },
  },
};

const barLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const barData = {
  labels: barLabels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [650, 590, 800, 810, 560, 550, 400], // Hardcoded raqamlar faker o‘rniga
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [280, 480, 400, 190, 860, 270, 900],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Statistics = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Statistics</h2>

      {/* Pie Chart */}
      <div className="w-[300px] mb-10">
        <Pie data={pieData} />
      </div>

      {/* Bar Chart */}
      <div className="w-[530px]">
        <Bar options={barOptions} data={barData} />
      </div>
    </div>
  );
};

export default Statistics;
