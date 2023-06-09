import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useRecoilValue } from "recoil";
import { themeState } from "@/state/theme";

const Graphs = () => {
  const dark = useRecoilValue(themeState);

  const chartOptions = {
    title: {
      text: "",
    },
    xAxis: {
      categories: ['05-05', '05-06', '05-07', '05-08'],
      type: 'datetime',
      labels: {
        format: '{value:%m-%d}',
        style: {
          fontFamily: 'Inter',
          fontSize: "12px",
          color: '#999999',
        },
        rotation: 270
      },
      min: 0,
      // tickInterval: 5000,
      // ordinal: false,
      // visible: true,
      // zoomEnabled: true,
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
      // tickPositioner: (e) => {
      // console.log(e)
      // var ticks = this.tickPositions,
      //   firstTick = ticks[0],
      //   lastTick = ticks[ticks.length - 1];
      // return ticks.filter(function (tick) {
      //   return tick !== firstTick && tick !== lastTick;
      // });
      // },
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
  };
  return (
    <div className="flex gap-2 mt-10 ">
      <div className={`w-full ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">User Transaction</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
      <div className={`w-full ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">Peak TPS</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
      <div className={`w-full ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">User Transaction</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
      <div className={`w-full ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">Peak TPS</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    </div>
  )
};

export default Graphs;

const DATAS1 = [
  100_000,
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