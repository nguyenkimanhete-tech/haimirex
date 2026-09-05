// Nhúng ảnh webp dạng base64 vào landing.src.html -> landing.html (tự chứa, publish Artifact được)
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const IMG = path.join(DIR, 'assets', 'images');

const MIME = { '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg' };
function dataUri(file){
  const buf = fs.readFileSync(path.join(IMG, file));
  const mime = MIME[path.extname(file).toLowerCase()] || 'image/webp';
  return 'data:' + mime + ';base64,' + buf.toString('base64');
}

const map = {
  __IMG_HERO_DELAY__: dataUri('hero-delay-cream.png'),
  __IMG_PAIN_COUPLE__: dataUri('pain-couple-1.png'),
  __IMG_INGR_NUOC__: dataUri('ingr-nuoc-flat-1.png'),
  __IMG_INGR_DELAY__: dataUri('ingr-delay-1.png'),
  __IMG_PRODUCT_DELAY__: dataUri('product-delay-real.webp'),
  __IMG_PRODUCT_NUOC__: dataUri('product-nuoc-real.webp'),
  __IMG_PRODUCT_DELAY_CUT__: dataUri('product-delay-white-cut.webp'),
  __IMG_PRODUCT_NUOC_CUT__: dataUri('product-nuoc-white-cut.webp'),
  __IMG_PAIN_PEACH__: dataUri('pain-wilted-peach-cut.webp'),
  __IMG_ICON_GIOT_AM__: dataUri('ingr-nuoc-giot-am-cut.webp'),
  __IMG_ICON_PH__: dataUri('ingr-nuoc-can-bang-ph-cut.webp'),
  __IMG_ICON_MATNHAN__: dataUri('ingr-delay-mat-nhan-cut.webp'),
  __IMG_ICON_NHANSAM__: dataUri('ingr-delay-nhan-sam-cut.webp'),
  __IMG_ICON_GUNG__: dataUri('ingr-delay-gung-cut.webp'),
  __IMG_ICON_BACHA__: dataUri('ingr-delay-bac-ha-cut.webp'),
  __IMG_ICON_LOHOI__: dataUri('ingr-delay-lo-hoi-cut.webp'),
  __IMG_HERO_DUO__: dataUri('hero-duo-splash.webp'),
  __IMG_PAIN_COUPLE_NEW__: dataUri('pain-couple-new.webp'),
  __IMG_PROW_NUOC_PEACH__: dataUri('prow-nuoc-peach.webp'),
  __IMG_PROW_DELAY_DRIFTWOOD__: dataUri('prow-delay-driftwood.webp'),
  __IMG_INGR_NUOC_INFO__: dataUri('ingr-nuoc-info.webp'),
  __IMG_INGR_DELAY_INFO__: dataUri('ingr-delay-info.webp'),
  __IMG_CMP_COUPLE_HAPPY__: dataUri('cmp-couple-happy.webp'),
  __IMG_USAGE_INFO__: dataUri('usage-info-3.webp'),
  __IMG_BRAND_TILE_1__: dataUri('brand-tile-1.webp'),
  __IMG_BRAND_TILE_2__: dataUri('brand-tile-2.webp'),
  __IMG_BRAND_TILE_3__: dataUri('brand-tile-3.webp'),
  __IMG_BRAND_TILE_4__: dataUri('brand-tile-4.webp'),
  __IMG_PLAN_NUOC__: dataUri('plan-nuoc-final.webp'),
  __IMG_PLAN_DELAY_1__: dataUri('plan-delay-1-final.webp'),
  __IMG_PLAN_DELAY_2__: dataUri('plan-delay-2-final.webp'),
  __IMG_PLAN_COMBO__: dataUri('plan-combo-final.webp'),
  __IMG_CERT_CONGBO__: dataUri('cert-congbo.webp'),
  __IMG_CERT_ISO__: dataUri('cert-iso.webp'),
  __IMG_CERT_KN_DELAY__: dataUri('cert-kiemnghiem-delay.webp'),
  __IMG_CERT_KN_NUOC__: dataUri('cert-kiemnghiem-nuoc.webp'),
  __IMG_PAIN_COUPLE_2026__: dataUri('pain-couple-2026.webp'),
  __IMG_PROW_NUOC_2026__: dataUri('prow-nuoc-2026.webp'),
  __IMG_PROW_DELAY_2026__: dataUri('prow-delay-2026.webp'),
  __IMG_INGR_NUOC_INFO_2026__: dataUri('ingr-nuoc-info-2026.webp'),
  __IMG_SHIPPING_BOX_2026__: dataUri('shipping-box-2026.webp'),
};

let html = fs.readFileSync(path.join(DIR, 'landing.src.html'), 'utf-8');
for (const [token, uri] of Object.entries(map)) {
  html = html.split(token).join(uri);
}
const outPath = path.join(DIR, 'landing.html');
fs.writeFileSync(outPath, html);
// index.html cho GitHub Pages (serve mặc định ở root)
fs.writeFileSync(path.join(DIR, 'index.html'), html);
console.log('✓ landing.html + index.html: ' + (fs.statSync(outPath).size/1024).toFixed(0) + ' KB');
