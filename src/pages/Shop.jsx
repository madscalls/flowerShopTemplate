// Generated from the Nightbloom design mockup (Shop.dc.html), then hand-editable.
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { assetUrl } from '../assets.js';

const PAGE_CSS = "body{margin:0;background:#2E1C2B;color-scheme:dark}\na{color:#F4EAE4;text-decoration:none}a:hover{color:#8FBF7A}\nselect{background:#FFFFFF;color:#2E1C2B}\nimg[src*=\"sunflower-carafe\"]{object-position:72% center !important}";

function renderVals(props, state, setState) {
    const shapes = {
      organic: ['38% 6% 38% 6%', '50% 50% 8% 8% / 42% 42% 8% 8%', '6% 38% 6% 38%', '46% 54% 42% 58% / 52% 44% 56% 48%'],
      soft: ['24px', '24px', '24px', '24px'],
      square: ['0', '0', '0', '0']
    };
    const cycle = shapes[props.shape ?? 'organic'] || shapes.organic;
    const tones = ['#893168', '#6A2558', '#4A1942', '#5E2452'];
    const products = [
      { name: 'The Garden Hour', cat: 'Everyday', note: 'Garden roses with trailing wildflowers in a low bowl.', tag: 'Bestseller' },
      { name: 'Window Light', cat: 'Everyday', note: 'Blue hydrangea and soft pastels in cut glass.', tag: '' },
      { name: 'Plum & Bramble', cat: 'Everyday', note: 'Deep plums with trailing greenery.', tag: '' },
      { name: 'Wild Meadow', cat: 'Seasonal', note: 'Whatever the fields are doing this week.', tag: 'Seasonal' },
      { name: 'Harvest Urn', cat: 'Seasonal', note: 'Dahlias and garden roses in a stone urn.', tag: 'Seasonal' },
      { name: 'Sunflower Carafe', cat: 'Seasonal', note: 'Blush sunflowers, simply arranged.', tag: '' },
      { name: 'Peach & Eucalyptus', cat: 'Everyday', note: 'Peach roses and strawflowers with silver dollar eucalyptus.', tag: '' },
      { name: 'Market Jar', cat: 'Everyday', note: 'A bright mix of roses, tulips and snapdragons.', tag: '' },
      { name: 'Ivory Study', cat: 'Everyday', note: 'White orchids, structured and minimal.', tag: '' },
      { name: 'Ranunculus Cloud', cat: 'Everyday', note: 'White and coral ranunculus with airy greenery.', tag: 'New' },
      { name: 'Pumpkin Centerpiece', cat: 'Seasonal', note: 'Autumn blooms and berries in a real pumpkin.', tag: 'Seasonal' },
      { name: 'Hand-tied Bouquet', cat: 'Everyday', note: 'Wrapped and ready to hand over.', tag: '' },
      { name: 'Quiet Remembrance', cat: 'Sympathy', note: 'Sculptural branches and soft green hydrangea.', tag: '' },
      { name: 'Comfort Box', cat: 'Sympathy', note: 'Blue hydrangea and white roses in a keepsake wooden box.', tag: '' },
      { name: 'Casket Spray', cat: 'Sympathy', note: 'Made to the family\u2019s wishes.', tag: 'Custom' },
      { name: 'Peace Lily', cat: 'Plants', note: 'Potted, long-lasting sympathy gift.', tag: '' },
      { name: 'Trailing Pothos', cat: 'Plants', note: 'Easy-care plant in a ceramic pot.', tag: '' },
      { name: 'Card & Ribbon', cat: 'Add-ons', note: 'Handwritten card with your message.', tag: '' },
      { name: 'Local Chocolates', cat: 'Add-ons', note: 'From a neighborhood maker.', tag: '' }
    ];
    const IMGS = {'The Garden Hour': ['/images/garden-roses.jpg', 'Garden roses with trailing wildflowers in a low bowl'], 'Window Light': ['/images/hydrangea-window.jpg', 'Blue hydrangea arrangement in a cut-glass vase by a window'], 'Plum & Bramble': ['/images/mantel-urn.jpg', 'Moody arrangement in a bronze urn on a mantel'], 'Wild Meadow': ['/images/snapdragon-pot.jpg', 'Snapdragons, veronica and sunflower in a white pot'], 'Harvest Urn': ['/images/dahlia-urn.jpg', 'Dahlias, chrysanthemum and roses in a stone urn'], 'Sunflower Carafe': ['/images/sunflower-carafe.jpg', 'Blush sunflowers in a glass carafe'], 'Peach & Eucalyptus': ['/images/peach-eucalyptus.jpg', 'Peach roses and strawflowers with eucalyptus'], 'Market Jar': ['/images/orange-vase.jpg', 'Roses, tulips and snapdragons in a glass jar'], 'Ivory Study': ['/images/blue-vase-orchid.jpg', 'White orchids and greenery in a blue vase'], 'Hand-tied Bouquet': ['/images/berry-bouquet.jpg', 'Bouquet of roses, berries and eucalyptus'], 'Quiet Remembrance': ['/images/branch-ikebana.jpg', 'Magnolia branches and green hydrangea in a tall vase'], 'Card & Ribbon': ['/images/studio-flatlay.jpg', 'Stems, scissors and ribbon on a studio table'], 'Ranunculus Cloud': ['/images/ranunculus-bowl.jpg', 'White and coral ranunculus in a round glass vase'], 'Pumpkin Centerpiece': ['/images/pumpkin-centerpiece.jpg', 'Autumn flowers and berries arranged in a pumpkin'], 'Comfort Box': ['/images/comfort-box.jpg', 'Blue hydrangea and white roses in a wooden box']};
    const names = ['All', 'Everyday', 'Seasonal', 'Sympathy', 'Plants', 'Add-ons'];
    const cats = names.map((label) => {
      const on = state.cat === label;
      return {
        label,
        pressed: on ? 'true' : 'false',
        bg: on ? '#2E1C2B' : 'transparent',
        fg: on ? '#F4EAE4' : '#2E1C2B',
        pick: () => setState({ cat: label })
      };
    });
    const shown = products
      .filter((p) => state.cat === 'All' || p.cat === state.cat)
      .map((p, i) => ({
        ...p,
        bg: tones[i % 4],
        radius: cycle[i % 4],
        hasTag: !!p.tag,
        hasImg: !!IMGS[p.name],
        noImg: !IMGS[p.name],
        img: IMGS[p.name] ? IMGS[p.name][0] : '',
        alt: IMGS[p.name] ? IMGS[p.name][1] : '',
        add: () => setState({ cart: state.cart + 1 })
      }));
    return {
      accent: props.accent ?? '#E08E45',
      leaf: props.leaf ?? '#8FBF7A',
      cats, shown, cartCount: state.cart
    };
  }

export default function Shop() {
  const props = useTheme({"accent": "#E08E45", "leaf": "#8FBF7A", "shape": "organic"});
  const [state, setRaw] = useState({ cat: 'All', cart: 0 });
  const setState = (patch) => setRaw((s) => ({ ...s, ...patch }));
  const v = renderVals(props, state, setState);
  useEffect(() => { document.title = "Nightbloom \u2014 Shop"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div style={{background: "#2E1C2B", color: "#F4EAE4", fontFamily: "'Manrope', sans-serif", fontSize: "16px", lineHeight: "1.6", minHeight: "100vh"}}>

<header style={{maxWidth: "1280px", margin: "0 auto", padding: "28px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
<Link to="/" style={{fontFamily: "'Instrument Serif', serif", fontSize: "30px", letterSpacing: "0.01em"}}>Nightbloom</Link>
<nav aria-label="Main" style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase"}}>
<Link to="/shop" style={{color: v.leaf}}>Shop</Link>
<Link to="/events">Events &amp; Sympathy</Link>
<Link to="/about">About</Link>
<button type="button" aria-label={`Cart, ${v.cartCount} items`} style={{position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", border: "1px solid #F4EAE4", borderRadius: "999px", background: "transparent", color: "#F4EAE4", cursor: "pointer"}}>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7z"></path><path d="M9 7a3 3 0 0 1 6 0"></path></svg>
<span style={{position: "absolute", top: "-4px", right: "-4px", minWidth: "20px", height: "20px", borderRadius: "999px", background: v.accent, color: "#2E1C2B", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center"}}>{v.cartCount}</span>
</button>
</nav>
</header>

<section style={{maxWidth: "1280px", margin: "0 auto", padding: "56px 32px 96px", display: "flex", flexDirection: "column", gap: "20px"}}>
<p style={{margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: v.leaf}}>The shop</p>
<h1 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "clamp(48px, 6vw, 80px)", lineHeight: "1.02"}}>Arrangements</h1>
<p style={{margin: "0", maxWidth: "560px", color: "#D2BFCB", fontSize: "18px"}}>Every piece is made to order with what's freshest that week, so exact stems may vary. Local delivery or studio pickup.</p>
</section>

<div style={{background: "#F6EEEA", color: "#2E1C2B", paddingTop: "24px"}}>
<section style={{maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "sticky", top: "0", background: "#F6EEEA", zIndex: "2"}}>
<div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "20px 0", borderBottom: "1px solid #E2D3D0"}}>
<div role="group" aria-label="Filter by category" style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
{v.cats.map((c, $index) => (<Fragment key={$index}><button type="button" onClick={c.pick} aria-pressed={c.pressed} style={{minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "1px solid #2E1C2B", background: c.bg, color: c.fg, font: "inherit", fontSize: "14px", fontWeight: "500", cursor: "pointer"}}>{c.label}</button></Fragment>))}
</div>
<div style={{display: "flex", alignItems: "center", gap: "10px"}}>
<label htmlFor="sort" style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase"}}>Sort</label>
<select id="sort" style={{minHeight: "44px", padding: "0 12px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit", fontSize: "14px"}}>
<option>Featured</option>
<option>Price, low to high</option>
<option>Price, high to low</option>
</select>
</div>
</div>
</section>

<section style={{maxWidth: "1280px", margin: "0 auto", padding: "64px 32px 88px"}}>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "64px 32px"}}>
{v.shown.map((p, $index) => (<Fragment key={$index}><article style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<div style={{position: "relative", aspectRatio: "1 / 1", borderRadius: p.radius, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", boxSizing: "border-box", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#F4EAE4", overflow: "hidden"}}>
{p.hasImg && (<><img src={assetUrl(p.img)} alt={p.alt} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></>)}
{p.noImg && (<><span>Arrangement photo</span></>)}
{p.hasTag && (<><span style={{position: "absolute", top: "16px", right: "16px", padding: "4px 12px", borderRadius: "999px", background: v.leaf, color: "#2E1C2B", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em"}}>{p.tag}</span></>)}
</div>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px"}}>
<h2 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "26px", lineHeight: "1.15"}}>{p.name}</h2>
<span style={{fontSize: "15px", color: "#6B4A63", whiteSpace: "nowrap"}}>[PRICE]</span>
</div>
<p style={{margin: "0", fontSize: "14px", color: "#6B4A63"}}>{p.note}</p>
<button type="button" onClick={p.add} style={{minHeight: "48px", border: "1px solid #2E1C2B", borderRadius: "999px", background: "transparent", color: "#2E1C2B", font: "inherit", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer"}}>Add to cart</button>
</article></Fragment>))}
</div>
</section>
<div aria-hidden="true" style={{display: "flex", justifyContent: "center", padding: "0 32px 72px"}}>
<svg width="300" height="45" viewBox="0 0 320 48">
<g fill="none" stroke="#4F7A3F" strokeWidth="1.8" strokeLinecap="round"><path d="M160 24 C140 18 118 30 96 26 C74 22 54 30 34 26 C24 24 16 20 13 14"></path><path d="M13 14 C10 8 17 5 19 10 C20 13 16 14 15 12"></path></g>
<g fill="#4F7A3F"><path transform="translate(141 21) rotate(-150)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(126 25) rotate(160)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(110 28) rotate(-155) scale(0.85)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(94 26) rotate(165)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(78 24) rotate(-150) scale(0.85)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(62 28) rotate(160)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(46 28) rotate(-145) scale(0.75)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(32 25) rotate(165) scale(0.7)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path></g>
<g transform="translate(320 0) scale(-1 1)">
<g fill="none" stroke="#4F7A3F" strokeWidth="1.8" strokeLinecap="round"><path d="M160 24 C140 18 118 30 96 26 C74 22 54 30 34 26 C24 24 16 20 13 14"></path><path d="M13 14 C10 8 17 5 19 10 C20 13 16 14 15 12"></path></g>
<g fill="#4F7A3F"><path transform="translate(141 21) rotate(-150)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(126 25) rotate(160)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(110 28) rotate(-155) scale(0.85)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(94 26) rotate(165)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(78 24) rotate(-150) scale(0.85)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(62 28) rotate(160)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(46 28) rotate(-145) scale(0.75)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path><path transform="translate(32 25) rotate(165) scale(0.7)" d="M0 0 C5 -7 14 -8 20 -3 C14 2 5 3 0 0Z"></path></g>
</g>
<circle cx="160" cy="24" r="3.5" fill="#E08E45"></circle>
</svg>
</div>
</div>

<section style={{background: "#4A1942"}}>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "112px 32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "8px", maxWidth: "620px"}}>
<h2 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "40px", lineHeight: "1.1"}}>Looking for something <em style={{color: v.leaf}}>custom?</em></h2>
<p style={{margin: "0", color: "#D2BFCB"}}>Weddings, events and funeral flowers are designed one-to-one. Send us the details and we'll follow up.</p>
</div>
<Link to="/events" style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", background: v.accent, color: "#2E1C2B", borderRadius: "999px", fontSize: "14px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase"}}>Start an inquiry</Link>
</div>
</section>

<footer style={{maxWidth: "1280px", margin: "0 auto", padding: "40px 32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", fontSize: "13px", color: "#B9A3B4"}}>
<span>© Nightbloom · [Street address, City]</span>
<span>Site by Whelk Works</span>
</footer>

</div>
    </>
  );
}
