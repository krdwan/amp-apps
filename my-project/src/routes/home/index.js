import { h } from "preact";
import style from "./style.css";
import { FitText } from "@ampproject/amp-fit-text";
import { DateCountdown } from "@ampproject/amp-date-countdown";

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <DateCountdown
      datetime={new Date(Date.now() + 10000)}
      locale={"en"}
      whenEnded={"stop"}
      biggestUnit={null}
      countUp={null}
      render={(data) => (
        <div>
          <span>{`${data.days} ${data.dd} ${data.d}`}</span>
          <br />
          <span>{`${data.hours} ${data.hh} ${data.h}`}</span>
          <br />
          <span>{`${data.minutes} ${data.mm} ${data.m}`}</span>
          <br />
          <span>{`${data.seconds} ${data.ss} ${data.s}`}</span>
        </div>
      )}
    />
    <FitText
      minFontSize={42}
      maxFontSize={72}
      style={{ border: "1px solid black", width: 300, height: 200 }}
    >
      Lorem <i>ips</i>um dolor sit amet, has nisl nihil convenire et, vim at
      aeque inermis reprehendunt.
    </FitText>
  </div>
);

export default Home;
