var optionsMonth = {
  series: [
    {
      name: "Vendas do Mês",
      data: [
        [1672531200000, 250], // Exemplo de vendas do mês
        [1672617600000, 180], // Exemplo de vendas do mês
        [1672704000000, 300], // Exemplo de vendas do mês
        [1672790400000, 450], // Exemplo de vendas do mês
        [1672876800000, 200], // Exemplo de vendas do mês
      ],
    },
  ],
  chart: {
    id: "area-datetime-month",
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
    min: new Date("01 Feb 2025").getTime(),
    max: new Date("28 Feb 2025").getTime(),
    tickAmount: 5,
    labels: {
      format: "dd MMM", // Exibe os dias do mês
    },
  },
  tooltip: {
    x: {
      format: "dd MMM yyyy",
    },
  },
  colors: ["rgb(54, 162, 235)"], // Cor do gráfico
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

document.getElementById("monthTableContainer").innerHTML = "";
var chartMonth = new ApexCharts(
  document.querySelector("#monthTableContainer"),
  optionsMonth
);
chartMonth.render();
