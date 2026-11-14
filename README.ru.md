<p align="right">
  <b><code>🇷🇺 Русский</code></b> &nbsp;•&nbsp; <a href="README.md"><code>🇬🇧 English</code></a>
</p>

<!-- Header Banner -->
<div align="center">
  <img src="assets/banner-cyber.svg" width="100%" alt="Vagram Karapetyan" />
</div>

<br/>

> **Разработчик программных продуктов: браузерные расширения, асинхронные бэкенд-системы и автономные агентные пайплайны.**  
> Ереван, Армения 🇦🇲 • Студент РЭУ им. Г.В. Плеханова (Ереванский филиал).  
> Проектирую и создаю архитектуры с помощью автономных ИИ-агентов в **Google Antigravity** и **Claude Code**.

---

### 🛠 Проекты и инженерные кейсы

#### 🔮 [Prism Tabs](https://github.com/vagram-karapetyan/prism-tabs) — Интеллектуальный движок группировки вкладок для Chrome
* **Проблема:** Когнитивная перегрузка и падение производительности браузера при 80+ открытых вкладках во время исследовательской и продуктовой работы.
* **Архитектура:** Двухуровневая система (Dual-Engine) с минимальной нагрузкой на клиент:
  * Субмиллисекундные детерминированные эвристики для мгновенной группировки по доменам.
  * Локальная семантическая классификация через BYOK LLM для смысловой категоризации.
  * Строгая конфиденциальность: zero-telemetry, персистентное состояние хранится исключительно в локальном хранилище расширения.
* **Стек:** `TypeScript`, `Chrome Extensions (Manifest V3)`, `TailwindCSS`, `Web APIs`.

#### ⚔️ [Quest Forge](https://github.com/vagram-karapetyan/quest-forge) — Визуальный конструктор и движок нелинейных историй
* **Проблема:** Нелинейные сценарии и конечные автоматы (state machines) быстро теряют управляемость при описании текстом или в жёстких иерархических деревьях.
* **Архитектура:** Направленный ациклический граф (DAG) состояний:
  * Интерактивный редактор графов на чистом Vanilla JS (Canvas/DOM) без тяжёлых UI-фреймворков.
  * Асинхронное ядро на FastAPI для валидации состояний и мгновенного перехода по графу.
* **Стек:** `Python`, `FastAPI`, `Vanilla JavaScript`, `Canvas / DOM APIs`.

---

### 📦 Недавние репозитории

<!-- RECENT_REPOS:START -->
* [**prism-tabs**](https://github.com/vagram-karapetyan/prism-tabs) — Prism Tabs — A fast, privacy-first Chromium MV3 extension that eliminates tab overload through Dual-Engine grouping (instant offline Logic Mode + BYOK AI Meaning Mode). (`TypeScript` • ⭐ 1)
* [**quest-forge**](https://github.com/vagram-karapetyan/quest-forge) — Visual interactive story engine & node-based quest constructor built with FastAPI and Vanilla JS (`TypeScript` • ⭐ 1)
<!-- RECENT_REPOS:END -->

---

### ⚙️ Технический фокус

* 🤖 **Агентные системы:** Оркестрация автономных мультиагентных пайплайнов, архитектура промптов, интеграция tool-calling (**Google Antigravity**, **Claude Code**).
* 🌐 **Фронтенд и расширения:** TypeScript, JavaScript, Chrome Extensions (Manifest V3), Canvas / DOM APIs, HTML5 / CSS3.
* ⚡ **Бэкенд и инфраструктура:** Python, FastAPI, асинхронная архитектура, REST APIs, Git.

---

### ♟️ За пределами терминала

* ♟️ **Шахматы:** Активно играю в блиц и рапид на Lichess с **пиковым рейтингом ~2200**.
* 🎸 **Музыка:** Рок и метал.

---

### 📊 Активность

<p align="center">
  <img src="https://github-stats-extended.vercel.app/api?username=vagram-karapetyan&show_icons=true&hide_rank=true&card_width=355&title_color=58a6ff&icon_color=bc8cff&text_color=c9d1d9&bg_color=0d1117&border_color=30363d&hide_border=false" height="165" alt="GitHub Stats" />
  &nbsp;
  <img src="https://github-stats-extended.vercel.app/api/top-langs/?username=vagram-karapetyan&layout=compact&card_width=300&title_color=58a6ff&text_color=c9d1d9&bg_color=0d1117&border_color=30363d&hide_border=false" height="165" alt="Top Languages" />
</p>

---

### 📬 Связь и ссылки

<div align="center">
  <a href="mailto:vagr.karapetian@gmail.com"><img src="https://img.shields.io/badge/Email-vagr.karapetian%40gmail.com-161b22?style=flat-square&logo=gmail&logoColor=ea4335" alt="Email" /></a>
  &nbsp;
  <a href="https://github.com/vagram-karapetyan"><img src="https://img.shields.io/badge/GitHub-vagram--karapetyan-161b22?style=flat-square&logo=github&logoColor=f0f6fc" alt="GitHub" /></a>
  &nbsp;
  <a href="https://lichess.org"><img src="https://img.shields.io/badge/Lichess-Peak_2200-161b22?style=flat-square&logo=lichess&logoColor=00f0ff" alt="Lichess" /></a>
</div>
