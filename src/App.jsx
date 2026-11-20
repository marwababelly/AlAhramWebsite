import React, { useState } from "react";
import {
  Menu, X, ArrowUpLeft, ArrowLeft, Wheat, Bird, Sprout, Truck,
  Factory, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram,
  Play, ChevronDown, CheckCircle2
} from "lucide-react";

const company = {
  phone: "+963 999 000 000",
  whatsapp: "963999000000",
  email: "info@alahram-company.example",
  address: "سوريا – يرجى إضافة العنوان التفصيلي",
};

const services = [
  {
    icon: <Wheat />,
    title: "إنتاج الأعلاف النباتية",
    text: "إنتاج أعلاف نباتية وفق معايير تهدف إلى دعم صحة الدواجن وتحسين جودة التربية.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: <Bird />,
    title: "تربية أمهات الفروج",
    text: "العناية بأمهات الفروج ضمن منظومة تربية ومتابعة متخصصة.",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: <Sprout />,
    title: "إنتاج الصيصان",
    text: "إنتاج الصيصان ضمن دورات إنتاجية منتظمة وبطاقة إنتاجية مميزة.",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=900&q=85",
  },
  {
    icon: <Truck />,
    title: "الاستيراد والتصدير",
    text: "خدمات استيراد وتصدير المواشي وتوريد الأعلاف إلى مختلف المحافظات السورية.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=85",
  },
];

const gallery = [
  ["منشآت الإنتاج", "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1000&q=85"],
  ["الأعلاف والحبوب", "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1000&q=85"],
  ["مزارع الدواجن", "https://images.unsplash.com/photo-1516467508483-a7212fede31a?auto=format&fit=crop&w=1000&q=85"],
  ["الثروة الحيوانية", "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"],
];

function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#home" aria-label="شركة الأهرام">
      <span className="brand-mark"><span>أ</span></span>
      <span className="brand-copy">
        <strong>الأهرام</strong>
        <small>يوسف ملحم</small>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["الرئيسية", "#home"], ["من نحن", "#about"], ["خدماتنا", "#services"],
    ["إنجازاتنا", "#numbers"], ["معرض الصور", "#gallery"], ["تواصل معنا", "#contact"],
  ];

  return (
    <div dir="rtl">
      <div className="top-strip">
        <div className="container top-inner">
          <span><MapPin size={14} /> سوريا</span>
          <span className="top-separator">شركة الأهرام يوسف ملحم – للأعلاف والدواجن</span>
          <a href={`tel:${company.phone}`}><Phone size={14} /> {company.phone}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>اطلب معلومات <ArrowLeft size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow"><span /> خبرة في قطاع الأعلاف والدواجن</span>
            <h1>نرعى الجودة...<br /><em>ونصنع الثقة</em></h1>
            <p>شركة الأهرام يوسف ملحم للأعلاف والدواجن واستيراد وتصدير المواشي، نعمل بخطوات ثابتة لدعم قطاع الإنتاج الحيواني.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#about">اكتشف الشركة <ArrowLeft size={18} /></a>
              <a className="button button-outline" href="#contact">تواصل معنا</a>
            </div>
            <div className="hero-note"><span className="note-line" /> من عام 2010 نواصل العمل والنمو</div>
          </div>
          <div className="hero-badge"><strong>14+</strong><span>عاماً من<br />العمل والخبرة</span></div>
          <a href="#about" className="scroll-cue"><span /> اكتشف المزيد</a>
        </section>

        <section className="intro section-pad" id="about">
          <div className="container intro-grid">
            <div className="intro-visual">
              <img className="intro-main" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85" alt="حقول زراعية خضراء" />
              <div className="intro-small"><img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=500&q=85" alt="دواجن" /></div>
              <div className="since-card"><span>تأسست عام</span><strong>2010</strong><small>بداية مسيرة الأهرام</small></div>
            </div>
            <div className="intro-copy">
              <span className="section-kicker">من نحن</span>
              <h2>شريككم في <span>الإنتاج الحيواني</span></h2>
              <p className="lead">شركة الأهرام يوسف ملحم، شركة متخصصة في مجال الأعلاف والدواجن واستيراد وتصدير المواشي.</p>
              <p>منذ تأسيسها عام 2010، تعمل الشركة على تطوير قدراتها الإنتاجية وتقديم خدماتها بما يلبي احتياجات السوق، مع التركيز على جودة الإنتاج واستمرارية التوريد.</p>
              <div className="values-list">
                <div><CheckCircle2 /><span><b>جودة الإنتاج</b><small>الاهتمام بمراحل الإنتاج والتوريد.</small></span></div>
                <div><CheckCircle2 /><span><b>الالتزام والاستمرارية</b><small>العمل وفق طاقات إنتاجية ودورات منتظمة.</small></span></div>
              </div>
              <a className="text-link" href="#services">تعرف على خدماتنا <ArrowLeft size={17} /></a>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="container">
            <div className="section-heading">
              <div><span className="section-kicker">ماذا نقدم؟</span><h2>مجالات عملنا</h2></div>
              <p>مجموعة من الخدمات والأنشطة التي تغطي جوانب متعددة من قطاع الأعلاف والدواجن والثروة الحيوانية.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-image"><img src={service.image} alt={service.title} /><span className="service-number">0{index + 1}</span></div>
                  <div className="service-body"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="numbers section-pad" id="numbers">
          <div className="numbers-pattern" />
          <div className="container numbers-content">
            <div className="numbers-heading"><span className="section-kicker">أرقامنا وإمكاناتنا</span><h2>قدرات إنتاجية<br /><span>تعكس طموحنا</span></h2><p>أرقام من واقع أنشطة الشركة وإمكاناتها الإنتاجية.</p></div>
            <div className="stats-grid">
              <div className="stat"><span className="stat-icon"><Factory /></span><strong>2010</strong><small>عام التأسيس</small></div>
              <div className="stat"><span className="stat-icon"><Wheat /></span><strong>200 <i>طن</i></strong><small>طاقة إنتاج الأعلاف يومياً</small></div>
              <div className="stat"><span className="stat-icon"><Bird /></span><strong>50 <i>ألف</i></strong><small>طاقة تربية أمهات الفروج</small></div>
              <div className="stat"><span className="stat-icon"><Sprout /></span><strong>340 <i>ألف</i></strong><small>صوص في كل دورة (21 يوماً)</small></div>
            </div>
          </div>
          <div className="numbers-footnote container">* الأرقام المعروضة وفق المعلومات الأولية المقدمة عن الشركة.</div>
        </section>

        <section className="gallery section-pad" id="gallery">
          <div className="container">
            <div className="section-heading">
              <div><span className="section-kicker">لمحة من أعمالنا</span><h2>معرض الصور</h2></div>
              <p>صور توضيحية مؤقتة تعكس طبيعة نشاط الشركة، ويمكن استبدالها بسهولة بالصور الرسمية لاحقاً.</p>
            </div>
            <div className="gallery-grid">
              {gallery.map(([title, image], i) => <div className={`gallery-item gallery-item-${i + 1}`} key={title}>
                <img src={image} alt={title} /><div className="gallery-caption"><span>{title}</span><ArrowUpLeft /></div>
              </div>)}
            </div>
            <div className="video-placeholder">
              <div className="video-bg" />
              <div className="video-content"><span className="play-icon"><Play fill="currentColor" /></span><div><small>قريباً</small><h3>الفيديو التعريفي بالشركة</h3><p>سيتم إضافة الفيديو الرسمي هنا عند توفره.</p></div></div>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">يسعدنا تواصلكم</span>
              <h2>لنبدأ <span>بالتواصل</span></h2>
              <p>للاستفسار عن منتجاتنا وخدماتنا أو لطلب معلومات إضافية، يمكنكم التواصل معنا عبر البيانات التالية.</p>
              <div className="contact-list">
                <a href={`tel:${company.phone}`}><span><Phone /></span><div><small>اتصل بنا</small><b>{company.phone}</b></div></a>
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer"><span><MessageCircle /></span><div><small>واتساب</small><b>راسلنا مباشرة</b></div></a>
                <a href={`mailto:${company.email}`}><span><Mail /></span><div><small>البريد الإلكتروني</small><b>{company.email}</b></div></a>
                <div><span><MapPin /></span><div><small>موقعنا</small><b>{company.address}</b></div></div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-top"><Logo light /><span className="card-dot" /></div>
              <h3>شركة الأهرام يوسف ملحم</h3>
              <p>للأعلاف والدواجن واستيراد وتصدير المواشي</p>
              <div className="contact-divider" />
              <a className="button button-gold button-full" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">تواصل عبر واتساب <MessageCircle size={18} /></a>
              <small className="placeholder-warning">بيانات التواصل الحالية تجريبية وتحتاج إلى تحديث.</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div><Logo light /><p>نعمل في مجال الأعلاف والدواجن واستيراد وتصدير المواشي منذ عام 2010.</p></div>
          <div className="footer-links"><b>روابط سريعة</b>{navItems.slice(0, 5).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div className="footer-social"><b>ابقوا على تواصل</b><div><a href="#" aria-label="Facebook"><Facebook /></a><a href="#" aria-label="Instagram"><Instagram /></a><a href={`https://wa.me/${company.whatsapp}`} aria-label="WhatsApp"><MessageCircle /></a></div></div>
        </div>
        <div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} شركة الأهرام يوسف ملحم. جميع الحقوق محفوظة.</span><a href="#home">العودة للأعلى ↑</a></div></div>
      </footer>
    </div>
  );
}

export default App;
