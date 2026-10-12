// Generated from the Nightbloom design mockup (Events.dc.html), then hand-editable.
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';

const PAGE_CSS = "body{margin:0;background:#FFFFFF;color-scheme:light}\na{color:#2E1C2B;text-decoration:none}a:hover{color:#4F7A3F}\ninput,select,textarea{background:#FFFFFF;color:#2E1C2B;color-scheme:light}\ninput[type=checkbox]{accent-color:#4F7A3F;width:18px;height:18px}";

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
    const ev = state.type === 'event';
    return {
      accent: props.accent ?? '#E08E45',
      leaf: props.leaf ?? '#8FBF7A',
      r,
      isEvent: ev,
      isFuneral: !ev,
      evSel: ev ? 'true' : 'false',
      fuSel: ev ? 'false' : 'true',
      evBg: ev ? '#2E1C2B' : 'transparent',
      evFg: ev ? '#F4EAE4' : '#2E1C2B',
      fuBg: ev ? 'transparent' : '#2E1C2B',
      fuFg: ev ? '#2E1C2B' : '#F4EAE4',
      notesLabel: ev ? 'Tell us about the day: colors, mood, must-have flowers' : 'Anything we should know? Favorite flowers, colors, faith traditions',
      thanks: ev
        ? 'We’ve got your event details and will be in touch with next steps and a proposal.'
        : 'We’ve received your request and will reach out shortly to confirm the details. We’re sorry for your loss.',
      sent: state.sent,
      notSent: !state.sent,
      pickEvent: () => setState({ type: 'event' }),
      pickFuneral: () => setState({ type: 'funeral' }),
      submit: () => setState({ sent: true }),
      reset: () => setState({ sent: false })
    };
  }

export default function Events() {
  const props = useTheme({"accent": "#E08E45", "leaf": "#8FBF7A", "shape": "organic"});
  const [state, setRaw] = useState({ type: 'event', sent: false });
  const setState = (patch) => setRaw((s) => ({ ...s, ...patch }));
  const v = renderVals(props, state, setState);
  useEffect(() => { document.title = "Nightbloom \u2014 Events & Sympathy"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div style={{background: "#FFFFFF", color: "#2E1C2B", fontFamily: "'Manrope', sans-serif", fontSize: "16px", lineHeight: "1.6", minHeight: "100vh", position: "relative"}}>

<header style={{maxWidth: "1280px", margin: "0 auto", padding: "28px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
<Link to="/" style={{fontFamily: "'Instrument Serif', serif", fontSize: "30px", letterSpacing: "0.01em"}}>Nightbloom</Link>
<nav aria-label="Main" style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px", fontSize: "14px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase"}}>
<Link to="/shop">Shop</Link>
<Link to="/events" style={{color: "#4F7A3F"}}>Events &amp; Sympathy</Link>
<Link to="/about">About</Link>
<Link to="/shop" aria-label="Cart" style={{display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", border: "1px solid #2E1C2B", borderRadius: "999px"}}>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7z"></path><path d="M9 7a3 3 0 0 1 6 0"></path></svg>
</Link>
</nav>
</header>

<section style={{maxWidth: "1280px", margin: "0 auto", padding: "64px 32px 144px", display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "flex-start"}}>

<div style={{flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px"}}>
<p style={{margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#4F7A3F"}}>Events &amp; sympathy</p>
<h1 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "clamp(44px, 5.4vw, 76px)", lineHeight: "1.02"}}>Flowers for the days <em style={{color: v.accent}}>that matter most.</em></h1>
<p style={{margin: "0", maxWidth: "460px", fontSize: "18px", color: "#6B4A63"}}>From weddings and private dinners to funerals and memorials, every order here is designed one-to-one. Share a few details and we'll reply within [RESPONSE TIME].</p>
<div style={{position: "relative", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px", paddingBottom: "56px"}}>
<div title="Leaf decal" aria-hidden="true" style={{position: "absolute", right: "-216px", bottom: "-249px", width: "358px", transform: "rotate(23deg) scaleX(-1)", zIndex: "0", height: "259px"}}>

</div>
<div style={{position: "relative", aspectRatio: "1 / 1", borderRadius: v.r.leaf, background: "#893168", overflow: "hidden"}}><img src="/images/wedding-cake.jpg" alt="Wedding cake table with floral arrangements" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
<div style={{position: "relative", aspectRatio: "1 / 1", borderRadius: v.r.arch, background: "#6A2558", marginTop: "56px", marginBottom: "-56px", width: "288px", height: "274px", overflow: "hidden"}}><img src="/images/garden-table.jpg" alt="Long garden dinner table with low arrangements" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
<div style={{position: "relative", aspectRatio: "1 / 1", borderRadius: v.r.pebble, background: "#4A1942", width: "241px", height: "245px", overflow: "hidden"}}><img src="/images/blue-vase-orchid.jpg" alt="White orchids and greenery in a blue vase" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
<div style={{position: "relative", aspectRatio: "1 / 1", borderRadius: v.r.leafAlt, background: "#5E2452", marginTop: "56px", marginBottom: "-56px", overflow: "hidden"}}><img src="/images/orchid-anthurium.jpg" alt="Orchid and anthurium installation" style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}} /></div>
</div>
<div style={{borderTop: "1px solid #E2D3D0", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "6px"}}>
<span style={{fontSize: "13px", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4F7A3F"}}>Need flowers for a service this week?</span>
<span style={{color: "#6B4A63"}}>Call the studio directly at [Phone]. We work with local funeral homes and can deliver to the service.</span>
</div>
</div>

<div style={{flex: "1 1 520px", minWidth: "0", background: "#F6EEEA", color: "#2E1C2B", borderRadius: "40px", padding: "56px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "28px", position: "relative"}}>

{v.sent && (<><div style={{display: "flex", flexDirection: "column", gap: "16px", padding: "48px 0"}}>
<h2 style={{margin: "0", fontFamily: "'Instrument Serif', serif", fontWeight: "400", fontSize: "44px", lineHeight: "1.1"}}>Thank you.</h2>
<p style={{margin: "0", color: "#6B4A63"}}>{v.thanks}</p>
<div><button type="button" onClick={v.reset} style={{minHeight: "48px", padding: "0 22px", border: "1px solid #2E1C2B", borderRadius: "999px", background: "transparent", color: "#2E1C2B", font: "inherit", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer"}}>Send another</button></div>
</div></>)}

{v.notSent && (<><div style={{display: "flex", flexDirection: "column", gap: "28px"}}>
<div role="tablist" aria-label="Inquiry type" style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "4px", padding: "4px", border: "1px solid #7A5873", borderRadius: "999px"}}>
<button type="button" role="tab" aria-selected={v.evSel} onClick={v.pickEvent} style={{minHeight: "48px", border: "0", borderRadius: "999px", background: v.evBg, color: v.evFg, font: "inherit", fontSize: "14px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer"}}>Wedding / Event</button>
<button type="button" role="tab" aria-selected={v.fuSel} onClick={v.pickFuneral} style={{minHeight: "48px", border: "0", borderRadius: "999px", background: v.fuBg, color: v.fuFg, font: "inherit", fontSize: "14px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer"}}>Funeral / Sympathy</button>
</div>

<form style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "20px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="fn" style={{fontSize: "13px", fontWeight: "600"}}>Your name</label><input id="fn" type="text" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="ph" style={{fontSize: "13px", fontWeight: "600"}}>Phone</label><input id="ph" type="tel" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>
<div style={{gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="em" style={{fontSize: "13px", fontWeight: "600"}}>Email</label><input id="em" type="email" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>

{v.isEvent && (<><div style={{gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "20px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="et" style={{fontSize: "13px", fontWeight: "600"}}>Type of event</label>
<select id="et" style={{minHeight: "48px", padding: "0 12px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}}><option>Wedding</option><option>Rehearsal dinner</option><option>Shower</option><option>Corporate</option><option>Private party</option><option>Other</option></select></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="ed" style={{fontSize: "13px", fontWeight: "600"}}>Event date</label><input id="ed" type="date" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="ve" style={{fontSize: "13px", fontWeight: "600"}}>Venue</label><input id="ve" type="text" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="gc" style={{fontSize: "13px", fontWeight: "600"}}>Guest count</label><input id="gc" type="number" min="1" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="eb" style={{fontSize: "13px", fontWeight: "600"}}>Floral budget</label>
<select id="eb" style={{minHeight: "48px", padding: "0 12px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}}><option>[RANGE 1]</option><option>[RANGE 2]</option><option>[RANGE 3]</option><option>Not sure yet</option></select></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="pi" style={{fontSize: "13px", fontWeight: "600"}}>Inspiration link (optional)</label><input id="pi" type="url" placeholder="Pinterest, Instagram\u2026" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>
<fieldset style={{gridColumn: "1 / -1", border: "0", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "10px"}}>
<legend style={{fontSize: "13px", fontWeight: "600", marginBottom: "10px"}}>What do you need?</legend>
<div style={{display: "flex", flexWrap: "wrap", gap: "10px 24px"}}>
<label style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px"}}><input type="checkbox" /> Bouquets</label>
<label style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px"}}><input type="checkbox" /> Boutonnières</label>
<label style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px"}}><input type="checkbox" /> Centerpieces</label>
<label style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px"}}><input type="checkbox" /> Ceremony arch</label>
<label style={{display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px"}}><input type="checkbox" /> Installations</label>
</div>
</fieldset>
</div></>)}

{v.isFuneral && (<><div style={{gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "20px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="dn" style={{fontSize: "13px", fontWeight: "600"}}>Name of the deceased</label><input id="dn" type="text" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="rl" style={{fontSize: "13px", fontWeight: "600"}}>Your relationship</label>
<select id="rl" style={{minHeight: "48px", padding: "0 12px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}}><option>Family</option><option>Friend</option><option>Colleague</option><option>Organization</option><option>Other</option></select></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="fh" style={{fontSize: "13px", fontWeight: "600"}}>Funeral home or venue</label><input id="fh" type="text" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="sd" style={{fontSize: "13px", fontWeight: "600"}}>Service date &amp; time</label><input id="sd" type="datetime-local" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="ft" style={{fontSize: "13px", fontWeight: "600"}}>Arrangement</label>
<select id="ft" style={{minHeight: "48px", padding: "0 12px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}}><option>Standing spray</option><option>Casket spray</option><option>Wreath</option><option>Urn arrangement</option><option>Sympathy vase to the home</option><option>Plant</option><option>Not sure, please advise</option></select></div>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="fb" style={{fontSize: "13px", fontWeight: "600"}}>Budget</label>
<select id="fb" style={{minHeight: "48px", padding: "0 12px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}}><option>[RANGE 1]</option><option>[RANGE 2]</option><option>[RANGE 3]</option><option>Not sure yet</option></select></div>
<div style={{gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="cm" style={{fontSize: "13px", fontWeight: "600"}}>Card message</label><input id="cm" type="text" placeholder="With love and deepest sympathy\u2026" style={{minHeight: "48px", padding: "0 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit"}} /></div>
</div></>)}

<div style={{gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "6px"}}><label htmlFor="nt" style={{fontSize: "13px", fontWeight: "600"}}>{v.notesLabel}</label><textarea id="nt" rows="4" style={{padding: "12px 14px", border: "1px solid #7A5873", borderRadius: "12px", font: "inherit", resize: "vertical"}}></textarea></div>
<div style={{gridColumn: "1 / -1", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
<span style={{fontSize: "13px", color: "#6B4A63"}}>We'll never share your details.</span>
<button type="button" onClick={v.submit} style={{minHeight: "52px", padding: "0 32px", border: "0", borderRadius: "999px", background: v.accent, color: "#2E1C2B", font: "inherit", fontSize: "14px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer"}}>Send inquiry</button>
</div>
</form>
</div></>)}

</div>
</section>

<footer style={{borderTop: "1px solid #E2D3D0"}}>
<div style={{maxWidth: "1280px", margin: "0 auto", padding: "40px 32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", fontSize: "13px", color: "#6B4A63"}}>
<span>© Nightbloom · [Street address, City]</span>
<span>Site by Whelk Works</span>
</div>
</footer>

<svg viewBox="0 0 220 200" style={{display: "block", width: "530px", height: "511px", overflow: "visible", position: "absolute", left: "775px", top: "1008px", transform: "rotate(-31deg)"}}>
<g fill="none" stroke="#4F7A3F" strokeLinecap="round">
<path d="M212 196 C190 190 168 178 152 160" strokeWidth="3"></path>
<path d="M152 160 C138 144 128 124 116 104" strokeWidth="2.2"></path>
<path d="M116 104 C102 82 86 64 62 48" strokeWidth="1.4"></path>
<path d="M168 176 C176 156 182 140 197 122" strokeWidth="1.4"></path>
<g strokeWidth="1">
<path d="M194 188 L201.7 175.1"></path><path d="M194 188 L186.3 200.9"></path>
<path d="M170 174 L177 162"></path><path d="M170 174 L163 186"></path>
<path d="M150 157 L160 148.5"></path><path d="M150 157 L140 165.5"></path>
<path d="M136 140 L145 132"></path><path d="M136 140 L127 148"></path>
<path d="M124 121 L133 115"></path><path d="M124 121 L115 127"></path>
<path d="M112 100 L120 94.5"></path><path d="M112 100 L104 105.5"></path>
<path d="M98 80 L104 74"></path><path d="M98 80 L92 86"></path>
<path d="M82 64 L88 58"></path><path d="M82 64 L76 70"></path>
<path d="M174 160 L183 164.5"></path><path d="M174 160 L165 155.5"></path>
<path d="M184 140 L191 144"></path><path d="M184 140 L177 136"></path>
</g>
</g>
<g stroke="#4F7A3F" strokeOpacity="0.35" strokeWidth="0.8">
<ellipse cx="201.7" cy="175.1" rx="12" ry="10.6" fill={v.leaf} fillOpacity="0.95" transform="rotate(-30 201.7 175.1)"></ellipse>
<ellipse cx="186.3" cy="200.9" rx="12" ry="10.6" fill={v.leaf} fillOpacity="0.72" transform="rotate(-30 186.3 200.9)"></ellipse>
<ellipse cx="177" cy="162" rx="11" ry="9.8" fill={v.leaf} fillOpacity="0.72" transform="rotate(-35 177 162)"></ellipse>
<ellipse cx="163" cy="186" rx="11" ry="9.8" fill={v.leaf} fillOpacity="0.95" transform="rotate(-35 163 186)"></ellipse>
<ellipse cx="160" cy="148.5" rx="10" ry="8.9" fill={v.leaf} fillOpacity="0.95" transform="rotate(-45 160 148.5)"></ellipse>
<ellipse cx="140" cy="165.5" rx="10" ry="8.9" fill={v.leaf} fillOpacity="0.72" transform="rotate(-45 140 165.5)"></ellipse>
<ellipse cx="145" cy="132" rx="9" ry="8" fill={v.leaf} fillOpacity="0.72" transform="rotate(-45 145 132)"></ellipse>
<ellipse cx="127" cy="148" rx="9" ry="8" fill={v.leaf} fillOpacity="0.95" transform="rotate(-45 127 148)"></ellipse>
<ellipse cx="133" cy="115" rx="8" ry="7.1" fill={v.leaf} fillOpacity="0.95" transform="rotate(-55 133 115)"></ellipse>
<ellipse cx="115" cy="127" rx="8" ry="7.1" fill={v.leaf} fillOpacity="0.72" transform="rotate(-55 115 127)"></ellipse>
<ellipse cx="120" cy="94.5" rx="7" ry="6.2" fill={v.leaf} fillOpacity="0.72" transform="rotate(-55 120 94.5)"></ellipse>
<ellipse cx="104" cy="105.5" rx="7" ry="6.2" fill={v.leaf} fillOpacity="0.95" transform="rotate(-55 104 105.5)"></ellipse>
<ellipse cx="104" cy="74" rx="6" ry="5.3" fill={v.leaf} fillOpacity="0.95" transform="rotate(-45 104 74)"></ellipse>
<ellipse cx="92" cy="86" rx="6" ry="5.3" fill={v.leaf} fillOpacity="0.72" transform="rotate(-45 92 86)"></ellipse>
<ellipse cx="88" cy="58" rx="5" ry="4.4" fill={v.leaf} fillOpacity="0.72"></ellipse>
<ellipse cx="76" cy="70" rx="5" ry="4.4" fill={v.leaf} fillOpacity="0.95"></ellipse>
<ellipse cx="60" cy="46" rx="4" ry="3.5" fill={v.leaf} fillOpacity="0.9"></ellipse>
<ellipse cx="183" cy="164.5" rx="8" ry="7.1" fill={v.leaf} fillOpacity="0.8" transform="rotate(25 183 164.5)"></ellipse>
<ellipse cx="165" cy="155.5" rx="8" ry="7.1" fill={v.leaf} fillOpacity="0.9" transform="rotate(25 165 155.5)"></ellipse>
<ellipse cx="191" cy="144" rx="6" ry="5.3" fill={v.leaf} fillOpacity="0.9" transform="rotate(30 191 144)"></ellipse>
<ellipse cx="177" cy="136" rx="6" ry="5.3" fill={v.leaf} fillOpacity="0.75" transform="rotate(30 177 136)"></ellipse>
<ellipse cx="198" cy="121" rx="5" ry="4.4" fill={v.leaf} fillOpacity="0.9"></ellipse>
</g>
</svg></div>
    </>
  );
}
