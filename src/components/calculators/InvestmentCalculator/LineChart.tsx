import { Box } from "@mui/material";
import _ from "chart.js/auto";
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

const LineChart: React.FC<{
    labels: string[], 
    values: number[],
}> = ({labels, values}) => {

    useEffect(() => {
        if(values.length != labels.length) console.log("value & label count mismatch. some data may be imcomplete");
    }, [labels, values]);

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    });

    const data = {
        labels: labels,
        datasets: [{
            data: values,
            fill : true,
            backgroundColor: 'rgba(59, 209, 111, .1)',
            borderColor: 'rgba(59, 209, 111)',
            borderWidth: 1
        }],
    };

    const options = {
        plugins: {
            title: {
            display: true,
            text: 'Portfolio Growth',
            color : 'rgba(59, 209, 111)',
            font: {
                size: 30
            }
        },
        legend: {
            display: false
        },
        subtitle: {
            display: true,
            text: "Final Value: " + formatter.format(values[values.length - 1]),
            color : 'rgba(255,255,255)',
            font : {
                size : 20
            }
        }
        }
    }

    return (
        <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
            <Line options={options} data={data} width="100%" height="100%"/>
        </Box>
    );
};

export default LineChart;