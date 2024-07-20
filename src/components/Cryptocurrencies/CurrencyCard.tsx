import { Moment } from "moment";
import { ReactElement, useEffect, useState } from "react";
import useResizeObserver from "use-resize-observer";
import usePrevious from "../../hooks/use-prev";
import axios from "axios";
import { convertMarketOverviewData, promisifiedDelay } from "../../utils";
import { VictoryGroup, VictoryLine } from "victory";
import Disabler from "../Disabler";
import { IGeneraDataItem } from "../../redux/slices/cryptoDataSlice";
import { useAppSelector } from "../../hooks/use-store";
import { COMAPRE_HISTOHOUR_URL, COMPARE_API_KEY } from "../../constants/api";

const ArrowTop = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.380952"
      y="0.880952"
      width="15.2381"
      height="15.2381"
      rx="7.61905"
      stroke="#00C287"
      strokeWidth="0.761905"
    />
    <path
      d="M8.32325 5.12914C8.14472 4.95062 7.85528 4.95062 7.67675 5.12914L4.76751 8.03838C4.58899 8.21691 4.58899 8.50636 4.76751 8.68488C4.94604 8.86341 5.23548 8.86341 5.41401 8.68488L8 6.09889L10.586 8.68488C10.7645 8.86341 11.054 8.86341 11.2325 8.68488C11.411 8.50636 11.411 8.21691 11.2325 8.03838L8.32325 5.12914ZM7.54286 11.5476C7.54286 11.8001 7.74753 12.0048 8 12.0048C8.25247 12.0048 8.45714 11.8001 8.45714 11.5476L7.54286 11.5476ZM7.54286 5.45239L7.54286 11.5476L8.45714 11.5476L8.45714 5.45239L7.54286 5.45239Z"
      fill="#00C287"
    />
  </svg>
);
const ArrowDown = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.380952"
      y="-0.380952"
      width="15.2381"
      height="15.2381"
      rx="7.61905"
      transform="matrix(1 0 0 -1 0 15.7381)"
      stroke="#E72D04"
      strokeWidth="0.761905"
    />
    <path
      d="M8.32325 11.8709C8.14472 12.0494 7.85528 12.0494 7.67675 11.8709L4.76751 8.96162C4.58899 8.78309 4.58899 8.49364 4.76751 8.31512C4.94604 8.13659 5.23548 8.13659 5.41401 8.31512L8 10.9011L10.586 8.31512C10.7645 8.13659 11.054 8.13659 11.2325 8.31512C11.411 8.49364 11.411 8.78309 11.2325 8.96162L8.32325 11.8709ZM7.54286 5.45237C7.54286 5.1999 7.74753 4.99523 8 4.99523C8.25247 4.99523 8.45714 5.1999 8.45714 5.45237L7.54286 5.45237ZM7.54286 11.5476L7.54286 5.45237L8.45714 5.45237L8.45714 11.5476L7.54286 11.5476Z"
      fill="#E72D04"
    />
  </svg>
);

interface IMarketOverviewItem {
  x: Moment | number;
  y: number;
}

function CurrencyCard({
  image,
  symbol,
  current_price,
}: IGeneraDataItem): ReactElement {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const { exchangeCurrency } = useAppSelector((state) => state.config);
  const prevPrice = usePrevious(current_price);
  const [marketData, setMarketData] = useState<IMarketOverviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getDailyOverview = async () => {
    setError(false);
    setLoading(true);

    try {
      const res = await axios({
        method: "get",
        url: COMAPRE_HISTOHOUR_URL,
        params: {
          api_key: COMPARE_API_KEY,
          fsym: symbol,
          tsym: exchangeCurrency,
          aggregate: 1,
          limit: 12,
        },
      });
      const { Data } = await res.data;
      setMarketData(convertMarketOverviewData(Data.Data));
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      setError(true);
    }
  };

  const getMockOverview = async () => {
    setLoading(true);
    await promisifiedDelay(1000);
    setMarketData(
      convertMarketOverviewData([
        {
          time: 1721329200,
          close: 63545.86,
        },
        {
          time: 1721332800,
          close: 63819.3,
        },
        {
          time: 1721336400,
          close: 63838.59,
        },
        {
          time: 1721340000,
          close: 64022.45,
        },
        {
          time: 1721343600,
          close: 63981.43,
        },
        {
          time: 1721347200,
          close: 63594.29,
        },
        {
          time: 1721350800,
          close: 63804.41,
        },
        {
          time: 1721354400,
          close: 63818.92,
        },
        {
          time: 1721358000,
          close: 64318.7,
        },
        {
          time: 1721361600,
          close: 64143.66,
        },
        {
          time: 1721365200,
          close: 64164.28,
        },
        {
          time: 1721368800,
          close: 64208.81,
        },
      ])
    );
    setLoading(false);
  };

  useEffect(() => {
    // getDailyOverview();
    getMockOverview();
  }, [symbol]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: 300,
        height: "100%",
        border: "1px solid red",
        padding: 10,
        margin: 10,
      }}
    >
      <div style={{ maxWidth: 40 }}>
        <img src={image} alt={symbol} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between", padding: 5 }}
      >
        <span>{symbol} arrow USD</span>
        {prevPrice && (
          <div>
            {current_price !== prevPrice && (
              <span>
                {Math.abs(
                  ((current_price - prevPrice) / prevPrice) * 100
                ).toFixed(5)}
              </span>
            )}
            {current_price > prevPrice && <ArrowTop />}
            {current_price < prevPrice && <ArrowDown />}
          </div>
        )}
      </div>
      <div>{Number(current_price).toFixed(4)}</div>
      <div>
        {!error && !loading && (
          <VictoryGroup
            width={width}
            height={height < 200 ? 200 : height}
            domainPadding={{ y: [50, 0] }}
          >
            <VictoryLine data={marketData} />
          </VictoryGroup>
        )}
        {error && <div>Data is currently unavailable</div>}
        {loading && <Disabler />}
      </div>
    </div>
  );
}

export default CurrencyCard;
