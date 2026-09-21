# Changelog

All notable changes to the **SCRAPIT (Kabadiwala Connect)** platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-09-21

### Added
- **Architecture & Technical Design**: Detailed high-level topology, state machine, and tiling inference documentation (`ARCHITECTURE.md`).
- **E-Waste Taxonomy & Recovery**: CPCB statutory categories, benchmark yields per metric tonne, and hazard ratings (`docs/EWASTE_TAXONOMY.md`).
- **Production Deployment Guide**: Vercel frontend build specs and Docker/FastAPI backend setup (`docs/DEPLOYMENT.md`).
- **Frequently Asked Questions**: Evaluator and stakeholder FAQs (`docs/FAQ.md`).
- **Developer & CI Tooling**:
  - CodeQL static security analysis workflow (`.github/workflows/codeql.yml`).
  - Automated Dependabot dependency vulnerability tracking (`.github/dependabot.yml`).
  - Backend automated unit test suite (`backend/test_api.py`).
  - Standardized `.editorconfig` and `.gitattributes` for cross-platform consistency.
- **Shared Utilities**:
  - Indian Rupee (`formatINR`), weight (`formatWeight`), and carbon offset (`calculateCO2Avoided`) formatters (`src/utils/formatters.js`).
  - Centralized platform role and order status enums (`src/utils/constants.js`).

---

## [1.0.0] - 2026-09-19

### Added
- **Citizen Portal**:
  - Doorstep scrap & e-waste pickup request booking with live address autocompletion.
  - Interactive e-waste anti-cheating benchmark rate card.
  - Real-time order tracking and digital anti-tamper weighing slip generation.
  - Eco-impact scorecard tracking carbon offset ($CO_2$) and landfill diversion metrics.
- **Kabadiwala (Aggregator) Dashboard**:
  - Geolocation-based live job dispatch feed with vehicle recommendation (Bicycle / E-Loader / Mini-Truck).
  - Doorstep digital weighing calculator with instant UPI QR simulation.
  - B2B scrap segregation & E-Waste Bulk Lot creation tool.
- **Authorized Recycler Marketplace**:
  - Bulk e-waste lot bidding and direct purchase engine.
  - Industrial metal extraction yield estimator (Au, Cu, Al, Fe).
  - CPCB Extended Producer Responsibility (EPR) green compliance certificate generator.
- **AI Computer Vision Engine**:
  - YOLOv8m quadrant-tiling inference pipeline for detecting dense, small electronics.
  - Empirical scrap weight bracket calculation and fair value INR payout estimation.
- **Multi-Lingual Voice Support**:
  - Vernacular voice synthesis in English, Hindi, and Marathi powered by Web Speech API.
- **Responsive Architecture**:
  - React 18 SPA built with Vite and Tailwind CSS.
  - FastAPI Python ASGI backend.
