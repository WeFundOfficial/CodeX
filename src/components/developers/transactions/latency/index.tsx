import Info from "./info"
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useRecoilValue } from "recoil";
import { themeState } from "@/state/theme";

const Latency = () => {
  const dark = useRecoilValue(themeState);

  const chartOptions = {
    title: {
      text: "",
    },
    xAxis: {
      // type: 'datetime',
      labels: {
        style: {
          fontFamily: 'Inter',
          fontSize: "12px",
          color: '#999999',
        },
        formatter: (value: any) => {
          const str = value.pos.toString().split('.');
          str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return str.join('.');
        },
        rotation: 270
      },
      tickInterval: 2,
      // ordinal: false,
      // visible: true,
      // zoomEnabled: true,
      // startOnTick: true,
      gridLineColor: '#999999',
      gridLineWidth: 1,
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
      tickInterval: 2,
      startOnTick: true,
      gridLineColor: '#999999',
      gridLineWidth: 1,
    },
    plotOptions: {
      series: {
        enableMouseTracking: false,
        lineWidth: 2,
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
        data: DATAS,
        type: 'spline',
        color: '#009DFF53',
        marker: {
          fillColor: "#009DFF",
        },
      },
    ],
  };

  return (
    <div style={{color: "#999999"}}>
      <Info />
      <div className={`mt-10 ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">Blocktimes (Last 50 blocks)</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
      <div className={`mt-10 ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">Blocksize (Last 50 blocks)</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
      <div className={`mt-10 ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">Extrinsics (Last 50 blocks)</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
      <div className={`mt-10 ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">Events (Last 50 blocks)</h1>
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
}

export default Latency;

const DATAS =
  [
    { x: 15879766, y: 6000 },
    { x: 15879768, y: 6002 },
    { x: 15879770, y: 6001 },
    { x: 15879772, y: 6000 },
    { x: 15879774, y: 5999 },
    { x: 15879776, y: 6000 },
    { x: 15879778, y: 6002 },
    { x: 15879780, y: 6001 },
    { x: 15879782, y: 5999 },
    { x: 15879784, y: 5998 },
    { x: 15879786, y: 5997 },
    { x: 15879788, y: 5996 },
    { x: 15879790, y: 5997 },
    { x: 15879792, y: 5996 },
    { x: 15879794, y: 5997 },
    { x: 15879796, y: 5998 },
    { x: 15879798, y: 5999 },
    { x: 15879800, y: 5998 },
    { x: 15879802, y: 5999 },
    { x: 15879804, y: 6000 },
    { x: 15879806, y: 6001 },
    { x: 15879808, y: 6001.5 },
    { x: 15879810, y: 6000 },
    { x: 15879812, y: 5999 },
    { x: 15879814, y: 5998 },
    { x: 15879816, y: 5999 },
    { x: 15879818, y: 6000 },
    { x: 15879820, y: 6002 },
    { x: 15879822, y: 6004 },
    { x: 15879824, y: 6003 },
    { x: 15879826, y: 6002 },
    { x: 15879828, y: 6001 },
    { x: 15879830, y: 6002 },
    { x: 15879832, y: 6002 },
  ]