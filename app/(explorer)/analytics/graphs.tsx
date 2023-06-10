import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useRecoilValue } from "recoil";
import { themeState } from "@/state/theme";

const Graphs = () => {
  const dark = useRecoilValue(themeState);

  const chartOptions1 = {
    title: {
      text: "",
    },
    xAxis: {
      categories: ['05-05', '05-06', '05-07', '05-08'],
      labels: {
        style: {
          fontFamily: 'Inter',
          fontSize: "12px",
          color: '#999999',
        },
        rotation: 270
      },
      min: 0,
      // startOnTick: true,
      gridLineWidth: 0,
      plotLines: [{
        value: 0,
        color: '#009DFF4D',
        dashStyle: 'Solid',
        width: 2
      }],
      lineColor: "#009DFF4D",
      lineWidth: 2,
    },
    yAxis: {
      labels: {
        style: {
          fontFamily: 'Inter',
          fontSize: "12px",
          color: '#999999',
        },
      },
      title: {
        text: ""
      },
      min: 100_000,
      max: 150_000,
      // startOnTick: true,
      gridLineWidth: 0,

    },
    plotOptions: {
      series: {
        enableMouseTracking: false,
        lineWidth: 4,
      },
    },
    rangeSelector: {
      enabled: false,
    },
    chart: {
      panning: true,
      alignTicks: false,
      backgroundColor: 'transparent',
      zoomType: 'xy',
    },
    navigator: {
      enabled: false,
    },
    scrollbar: {
      enabled: false,
    },
    series: [
      {
        showInLegend: false,
        data: DATAS1,
        type: 'spline',
        color: '#009DFF53',
        marker: {
          fillColor: "#009DFF",
        },
      },
    ],
    credits: {
      enabled: false
    },
  };

  const chartOptions2 = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',

    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['05-05', '05-06', '05-07', '05-08'],
      crosshair: true,
      labels: {
        style: {
          fontFamily: 'Inter',
          fontSize: "12px",
          color: '#999999',
        },
        rotation: 0
      },
    },
    yAxis: {
      min: 100_000,
      title: {
        text: ''
      },
      labels: {
        style: {
          fontFamily: 'Inter',
          fontSize: "12px",
          color: '#999999',
        },
      },
      gridLineWidth: 0,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      },
      series: {
        enableMouseTracking: false,
      },
    },
    series: [{
      showInLegend: false,
      data: DATAS1,
      color: '#009DFF'
    }],
    credits: {
      enabled: false
    },
  }
  return (
    <div className="flex gap-2 mt-10 ">
      <div className={`w-full ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">User Transaction</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions1}
        />
      </div>
      <div className={`w-full ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">Peak TPS</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions1}
        />
      </div>
      <div className={`w-full ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">Daily Activity Accounts</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions2}
        />
      </div>
      <div className={`w-full ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">New Accounts Created</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions2}
        />
      </div>
    </div>
  )
};

export default Graphs;

const DATAS1 = [
  110_000,
  140_000,
  120_000,
  145_000,
];

// const DATAS1 = [
//   { x: Date.parse('2021-05-05 00:00:00'), y: 100_000 },
//   { x: Date.parse('2021-05-06 00:00:00'), y: 140_000 },
//   { x: Date.parse('2021-05-07 00:00:00'), y: 120_000 },
//   { x: Date.parse('2021-05-08 00:00:00'), y: 145_000 },

// ];