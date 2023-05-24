export const initialOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Loading Data...',
        },
    },
};

export const initialData = {
    labels: [],
    datasets: [
        {
            label: 'Loading',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Loading',
            data: [],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};