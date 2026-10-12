// Generated from the Nightbloom design mockup (Main.dc.html), then hand-editable.
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { assetUrl } from '../assets.js';

const PAGE_CSS = "body{margin:0;background:#2E1C2B}\na{color:inherit;text-decoration:none}a:hover{opacity:0.75}\ninput{background:#FFFFFF;color:#2E1C2B}";

function renderVals(props, state, setState) {
    const shapes = {
      organic: {
        leaf: '38% 6% 38% 6%',
        leafAlt: '6% 38% 6% 38%',
        arch: '50% 50% 8% 8% / 42% 42% 8% 8%',
        pebble: '46% 54% 42% 58% / 52% 44% 56% 48%'
      },
      soft: { leaf: '24px', leafAlt: '24px', arch: '24px', pebble: '24px' },
      square: { leaf: '0', leafAlt: '0', arch: '0', pebble: '0' }
    };
    const r = shapes[props.shape ?? 'organic'] || shapes.organic;
    const cycle = [r.leaf, r.arch, r.leafAlt, r.pebble];
    const dark = ['#893168', '#6A2558', '#2E1C2B', '#5E2452'];
    const GAL = [['/images/studio-flatlay.jpg', 'Stems, scissors and ribbon on a studio table'], ['/images/orchid-anthurium.jpg', 'Orchid and anthurium installation'], ['/images/two-bouquets.jpg', 'Two hand-tied bouquets on a wooden bench'], ['/images/burgundy-alstroemeria.jpg', 'Burgundy chrysanthemums and alstroemeria'], ['/images/garden-table.jpg', 'Long garden dinner table with low arrangements'], ['/images/hydrangea-orchid.jpg', 'Hydrangeas and peach orchids'], ['/images/wedding-cake.jpg', 'Wedding cake table with floral arrangements'], ['/images/berry-bouquet.jpg', 'Bouquet of roses, berries and eucalyptus']];
    const gallery = Array.from({ length: 8 }, (_, i) => ({
      radius: cycle[i % 4],
      bg: dark[i % 4],
      offset: i % 2 === 1 ? '48px' : '0px',
      offsetNeg: i % 2 === 1 ? '-48px' : '0px',
      label: 'Studio ' + (i + 1),
      img: GAL[i][0],
      alt: GAL[i][1]
    }));
    const featured = [
      { name: 'The Garden Hour', bg: '#893168', img: '/images/garden-roses.jpg', alt: 'Garden roses with trailing wildflowers in a low bowl' },
      { name: 'Window Light', bg: '#6A2558', img: '/images/hydrangea-window.jpg', alt: 'Blue hydrangea arrangement in a cut-glass vase by a window' },
      { name: 'Harvest Urn', bg: '#4A1942', img: '/images/dahlia-urn.jpg', alt: 'Dahlias, chrysanthemum and roses in a stone urn' },
      { name: 'Plum & Bramble', bg: '#5E2452', img: '/images/mantel-urn.jpg', alt: 'Moody arrangement in a bronze urn on a mantel' }
    ].map((f, i) => ({ ...f, radius: i % 2 ? r.leafAlt : r.leaf }));
    return { accent: props.accent ?? '#E08E45', leaf: props.leaf ?? '#8FBF7A', r, gallery, featured };
  }

export default function Home() {
  const props = useTheme({"accent": "#E08E45", "leaf": "#8FBF7A", "shape": "organic"});
  const [state, setRaw] = useState({});
  const setState = (patch) => setRaw((s) => ({ ...s, ...patch }));
  const v = renderVals(props, state, setState);
  useEffect(() => { document.title = "Nightbloom \u2014 Home"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div style={{background: "#2E1C2B", color: "#F4EAE4", fontFamily: "'Manrope', sans-serif", fontSize: "16px", lineHeight: "1.6", minHeight: "100vh"}}>

<header style={{maxWidth: "1280px", margin: "0 auto", padding: "28px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
<Link to="/" style={{fontFamily: "'Instrument Serif', serif", fontSize: "30px", letterSpacing: "0.01em"}}>Nightbloom</Link>
<nav aria-label="Main" style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase"}}>
<Link to="/shop">Shop</Link>
<Link to="/events">Events &amp; Sympathy</Link>
<Link to="/about">About</Link>
<Link to="/shop" aria-label="Cart" style={{display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", border: "1px solid #F4EAE4", borderRadius: "999px"}}>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7z"></path><path d="M9 7a3 3 0 0 1 6 0"></path></svg>
</Link>
</nav>
</header>



<section style={{maxWidth: "1280px", margin: "0 auto", padding: "72px 32px 144px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "80px", position: "relative"}}>
<div style={{flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "32px"}}>
<p style={{margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: v.leaf}}>Floral studio · [Your City]</p>
<h1 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "clamp(48px, 6vw, 84px)", lineHeight: "1.02", letterSpacing: "-0.01em"}}>Flowers, arranged <em style={{color: v.accent}}>with intention.</em></h1>
<p style={{margin: "0", maxWidth: "440px", fontSize: "18px", color: "#D2BFCB"}}>Seasonal arrangements for everyday, weddings, events and sympathy, designed by hand and delivered locally.</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
<Link to="/shop" style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", background: v.accent, color: "#2E1C2B", borderRadius: "999px", fontSize: "14px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase"}}>Shop arrangements</Link>
<Link to="/events" style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", border: "1px solid #F4EAE4", borderRadius: "999px", fontSize: "14px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase"}}>Plan an event</Link>
</div>
</div>
<div style={{flex: "1.3 1 480px", minWidth: "0", position: "relative", aspectRatio: "10 / 8.4", width: "583px"}}>
<div title="Leaf decal" aria-hidden="true" style={{position: "absolute", right: "-196px", bottom: "-146px", width: "452px", transform: "rotate(20deg) scaleX(-1)", zIndex: "0", height: "391px"}}>
<svg viewBox="0 0 220 200" style={{display: "block", width: "100%", height: "auto", overflow: "visible"}}>
<g stroke={v.leaf} strokeWidth="2.2" strokeLinecap="round" fill="none">
<path d="M214 194 C176 190 146 176 132 148 C120 122 136 98 158 104 C176 110 172 132 156 130 C148 129 147 120 153 118"></path>
<path d="M146 166 C116 156 94 134 90 104 C86 76 100 52 126 42"></path>
<path d="M126 42 C140 36 148 48 140 53 C135 56 131 50 135 48"></path>
<path d="M98 132 C84 132 78 120 85 114 C90 110 95 116 91 119"></path>
<path d="M188 182 C190 160 200 146 214 140"></path>
<path d="M214 140 C222 138 222 128 216 128"></path>
<path d="M112 70 C98 62 98 50 106 48 C111 47 112 54 108 55"></path>
</g>
<g fill={v.leaf}>
<path transform="translate(120 152) rotate(-115)" d="M0 0 C-7 -6 -7 -15 0 -20 C7 -15 7 -6 0 0Z"></path>
<path transform="translate(100 126) rotate(-40)" d="M0 0 C-7 -6 -7 -15 0 -20 C7 -15 7 -6 0 0Z" fillOpacity="0.75"></path>
<path transform="translate(90 100) rotate(-105)" d="M0 0 C-6 -5 -6 -13 0 -17 C6 -13 6 -5 0 0Z"></path>
<path transform="translate(95 80) rotate(-30)" d="M0 0 C-7 -6 -7 -15 0 -20 C7 -15 7 -6 0 0Z" fillOpacity="0.75"></path>
<path transform="translate(106 59) rotate(-95)" d="M0 0 C-6 -5 -6 -13 0 -17 C6 -13 6 -5 0 0Z"></path>
<path transform="translate(118 47) rotate(-10)" d="M0 0 C-5 -4 -5 -11 0 -14 C5 -11 5 -4 0 0Z"></path>
<path transform="translate(150 170) rotate(160)" d="M0 0 C-7 -6 -7 -15 0 -20 C7 -15 7 -6 0 0Z" fillOpacity="0.75"></path>
<path transform="translate(174 183) rotate(-20)" d="M0 0 C-7 -6 -7 -15 0 -20 C7 -15 7 -6 0 0Z"></path>
<path transform="translate(194 160) rotate(-60)" d="M0 0 C-6 -5 -6 -13 0 -17 C6 -13 6 -5 0 0Z" fillOpacity="0.75"></path>
<path transform="translate(206 146) rotate(20)" d="M0 0 C-5 -4 -5 -11 0 -14 C5 -11 5 -4 0 0Z"></path>
<path transform="translate(134 128) rotate(-140)" d="M0 0 C-6 -5 -6 -13 0 -17 C6 -13 6 -5 0 0Z"></path>
</g>
</svg>
</div>
<div style={{position: "absolute", left: "0", top: "11%", width: "56%", aspectRatio: "1 / 1", borderRadius: v.r.leaf, background: "#893168", boxShadow: "0 28px 60px rgba(0,0,0,0.45)", overflow: "hidden"}}><img src={assetUrl("/images/berry-bouquet.jpg")} alt="Bouquet of roses, berries and eucalyptus" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
<div style={{position: "absolute", right: "2%", top: "0", width: "36%", aspectRatio: "1 / 1", borderRadius: v.r.arch, background: "#6A2558", boxShadow: "0 22px 48px rgba(0,0,0,0.4)", overflow: "hidden"}}><img src={assetUrl("/images/hydrangea-orchid.jpg")} alt="Hydrangeas and peach orchids" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
<div style={{position: "absolute", left: "62%", top: "57%", width: "25%", aspectRatio: "1 / 1", borderRadius: v.r.pebble, background: "#4A1942", boxShadow: "0 18px 40px rgba(0,0,0,0.45)", overflow: "hidden"}}><img src={assetUrl("/images/peach-roses.jpg")} alt="Peach and pink roses with white hydrangea" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
</div>
</section>

<section style={{background: "#F6EEEA", color: "#2E1C2B"}}>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "72px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px", borderBottom: "1px solid #E2D3D0"}}>
<div style={{display: "flex", flexDirection: "column", gap: "8px"}}><span style={{fontFamily: "'Instrument Serif', serif", fontSize: "28px"}}>Local delivery</span><span style={{color: "#6B4A63"}}>Same-day delivery on orders placed by [CUTOFF TIME].</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "8px"}}><span style={{fontFamily: "'Instrument Serif', serif", fontSize: "28px"}}>Weddings &amp; events</span><span style={{color: "#6B4A63"}}>Full-service florals, from bouquets to installations.</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "8px"}}><span style={{fontFamily: "'Instrument Serif', serif", fontSize: "28px"}}>Sympathy</span><span style={{color: "#6B4A63"}}>Thoughtful tributes, handled gently and on time.</span></div>
</div>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "120px 32px 80px", display: "flex", flexDirection: "column", gap: "56px"}}>
<div style={{display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
<p style={{margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#4F7A3F"}}>In the studio now</p>
<h2 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "56px", lineHeight: "1.05"}}>This week's arrangements</h2>
</div>
<Link to="/shop" style={{fontSize: "14px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "1px solid #2E1C2B", paddingBottom: "4px"}}>View the shop</Link>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px"}}>
{v.featured.map((f, $index) => (<Fragment key={$index}><Link to="/shop" style={{display: "flex", flexDirection: "column", gap: "16px"}}>
<div style={{aspectRatio: "1 / 1", borderRadius: f.radius, background: f.bg, position: "relative", overflow: "hidden"}}><img src={assetUrl(f.img)} alt={f.alt} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
<div style={{display: "flex", justifyContent: "space-between", gap: "12px"}}><span style={{fontFamily: "'Instrument Serif', serif", fontSize: "24px", lineHeight: "1.2"}}>{f.name}</span><span style={{fontSize: "15px", color: "#6B4A63", whiteSpace: "nowrap"}}>[PRICE]</span></div>
</Link></Fragment>))}
</div><div aria-hidden="true" style={{display: "flex", justifyContent: "center", padding: "0 32px 72px", height: "-8px", width: "1205px"}}>
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

</section>

<section style={{background: "#4A1942"}}>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "128px 32px 144px", display: "flex", flexDirection: "column", gap: "56px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px"}}>
<h2 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "56px", lineHeight: "1.05", maxWidth: "560px"}}>From the studio, <em style={{color: v.leaf}}>lately.</em></h2>
<a href="https://instagram.com" style={{fontSize: "14px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: `1px solid ${v.leaf}`, paddingBottom: "4px"}}>@[yourhandle]</a>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "24px", paddingBottom: "56px"}}>
{v.gallery.map((g, $index) => (<Fragment key={$index}><div style={{aspectRatio: "1 / 1", borderRadius: g.radius, background: g.bg, marginTop: g.offset, marginBottom: g.offsetNeg, position: "relative", overflow: "hidden"}}><img src={assetUrl(g.img)} alt={g.alt} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div></Fragment>))}
</div>
</div>
</section>

<section style={{background: "#F6EEEA", color: "#2E1C2B"}}>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "144px 32px 96px", display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "center"}}>
<div style={{flex: "1 1 360px", display: "flex", flexDirection: "column", gap: "24px"}}>
<p style={{margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#4F7A3F"}}>By inquiry</p>
<h2 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "56px", lineHeight: "1.05"}}>Weddings, events &amp; sympathy</h2>
<p style={{margin: "0", color: "#6B4A63", maxWidth: "480px"}}>Tell us about the day and we'll put together a proposal. For funeral and memorial flowers, we can coordinate directly with the funeral home.</p>
<div><Link to="/events" style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", background: "#4A1942", color: "#F4EAE4", borderRadius: "999px", fontSize: "14px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase"}}>Start an inquiry</Link></div>
</div>
<div style={{flex: "1 1 420px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "24px", paddingBottom: "64px"}}>
<div style={{position: "relative", aspectRatio: "1 / 1", borderRadius: v.r.arch, background: "#893168", overflow: "hidden"}}><img src={assetUrl("/images/wedding-cake.jpg")} alt="Wedding cake table with floral arrangements" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
<div style={{position: "relative", aspectRatio: "1 / 1", borderRadius: v.r.leaf, background: "#4A1942", marginTop: "64px", marginBottom: "-64px", overflow: "hidden"}}><img src={assetUrl("/images/blue-vase-orchid.jpg")} alt="White orchids and greenery in a blue vase" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
</div>
</div>
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
</section>

<footer>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "96px 32px 48px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "48px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "10px"}}><span style={{fontFamily: "'Instrument Serif', serif", fontSize: "32px"}}>Nightbloom</span><span style={{color: "#D2BFCB"}}>[Street address]<br />[City, State ZIP]</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: v.leaf}}>Hours</span><span style={{color: "#D2BFCB"}}>Tue–Fri [HOURS]<br />Sat [HOURS]<br />Sun–Mon closed</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: v.leaf}}>Contact</span><span style={{color: "#D2BFCB"}}>[Phone]<br />[Email]</span></div>
<form style={{display: "flex", flexDirection: "column", gap: "10px"}}>
<label htmlFor="nl" style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: v.leaf}}>Seasonal notes</label>
<div style={{display: "flex", gap: "8px"}}>
<input id="nl" type="email" placeholder="Email address" style={{flex: "1", minWidth: "0", minHeight: "48px", padding: "0 18px", border: "0", borderRadius: "999px", font: "inherit"}} />
<button type="button" style={{minHeight: "48px", padding: "0 22px", border: "0", borderRadius: "999px", background: v.accent, color: "#2E1C2B", font: "inherit", fontWeight: "600", cursor: "pointer"}}>Join</button>
</div>
</form>
</div>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 32px 40px", fontSize: "13px", color: "#B9A3B4"}}>© Nightbloom. Site by Whelk Works.</div>
</footer>

</div>
    </>
  );
}
