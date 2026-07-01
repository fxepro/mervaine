'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// ── Fee Tables ──────────────────────────────────────────────────────────────
// [maxPrice, fee] — fee > 1 means flat $, fee ≤ 1 means % of bid price

const BIDDING: Record<string, Record<string, Record<string, [number, number][]>>> = {
  clean: {
    standard: {
      secured: [
        [49.99,25],[99.99,45],[199.99,80],[299.99,120],[349.99,120],[399.99,120],
        [449.99,160],[499.99,160],[549.99,185],[599.99,185],[699.99,210],[799.99,230],
        [899.99,250],[999.99,275],[1199.99,325],[1299.99,350],[1399.99,365],[1499.99,380],
        [1599.99,390],[1699.99,410],[1799.99,420],[1999.99,440],[2399.99,470],[2499.99,480],
        [2999.99,500],[3499.99,600],[3999.99,675],[4499.99,710],[4999.99,750],[5499.99,750],
        [5999.99,750],[6499.99,800],[6999.99,800],[7499.99,800],[7999.99,815],[8499.99,840],
        [8999.99,840],[9999.99,840],[10499.99,850],[10999.99,850],[11499.99,850],[11999.99,850],
        [12499.99,850],[14999.99,850],[Infinity,0.0725],
      ],
      nonsecured: [
        [49.99,27.5],[99.99,50],[199.99,90],[299.99,135],[349.99,137.5],[399.99,140],
        [449.99,182.5],[499.99,185],[549.99,212.5],[599.99,215],[699.99,245],[799.99,270],
        [899.99,295],[999.99,325],[1199.99,385],[1299.99,415],[1399.99,435],[1499.99,455],
        [1599.99,470],[1699.99,495],[1799.99,510],[1999.99,540],[2399.99,590],[2499.99,605],
        [2999.99,650],[3499.99,775],[3999.99,875],[4499.99,935],[4999.99,1000],[5499.99,1000],
        [5999.99,1000],[6499.99,1050],[6999.99,1050],[7499.99,1050],[7999.99,1065],[8499.99,1090],
        [8999.99,1090],[9999.99,1090],[10499.99,1200],[10999.99,1200],[11499.99,1200],[11999.99,1200],
        [12499.99,1200],[14999.99,1200],[Infinity,0.1225],
      ],
    },
    heavy: {
      secured: [
        [49.99,25],[99.99,45],[199.99,80],[299.99,120],[349.99,120],[399.99,120],
        [449.99,160],[499.99,160],[549.99,185],[599.99,185],[699.99,210],[799.99,230],
        [899.99,250],[999.99,275],[1199.99,325],[1299.99,350],[1399.99,365],[1499.99,380],
        [1599.99,390],[1699.99,410],[1799.99,420],[1999.99,440],[2399.99,470],[2499.99,480],
        [2999.99,500],[3499.99,600],[3999.99,675],[4499.99,710],[4999.99,745],[Infinity,0.15],
      ],
      nonsecured: [
        [49.99,27.5],[99.99,50],[199.99,90],[299.99,135],[349.99,137.5],[399.99,140],
        [449.99,182.5],[499.99,185],[549.99,212.5],[599.99,215],[699.99,245],[799.99,270],
        [899.99,295],[999.99,325],[1199.99,385],[1299.99,415],[1399.99,435],[1499.99,455],
        [1599.99,470],[1699.99,495],[1799.99,510],[1999.99,540],[2399.99,590],[2499.99,605],
        [2999.99,650],[3499.99,775],[3999.99,875],[4499.99,935],[4999.99,995],[Infinity,0.20],
      ],
    },
  },
  nonclean: {
    standard: {
      secured: [
        [49.99,25],[99.99,45],[199.99,80],[299.99,130],[349.99,137.5],[399.99,145],
        [449.99,175],[499.99,185],[549.99,205],[599.99,210],[699.99,240],[799.99,270],
        [899.99,295],[999.99,320],[1199.99,375],[1299.99,395],[1399.99,410],[1499.99,430],
        [1599.99,445],[1699.99,465],[1799.99,485],[1999.99,510],[2399.99,535],[2499.99,570],
        [2999.99,610],[3499.99,655],[3999.99,705],[4499.99,725],[4999.99,750],[5499.99,775],
        [5999.99,800],[6499.99,825],[6999.99,845],[7499.99,880],[7999.99,900],[8499.99,925],
        [8999.99,945],[9999.99,945],[10499.99,1000],[10999.99,1000],[11499.99,1000],[11999.99,1000],
        [12499.99,1000],[14999.99,1000],[Infinity,0.075],
      ],
      nonsecured: [
        [49.99,27.5],[99.99,50],[199.99,90],[299.99,145],[349.99,155],[399.99,167.5],
        [449.99,200],[499.99,210],[549.99,235],[599.99,240],[699.99,275],[799.99,312.5],
        [899.99,342.5],[999.99,370],[1199.99,440],[1299.99,460],[1399.99,482.5],[1499.99,510],
        [1599.99,530],[1699.99,555],[1799.99,582.5],[1999.99,620],[2399.99,662.5],[2499.99,705],
        [2999.99,775],[3499.99,830],[3999.99,927.5],[4499.99,935],[4999.99,1000],[5499.99,1025],
        [5999.99,1055],[6499.99,1085],[6999.99,1110],[7499.99,1145],[7999.99,1175],[8499.99,1200],
        [8999.99,1225],[9999.99,1225],[10499.99,1390],[10999.99,1390],[11499.99,1390],[11999.99,1400],
        [12499.99,1400],[14999.99,1400],[Infinity,0.125],
      ],
    },
    heavy: {
      secured: [
        [49.99,25],[99.99,45],[199.99,80],[299.99,130],[349.99,137.5],[399.99,145],
        [449.99,175],[499.99,185],[549.99,205],[599.99,210],[699.99,240],[799.99,270],
        [899.99,295],[999.99,320],[1199.99,375],[1299.99,395],[1399.99,410],[1499.99,430],
        [1599.99,445],[1699.99,465],[1799.99,485],[1999.99,510],[2399.99,535],[2499.99,570],
        [2999.99,610],[3499.99,655],[3999.99,705],[4499.99,725],[4999.99,750],[5499.99,775],
        [Infinity,0.15],
      ],
      nonsecured: [
        [49.99,27.5],[99.99,50],[199.99,90],[299.99,145],[349.99,155],[399.99,167.5],
        [449.99,200],[499.99,210],[549.99,235],[599.99,240],[699.99,275],[799.99,312.5],
        [899.99,342.5],[999.99,370],[1199.99,440],[1299.99,460],[1399.99,482.5],[1499.99,510],
        [1599.99,530],[1699.99,555],[1799.99,582.5],[1999.99,620],[2399.99,662.5],[2499.99,705],
        [2999.99,775],[3499.99,830],[3999.99,927.5],[4499.99,935],[4999.99,1000],[5499.99,1025],
        [Infinity,0.20],
      ],
    },
  },
};

const GATE: Record<string, Record<string, [number, number][]>> = {
  standard: {
    clean:    [[99.99,0],[499.99,39],[999.99,49],[1499.99,69],[1999.99,79],[3999.99,89],[5999.99,99],[7999.99,119],[Infinity,129]],
    nonclean: [[99.99,0],[499.99,40],[999.99,55],[1499.99,75],[1999.99,85],[3999.99,100],[5999.99,110],[7999.99,125],[Infinity,140]],
  },
  heavy: {
    clean:    [[99.99,0],[499.99,49],[999.99,59],[1499.99,79],[1999.99,89],[3999.99,99],[5999.99,109],[7999.99,139],[Infinity,149]],
    nonclean: [[99.99,0],[499.99,50],[999.99,65],[1499.99,85],[1999.99,95],[3999.99,110],[5999.99,125],[7999.99,145],[Infinity,160]],
  },
};

const VIRTUAL_BID: Record<string, [number, number][]> = {
  clean:    [[99.99,0],[499.99,49],[999.99,59],[1499.99,79],[1999.99,89],[3999.99,99],[5999.99,109],[7999.99,139],[Infinity,149]],
  nonclean: [[99.99,0],[499.99,50],[999.99,65],[1499.99,85],[1999.99,95],[3999.99,110],[5999.99,125],[7999.99,145],[Infinity,160]],
};

function lookup(price: number, table: [number, number][]): { amount: number; isPct: boolean; pct?: number } {
  for (const [max, fee] of table) {
    if (price <= max) {
      return fee <= 1
        ? { amount: price * fee, isPct: true, pct: fee * 100 }
        : { amount: fee, isPct: false };
    }
  }
  return { amount: 0, isPct: false };
}

const fmt = (n: number) =>
  '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// ── Components ───────────────────────────────────────────────────────────────

function ToggleGroup({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex">
      {options.map((opt, i) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={[
            'flex-1 py-2 px-3 text-sm font-medium border transition-colors',
            i === 0 ? 'rounded-l-none' : '',
            i === options.length - 1 ? 'rounded-r-none' : '',
            i > 0 ? '-ml-px' : '',
            value === opt.value
              ? 'bg-primary text-primary-foreground border-primary z-10'
              : 'bg-card text-muted-foreground border-border hover:bg-muted',
          ].join(' ')}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

function ResultLine({
  label,
  sub,
  value,
  dim,
  accent,
}: {
  label: string;
  sub?: string;
  value: string;
  dim?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
      <div>
        <p className={`text-sm ${dim ? 'text-muted-foreground' : 'text-foreground'}`}>{label}</p>
        {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
      </div>
      <p className={`text-sm font-semibold tabular-nums ${accent ? 'text-secondary' : dim ? 'text-muted-foreground' : 'text-foreground'}`}>
        {value}
      </p>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CopartCalculator() {
  const [price, setPrice] = useState('');
  const [titleType, setTitleType] = useState('clean');
  const [paymentType, setPaymentType] = useState('secured');
  const [vehicleType, setVehicleType] = useState('standard');
  const [gateIncluded, setGateIncluded] = useState(true);
  const [virtualBidIncluded, setVirtualBidIncluded] = useState(false);
  const [titleMailed, setTitleMailed] = useState(false);
  const [commission, setCommission] = useState('');
  const [commissionType, setCommissionType] = useState<'pct' | 'fixed'>('pct');

  const buyPrice = parseFloat(price) || 0;
  const commissionVal = parseFloat(commission) || 0;

  const biddingResult = buyPrice > 0
    ? lookup(buyPrice, BIDDING[titleType][vehicleType][paymentType === 'secured' ? 'secured' : 'nonsecured'])
    : null;

  const biddingFee = biddingResult?.amount ?? 0;
  const gateFee = gateIncluded && buyPrice > 0 ? lookup(buyPrice, GATE[vehicleType][titleType]).amount : 0;
  const virtualFee = virtualBidIncluded && buyPrice > 0 ? lookup(buyPrice, VIRTUAL_BID[titleType]).amount : 0;
  const envFee = buyPrice > 0 ? 15 : 0;
  const titleFee = titleMailed && buyPrice > 0 ? 35 : 0;

  const subtotal = buyPrice + biddingFee + gateFee + virtualFee + envFee + titleFee;
  const commissionFee = commissionVal > 0
    ? (commissionType === 'pct' ? subtotal * (commissionVal / 100) : commissionVal)
    : 0;

  const totalFees = biddingFee + gateFee + virtualFee + envFee + titleFee + commissionFee;
  const totalCost = buyPrice + totalFees;
  const feePct = buyPrice > 0 ? ((totalFees / buyPrice) * 100).toFixed(1) : null;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-6 py-16 max-w-7xl mx-auto">
        {/* Page heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Tools</p>
          <h1 className="font-headline text-4xl text-foreground">Copart Fee Calculator</h1>
          <p className="text-muted-foreground mt-2 text-sm max-w-xl">
            Estimate total acquisition cost including all Copart U.S. licensed member fees.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Left: Inputs ── */}
          <div className="lg:col-span-3 space-y-6">

            {/* Buy Price */}
            <div className="bg-card border border-border p-6">
              <Field label="Auction Buy Price">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-lg">$</span>
                  <input
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    placeholder="0.00"
                    min={0}
                    step={1}
                    className="w-full bg-background border border-border pl-8 pr-4 py-3 text-xl font-semibold text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </Field>
            </div>

            {/* Options grid */}
            <div className="bg-card border border-border p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Title Type">
                <ToggleGroup
                  options={[{ label: 'Clean', value: 'clean' }, { label: 'Non-Clean', value: 'nonclean' }]}
                  value={titleType}
                  onChange={setTitleType}
                />
              </Field>

              <Field label="Payment Method">
                <ToggleGroup
                  options={[{ label: 'Secured', value: 'secured' }, { label: 'Non-Secure', value: 'nonsecured' }]}
                  value={paymentType}
                  onChange={setPaymentType}
                />
              </Field>

              <Field label="Vehicle Type">
                <ToggleGroup
                  options={[{ label: 'Standard', value: 'standard' }, { label: 'Heavy', value: 'heavy' }]}
                  value={vehicleType}
                  onChange={setVehicleType}
                />
              </Field>

              <Field label="Additional Options">
                <div className="flex flex-col gap-2">
                  {[
                    { key: 'gate', label: 'Gate Fee', state: gateIncluded, set: setGateIncluded },
                    { key: 'vbid', label: 'Virtual Bid Fee', state: virtualBidIncluded, set: setVirtualBidIncluded },
                    { key: 'title', label: 'Title Mailed (USPS)', state: titleMailed, set: setTitleMailed },
                  ].map(opt => (
                    <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => opt.set(!opt.state)}
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${opt.state ? 'bg-primary border-primary' : 'border-border group-hover:border-primary/50'}`}
                      >
                        {opt.state && <span className="text-primary-foreground text-xs leading-none">✓</span>}
                      </div>
                      <span className="text-sm text-foreground">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </Field>
            </div>

            {/* Commission */}
            <div className="bg-card border border-border p-6">
              <Field label="Commission / Margin">
                <div className="flex gap-0">
                  <div className="flex border border-border mr-[-1px] z-10">
                    <button
                      onClick={() => setCommissionType('pct')}
                      className={`px-4 py-2.5 text-sm font-semibold border-r border-border transition-colors ${commissionType === 'pct' ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground hover:bg-muted'}`}
                    >
                      %
                    </button>
                    <button
                      onClick={() => setCommissionType('fixed')}
                      className={`px-4 py-2.5 text-sm font-semibold transition-colors ${commissionType === 'fixed' ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground hover:bg-muted'}`}
                    >
                      $
                    </button>
                  </div>
                  <input
                    type="number"
                    value={commission}
                    onChange={e => setCommission(e.target.value)}
                    placeholder={commissionType === 'pct' ? 'e.g. 10' : 'e.g. 500'}
                    min={0}
                    step="any"
                    className="flex-1 bg-background border border-border px-4 py-2.5 text-base font-semibold text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">
                  {commissionType === 'pct'
                    ? 'Applied as % of total (buy price + all fees)'
                    : 'Fixed amount added to total cost'}
                </p>
              </Field>
            </div>
          </div>

          {/* ── Right: Results ── */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border sticky top-6">
              <div className="bg-foreground px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-0.5">Cost Breakdown</p>
                <p className="font-headline text-2xl text-primary-foreground">
                  {buyPrice > 0 ? fmt(totalCost) : '—'}
                </p>
                {feePct && (
                  <p className="text-xs text-primary-foreground/50 mt-1">
                    {fmt(totalFees)} in fees · {feePct}% of buy price
                  </p>
                )}
              </div>

              <div className="px-6 py-4">
                {buyPrice <= 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">Enter a buy price to see breakdown</p>
                ) : (
                  <>
                    <ResultLine label="Auction Buy Price" value={fmt(buyPrice)} />
                    <ResultLine
                      label="Bidding Fee"
                      sub={biddingResult?.isPct ? `${biddingResult.pct?.toFixed(2)}% of bid` : 'Flat rate'}
                      value={fmt(biddingFee)}
                    />
                    <ResultLine
                      label="Gate Fee"
                      sub={gateIncluded ? undefined : 'Not included'}
                      value={gateIncluded ? (gateFee === 0 ? 'FREE' : fmt(gateFee)) : '—'}
                      dim={!gateIncluded}
                    />
                    <ResultLine
                      label="Virtual Bid Fee"
                      sub={virtualBidIncluded ? undefined : 'Not included'}
                      value={virtualBidIncluded ? fmt(virtualFee) : '—'}
                      dim={!virtualBidIncluded}
                    />
                    <ResultLine
                      label="Environmental Fee"
                      sub="Applied to all lots"
                      value={fmt(envFee)}
                    />
                    <ResultLine
                      label="Title Shipping"
                      sub={titleMailed ? 'USPS $15 + $20 handling' : 'Not included'}
                      value={titleMailed ? fmt(titleFee) : '—'}
                      dim={!titleMailed}
                    />
                    {commissionVal > 0 && (
                      <ResultLine
                        label="Commission"
                        sub={commissionType === 'pct' ? `${commissionVal}% of subtotal` : 'Fixed'}
                        value={fmt(commissionFee)}
                        accent
                      />
                    )}

                    <div className="mt-4 pt-4 border-t-2 border-foreground flex justify-between items-baseline">
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Total Cost</span>
                      <span className="font-headline text-3xl text-foreground">{fmt(totalCost)}</span>
                    </div>
                  </>
                )}
              </div>

              <div className="px-6 pb-5 pt-0">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Based on Copart U.S. Licensed member fee schedule · June 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
