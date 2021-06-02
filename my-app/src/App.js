import logo from "./logo.svg";
import "./App.css";
import { FitText } from "@ampproject/amp-fit-text/react";
import { DateCountdown } from "@ampproject/amp-date-countdown/react";

function App() {
  return (
    <div className="App">
      <DateCountdown
        datetime={new Date(Date.now() + 10000)}
        locale={"en"}
        whenEnded={"continue"}
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
      ></DateCountdown>
      <FitText
        minFontSize={42}
        maxFontSize={72}
        style={{ border: "1px solid black", width: 300, height: 200 }}
      >
        Lorem <i>ips</i>um dolor sit amet, has nisl nihil convenire et, vim at
        aeque inermis reprehendunt.
      </FitText>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
