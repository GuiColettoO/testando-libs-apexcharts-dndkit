import ReactApexChart from "react-apexcharts";

export const LineChart = ({ dynamicData }) => {
  const options = {
    chart: {
      id: "pressure-line-chart",
      toolbar: {
        show: false, // Esconde a barra de ferramentas do gráfico
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Eixo X
    },
    stroke: {
      curve: "smooth", // Define linhas suaves
      width: [2, 2, 2], // Espessura das linhas
    },
    title: {
      text: "Monitoramento de Pressão",
      align: "center", // Centraliza o título
    },
    colors: ["red", "blue", "green"], // Cores das linhas
    grid: {
      show: true, // Exibe a grade no gráfico
    },
    legend: {
      position: "top", // Posiciona a legenda no topo
    },
  };

  // Dados estáticos e dinâmicos para o gráfico
  const series = [
    {
      name: "Valor Máximo",
      data: [100, 100, 100, 100, 100, 100, 100], // Linha constante
    },
    {
      name: "Valor Atual",
      data: dynamicData || [70, 40, 45, 80, 110, 120, 60], // Linha dinâmica recebida via props
    },
    {
      name: "Valor Mínimo",
      data: [50, 50, 50, 50, 50, 50, 50], // Linha constante
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options} // Configurações do gráfico
        series={series} // Dados para exibir
        type="line" // Tipo de gráfico (line)
        height={350} // Altura do gráfico
      />
    </div>
  );
};
