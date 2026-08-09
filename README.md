# Lanchonete da Tia Dina 🍗

Site da Lanchonete da Tia Dina — salgados, lanchão, arroz com charque, maniçoba, caldos e comida caseira no Bairro Rio Verde, Parauapebas–PA.

## Funcionalidades

- **Cardápio completo** com filtros por categoria (salgados, pratos, caldos, bebidas, doces)
- **Botão "Pedir"** em cada item que abre o WhatsApp já com o pedido preenchido
- **Destaque do dia** que rotaciona sozinho conforme o dia da semana (a maniçoba aparece só no sábado!)
- **Faixa de status em tempo real** (ABERTO/FECHADO) e horários destacados conforme o dia atual
- **Menu mobile** com hambúrguer animado
- **Mapa ilustrado à mão** da esquina da Avenida Sol Poente com a Avenida Amazonas
- Botão de voltar ao topo, barra de progresso de rolagem e botão flutuante do WhatsApp
- Animações respeitam `prefers-reduced-motion` (acessibilidade)

## Como rodar localmente

Basta abrir o `lanchonete_da_tia.html` no navegador — o site é 100% estático, sem dependências.

Ou, se preferir um servidor local:

```bash
python -m http.server 8000
```

e acesse `http://localhost:8000`.

## Estrutura

```
sitedina/
├── lanchonete_da_tia.html   # página principal
├── lanchonete_da_tia.css    # estilos
├── lanchonete_da_tia.js     # lógica (cardápio, horários, animações)
└── imagens/                 # fotos dos produtos e da lanchonete
```

## Publicação

Hospedado no GitHub Pages:
https://jjuniordev18.github.io/Site-Dina-Lanchonete/

## Contato

Peça no WhatsApp: **(91) 98041-3076**

Feito com carinho, na chapa. 😉
