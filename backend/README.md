# SCRAPIT Backend Service 🧠

High-performance AI computer vision and estimation microservice powered by **FastAPI**, **Ultralytics YOLOv8**, and **OpenCV**.

---

## 📋 Features

1. **Quadrant-Tiling Inference**: Slices high-resolution user photos into 4 overlapping quadrants (20% overlap) alongside a full-frame pass to reliably detect small, dense electronic scrap (e.g., RAM chips, mouse, keyboards, printed circuit boards).
2. **Global Non-Maximum Suppression (NMS)**: Merges overlapping bounding boxes across quadrants using OpenCV's `cv2.dnn.NMSBoxes` with an IoU threshold of 0.45.
3. **Domain Class Mapping**: Maps standard COCO object classes into the specialized E-Waste catalog (`Laptop`, `Monitor/TV`, `Mobile Phone`, `Peripherals`, `Appliances`).
4. **Transparent Benchmark Economics**: Calculates empirical weight brackets (min, avg, max kg) and estimated INR payouts based on CPCB benchmark scrap rates.

---

## 🚀 Quick Setup

```bash
# 1. Navigate to backend directory
cd backend

# 2. (Optional) Create and activate virtual environment
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Start the server
uvicorn server:app --host 0.0.0.0 --port 8000 --reload
```

---

## 📡 API Endpoints

### `GET /api/health`
Verifies backend service status and whether the YOLO model is loaded into memory.

### `POST /api/estimate`
Accepts a multipart image upload and returns detected items, bounding boxes, empirical weights, and fair value payouts.

---

## ⚙️ Model Weights
The service utilizes `yolov8m.pt` (medium YOLOv8 model) for optimal speed-accuracy tradeoff. If no local weights file is found, Ultralytics downloads it automatically on first run.
