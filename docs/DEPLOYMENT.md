# Production Deployment Guide 🚀

This guide outlines instructions for deploying the **SCRAPIT (Kabadiwala Connect)** frontend and AI backend services to cloud environments.

---

## 1. Frontend Deployment (Vercel)

The single-page React 18 application is optimized for zero-config deployment on Vercel:

### Step-by-Step
1. Connect your GitHub repository (`niyamjain11/Scrap_it_`) to your [Vercel Dashboard](https://vercel.com).
2. Configure Build & Output Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. Environment Variables:
   - Set `VITE_API_URL` to your production FastAPI backend URL (e.g. `https://api.scrapit.example.com/api/estimate`).

---

## 2. Backend Deployment (Render / AWS EC2 / Docker)

The FastAPI inference service requires Python 3.9+ and CPU or CUDA runtime:

### Docker Containerization Example

```dockerfile
FROM python:3.10-slim

WORKDIR /app

# Install system dependencies for OpenCV
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .
COPY ewaste_detct.py ..
COPY yolov8m.pt .

EXPOSE 8000

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Health Check Endpoint
Once deployed, configure your load balancer or container health monitor to check:
* **HTTP `GET`**: `/api/health`
* **Expected Response**: `{"status": "ok", "model_loaded": true}`
