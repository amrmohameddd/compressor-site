import React from "react";
import "./App.css";

const PHONE = "966554916491";
const PHONE_DISPLAY = "+966 55 491 6491";

const services = [
  { number: "01", icon: "◉", title: "معالجة البيارات", description: "حلول فعّالة لمعالجة البيارات والتعامل مع مشكلات الصرف الصحي باحترافية." },
  { number: "02", icon: "⌁", title: "تسليك المجاري", description: "إزالة الانسدادات وتنظيف خطوط الصرف باستخدام معدات مناسبة للمهمة." },
  { number: "03", icon: "◌", title: "رفع الدهون المجمدة", description: "تنظيف تجمعات الدهون والرواسب من الخطوط والمصائد للحفاظ على كفاءة التشغيل." },
  { number: "04", icon: "▤", title: "تنظيف خزانات المياه", description: "تنظيف الخزانات بعناية للمساعدة في الحفاظ على بيئة تخزين نظيفة." },
  { number: "05", icon: "↗", title: "سحب مخلفات المصانع", description: "خدمات سحب ونقل المخلفات وفق طبيعة الموقع واحتياجات العمل." },
  { number: "06", icon: "≋", title: "خدمات الصرف الصحي", description: "خدمات ميدانية متنوعة للأفراد والمنشآت مع اهتمام بالتنفيذ المنظم." },
];

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "brand-footer" : ""}`} href="#home" aria-label="كمبروسر - الرئيسية">
      <img src="/logo.svg" alt="" className="brand-logo" />
      <span className="brand-copy">
        <strong>كمبروسر</strong>
        <small>حلول الصرف الصحي</small>
      </span>
    </a>
  );
}

function PhoneLink({ children, className = "" }) {
  return (
    <a className={className} href={`tel:+${PHONE}`} dir="ltr">
      {children || PHONE_DISPLAY}
    </a>
  );
}

export default function App() {
  return (
    <div className="site-shell" dir="rtl">
      <div className="topline">
        <div className="container topline-inner">
          <span><i className="status-dot" /> جاهزون لخدمتكم على مدار الساعة</span>
          <PhoneLink className="topline-phone">اتصل بنا: {PHONE_DISPLAY}</PhoneLink>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <Brand />
          <nav className="nav-links" aria-label="التنقل الرئيسي">
            <a href="#home">الرئيسية</a>
            <a href="#services">خدماتنا</a>
            <a href="#about">من نحن</a>
            <a href="#contact">تواصل معنا</a>
          </nav>
          <PhoneLink className="nav-cta">اتصل الآن <span>↗</span></PhoneLink>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow"><span className="eyebrow-line" /> مؤسسة أبو الدهب للخدمات</div>
              <h1>حلول موثوقة<br /><em>للصرف الصحي</em></h1>
              <p className="hero-lead">خدمات سحب وتنظيف ومعالجة بمعدات حديثة وفريق جاهز للتعامل مع احتياجاتكم، من أول اتصال وحتى إتمام العمل.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">اطلب الخدمة <span>←</span></a>
                <a className="button button-ghost" href="#services">اكتشف خدماتنا <span>⌄</span></a>
              </div>
              <div className="hero-trust">
                <div className="trust-icon">✓</div>
                <div><strong>تنفيذ منظم واهتمام بالتفاصيل</strong><small>حلول عملية تناسب طبيعة كل موقع</small></div>
              </div>
            </div>

            <div className="hero-visual" aria-label="هوية كمبروسر">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-card">
                <div className="visual-card-top"><span>خدمات ميدانية</span><span className="visual-live"><i /> متاحون</span></div>
                <div className="visual-mark-wrap"><img src="/logo.svg" alt="شعار كمبروسر" className="visual-mark" /></div>
                <div className="visual-card-bottom">
                  <div><small>مؤسسة</small><strong>أبو الدهب</strong></div>
                  <span className="visual-arrow">↗</span>
                </div>
              </div>
              <div className="floating-chip chip-top"><span>✦</span> خدمة باهتمام</div>
              <div className="floating-chip chip-bottom"><span className="chip-check">✓</span> حلول عملية للموقع</div>
              <div className="visual-dots" />
            </div>
          </div>
          <div className="container hero-bottom">
            <span>خبرة ميدانية</span><b /> <span>معدات مناسبة</span><b /> <span>اهتمام بسلامة الموقع</span>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow"><span className="eyebrow-line" /> خدماتنا</div><h2>خدمات متكاملة،<br /><em>من مكان واحد</em></h2></div>
              <p>نقدم مجموعة من خدمات الصرف الصحي والتنظيف والسحب، مع اختيار طريقة العمل وفق احتياج كل عميل وطبيعة الموقع.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card-head"><span className="service-icon">{service.icon}</span><span className="service-number">{service.number}</span></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" aria-label={`اطلب خدمة ${service.title}`} className="service-link">اطلب الخدمة <span>←</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="about-art">
              <div className="about-art-panel">
                <div className="about-art-caption"><span /> نهتم بالتفاصيل</div>
                <img src="/logo.svg" alt="" className="about-logo" />
                <div className="about-art-label"><strong>كمبروسر</strong><span>خدمات الصرف الصحي</span></div>
              </div>
              <div className="about-stamp">خدمة<br />بمسؤولية</div>
            </div>
            <div className="about-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> من نحن</div>
              <h2>شريككم في<br /><em>الحلول الميدانية</em></h2>
              <p>في مؤسسة أبو الدهب، نركز على تقديم خدمات الصرف الصحي والتنظيف والسحب بصورة منظمة وواضحة. نبدأ بفهم احتياجكم، ثم نحدد الخدمة المناسبة ونحرص على إنجاز العمل باهتمام.</p>
              <ul className="about-points">
                <li><span>✓</span> تواصل مباشر وسهل</li>
                <li><span>✓</span> خدمات تناسب احتياج الموقع</li>
                <li><span>✓</span> اهتمام بالتنفيذ والنظافة</li>
              </ul>
              <a className="text-link" href="#contact">تواصل مع فريقنا <span>←</span></a>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-panel">
            <div className="contact-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> تواصل معنا</div>
              <h2>هل تحتاج إلى<br /><em>خدمة ميدانية؟</em></h2>
              <p>اتصل بنا ووضح احتياجك، وسنساعدك في تحديد الخدمة المناسبة.</p>
            </div>
            <div className="contact-action">
              <PhoneLink className="contact-phone"><span className="phone-icon">☎</span><span><small>اتصل بنا مباشرة</small><strong>{PHONE_DISPLAY}</strong></span><b>↗</b></PhoneLink>
              <a className="button button-primary" href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">تواصل عبر واتساب <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <Brand footer />
          <p>حلول عملية وخدمات ميدانية للصرف الصحي والتنظيف والسحب.</p>
          <a href="#home" className="back-top">العودة للأعلى ↑</a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} كمبروسر. جميع الحقوق محفوظة.</span><span>مؤسسة أبو الدهب للخدمات</span></div>
      </footer>
    </div>
  );
}
