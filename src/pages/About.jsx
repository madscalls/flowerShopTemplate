// Generated from the Nightbloom design mockup (About.dc.html), then hand-editable.
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';

const PAGE_CSS = "body{margin:0;background:#2E1C2B}\na{color:inherit;text-decoration:none}a:hover{opacity:0.75}";

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
    return {
      accent: props.accent ?? '#E08E45',
      leaf: props.leaf ?? '#8FBF7A',
      r,
      team: [
        { name: '[Founder name]', role: 'Founder & lead designer', bg: '#893168', radius: r.arch, img: '/images/florist-portrait.jpg', alt: 'Portrait of the founder holding a bouquet' },
        { name: '[Team member]', role: 'Event designer', bg: '#6A2558', radius: r.arch, img: '/images/team-red-sweater.jpg', alt: 'Portrait of the event designer' },
        { name: '[Team member]', role: 'Studio & delivery', bg: '#4A1942', radius: r.arch, img: '/images/team-white-tee.jpg', alt: 'Portrait of the studio and delivery lead' }
      ].map((t) => ({ ...t, hasImg: !!t.img, noImg: !t.img }))
    };
  }

export default function About() {
  const props = useTheme({"accent": "#E08E45", "leaf": "#8FBF7A", "shape": "organic"});
  const [state, setRaw] = useState({});
  const setState = (patch) => setRaw((s) => ({ ...s, ...patch }));
  const v = renderVals(props, state, setState);
  useEffect(() => { document.title = "Nightbloom \u2014 About"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div style={{background: "#2E1C2B", color: "#F4EAE4", fontFamily: "'Manrope', sans-serif", fontSize: "16px", lineHeight: "1.6", minHeight: "100vh", position: "relative"}}>

<header style={{maxWidth: "1280px", margin: "0 auto", padding: "28px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
<Link to="/" style={{fontFamily: "'Instrument Serif', serif", fontSize: "30px", letterSpacing: "0.01em"}}>Nightbloom</Link>
<nav aria-label="Main" style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase"}}>
<Link to="/shop">Shop</Link>
<Link to="/events">Events &amp; Sympathy</Link>
<Link to="/about" style={{color: v.leaf}}>About</Link>
<Link to="/shop" aria-label="Cart" style={{display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", border: "1px solid #F4EAE4", borderRadius: "999px"}}>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7z"></path><path d="M9 7a3 3 0 0 1 6 0"></path></svg>
</Link>
</nav>
</header>

<section style={{maxWidth: "1280px", margin: "0 auto", padding: "72px 32px 144px", display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "center"}}>
<div style={{flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px"}}>
<p style={{margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: v.leaf}}>About the studio</p>
<h1 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "clamp(44px, 5.4vw, 76px)", lineHeight: "1.02"}}>A small studio with <em style={{color: v.accent}}>a long love</em> of flowers.</h1>
<p style={{margin: "0", maxWidth: "520px", fontSize: "18px", color: "#D2BFCB"}}>[Founder name] opened Nightbloom in [YEAR] after [a sentence on how it started]. Today the studio designs for everyday gifting, weddings, events and families saying goodbye.</p>
<p style={{margin: "0", maxWidth: "520px", color: "#D2BFCB"}}>[A second short paragraph: where you source, what makes your style yours, who's on the team.]</p>
</div>
<div style={{flex: "1 1 420px", minWidth: "0", position: "relative", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "24px", paddingBottom: "64px"}}>
<div title="Leaf decal" aria-hidden="true" style={{position: "absolute", right: "-10%", bottom: "-16%", width: "38%", transform: "scaleX(-1)", zIndex: "0"}}>

</div>
<div style={{position: "relative", gridRow: "span 2", aspectRatio: "1 / 2", borderRadius: "999px 999px 24px 24px", background: "#893168", overflow: "hidden"}}><img src="/images/florist-portrait.jpg" alt="Florist holding a spring bouquet" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
<div style={{position: "relative", aspectRatio: "1 / 1", borderRadius: v.r.leafAlt, background: "#6A2558", marginTop: "64px", width: "198px", height: "205px", overflow: "hidden"}}><img src="/images/florist-at-work.jpg" alt="Florist trimming a branch beside a vase arrangement" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
<div style={{position: "relative", aspectRatio: "1 / 1", borderRadius: v.r.pebble, background: "#4A1942", marginBottom: "-64px", width: "311px", height: "353px", overflow: "hidden"}}><img src="/images/studio-flatlay.jpg" alt="Stems, scissors and ribbon on a studio table" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
</div>
</section>

<section style={{background: "#4A1942"}}>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "128px 32px", display: "flex", flexDirection: "column", gap: "56px", position: "relative"}}>
<h2 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "56px", lineHeight: "1.05"}}>What we <em style={{color: v.leaf}}>care about</em></h2>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "48px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid #7A5873", paddingTop: "28px"}}><span style={{fontFamily: "'Instrument Serif', serif", fontSize: "30px"}}>Seasonal first</span><span style={{color: "#D2BFCB"}}>We design around what's at its best right now, sourced locally whenever we can.</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid #7A5873", paddingTop: "28px"}}><span style={{fontFamily: "'Instrument Serif', serif", fontSize: "30px"}}>Made by hand</span><span style={{color: "#D2BFCB"}}>No templates or assembly lines. Every piece is arranged in the studio.</span></div>
<div style={{display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid #7A5873", paddingTop: "28px"}}><span style={{fontFamily: "'Instrument Serif', serif", fontSize: "30px"}}>Care in hard moments</span><span style={{color: "#D2BFCB"}}>Sympathy orders are handled personally, with the family's wishes at the center.</span></div>
</div>
<svg viewBox="0 0 220 200" style={{display: "block", width: "561px", height: "435px", overflow: "visible", transform: "rotate(-46deg)", position: "absolute", left: "784px", top: "-316px", margin: "0px", boxSizing: "border-box"}}>
<g fill="none" stroke={v.leaf} strokeLinecap="round">
<path d="M216 196 C190 192 168 180 154 160" strokeWidth="3.2"></path>
<path d="M154 160 C140 140 136 116 124 96" strokeWidth="2.4"></path>
<path d="M124 96 C112 76 96 62 76 56" strokeWidth="1.6"></path>
<path d="M76 56 C64 52 58 40 66 34 C72 30 78 36 73 40" strokeWidth="1.1"></path>
<path d="M180 186 C186 164 194 146 210 128" strokeWidth="1.8"></path>
<path d="M210 128 C216 120 218 110 212 106" strokeWidth="1"></path>
<path d="M146 148 C132 150 124 140 128 132 C131 126 138 128 136 134" strokeWidth="1"></path>
</g>
<g>
<g transform="translate(200 193) rotate(-10) scale(0.6)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C8 -10 12 -21 1 -36 C-10 -22 -7 -10 0 -5Z" fill={v.leaf}></path><path d="M0 -7 C0.6 -16 0.8 -25 0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(186 188) rotate(-150) scale(0.55)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C7 -10 10 -22 -1 -36 C-12 -21 -8 -10 0 -5Z" fill={v.leaf} fillOpacity="0.82"></path><path d="M0 -7 C-0.6 -16 -0.8 -25 -0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(168 176) rotate(-35) scale(0.6)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C8 -10 12 -21 1 -36 C-10 -22 -7 -10 0 -5Z" fill={v.leaf}></path><path d="M0 -7 C0.6 -16 0.8 -25 0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(158 166) rotate(-130) scale(0.55)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C7 -10 10 -22 -1 -36 C-12 -21 -8 -10 0 -5Z" fill={v.leaf} fillOpacity="0.82"></path><path d="M0 -7 C-0.6 -16 -0.8 -25 -0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(148 148) rotate(-15) scale(0.55)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C8 -10 12 -21 1 -36 C-10 -22 -7 -10 0 -5Z" fill={v.leaf}></path><path d="M0 -7 C0.6 -16 0.8 -25 0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(140 130) rotate(-105) scale(0.5)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C7 -10 10 -22 -1 -36 C-12 -21 -8 -10 0 -5Z" fill={v.leaf} fillOpacity="0.82"></path><path d="M0 -7 C-0.6 -16 -0.8 -25 -0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(132 112) rotate(5) scale(0.5)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C8 -10 12 -21 1 -36 C-10 -22 -7 -10 0 -5Z" fill={v.leaf}></path><path d="M0 -7 C0.6 -16 0.8 -25 0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(124 98) rotate(-85) scale(0.45)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C7 -10 10 -22 -1 -36 C-12 -21 -8 -10 0 -5Z" fill={v.leaf} fillOpacity="0.82"></path><path d="M0 -7 C-0.6 -16 -0.8 -25 -0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(112 78) rotate(0) scale(0.42)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C8 -10 12 -21 1 -36 C-10 -22 -7 -10 0 -5Z" fill={v.leaf}></path><path d="M0 -7 C0.6 -16 0.8 -25 0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(98 66) rotate(-70) scale(0.38)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C7 -10 10 -22 -1 -36 C-12 -21 -8 -10 0 -5Z" fill={v.leaf} fillOpacity="0.82"></path><path d="M0 -7 C-0.6 -16 -0.8 -25 -0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(86 59) rotate(-15) scale(0.32)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C8 -10 12 -21 1 -36 C-10 -22 -7 -10 0 -5Z" fill={v.leaf}></path></g>
<g transform="translate(186 166) rotate(45) scale(0.45)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C8 -10 12 -21 1 -36 C-10 -22 -7 -10 0 -5Z" fill={v.leaf} fillOpacity="0.82"></path><path d="M0 -7 C0.6 -16 0.8 -25 0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(192 150) rotate(-25) scale(0.42)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C7 -10 10 -22 -1 -36 C-12 -21 -8 -10 0 -5Z" fill={v.leaf}></path><path d="M0 -7 C-0.6 -16 -0.8 -25 -0.6 -33" stroke="#2E1C2B" strokeOpacity="0.3" strokeWidth="1.1" fill="none"></path></g>
<g transform="translate(202 136) rotate(55) scale(0.36)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C8 -10 12 -21 1 -36 C-10 -22 -7 -10 0 -5Z" fill={v.leaf} fillOpacity="0.82"></path></g>
<g transform="translate(209 128) rotate(-5) scale(0.3)"><path d="M0 0 L0 -6" stroke={v.leaf} strokeWidth="1.8" strokeLinecap="round" fill="none"></path><path d="M0 -5 C7 -10 10 -22 -1 -36 C-12 -21 -8 -10 0 -5Z" fill={v.leaf}></path></g>
</g>
</svg></div>
</section>

<section style={{background: "#F6EEEA", color: "#2E1C2B"}}>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "128px 32px", display: "flex", flexDirection: "column", gap: "56px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
<p style={{margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#4F7A3F"}}>The people</p>
<h2 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "56px", lineHeight: "1.05"}}>The team</h2>
</div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px"}}>
{v.team.map((t, $index) => (<Fragment key={$index}><div style={{display: "flex", flexDirection: "column", gap: "14px"}}>
<div style={{position: "relative", aspectRatio: "1 / 1", borderRadius: t.radius, background: t.bg, display: "flex", alignItems: "flex-end", padding: "20px", boxSizing: "border-box", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#F4EAE4", overflow: "hidden"}}>
{t.hasImg && (<><img src={t.img} alt={t.alt} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", borderRadius: "inherit"}} /></>)}
{t.noImg && (<><span>Portrait</span></>)}
</div>
<span style={{fontFamily: "'Instrument Serif', serif", fontSize: "28px", lineHeight: "1.2"}}>{t.name}</span>
<span style={{fontSize: "14px", color: "#6B4A63"}}>{t.role}</span>
</div></Fragment>))}
</div>
</div>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "0 32px 96px", display: "flex", flexWrap: "wrap", gap: "64px", alignItems: "stretch"}}>
<div style={{flex: "1 1 360px", display: "flex", flexDirection: "column", gap: "20px", borderTop: "1px solid #E2D3D0", paddingTop: "64px"}}>
<h2 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "56px", lineHeight: "1.05"}}>Visit the studio</h2>
<p style={{margin: "0", color: "#6B4A63"}}>[Street address]<br />[City, State ZIP]</p>
<p style={{margin: "0", color: "#6B4A63"}}>Tue–Fri [HOURS]<br />Sat [HOURS]<br />Sun–Mon closed</p>
<p style={{margin: "0", color: "#6B4A63"}}>[Phone] · [Email]</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "12px"}}>
<a href="https://maps.google.com" style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", background: "#4A1942", color: "#F4EAE4", borderRadius: "999px", fontSize: "14px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase"}}>Get directions</a>
<Link to="/shop" style={{display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 28px", border: "1px solid #2E1C2B", borderRadius: "999px", fontSize: "14px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase"}}>Shop online</Link>
</div>
</div>
<div style={{position: "relative", flex: "1.4 1 420px", minHeight: "380px", borderRadius: "40px", background: "#E2D3D0", overflow: "hidden"}}><img src="/images/storefront.jpg" alt="Storefront with buckets of roses, ranunculus and anemones" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 70%", borderRadius: "inherit"}} /></div>
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

<footer style={{maxWidth: "1280px", margin: "0 auto", padding: "48px 32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", fontSize: "13px", color: "#B9A3B4"}}>
<span>© Nightbloom · [Street address, City]</span>
<span>Site by Whelk Works</span>
</footer>

</div>
    </>
  );
}
