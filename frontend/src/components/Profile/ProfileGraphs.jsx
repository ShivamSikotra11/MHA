import React, { memo, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility"; // Import Highcharts Accessibility module
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
import { useMainContext } from "../../store/MainContext";

// Initialize Highcharts Accessibility module
HighchartsAccessibility(Highcharts);

const ProfileGraphs = () => {

  const { isuserProfileUpdating, graphData, getGraphs } = useMainContext();
  const data = graphData.slice(-7);

  const months = data.map((entry) => entry.Month);

  const createChart = (containerId, title, yAxisTitle, seriesName, data) => {
    Highcharts.chart(containerId, {
      chart: {
        type: "line",
        backgroundColor: "#f7f7f7",
      },
      title: {
        text: title,
        style: {
          color: "#333333",
          fontSize: "25px", // Customize the title font size here
          fontWeight: "bold",
        },
      },
      xAxis: {
        categories: months,
        gridLineColor: "#dddddd",
        labels: {
          style: {
            fontSize: "18px", // Customize the xAxis label font size here
          },
        },
      },
      yAxis: {
        title: {
          text: yAxisTitle,
          style: {
            color: "#333333",
            fontWeight: "bold",
            fontSize: "18px", // Customize the yAxis title font size here
          },
        },
        gridLineColor: "#dddddd",
        labels: {
          style: {
            fontSize: "16px", // Customize the yAxis label font size here
          },
        },
      },
      series: [
        {
          name: seriesName,
          data: data,
          color: "#007bff",
        },
      ],
      legend: {
        enabled: true,
        itemStyle: {
          color: "#333333",
          fontWeight: "normal",
          fontSize: "16px", // Customize the legend item font size here
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderColor: "#aaaaaa",
        borderRadius: 8,
        borderWidth: 1,
        style: {
          color: "#333333",
          fontSize: "16px", // Customize the tooltip font size here
        },
      },
    });
  };

  if (data.length !== 0) {
    useEffect(() => {
      createChart(
        "sleepChart",
        "Sleep Score",
        "Score",
        "Sleep Score",
        data.map((entry) => entry.sleepScore)
      );
      createChart(
        "stressChart",
        "Stress Score",
        "Score",
        "Stress Score",
        data.map((entry) => entry.stressScore)
      );
      createChart(
        "depressionChart",
        "Depression Score",
        "Score",
        "Depression Score",
        data.map((entry) => entry.depressionScore)
      );
      createChart(
        "anxietyChart",
        "Anxiety Score",
        "Score",
        "Anxiety Score",
        data.map((entry) => entry.anxietyScore)
      );
    }, []);
  }
  return (
    <Wrapper className="">
      <p className="text-black font-inter text-5xl font-semibold max-[440px]:text-4xl">
        Graphs
      </p>

      {data.length === 0 ? (
   <div className="text-[2.4rem] text-center">No Graphs</div>
      ) : (
        <div className="chart-container">
          <div className="chart-item" id="sleepChart"></div>
          <div className="chart-item" id="stressChart"></div>
          <div className="chart-item" id="depressionChart"></div>
          <div className="chart-item" id="anxietyChart"></div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .chart-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
  }

  .chart-item {
    width: 40%;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    .chart-item {
      width: 100%;
    }
  }
  @media screen and (max-width: 490px) {
    .chart-item {
      height: 40rem;
    }
  }
  @media screen and (max-width: 380px) {
    .chart-item {
      height: 35rem;
    }
  }
`;

export default ProfileGraphs;
