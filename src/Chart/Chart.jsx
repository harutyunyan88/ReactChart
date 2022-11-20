import { useSelector } from "react-redux";
import styles from "./chart.module.scss";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import icon5 from "./img/icon5.png";
import CircularProgress from "@mui/material/CircularProgress";
import ChartLabel from "../components/chartsLabel/ChartLabel";

export default function Chart() {
  const { data } = useSelector((state) => state.chartData);

  return (
    <>
      {data.project ? (
        <section className={styles.chartSection}>
          <h1>
            {data.project} / {data.period}
          </h1>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem
              nodeId={String(data.chart.id)}
              label={
                <ChartLabel
                  icon={icon1}
                  length={data.chart.sub.length}
                  title={data.chart.title}
                  period_start={data.chart.period_start}
                  period_end={data.chart.period_end}
                  bgcolor="#e2ebff"
                  width="148px"
                  border="#497cf6"
                />
              }
            >
              {data.chart.sub.map((banner, i) => {
                return (
                  <TreeItem
                    key={i}
                    nodeId={String(banner.id)}
                    label={
                      <ChartLabel
                        icon={icon2}
                        length={banner.sub.length}
                        title={banner.title}
                        period_start={banner.period_start}
                        period_end={banner.period_end}
                        bgcolor="#FFF2E0"
                        width="126px"
                        border="#FFA530"
                      />
                    }
                  >
                    {banner.sub.map((choice, i) => {
                      return (
                        <TreeItem
                          key={i}
                          nodeId={String(choice.id)}
                          label={
                            <ChartLabel
                              icon={icon3}
                              length={choice.sub.length ? choice.sub.length : 0}
                              title={choice.title}
                              period_start={choice.period_start}
                              period_end={choice.period_end}
                              bgcolor="#CFF0D6"
                              width="105px"
                              border="#2DB77B"
                            />
                          }
                        >
                          {choice.sub.map((custom, i) => {
                            return (
                              <TreeItem
                                key={i}
                                nodeId={String(custom.id)}
                                label={
                                  <ChartLabel
                                    icon={icon4}
                                    length={
                                      custom.sub.length ? custom.sub.length : 0
                                    }
                                    title={custom.title}
                                    period_start={custom.period_start}
                                    period_end={custom.period_end}
                                    bgcolor="#CFF0D6"
                                    width="65px"
                                    border="#2DB77B"
                                  />
                                }
                              >
                                {custom.sub.map((cus, i) => {
                                  return (
                                    <TreeItem
                                      nodeId={String(cus.id)}
                                      key={i}
                                      label={
                                        <ChartLabel
                                          icon={icon5}
                                          length={
                                            cus.sub?.length
                                              ? custom.sub.length
                                              : 0
                                          }
                                          title={cus.title}
                                          period_start={cus.period_start}
                                          period_end={cus.period_end}
                                          bgcolor="#FFF2E0"
                                          width="42px"
                                          border="#FFA530"
                                        />
                                      }
                                    />
                                  );
                                })}
                              </TreeItem>
                            );
                          })}
                        </TreeItem>
                      );
                    })}
                  </TreeItem>
                );
              })}
            </TreeItem>
          </TreeView>
        </section>
      ) : (
        <section className={styles.loadingPage}>
          <CircularProgress color="success" size={80} />
        </section>
      )}
    </>
  );
}
