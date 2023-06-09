import Info from "./info";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useRecoilValue } from "recoil";
import { themeState } from "@/state/theme";

const ApiStats = () => {
  const dark = useRecoilValue(themeState);

  const chartOptions1 = {
    title: {
      text: "",
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%H-%M-%S %p}',
        style: {
          fontFamily: 'Inter',
          fontSize: "12px",
          color: '#999999',
        },
        rotation: 270
      },
      tickInterval: 5000,
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
        data: DATAS1,
        type: 'spline',
        color: '#FE109F53',
        marker: {
          fillColor: "#FE109F",
        },
      },
      {
        showInLegend: false,
        data: DATAS2,
        type: 'spline',
        color: '#FDC12953',
        marker: {
          fillColor: "#FDC129",
          symbol: "circle"

        },
      },
      {
        showInLegend: false,
        data: DATAS3,
        type: 'spline',
        color: '#009DFF53',
        marker: {
          fillColor: "#009DFF",
          symbol: "circle"
        },
      },
    ],
  };

  const chartOptions2 = {
    ...chartOptions1,
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
      max: 10,
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
    series: [
      {
        showInLegend: false,
        data: DATAS4,
        type: 'line',
        color: '#FE109F',
        marker: {
          radius: 1
        }
      },
      {
        showInLegend: false,
        data: DATAS5,
        type: 'line',
        color: '#009DFF',
        marker: {
          radius: 1
        }
      },
    ],
  };

  return (
    <div>
      <Info />
      <div className={`mt-10 ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">Requests Made</h1>
        <HighchartsReact
          containerProps={{
            style: { height: '300px', width: '100%' },
          }}
          highcharts={Highcharts}
          options={chartOptions1}
        />
      </div>
      <div className={`mt-10 ${dark ? "bg-black" : "bg-white"} mx-4 p-6 drop-shadow-xl`}>
        <h1 className="text-base ml-2 mb-4">Bytes Transferred</h1>
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
}

export default ApiStats;

const DATAS1 = [
  { x: 10000000, y: 0 },
  { x: 10005000, y: 0 },
  { x: 10010000, y: 0 },
  { x: 10015000, y: 2 },
  { x: 10020000, y: 4 },
  { x: 10025000, y: 2 },
  { x: 10030000, y: 0 },
  { x: 10035000, y: 0 },
  { x: 10040000, y: 2 },
  { x: 10045000, y: 0 },
  { x: 10050000, y: 0 },
  { x: 10055000, y: 0 },
  { x: 10060000, y: 0 },
  { x: 10065000, y: 2 },
  { x: 10070000, y: 0 },
  { x: 10075000, y: 0 },
  { x: 10080000, y: 2 },
  { x: 10085000, y: 0 },
  { x: 10090000, y: 0 },
  { x: 10095000, y: 0 },
  { x: 10100000, y: 0 },
  { x: 10105000, y: 0 },
  { x: 10110000, y: 2 },
  { x: 10115000, y: 2 },
  { x: 10120000, y: 2 },
  { x: 10125000, y: 0 },
  { x: 10130000, y: 0 },
  { x: 10135000, y: 0 },
  { x: 10140000, y: 2 },
  { x: 10145000, y: 0 },
  { x: 10150000, y: 0 },
  { x: 10155000, y: 0 },
  { x: 10160000, y: 0 },
  { x: 10165000, y: 0 },
];

const DATAS2 = [
  { x: 10000000, y: 12 },
  { x: 10005000, y: 10 },
  { x: 10010000, y: 12 },
  { x: 10015000, y: 10 },
  { x: 10020000, y: 10 },
  { x: 10025000, y: 10 },
  { x: 10030000, y: 10 },
  { x: 10035000, y: 10 },
  { x: 10040000, y: 12 },
  { x: 10045000, y: 10 },
  { x: 10050000, y: 10 },
  { x: 10055000, y: 10 },
  { x: 10060000, y: 10 },
  { x: 10065000, y: 10 },
  { x: 10070000, y: 12 },
  { x: 10075000, y: 10 },
  { x: 10080000, y: 10 },
  { x: 10085000, y: 12 },
  { x: 10090000, y: 10 },
  { x: 10095000, y: 10 },
  { x: 10100000, y: 10 },
  { x: 10105000, y: 10 },
  { x: 10110000, y: 10 },
  { x: 10115000, y: 12 },
  { x: 10120000, y: 12 },
  { x: 10125000, y: 12 },
  { x: 10130000, y: 10 },
  { x: 10135000, y: 10 },
  { x: 10140000, y: 12 },
  { x: 10145000, y: 10 },
  { x: 10150000, y: 10 },
  { x: 10155000, y: 10 },
  { x: 10160000, y: 10 },
  { x: 10165000, y: 10 },
]

const DATAS3 = [
  { x: 10000000, y: 10 },
  { x: 10005000, y: 10 },
  { x: 10010000, y: 10 },
  { x: 10015000, y: 12 },
  { x: 10020000, y: 14 },
  { x: 10025000, y: 12 },
  { x: 10030000, y: 10 },
  { x: 10035000, y: 10 },
  { x: 10040000, y: 12 },
  { x: 10045000, y: 10 },
  { x: 10050000, y: 10 },
  { x: 10055000, y: 10 },
  { x: 10060000, y: 10 },
  { x: 10065000, y: 12 },
  { x: 10070000, y: 10 },
  { x: 10075000, y: 10 },
  { x: 10080000, y: 12 },
  { x: 10085000, y: 10 },
  { x: 10090000, y: 10 },
  { x: 10095000, y: 10 },
  { x: 10100000, y: 10 },
  { x: 10105000, y: 10 },
  { x: 10110000, y: 12 },
  { x: 10115000, y: 12 },
  { x: 10120000, y: 12 },
  { x: 10125000, y: 10 },
  { x: 10130000, y: 10 },
  { x: 10135000, y: 10 },
  { x: 10140000, y: 12 },
  { x: 10145000, y: 10 },
  { x: 10150000, y: 10 },
  { x: 10155000, y: 10 },
  { x: 10160000, y: 10 },
  { x: 10165000, y: 10 },
]

const DATAS4 = [
  { x: 10000000, y: 2 },
  { x: 10165000, y: 2 },
]

const DATAS5 = [
  { x: 10000000, y: 0 },
  { x: 10005000, y: 0 },
  { x: 10010000, y: 0 },
  { x: 10015000, y: 2 },
  { x: 10020000, y: 4 },
  { x: 10025000, y: 2 },
  { x: 10030000, y: 0 },
  { x: 10035000, y: 0 },
  { x: 10040000, y: 2 },
  { x: 10045000, y: 0 },
  { x: 10050000, y: 0 },
  { x: 10055000, y: 0 },
  { x: 10060000, y: 0 },
  { x: 10065000, y: 2 },
  { x: 10070000, y: 0 },
  { x: 10075000, y: 0 },
  { x: 10080000, y: 2 },
  { x: 10085000, y: 0 },
  { x: 10090000, y: 0 },
  { x: 10095000, y: 0 },
  { x: 10100000, y: 0 },
  { x: 10105000, y: 0 },
  { x: 10110000, y: 2 },
  { x: 10115000, y: 2 },
  { x: 10120000, y: 2 },
  { x: 10125000, y: 0 },
  { x: 10130000, y: 0 },
  { x: 10135000, y: 0 },
  { x: 10140000, y: 2 },
  { x: 10145000, y: 0 },
  { x: 10150000, y: 0 },
  { x: 10155000, y: 0 },
  { x: 10160000, y: 0 },
  { x: 10165000, y: 0 },
]