import React from "react";
import { Col, Row } from "react-bootstrap";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { DashboardCard } from "../dashboardCard/dashboardCard";
import "./dashboardContent.css";
import { useSelector } from "react-redux";
import { CustomTable } from "../customTable/customTable";

export const DashboardContent = (props) => {
  const defaultLanguage = useSelector((state) => state.language.defaultLanguage);
  const themeColor = useSelector((state) => state.theme.defaultTheme);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const pieData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  return (
    <div className="dashboardContentContainer defaultShadow" style={{ backgroundColor: themeColor.color3 }}>
      <Row>
        <Col xs={12} md={12} lg={4} className="dashboardCardCol">
          <DashboardCard title={defaultLanguage.numberOfSales} value={`55 ${defaultLanguage.number}`}>
            <ResponsiveContainer width="100%" height={110}>
              <BarChart
                width={"100%"}
                height={"100%"}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  left: 20,
                  bottom: 0,
                }}
              >
                <Tooltip
                  contentStyle={{ backgroundColor: "#212529cc", borderRadius: 15, border: "none", color: "white" }}
                  cursor={{ fill: "transparent" }}
                />
                <Bar dataKey="pv" fill="#ff9e00" strokeLinecap={0} animationDuration={800} />
              </BarChart>
            </ResponsiveContainer>
          </DashboardCard>
        </Col>
        <Col xs={12} md={6} lg={4} className="dashboardCardCol mt-3 mt-lg-0">
          <DashboardCard title={defaultLanguage.totalSale} value={`120,000,25 ${defaultLanguage.persian ? "ریال" : "$"}`}>
            <ResponsiveContainer width="100%" height={110}>
              <AreaChart
                width={"100%"}
                height={"100%"}
                data={data}
                margin={{
                  top: 20,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <Tooltip cursor={false} contentStyle={{ backgroundColor: "#212529cc", borderRadius: 15, border: "none" }} />
                <Area type="natural" dataKey="uv" stroke="white" fill="#48cae4" animationDuration={800} />
              </AreaChart>
            </ResponsiveContainer>
          </DashboardCard>
        </Col>
        <Col xs={12} md={6} lg={4} className="dashboardCardCol mt-3 mt-lg-0">
          <DashboardCard title={defaultLanguage.totalValidity} value={`120,000,25 ${defaultLanguage.persian ? "ریال" : "$"}`}>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart
                width={"100%"}
                height={"100%"}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  left: 20,
                  bottom: 0,
                }}
              >
                <Tooltip cursor={false} contentStyle={{ backgroundColor: "#212529cc", borderRadius: 15, border: "none" }} />
                <Line type="monotone" dataKey="pv" stroke="white" fill="#5a189a" activeDot={{ r: 5 }} animationDuration={800} />
              </LineChart>
            </ResponsiveContainer>
          </DashboardCard>
        </Col>
        <Col xs={12} md={4} style={{ marginTop: 20 }}>
          <div
            className={`chartContainer ${defaultLanguage.persian ? "text-end" : "text-start"} shadow`}
            style={{ backgroundColor: themeColor.cardColor }}
          >
            <div className="p-3">
              <span style={{ fontWeight: "bold", color: themeColor.titleColor }}>{defaultLanguage.pieChartTitle}</span>
            </div>
            <ResponsiveContainer width="100%" height={200} className="mb-4">
              <PieChart>
                <Pie
                  dataKey="value"
                  startAngle={0}
                  endAngle={360}
                  label
                  data={pieData}
                  innerRadius={40}
                  outerRadius={80}
                  fill="#f77d03"
                  fontSize="0.8em"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col xs={12} md={8} style={{ marginTop: 20 }}>
          <div
            className={`chartContainer ${defaultLanguage.persian ? "text-end" : "text-start"} shadow`}
            style={{ backgroundColor: themeColor.cardColor }}
          >
            <div className="p-3">
              <span style={{ fontWeight: "bold", color: themeColor.titleColor }}>{defaultLanguage.lineChartTitle}</span>
            </div>
            <ResponsiveContainer width="100%" height={200} className="mb-4">
              <LineChart
                data={data}
                margin={{
                  top: 20,
                  bottom: 10,
                }}
              >
                <XAxis dataKey="name" style={{ fontSize: "0.8em" }} stroke={themeColor.titleColor} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#212529cc", borderRadius: 15, border: "none", color: "white", fontSize: "0.8em" }}
                  cursor={{ fill: "transparent" }}
                />
                <Line type="monotone" dataKey="pv" stroke="#4cc9f0" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#ef3121" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col xs={12} style={{ marginTop: 20 }}>
          <CustomTable />
        </Col>
      </Row>
    </div>
  );
};
