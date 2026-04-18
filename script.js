 const addProps  = document.querySelector('.add-btn')
 
 addProps.addEventListener('click',addProp )
 
 let eventProps = [];
    let items = [];
    let idCount = 0;
    let showItems = false;
 
    function uid() { return idCount++; }
 
    function toggleItems() {
      showItems = !showItems;
      document.getElementById('toggleBox').classList.toggle('on', showItems);
      document.getElementById('itemsArea').style.display = showItems ? 'block' : 'none';
      if (showItems && items.length === 0) addItem();
      render();
    }
 
    function addProp() {
      eventProps.push({ id: uid(), key: '', type: 'string', value: '' });
      renderEventProps();
      render();
    }
 
    function removeProp(id) {
      eventProps = eventProps.filter(p => p.id !== id);
      renderEventProps();
      render();
    }
 
    function updateProp(id, field, val) {
      const p = eventProps.find(p => p.id === id);
      if (p) { p[field] = val; render(); }
    }
 
    function addItem() {
      items.push({ id: uid(), props: [{ id: uid(), key: '', type: 'string', value: '' }] });
      renderItems();
      render();
    }
 
    function removeItem(id) {
      items = items.filter(i => i.id !== id);
      renderItems();
      render();
    }
 
    function addItemProp(itemId) {
      const item = items.find(i => i.id === itemId);
      if (item) { item.props.push({ id: uid(), key: '', type: 'string', value: '' }); }
      renderItems();
      render();
    }
 
    function removeItemProp(itemId, propId) {
      const item = items.find(i => i.id === itemId);
      if (item) { item.props = item.props.filter(p => p.id !== propId); }
      renderItems();
      render();
    }
 
    function updateItemProp(itemId, propId, field, val) {
      const item = items.find(i => i.id === itemId);
      if (item) { const p = item.props.find(p => p.id === propId); if (p) p[field] = val; }
      render();
    }
 
    function esc(s) {
      return String(s)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;');
    }
 
    function ph(t) {
      return { string: 'texto', number: '0', boolean: 'true/false' }[t] || '';
    }
 
    function renderEventProps() {
      document.getElementById('eventProps').innerHTML = eventProps.map(p => `
        <div class="prop-row">
          <input class="finput" placeholder="chave" value="${esc(p.key)}" oninput="updateProp(${p.id},'key',this.value)" />
          <select class="fselect" onchange="updateProp(${p.id},'type',this.value)">
            ${['string','number','boolean'].map(t => `<option value="${t}"${p.type===t?' selected':''}>${t}</option>`).join('')}
          </select>
          <input class="finput" placeholder="${ph(p.type)}" value="${esc(p.value)}" oninput="updateProp(${p.id},'value',this.value)" />
          <button class="rm-btn" onclick="removeProp(${p.id})">×</button>
        </div>
      `).join('');
    }
 
    function renderItems() {
      document.getElementById('itemsList').innerHTML = items.map((item, idx) => `
        <div class="item-card">
          <div class="item-card-header">
            <span class="item-label">item ${idx + 1}</span>
            <button class="rm-item-btn" onclick="removeItem(${item.id})">remover item</button>
          </div>
          <div class="col-labels">
            <span class="col-label">chave</span>
            <span class="col-label">tipo</span>
            <span class="col-label">valor</span>
            <span></span>
          </div>
          <div class="props-list">
            ${item.props.map(p => `
              <div class="prop-row">
                <input class="finput" placeholder="chave" value="${esc(p.key)}" oninput="updateItemProp(${item.id},${p.id},'key',this.value)" />
                <select class="fselect" onchange="updateItemProp(${item.id},${p.id},'type',this.value)">
                  ${['string','number','boolean'].map(t => `<option value="${t}"${p.type===t?' selected':''}>${t}</option>`).join('')}
                </select>
                <input class="finput" placeholder="${ph(p.type)}" value="${esc(p.value)}" oninput="updateItemProp(${item.id},${p.id},'value',this.value)" />
                <button class="rm-btn" onclick="removeItemProp(${item.id},${p.id})">×</button>
              </div>
            `).join('')}
          </div>
          <button class="add-btn" onclick="addItemProp(${item.id})">+ propriedade</button>
        </div>
      `).join('');
    }
 
    function castVal(type, raw) {
      const v = (raw || '').trim();
      if (!v) return type === 'string' ? '""' : 'null';
      if (type === 'number') return isNaN(Number(v)) ? `"${v}"` : v;
      if (type === 'boolean') return (v === 'true' || v === 'false') ? v : `"${v}"`;
      return `"${v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
    }
 
    function castReal(type, raw) {
      const v = (raw || '').trim();
      if (!v) return type === 'string' ? '' : null;
      if (type === 'number') return isNaN(Number(v)) ? v : Number(v);
      if (type === 'boolean') return v === 'true';
      return v;
    }
 
    function render() {
      const evtName = (document.getElementById('eventName').value || '').trim();
      const hasContent = evtName || eventProps.some(p => p.key.trim()) || (showItems && items.length > 0);
 
      if (!hasContent) {
        document.getElementById('codeBlock').textContent = '// preencha o nome do evento acima...';
        return;
      }
 
      const lines = [];
      lines.push('window.dataLayer = window.dataLayer || [];');
      lines.push('window.dataLayer.push({');
      lines.push(`  event: "${evtName || 'nome_do_evento'}",`);
 
      eventProps.forEach(p => {
        if (!p.key.trim()) return;
        lines.push(`  ${p.key}: ${castVal(p.type, p.value)},`);
      });
 
      if (showItems && items.length > 0) {
        lines.push('  items: [');
        items.forEach(item => {
          const valid = item.props.filter(p => p.key.trim());
          if (valid.length === 0) { lines.push('    {},'); return; }
          lines.push('    {');
          valid.forEach(p => {
            lines.push(`      ${p.key}: ${castVal(p.type, p.value)},`);
          });
          lines.push('    },');
        });
        lines.push('  ],');
      }
 
      lines.push('});');
      document.getElementById('codeBlock').textContent = lines.join('\n');
    }
 
    function copyCode() {
      const text = document.getElementById('codeBlock').textContent;
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copyBtn');
        btn.textContent = 'copiado!';
        btn.classList.add('ok');
        setTimeout(() => { btn.textContent = 'copiar código'; btn.classList.remove('ok'); }, 2000);
      });
    }
 
    function pushLayer() {
      const evtName = (document.getElementById('eventName').value || '').trim();
      const obj = { event: evtName || 'nome_do_evento' };
      eventProps.forEach(p => { if (p.key.trim()) obj[p.key] = castReal(p.type, p.value); });
      if (showItems && items.length > 0) {
        obj.items = items.map(item => {
          const o = {};
          item.props.forEach(p => { if (p.key.trim()) o[p.key] = castReal(p.type, p.value); });
          return o;
        });
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(obj);
      console.log('[dataLayer push]', JSON.stringify(obj, null, 2));
      const badge = document.getElementById('pushedBadge');
      badge.style.display = 'inline-block';
      setTimeout(() => badge.style.display = 'none', 2500);
    }
 
    addProp();
    render();