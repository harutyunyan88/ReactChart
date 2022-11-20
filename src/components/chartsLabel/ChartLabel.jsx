import styles from "../../Chart/chart.module.scss";

export default function ChartLabel({
  icon,
  length,
  title,
  period_start,
  period_end,
  bgcolor,
  width,
  border,
}) {
  console.log(bgcolor, width, border);
  return (
    <div className={styles.treeItem}>
      <div className={styles.itemInfo}>
        <img src={icon} alt="" />
        <p>{length}</p>
        <h4 className={styles.itemTitle}>{title}</h4>
      </div>
      <div className={styles.itemChart}>
        <div className={styles.itemChartBlock}>
          <p>
            {period_start} - {period_end}
          </p>
          <div
            style={{
              backgroundColor: bgcolor,
              width: width,
              borderColor: border,
            }}
          ></div>
        </div>
        <p className={styles.itemTitle}>{title}</p>
      </div>
    </div>
  );
}
