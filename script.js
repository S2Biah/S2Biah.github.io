:root{
  --bg:#070b12;
  --panel:rgba(255,255,255,.04);
  --panel2:rgba(255,255,255,.06);
  --text:#eaf0ff;
  --muted:#aeb8d6;
  --border:rgba(255,255,255,.10);
  --accent:#ff2bd6;      /* magenta neon */
  --accent2:#6ea8ff;     /* blue neon */
  --shadow: 0 18px 60px rgba(0,0,0,.45);
}

*{ box-sizing:border-box; }
html{ scroll-behavior:smooth; }

body{
  margin:0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Arial, sans-serif;
  background: radial-gradient(1200px 700px at 20% 0%, rgba(110,168,255,.10), transparent 55%),
              radial-gradient(1000px 600px at 90% 20%, rgba(255,43,214,.10), transparent 55%),
              var(--bg);
  color:var(--text);
  overflow-x:hidden;
}

.container{ width:min(1120px, 92%); margin:0 auto; }

a{ color:inherit; text-decoration:none; }
a:hover{ opacity:1; }

.muted{ color:var(--muted); }

/* Background glow blobs */
.bg-glow{
  position:fixed;
  width:520px; height:520px;
  filter: blur(90px);
  opacity:.35;
  z-index:-1;
}
.g1{ background: rgba(110,168,255,.35); left:-220px; top:-220px; }
.g2{ background: rgba(255,43,214,.30); right:-220px; top:120px; }

/* Header */
.header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:18px 0;
  position:sticky;
  top:0;
  z-index:50;
  background: rgba(7,11,18,.65);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,.06);
}

.brand{
  display:flex;
  align-items:center;
  gap:10px;
}
.brand-mark{
  font-weight:900;
  letter-spacing:.6px;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid var(--border);
  background: linear-gradient(135deg, rgba(255,43,214,.14), rgba(110,168,255,.12));
}
.brand-text{
  font-weight:700;
  color: rgba(234,240,255,.92);
}

.nav{
  display:flex;
  gap:18px;
  flex-wrap:wrap;
  justify-content:center;
}
.nav a{
  color: var(--muted);
  font-weight:600;
  font-size:14px;
  padding:10px 8px;
  border-radius:12px;
}
.nav a:hover{
  color: var(--text);
  background: rgba(255,255,255,.03);
}

.header-actions{
  display:flex;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
}

.chip{
  padding:10px 12px;
  border-radius:999px;
  border:1px solid var(--border);
  color: var(--muted);
  background: rgba(255,255,255,.03);
}

/* Buttons */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:11px 14px;
  border-radius:14px;
  border:1px solid var(--border);
  background: rgba(255,255,255,.03);
  color: var(--text);
  font-weight:700;
  cursor:pointer;
  transition: transform .18s ease, background .18s ease, border-color .18s ease;
}
.btn:hover{ transform: translateY(-1px); }
.btn.primary{
  border-color: rgba(255,43,214,.35);
  background: linear-gradient(135deg, rgba(255,43,214,.22), rgba(110,168,255,.14));
  box-shadow: 0 18px 50px rgba(255,43,214,.10);
}
.btn.ghost{
  background: rgba(255,255,255,.02);
}
.btn.soft{
  border-color: rgba(110,168,255,.25);
  background: rgba(110,168,255,.10);
}

/* Hero */
.hero{
  display:grid;
  grid-template-columns: 1.2fr .9fr;
  gap:22px;
  padding: 38px 0 10px;
  align-items: start;
}
@media (max-width: 980px){
  .hero{ grid-template-columns: 1fr; }
  .header{ position:relative; }
}

.kicker{
  color: rgba(234,240,255,.78);
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  display:inline-block;
  padding:8px 12px;
  border-radius:999px;
  margin:0 0 12px;
  font-size:13px;
}

.hero-title{
  margin:0 0 10px;
  line-height:1.02;
  font-size: clamp(34px, 4.4vw, 56px);
  letter-spacing:-.6px;
}
.accent{
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  background-clip:text;
  color: transparent;
}
.hero-subtitle{
  margin:0 0 18px;
  color: var(--muted);
  line-height: 1.65;
  font-size: 16px;
  max-width: 56ch;
}

.hero-cta{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin: 14px 0 10px;
}

.hero-links{
  display:flex;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
  color: rgba(234,240,255,.86);
  margin: 10px 0 18px;
}
.hero-links a{ color: rgba(234,240,255,.86); font-weight:650; }
.hero-links a:hover{ color: var(--text); }
.dot{
  width:4px; height:4px;
  border-radius:999px;
  background: rgba(255,255,255,.35);
}

/* Stats */
.stats{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
}
@media (max-width: 620px){
  .stats{ grid-template-columns: 1fr; }
}
.stat{
  border:1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  border-radius:18px;
  padding:14px 14px;
  position: relative;
  overflow:hidden;
}
.stat::before{
  content:"";
  position:absolute;
  inset:-1px;
  background: radial-gradient(220px 120px at 30% 0%, rgba(255,43,214,.22), transparent 60%),
              radial-gradient(220px 120px at 90% 30%, rgba(110,168,255,.16), transparent 60%);
  opacity:.65;
  pointer-events:none;
}
.stat-value{
  position:relative;
  font-weight:900;
  letter-spacing:.5px;
  font-size:18px;
}
.stat-label{
  position:relative;
  margin-top:4px;
  color: var(--muted);
  font-size:13px;
}

/* Profile card (hero right) */
.profile-card{
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  border-radius: 22px;
  overflow:hidden;
  box-shadow: var(--shadow);
  position: relative;
}
.profile-card::before{
  content:"";
  position:absolute;
  inset:-1px;
  background: radial-gradient(280px 200px at 20% 0%, rgba(255,43,214,.20), transparent 60%),
              radial-gradient(320px 220px at 90% 20%, rgba(110,168,255,.14), transparent 60%);
  opacity:.85;
  pointer-events:none;
}

.profile-media{
  position: relative;
  padding: 18px;
}
.profile-media img{
  width:100%;
  height: 360px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.10);
  display:block;
  background: rgba(255,255,255,.02);
}
@media (max-width: 980px){
  .profile-media img{ height: 320px; }
}

.ring{
  position:absolute;
  width: 220px; height: 220px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.12);
  left: 40%;
  top: 10%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 12px rgba(255,43,214,.06);
  pointer-events:none;
}

.profile-badge{
  position:absolute;
  left: 26px;
  bottom: 28px;
  padding:10px 12px;
  border-radius: 999px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(7,11,18,.60);
  backdrop-filter: blur(10px);
  font-weight: 750;
  font-size: 13px;
}

.profile-info{
  position:relative;
  padding: 16px 18px 18px;
}
.profile-info h3{
  margin:0 0 6px;
  font-size:18px;
}
.profile-info p{
  margin:0 0 12px;
  color: var(--muted);
  line-height:1.55;
}
.mini-badges{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.mini-badges span{
  padding:6px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.10);
  color: rgba(234,240,255,.86);
  background: rgba(255,255,255,.03);
  font-size:12px;
}

/* Sections */
.section{
  padding: 32px 0;
  margin-top: 20px;
  border-top: 1px solid rgba(255,255,255,.06);
}
.section-head{
  margin-bottom: 14px;
}
.section-head h2{
  margin: 0 0 6px;
  font-size: 26px;
  letter-spacing: -.2px;
}
.section-head p{
  margin:0;
  color: var(--muted);
  line-height:1.55;
}
.section-head.row{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
}

/* Panels / Cards */
.panel, .card, .skill-card, .project{
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  border-radius: 22px;
  padding: 18px;
  position: relative;
  overflow:hidden;
}
.panel::before, .card::before, .skill-card::before, .project::before{
  content:"";
  position:absolute;
  inset:-1px;
  background: linear-gradient(135deg, rgba(255,43,214,.16), rgba(110,168,255,.10), rgba(255,255,255,.06));
  opacity:.45;
  pointer-events:none;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  padding:1px;
  border-radius:22px;
}

/* About */
.about-grid{
  display:grid;
  grid-template-columns: 1.1fr .9fr;
  gap:14px;
}
@media (max-width: 980px){
  .about-grid{ grid-template-columns: 1fr; }
}
.panel h3, .card h3, .skill-card h3{ margin:0 0 10px; }
.panel p, .card p{ margin:0 0 14px; color: var(--muted); line-height:1.6; }

.about-actions{ display:flex; gap:10px; flex-wrap:wrap; margin-top: 6px; }

.highlights{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:10px;
}
@media (max-width: 620px){
  .highlights{ grid-template-columns: 1fr; }
}
.hi{
  border:1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  border-radius: 16px;
  padding:12px 12px;
}
.hi-title{ display:block; font-weight:800; }
.hi-sub{ display:block; color: var(--muted); margin-top:4px; font-size: 13px; }

/* Services grid */
.grid3{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:14px;
}
@media (max-width: 980px){
  .grid3{ grid-template-columns: 1fr; }
}
.card-tags{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
}
.card-tags span{
  padding:6px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.10);
  color: rgba(234,240,255,.86);
  background: rgba(255,255,255,.03);
  font-size:12px;
}

/* Projects */
.search{
  padding:11px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  color: var(--text);
  min-width: 240px;
  outline:none;
}

.projects-grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:14px;
}
@media (max-width: 1080px){
  .projects-grid{ grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 720px){
  .projects-grid{ grid-template-columns: 1fr; }
}

.project-top{
  display:grid;
  grid-template-columns: 150px 1fr;
  gap:14px;
  align-items:start;
}
@media (max-width: 420px){
  .project-top{ grid-template-columns: 1fr; }
}

.project-thumb{
  border:1px solid rgba(255,255,255,.10);
  background: linear-gradient(135deg, rgba(255,43,214,.10), rgba(110,168,255,.08));
  border-radius: 18px;
  height: 120px;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  overflow:hidden;
}
.thumb-inner{
  font-weight:900;
  color: rgba(234,240,255,.72);
  letter-spacing:.6px;
  font-size: 13px;
  border:1px dashed rgba(255,255,255,.18);
  padding:10px 12px;
  border-radius: 14px;
}

.project-meta h3{ margin:0 0 6px; }
.project-meta p{ margin:0 0 10px; color: var(--muted); line-height:1.55; }

.pill-row{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  margin-bottom:10px;
}
.pill{
  padding:6px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  color: rgba(234,240,255,.86);
  font-size:12px;
}

.links-row{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
}
.links-row a{
  color: rgba(234,240,255,.92);
  font-weight:750;
  position:relative;
}
.links-row a::after{
  content:"";
  position:absolute;
  left:0; bottom:-4px;
  width:100%; height:2px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  opacity:.55;
}
.links-row a:hover::after{ opacity: 1; }

/* Skills */
.skills-grid{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:14px;
}
@media (max-width: 1080px){
  .skills-grid{ grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 620px){
  .skills-grid{ grid-template-columns: 1fr; }
}
.skill-card ul{
  margin:0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.65;
}

/* Contact */
.contact-grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:14px;
}
@media (max-width: 980px){
  .contact-grid{ grid-template-columns: 1fr; }
}

.contact-links{
  display:flex;
  flex-direction:column;
  gap:10px;
  margin-top: 12px;
}
.contact-link{
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:12px;
  padding:12px 12px;
  border-radius: 16px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
}
.contact-link span{ font-weight:900; }
.contact-link small{ color: var(--muted); }

.note{
  margin-top: 14px;
  padding: 12px 12px;
  border-radius: 16px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  color: rgba(234,240,255,.90);
}

.form{
  display:flex;
  flex-direction:column;
  gap:12px;
}
.form-row label{
  display:block;
  font-weight:800;
  margin-bottom:6px;
}
.form-row input, .form-row textarea{
  width:100%;
  padding:12px 12px;
  border-radius: 14px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(255,255,255,.03);
  color: var(--text);
  outline:none;
}
.form-row input:focus, .form-row textarea:focus{
  border-color: rgba(255,43,214,.35);
  box-shadow: 0 0 0 4px rgba(255,43,214,.10);
}
.form-help{ margin:0; font-size: 12px; }

/* Hover lift */
.panel:hover, .card:hover, .skill-card:hover, .project:hover, .stat:hover{
  transform: translateY(-2px);
  transition: transform .18s ease;
}

/* Footer */
.footer{
  padding: 26px 0 34px;
  border-top: 1px solid rgba(255,255,255,.06);
  margin-top: 24px;
  color: var(--muted);
}
