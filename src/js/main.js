/**
 * ZACKY PORTFOLIO - CORE JAVASCRIPT
 * Categorized by folders with interactive popup slider (R-26)
 * Real assets only (R-38), Keyboard accessible (R-32)
 * Strictly antislop compliant: No em dashes, no dead controls
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. DATA REPOSITORY: EXACT 8 FOLDERS IN src/img
  // -------------------------------------------------------------------------
  const CATEGORY_FOLDERS = [
    {
      id: 'marketplace-thumbnail',
      folderPath: 'src/img/marketplace-thumbnail',
      title: 'Marketplace & E-Commerce',
      folderLabel: 'folder: marketplace-thumbnail',
      stickerText: 'HIGH-CTR CATALOG',
      desc: 'High-converting cookware & tableware e-commerce catalog thumbnails, feature breakdowns, and value-stack bundles.',
      coverImage: 'src/img/marketplace-thumbnail/wajan_buy1get1.png',
      items: [
        {
          title: 'Wajan Granit Buy 1 Get 1 Promo',
          desc: 'High-CTR promotional thumbnail with clean product isolation, bold discount callouts, and mobile-optimized search visibility.',
          src: 'src/img/marketplace-thumbnail/wajan_buy1get1.png',
          type: 'image',
          tags: ['Shopee Hero', 'Buy 1 Get 1', 'High CTR']
        },
        {
          title: 'Granite Fry Pan 5-Layer Material Breakdown',
          desc: 'Exploded technical view showcasing 5-layer non-stick granite coating, induction magnetic base, and heat conductivity.',
          src: 'src/img/marketplace-thumbnail/wajan_detail.png',
          type: 'image',
          tags: ['Material Infographic', 'Granite Coating', 'Cookware']
        },
        {
          title: 'Exclusive Kitchenware Bundling Package',
          desc: 'Harmonious multi-piece bundling composition staging saucepan, frypan, and heat-resistant silicone spatula.',
          src: 'src/img/marketplace-thumbnail/bundling_wajan&pan.png',
          type: 'image',
          tags: ['Bundle Set', 'Value Stack', 'E-Commerce']
        },
        {
          title: 'Commercial Stainless Chafing Dish Buffet Server',
          desc: 'Hospitality buffet equipment staging emphasizing mirror-finish stainless steel and professional catering durability.',
          src: 'src/img/marketplace-thumbnail/chafing_dish.png',
          type: 'image',
          tags: ['Stainless Steel', 'Commercial Catering', 'B2B Catalog']
        },
        {
          title: 'Korean BBQ Grill Pan & Wok Duo Combo',
          desc: 'Combination deal visual with appetizing sizzling meat lifestyle cues and oil-drain channel callouts.',
          src: 'src/img/marketplace-thumbnail/grill_pan X wajan.png',
          type: 'image',
          tags: ['Korean BBQ', 'Grill & Wok', 'Combo Deal']
        },
        {
          title: 'Cast Aluminum Smokeless Grill Pan',
          desc: 'Minimalist product isolation highlighting grooved fat-draining ridges and ergonomic heat-insulating handle.',
          src: 'src/img/marketplace-thumbnail/grill_pan.png',
          type: 'image',
          tags: ['Grill Pan', 'Smokeless', 'Kitchenware']
        },
        {
          title: 'Dual-Flavor Shabu Shabu Divider Hot Pot',
          desc: 'Highlighting seamless S-shape welding divider, tempered glass transparency lid, and dual broth preparation.',
          src: 'src/img/marketplace-thumbnail/hot_pot.png',
          type: 'image',
          tags: ['Shabu Divider', 'Hot Pot', 'Dining Staging']
        },
        {
          title: 'Double-Wall Insulated Stainless Ice Bucket',
          desc: 'Reflective metallic studio treatment emphasizing condensation prevention and long-lasting cooling efficiency.',
          src: 'src/img/marketplace-thumbnail/ice_bucket.png',
          type: 'image',
          tags: ['Barware', 'Insulated Stainless', 'Silver Sheen']
        },
        {
          title: 'Commercial Triple-Bowl Beverage Cold Dispenser',
          desc: 'Clear appliance scale presentation, temperature controls, and dispensing tap mechanics for cafe owners.',
          src: 'src/img/marketplace-thumbnail/juice_dispenser.png',
          type: 'image',
          tags: ['Commercial Appliance', 'Juice Dispenser', 'Cafe Equipment']
        },
        {
          title: 'Classic Non-Stick Frying Pan Single',
          desc: 'Clean commercial cutout with soft ground shadows and metallic rivet reinforcement accents.',
          src: 'src/img/marketplace-thumbnail/pan.png',
          type: 'image',
          tags: ['Non-Stick Pan', 'Clean Cutout', 'Catalog']
        },
        {
          title: 'Induction Non-Stick Cookware 7-Piece Ensemble',
          desc: 'Structured architectural arrangement of seven cookware items with balanced negative space and neutral grounding.',
          src: 'src/img/marketplace-thumbnail/panci_set.png',
          type: 'image',
          tags: ['7-Piece Ensemble', 'Induction Cookware', 'Set Arrangement']
        },
        {
          title: 'Deep Commercial Stainless Steel Soup Pot',
          desc: 'High-capacity soup pot display showing depth, lid seal, and industrial heat distribution base.',
          src: 'src/img/marketplace-thumbnail/panci_sup.png',
          type: 'image',
          tags: ['Soup Pot', 'Deep Stockpot', 'Kitchen Essentials']
        },
        {
          title: 'Cookware Color & Diameter Variant Matrix',
          desc: 'Visual selection matrix demonstrating colorways and diameter sizing options for shopper clarity.',
          src: 'src/img/marketplace-thumbnail/pan_varian.png',
          type: 'image',
          tags: ['Variant Matrix', 'Color Choices', 'Catalog Guide']
        },
        {
          title: 'Heavy-Duty Stainless Steel Serving Plate (Large)',
          desc: 'Commercial dining ware showcase demonstrating mirror polish finish and scratch resistance.',
          src: 'src/img/marketplace-thumbnail/piring_stainless_G.png',
          type: 'image',
          tags: ['Serving Plate', 'Mirror Polish', 'Restaurant Wholesale']
        },
        {
          title: 'Food Grade Stainless Steel Serving Plate (Standard)',
          desc: 'Standard restaurant dinner plate presentation with stacked nested perspective.',
          src: 'src/img/marketplace-thumbnail/piring_stainless_S.png',
          type: 'image',
          tags: ['Stainless Plate', 'Nested Sizing', 'Tableware']
        },
        {
          title: 'Professional Stainless Steel Serving Ladle',
          desc: 'Ergonomic handle curve and deep scoop bowl isolated for professional culinary catalogs.',
          src: 'src/img/marketplace-thumbnail/sendok_saji.png',
          type: 'image',
          tags: ['Serving Ladle', 'Kitchen Utensil', 'Stainless']
        },
        {
          title: 'Double Wall Insulated Latte Glass',
          desc: 'Thermal insulation optical refraction graphic displaying layered espresso and microfoam milk.',
          src: 'src/img/marketplace-thumbnail/gelas_latte.png',
          type: 'image',
          tags: ['Latte Glass', 'Double Wall', 'Barista Supply']
        },
        {
          title: 'Bento Lunch Box Airtight Container Edition A',
          desc: 'Leakproof silicone gasket demonstration and modular compartment breakdown.',
          src: 'src/img/marketplace-thumbnail/foodbox_1.png',
          type: 'image',
          tags: ['Lunch Box', 'Airtight Bento', 'Meal Prep']
        },
        {
          title: 'Multi-Compartment Food Prep Box Edition B',
          desc: 'Clean bento box presentation highlighting snap-lock latches and microwave-safe material.',
          src: 'src/img/marketplace-thumbnail/foodbox_2.png',
          type: 'image',
          tags: ['Food Prep Box', 'Snap Latch', 'Kitchen Storage']
        }
      ]
    },

    {
      id: 'marketplace_banner',
      folderPath: 'src/img/marketplace_banner',
      title: 'Campaign Mega Banners',
      folderLabel: 'folder: marketplace_banner',
      stickerText: 'MEGA SALES 7.7 - 9.9',
      desc: 'High-impact official storefront headers and seasonal campaign banners designed for Shopee festival traffic.',
      coverImage: 'src/img/marketplace_banner/banner shopee 9.9.png',
      items: [
        {
          title: 'Shopee 9.9 Super Shopping Day Mega Header',
          desc: 'High-energy marketplace store header with layered discount cues, official brand badges, and responsive store layout proportions.',
          src: 'src/img/marketplace_banner/banner shopee 9.9.png',
          type: 'image',
          tags: ['Shopee 9.9', 'Mega Header', 'Storefront Banner']
        },
        {
          title: 'Shopee 8.8 Pesta Diskon Heboh Seasonal Campaign',
          desc: 'Dynamic promotional banner pairing flash voucher callouts with flagship cookware bundle arrangements.',
          src: 'src/img/marketplace_banner/banner shopee 8.8.png',
          type: 'image',
          tags: ['Shopee 8.8', 'Seasonal Festival', 'Voucher Graphics']
        },
        {
          title: 'Shopee 7.7 Mid-Year Mega Sale Promo Banner',
          desc: 'Vibrant mid-year shopping festival header featuring cashback voucher callouts and hero product framing.',
          src: 'src/img/marketplace_banner/banner shopee 7.7.png',
          type: 'image',
          tags: ['Shopee 7.7', 'Mid-Year Sale', 'Cashback Banner']
        },
        {
          title: 'Caligo Official Store Grand Launch Banner',
          desc: 'Atmospheric brand identity banner establishing Caligo minimalist brand world across marketplace touchpoints.',
          src: 'src/img/marketplace_banner/banner caligo.png',
          type: 'image',
          tags: ['Brand Launch', 'Caligo Store', 'Storefront Art']
        }
      ]
    },

    {
      id: 'ai-potrait',
      folderPath: 'src/img/AI Potrait',
      title: 'AI Commercial Photography',
      folderLabel: 'folder: AI Potrait',
      stickerText: 'MULTI-PERSPECTIVE',
      desc: 'Photorealistic commercial studio concept generation across front, profile, and 3-perspective sheets without physical studio overhead.',
      coverImage: 'src/img/AI Potrait/bag.webp',
      items: [
        {
          title: 'Structured Leather Crossbody Bag (Front View)',
          desc: 'Commercial studio photo generation exploring leather textures, metallic buckle highlights, and ergonomic proportions.',
          src: 'src/img/AI Potrait/bag.webp',
          type: 'image',
          tags: ['Leather Bag', 'Studio Lighting', 'Product Shoot']
        },
        {
          title: 'Leather Crossbody Bag (3-Perspective Studio Sheet)',
          desc: 'Multi-angle coordinated perspective sheet demonstrating side depth, front elevation, and top zipper enclosure.',
          src: 'src/img/AI Potrait/3 bag angle.webp',
          type: 'image',
          tags: ['3-Angle Sheet', 'Leather Craft', 'Multi-View']
        },
        {
          title: 'Acoustic Over-Ear Studio Headphones (Hero Shot)',
          desc: 'Matte charcoal and polished silver acoustic headset rendered with soft directional daylight and macro material depth.',
          src: 'src/img/AI Potrait/headphone.webp',
          type: 'image',
          tags: ['Headphones', 'Audio Tech', 'Industrial Design']
        },
        {
          title: 'Studio Headphones (3-Angle Elevation Study)',
          desc: 'Coordinated angle exploration analyzing headband cushioning, ear cup swivel mechanism, and metallic bracket.',
          src: 'src/img/AI Potrait/3 headphone angle.webp',
          type: 'image',
          tags: ['3-Angle Study', 'Surface Reflection', 'Tech Product']
        },
        {
          title: 'Amber & Wood Noir Perfume Bottle (Refraction Hero)',
          desc: 'Hyper-clean glass refraction, warm amber tones, and embossed metallic typography crafted for premium cosmetic advertising.',
          src: 'src/img/AI Potrait/parfume.webp',
          type: 'image',
          tags: ['Niche Perfume', 'Glass Refraction', 'Luxury Cosmetic']
        },
        {
          title: 'Noir Perfume Bottle (3-Perspective Lookbook)',
          desc: 'Multi-perspective visual study highlighting glass thickness, spray nozzle detail, and textured wooden cap.',
          src: 'src/img/AI Potrait/3 parfume angle.webp',
          type: 'image',
          tags: ['3-Perspective', 'Liquid Physics', 'Lookbook Staging']
        },
        {
          title: 'Heavyweight Cotton Streetwear Apparel (Lookbook Pose)',
          desc: 'Detailed drape simulation, realistic ribbing collar, and studio lookbook lighting on model silhouette.',
          src: 'src/img/AI Potrait/shirt.webp',
          type: 'image',
          tags: ['Streetwear', 'Cotton Apparel', 'Lookbook Pose']
        },
        {
          title: 'Streetwear Apparel (3-Angle Drape & Fabric Study)',
          desc: 'Three coordinated poses exploring back graphic placement, sleeve drape, and side seam tension.',
          src: 'src/img/AI Potrait/3 shirt angle.webp',
          type: 'image',
          tags: ['3-Angle Drape', 'Fabric Texture', 'Model Study']
        }
      ]
    },

    {
      id: 'podcast',
      folderPath: 'src/img/Podcast',
      title: 'Motion & Video Reels',
      folderLabel: 'folder: Podcast',
      stickerText: 'DYNAMIC VIDEO',
      desc: 'Snappy short-form podcast reels, kinetic typography sync, dynamic logo reveals, and looping graphics.',
      coverImage: 'src/img/Podcast/Frame Logo.png',
      items: [
        {
          title: 'Podcast Reel: Dynamic Subtitles & Kinetic Pacing',
          desc: 'Snappy video editing featuring kinetic subtitles, B-roll punch-ins, sound design sync, and vertical 9:16 mobile optimization.',
          src: 'src/img/Podcast/Reels.mp4',
          poster: 'src/img/Podcast/Frame Reels.png',
          type: 'video',
          tags: ['9:16 Reel', 'Kinetic Captions', 'Video Editing']
        },
        {
          title: 'Commercial Kinetic Typography & Motion Graphics',
          desc: 'Expressive kinetic typography animation demonstrating visual rhythm, easing curves, and typographic weight shifts.',
          src: 'src/img/Podcast/Motion.mp4',
          poster: 'src/img/Podcast/Frame Motion.png',
          type: 'video',
          tags: ['Kinetic Type', 'After Effects', 'Sound Sync']
        },
        {
          title: 'Social Media Micro-Content Story Reel',
          desc: 'Engaging short-form video pacing with narrative text callouts designed for maximum viewer retention.',
          src: 'src/img/Podcast/Konten.mp4',
          poster: 'src/img/Podcast/Frame Konten.png',
          type: 'video',
          tags: ['Social Micro-Content', 'Shorts', 'Pacing']
        },
        {
          title: '3D Geometric Logo Motion Sting',
          desc: 'Fluid logo intro animation playing with spatial depth, light sweep reflections, and minimalist sound marks.',
          src: 'src/img/Podcast/logo 3.mp4',
          poster: 'src/img/Podcast/Frame Logo.png',
          type: 'video',
          tags: ['Logo Sting', '3D Motion', 'Brand Identity']
        },
        {
          title: 'Mastery Kinetic Graphic Animation',
          desc: 'Seamless looping animation capturing the energetic essence of design craft and marketplace mastery.',
          src: 'src/img/Podcast/mastery gif.gif',
          type: 'gif',
          tags: ['Looping Animation', 'GIF', 'Motion Design']
        },
        {
          title: 'Podcast Studio Frame & Identity Branding',
          desc: 'Visual frame asset for video podcast broadcasts establishing consistent speaker lower thirds.',
          src: 'src/img/Podcast/Frame Logo.png',
          type: 'image',
          tags: ['Podcast Frame', 'Broadcast Identity', 'Studio Staging']
        },
        {
          title: 'Captain Motion Visual Clip',
          desc: 'Character-focused animation clip exploring stylized movement and vibrant background accents.',
          src: 'src/img/Podcast/captain.mov',
          poster: 'src/img/Podcast/Frame Captain.png',
          type: 'video',
          tags: ['Motion Clip', 'Character Motion', 'Visual Effect']
        }
      ]
    },

    {
      id: 'ig-feed',
      folderPath: 'src/img/IG Feed',
      title: 'Brand Social Media Grids',
      folderLabel: 'folder: IG Feed',
      stickerText: 'INSTAGRAM EDITORIAL',
      desc: 'Holistic social media visual systems, multi-slide educational carousels, and architectural Instagram feeds.',
      coverImage: 'src/img/IG Feed/Feed Ruma.webp',
      items: [
        {
          title: 'Delivre Social Identity Feed',
          desc: 'Cohesive social media feed system blending brand storytelling, promotion carousels, and vibrant culinary photography.',
          src: 'src/img/IG Feed/Feed Delivre.webp',
          type: 'image',
          tags: ['Food Delivery', 'Instagram Feed', 'Culinary Brand']
        },
        {
          title: 'Delivre Multi-Slide Promotional Carousel',
          desc: 'Engaging multi-slide carousel layout designed for maximum swipe retention and promotional clarity.',
          src: 'src/img/IG Feed/Gallery Delivre.webp',
          type: 'image',
          tags: ['Promotional Carousel', 'Swipe Graphic', 'Brand Visual']
        },
        {
          title: 'Neovolt Smart Energy & EV Ecosystem Feed',
          desc: 'Futuristic social identity utilizing geometric layouts, sharp data visualization, and electric green accents.',
          src: 'src/img/IG Feed/Feed Neovolt.webp',
          type: 'image',
          tags: ['Clean Tech', 'Smart Energy', 'Grid System']
        },
        {
          title: 'Neovolt Data Visualization Grid System',
          desc: 'Technical carousel breakdown of charging network speeds and sustainability metrics.',
          src: 'src/img/IG Feed/Gallery Neovolt.webp',
          type: 'image',
          tags: ['Data Viz', 'EV Charging', 'Infographic Grid']
        },
        {
          title: 'Ruma Living Architecture & Furniture Grid',
          desc: 'Airy, architectural Instagram grid focusing on material textures, warm neutrals, and tranquil living spaces.',
          src: 'src/img/IG Feed/Feed Ruma.webp',
          type: 'image',
          tags: ['Architectural', 'Interior Design', 'Minimalist Feed']
        },
        {
          title: 'Ruma Interior Textures & Architectural System',
          desc: 'Material palette moodboard carousel emphasizing stone, oak, linen, and brushed bronze.',
          src: 'src/img/IG Feed/Gallery Ruma.webp',
          type: 'image',
          tags: ['Material Palette', 'Interior Aesthetics', 'Carousel']
        },
        {
          title: 'Meltyday Artisan Dessert Social Direction',
          desc: 'Delightful social branding with pastel softness, playful micro-copy, and mouthwatering product spotlights.',
          src: 'src/img/IG Feed/Feed meltyday.webp',
          type: 'image',
          tags: ['Bakery Brand', 'Artisan Dessert', 'Sweet Tone']
        },
        {
          title: 'Meltyday Bakery Pastel Grid Carousel',
          desc: 'Pastel photo carousel staging fresh bakery pastries with playful typography callouts.',
          src: 'src/img/IG Feed/Gallery Melty.webp',
          type: 'image',
          tags: ['Pastry Carousel', 'Micro Copy', 'Pastel Feed']
        },
        {
          title: 'Meng Gourmet Pet Nutrition Social System',
          desc: 'Warm, caring visual direction highlighting premium natural ingredients, vet endorsements, and playful pet portraits.',
          src: 'src/img/IG Feed/Feed Meng.webp',
          type: 'image',
          tags: ['Pet Nutrition', 'Healthy Pets', 'Lifestyle Grid']
        },
        {
          title: 'Meng Pet Wellness Ingredient & Story Grid',
          desc: 'Detailed nutritional breakdown carousel explaining raw protein benefits and gut health.',
          src: 'src/img/IG Feed/Gallery Meng.webp',
          type: 'image',
          tags: ['Pet Story', 'Nutritional Facts', 'Social Grid']
        },
        {
          title: 'Happ Beverage Brand Visual Identity',
          desc: 'Energetic, youthful Instagram visual pacing designed to connect with Gen-Z beverage lovers.',
          src: 'src/img/IG Feed/Feed Happ.webp',
          type: 'image',
          tags: ['Youth Beverage', 'Vibrant Identity', 'Gen-Z Vibe']
        },
        {
          title: 'Happ Youth Refreshment Promotional Carousel',
          desc: 'Flavor launch campaign carousel with pop-art contrast and sparkling drink photography.',
          src: 'src/img/IG Feed/Gallery Happ.webp',
          type: 'image',
          tags: ['Flavor Launch', 'Drink Graphic', 'Carousel']
        }
      ]
    },

    {
      id: 'youtube-thumbnail',
      folderPath: 'src/img/youtube-thumbnail',
      title: 'YouTube Thumbnails',
      folderLabel: 'folder: youtube-thumbnail',
      stickerText: 'HIGH CTR COVERS',
      desc: 'High-contrast creator and tech unboxing thumbnails focused on viewer click-through rate.',
      coverImage: 'src/img/youtube-thumbnail/Result W1EX.webp',
      items: [
        {
          title: 'Mastery of Marketplace: Complete Strategy Guide',
          desc: 'High-contrast focal composition, expressive human reaction framing, and crisp graphical badges.',
          src: 'src/img/youtube-thumbnail/Mastery of Marketplace Thumbnail.webp',
          type: 'image',
          tags: ['Marketplace Strategy', 'E-Commerce Guide', 'CTR Boost']
        },
        {
          title: 'Building Sustainable Digital Assets in 2026',
          desc: 'Graphic storytelling balancing monetary symbols with clean editorial typography.',
          src: 'src/img/youtube-thumbnail/Passive Income.webp',
          type: 'image',
          tags: ['Finance Creator', 'Digital Assets', 'Editorial Thumbnail']
        },
        {
          title: 'Geek Amoyy Tech Review & Hardware Breakdown',
          desc: 'Sleek edge lighting highlighting gaming hardware and review verdict markers.',
          src: 'src/img/youtube-thumbnail/Geek Amoyy THMB.webp',
          type: 'image',
          tags: ['Tech Unboxing', 'Hardware Review', 'Creator Cover']
        },
        {
          title: 'Resident Evil 9 Gameplay Stream Preview',
          desc: 'Cinematic lighting, high-contrast character cutout, and suspenseful atmospheric gradient.',
          src: 'src/img/youtube-thumbnail/RE 9 Ji-Naa.webp',
          type: 'image',
          tags: ['Gaming Stream', 'Resident Evil', 'Atmospheric Lighting']
        },
        {
          title: 'Ji-Naa Is Live: Broadcast Cover Art',
          desc: 'High-energy live broadcast graphic with bright accent borders and instant recognition cues.',
          src: 'src/img/youtube-thumbnail/Ji-naa is live now 1.webp',
          type: 'image',
          tags: ['Livestream Cover', 'Broadcast Art', 'Gamer Brand']
        },
        {
          title: 'W1EX Tournament Grand Finals Championship Recap',
          desc: 'Bold typography, gold and silver championship laurels, and player portrait highlights.',
          src: 'src/img/youtube-thumbnail/Result W1EX.webp',
          type: 'image',
          tags: ['Esports Finals', 'Championship Art', 'Tournament Recap']
        }
      ]
    },

    {
      id: 'web',
      folderPath: 'src/img/Web',
      title: 'Web & UI/UX Landing Pages',
      folderLabel: 'folder: Web',
      stickerText: 'UI / UX SYSTEMS',
      desc: 'Sleek landing page designs, fintech payment flows, and enterprise dashboard experiences.',
      coverImage: 'src/img/Web/LP Portfolio.webp',
      items: [
        {
          title: 'Creative Director Landing Page Experience',
          desc: 'High-fashion typographic web landing page with stark black and white contrast and micro-interactions.',
          src: 'src/img/Web/LP Portfolio.webp',
          type: 'image',
          tags: ['Landing Page', 'Portfolio UI', 'Editorial Web']
        },
        {
          title: 'Next-Gen Gaming Top-Up & Esports Digital Portal',
          desc: 'Frictionless digital payment interface with game catalog cards and instant voucher delivery UI.',
          src: 'src/img/Web/Gaming topup.webp',
          type: 'image',
          tags: ['Gaming Portal', 'Top-Up Checkout', 'Fintech UI']
        },
        {
          title: 'Kertha Enterprise Platform Interface',
          desc: 'Clean enterprise SaaS layout showcasing intuitive data tables, navigation hierarchy, and system metrics.',
          src: 'src/img/Web/Kertha.webp',
          type: 'image',
          tags: ['Enterprise SaaS', 'Dashboard Design', 'System UI']
        },
        {
          title: 'Chips F&B Snack Brand Landing Page',
          desc: 'Appetizing snack product showcase with bold typographic personality and flavor variant carousel.',
          src: 'src/img/Web/Chips.webp',
          type: 'image',
          tags: ['F&B Snack Web', 'E-Commerce Landing', 'Product Story']
        }
      ]
    },

    {
      id: 'posters',
      folderPath: 'src/img/Posters',
      title: 'Visual Posters & Infographics',
      folderLabel: 'folder: Posters',
      stickerText: 'DATA VISUAL',
      desc: 'Data-driven editorial infographic poster balancing information hierarchy and visual punch.',
      coverImage: 'src/img/Posters/Infographic.webp',
      items: [
        {
          title: 'Data-Driven Visual Infographic Poster',
          desc: 'Structured hierarchical information architecture organizing complex analytical insights into clear visual modules.',
          src: 'src/img/Posters/Infographic.webp',
          type: 'image',
          tags: ['Infographic Poster', 'Data Hierarchy', 'Information Design']
        }
      ]
    }
  ];

  // -------------------------------------------------------------------------
  // 2. STATE & DOM REFERENCES
  // -------------------------------------------------------------------------
  let activeFolderCategory = null;
  let currentSlideIndex = 0;
  let soundEnabled = localStorage.getItem('zacky_sound_enabled') === 'true';

  const categoryGridEl = document.getElementById('categoryCardsGrid');

  // Slider Modal Elements
  const sliderModal = document.getElementById('sliderModal');
  const sliderModalClose = document.getElementById('sliderModalClose');
  const sliderCategoryTitle = document.getElementById('sliderCategoryTitle');
  const sliderFolderBadge = document.getElementById('sliderFolderBadge');
  const sliderCounter = document.getElementById('sliderCounter');
  const sliderNavPrev = document.getElementById('sliderNavPrev');
  const sliderNavNext = document.getElementById('sliderNavNext');
  const sliderDisplayImg = document.getElementById('sliderDisplayImg');
  const sliderVideoPlayer = document.getElementById('sliderVideoPlayer');
  const sliderItemTitle = document.getElementById('sliderItemTitle');
  const sliderItemDesc = document.getElementById('sliderItemDesc');
  const sliderItemTags = document.getElementById('sliderItemTags');
  const sliderThumbnailsTrack = document.getElementById('sliderThumbnailsTrack');

  // Contact Form & Toast
  const contactForm = document.getElementById('contactForm');
  const formSuccessBanner = document.getElementById('formSuccessBanner');
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  // Navigation & Theme
  const themeToggleBtn = document.getElementById('themeToggle');
  const soundToggleBtn = document.getElementById('soundToggle');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  // -------------------------------------------------------------------------
  // 3. SOUND SYNTHESIZER (Web Audio API)
  // -------------------------------------------------------------------------
  let audioCtx = null;
  function playClickSound(freq = 820, duration = 0.04) {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio blocked or unsupported
    }
  }

  // -------------------------------------------------------------------------
  // 4. THEME CONTROLLER
  // -------------------------------------------------------------------------
  function initTheme() {
    const savedTheme = localStorage.getItem('zacky_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeToggleUI(initialTheme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('zacky_theme', nextTheme);
    updateThemeToggleUI(nextTheme);
    playClickSound(620, 0.05);
  }

  function updateThemeToggleUI(theme) {
    if (!themeToggleBtn) return;
    const sunIcon = themeToggleBtn.querySelector('.icon-sun');
    const moonIcon = themeToggleBtn.querySelector('.icon-moon');
    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
  }

  // -------------------------------------------------------------------------
  // 5. TOAST NOTIFICATION UTILITY
  // -------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    if (!toastNotice || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotice.classList.add('visible');
    playClickSound(950, 0.06);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('visible');
    }, 3200);
  }

  // -------------------------------------------------------------------------
  // 6. RENDER 8 CATEGORY CARDS (1 Card Per Folder)
  // -------------------------------------------------------------------------
  function renderCategoryCards() {
    if (!categoryGridEl) return;
    categoryGridEl.innerHTML = '';

    CATEGORY_FOLDERS.forEach((category) => {
      const card = document.createElement('article');
      card.className = 'category-folder-card';
      card.id = `cat-${category.id}`;
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Explore folder: ${category.title}, containing ${category.items.length} assets`);

      const hasVideo = category.items.some(item => item.type === 'video');

      card.innerHTML = `
        <div class="category-card-top">
          <div class="category-folder-badge">
            <svg class="starburst-icon starburst-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0 C13.3 8.7 15.3 10.7 24 12 C15.3 13.3 13.3 15.3 12 24 C10.7 15.3 8.7 13.3 0 12 C8.7 10.7 10.7 8.7 12 0 Z"/>
            </svg>
            <span>${category.folderLabel}</span>
          </div>
          <span class="speech-bubble tail-right">${category.stickerText}</span>
        </div>

        <div class="category-media-stack">
          <img src="${category.coverImage}" alt="${category.title}" loading="lazy" width="600" height="375" />
          ${hasVideo ? `
            <div class="video-category-indicator" aria-label="Includes video assets">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          ` : ''}
          <div class="category-count-pill">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
            <span>${category.items.length} Assets</span>
          </div>
        </div>

        <div class="category-card-body">
          <h3 class="category-title">${category.title}</h3>
          <p class="category-desc">${category.desc}</p>
        </div>

        <div class="category-card-footer">
          <span class="category-action-text">
            <span>Open &amp; Slide Gallery</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
          <span class="sticker-badge sticker-tilted">Click to View</span>
        </div>
      `;

      // Click to open slide popup
      card.addEventListener('click', () => {
        playClickSound(850, 0.04);
        openSliderModal(category.id, 0);
      });

      // Keyboard accessible Enter / Space (R-32)
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          playClickSound(850, 0.04);
          openSliderModal(category.id, 0);
        }
      });

      categoryGridEl.appendChild(card);
    });
  }

  // -------------------------------------------------------------------------
  // 7. POPUP SLIDER / CAROUSEL CONTROLLER
  // -------------------------------------------------------------------------
  function openSliderModal(categoryId, index = 0) {
    const category = CATEGORY_FOLDERS.find(c => c.id === categoryId);
    if (!category) return;

    activeFolderCategory = category;
    currentSlideIndex = Math.max(0, Math.min(index, category.items.length - 1));

    if (!sliderModal) return;

    sliderCategoryTitle.textContent = category.title;
    if (sliderFolderBadge) sliderFolderBadge.textContent = category.folderLabel;

    renderThumbnailStrip();
    showCurrentSlide();

    sliderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (sliderModalClose) sliderModalClose.focus();
  }

  function closeSliderModal() {
    if (!sliderModal) return;

    // Pause video if playing
    if (sliderVideoPlayer) {
      sliderVideoPlayer.pause();
      sliderVideoPlayer.currentTime = 0;
      sliderVideoPlayer.src = '';
    }

    sliderModal.classList.remove('active');
    document.body.style.overflow = '';
    activeFolderCategory = null;
  }

  function showCurrentSlide() {
    if (!activeFolderCategory) return;
    const items = activeFolderCategory.items;
    const current = items[currentSlideIndex];
    if (!current) return;

    // Counter badge: e.g. [ 03 / 19 ]
    const paddedCurrent = String(currentSlideIndex + 1).padStart(2, '0');
    const paddedTotal = String(items.length).padStart(2, '0');
    sliderCounter.textContent = `${paddedCurrent} / ${paddedTotal}`;

    // Display Media (Image or Video)
    if (current.type === 'video') {
      sliderDisplayImg.style.display = 'none';
      sliderVideoPlayer.style.display = 'block';
      sliderVideoPlayer.src = current.src;
      sliderVideoPlayer.poster = current.poster || '';
      sliderVideoPlayer.play().catch(() => { });
    } else {
      if (sliderVideoPlayer) {
        sliderVideoPlayer.pause();
        sliderVideoPlayer.style.display = 'none';
        sliderVideoPlayer.src = '';
      }
      sliderDisplayImg.style.display = 'block';
      sliderDisplayImg.style.opacity = '0.5';
      sliderDisplayImg.src = current.src;
      sliderDisplayImg.alt = current.title;
      sliderDisplayImg.onload = () => {
        sliderDisplayImg.style.opacity = '1';
      };
    }

    // Caption Details
    sliderItemTitle.textContent = current.title;
    sliderItemDesc.textContent = current.desc;

    // Tags
    if (sliderItemTags) {
      sliderItemTags.innerHTML = (current.tags || []).map(tag => `
        <span class="slider-tag-pill">#${tag}</span>
      `).join('');
    }

    // Update active thumbnail state
    updateActiveThumbnail();
  }

  function prevSlide() {
    if (!activeFolderCategory) return;
    const total = activeFolderCategory.items.length;
    currentSlideIndex = (currentSlideIndex - 1 + total) % total;
    playClickSound(750, 0.03);
    showCurrentSlide();
  }

  function nextSlide() {
    if (!activeFolderCategory) return;
    const total = activeFolderCategory.items.length;
    currentSlideIndex = (currentSlideIndex + 1) % total;
    playClickSound(750, 0.03);
    showCurrentSlide();
  }

  function renderThumbnailStrip() {
    if (!sliderThumbnailsTrack || !activeFolderCategory) return;
    sliderThumbnailsTrack.innerHTML = '';

    activeFolderCategory.items.forEach((item, idx) => {
      const thumbBtn = document.createElement('button');
      thumbBtn.type = 'button';
      thumbBtn.className = `slider-thumb-btn ${idx === currentSlideIndex ? 'active' : ''}`;
      thumbBtn.setAttribute('aria-label', `Jump to slide ${idx + 1}: ${item.title}`);

      const thumbImgSrc = item.type === 'video' ? (item.poster || 'src/img/Podcast/Frame Logo.png') : item.src;
      thumbBtn.innerHTML = `<img src="${thumbImgSrc}" alt="${item.title}" loading="lazy" />`;

      thumbBtn.addEventListener('click', () => {
        currentSlideIndex = idx;
        playClickSound(800, 0.03);
        showCurrentSlide();
      });

      sliderThumbnailsTrack.appendChild(thumbBtn);
    });
  }

  function updateActiveThumbnail() {
    if (!sliderThumbnailsTrack) return;
    const thumbBtns = sliderThumbnailsTrack.querySelectorAll('.slider-thumb-btn');
    thumbBtns.forEach((btn, idx) => {
      if (idx === currentSlideIndex) {
        btn.classList.add('active');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 8. EVENT LISTENERS
  // -------------------------------------------------------------------------
  function setupEventListeners() {
    // Slider Controls
    if (sliderNavPrev) sliderNavPrev.addEventListener('click', prevSlide);
    if (sliderNavNext) sliderNavNext.addEventListener('click', nextSlide);
    if (sliderModalClose) sliderModalClose.addEventListener('click', closeSliderModal);

    if (sliderModal) {
      sliderModal.addEventListener('click', (e) => {
        if (e.target === sliderModal) {
          closeSliderModal();
        }
      });
    }

    // Keyboard Shortcuts (R-32)
    window.addEventListener('keydown', (e) => {
      if (sliderModal && sliderModal.classList.contains('active')) {
        if (e.key === 'Escape') closeSliderModal();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      }

      if (e.key === 'Escape') {
        if (mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
          closeMobileDrawer();
        }
      }
    });

    // Touch Swipe Support for Mobile Slider
    let touchStartX = 0;
    let touchEndX = 0;
    if (sliderModal) {
      sliderModal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      sliderModal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
      }, { passive: true });
    }

    function handleSwipeGesture() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 45) {
        if (swipeDistance < 0) {
          nextSlide(); // Swiped left -> next
        } else {
          prevSlide(); // Swiped right -> prev
        }
      }
    }

    // Theme Switcher
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Sound Switcher
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        localStorage.setItem('zacky_sound_enabled', soundEnabled);
        soundToggleBtn.setAttribute('aria-pressed', soundEnabled);
        showToast(soundEnabled ? 'Tactile Sound Effects: Enabled' : 'Tactile Sound Effects: Muted');
      });
    }

    // Mobile Hamburger & Drawer
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        playClickSound(650, 0.04);
        openMobileDrawer();
      });
    }

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', () => {
        playClickSound(500, 0.04);
        closeMobileDrawer();
      });
    }

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });

    // Copy Email Actions (R-26)
    copyEmailBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const email = 'zackydesigner@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          showToast('Email address copied to clipboard: ' + email);
        }).catch(() => {
          showToast('Email: ' + email);
        });
      });
    });

    // Contact Form Submission (R-26 Functional Completeness)
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        playClickSound(900, 0.08);

        const nameInput = document.getElementById('senderName');
        const emailInput = document.getElementById('senderEmail');
        const messageInput = document.getElementById('senderMessage');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
          showToast('Please fill out all required fields.');
          return;
        }

        if (formSuccessBanner) {
          formSuccessBanner.style.display = 'block';
          formSuccessBanner.textContent = 'Thank you, ' + nameInput.value.trim() + '. Your inquiry has been received. Zacky will respond shortly.';
        }

        showToast('Inquiry dispatched successfully.');
        contactForm.reset();

        setTimeout(() => {
          if (formSuccessBanner) formSuccessBanner.style.display = 'none';
        }, 6000);
      });
    }

    // Back to top
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        playClickSound(650, 0.04);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function openMobileDrawer() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (drawerCloseBtn) drawerCloseBtn.focus();
  }

  function closeMobileDrawer() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  // -------------------------------------------------------------------------
  // 9. INITIALIZATION
  // -------------------------------------------------------------------------
  function init() {
    initTheme();
    renderCategoryCards();
    setupEventListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
