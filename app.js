/* ==========================================================================
   YEMEKGELMEZ APPLICATION LOGIC (app.js)
   ========================================================================== */

// --- 1. MOCK DATA (Restoranlar & Yemekler) ---
const RESTORANS = [
  {
    id: "res-1",
    name: "Kurye Kaçıran Adana Kebapçısı",
    category: "kebap",
    rating: "4.9",
    time: "2-3 sn",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60",
    color: "#ff7e21",
    tagline: "Dürümün İçindeki Dopamini Hissedin!",
    menu: [
      { id: "item-101", name: "İrade Sınayan Adana Dürüm", desc: "Zırh kıyması, sumaklı soğan, közlenmiş biber ve iradenizi zorlayacak enfes lavaş.", price: 240, kcal: 780 },
      { id: "item-102", name: "Dopamin Dolu Urfa Kebap", desc: "Acısız ama cüzdanı acıtmayan, yumuşacık zırh kebabı.", price: 245, kcal: 750 },
      { id: "item-103", name: "Kozmik Çıtır Lahmacun", desc: "İncecik, gevrek, yeşillik ve limon eşliğinde sıfır kalori hayaliyle dolu 1 adet lahmacun.", price: 80, kcal: 320 },
      { id: "item-104", name: "Tasarruflu Duble Künefe", desc: "Hatay usulü, bol peynirli ve şerbetli. Yemediğinizde ₺180 ve 950 kcal kâr ettirir.", price: 180, kcal: 950 }
    ]
  },
  {
    id: "res-2",
    name: "Dopamin Dev Burger Sarayı",
    category: "burger",
    rating: "4.8",
    time: "3-4 sn",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
    color: "#e040fb",
    tagline: "Double Cheddar, Sıfır Teslimat!",
    menu: [
      { id: "item-201", name: "Kriz Önleyen Double Cheddar Burger", desc: "2 adet 120gr dana köfte, karamelize soğan, bol cheddar peyniri ve özel dopamin sos.", price: 290, kcal: 1100 },
      { id: "item-202", name: "Çıtır İrade Tavuk Burger", desc: "Panelenmiş çıtır tavuk göğsü, marul, mayonez ve pürüzsüz burger ekmeği.", price: 210, kcal: 850 },
      { id: "item-203", name: "Cüzdan Dostu Patates Kızartması", desc: "Kova dolusu altın sarısı patates kızartması. Ketçap ve mayonezle birlikte.", price: 95, kcal: 450 },
      { id: "item-204", name: "Frenleyici Sufle", desc: "İçi akışkan çikolatalı sıcak kek. Yemediğinizde mideniz bayram edecek.", price: 110, kcal: 520 }
    ]
  },
  {
    id: "res-3",
    name: "Moda Gevrek Pizzacısı",
    category: "pizza",
    rating: "4.7",
    time: "2-4 sn",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60",
    color: "#2979ff",
    tagline: "Hamuru İnce, İradesi Kalın!",
    menu: [
      { id: "item-301", name: "Can Çektiren Karışık Pizza (Orta)", desc: "Sucuk, sosis, mısır, zeytin, mantar ve bol erimiş mozarella peyniri.", price: 280, kcal: 1250 },
      { id: "item-302", name: "İtalyan İradesi Margherita Pizza", desc: "Özel domates sosu, taze fesleğen, mozarella peyniri ve zeytinyağı dokunuşu.", price: 220, kcal: 980 },
      { id: "item-303", name: "Sarımsaklı İrade Ekmeği", desc: "Fırınlanmış sarımsaklı tereyağlı çıtır ekmek dilimleri.", price: 85, kcal: 350 }
    ]
  },
  {
    id: "res-4",
    name: "Dönerci Efsane Dayı",
    category: "doner",
    rating: "4.9",
    time: "1-2 sn",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=60",
    color: "#00e676",
    tagline: "Yaprak Yaprak İrade Gücü!",
    menu: [
      { id: "item-401", name: "Hatay Usulü Bol Soslu Tavuk Dürüm", desc: "Özel Hatay soslu, sarımsaklı mayonezli patatesli tavuk döner dürüm.", price: 140, kcal: 650 },
      { id: "item-402", name: "Efsane Tombik Et Döner", desc: "Tombik ekmek arasında 100gr yaprak et döner, domates, marul ve turşu.", price: 230, kcal: 710 },
      { id: "item-403", name: "İrade Deposu İskender Döner", desc: "Pide üzerine yaprak et döner, tereyağı, domates sosu ve yoğurt.", price: 310, kcal: 980 }
    ]
  },
  {
    id: "res-5",
    name: "Çıtır Çıtır Tavuk Kovası",
    category: "tavuk",
    rating: "4.6",
    time: "3-5 sn",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=500&auto=format&fit=crop&q=60",
    color: "#ff3d00",
    tagline: "Altın Sarısı Çıtırlık, Sıfır Kalori!",
    menu: [
      { id: "item-501", name: "İrade Sınayıcı Mega Kova", desc: "8 adet çıtır kemiksiz tavuk, 6 adet çıtır kanat, patates kızartması ve soslar.", price: 330, kcal: 1550 },
      { id: "item-502", name: "Çıtır Tavuk Fileto Menü", desc: "5 adet panelenmiş çıtır tavuk göğsü filetosu, patates ve içecek (sahte).", price: 195, kcal: 820 }
    ]
  },
  {
    id: "res-6",
    name: "Şerbetli Rüya Tatlıları",
    category: "tatli",
    rating: "4.8",
    time: "2-3 sn",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60",
    color: "#00b0ff",
    tagline: "Şerbeti Bol, Suçluluğu Sıfır!",
    menu: [
      { id: "item-601", name: "Havuç Dilim Baklava (Dondurmalı)", desc: "2 adet çıtır havuç dilim baklava, arasında Maraş dondurması ile.", price: 190, kcal: 850 },
      { id: "item-602", name: "Antep Fıstıklı Çıtır Künefe", desc: "Sıcak, uzayan peyniri, bol Antep fıstığı ve tereyağlı çıtır kadayıf.", price: 175, kcal: 920 },
      { id: "item-603", name: "Cüzdan Kurtaran Çikolatalı Waffle", desc: "Mevsim meyveleri, bol çikolata sosu ve Antep fıstıklı waffle.", price: 160, kcal: 780 }
    ]
  }
];

// --- 2. STATE ---
let state = {
  cart: [],
  currentScreen: "splash",
  activeRestaurant: null,
  activeCategory: "all",
  couponApplied: null,
  userAddress: {
    title: "Ev",
    text: "Caferağa Mah. Moda Cad. No:1923, Kadıköy / İstanbul"
  },
  totals: {
    subtotal: 0,
    delivery: 35,
    service: 15,
    discount: 0,
    total: 50,
    kcal: 0
  },
  stats: {
    totalMoneySaved: 0,
    totalCaloriesSaved: 0,
    totalTimeSaved: 0,
    streak: 0,
    history: []
  }
};

// --- 3. WEB AUDIO API SOUND GENERATOR ---
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
let engineOscillator = null;
let engineGain = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// 3.1 Click Sound Effect
function playClickSound() {
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } catch (e) {
    console.log("Audio play blocked or unsupported:", e);
  }
}

// 3.2 Add to Cart Sound Effect (Double Beep)
function playAddCartSound() {
  try {
    initAudio();
    const now = audioCtx.currentTime;
    
    // First beep
    let osc1 = audioCtx.createOscillator();
    let gain1 = audioCtx.createGain();
    osc1.frequency.setValueAtTime(523.25, now); // C5
    gain1.gain.setValueAtTime(0.08, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.start(now);
    osc1.stop(now + 0.08);
    
    // Second beep
    let osc2 = audioCtx.createOscillator();
    let gain2 = audioCtx.createGain();
    osc2.frequency.setValueAtTime(659.25, now + 0.08); // E5
    gain2.gain.setValueAtTime(0.08, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.2);
  } catch (e) {
    console.log("Audio play blocked or unsupported:", e);
  }
}

// 3.3 Success sound (Arpeggio Chime)
function playVictoryChime() {
  try {
    initAudio();
    const now = audioCtx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C major chord arpeggio
    
    notes.forEach((freq, index) => {
      const time = now + index * 0.08;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, time);
      
      gain.gain.setValueAtTime(0.06, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.6);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start(time);
      osc.stop(time + 0.6);
    });
  } catch (e) {
    console.log(e);
  }
}

// 3.4 Motorcycle Engine Sound Synthesis (Low frequency rumble)
function startEngineSound() {
  try {
    initAudio();
    if (engineOscillator) return;
    
    engineOscillator = audioCtx.createOscillator();
    engineGain = audioCtx.createGain();
    
    engineOscillator.type = "sawtooth";
    // Start with a low rumble (idle engine)
    engineOscillator.frequency.setValueAtTime(45, audioCtx.currentTime); 
    
    engineGain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    
    // Low pass filter to make it sound like an engine inside a helmet / neighborhood hum
    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(180, audioCtx.currentTime);
    
    engineOscillator.connect(filter);
    filter.connect(engineGain);
    engineGain.connect(audioCtx.destination);
    
    engineOscillator.start();
  } catch (e) {
    console.log("Audio engine start failed:", e);
  }
}

function stopEngineSound() {
  try {
    if (engineOscillator) {
      engineOscillator.stop();
      engineOscillator.disconnect();
      engineOscillator = null;
    }
    if (engineGain) {
      engineGain.disconnect();
      engineGain = null;
    }
  } catch (e) {
    console.log(e);
  }
}

// Rev the engine based on speed/time
function adjustEnginePitch(freqVal) {
  try {
    if (engineOscillator && audioCtx) {
      engineOscillator.frequency.linearRampToValueAtTime(freqVal, audioCtx.currentTime + 0.2);
    }
  } catch (e) {
    console.log(e);
  }
}


// --- 4. VIEW ROUTER (SPA navigation) ---
function navigateTo(screenId) {
  playClickSound();
  
  // Hide all screens
  document.querySelectorAll(".app-screen").forEach(screen => {
    screen.classList.remove("active");
  });
  
  // Show target screen
  const targetScreen = document.getElementById(`screen-${screenId}`);
  if (targetScreen) {
    targetScreen.classList.add("active");
    state.currentScreen = screenId;
    
    // Screen specific initializers
    if (screenId === "home") {
      renderRestaurants();
    } else if (screenId === "history") {
      renderHistoryScreen();
    } else if (screenId === "splash") {
      updateSplashStats();
    }
    
    // Update bottom cart bar visibility on every screen change
    updateBottomCartBar();
  }
}

// Update counters on Splash Screen with simulated and saved values
function updateSplashStats() {
  // Base simulated counter + user's saved totals
  const baseSavedMoney = 142850 + state.stats.totalMoneySaved;
  const baseSavedCalories = 980450 + state.stats.totalCaloriesSaved;
  
  document.getElementById("global-money-saved").textContent = `₺${baseSavedMoney.toLocaleString("tr-TR")}`;
  document.getElementById("global-calories-saved").textContent = `${Math.round(baseSavedCalories / 1000)}K kcal`;
}


// --- 5. DATA RENDERING ---

// 5.1 Render Restaurants on Home Screen
function renderRestaurants(filter = "all", searchQuery = "") {
  const container = document.getElementById("restaurants-container");
  container.innerHTML = "";
  
  let list = RESTORANS;
  
  // Filter by category
  if (filter !== "all") {
    list = list.filter(r => r.category === filter);
  }
  
  // Filter by search query
  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();
    list = list.filter(r => 
      r.name.toLowerCase().includes(query) || 
      r.tagline.toLowerCase().includes(query) ||
      r.menu.some(item => item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query))
    );
  }
  
  document.getElementById("restaurant-count").textContent = `${list.length} Restoran Listeleniyor`;
  
  if (list.length === 0) {
    container.innerHTML = `
      <div class="text-center" style="padding: 40px var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass-minus" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 8px;"></i>
        <p>Aramanızla eşleşen esprili restoran bulunamadı.</p>
      </div>
    `;
    return;
  }
  
  list.forEach(res => {
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.innerHTML = `
      <div class="res-card-image" style="background-image: url('${res.image}')">
        <div class="res-card-overlay"></div>
        <span class="res-card-badge">₺0 Teslimat</span>
      </div>
      <div class="res-card-body">
        <div class="res-card-info">
          <h4>${res.name}</h4>
          <span class="res-card-tags">${res.tagline}</span>
        </div>
        <div class="res-card-stats">
          <span class="res-rating"><i class="fa-solid fa-star"></i> ${res.rating}</span>
          <span class="res-time"><i class="fa-solid fa-clock"></i> ${res.time}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openRestaurantDetail(res));
    container.appendChild(card);
  });
}

// 5.2 Open Restaurant Detail Screen
function openRestaurantDetail(restaurant) {
  state.activeRestaurant = restaurant;
  
  // Set meta details
  document.getElementById("res-detail-name").textContent = restaurant.name;
  document.getElementById("res-detail-tagline").textContent = restaurant.tagline;
  document.getElementById("res-detail-rating").textContent = restaurant.rating;
  document.getElementById("res-detail-time").textContent = restaurant.time;
  
  // Set hero background image
  document.getElementById("res-detail-hero-bg").style.backgroundImage = `url('${restaurant.image}')`;
  
  // Render Menu Items
  const menuContainer = document.getElementById("menu-items-container");
  menuContainer.innerHTML = "";
  
  restaurant.menu.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-item-card";
    card.innerHTML = `
      <div class="menu-item-details">
        <h4>${item.name}</h4>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-item-meta">
          <span class="menu-item-kcal"><i class="fa-solid fa-fire-flame-simple"></i> ${item.kcal} kcal</span>
          <span class="menu-item-price">₺${item.price.toFixed(2)}</span>
        </div>
      </div>
      <div class="menu-item-action">
        <button class="btn-add-cart" data-item-id="${item.id}">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    `;
    
    // Add event listener for adding to cart
    card.querySelector(".btn-add-cart").addEventListener("click", (e) => {
      e.stopPropagation();
      addItemToCart(item, restaurant.name);
    });
    
    menuContainer.appendChild(card);
  });
  
  navigateTo("restaurant-detail");
}


// --- 6. CART MANAGEMENT ---

// 6.1 Add Item to Cart
function addItemToCart(item, restaurantName) {
  // If cart has items from another restaurant, confirm reset (or just auto-reset for simplicity in dopamine app)
  if (state.cart.length > 0 && state.cart[0].restaurantName !== restaurantName) {
    state.cart = [];
    state.couponApplied = null;
    showToast("Farklı restorana geçildi, sepet temizlendi.");
  }
  
  const existing = state.cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      kcal: item.kcal,
      quantity: 1,
      restaurantName: restaurantName
    });
  }
  
  playAddCartSound();
  calculateTotals();
  updateBottomCartBar();
  showToast(`${item.name} sepete eklendi!`);
}

// 6.2 Update Item Quantity
function changeQuantity(itemId, change) {
  const item = state.cart.find(i => i.id === itemId);
  if (!item) return;
  
  item.quantity += change;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== itemId);
  }
  
  // Simple sound
  playClickSound();
  
  calculateTotals();
  updateBottomCartBar();
  renderCartDrawerItems();
  
  if (state.cart.length === 0) {
    closeCartDrawer();
  }
}

// 6.3 Calculate Totals
function calculateTotals() {
  let subtotal = 0;
  let kcal = 0;
  
  state.cart.forEach(item => {
    subtotal += item.price * item.quantity;
    kcal += item.kcal * item.quantity;
  });
  
  state.totals.subtotal = subtotal;
  state.totals.kcal = kcal;
  
  // Calculate discount
  if (state.couponApplied) {
    if (state.couponApplied.type === "percent") {
      state.totals.discount = subtotal * (state.couponApplied.value / 100);
    } else if (state.couponApplied.type === "fixed") {
      state.totals.discount = Math.min(subtotal, state.couponApplied.value);
    }
  } else {
    state.totals.discount = 0;
  }
  
  // Delivery & Service Fees
  if (state.cart.length > 0) {
    state.totals.delivery = 35;
    state.totals.service = 15;
    state.totals.total = state.totals.subtotal + state.totals.delivery + state.totals.service - state.totals.discount;
  } else {
    state.totals.delivery = 0;
    state.totals.service = 0;
    state.totals.total = 0;
  }
}

// 6.4 Update Bottom Bar UI
function updateBottomCartBar() {
  const bar = document.getElementById("bottom-cart-bar");
  
  if (state.cart.length > 0 && (state.currentScreen === "home" || state.currentScreen === "restaurant-detail")) {
    bar.classList.add("active");
    
    // Update badge & totals
    let totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-badge-count").textContent = totalItems;
    document.getElementById("cart-bar-total").textContent = `₺${state.totals.total.toFixed(2)}`;
    document.getElementById("cart-bar-calories").textContent = `${state.totals.kcal} kcal`;
  } else {
    bar.classList.remove("active");
  }
}

// 6.5 Render Cart Drawer Items
function renderCartDrawerItems() {
  const container = document.getElementById("drawer-items-container");
  container.innerHTML = "";
  
  state.cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "drawer-item";
    row.innerHTML = `
      <div class="dr-item-info">
        <span class="dr-item-name">${item.name}</span>
        <div class="dr-item-meta">
          <span class="dr-item-kcal">${item.kcal * item.quantity} kcal</span>
        </div>
      </div>
      <div class="dr-item-controls">
        <button class="quantity-btn dec-btn" data-item-id="${item.id}"><i class="fa-solid fa-minus"></i></button>
        <span class="quantity-val">${item.quantity}</span>
        <button class="quantity-btn inc-btn" data-item-id="${item.id}"><i class="fa-solid fa-plus"></i></button>
      </div>
      <span class="dr-item-price">₺${(item.price * item.quantity).toFixed(2)}</span>
    `;
    
    // Add Event Listeners for quantity change
    row.querySelector(".dec-btn").addEventListener("click", () => changeQuantity(item.id, -1));
    row.querySelector(".inc-btn").addEventListener("click", () => changeQuantity(item.id, 1));
    
    container.appendChild(row);
  });
  
  // Render Price Breakdown
  document.getElementById("price-subtotal").textContent = `₺${state.totals.subtotal.toFixed(2)}`;
  document.getElementById("price-delivery").textContent = `₺${state.totals.delivery.toFixed(2)}`;
  document.getElementById("price-service").textContent = `₺${state.totals.service.toFixed(2)}`;
  
  // Discount Row
  const discountRow = document.getElementById("price-discount-row");
  if (state.totals.discount > 0) {
    discountRow.style.display = "flex";
    document.getElementById("price-discount").textContent = `-₺${state.totals.discount.toFixed(2)}`;
  } else {
    discountRow.style.display = "none";
  }
  
  document.getElementById("price-total").textContent = `₺${state.totals.total.toFixed(2)}`;
  document.getElementById("price-kcal").textContent = `${state.totals.kcal} kcal`;
}

// 6.6 Open / Close Drawer
const cartDialog = document.getElementById("cart-dialog");

function openCartDrawer() {
  initAudio();
  calculateTotals();
  renderCartDrawerItems();
  cartDialog.showModal();
}

function closeCartDrawer() {
  cartDialog.close();
}


// --- 7. COUPON LOGIC ---
function applyCoupon() {
  const input = document.getElementById("coupon-code-input");
  const code = input.value.trim().toUpperCase();
  const message = document.getElementById("coupon-message");
  
  if (state.cart.length === 0) {
    message.className = "coupon-msg error";
    message.textContent = "Önce sepeti doldurmalısın!";
    return;
  }
  
  if (code === "DOPAMIN50") {
    state.couponApplied = { code: "DOPAMIN50", type: "percent", value: 50 };
    message.className = "coupon-msg success";
    message.textContent = "Kupon uygulandı! Sepet tutarına %50 irade indirimi yapıldı.";
  } else if (code === "BEDAVA" || code === "YALANCI" || code === "BEDAVAYEMEK") {
    state.couponApplied = { code: code, type: "percent", value: 100 };
    message.className = "coupon-msg success";
    message.textContent = "Tebrikler! Sipariş tutarı tamamen sıfırlandı. (Gerçekte de sıfır!)";
  } else {
    message.className = "coupon-msg error";
    message.textContent = "Geçersiz veya süresi dolmuş sahte kupon kodu!";
    state.couponApplied = null;
  }
  
  playClickSound();
  calculateTotals();
  renderCartDrawerItems();
}


// --- 8. CHECKOUT SCREEN ---
function loadCheckoutScreen() {
  closeCartDrawer();
  navigateTo("checkout");
  
  // Render Summary
  const container = document.getElementById("checkout-items-container");
  container.innerHTML = "";
  
  state.cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "checkout-item-row";
    row.innerHTML = `
      <div>
        <span class="checkout-item-qty">${item.quantity}x</span>
        <span class="checkout-item-name">${item.name}</span>
      </div>
      <span class="checkout-item-val">₺${(item.price * item.quantity).toFixed(2)}</span>
    `;
    container.appendChild(row);
  });
  
  // Set old total and savings
  document.getElementById("checkout-old-total").textContent = `₺${(state.totals.subtotal + state.totals.delivery + state.totals.service).toFixed(2)}`;
  document.getElementById("checkout-savings-money").textContent = `₺${(state.totals.subtotal + state.totals.delivery + state.totals.service).toFixed(2)}`;
  document.getElementById("checkout-savings-calories").textContent = `${state.totals.kcal} kcal`;
}


// --- 9. RIDER TRACKING SIMULATION ---
// --- 9. RIDER TRACKING SIMULATION ---
const ROUTES = [
  "M 80 85 C 20 85, 20 20, 80 20", // Left loop (Classic)
  "M 80 85 C 40 70, 95 50, 80 20", // S-Curve
  "M 80 85 C 95 75, 95 30, 80 20", // Right loop
  "M 80 85 C 10 70, 50 40, 80 20", // Left-cut-in curve
  "M 80 85 C 30 90, 60 10, 80 20"  // Diagonal loop
];
let lastRouteIndex = -1;

const MESSAGES_POOL = {
  kitchen: [
    "[Şef Osman]: Usta köfteleri ızgaraya attım, cızırdıyorlar. Yalnız kokusunu buraya gönderebilseydik iraden hemen kırılırdı, şanslısın! 😉",
    "[Restoran Mutfak]: Siparişiniz hazırlanıyor. Hamuru o kadar ince açtık ki arkasından cüzdanınızdaki paralar görünüyor (hâlâ yerindeler!).",
    "[Lahmacuncu Nuri]: Fırın alev alev usta. Lahmacunları fırına attım. Yalnız bu kokuya kurye Ahmet bile dayanamayabilir, benden söylemesi.",
    "[Burger Ustası]: Sosu o kadar bol döktüm ki cheddar peyniri patateslerle dans ediyor. Kurye yolda dökmeden getirse bari (gerçi gelmeyecek ama olsun!).",
    "[Tatlı Ustası Süleyman]: Şerbeti tam kıvamında döktüm, Antep fıstıklarını üzerine boca ettim. Yemediğin her saniye için miden sana minnettar!"
  ],
  pickup: [
    "Kurye Ahmet: Paketi kaptım usta! Sıcak tutan çantaya attım, motoru tek marşta çalıştırdım. Jet hızıyla geliyorum!",
    "Kurye Ahmet: Selam usta, kuryen Ahmet ben. Paketi aldım kucağıma, yalnız tavuklar acayip çıtır duruyor. Yolda bir kaza çıkmaz umarım, gazlıyorum!",
    "Kurye Ahmet: Sipariş bende usta. Kaskı taktım, aynaları ayarladım. Kadıköy sokakları benden sorulur, uçuşa geçiyorum!",
    "Kurye Ahmet: Usta paketi teslim aldım. Sıcak çantamın fermuarını çektim. Navigasyonu açtım, rota çizildi. Yoldayım!"
  ],
  on_the_way: [
    "Kurye Ahmet: Abi önümde bir belediye otobüsü var, arkasına rüzgar tüneli yaptım 70'le gidiyorum, yakıt tasarrufu! Cüzdan tasarrufuna tam destek.",
    "Kurye Ahmet: Trafik kilit usta ama kaldırımlardan kaldırımlara atlıyorum, kurye dediysek boşuna demedik! Sıcak sıcak kapındayım.",
    "Kurye Ahmet: Abi yolda tatlı bir kedi gördüm, patateslerden bir tane vereyim dedim ama vazgeçtim, iradeni koruyorum! Yola devam.",
    "Kurye Ahmet: Abi ara sokaklardan yardırıyorum. Önüme çıkan tüm kırmızı ışıkları irademle yeşile çevirdim diyebiliriz, az kaldı!"
  ],
  near_arrival: [
    "Kurye Ahmet: Apartmanın önüne yanaştım abi. Asansörün düğmesine bastım, yukarı çıkıyorum. Yalnız asansörde kokuyu duyan komşu 'Ne sipariş ettin?' dedi, söylemedim gizli bilgi.",
    "Kurye Ahmet: Abi kapının önündeyim. Yalnız zili çalmadan önce son kez pakete baktım... Double Cheeseburger resmen bana göz kırpıyor, bir ısırık alsam ruhun duymazdı ama neyse usta.",
    "Kurye Ahmet: Abi kapıya geldim, paspasın üzerine motoru park ettim (şaka şaka kapıdayım). Zile basıyorum.",
    "Kurye Ahmet: Binanın kapısından girdim usta. Merdivenleri ikişer ikişer çıkıyorum, spor olsun. Kapının önüne kadar geldim."
  ],
  climax: [
    "Kurye Ahmet: Ve kapıyı çalıyorum... ŞAKA YAPTIM! Kardeşim, bu bir dopamin sitesi. Tabii ki yemek falan gelmiyor! Ama tebrikler; can çekmesini, para harcamayı ve o gereksiz kaloriyi yenmiş oldun! Cüzdanındaki nakit yerinde duruyor. 🌟",
    "Kurye Ahmet: Kapıyı tık tık vuruyorum... Yalnız kapıyı açınca eline sadece boş hava geçecek! Çünkü bu bir dopamin simülasyonu. Yemeği sipariş etmedin ama iradeni taçlandırdın. Helal olsun! 🌟",
    "Kurye Ahmet: Kapının zilini çalıyorum... DING DONG! Ama o da ne? Karşında kurye yerine boşluk var! Çünkü bu bir irade testidir ve sen bu testi başarıyla geçtin. Miden ve cüzdanın sana teşekkür ediyor! 🌟"
  ]
};

let trackingInterval = null;
let chatTimeout0 = null;
let chatTimeout1 = null;
let chatTimeout2 = null;

function startRiderTracking() {
  navigateTo("rider-tracking");
  
  // Select a random route and set it on the SVG path
  let routeIndex = Math.floor(Math.random() * ROUTES.length);
  if (routeIndex === lastRouteIndex && ROUTES.length > 1) {
    routeIndex = (routeIndex + 1) % ROUTES.length;
  }
  lastRouteIndex = routeIndex;
  
  const path = document.getElementById("route-path");
  path.setAttribute("d", ROUTES[routeIndex]);
  
  // Reset UI elements
  document.getElementById("rider-sub").textContent = "Siparişiniz kurye tarafından alındı.";
  document.getElementById("tracking-timer").textContent = "Hazırlanıyor";
  
  const chatContainer = document.getElementById("chat-messages-container");
  chatContainer.innerHTML = "";
  
  // Reset steppers
  document.querySelectorAll(".step").forEach(s => {
    s.className = "step";
  });
  document.getElementById("step-1").classList.add("active");
  
  // Reset Rider Icon Position on Path
  const riderBike = document.getElementById("map-rider-bike");
  const pathLength = path.getTotalLength();
  
  riderBike.style.top = "85%";
  riderBike.style.left = "80%";
  
  // Start engine audio
  startEngineSound();
  adjustEnginePitch(45); // Idle hum
  
  // Add initial chat messages
  addChatBubble("system", "Siparişinizi başarıyla oluşturuldu! (Ödenen: ₺0,00)");
  
  // Select random messages
  const randKitchen = MESSAGES_POOL.kitchen[Math.floor(Math.random() * MESSAGES_POOL.kitchen.length)];
  const randPickup = MESSAGES_POOL.pickup[Math.floor(Math.random() * MESSAGES_POOL.pickup.length)];
  const randOnWay = MESSAGES_POOL.on_the_way[Math.floor(Math.random() * MESSAGES_POOL.on_the_way.length)];
  const randNear = MESSAGES_POOL.near_arrival[Math.floor(Math.random() * MESSAGES_POOL.near_arrival.length)];
  
  // Mutfak Hazırlık Mesajı (t=1.5s)
  chatTimeout0 = setTimeout(() => {
    addChatBubble("rider", randKitchen);
    document.getElementById("step-1").className = "step completed";
    document.getElementById("step-2").className = "step active";
    document.getElementById("rider-sub").textContent = "Sipariş mutfakta hazırlanıyor...";
  }, 1500);
  
  // Kurye Alım Mesajı (t=4.5s)
  chatTimeout1 = setTimeout(() => {
    addChatBubble("rider", randPickup);
    document.getElementById("rider-sub").textContent = "Paket hazırlandı, kurye teslim aldı.";
    adjustEnginePitch(60); // Revving up
  }, 4500);

  // Yolculuk Simülasyon Başlangıcı (t=7.5s)
  chatTimeout2 = setTimeout(() => {
    addChatBubble("system", "Kurye Ahmet siparişinizi teslim aldı ve yola çıktı!");
    document.getElementById("step-2").className = "step completed";
    document.getElementById("step-3").className = "step active";
    document.getElementById("rider-sub").textContent = "Kurye Ahmet yolda!";
    document.getElementById("tracking-timer").textContent = "5 dk";
    adjustEnginePitch(90); // High frequency engine sound
    
    // Start bike movement simulation
    let movementTimer = 0;
    trackingInterval = setInterval(() => {
      movementTimer += 0.5; // Every 100ms increases progress
      const percent = movementTimer / 100; // 100 steps total
      
      if (percent >= 1) {
        clearInterval(trackingInterval);
        arriveRider();
      } else {
        // Find coordinate on SVG route path
        const dist = percent * pathLength;
        const point = path.getPointAtLength(dist);
        
        // Update bike coordinate
        riderBike.style.left = `${point.x}%`;
        riderBike.style.top = `${point.y}%`;
        
        // Rev motor pitch slightly back and forth to simulate gear shifts
        let revFreq = 80 + Math.sin(movementTimer * 0.5) * 15;
        adjustEnginePitch(revFreq);
        
        // Dynamically update minutes left
        if (percent > 0.8) {
          document.getElementById("tracking-timer").textContent = "1 dk";
        } else if (percent > 0.5) {
          document.getElementById("tracking-timer").textContent = "2 dk";
        } else if (percent > 0.2) {
          document.getElementById("tracking-timer").textContent = "3 dk";
        }
        
        // Mid-way funny courier chat message (at 35%)
        if (movementTimer === 35) {
          addChatBubble("rider", randOnWay);
        }
        
        // Near-arrival funny courier chat message (at 70%)
        if (movementTimer === 70) {
          addChatBubble("rider", randNear);
        }
      }
    }, 100);
    
  }, 7500);
}

// When Rider Arrives
function arriveRider() {
  stopEngineSound();
  document.getElementById("step-3").className = "step completed";
  document.getElementById("step-4").className = "step active";
  document.getElementById("rider-sub").textContent = "Kurye kapıda!";
  document.getElementById("tracking-timer").textContent = "Geldik!";
  
  addChatBubble("system", "Kurye Ahmet kapıda zili çalıyor!");
  
  // Select random climax message
  const randClimax = MESSAGES_POOL.climax[Math.floor(Math.random() * MESSAGES_POOL.climax.length)];
  
  setTimeout(() => {
    addChatBubble("rider", randClimax);
  }, 2000);

  setTimeout(() => {
    addChatBubble("system", "Sipariş sanal olarak teslim edildi! İrade Zaferiniz kaydediliyor...");
  }, 5000);

  setTimeout(() => {
    saveOrderToStats();
  }, 7500);
}

// Add Chat Bubble Helper
function addChatBubble(sender, text) {
  const container = document.getElementById("chat-messages-container");
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;
  bubble.textContent = text;
  container.appendChild(bubble);
  
  // Scroll to bottom of chat
  container.scrollTop = container.scrollHeight;
}


// --- 10. VICTORY SCREEN & LOCAL STORAGE ---

// 10.1 Save Simulated Order details
function saveOrderToStats() {
  const savedAmt = state.totals.subtotal + state.totals.delivery + state.totals.service;
  const savedKcal = state.totals.kcal;
  const savedTime = Math.round(savedAmt / 10) + 15; // Simulated time saved based on size of order
  
  // Update stats state
  state.stats.totalMoneySaved += savedAmt;
  state.stats.totalCaloriesSaved += savedKcal;
  state.stats.totalTimeSaved += savedTime;
  
  // Calculate streak (simulated increment if last victory was recent)
  state.stats.streak = (state.stats.streak || 0) + 1;
  
  // Add to history list
  const newOrder = {
    id: "ord-" + Date.now(),
    date: new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }),
    restaurantName: state.cart[0].restaurantName,
    savedMoney: savedAmt,
    savedCalories: savedKcal,
    savedTime: savedTime,
    items: state.cart.map(i => `${i.quantity}x ${i.name}`)
  };
  
  state.stats.history.unshift(newOrder);
  
  // Save to LocalStorage
  localStorage.setItem("yemek_gelmez_stats", JSON.stringify(state.stats));
  
  // Reset Cart
  state.cart = [];
  state.couponApplied = null;
  
  // Set values on Victory Screen
  document.getElementById("vic-money-saved").textContent = `₺${savedAmt.toFixed(2)}`;
  document.getElementById("vic-calories-saved").textContent = `${savedKcal} kcal`;
  document.getElementById("vic-time-saved").textContent = `${savedTime} dk`;
  
  // Dynamic Victory Quotes
  const quotes = [
    "Bugünkü can çekmesi, yarının gurur kaynağıdır. Gerçek dopamin, harcayarak değil iradene sahip çıkarak kazanılır.",
    "Büyük irade! Hazır yemek sipariş etmenin sahte mutluluğunu yendin, cüzdanına ve sağlığına büyük bir hediye verdin.",
    "Harikasın! Canın çekti ama sipariş butonunu zekice manipüle ettin. Şimdi cüzdanın daha dolu, kalbin daha hafif.",
    "Bir anlık heves yerine uzun vadeli tasarrufu seçtin. Midene, cüzdanına ve zihnine teşekkür et!"
  ];
  document.getElementById("victory-quote").textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  
  // Play Victory Sound & Navigate
  playVictoryChime();
  navigateTo("victory");
  startConfettiAnimation();
}

// 10.2 Simple Canvas/DOM Confetti Generator
function startConfettiAnimation() {
  const holder = document.getElementById("confetti-holder");
  holder.innerHTML = "";
  
  const colors = ["#ff7e21", "#00e676", "#2979ff", "#e040fb", "#ffeb3b", "#ff1744"];
  const count = 75;
  
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.style.position = "absolute";
    piece.style.width = `${Math.random() * 8 + 6}px`;
    piece.style.height = `${Math.random() * 12 + 6}px`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `-20px`;
    piece.style.opacity = Math.random();
    piece.style.borderRadius = "2px";
    piece.style.zIndex = "2";
    
    // Random rotation
    const rotation = Math.random() * 360;
    piece.style.transform = `rotate(${rotation}deg)`;
    
    // Dynamic fall animations with random durations & delays
    piece.style.animation = `fall ${Math.random() * 2 + 2}s linear ${Math.random() * 1}s infinite`;
    
    holder.appendChild(piece);
  }
}

// Dynamic Confetti Fall Animation injected as inline style
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fall {
    0% { top: -20px; transform: rotate(0deg) translateX(0px); }
    50% { transform: rotate(180deg) translateX(10px); }
    100% { top: 100%; transform: rotate(360deg) translateX(-10px); opacity: 0; }
  }
`;
document.head.appendChild(styleSheet);


// --- 11. HISTORY & STATS VIEW ---
function loadStatsFromLocalStorage() {
  const saved = localStorage.getItem("yemek_gelmez_stats");
  if (saved) {
    state.stats = JSON.parse(saved);
  } else {
    // Initial stats
    state.stats = {
      totalMoneySaved: 0,
      totalCaloriesSaved: 0,
      totalTimeSaved: 0,
      streak: 0,
      history: []
    };
  }
  
  // Load Address
  const savedAddress = localStorage.getItem("yemek_gelmez_address");
  if (savedAddress) {
    state.userAddress = JSON.parse(savedAddress);
  }
  updateAddressUI();
}

// --- 11.2 ADDRESS MANAGEMENT ---
function updateAddressUI() {
  const title = state.userAddress.title;
  const text = state.userAddress.text;
  
  // Header
  const headerTitle = document.getElementById("header-address-title");
  const headerText = document.getElementById("header-address-text");
  if (headerTitle) headerTitle.textContent = title;
  if (headerText) headerText.textContent = text;
  
  // Checkout
  const checkTitle = document.getElementById("checkout-address-title");
  const checkText = document.getElementById("checkout-address-text");
  if (checkTitle) checkTitle.textContent = title;
  if (checkText) checkText.textContent = text;
  
  // Tracking
  const trackTitle = document.getElementById("tracking-address-title");
  if (trackTitle) trackTitle.textContent = title;
}

function openAddressDialog() {
  const dialog = document.getElementById("address-dialog");
  document.getElementById("address-title-input").value = state.userAddress.title;
  document.getElementById("address-text-input").value = state.userAddress.text;
  dialog.showModal();
}

function saveAddress() {
  const titleInput = document.getElementById("address-title-input").value.trim();
  const textInput = document.getElementById("address-text-input").value.trim();
  
  if (!titleInput || !textInput) {
    showToast("Lütfen tüm alanları doldurun!");
    return;
  }
  
  state.userAddress.title = titleInput;
  state.userAddress.text = textInput;
  
  localStorage.setItem("yemek_gelmez_address", JSON.stringify(state.userAddress));
  updateAddressUI();
  
  document.getElementById("address-dialog").close();
  showToast("Adres kaydedildi!");
  playClickSound();
}

function renderHistoryScreen() {
  // Update totals
  document.getElementById("total-saved-money").textContent = `₺${state.stats.totalMoneySaved.toFixed(2)}`;
  document.getElementById("total-saved-calories").textContent = `${state.stats.totalCaloriesSaved} kcal`;
  document.getElementById("total-saved-time").textContent = `${state.stats.totalTimeSaved} dk`;
  document.getElementById("irade-streak").textContent = `${state.stats.streak} Gün`;
  
  const container = document.getElementById("history-items-container");
  const emptyView = document.getElementById("empty-history-view");
  
  // Remove past item rows
  document.querySelectorAll(".history-item-card").forEach(c => c.remove());
  
  if (state.stats.history.length === 0) {
    emptyView.style.display = "flex";
  } else {
    emptyView.style.display = "none";
    
    state.stats.history.forEach(item => {
      const card = document.createElement("div");
      card.className = "history-item-card";
      card.innerHTML = `
        <div class="hist-meta">
          <span class="hist-name">${item.restaurantName}</span>
          <span class="hist-date">${item.date}</span>
        </div>
        <div class="hist-savings">
          <span class="hist-saved-val">+₺${item.savedMoney.toFixed(2)}</span>
          <span class="hist-saved-kcal">${item.savedCalories} kcal</span>
        </div>
      `;
      container.appendChild(card);
    });
  }
}

function resetAllStats() {
  if (confirm("Tüm irade zaferleriniz ve tasarruf istatistikleriniz sıfırlanacak. Emin misiniz?")) {
    state.stats = {
      totalMoneySaved: 0,
      totalCaloriesSaved: 0,
      totalTimeSaved: 0,
      streak: 0,
      history: []
    };
    localStorage.removeItem("yemek_gelmez_stats");
    renderHistoryScreen();
    showToast("İstatistikler sıfırlandı!");
    playClickSound();
  }
}


// --- 12. UTILITY TOAST ---
let toastTimeout = null;
function showToast(text) {
  const toast = document.getElementById("toast-message");
  const toastText = document.getElementById("toast-text");
  
  toastText.textContent = text;
  toast.classList.add("active");
  
  if (toastTimeout) clearTimeout(toastTimeout);
  
  toastTimeout = setTimeout(() => {
    toast.classList.remove("active");
  }, 2500);
}

// Share text generator (Tweets the result)
function shareVictory() {
  const savedAmt = state.stats.history[0]?.savedMoney || 0;
  const savedKcal = state.stats.history[0]?.savedCalories || 0;
  const resName = state.stats.history[0]?.restaurantName || "Sanal Sipariş";
  
  const shareText = `Canım ${resName} yemek istedi ama ben zekice davranıp https://yemekgelmez.netlify.app/ ile sahte sipariş verdim! 🛵 Cüzdanımda ₺${savedAmt.toFixed(2)} nakit ve vücudumda ${savedKcal} kalori kazancım var. İrade gücü kazandı! 🌟 Sen de sipariş vermemek için dene!`;
  
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  window.open(twitterUrl, '_blank');
  showToast("Twitter'a yönlendiriliyorsunuz...");
}


// --- 13. EVENT LISTENERS INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Load Stats
  loadStatsFromLocalStorage();
  updateSplashStats();
  
  // Set real-time clock in simulated status bar
  const clock = document.querySelector(".status-time");
  if (clock) {
    const updateClock = () => {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
    };
    updateClock();
    setInterval(updateClock, 30000);
  }
  
  // Navigation
  document.getElementById("btn-start-order").addEventListener("click", () => navigateTo("home"));
  document.getElementById("btn-back-to-home").addEventListener("click", () => navigateTo("home"));
  document.getElementById("btn-back-to-res").addEventListener("click", () => {
    if (state.activeRestaurant) openRestaurantDetail(state.activeRestaurant);
  });
  
  // History Screens navigation
  document.getElementById("btn-open-history-welcome").addEventListener("click", () => navigateTo("history"));
  document.getElementById("btn-header-history").addEventListener("click", () => navigateTo("history"));
  document.getElementById("btn-victory-history").addEventListener("click", () => navigateTo("history"));
  document.getElementById("btn-history-back").addEventListener("click", () => {
    if (state.cart.length > 0) {
      navigateTo("home");
    } else {
      navigateTo("splash");
    }
  });
  document.getElementById("btn-victory-home").addEventListener("click", () => navigateTo("splash"));
  
  // Reset stats
  document.getElementById("btn-history-reset").addEventListener("click", resetAllStats);
  
  // Cart Dialog Toggle
  document.getElementById("btn-open-cart").addEventListener("click", openCartDrawer);
  document.getElementById("btn-close-cart").addEventListener("click", closeCartDrawer);
  
  // Coupon
  document.getElementById("btn-apply-coupon").addEventListener("click", applyCoupon);
  
  // Search
  document.getElementById("search-input").addEventListener("input", (e) => {
    renderRestaurants(state.activeCategory, e.target.value);
  });
  
  // Category Selection
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      const target = e.currentTarget;
      target.classList.add("active");
      
      const cat = target.dataset.category;
      state.activeCategory = cat;
      
      playClickSound();
      renderRestaurants(cat, document.getElementById("search-input").value);
    });
  });
  
  // Checkout
  document.getElementById("btn-go-to-checkout").addEventListener("click", loadCheckoutScreen);
  document.getElementById("btn-place-order").addEventListener("click", () => {
    // Stop timers just in case
    clearTimeout(chatTimeout0);
    clearTimeout(chatTimeout1);
    clearTimeout(chatTimeout2);
    clearInterval(trackingInterval);
    
    startRiderTracking();
  });
  
  // Share
  document.getElementById("btn-victory-share").addEventListener("click", shareVictory);
  
  // Address Edit triggers
  document.getElementById("btn-edit-address-header").addEventListener("click", openAddressDialog);
  document.getElementById("btn-edit-address-checkout").addEventListener("click", openAddressDialog);
  document.getElementById("btn-close-address").addEventListener("click", () => document.getElementById("address-dialog").close());
  document.getElementById("btn-save-address").addEventListener("click", saveAddress);
  
  // Cleanup audio when tab is out of focus
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopEngineSound();
    }
  });

  // PWA Service Worker Registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('YemekGelmez PWA Servis Çalışanı başarıyla kaydedildi!', reg))
      .catch(err => console.error('Servis Çalışanı kaydı başarısız:', err));
  }
});
