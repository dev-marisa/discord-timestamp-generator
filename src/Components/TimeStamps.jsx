import React, { useState, useEffect } from "react";
import moment from "moment";
import ResultRow from "./ResultRow";
import CodeGroup from './CodeGroup';

const TimeStamps = props => {

  const [ts, setTS] = useState("");

  useEffect( () => {
    setTS(Date.parse(props.dt)/1000);
  }, [props.dt])

  return (
    <>

      <ResultRow>
        <span>How it'll look</span>
        <span>Code</span>
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dt).format('LLL')}</span>
        <CodeGroup label="Default Date Time" value={`<t:${ts}>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dt).format('LLL')}</span>
        <CodeGroup label="Short Date Time" value={`<t:${ts}:f>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dt).format('LLLL')}</span>
        <CodeGroup label="Long Date Time" value={`<t:${ts}:F>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dt).format('L')}</span>
        <CodeGroup label="Short Date" value={`<t:${ts}:d>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dt).format('LL')}</span>
        <CodeGroup label="Long Date" value={`<t:${ts}:D>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dt).format('LT')}</span>
        <CodeGroup label="Short Time" value={`<t:${ts}:t>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dt).format('LTS')}</span>
        <CodeGroup label="Long Time" value={`<t:${ts}:T>`} />
      </ResultRow>

      <ResultRow>
        <span>{moment(props.dt).fromNow()}</span>
        <CodeGroup label="Relative Time" value={`<t:${ts}:R>`} />
      </ResultRow>

    </>
  );
}

export default TimeStamps;
