var optionsToday = {
  series: [
    {
      name: "Vendas de Hoje",
      data: [
        [1672531200000, 75],
        [1672534800000, 60],
        [1672538400000, 85],
        [1672542000000, 40],
        [1672545600000, 90],
      ],
    },
  ],
  chart: {
    id: "area-datetime-today",
    fontFamily: "Roboto, Arial, sans-serif",
    type: "area",
    height: 250,
    zoom: {
      autoScaleYaxis: true,
    },
    toolbar: {
      show: false,
    },
  },
  grid: {
    borderColor: "#d4d4d4",
    strokeDashArray: 3,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    style: "hollow",
  },
  xaxis: {
    type: "datetime",
    tickAmount: 5,
    labels: {
      format: "HH:mm",
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy, HH:mm",
    },
  },
  colors: ["rgb(175, 175, 175)"],
  stroke: {
    width: [1.2],
    curve: ["smooth"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
};

document.getElementById("todayTableContainer").innerHTML = "";
var chartToday = new ApexCharts(
  document.querySelector("#todayTableContainer"),
  optionsToday
);
chartToday.render();
