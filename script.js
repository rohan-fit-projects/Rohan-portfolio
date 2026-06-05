/* ═══════════════════════════════════════════════════
   ROHAN'S CAMPAIGN PORTFOLIO — SCRIPT.JS
   ═══════════════════════════════════════════════════ */

/* ── CAMPAIGN DATA ── */
const campaigns = [
  {
    img: 'campaign-1.svg',
    campaignVisual: 'campaign-1.svg',
    category: 'Educational · Product Explainer',
    title: 'Ship Smart with IndiaPost via Xindus',
    copy: 'VAT, Duty, De-minimis thresholds: the compliance maze that trips up Indian exporters every time. We built a clean, infographic-style campaign that broke down the complex into the crystal clear. Bright sky blue palette, India Post branding, step-by-step layout. The goal: make exporters go "Oh! It\'s actually THAT simple."',
    campaignCopy: `Hey SAKAMBRI HANDICRAFTS

VAT & Duty are too confusing to understand!!!

Well now don't worry, it won't be anymore!

For VAT:
• Marketplaces (Etsy, Amazon, eBay) collects it at checkout.
• Then provides a VAT number (IOSS, VOEC, etc.)
• Just enter that while creating shipment on the portal.

For Duty:
• Simply take benefit from the duty-free threshold.
• So your buyer won't get charged anything extra at delivery.

Check the duty-free limit for any country:
👉 https://export-duty-calculator-xindus.netlify.app/

Got clarity? now you can ship easily:
https://one.xindus.net/new-booking

Note: India Post do 3 delivery attempts, then collect at nearest post office`,
    tags: ['Infographic', 'VAT/Duty', 'Trust Builder', 'Educational']
  },
  {
    img: 'campaign-2.svg',
    campaignVisual: 'campaign-2.svg',
    category: 'Partnership Reveal · Rate Card',
    title: 'Ek naya dost — India Post',
    copy: 'The big partnership reveal. Xindus x India Post. We led with warmth, "Ek naya dost" (a new friend), then hit with numbers. Lowest India Post rates in India for exports. Country-wise pricing cards. The Xindus Eagle mascot made its debut here, giving the brand a face exporters could connect with.',
    campaignCopy: `🙏 Khamma Ghani sa, Xindus Family!

खुशखबरी है - India Post ab live hai Xindus portal pe, with the lowest rates in the market.

How to check rates:

1. Enable India Post from your Dashboard (Compliance approval in ~ 30 minutes)
2. Go to Ship Now → Create Shipment
3. Select Country → Choose Compliance (PBE 3/4 or IP Non-Commercial)
4. Select Shipping Method → Click on Sign rates to view pricing.

Demo videos and detailed guides will be shared soon.

Please share your questions in the group first - it helps us respond faster and benefits everyone.

घणी-घणी धन्यवाद! 🙏`,
    tags: ['Partnership', 'Mascot Reveal', 'Rate Card', 'India Post']
  },
  {
    img: 'campaign-3.svg',
    campaignVisual: 'campaign-3.svg',
    category: 'Humor · Problem-Solving · Decision Content',
    title: 'Ocean karun?? Ya Air karun??',
    copy: 'The classic exporter dilemma, animated, relatable and answered with swagger. Instead of a boring comparison table, we used a split-panel cartoon to mirror the exact thought loop every exporter has before choosing a shipping mode. The punchline? There\'s a third option: Air + Sea Hybrid.',
    campaignCopy: `Confusion hi confusion hai, Solution kuch pata nahi? 🤯
Air hai costly, Ocean slow... karun kya? Kuch samajh nahi!!! 🤷‍♂️

No worries, our dear Kritva Fashion! Xindus brings you the "All Izz Well" of logistics.

Get the speed of Air and the savings of Sea with our
New Air + Sea Hybrid Product. 🚢✈️

TAT: 30 Days (Door-to-Door)
with Best Rates*

Note: Minimum 1 Ton per consignment*

Sounds Interesting??

Just mark in the Poll below and our team will connect with you!

<div style="background: white; border-radius: 8px; padding: 12px; margin-top: 10px; border: 1px solid #e5e5e5; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
  <div style="font-size: 11px; color: #667781; margin-bottom: 8px;">Customer Support - Xindus</div>
  <div style="font-weight: bold; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">Answer here 😊</div>
  <div style="font-size: 10px; color: #667781; margin-bottom: 12px; display: flex; align-items: center; gap: 4px;">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Select one
  </div>
  
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid #667781;"></div>
      <span style="font-size: 13px;">Yes! Need this for my next shipment</span>
    </div>
    <span style="font-size: 11px; color: #111b21;">0</span>
  </div>
  <div style="height: 4px; background: #e9edef; border-radius: 2px; margin-bottom: 16px; margin-left: 26px;"></div>

  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid #667781;"></div>
      <span style="font-size: 13px;">Interested, tell me more</span>
    </div>
    <span style="font-size: 11px; color: #111b21;">0</span>
  </div>
  <div style="height: 4px; background: #e9edef; border-radius: 2px; margin-bottom: 16px; margin-left: 26px;"></div>

  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid #667781;"></div>
      <span style="font-size: 13px;">Not right now</span>
    </div>
    <span style="font-size: 11px; color: #111b21;">0</span>
  </div>
  <div style="height: 4px; background: #e9edef; border-radius: 2px; margin-bottom: 16px; margin-left: 26px;"></div>

  <div style="border-top: 1px solid #e9edef; margin-top: 8px; padding-top: 8px; text-align: center; color: #00a884; font-weight: bold; font-size: 13px;">View votes</div>
</div>`,
    tags: ['Interactive Poll', 'Hinglish', 'Hybrid Shipping']
  },
  {
    img: 'campaign-4.svg',
    campaignVisual: 'campaign-4.svg',
    category: 'Market Launch · Geographic Expansion',
    title: 'We Are LIVE in Canada! 🇨🇦',
    copy: 'A market entry announcement that matches the scale of the milestone. Canada visualised with geographic pride: Vancouver and Toronto lit up on the map, aircraft and ships converging. Xindus Lite goes live Canada-wide. The copy was punchy, the visual was a hero, and the features list was tight.',
    campaignCopy: `Xindus: SUNO HANDICRAFTS walo
Humne ab kar diya!

You: Kya Kar diya???🤔

Aree Xindus ne Canada me Self service, LIVE KAR DIYA!
Oye Hoyee!!! 🥳

Now moving load to Canada is going to be very easy and cost efficient. 🤌
Best for 5Kg+

Steps: Choose Canada → CSB 4/5 → Xindus Lite → Sign rates → Rest is same

Door to Door tracking same as US Xindus Lite.

View rates 
👉 https://xindus-canada-lite-rates.netlify.app/

And Book Your Shipments Today!`,
    tags: ['Launch Campaign', 'Canada Expansion', 'Xindus Lite']
  },
  {
    img: 'campaign-5.svg',
    campaignVisual: 'campaign-5.svg',
    category: 'News Hijack · Value Proposition · Urgency',
    title: 'Middle East War? We\'re SURCHARGE FREE.',
    copy: 'When global shipping routes were disrupted by Middle East tensions and every carrier started adding surcharges, we flipped the narrative. Instead of staying quiet, we boldly linked the news moment to our India Post advantage: zero surcharges. Dramatic visuals, urgent copy, clear CTA.',
    campaignCopy: `Yes, the unexpected WAR is actually happening.

Surcharges are being applied, Leading to the increase in Air Freight rates.

But still, there's one hope to help us in this crisis:
India Post (via Xindus) is still Surcharge-free.

Check the best rates for 130+ countries.

🔗 Rate Calculator - https://xindus-indiapost-rates.netlify.app/

Ready to ship? Book your shipment today:
🔗 Login - https://one.xindus.net/`,
    tags: ['News Moment', 'Urgency', 'India Post']
  }
];

/* ── RENDER CAMPAIGN CARDS ── */
const grid = document.getElementById('campaignsGrid');

const cardLayouts = [
  { classes: 'campaign-card card-featured', badge: 'badge-info', badgeText: 'Educational' },
  { classes: 'campaign-card', badge: 'badge-collab', badgeText: 'Partnership' },
  { classes: 'campaign-card', badge: 'badge-featured', badgeText: 'Featured' },
  { classes: 'campaign-card', badge: 'badge-launch', badgeText: 'Launch' },
  { classes: 'campaign-card card-wide', badge: 'badge-bold', badgeText: 'Urgency' }
];

if (grid) {
  grid.innerHTML = campaigns.map((c, i) => {
    const layout = cardLayouts[i];
    return `
    <article class="${layout.classes}" id="campaign-${i+1}" data-category="${c.category}">
      <div class="card-image-wrap">
        <div class="image-placeholder" id="placeholder-${i}">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
        <img src="${c.img}" alt="${c.title}" class="card-img" loading="lazy"
          onerror="this.style.display='none';"
          onload="this.style.display='block'; document.getElementById('placeholder-${i}').style.display='none';" />
        <div class="card-overlay">
          <button class="view-btn" data-campaign="${i}">View Campaign</button>
        </div>
        <div class="card-badge ${layout.badge}">${layout.badgeText}</div>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${c.category.split('·')[0].trim()}</span>
          <span class="card-platform">WhatsApp</span>
        </div>
        <h3 class="card-title">${c.title}</h3>
        <p class="card-copy">${c.copy}</p>
        <div class="card-tags">
          ${c.tags.slice(0,3).map(t => `<span class="ctag">${t}</span>`).join('')}
        </div>
      </div>
    </article>`;
  }).join('');
}

/* ── SOPHISTICATED CURSOR WITH BLUR TRAIL ── */
const cursor = document.getElementById('cursor');
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
let isInteracting = false;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  if(cursor) {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  }
});

const interactiveEls = document.querySelectorAll('a, button, .campaign-card, .tag, .step, .skill-bar');
interactiveEls.forEach(el => {
  el.addEventListener('mouseenter', () => {
    isInteracting = true;
    if(cursor && cursorGlow) {
      cursor.classList.add('active');
      cursorGlow.classList.add('active');
    }
  });
  el.addEventListener('mouseleave', () => {
    isInteracting = false;
    if(cursor && cursorGlow) {
      cursor.classList.remove('active');
      cursorGlow.classList.remove('active');
    }
  });
});

if(cursorGlow) {
  (function animateGlow() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
  })();
}

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if(navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll(
  '.campaign-card, .step, .skill-item, .about-grid, .section-header, .tag, .hero-stat, .contact-inner'
);
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ── SKILL BAR ANIMATION ── */
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('animated'), 200);
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
skillFills.forEach(el => skillObserver.observe(el));

/* ── LIGHTBOX ── */
const lightbox     = document.getElementById('lightbox');
const lbBackdrop   = document.getElementById('lbBackdrop');
const lbClose      = document.getElementById('lbClose');
const lbPrev       = document.getElementById('lbPrev');
const lbNext       = document.getElementById('lbNext');
const lbChat       = document.getElementById('lbChat');
const lbCtxCat     = document.getElementById('lbCtxCat');
const lbCtxTitle   = document.getElementById('lbCtxTitle');
const lbCtxCopy    = document.getElementById('lbCtxCopy');
const lbCtxTags    = document.getElementById('lbCtxTags');
const lbDots       = document.getElementById('lbDots');
const lbCampaignVisual = document.getElementById('lbCampaignVisual');

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('active');
  lbBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lbBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const c = campaigns[currentIndex];
  
  let formattedText = c.campaignCopy.replace(/\n/g, '<br>');
  
  // Convert URLs to link-styled text (no navigation)
  formattedText = formattedText.replace(
    /(https?:\/\/[^\s<]+)/g,
    '<span class="styled-link">$1</span>'
  );
  
  // Build WhatsApp chat
  lbChat.innerHTML = `
    <div class="lb-bubble lb-bubble-in" style="animation-delay: 0.1s;">
      <div class="lb-bubble-text">${formattedText}</div>
    </div>
  `;

  // Campaign visual
  if(lbCampaignVisual) {
    lbCampaignVisual.src = c.campaignVisual;
    lbCampaignVisual.alt = c.title;
  }

  // Context panel
  lbCtxCat.textContent = c.category;
  lbCtxTitle.textContent = c.title;
  lbCtxCopy.textContent = c.copy;
  lbCtxTags.innerHTML = c.tags.map(t => `<span class="tag">${t}</span>`).join('');

  // Dots
  if(lbDots) {
    lbDots.innerHTML = campaigns.map((_, i) =>
      `<div class="lb-dot ${i === currentIndex ? 'active' : ''}" data-i="${i}"></div>`
    ).join('');
    lbDots.querySelectorAll('.lb-dot').forEach(dot => {
      dot.addEventListener('click', () => { currentIndex = +dot.dataset.i; updateLightbox(); });
    });
  }

  // Nav visibility
  if(lbPrev) {
    lbPrev.style.opacity = currentIndex === 0 ? '0.3' : '1';
    lbPrev.style.pointerEvents = currentIndex === 0 ? 'none' : 'all';
  }
  if(lbNext) {
    lbNext.style.opacity = currentIndex === campaigns.length - 1 ? '0.3' : '1';
    lbNext.style.pointerEvents = currentIndex === campaigns.length - 1 ? 'none' : 'all';
  }

  // Scroll chat to top
  if(lbChat) lbChat.scrollTop = 0;
}

// Open triggers
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    openLightbox(+btn.dataset.campaign);
  });
});
document.querySelectorAll('.campaign-card').forEach((card, i) => {
  card.addEventListener('click', () => {
    const btn = card.querySelector('.view-btn');
    if (btn) openLightbox(+btn.dataset.campaign);
  });
});

if(lbClose) lbClose.addEventListener('click', closeLightbox);
if(lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
if(lbPrev) {
  lbPrev.addEventListener('click', e => {
    e.stopPropagation();
    if (currentIndex > 0) { currentIndex--; updateLightbox(); }
  });
}
if(lbNext) {
  lbNext.addEventListener('click', e => {
    e.stopPropagation();
    if (currentIndex < campaigns.length - 1) { currentIndex++; updateLightbox(); }
  });
}

document.addEventListener('keydown', e => {
  if (lightbox && !lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft' && currentIndex > 0) { currentIndex--; updateLightbox(); }
  if (e.key === 'ArrowRight' && currentIndex < campaigns.length - 1) { currentIndex++; updateLightbox(); }
});

/* ── HERO PARALLAX ── */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const orbs = document.querySelectorAll('.orb');
  orbs.forEach((orb, i) => {
    const speed = (i + 1) * 0.06;
    orb.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

/* ── TICKER PAUSE ON HOVER ── */
const tickerTrack = document.querySelector('.ticker-track');
if (tickerTrack) {
  tickerTrack.addEventListener('mouseenter', () => tickerTrack.style.animationPlayState = 'paused');
  tickerTrack.addEventListener('mouseleave', () => tickerTrack.style.animationPlayState = 'running');
}

/* ── SMOOTH ANCHOR SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── CARD TILT EFFECT ── */
document.querySelectorAll('.campaign-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-10px) rotateY(${x * 5}deg) rotateX(${-y * 3}deg)`;
    card.style.transition = 'transform 0.1s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s';
  });
});

/* ── NUMBER COUNTER ANIMATION ── */
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 2000;
  const startTime = performance.now();
  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    
    // Check if target is a decimal
    const isDecimal = target % 1 !== 0;
    
    let value;
    if (isDecimal) {
      value = (start + (target - start) * eased).toFixed(1);
    } else {
      value = Math.round(start + (target - start) * eased);
    }
    
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statNums = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const text = el.textContent;
      const num = parseFloat(text); // Use parseFloat to handle 1.5
      const suffix = text.replace(/[\d\.]+/, ''); // Handle digits and dots
      if (!isNaN(num)) animateCounter(el, num, suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => counterObserver.observe(el));
