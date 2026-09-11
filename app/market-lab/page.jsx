'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import styles from './market.module.css';

const examples = {
  POLYCAB: { growth: 24, roce: 26, debt: 0.05, margin: 13, pe: 42 },
  TCS: { growth: 12, roce: 49, debt: 0.09, margin: 27, pe: 25 },
  HDFCBANK: { growth: 17, roce: 8, debt: 0, margin: 31, pe: 20 },
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

  const quality = useMemo(() => score(data), [data]);
  const verdict = quality >= 75 ? 'GOOD QUALITY' : quality >= 55 ? 'WATCH' : 'WEAK';
  const verdictClass = quality >= 75 ? styles.good : quality >= 55 ? styles.watch : styles.weak;

  const update = (key, value) => setData((d) => ({ ...d, [key]: Number(value) }));

  const loadExample = (name) => {
    setSymbol(name);
    setData(examples[name]);
  };

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Link href="/" className={styles.back}>← Arvind.</Link>
        <p className={styles.eyebrow}>MARKET LAB · QUICK CHECK</p>
        <h1>Should I research this stock?</h1>
        <p className={styles.intro}>A simple rule-based first filter. It is not a BUY recommendation and does not replace detailed research.</p>

        <div className={styles.inputRow}>
          <input value={symbol} onChange={(e) => setSymbol(e.target.value.toUpperCase())} placeholder="Stock symbol" />
          <button onClick={() => loadExample(examples[symbol] ? symbol : 'POLYCAB')}>Check</button>
        </div>

        <div className={styles.examples}>
          <span>Try:</span>
          {Object.keys(examples).map((name) => <button key={name} onClick={() => loadExample(name)}>{name}</button>)}
        </div>

        <section className={styles.result}>
          <div className={styles.score}>
            <small>QUALITY SCORE</small>
            <strong>{quality}</strong><span>/100</span>
          </div>
          <div>
            <p className={styles.label}>FIRST FILTER</p>
            <h2 className={verdictClass}>{verdict}</h2>
            <p className={styles.note}>{quality >= 75 ? 'Business quality clears the basic filter. Check valuation and future growth before investing.' : quality >= 55 ? 'Some parameters are attractive. Do deeper research before taking a position.' : 'The basic quality filter is not strong enough yet.'}</p>
          </div>
        </section>

        <section className={styles.metrics}>
          <Metric label="5Y Growth" value={data.growth} suffix="%" onChange={(v) => update('growth', v)} />
          <Metric label="ROCE" value={data.roce} suffix="%" onChange={(v) => update('roce', v)} />
          <Metric label="Debt / Equity" value={data.debt} suffix="" step="0.01" onChange={(v) => update('debt', v)} />
          <Metric label="Operating Margin" value={data.margin} suffix="%" onChange={(v) => update('margin', v)} />
          <Metric label="P/E" value={data.pe} suffix="×" onChange={(v) => update('pe', v)} />
        </section>

        <div className={styles.rules}>
          <b>How it scores</b>
          <span>Growth 25</span><span>ROCE 25</span><span>Debt 20</span><span>Margin 15</span><span>Valuation 15</span>
        </div>

        <p className={styles.disclaimer}>Demo data only. For a real version, the next step is connecting a trusted market-data source instead of entering numbers manually.</p>
      </div>
    </main>
  );
}

function Metric({ label, value, suffix, step = '0.1', onChange }) {
  return (
    <label className={styles.metric}>
      <span>{label}</span>
      <div><input type="number" value={value} step={step} min="0" onChange={(e) => onChange(e.target.value)} /><b>{suffix}</b></div>
    </label>
  );
}
