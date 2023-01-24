import styles from '@/styles/VarsNDataTypes.module.css';
import {useState} from "react";
import {toBinaryString} from "@/utils/functions";

export default function VariablesAndDataTypes() {
  const [xVal, setXVal] = useState<number>(5);
  const [yVal, setYVal] = useState<number>(37);

  return <>
    <div className={"container " + styles['vars-n-data-types']}>
      <svg className={styles['block-sequence']}>
        <text x="55" y="20">RAM</text>
        <rect x="1" y="30" width="150" height="120" fill="transparent" stroke="black" strokeWidth="2"/>
        <rect x="75" y="75" width="40" height="30" fill="transparent" stroke="black" strokeWidth="1"/>

        <line x1="115" y1="75" x2="250" y2="30" stroke="black" strokeWidth="1" strokeDasharray="5,5"/>
        <line x1="115" y1="105" x2="250" y2="150" stroke="black" strokeWidth="1" strokeDasharray="5,5"/>

        <text x="295" y="20">Browser</text>
        <rect x="250" y="30" width="150" height="120" fill="transparent" stroke="black" strokeWidth="2"/>
        <rect x="325" y="75" width="40" height="30" fill="transparent" stroke="black" strokeWidth="1"/>

        <line x1="365" y1="75" x2="500" y2="30" stroke="black" strokeWidth="1" strokeDasharray="5,5"/>
        <line x1="365" y1="105" x2="500" y2="150" stroke="black" strokeWidth="1" strokeDasharray="5,5"/>

        <text x="530" y="20">Current Tab</text>
        <rect x="500" y="30" width="150" height="120" fill="transparent" stroke="black" strokeWidth="2"/>
        <rect x="575" y="75" width="40" height="30" fill="transparent" stroke="black" strokeWidth="1"/>

        <line x1="575" y1="105" x2="400" y2="200" stroke="black" strokeWidth="1" strokeDasharray="5,5"/>
        <line x1="615" y1="105" x2="650" y2="200" stroke="black" strokeWidth="1" strokeDasharray="5,5"/>
      </svg>
      <div className={styles['code-parent']}>
        <div className="code">
          int main() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;int x =&nbsp;
          <input
              onChange={(e) => setXVal(parseInt(e.target.value))}
              className="variable-input"
              type="number"
              defaultValue={xVal}
          />;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;int y =&nbsp;
          <input
              size="1"
              onChange={(e) => setYVal(parseInt(e.target.value))}
              className="variable-input"
              type="number"
              defaultValue={yVal}
          />;<br/>
          {'}'}
        </div>
        <div className={styles['variable-preview']}>
          x&nbsp;
          <div className={styles['variable-binary']}>
            {toBinaryString(xVal, 16)}
          </div>
          <br/>
          <br/>
          y&nbsp;
          <div className={styles['variable-binary']}>
            {toBinaryString(yVal, 16)}
          </div>
        </div>
      </div>
    </div>
  </>
}
