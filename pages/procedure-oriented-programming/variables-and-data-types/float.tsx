import styles from '@/styles/variables-and-data-types/index.module.css';
import floatStyles from '@/styles/variables-and-data-types/float.module.css';
import {useState} from "react";
import {encodeFloat, floatToBinaryString} from "@/utils/functions";

export default function Float() {
  const [xVal, setXVal] = useState<number>(5);
  const [yVal, setYVal] = useState<number>(37);

  const onChange = (e: any, set: Function) => {
    let value = e.target.value;
    if (/^\d+\.?\d*(e-?\d*)?$/.test(value)) {
      set(value);
    }
  }

  return <>
    <div className="container">
      <h2>float</h2>
      <ul className={styles['description']}>
        <li><b>float</b> data type is used to store floating point values and generally consumes 4 bytes in memory.</li>
        <li>float value range is -3.4e38 to 3.4e38.</li>
      </ul>
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
        <div className={styles['code-modifier-parent']}>
          <div className="code">
            int main() {'{'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;float x =&nbsp;
            <input
                style={{width: xVal.toString().length * 10 + 10}}
                onChange={(e) => onChange(e, setXVal)}
                className="variable-input"
                type="text"
                value={xVal}
            />;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;float y =&nbsp;
            <input
                style={{width: yVal.toString().length * 10 + 10}}
                onChange={(e) => onChange(e, setYVal)}
                className="variable-input"
                type="text"
                value={yVal}
            />;<br/>
            {'}'}
          </div>
        </div>
        <div className={styles['variable-preview']}>
          x&nbsp;
          <div className={styles['variable-binary'] + ' ' + floatStyles['binary']}>
            {encodeFloat(xVal)}
          </div>
          <br/>
          <br/>
          y&nbsp;
          <div className={styles['variable-binary'] + ' ' + floatStyles['binary']}>
            {encodeFloat(yVal)}
          </div>
        </div>
      </div>
    </div>
  </>
}
