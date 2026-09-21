# System Architecture & Technical Specifications 🏗️

This document outlines the architectural blueprints, data models, state flows, and machine learning pipeline powering the **SCRAPIT (Kabadiwala Connect)** platform.

---

## 1. High-Level Topology

SCRAPIT implements a decoupled client-server architecture designed for high availability, low client latency, and offline-resilient operations in field settings:

```
+-------------------------------------------------------------------------+
|                        CLIENT TIER (React 18 + Vite)                    |
|  - Role Switcher & Dynamic Navigation                                    |
|  - Progressive Web App (PWA) field caching & LocalStorage layer         |
|  - Web Speech API vernacualar voice synthesis (EN, HI, MR)              |
|  - Canvas confetti & accessible UI modals                               |
+-------------------------------------------------------------------------+
                                    |
                    HTTPS / REST API (Multipart Payload)
                                    v
+-------------------------------------------------------------------------+
|                   AI & INFERENCE TIER (FastAPI ASGI Server)             |
|  - Asynchronous Model Lifespan Management                               |
|  - Quadrant-Tiled Ultralytics YOLOv8m Inference Engine                 |
|  - Non-Maximum Suppression (OpenCV cv2.dnn.NMSBoxes)                    |
|  - Domain Class Weight & Fair-Value Payout Mapper                       |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|                   COMPLIANCE & TRACEABILITY LAYER                       |
|  - CPCB E-Waste (Management) Rules 2022 Mass-Balance Auditor            |
|  - Extended Producer Responsibility (EPR) Certificate Generator        |
|  - Anti-Tamper Digital Tare Validation Algorithm                        |
+-------------------------------------------------------------------------+
```

---

## 2. Frontend State Machine & Role Navigation

The frontend is orchestrated via a central `AppContext` containing reactive state for all three circular economy roles:

1. **Citizen Context**:
   - Order history, pickup request queue, and live tracking status.
   - Real-time address autocomplete & photo-based scrap volume estimation.
   - Eco-impact metrics (cumulative $CO_2$ mitigation and landfill diversion).

2. **Kabadiwala Context**:
   - Geolocation-indexed pickup dispatch board.
   - Vehicle sizing advice algorithm (Bicycle vs. E-Loader vs. Mini-Truck).
   - Digital anti-tamper weighing slip calculation and instant UPI payment simulator.
   - Scrap segregation and E-Waste Lot packaging engine.

3. **Recycler Context**:
   - Bulk E-Waste Lot marketplace with live bidding.
   - Precious/Base metal yield extraction estimator (Au, Cu, Al, Fe).
   - CPCB-compliant statutory EPR certificate issuance.

---

## 3. Computer Vision Inference Pipeline (`ewaste_detct.py`)

To resolve small and densely overlapping electronic components without losing resolution:

1. **Full-Frame Downsampling**: An initial pass detects large appliances (monitors, desktop towers).
2. **Quadrant-Tiling (20% Overlap)**: Slices the high-res frame into four quadrants with horizontal and vertical overlap buffers.
3. **Class Normalization**: Maps standard COCO detection classes into domain-specific e-waste items:
   - `cell phone` $\rightarrow$ `Mobile Phone`
   - `laptop` $\rightarrow$ `Laptop`
   - `tv`, `monitor` $\rightarrow$ `Monitor/TV`
   - `keyboard`, `mouse` $\rightarrow$ `Peripherals`
4. **Global NMS Suppression**: Overlapping bounding boxes across tiles are merged with IoU threshold 0.45.
5. **Empirical Weight Estimation**: Applies lower, median, and upper standard bounds based on empirical hardware disassembly benchmarks.
