import styles from '@/styles/variables-and-data-types/index.module.css';
import {useState} from "react";
import {toBinaryString} from "@/utils/functions";

export default function Int() {
  const [xVal, setXVal] = useState<number>(5);
  const [yVal, setYVal] = useState<number>(37);
  const [isXUnsigned, setXUnsigned] = useState<boolean>(false);
  const [isYUnsigned, setYUnsigned] = useState<boolean>(false);

  const onChange = (e: any, unsigned: boolean, set: Function) => {
    const value = e.target.value;
    const v = parseInt(value) || 0;
    if (unsigned) {
      if (v <= 65535 && v >= 0) {
        set(v);
      }
    } else {
      if (v <= 32767 && v >= -32768) {
        set(v);
      }
    }
  }

  const onXUnsignedChange = (e: any) => {
    setXUnsigned(e.target.checked);
    if (e.target.checked) {
      setXVal(xVal < 0 ? Math.abs(xVal) + 32767 : xVal);
    } else {
      setXVal(xVal > 32767 ? -(xVal - 32767) : xVal);
    }
  }

  const onYUnsignedChange = (e: any) => {
    setYUnsigned(e.target.checked);
    if (e.target.checked) {
      setYVal(yVal < 0 ? Math.abs(yVal) + 32767 : yVal);
    } else {
      setYVal(yVal > 32767 ? -(yVal - 32767) : yVal);
    }
  }

  return <>
    <div className="container">
      <h2>int</h2>
      <ul className={styles['description']}>
        <li><b>int</b> data type is used to store integer values and generally consumes 2 bytes in memory.</li>
        <li>int value range is -32768 to 32767.</li>
        <li>if we use <b>unsigned</b> keyword with <b>int</b> data type then the new range becomes 0 to 65535.</li>
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
          <div className={styles['code-modifier']}>
            <b>unsigned</b>
            <input type="checkbox" onChange={onXUnsignedChange}/>
            <input type="checkbox" onChange={onYUnsignedChange}/>
          </div>
          <div className="code">
            int main() {'{'}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{isXUnsigned ? 'unsigned ' : ''}int x =&nbsp;
            <input
                style={{width: xVal.toString().length * 10 + 10}}
                onChange={(e) => onChange(e, isXUnsigned, setXVal)}
                className="variable-input"
                type="number"
                value={xVal}
            />;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{isYUnsigned ? 'unsigned ' : ''}int y =&nbsp;
            <input
                style={{width: yVal.toString().length * 10 + 10}}
                onChange={(e) => onChange(e, isYUnsigned, setYVal)}
                className="variable-input"
                type="number"
                value={yVal}
            />;<br/>
            {'}'}
          </div>
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
