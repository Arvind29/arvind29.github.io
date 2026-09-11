'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import styles from './market.module.css';

const examples = {
  POLYCAB: { name: 'Polycab India', growth: 24, roce: 26, debt: 0.05, margin: 13, pe: 42 },
  TCS: { name: 'Tata Consultancy Services', growth: 12, roce: 49, debt: 0.09, margin: 27, pe: 25 },
  HDFCBANK: { name: 'HDFC Bank', growth: 17, roce: 8, debt: 0, margin: 31, pe: 20 },
};

function score({ growth, roce, debt, margin, pe }) {
  let s = 0;
  if (growth >= 15) s += 25; else if (growth >= 10) s += 17; else if (growth >= 5) s += 10;
  if (roce >= 20) s += 25; else if (roce >= 15) s += 18; else if (roce >= 10) s += 10;
  if (debt <= 0.25) s += 20; else if (debt <= 0.5) s += 12; else if (debt <= 1) s += 6;
  if (margin >= 20) s += 15; else if (margin >= 12) s += 9; else if (margin >= 8) s += 5;
  if (pe <= 25) s += 15; else if (pe <= 35) s += 9; else if (pe <= 50) s += 4;
  return s;
}

export default function MarketLab() {
  const [symbol, setSymbol] = useState('POLYCAB');
  const [data, setData] = useState(examples.POLYCAB);
  const [checked, setChecked] = useState(true);

  const quality = useMemo(() => score(data), [data]);
  const verdict = quality >= 75 ? 'PASS' : quality >= 55 ? 'WATCH' : 'FAIL';
  const verdictClass = quality >= 75 ? styles.good : quality >= 55 ? styles.watch : styles.weak;

  const update = (key, value) => {
    setChecked(false);
    setData((d) => ({ ...d, [key]: Number(value) }));
  };

  const loadExample = (name) => {
    setSymbol(name);
    setData(examples[name]);
    setChecked(true);
  };

  const check = () => {
    const key = symbol.trim().toUpperCase();
    if (examples[key]) {
      loadExample(key);
    } else {
      setChecked(true);
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <Link href="/" className={styles.brand}><span className={styles.brandDot} />Arvind.</Link>
          <span className={styles.localBadge}>LOCAL TOOL · NO INTERNET REQUIRED</span>
        </header>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>MARKET RESEARCH · FUNDAMENTAL FILTER</p>
          <h1>Stock Quality<br /><span>Quick Check</span></h1>
          <p className={styles.lead}>A lightweight decision-support tool for your first-pass stock research. Enter the five numbers you care about and get a consistent quality signal.</p>
        </section>

        <section className={styles.workspace}>
          <div className={styles.inputPanel}>
            <div className={styles.sectionHead}><span>01</span><div><b>STOCK</b><small>Enter a symbol or use a sample</small></div></div>
            <div className={styles.stockInput}>
              <span>NSE</span>
              <input value={symbol} onChange={(e) => setSymbol(e.target.value.toUpperCase())} onKeyDown={(e) => e.key === 'Enter' && check()} placeholder="e.g. POLYCAB" />
              <button onClick={check}>Check</button>
            </div>
            <div className={styles.samples}><span>Samples</span>{Object.keys(examples).map((name) => <button key={name} onClick={() => loadExample(name)}>{name}</button>)}</div>
            <div className={styles.divider} />
            <div className={styles.sectionHead}><span>02</span><div><b>FUNDAMENTALS</b><small>Use consistent period definitions</small></div></div>
            <div className={styles.metrics}>
              <Metric label="5Y Growth" value={data.growth} suffix="%" onChange={(v) => update('growth', v)} />
              <Metric label="ROCE" value={data.roce} suffix="%" onChange={(v) => update('roce', v)} />
              <Metric label="Debt / Equity" value={data.debt} suffix="" step="0.01" onChange={(v) => update('debt', v)} />
              <Metric label="Operating Margin" value={data.margin} suffix="%" onChange={(v) => update('margin', v)} />
              <Metric label="P / E" value={data.pe} suffix="×" onChange={(v) => update('pe', v)} />
            </div>
          </div>

          <aside className={styles.resultPanel}>
            <div className={styles.resultTop}><span>RESEARCH SIGNAL</span><span className={styles.live}><i />LOCAL CALCULATION</span></div>
            <div className={styles.stockName}><small>{symbol || 'STOCK'}</small><h2>{data.name || 'Custom stock'}</h2></div>
            <div className={styles.scoreRow}>
              <div className={styles.scoreRing}><strong>{quality}</strong><span>/100</span></div>
              <div><p>QUALITY SCORE</p><h3 className={verdictClass}>{checked ? verdict : 'EDITING'}</h3></div>
            </div>
            <div className={styles.signalBox}>
              <span>{quality >= 75 ? '✓' : quality >= 55 ? '!' : '×'}</span>
              <div><b>{quality >= 75 ? 'Quality clears your first filter.' : quality >= 55 ? 'Mixed fundamentals need validation.' : 'Fundamentals do not clear the first filter.'}</b><small>{quality >= 75 ? 'Proceed to business quality, valuation and risk analysis.' : 'Do not make a decision from this screen alone.'}</small></div>
            </div>
            <div className={styles.scoreBreakdown}>
              <div><span>Growth</span><b>{data.growth >= 15 ? '25' : data.growth >= 10 ? '17' : data.growth >= 5 ? '10' : '0'} / 25</b></div>
              <div><span>ROCE</span><b>{data.roce >= 20 ? '25' : data.roce >= 15 ? '18' : data.roce >= 10 ? '10' : '0'} / 25</b></div>
              <div><span>Balance sheet</span><b>{data.debt <= 0.25 ? '20' : data.debt <= 0.5 ? '12' : data.debt <= 1 ? '6' : '0'} / 20</b></div>
              <div><span>Margin</span><b>{data.margin >= 20 ? '15' : data.margin >= 12 ? '9' : data.margin >= 8 ? '5' : '0'} / 15</b></div>
              <div><span>Valuation</span><b>{data.pe <= 25 ? '15' : data.pe <= 35 ? '9' : data.pe <= 50 ? '4' : '0'} / 15</b></div>
            </div>
          </aside>
        </section>

        <footer className={styles.footer}><span>DECISION FRAMEWORK</span><b>Quality → Valuation → Business → Risk → Position Size</b><small>Runs entirely in your local browser. No API key, login, database or cloud service.</small></footer>
      </div>
    </main>
  );
}

function Metric({ label, value, suffix, step = '0.1', onChange }) {
  return <label className={styles.metric}><span>{label}</span><div><input type="number" value={value} step={step} min="0" onChange={(e) => onChange(e.target.value)} /><b>{suffix}</b></div></label>;
}
