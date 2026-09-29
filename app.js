(() => {
  'use strict';
  const data = window.MONITORIA;
  if (!data) return;
  const safeUrl = value => { try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch { return null; } };
  const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text) node.textContent = text; return node; };
  document.title = `${data.nome} • Aprender é melhor junto`;
  const repo = safeUrl(data.repositorio);
  if (repo) document.querySelector('#repository-link').href = `${repo.replace(/\/$/, '')}`;
  document.querySelector('.demo-label').hidden = !data.demonstracao;
  const agenda = safeUrl(data.agendaUrl);
  if (agenda) {
    const link = document.querySelector('#booking-link');
    link.href = agenda; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Escolher meu horário ↗';
    document.querySelector('#booking-status').textContent = 'A reserva abre no Google Agenda em uma nova aba. Confira o fuso horário antes de confirmar.';
  }
  const dialog = document.querySelector('#post-dialog');
  let opener;
  function showPost(post, button) {
    opener = button;
    document.querySelector('#dialog-category').textContent = post.categoria;
    document.querySelector('#dialog-title').textContent = post.titulo;
    document.querySelector('#dialog-body').textContent = post.detalhe;
    const link = document.querySelector('#dialog-link'); const url = safeUrl(post.link);
    link.hidden = !url; link.removeAttribute('href');
    if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    dialog.showModal();
  }
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => opener?.focus());
  function renderPosts(filter = 'Todos') {
    const container = document.querySelector('#publicacoes'); container.replaceChildren();
    const posts = data.publicacoes.filter(post => filter === 'Todos' || post.categoria === filter);
    posts.forEach(post => {
      const card = el('article', 'post'); const art = el('div', `post-art ${['git', 'material', 'aviso'].includes(post.visual) ? post.visual : 'aviso'}`);
      art.setAttribute('aria-hidden', 'true'); art.append(el('span', 'art-label', post.etiqueta));
      const graphic = el('div', 'art-graphic', post.visual === 'git' ? '{ ↗ }' : post.visual === 'material' ? 'Aa ↗' : 'olá!');
      art.append(graphic, el('span', 'art-foot', post.visual === 'git' ? 'PEQUENOS COMMITS. GRANDES IDEIAS.' : post.visual === 'material' ? 'CONHECIMENTO PARA LEVAR COM VOCÊ.' : 'TEM ESPAÇO PARA VOCÊ AQUI.'));
      const body = el('div', 'post-body'); body.append(el('span', 'category', post.categoria), el('h3', '', post.titulo), el('p', '', post.resumo));
      const bottom = el('div', 'post-bottom'); bottom.append(el('span', '', post.rodape));
      const button = el('button', 'post-open', '↗'); button.type = 'button'; button.setAttribute('aria-label', `Ler publicação: ${post.titulo}`); button.addEventListener('click', () => showPost(post, button)); bottom.append(button);
      body.append(bottom); card.append(art, body); container.append(card);
    });
    if (!posts.length) container.append(el('p', 'empty', 'Ainda não há publicações nesta categoria.'));
  }
  function select(group, button) { group.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); }); }
  const filters = document.querySelectorAll('[data-filter]'); filters.forEach(button => button.addEventListener('click', () => { select(filters, button); renderPosts(button.dataset.filter); }));
  function renderPeople(team = 'atuais') {
    const container = document.querySelector('#pessoas'); container.replaceChildren();
    const people = data[team] || [];
    if (!people.length) {
      const empty = el('div', 'people-empty'); empty.append(el('span', 'empty-icon', team === 'atuais' ? '☺' : '✳'));
      const copy = el('div'); copy.append(el('h3', '', team === 'atuais' ? 'Em breve, os rostos dessa troca.' : 'Toda história tem quem abriu o caminho.'), el('p', '', team === 'atuais' ? 'Estamos organizando a equipe. Os nomes, disciplinas e períodos de atuação vão aparecer por aqui.' : 'Este espaço vai guardar os nomes e as contribuições de quem já fez parte da monitoria.')); empty.append(copy); container.append(empty); return;
    }
    people.forEach(person => { const card = el('article', 'person'); card.append(el('span', 'avatar', person.nome.split(/\s+/).filter(Boolean).map(n => n[0]).slice(0, 2).join('')), el('h3', '', person.nome), el('p', '', person.area), el('span', 'category', person.periodo)); const link = safeUrl(person.link); if (link) { const a = el('a', 'text-link', 'Conheça ↗'); a.href = link; card.append(a); } container.append(card); });
  }
  const teams = document.querySelectorAll('[data-team]'); teams.forEach(button => button.addEventListener('click', () => { select(teams, button); renderPeople(button.dataset.team); }));
  renderPosts(); renderPeople();
})();

