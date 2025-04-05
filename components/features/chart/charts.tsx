'use client';
import { Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { chartOptions } from '@/constants';
import Loader from '@/components/common/loader';
import { useGetTransactionsQuery } from '@/store/request';
import { formatDate } from '@/utils';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Charts = () => {
  const { data, isSuccess, isLoading } = useGetTransactionsQuery({});

  const dataAmount = data?.map(({ amount }) => amount!);

  const labels = useMemo(() => {
    const d = data?.map(({ date }) => date).map((label) => label);

    return d?.sort().map((date) => formatDate(date));
  }, [data]);

  const lineGraphData = useMemo(() => {
    const config = {
      labels,
      datasets: [
        {
          data: dataAmount!,
          backgroundColor: '#FF5403',
          borderColor: '#FF5403',
          tension: 0.2,
          borderWidth: 1.5,
        },
      ],
    };

    return config;
  }, [labels, dataAmount]);

  return (
    <Box pos='relative'>
      {isLoading && <Loader />}

      {isSuccess && (
        <Box
          width='100%'
          height='257px'
        >
          <Line
            options={chartOptions}
            data={lineGraphData}
          />
        </Box>
      )}
    </Box>
  );
};

export default Charts;
