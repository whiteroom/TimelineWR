# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server with hot reload (opens browser)
npm test           # run all Jest tests
npm run build      # build production artifacts
npm run dist       # clean + build
npm run clean      # delete dist/
```

**Run a single test file:**
```bash
npm test -- --testPathPattern="CSV"
```

**Run tests in watch mode:**
```bash
npm test -- --watch
```

Node version: v23.3.0 (see `.nvmrc`)

## Architecture

TimelineJS3 is a browser-side JavaScript library (no backend) that renders interactive multimedia timelines. It is distributed primarily as an iframe embed from `timeline.knightlab.com`, but can also be imported as an ES6 module (`@knight-lab/timelinejs`) or instantiated directly.

**Entry point:** `src/js/index.js` exports `Timeline`, `exportJSON`, `parseGoogleSpreadsheetURL`, and `lookupMediaType`.

**Build outputs:**
- `dist/js/timeline.js` — bundled library (global `TL`)
- `dist/css/timeline.css` — extracted styles
- `dist/js/locale/*.json` — i18n locale files
- `dist/embed/*` — iframe embed templates

**Webpack configs:** `webpack.common.js` (shared), `webpack.dev.js` (dev server + style-loader), `webpack.prod.js` (MiniCssExtractPlugin for CSS extraction).

### Key Source Modules (`src/js/`)

| Directory | Role |
|---|---|
| `timeline/` | Primary `Timeline` class — constructor takes `(elem, data, options)` |
| `core/` | Data loading (`ConfigFactory.js`), events, utilities, CSV parsing |
| `timenav/` | Timeline scrubber/navigation UI |
| `slider/` | `StorySlider.js` — the story/content display pane |
| `media/` | Media type detection and embed handling (YouTube, Vimeo, images, maps, etc.) |
| `date/` | `TLDate.js`, `DateUtil.js` — date parsing and formatting |
| `language/` | i18n support and locale loading |
| `dom/` | DOM utilities |
| `ui/` | UI components (MenuBar, Message, Draggable) |
| `animation/` | Easing and animation utilities |

### Data Flow

1. `Timeline` constructor receives a data URL or config object
2. `ConfigFactory` fetches and normalizes data (supports Google Sheets, JSON, CSV)
3. Parsed data becomes a `TimelineConfig` with events and optional title/era slides
4. `TimeNav` renders the navigation track; `StorySlider` renders slide content
5. Media embeds are resolved via the `MediaType` system in `src/js/media/`

### Testing

Tests live in `src/js/**/__tests__/*.test.js`. Jest uses the jsdom environment and enforces UTC timezone for consistent date tests.
