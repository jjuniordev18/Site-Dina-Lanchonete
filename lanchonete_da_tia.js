/* ═══════════ LANCHONETE DA TIA DINA · JS da casa ═══════════ */
(function(){
  "use strict";
  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── CARDÁPIO (dados) ─────────────────────────────── */
  const MENU = [
    // Salgados
    { cat:"salgados", img:"coxinha1.jpg",              nome:"Coxinha de Frango e Carne", desc:"Massa macia por dentro, crocante por fora, recheio generoso de frango com carne bem temperado.", preco:"R$ 5,00", tag:"mais pedido" },
    { cat:"salgados", img:"pizza.jpg",                 nome:"Mini Pizza",               desc:"Massa fininha, molho da casa, queijo derretendo e orégano. Quentinha, direto do forno.", preco:"R$ 5,00", tag:"novo" },
    { cat:"salgados", img:"enroladodesalsicha.jpg",    nome:"Enrolado de Salsicha",     desc:"Massa fofinha enrolando a salsicha, assada até dourar. Clássico de balcão.", preco:"R$ 5,00", tag:"" },
    { cat:"salgados", img:"tortasalgada.jpg",          nome:"Torta Salgada",            desc:"Fatia de torta recheada (frango ou carne), massa leve e úmida. Feita no dia.", preco:"R$ 5,00", tag:"feito no dia" },
    { cat:"salgados", img:"lanchao.jpg",               nome:"Lanchão da Tia Dina",      desc:"O sanduíche que dá nome à fila: pão macio, carne, queijo, salada e o molho da casa.", preco:"R$ 5,00", tag:"clássico" },
    // Pratos da Tia
    { cat:"pratos", img:"lasanha.jpg",                 nome:"Lasanha da Tia Dina",      desc:"Fatia generosa de lasanha à bolonhesa, com muito queijo gratinado por cima.", preco:"R$ 12,00", tag:"fatia generosa", two:false },
    { cat:"pratos", img:"arrozcomcharque.avif",        nome:"Arroz com Charque",        desc:"Arroz soltinho com charque desfiada e acebolada, finalizado com cheiro-verde.", preco:"P R$ 12 · G R$ 22", tag:"carro-chefe", two:true },
    { cat:"pratos", img:"arrozcomgalinha.png",         nome:"Arroz com Galinha",        desc:"Galinha cozida devagar e arroz puxado no caldo, com tempero da Tia Dina por cima.", preco:"P R$ 12 · G R$ 22", tag:"", two:true },
    { cat:"pratos", img:"vatapa.jpg",                  nome:"Vatapá",                   desc:"Vatapá cremoso no ponto certo, com arroz branco. Receita de família, do Pará.", preco:"P R$ 12 · G R$ 22", tag:"", two:true },
    { cat:"pratos", img:"maniçoba.jpg",                nome:"Maniçoba",                 desc:"A famosa ’feijoada de folha’ do Pará, com arroz e farofa. Sábado é o dia dela.", preco:"P R$ 15 · G R$ 25", tag:"pará raiz", two:true },
    { cat:"pratos", img:"strogonoff.jpg",              nome:"Strogonoff da Tia Dina",   desc:"Frango ou carne em cubos no molho cremoso da casa, servido com arroz e batata palha crocante por cima.", preco:"P R$ 12 · G R$ 22", tag:"novo", two:true },
    // Caldos & Mingau
    { cat:"caldos", img:"caldodecarne.jpg",            nome:"Caldos da Tia Dina",       desc:"Frango ou carne, batido grosso e com cheiro-verde. Copo ou pote grande. Cura qualquer dia.", preco:"R$ 5 · R$ 10", tag:"", two:true },
    { cat:"caldos", img:"Mingau-de-Milho.jpg",         nome:"Mingau de Milho",          desc:"Cremoso e quentinho, com canela por cima. Copo ou pote grande. Conforto em forma de colher.", preco:"R$ 5 · R$ 10", tag:"feito no dia", two:true },
    // Bebidas
    { cat:"bebidas", img:"suco.jpg",                   nome:"Sucos Variados",           desc:"Frutas da região batidas na hora: cupuaçu, acerola, maracujá e mais. Copo 500ml.", preco:"R$ 6,00", tag:"novo" },
    { cat:"bebidas", img:"refrigerante.webp",          nome:"Refrigerantes",            desc:"Lata 350ml bem gelada ou garrafa 600ml. Cola, guaraná, laranja e limão.", preco:"R$ 5 · R$ 8", tag:"", two:true },
    { cat:"bebidas", img:"energetico.webp",            nome:"Energéticos",              desc:"Lata gelada pra aguentar o dia correr. As melhores marcas do mercado.", preco:"R$ 10,00", tag:"" },
    { cat:"bebidas", img:"agua.jpg",                   nome:"Águas (com e sem gás)",    desc:"Garrafinha 500ml, geladinha ou natural. Pra acompanhar qualquer pedido.", preco:"R$ 3,00", tag:"" },
    // Doces & Leves
    { cat:"doces", img:"saladadefrutas.webp",          nome:"Salada de Frutas",         desc:"Frutas da feira picadas na hora com calda leve. Copo ou pote grande. Refresca o calor de Parauapebas.", preco:"R$ 5 · R$ 10", tag:"", two:true }
  ];

  const TAG_CLASS = {
    "mais pedido":"b-hot", "novo":"b-new", "apimentado 🌶":"b-hot", "veggie":"",
    "feito no dia":"b-new", "fatia generosa":"b-new", "carro-chefe":"b-hot",
    "clássico":"", "pará raiz":"b-hot"
  };

  const grid = document.getElementById("menuGrid");

  function cardHTML(item, i){
    const badge = item.tag ? `<span class="badge ${TAG_CLASS[item.tag] || ""}">${item.tag}</span>` : "";
    const priceClass = item.two ? "price two" : "price";
    const src = item.img ? "imagens/" + item.img : `https://picsum.photos/seed/${item.seed}/600/450`;
    const waLink = `https://wa.me/5591980413076?text=${encodeURIComponent("Oi, Tia Dina! Quero pedir: " + item.nome + ".")}`;
    return `
    <article class="card" style="--d:${RM ? 0 : i * 45}ms">
      <div class="card-photo">
        <img src="${src}" alt="${item.nome}: ${item.desc}" loading="lazy" width="600" height="450">
        ${badge}
      </div>
      <div class="card-body">
        <h3>${item.nome}</h3>
        <p>${item.desc}</p>
        <div class="card-foot">
          <span class="${priceClass}">${item.preco}</span>
          <a class="pedir" href="${waLink}" target="_blank" rel="noopener">Pedir</a>
        </div>
      </div>
    </article>`;
  }

  function renderMenu(cat){
    const items = cat === "todos" ? MENU : MENU.filter(m => m.cat === cat);
    grid.innerHTML = items.map(cardHTML).join("");
  }

  const filterBtns = document.querySelectorAll(".filters button");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
      const cat = btn.dataset.filter;
      if (RM) { renderMenu(cat); return; }
      grid.classList.add("is-switching");
      setTimeout(() => {
        renderMenu(cat);
        requestAnimationFrame(() => grid.classList.remove("is-switching"));
      }, 220);
    });
  });
  renderMenu("todos");

  /* ── DESTAQUE DO DIA (rotativo por dia da semana) ──
     Aberto: seg a qui · sábado. Fechado: sexta e domingo.
     No dia fechado mostramos o destaque do próximo dia. */
  const DESTAQUES = {
    0: { // domingo (fechado) → prévia de segunda
      script:"amanhã a casa reabre",
      titulo:"Segunda do Arroz com Charque",
      img:"arrozcomcharque.avif",
      alt:"Arroz soltinho com charque desfiada e acebolada",
      txt:"Domingo a casa tá fechada, mas a segunda já vem com o carro-chefe: arroz com charque no capricho, do jeito da Tia Dina.",
      old:null, new:"P R$ 12 · G R$ 22",
      stamp:"te esperando amanhã"
    },
    1: { // segunda
      script:"destaque de hoje",
      titulo:"Segunda do Arroz com Charque",
      img:"arrozcomcharque.avif",
      alt:"Arroz soltinho com charque desfiada e acebolada",
      txt:"Arroz soltinho com charque desfiada e acebolada, finalizado com cheiro-verde. O carro-chefe da casa, todo dia na panela.",
      old:null, new:"P R$ 12 · G R$ 22",
      stamp:"carro-chefe"
    },
    2: { // terça
      script:"destaque de hoje",
      titulo:"Terça do Strogonoff da Tia",
      img:"strogonoff.jpg",
      alt:"Strogonoff cremoso servido com arroz e batata palha",
      txt:"Frango ou carne em cubos no molho cremoso da casa, com arroz e batata palha crocante por cima. O novo queridinho.",
      old:null, new:"P R$ 12 · G R$ 22",
      stamp:"novo na casa"
    },
    3: { // quarta
      script:"destaque de hoje",
      titulo:"Quarta do Caldo",
      img:"caldodecarne.jpg",
      alt:"Copo de caldo de carne quentinho, com cheiro-verde",
      txt:"Frango ou carne batido grosso, com cheiro-verde e pimenta à parte. Copo ou pote grande — cura qualquer dia feio.",
      old:null, new:"R$ 5 · R$ 10",
      stamp:"esquenta o dia"
    },
    4: { // quinta
      script:"destaque de hoje",
      titulo:"Quinta da Lasanha",
      img:"lasanha.jpg",
      alt:"Fatia de lasanha à bolonhesa com queijo gratinado",
      txt:"Fatia generosa de lasanha à bolonhesa, com muito queijo gratinado por cima. A fatia mais esperada da semana.",
      old:null, new:"R$ 12,00",
      stamp:"fatia generosa"
    },
    5: { // sexta (fechado) → prévia de sábado
      script:"amanhã é sábado",
      titulo:"Sábado da Maniçoba 🌿",
      img:"maniçoba.jpg",
      alt:"Panela de maniçoba fumegando, servida com arroz e farofa",
      txt:"A casa tá fechada hoje, mas amanhã é o dia da maniçoba na panela grande, do jeito paraense. Garanta o seu antes das 17h!",
      old:"de R$ 25,00", new:"R$ 22,00",
      stamp:"só amanhã"
    },
    6: { // sábado
      script:"destaque de hoje",
      titulo:"Sábado da Maniçoba 🌿",
      img:"maniçoba.jpg",
      alt:"Panela de maniçoba fumegando, servida com arroz e farofa",
      txt:"Maniçoba feita na panela grande, do jeito paraense, com farinha d’água, arroz e pimenta à parte. Prato grande de R$ 25 por R$ 22 — só no sábado, enquanto durar a panela (sábado fecha às 17h!).",
      old:"de R$ 25,00", new:"R$ 22,00",
      stamp:"só no sábado"
    }
  };

  const dImg    = document.getElementById("destaqueImg");
  const dScript = document.getElementById("destaqueScript");
  const dTitulo = document.getElementById("destaqueTitulo");
  const dTxt    = document.getElementById("destaqueTxt");
  const dPrices = document.getElementById("destaquePrices");
  const dStamp  = document.getElementById("destaqueStamp");

  function renderDestaque(){
    const d = DESTAQUES[new Date().getDay()];
    dImg.src = "imagens/" + d.img;
    dImg.alt = d.alt;
    dScript.textContent = d.script;
    dTitulo.textContent = d.titulo;
    dTxt.textContent = d.txt;
    dPrices.innerHTML = (d.old ? `<span class="old">${d.old}</span>` : "") + `<span class="new">${d.new}</span>`;
    dStamp.textContent = d.stamp;
  }
  renderDestaque();

  /* ── STATUS ABERTO/FECHADO em tempo real ────────────
     Aberto: seg, ter, qua e qui das 8h às 22h;
             sábado das 8h às 17h.
     Fechado: sexta-feira e domingo.                    */
  const strip = document.getElementById("statusStrip");
  const statusText = document.getElementById("statusText");
  const DIAS = ["domingo","segunda","terça","quarta","quinta","sexta","sábado"];
  const OPEN_DAYS = new Set([1,2,3,4,6]); // seg, ter, qua, qui, sáb
  const closeHour = d => (d === 6 ? 17 : 22);

  function updateStatus(){
    const now = new Date();
    const day = now.getDay();
    const h = now.getHours() + now.getMinutes() / 60;
    const open = OPEN_DAYS.has(day) && h >= 8 && h < closeHour(day);
    if (open) {
      strip.classList.remove("closed");
      statusText.textContent = `ABERTO AGORA · fecha às ${closeHour(day)}h`;
    } else {
      strip.classList.add("closed");
      let txt;
      if (OPEN_DAYS.has(day) && h < 8) {
        txt = "FECHADO · abre hoje às 8h";
      } else {
        let d = day;
        for (let i = 0; i < 8; i++) {
          d = (d + 1) % 7;
          if (OPEN_DAYS.has(d)) {
            txt = i === 0 ? "FECHADO · abre amanhã às 8h" : `FECHADO · abre ${DIAS[d]} às 8h`;
            break;
          }
        }
      }
      statusText.textContent = txt;
    }
  }
  updateStatus();
  setInterval(updateStatus, 30000);

  /* ── Destaque do dia atual na tabela de horários ─── */
  const today = new Date().getDay();
  const row = document.querySelector(`#hoursTable tr[data-day="${today}"]`);
  if (row) row.classList.add("today");

  /* ── Scroll reveal ───────────────────────────────── */
  const revealEls = document.querySelectorAll(".reveal");
  if (RM || !("IntersectionObserver" in window)) {
    revealEls.forEach(el => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: .12 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ── WhatsApp flutuante, voltar ao topo e progresso de rolagem ── */
  const waFloat = document.getElementById("waFloat");
  const backTop = document.getElementById("backTop");
  const progress = document.getElementById("scrollProgress");
  function onScroll(){
    const show = window.scrollY > 260;
    waFloat.classList.toggle("show", show);
    backTop.classList.toggle("show", show);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  backTop.addEventListener("click", () => {
    window.scrollTo({ top:0, behavior: RM ? "auto" : "smooth" });
  });

  /* ── Menu móvel (hambúrguer) ──────────────────── */
  const hamb = document.getElementById("hamb");
  const drawer = document.getElementById("drawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  function setMenu(open){
    hamb.setAttribute("aria-expanded", String(open));
    drawer.classList.toggle("open", open);
    drawerBackdrop.hidden = !open;
    document.body.classList.toggle("menu-open", open);
  }
  hamb.addEventListener("click", () => setMenu(hamb.getAttribute("aria-expanded") !== "true"));
  drawerBackdrop.addEventListener("click", () => setMenu(false));
  drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  /* ── Título do hero: letras subindo em cascata ──
     (com menos movimento, o texto fica estático)   */
  if (!RM) {
    document.querySelectorAll(".hero h1 > span.t1, .hero h1 > span.t2").forEach(block => {
      const words = block.textContent.trim().split(/\s+/);
      let idx = 0;
      block.innerHTML = words.map(w =>
        w.split("").map(ch =>
          `<span class="l" style="animation-delay:${(idx++ * 0.04 + 0.3).toFixed(3)}s">${ch}</span>`
        ).join("")
      ).join('<span class="sp"></span>');
    });
  }
})();
