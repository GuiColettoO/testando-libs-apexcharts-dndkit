import styles from "./Header.module.css";

export const Header = ({
  handleNewCircularChart,
  handleNewGaugeChart,
  handleNewLineChart,
  handleNewAreaChart,
  handleNewColumnChart,
  handleNewMultiAxisChart,
}) => {
  return (
    <div className={styles.header}>
      <button onClick={handleNewCircularChart}>New Circular Chart</button>
      <button onClick={handleNewGaugeChart}>New Gauge Chart</button>
      <button onClick={handleNewLineChart}>New Line Chart</button>
      <button onClick={handleNewAreaChart}>New Area Chart</button>
      <button onClick={handleNewColumnChart}>New Column Chart</button>
      <button onClick={handleNewMultiAxisChart}>New Multi-Axis Chart</button>
    </div>
  );
};
