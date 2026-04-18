const CATEGORIES = [
  { id: 'all', label: 'todos' },
  { id: 'ecom', label: 'ecommerce' },
  { id: 'eng', label: 'engajamento' },
  { id: 'auth', label: 'autenticação' },
  { id: 'content', label: 'conteúdo' },
  { id: 'form', label: 'formulários' },
];

const ITEM_FIELDS_FULL = [
  { key: 'item_id', type: 'string', value: 'SKU_12345' },
  { key: 'item_name', type: 'string', value: 'Stan and Friends Tee' },
  { key: 'affiliation', type: 'string', value: 'Google Merchandise Store' },
  { key: 'coupon', type: 'string', value: 'SUMMER_FUN' },
  { key: 'discount', type: 'number', value: '2.22' },
  { key: 'index', type: 'number', value: '0' },
  { key: 'item_brand', type: 'string', value: 'Google' },
  { key: 'item_category', type: 'string', value: 'Apparel' },
  { key: 'item_category2', type: 'string', value: 'Adult' },
  { key: 'item_category3', type: 'string', value: 'Shirts' },
  { key: 'item_variant', type: 'string', value: 'green' },
  { key: 'item_list_id', type: 'string', value: 'related_products' },
  { key: 'item_list_name', type: 'string', value: 'Related Products' },
  { key: 'location_id', type: 'string', value: '' },
  { key: 'price', type: 'number', value: '9.99' },
  { key: 'quantity', type: 'number', value: '1' },
];

const ITEM_FIELDS_MIN = [
  { key: 'item_id', type: 'string', value: 'SKU_12345' },
  { key: 'item_name', type: 'string', value: 'Stan and Friends Tee' },
  { key: 'item_brand', type: 'string', value: 'Google' },
  { key: 'item_category', type: 'string', value: 'Apparel' },
  { key: 'item_variant', type: 'string', value: 'green' },
  { key: 'price', type: 'number', value: '9.99' },
  { key: 'quantity', type: 'number', value: '1' },
];

const PROMO_FIELDS = [
  { key: 'promotion_id', type: 'string', value: 'P_12345' },
  { key: 'promotion_name', type: 'string', value: 'Summer Sale' },
  { key: 'creative_name', type: 'string', value: 'Summer Banner' },
  { key: 'creative_slot', type: 'string', value: 'featured_app_1' },
];

const TEMPLATES = [
  { id: 'view_item_list', cat: 'ecom', name: 'view_item_list', desc: 'Lista de produtos', promo: [], eventFields: [{ key: 'item_list_id', type: 'string', value: 'related_products' }, { key: 'item_list_name', type: 'string', value: 'Related Products' }], hasItems: true, itemFields: ITEM_FIELDS_MIN },
  { id: 'select_item', cat: 'ecom', name: 'select_item', desc: 'Clicou em produto', promo: [], eventFields: [{ key: 'item_list_id', type: 'string', value: 'related_products' }, { key: 'item_list_name', type: 'string', value: 'Related Products' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'view_item', cat: 'ecom', name: 'view_item', desc: 'Página de produto', promo: [], eventFields: [{ key: 'currency', type: 'string', value: 'BRL' }, { key: 'value', type: 'number', value: '9.99' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'add_to_cart', cat: 'ecom', name: 'add_to_cart', desc: 'Adicionou ao carrinho', promo: [], eventFields: [{ key: 'currency', type: 'string', value: 'BRL' }, { key: 'value', type: 'number', value: '9.99' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'add_to_wishlist', cat: 'ecom', name: 'add_to_wishlist', desc: 'Adicionou à wishlist', promo: [], eventFields: [{ key: 'currency', type: 'string', value: 'BRL' }, { key: 'value', type: 'number', value: '9.99' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'remove_from_cart', cat: 'ecom', name: 'remove_from_cart', desc: 'Removeu do carrinho', promo: [], eventFields: [{ key: 'currency', type: 'string', value: 'BRL' }, { key: 'value', type: 'number', value: '9.99' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'view_cart', cat: 'ecom', name: 'view_cart', desc: 'Visualizou carrinho', promo: [], eventFields: [{ key: 'currency', type: 'string', value: 'BRL' }, { key: 'value', type: 'number', value: '19.98' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'begin_checkout', cat: 'ecom', name: 'begin_checkout', desc: 'Iniciou checkout', promo: [], eventFields: [{ key: 'currency', type: 'string', value: 'BRL' }, { key: 'value', type: 'number', value: '9.99' }, { key: 'coupon', type: 'string', value: 'SUMMER_FUN' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'add_shipping_info', cat: 'ecom', name: 'add_shipping_info', desc: 'Informou frete', promo: [], eventFields: [{ key: 'currency', type: 'string', value: 'BRL' }, { key: 'value', type: 'number', value: '9.99' }, { key: 'coupon', type: 'string', value: 'SUMMER_FUN' }, { key: 'shipping_tier', type: 'string', value: 'Ground' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'add_payment_info', cat: 'ecom', name: 'add_payment_info', desc: 'Informou pagamento', promo: [], eventFields: [{ key: 'currency', type: 'string', value: 'BRL' }, { key: 'value', type: 'number', value: '9.99' }, { key: 'coupon', type: 'string', value: 'SUMMER_FUN' }, { key: 'payment_type', type: 'string', value: 'Credit Card' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'purchase', cat: 'ecom', name: 'purchase', desc: 'Compra finalizada', promo: [], eventFields: [{ key: 'transaction_id', type: 'string', value: 'T_12345' }, { key: 'value', type: 'number', value: '25.42' }, { key: 'tax', type: 'number', value: '4.90' }, { key: 'shipping', type: 'number', value: '5.99' }, { key: 'currency', type: 'string', value: 'BRL' }, { key: 'coupon', type: 'string', value: 'SUMMER_SALE' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'refund', cat: 'ecom', name: 'refund', desc: 'Reembolso', promo: [], eventFields: [{ key: 'transaction_id', type: 'string', value: 'T_12345' }, { key: 'value', type: 'number', value: '9.99' }, { key: 'tax', type: 'number', value: '1.11' }, { key: 'shipping', type: 'number', value: '3.33' }, { key: 'currency', type: 'string', value: 'BRL' }, { key: 'coupon', type: 'string', value: 'SUMMER_FUN' }], hasItems: true, itemFields: ITEM_FIELDS_FULL },
  { id: 'view_promotion', cat: 'ecom', name: 'view_promotion', desc: 'Viu promoção', promo: PROMO_FIELDS, eventFields: [], hasItems: true, itemFields: ITEM_FIELDS_MIN },
  { id: 'select_promotion', cat: 'ecom', name: 'select_promotion', desc: 'Clicou em promoção', promo: PROMO_FIELDS, eventFields: [], hasItems: true, itemFields: ITEM_FIELDS_MIN },
  { id: 'login', cat: 'auth', name: 'login', desc: 'Login realizado', promo: [], eventFields: [{ key: 'method', type: 'string', value: 'email' }], hasItems: false, itemFields: [] },
  { id: 'sign_up', cat: 'auth', name: 'sign_up', desc: 'Cadastro realizado', promo: [], eventFields: [{ key: 'method', type: 'string', value: 'email' }], hasItems: false, itemFields: [] },
  { id: 'generate_lead', cat: 'form', name: 'generate_lead', desc: 'Lead gerado', promo: [], eventFields: [{ key: 'currency', type: 'string', value: 'BRL' }, { key: 'value', type: 'number', value: '0' }, { key: 'form_id', type: 'string', value: '' }, { key: 'form_name', type: 'string', value: '' }], hasItems: false, itemFields: [] },
  { id: 'search', cat: 'content', name: 'search', desc: 'Pesquisa realizada', promo: [], eventFields: [{ key: 'search_term', type: 'string', value: '' }], hasItems: false, itemFields: [] },
  { id: 'share', cat: 'eng', name: 'share', desc: 'Compartilhamento', promo: [], eventFields: [{ key: 'method', type: 'string', value: 'whatsapp' }, { key: 'content_type', type: 'string', value: 'produto' }, { key: 'item_id', type: 'string', value: '' }], hasItems: false, itemFields: [] },
  { id: 'page_view', cat: 'content', name: 'page_view', desc: 'Visualização de página', promo: [], eventFields: [{ key: 'page_title', type: 'string', value: '' }, { key: 'page_location', type: 'string', value: '' }, { key: 'page_path', type: 'string', value: '' }], hasItems: false, itemFields: [] },
  { id: 'select_content', cat: 'content', name: 'select_content', desc: 'Clicou em conteúdo', promo: [], eventFields: [{ key: 'content_type', type: 'string', value: 'artigo' }, { key: 'item_id', type: 'string', value: '' }], hasItems: false, itemFields: [] },
  { id: 'video_start', cat: 'content', name: 'video_start', desc: 'Vídeo iniciado', promo: [], eventFields: [{ key: 'video_title', type: 'string', value: '' }, { key: 'video_url', type: 'string', value: '' }, { key: 'video_provider', type: 'string', value: 'youtube' }], hasItems: false, itemFields: [] },
  { id: 'video_complete', cat: 'content', name: 'video_complete', desc: 'Vídeo finalizado', promo: [], eventFields: [{ key: 'video_title', type: 'string', value: '' }, { key: 'video_url', type: 'string', value: '' }, { key: 'video_duration', type: 'number', value: '' }], hasItems: false, itemFields: [] },
  { id: 'file_download', cat: 'content', name: 'file_download', desc: 'Download de arquivo', promo: [], eventFields: [{ key: 'file_name', type: 'string', value: '' }, { key: 'file_extension', type: 'string', value: 'pdf' }, { key: 'link_url', type: 'string', value: '' }], hasItems: false, itemFields: [] },
  { id: 'scroll', cat: 'eng', name: 'scroll', desc: 'Rolagem de página', promo: [], eventFields: [{ key: 'percent_scrolled', type: 'number', value: '90' }], hasItems: false, itemFields: [] },
  { id: 'tutorial_begin', cat: 'eng', name: 'tutorial_begin', desc: 'Iniciou tutorial', promo: [], eventFields: [{ key: 'tutorial_id', type: 'string', value: '' }, { key: 'tutorial_name', type: 'string', value: '' }], hasItems: false, itemFields: [] },
  { id: 'tutorial_complete', cat: 'eng', name: 'tutorial_complete', desc: 'Completou tutorial', promo: [], eventFields: [{ key: 'tutorial_id', type: 'string', value: '' }, { key: 'tutorial_name', type: 'string', value: '' }], hasItems: false, itemFields: [] },
];

let eventProperties = [];
let promoProperties = [];
let items = [];
let uid = 0;
let showItems = false;
let activeTemplate = null;
let activeCategory = 'all';
let eventHistory = [];

const MAX_HISTORY = 10;
const REQUIRED_FIELDS = {
  'purchase': ['transaction_id', 'value', 'currency', 'items'],
  'refund': ['transaction_id', 'value', 'currency'],
  'add_to_cart': ['value', 'currency', 'items'],
  'begin_checkout': ['value', 'currency', 'items'],
  'view_item': ['value', 'currency', 'items'],
};

function generateId() {
  return uid++;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function getPlaceholder(type) {
  const map = { string: 'texto', number: '0', boolean: 'true/false' };
  return map[type] || '';
}

function castValue(type, raw) {
  const value = (raw || '').trim();
  if (!value) return type === 'string' ? '""' : 'null';
  if (type === 'number') return isNaN(Number(value)) ? `"${value}"` : value;
  if (type === 'boolean') return (value === 'true' || value === 'false') ? value : `"${value}"`;
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function castRealValue(type, raw) {
  const value = (raw || '').trim();
  if (!value) return type === 'string' ? '' : null;
  if (type === 'number') return isNaN(Number(value)) ? value : Number(value);
  if (type === 'boolean') return value === 'true';
  return value;
}

function getBadgeClass(cat) {
  const map = {
    ecom: 'badge-ecom',
    eng: 'badge-eng',
    auth: 'badge-auth',
    form: 'badge-form',
    content: 'badge-content'
  };
  return 'tpl-badge ' + (map[cat] || 'badge-content');
}

function renderCategories() {
  document.getElementById('categories').innerHTML = CATEGORIES.map(cat =>
    `<button class="cat-btn${activeCategory === cat.id ? ' on' : ''}" onclick="setCategory('${cat.id}')">${cat.label}</button>`
  ).join('');
}

function setCategory(id) {
  activeCategory = id;
  renderCategories();
  renderTemplates();
}

function renderTemplates() {
  const filtered = activeCategory === 'all' ? TEMPLATES : TEMPLATES.filter(t => t.cat === activeCategory);
  document.getElementById('templatesGrid').innerHTML = filtered.map(tpl =>
    `<button class="tpl-btn${activeTemplate === tpl.id ? ' on' : ''}" onclick="applyTemplate('${tpl.id}')">
      <span class="${getBadgeClass(tpl.cat)}">${tpl.cat}</span>
      <span class="tpl-name">${tpl.name}</span>
      <span class="tpl-desc">${tpl.desc}</span>
    </button>`
  ).join('');
}

function applyTemplate(id) {
  const tpl = TEMPLATES.find(t => t.id === id);
  if (!tpl) return;

  activeTemplate = id;
  document.getElementById('eventName').value = tpl.name;

  eventProperties = tpl.eventFields.map(f => ({ id: generateId(), key: f.key, type: f.type, value: f.value }));
  promoProperties = tpl.promo.map(f => ({ id: generateId(), key: f.key, type: f.type, value: f.value }));

  const hasPromo = tpl.promo.length > 0;
  document.getElementById('scopePromo').classList.toggle('hidden', !hasPromo);

  showItems = tpl.hasItems;
  document.getElementById('toggleBox').classList.toggle('on', showItems);
  document.getElementById('itemsArea').classList.toggle('hidden', !showItems);

  items = tpl.hasItems ? [{ id: generateId(), props: tpl.itemFields.map(f => ({ id: generateId(), key: f.key, type: f.type, value: f.value })) }] : [];

  renderTemplates();
  renderEventProperties();
  renderPromoProperties();
  renderItems();
  render();
}

function onEventNameInput() {
  activeTemplate = null;
  renderTemplates();
  render();
}

function addEventProperty() {
  eventProperties.push({ id: generateId(), key: '', type: 'string', value: '' });
  renderEventProperties();
  render();
}

function removeEventProperty(id) {
  eventProperties = eventProperties.filter(p => p.id !== id);
  renderEventProperties();
  render();
}

function updateEventProperty(id, field, value) {
  const prop = eventProperties.find(p => p.id === id);
  if (prop) {
    prop[field] = value;
    render();
  }
}

function addPromoProperty() {
  promoProperties.push({ id: generateId(), key: '', type: 'string', value: '' });
  renderPromoProperties();
  render();
}

function removePromoProperty(id) {
  promoProperties = promoProperties.filter(p => p.id !== id);
  renderPromoProperties();
  render();
}

function updatePromoProperty(id, field, value) {
  const prop = promoProperties.find(p => p.id === id);
  if (prop) {
    prop[field] = value;
    render();
  }
}

function makePropertyRow(prop, updateFn, removeFn, itemId) {
  const updateCall = itemId !== undefined ? `${updateFn}(${itemId},${prop.id}` : `${updateFn}(${prop.id}`;
  const removeCall = itemId !== undefined ? `${removeFn}(${itemId},${prop.id})` : `${removeFn}(${prop.id})`;
  return `<div class="prop-row">
    <input class="form-input" placeholder="chave" value="${escapeHtml(prop.key)}" oninput="${updateCall},'key',this.value)" />
    <select class="form-select" onchange="${updateCall},'type',this.value)">
      ${['string', 'number', 'boolean'].map(t => `<option value="${t}"${prop.type === t ? ' selected' : ''}>${t}</option>`).join('')}
    </select>
    <input class="form-input" placeholder="${getPlaceholder(prop.type)}" value="${escapeHtml(prop.value)}" oninput="${updateCall},'value',this.value)" />
    <button class="btn-remove" onclick="${removeCall}">×</button>
  </div>`;
}

function renderEventProperties() {
  document.getElementById('eventProps').innerHTML = eventProperties.map(p => makePropertyRow(p, 'updateEventProperty', 'removeEventProperty')).join('');
}

function renderPromoProperties() {
  document.getElementById('promoProps').innerHTML = promoProperties.map(p => makePropertyRow(p, 'updatePromoProperty', 'removePromoProperty')).join('');
}

function toggleItems() {
  showItems = !showItems;
  document.getElementById('toggleBox').classList.toggle('on', showItems);
  document.getElementById('itemsArea').classList.toggle('hidden', !showItems);
  if (showItems && items.length === 0) addItem();
  render();
}

function addItem() {
  items.push({ id: generateId(), props: [{ id: generateId(), key: '', type: 'string', value: '' }] });
  renderItems();
  render();
}

function removeItem(id) {
  items = items.filter(i => i.id !== id);
  renderItems();
  render();
}

function addItemProperty(itemId) {
  const item = items.find(i => i.id === itemId);
  if (item) item.props.push({ id: generateId(), key: '', type: 'string', value: '' });
  renderItems();
  render();
}

function removeItemProperty(itemId, propId) {
  const item = items.find(i => i.id === itemId);
  if (item) item.props = item.props.filter(p => p.id !== propId);
  renderItems();
  render();
}

function updateItemProperty(itemId, propId, field, value) {
  const item = items.find(i => i.id === itemId);
  if (item) {
    const prop = item.props.find(p => p.id === propId);
    if (prop) prop[field] = value;
  }
  render();
}

function renderItems() {
  document.getElementById('itemsList').innerHTML = items.map((item, idx) =>
    `<div class="item-card">
      <div class="item-header">
        <span class="item-label">item ${idx + 1}</span>
        <button class="btn-remove-item" onclick="removeItem(${item.id})">remover item</button>
      </div>
      <div class="col-labels">
        <span class="col-label">chave</span>
        <span class="col-label">tipo</span>
        <span class="col-label">valor</span>
        <span></span>
      </div>
      <div class="props-list">
        ${item.props.map(p => makePropertyRow(p, 'updateItemProperty', 'removeItemProperty', item.id)).join('')}
      </div>
      <button class="btn-add" onclick="addItemProperty(${item.id})">+ propriedade</button>
    </div>`
  ).join('');
}

function render() {
  const eventName = (document.getElementById('eventName').value || '').trim();
  const hasContent = eventName || eventProperties.some(p => p.key.trim()) || promoProperties.some(p => p.key.trim()) || (showItems && items.length > 0);

  if (!hasContent) {
    document.getElementById('codeBlock').textContent = '// selecione um template ou preencha o nome do evento...';
    return;
  }

  const lines = [];
  lines.push('dataLayer.push({ ecommerce: null }); // limpa objeto anterior');
  lines.push('dataLayer.push({');
  lines.push(`  event: "${eventName || 'nome_do_evento'}",`);
  lines.push('  ecommerce: {');

  promoProperties.forEach(p => {
    if (p.key.trim()) lines.push(`    ${p.key}: ${castValue(p.type, p.value)},`);
  });

  eventProperties.forEach(p => {
    if (p.key.trim()) lines.push(`    ${p.key}: ${castValue(p.type, p.value)},`);
  });

  if (showItems && items.length > 0) {
    lines.push('    items: [');
    items.forEach(item => {
      const validProps = item.props.filter(p => p.key.trim());
      lines.push('      {');
      validProps.forEach(p => {
        lines.push(`        ${p.key}: ${castValue(p.type, p.value)},`);
      });
      lines.push('      },');
    });
    lines.push('    ],');
  }

  lines.push('  }');
  lines.push('});');
  document.getElementById('codeBlock').textContent = lines.join('\n');
}

function copyCode() {
  const code = document.getElementById('codeBlock').textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = 'copiado!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'copiar código';
      btn.classList.remove('copied');
    }, 2000);
  });
}

function pushLayer() {
  const eventName = (document.getElementById('eventName').value || '').trim();
  const ecommerceObj = {};

  promoProperties.forEach(p => {
    if (p.key.trim()) ecommerceObj[p.key] = castRealValue(p.type, p.value);
  });

  eventProperties.forEach(p => {
    if (p.key.trim()) ecommerceObj[p.key] = castRealValue(p.type, p.value);
  });

  if (showItems && items.length > 0) {
    ecommerceObj.items = items.map(item => {
      const itemObj = {};
      item.props.forEach(p => {
        if (p.key.trim()) itemObj[p.key] = castRealValue(p.type, p.value);
      });
      return itemObj;
    });
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({ event: eventName || 'nome_do_evento', ecommerce: ecommerceObj });

  console.log('[dataLayer push]', JSON.stringify({ event: eventName || 'nome_do_evento', ecommerce: ecommerceObj }, null, 2));

  const badge = document.getElementById('pushedBadge');
  badge.style.display = 'inline-block';
  setTimeout(() => badge.style.display = 'none', 2500);

  addToHistory();
}

// ==================== VALIDATION ====================
function validateEvent() {
  const eventName = (document.getElementById('eventName').value || '').trim();
  const required = REQUIRED_FIELDS[eventName] || [];
  const warnings = [];

  if (!eventName) {
    warnings.push('Nome do evento é obrigatório');
  }

  required.forEach(field => {
    if (field === 'items') {
      if (!showItems || items.length === 0) {
        warnings.push(`"${field}" é obrigatório para este evento`);
      }
    } else {
      const hasProp = eventProperties.some(p => p.key === field && p.value.trim());
      if (!hasProp) {
        warnings.push(`"${field}" é obrigatório para este evento`);
      }
    }
  });

  if (warnings.length > 0) {
    return warnings;
  }
  return [];
}

// ==================== HISTORY ====================
function addToHistory() {
  const eventName = (document.getElementById('eventName').value || '').trim();
  if (!eventName) return;

  const historyItem = {
    id: Date.now(),
    event: eventName,
    timestamp: new Date().toLocaleTimeString('pt-BR'),
    data: {
      eventName,
      eventProperties: JSON.parse(JSON.stringify(eventProperties)),
      promoProperties: JSON.parse(JSON.stringify(promoProperties)),
      items: JSON.parse(JSON.stringify(items)),
      showItems
    }
  };

  eventHistory.unshift(historyItem);
  if (eventHistory.length > MAX_HISTORY) eventHistory.pop();
  saveHistory();
}

function saveHistory() {
  localStorage.setItem('dataLayerHistory', JSON.stringify(eventHistory));
}

function loadHistory() {
  const saved = localStorage.getItem('dataLayerHistory');
  if (saved) {
    try {
      eventHistory = JSON.parse(saved);
    } catch (e) {
      eventHistory = [];
    }
  }
}

function openHistoryModal() {
  const modal = document.getElementById('historyModal');
  const list = document.getElementById('historyList');

  if (eventHistory.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📭</div><p>Nenhum evento no histórico</p></div>';
  } else {
    list.innerHTML = eventHistory.map(item =>
      `<div class="history-item">
        <div class="history-item-info" onclick="loadHistoryItem(${item.id})">
          <div class="history-event-name">${item.event}</div>
          <div class="history-event-time">${item.timestamp}</div>
        </div>
        <div class="history-actions">
          <button class="history-action-btn" onclick="loadHistoryItem(${item.id})">carregar</button>
          <button class="history-action-btn" onclick="deleteHistoryItem(${item.id})" style="color: var(--text-danger); border-color: var(--border-danger);">deletar</button>
        </div>
      </div>`
    ).join('');
  }

  modal.classList.remove('hidden');
}

function closeHistoryModal() {
  document.getElementById('historyModal').classList.add('hidden');
}

function loadHistoryItem(id) {
  const item = eventHistory.find(h => h.id === id);
  if (!item) return;

  const { eventName, eventProperties: props, promoProperties: promo, items: itemsData, showItems: show } = item.data;

  document.getElementById('eventName').value = eventName;
  eventProperties = JSON.parse(JSON.stringify(props));
  promoProperties = JSON.parse(JSON.stringify(promo));
  items = JSON.parse(JSON.stringify(itemsData));
  showItems = show;
  activeTemplate = null;

  document.getElementById('toggleBox').classList.toggle('on', showItems);
  document.getElementById('itemsArea').classList.toggle('hidden', !showItems);
  document.getElementById('scopePromo').classList.toggle('hidden', promoProperties.length === 0);

  renderTemplates();
  renderEventProperties();
  renderPromoProperties();
  renderItems();
  render();
  closeHistoryModal();
}

function deleteHistoryItem(id) {
  eventHistory = eventHistory.filter(h => h.id !== id);
  saveHistory();
  openHistoryModal();
}

function clearHistory() {
  if (confirm('Tem certeza que deseja limpar todo o histórico?')) {
    eventHistory = [];
    saveHistory();
    closeHistoryModal();
  }
}

// ==================== EXPORT/IMPORT ====================
function openExportModal() {
  const eventName = (document.getElementById('eventName').value || '').trim();
  const ecommerceObj = {};

  promoProperties.forEach(p => {
    if (p.key.trim()) ecommerceObj[p.key] = castRealValue(p.type, p.value);
  });

  eventProperties.forEach(p => {
    if (p.key.trim()) ecommerceObj[p.key] = castRealValue(p.type, p.value);
  });

  if (showItems && items.length > 0) {
    ecommerceObj.items = items.map(item => {
      const itemObj = {};
      item.props.forEach(p => {
        if (p.key.trim()) itemObj[p.key] = castRealValue(p.type, p.value);
      });
      return itemObj;
    });
  }

  const exportData = {
    event: eventName || 'nome_do_evento',
    ecommerce: ecommerceObj
  };

  document.getElementById('exportJson').value = JSON.stringify(exportData, null, 2);
  document.getElementById('exportModal').classList.remove('hidden');
}

function closeExportModal() {
  document.getElementById('exportModal').classList.add('hidden');
}

function copyExportJson() {
  const text = document.getElementById('exportJson').value;
  navigator.clipboard.writeText(text).then(() => {
    const btn = event.target;
    btn.textContent = 'copiado!';
    setTimeout(() => btn.textContent = 'copiar JSON', 2000);
  });
}

function downloadExportJson() {
  const text = document.getElementById('exportJson').value;
  const eventName = (document.getElementById('eventName').value || 'evento').trim();
  const element = document.createElement('a');
  element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', `${eventName}_datalayer.json`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function openImportModal() {
  document.getElementById('importJson').value = '';
  document.getElementById('importError').classList.add('hidden');
  document.getElementById('importModal').classList.remove('hidden');
}

function closeImportModal() {
  document.getElementById('importModal').classList.add('hidden');
}

function importJson() {
  const json = document.getElementById('importJson').value.trim();
  const errorEl = document.getElementById('importError');

  if (!json) {
    errorEl.textContent = 'Cole um JSON válido';
    errorEl.classList.remove('hidden');
    return;
  }

  try {
    const data = JSON.parse(json);

    if (!data.event || !data.ecommerce) {
      throw new Error('JSON deve conter "event" e "ecommerce"');
    }

    document.getElementById('eventName').value = data.event;
    const ecom = data.ecommerce;

    eventProperties = [];
    promoProperties = [];
    items = [];

    Object.keys(ecom).forEach(key => {
      if (key === 'items' && Array.isArray(ecom[key])) {
        showItems = true;
        ecom[key].forEach(itemObj => {
          const props = Object.keys(itemObj).map(k => ({
            id: generateId(),
            key: k,
            type: typeof itemObj[k] === 'number' ? 'number' : 'string',
            value: String(itemObj[k])
          }));
          items.push({ id: generateId(), props });
        });
      } else {
        const type = typeof ecom[key] === 'number' ? 'number' : 'string';
        const prop = {
          id: generateId(),
          key,
          type,
          value: String(ecom[key])
        };

        if (['promotion_id', 'promotion_name', 'creative_name', 'creative_slot'].includes(key)) {
          promoProperties.push(prop);
        } else {
          eventProperties.push(prop);
        }
      }
    });

    activeTemplate = null;
    document.getElementById('toggleBox').classList.toggle('on', showItems);
    document.getElementById('itemsArea').classList.toggle('hidden', !showItems);
    document.getElementById('scopePromo').classList.toggle('hidden', promoProperties.length === 0);

    renderTemplates();
    renderEventProperties();
    renderPromoProperties();
    renderItems();
    render();
    closeImportModal();
  } catch (e) {
    errorEl.textContent = 'JSON inválido: ' + e.message;
    errorEl.classList.remove('hidden');
  }
}

// ==================== INITIALIZE ====================
loadHistory();
renderCategories();
renderTemplates();
render();