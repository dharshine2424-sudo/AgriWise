// =====================================================
//  AgriWise — script.js
//  Smart Farmer Assistant · Vegetable Edition
//  Design: Farmer-Friendly × Premium AgriTech
// =====================================================

// ---- 14 Crops Data ----
const CROPS = [
  { id: 'tomato',       name: 'Tomato',        emoji: '🍅', bgColor: '#fee2e2', accentColor: '#dc2626', desc: 'Popular kitchen essential' },
  { id: 'onion',        name: 'Onion',          emoji: '🧅', bgColor: '#fef3c7', accentColor: '#b45309', desc: 'Used in every Indian dish' },
  { id: 'green-chilli', name: 'Green Chilli',   emoji: '🌶️', bgColor: '#dcfce7', accentColor: '#16a34a', desc: 'Adds spice and flavor' },
  { id: 'brinjal',      name: 'Brinjal',        emoji: '🍆', bgColor: '#f3e8ff', accentColor: '#7c3aed', desc: 'Versatile cooking vegetable' },
  { id: 'ladys-finger', name: "Lady's Finger",  emoji: '🫑', bgColor: '#d1fae5', accentColor: '#065f46', desc: 'Rich in vitamins and fibre' },
  { id: 'potato',       name: 'Potato',         emoji: '🥔', bgColor: '#fef9c3', accentColor: '#a16207', desc: 'Most consumed vegetable' },
  { id: 'cauliflower',  name: 'Cauliflower',    emoji: '🥦', bgColor: '#f0f9ff', accentColor: '#0369a1', desc: 'High demand in winter' },
  { id: 'drumstick',    name: 'Drumstick',      emoji: '🌿', bgColor: '#ecfdf5', accentColor: '#047857', desc: 'Nutritious and medicinal' },
  { id: 'cabbage',      name: 'Cabbage',        emoji: '🥬', bgColor: '#f0fdf4', accentColor: '#15803d', desc: 'Good for winter season' },
  { id: 'radish',       name: 'Radish',         emoji: '🌱', bgColor: '#fdf2f8', accentColor: '#9d174d', desc: 'Fast growing root crop' },
  { id: 'coriander',    name: 'Coriander',      emoji: '🍃', bgColor: '#ecfdf5', accentColor: '#064e3b', desc: 'Essential herb and garnish' },
  { id: 'mint',         name: 'Mint',           emoji: '🌿', bgColor: '#f0fdf4', accentColor: '#16a34a', desc: 'Aromatic culinary herb' },
  { id: 'beans',        name: 'Beans',          emoji: '🫘', bgColor: '#f0fdf4', accentColor: '#166534', desc: 'Protein-rich green vegetable' },
  { id: 'carrot',       name: 'Carrot',         emoji: '🥕', bgColor: '#fff7ed', accentColor: '#c2410c', desc: 'Vitamin-rich root vegetable' },
];

// ---- Market Prices (₹/kg) — SAMPLE DEMONSTRATION DATA ONLY ----
const MARKET_PRICES = {
  'tomato':        { local: 18,  district: 24,  online: 30  },
  'onion':         { local: 22,  district: 28,  online: 35  },
  'green-chilli':  { local: 45,  district: 60,  online: 80  },
  'brinjal':       { local: 20,  district: 28,  online: 38  },
  'ladys-finger':  { local: 35,  district: 45,  online: 55  },
  'potato':        { local: 15,  district: 20,  online: 28  },
  'cauliflower':   { local: 25,  district: 32,  online: 42  },
  'drumstick':     { local: 30,  district: 40,  online: 55  },
  'cabbage':       { local: 18,  district: 25,  online: 35  },
  'radish':        { local: 12,  district: 18,  online: 25  },
  'coriander':     { local: 80,  district: 100, online: 140 },
  'mint':          { local: 60,  district: 80,  online: 110 },
  'beans':         { local: 40,  district: 52,  online: 68  },
  'carrot':        { local: 28,  district: 38,  online: 50  },
};

// ---- Storage Guidance ----
const STORAGE_DATA = {
  'tomato': {
    temperature: '10–15°C', humidity: '85–90%', maxDays: 14,
    packaging: 'Ventilated plastic crates',
    tips: [
      'Store stem-side down to reduce moisture loss',
      'Keep away from direct sunlight',
      'Do not refrigerate unripe tomatoes',
      'Never store with apples or bananas',
    ],
    warning: 'Bruised tomatoes spread rot to the whole batch — sort and remove damaged ones daily.',
  },
  'onion': {
    temperature: '0–5°C or 25–30°C', humidity: '60–70%', maxDays: 90,
    packaging: 'Mesh or jute bags — never sealed plastic',
    tips: [
      'Store in a dry, dark, well-ventilated area',
      'Never store near potatoes (moisture exchange)',
      'Remove any sprouting or soft onions immediately',
      'Cure in sun for 2–4 weeks before long-term storage',
    ],
    warning: 'High humidity causes very rapid rotting and total batch loss.',
  },
  'green-chilli': {
    temperature: '7–10°C', humidity: '90–95%', maxDays: 14,
    packaging: 'Perforated polythene bags',
    tips: [
      'Refrigerate in paper-lined bags for best results',
      'Do not wash before storing',
      'Sun-dry or pickle for 6–12 months shelf life',
      'Keep away from frost at all times',
    ],
    warning: 'Chilling below 5°C causes skin pitting and severe damage.',
  },
  'brinjal': {
    temperature: '10–12°C', humidity: '90–95%', maxDays: 10,
    packaging: 'Ventilated cardboard boxes',
    tips: [
      'Handle very carefully — bruises easily',
      'Store away from ethylene-producing fruits',
      'Do not refrigerate below 10°C',
      'Harvest at right maturity for longer shelf life',
    ],
    warning: 'Very sensitive to cold injury — always store above 10°C.',
  },
  'ladys-finger': {
    temperature: '7–10°C', humidity: '90–95%', maxDays: 7,
    packaging: 'Perforated polythene bags or bamboo baskets',
    tips: [
      'Handle gently — tips blacken from bruising',
      'Store unwashed until ready to use or sell',
      'Best sold within 3–5 days of harvest',
      'Do not stack too many layers deep',
    ],
    warning: 'Very short shelf life — plan market trips within 5 days of harvest.',
  },
  'potato': {
    temperature: '4–10°C', humidity: '90–95%', maxDays: 120,
    packaging: 'Jute bags or wooden crates',
    tips: [
      'Store in dark place to prevent greening',
      'Cure for 10 days in warm area before cold storage',
      'Keep away from onions (causes faster sprouting)',
      'Inspect monthly and remove sprouted ones',
    ],
    warning: 'Green potatoes contain solanine — they are toxic. Discard them immediately.',
  },
  'cauliflower': {
    temperature: '0–1°C', humidity: '90–95%', maxDays: 21,
    packaging: 'Perforated bags in cold storage',
    tips: [
      'Keep outer leaves intact to protect the curd',
      'Store stem-down to prevent water accumulation',
      'Do not wash before storing',
      'Best sold fresh — do not delay marketing',
    ],
    warning: 'Browning of the white curd indicates poor storage conditions.',
  },
  'drumstick': {
    temperature: '10–13°C', humidity: '85–90%', maxDays: 21,
    packaging: 'Cloth or jute bags, open crates',
    tips: [
      'Keep in a cool, dry, ventilated place',
      'Can be dried for shelf life of several months',
      'Harvest pods when they are firm and green',
      'Avoid moisture contact — causes mold',
    ],
    warning: 'Yellowing pods rapidly lose market value and quality.',
  },
  'cabbage': {
    temperature: '0–1°C', humidity: '90–98%', maxDays: 60,
    packaging: 'Cold storage, root cellar, or cool room',
    tips: [
      'Keep outer leaves on during storage for protection',
      'Store away from strong-smelling produce',
      'Can last 1–2 weeks at room temperature',
      'Check regularly for pest damage',
    ],
    warning: 'Absorbs strong odors from nearby foods — always store isolated.',
  },
  'radish': {
    temperature: '0–1°C', humidity: '90–95%', maxDays: 30,
    packaging: 'Perforated bags in refrigerator or damp sand',
    tips: [
      'Remove tops (leaves) before storage — they drain moisture',
      'Store in damp sand in a cool place for long storage',
      'Best flavor when eaten fresh',
      'Do not store near apples or pears',
    ],
    warning: 'Leaving leaves attached causes rapid water loss from roots.',
  },
  'coriander': {
    temperature: '2–5°C', humidity: '90–95%', maxDays: 14,
    packaging: 'Damp cloth wrap or water jar',
    tips: [
      'Stand stems in a jar of water like flowers',
      'Cover loosely with a plastic bag and refrigerate',
      'Change water every 2 days',
      'Dry or freeze for shelf life of several months',
    ],
    warning: 'Wilts very fast at room temperature — refrigerate immediately after harvest.',
  },
  'mint': {
    temperature: '2–5°C', humidity: '90–95%', maxDays: 14,
    packaging: 'Damp cloth wrap or water jar',
    tips: [
      'Store stems in a water jar like coriander',
      'Can be dried and stored for 6+ months',
      'Freeze in ice cube trays with water for convenience',
      'Keep away from ethylene-producing fruits',
    ],
    warning: 'Airtight bags without ventilation cause very quick wilting and blackening.',
  },
  'beans': {
    temperature: '7–10°C', humidity: '90–95%', maxDays: 10,
    packaging: 'Perforated polythene bags',
    tips: [
      'Do not wash before refrigerating',
      'Store unwashed in a sealed bag in the fridge',
      'Blanch and freeze for shelf life up to 8 months',
      'Check for rust spots — remove affected beans quickly',
    ],
    warning: 'Chilling below 5°C causes rust-colored spots and damage.',
  },
  'carrot': {
    temperature: '0–1°C', humidity: '90–95%', maxDays: 60,
    packaging: 'Perforated bags or damp sand box',
    tips: [
      'Remove greens before storage — they draw out moisture from roots',
      'Store in damp sand in a cool, dark place',
      'Do not wash before storing',
      'Keep away from apples — ethylene gas makes carrots bitter',
    ],
    warning: 'Apples and pears emit ethylene gas that makes carrots bitter.',
  },
};

// ---- Daily Tips ----
const DAILY_TIPS = [
  'Sell vegetables early in the morning at the local mandi — fresh produce always gets better prices.',
  'Group with neighboring farmers to sell in bulk and get 10–20% higher prices from district markets.',
  'Sort your produce by size and quality before selling — Grade A vegetables fetch 30% more.',
  'Keep a simple record of your production costs and selling prices to understand profit each season.',
  'Clean, proper packaging using crates reduces vegetable damage by 40% during transport.',
  'Join a Farmer Producer Organisation (FPO) to access government schemes and better markets.',
  'Store root vegetables like potatoes and carrots in a cool, dark, dry place to extend shelf life.',
  'Online platforms can give you 40–60% higher prices than local mandi — consider direct selling.',
  'Always get a weighment slip from the mandi to ensure fair payment for your produce.',
  'Cooperative selling with 5 farmers can save ₹500–₹2,000 per trip in transport costs.',
];

// ---- App State ----
let selectedCropId = null;

// =====================================================
//  INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  initDashboard();
  initNavigation();
  renderCropsGrid();
  renderAllCropsTable();
  initCalculator();
  renderStorageRefGrid();
});

// ---- Dashboard ----
function initDashboard() {
  const now = new Date();

  // Date display
  const dateStr = now.toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  document.getElementById('heroDate').textContent = '📅 ' + dateStr;

  // Season (Indian agricultural calendar)
  const month = now.getMonth() + 1;
  let season;
  if (month >= 6 && month <= 9)       season = '🌧️ Kharif Season (June – September)';
  else if (month >= 10 && month <= 11) season = '🍂 Rabi Sowing Season (Oct – November)';
  else if (month >= 12 || month <= 3)  season = '❄️ Rabi Season (December – March)';
  else                                 season = '☀️ Zaid / Summer Season (April – May)';
  document.getElementById('heroSeason').textContent = season;

  // Random tip
  document.getElementById('tipText').textContent =
    DAILY_TIPS[Math.floor(Math.random() * DAILY_TIPS.length)];

  // Footer year
  document.getElementById('footerYear').textContent = now.getFullYear();
}

// =====================================================
//  NAVIGATION
// =====================================================
function initNavigation() {
  const btn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileNav.classList.toggle('open');
    btn.textContent = mobileNav.classList.contains('open') ? '✕' : '☰';
  });

  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && e.target !== btn) {
      mobileNav.classList.remove('open');
      btn.textContent = '☰';
    }
  });

  // All [data-section] buttons (nav tabs, quick actions, inline links)
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-section]');
    if (target) {
      e.preventDefault();
      navigateTo(target.dataset.section);
      mobileNav.classList.remove('open');
      btn.textContent = '☰';
    }
  });

  // Intersection observer for active tab highlight
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveTab(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach((s) => observer.observe(s));
}

function navigateTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(sectionId);
  }
}

function setActiveTab(sectionId) {
  document.querySelectorAll('.nav-tab, .mobile-nav-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.section === sectionId);
  });
}

// =====================================================
//  CROP SELECTION
// =====================================================
function renderCropsGrid() {
  const grid = document.getElementById('cropsGrid');
  const calcSelect = document.getElementById('calcCrop');

  grid.innerHTML = '';
  calcSelect.innerHTML = '<option value="">-- Select a Crop --</option>';

  CROPS.forEach((crop, i) => {
    const prices = MARKET_PRICES[crop.id];
    const bestPrice = Math.max(prices.local, prices.district, prices.online);

    const card = document.createElement('div');
    card.className = 'crop-card';
    card.dataset.cropId = crop.id;
    card.style.setProperty('--crop-accent', crop.accentColor);
    card.style.setProperty('--crop-bg', crop.bgColor);
    card.style.animationDelay = (i * 0.04) + 's';
    card.innerHTML = `
      <span class="selected-badge" style="display:none">✓ Selected</span>
      <span class="crop-emoji">${crop.emoji}</span>
      <div class="crop-name">${crop.name}</div>
      <div class="crop-desc">${crop.desc}</div>
      <div class="crop-price-badge">Best: ₹${bestPrice}/kg</div>
    `;
    card.addEventListener('click', () => selectCrop(crop.id));
    grid.appendChild(card);

    const opt = document.createElement('option');
    opt.value = crop.id;
    opt.textContent = crop.emoji + ' ' + crop.name;
    calcSelect.appendChild(opt);
  });
}

function selectCrop(cropId) {
  selectedCropId = cropId;
  const crop = CROPS.find((c) => c.id === cropId);

  // Highlight selected card
  document.querySelectorAll('.crop-card').forEach((card) => {
    const isSel = card.dataset.cropId === cropId;
    card.classList.toggle('selected', isSel);
    card.querySelector('.selected-badge').style.display = isSel ? 'block' : 'none';
  });

  // Show selection banner
  const banner = document.getElementById('selectedCropBanner');
  banner.style.display = 'flex';
  document.getElementById('selectedCropText').textContent =
    crop.emoji + ' ' + crop.name + ' selected — prices and storage guide updated below';

  // Update best price stat
  const prices = MARKET_PRICES[cropId];
  const best = Math.max(prices.local, prices.district, prices.online);
  document.getElementById('statBestPrice').textContent = '₹' + best + '/kg';

  // Sync calculator dropdown
  document.getElementById('calcCrop').value = cropId;

  // Update market and storage
  updateMarketSection(cropId);
  updateStorageSection(cropId);
  highlightTableRow(cropId);
}

// =====================================================
//  MARKET PRICES
// =====================================================
function renderAllCropsTable() {
  const table = document.getElementById('priceTableAll');
  table.innerHTML = `
    <thead>
      <tr>
        <th>Crop</th>
        <th>🏪 Local Mandi</th>
        <th>🏢 District Market</th>
        <th>💻 Online Platform</th>
        <th>⭐ Best Price</th>
      </tr>
    </thead>
    <tbody>
      ${CROPS.map((crop) => {
        const p = MARKET_PRICES[crop.id];
        const best = Math.max(p.local, p.district, p.online);
        const bestLabel = best === p.online ? 'Online' : best === p.district ? 'District' : 'Local';
        return `
          <tr data-crop-row="${crop.id}" onclick="selectCropFromTable('${crop.id}')" style="cursor:pointer">
            <td><div class="crop-cell"><span>${crop.emoji}</span><strong>${crop.name}</strong></div></td>
            <td>₹${p.local}</td>
            <td>₹${p.district}</td>
            <td>₹${p.online}</td>
            <td><span class="best-col">₹${best} <small>(${bestLabel})</small></span></td>
          </tr>
        `;
      }).join('')}
    </tbody>
  `;
}

function selectCropFromTable(cropId) {
  selectCrop(cropId);
  navigateTo('market');
}

function highlightTableRow(cropId) {
  document.querySelectorAll('[data-crop-row]').forEach((row) => {
    row.classList.toggle('selected-row', row.dataset.cropRow === cropId);
  });
}

function updateMarketSection(cropId) {
  const crop = CROPS.find((c) => c.id === cropId);
  const prices = MARKET_PRICES[cropId];

  document.getElementById('marketPrompt').style.display = 'none';
  document.getElementById('marketContent').style.display = 'block';

  // Crop header
  document.getElementById('marketCropHeader').innerHTML = `
    <span style="font-size:3rem;line-height:1">${crop.emoji}</span>
    <div>
      <div class="market-crop-name">${crop.name}</div>
      <div class="market-crop-sub">Sample prices per kilogram (₹) — Demonstration data only</div>
    </div>
  `;

  // Price cards
  const markets = [
    { key: 'local',    label: 'Local Mandi',      icon: '🏪' },
    { key: 'district', label: 'District Market',   icon: '🏢' },
    { key: 'online',   label: 'Online Platform',   icon: '💻' },
  ];
  const best = Math.max(prices.local, prices.district, prices.online);

  document.getElementById('priceCards').innerHTML = markets.map(({ key, label, icon }) => {
    const isBest = prices[key] === best;
    return `
      <div class="price-card ${isBest ? 'best-price' : ''}">
        ${isBest ? '<div class="best-label">⭐ Best Price</div>' : ''}
        <div class="price-mkt-icon">${icon}</div>
        <div class="price-mkt-name">${label}</div>
        <div class="price-amount">₹${prices[key]}</div>
        <div class="price-unit">per kg</div>
      </div>
    `;
  }).join('');

  // Bar chart (animate in)
  const maxVal = best * 1.15;
  document.getElementById('priceChart').innerHTML = markets.map(({ key, label, icon }) => {
    const pct = Math.round((prices[key] / maxVal) * 100);
    return `
      <div class="chart-row">
        <div class="chart-label">${icon} ${label}</div>
        <div class="chart-track">
          <div class="chart-bar chart-bar-${key}" data-target="${pct}" style="width:0%">
            <span class="chart-val">₹${prices[key]}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Animate bars after a short delay
  setTimeout(() => {
    document.querySelectorAll('.chart-bar[data-target]').forEach((bar) => {
      bar.style.width = bar.dataset.target + '%';
    });
  }, 80);
}

// =====================================================
//  PROFIT CALCULATOR
// =====================================================
function initCalculator() {
  document.getElementById('calculateBtn').addEventListener('click', calculateProfit);
  document.getElementById('resetCalcBtn').addEventListener('click', resetCalculator);
  document.getElementById('calcCrop').addEventListener('change', (e) => {
    if (e.target.value) selectCrop(e.target.value);
  });
}

function calculateProfit() {
  const cropId       = document.getElementById('calcCrop').value;
  const market       = document.getElementById('calcMarket').value;
  const qty          = parseFloat(document.getElementById('calcQty').value) || 0;
  const prodCost     = parseFloat(document.getElementById('calcProdCost').value) || 0;
  const transportRate= parseFloat(document.getElementById('calcTransportRate').value) || 0;
  const distance     = parseFloat(document.getElementById('calcDistance').value) || 0;
  const commPct      = parseFloat(document.getElementById('calcCommission').value) || 0;
  const packaging    = parseFloat(document.getElementById('calcPackaging').value) || 0;

  if (!cropId) { showCalcMsg('⚠️ Please select a crop first.', true); return; }
  if (qty <= 0) { showCalcMsg('⚠️ Please enter a valid quantity.', true); return; }

  const crop          = CROPS.find((c) => c.id === cropId);
  const pricePerKg    = MARKET_PRICES[cropId][market];
  const grossRevenue  = qty * pricePerKg;
  const transportCost = transportRate * distance * 2; // return trip
  const commissionAmt = (commPct / 100) * grossRevenue;
  const totalCosts    = prodCost + transportCost + commissionAmt + packaging;
  const netProfit     = grossRevenue - totalCosts;
  const isProfit      = netProfit >= 0;

  const marketLabels  = { local: 'Local Mandi', district: 'District Market', online: 'Online Platform' };

  document.getElementById('resultCropName').textContent =
    crop.emoji + ' ' + crop.name + ' — ' + qty + ' kg @ ' + marketLabels[market];

  document.getElementById('resultItems').innerHTML = `
    <div class="result-row"><span class="rl">📦 Quantity</span><span class="rv">${qty} kg</span></div>
    <div class="result-row"><span class="rl">💰 Selling Price</span><span class="rv">₹${pricePerKg}/kg</span></div>
    <div class="result-row highlight-row"><span class="rl">💵 Gross Revenue</span><span class="rv">₹${fmt(grossRevenue)}</span></div>
    <div class="result-row deduct"><span class="rl">🌱 Production Cost</span><span class="rv">− ₹${fmt(prodCost)}</span></div>
    <div class="result-row deduct"><span class="rl">🚛 Transport (${distance} km × 2)</span><span class="rv">− ₹${fmt(transportCost)}</span></div>
    <div class="result-row deduct"><span class="rl">🏪 Commission (${commPct}%)</span><span class="rv">− ₹${fmt(commissionAmt)}</span></div>
    <div class="result-row deduct"><span class="rl">📦 Packaging</span><span class="rv">− ₹${fmt(packaging)}</span></div>
    <div class="result-row subtotal"><span class="rl">💼 Total Costs</span><span class="rv">₹${fmt(totalCosts)}</span></div>
    <div class="result-row net-row ${isProfit ? 'profit' : 'loss'}">
      <span class="rl">${isProfit ? '🎉 Net Profit' : '⚠️ Net Loss'}</span>
      <span class="rv net-val">${isProfit ? '+' : ''}₹${fmt(netProfit)}</span>
    </div>
    <div class="result-note">
      ⚠️ Selling prices are sample demonstration data. Actual market rates may vary significantly.
    </div>
  `;
}

function showCalcMsg(msg, isError) {
  document.getElementById('resultItems').innerHTML = `
    <div class="result-placeholder" style="color:${isError ? 'var(--danger)' : 'var(--gray-400)'}">
      <span>${isError ? '⚠️' : '👆'}</span><p>${msg}</p>
    </div>
  `;
}

function resetCalculator() {
  ['calcQty', 'calcProdCost', 'calcTransportRate', 'calcDistance', 'calcCommission', 'calcPackaging'].forEach((id) => {
    const el = document.getElementById(id);
    const defaults = { calcQty: 100, calcProdCost: 500, calcTransportRate: 8, calcDistance: 15, calcCommission: 3, calcPackaging: 50 };
    el.value = defaults[id];
  });
  document.getElementById('calcCrop').value = '';
  document.getElementById('calcMarket').value = 'local';
  document.getElementById('resultCropName').textContent = 'No crop selected';
  showCalcMsg('Fill in the form and click "Calculate Profit" to see your earnings.', false);
}

function fmt(n) {
  return Math.round(n).toLocaleString('en-IN');
}

// =====================================================
//  STORAGE SECTION
// =====================================================
function updateStorageSection(cropId) {
  const crop = CROPS.find((c) => c.id === cropId);
  const data = STORAGE_DATA[cropId];

  document.getElementById('storagePrompt').style.display = 'none';
  document.getElementById('storageContent').style.display = 'block';

  document.getElementById('storageCropHeader').innerHTML = `
    <span style="font-size:3rem;line-height:1">${crop.emoji}</span>
    <div>
      <div style="font-family:var(--font-heading);font-size:1.5rem;font-weight:700;color:var(--warm-cream);margin-bottom:4px">
        ${crop.name} — Storage Guide
      </div>
      <div style="font-size:0.88rem;color:rgba(246,243,234,0.7)">
        How to store ${crop.name} properly to reduce losses and maintain quality
      </div>
    </div>
  `;

  document.getElementById('storageConditions').innerHTML = `
    <div class="cond-card"><span class="cond-icon">🌡️</span><div class="cond-label">Temperature</div><div class="cond-val">${data.temperature}</div></div>
    <div class="cond-card"><span class="cond-icon">💧</span><div class="cond-label">Humidity</div><div class="cond-val">${data.humidity}</div></div>
    <div class="cond-card"><span class="cond-icon">📅</span><div class="cond-label">Max Storage</div><div class="cond-val">${data.maxDays} days</div></div>
    <div class="cond-card"><span class="cond-icon">📦</span><div class="cond-label">Packaging</div><div class="cond-val">${data.packaging}</div></div>
  `;

  document.getElementById('storageTips').innerHTML = `
    <div class="tips-title">✅ Storage Tips for ${crop.name}</div>
    <ul class="tips-list">
      ${data.tips.map((t) => `<li class="tip-item"><span class="tip-check">✓</span><span>${t}</span></li>`).join('')}
    </ul>
  `;

  document.getElementById('storageWarning').innerHTML = `
    <span class="warn-icon">🚨</span>
    <div><strong>Important Warning:</strong> ${data.warning}</div>
  `;
}

function renderStorageRefGrid() {
  document.getElementById('storageRefGrid').innerHTML = CROPS.map((crop) => {
    const d = STORAGE_DATA[crop.id];
    return `
      <div class="ref-card" onclick="jumpToStorage('${crop.id}')" title="View ${crop.name} storage guide">
        <div class="ref-header">
          <span class="ref-emoji">${crop.emoji}</span>
          <span class="ref-name">${crop.name}</span>
        </div>
        <div class="ref-days">📅 Up to ${d.maxDays} days</div>
        <div class="ref-temp">🌡️ ${d.temperature}</div>
      </div>
    `;
  }).join('');
}

function jumpToStorage(cropId) {
  selectCrop(cropId);
  navigateTo('storage');
}
