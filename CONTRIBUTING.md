# Contributing to SCRAPIT (Kabadiwala Connect) ♻️

Thank you for your interest in contributing to **SCRAPIT**! We welcome contributions that improve transparency, accessibility, and efficiency across the circular e-waste and scrap management ecosystem.

---

## 🛠️ Getting Started

1. **Fork the Repository**
   Create a personal fork of the repository on GitHub.

2. **Clone your Fork**
   ```bash
   git clone https://github.com/<your-username>/Scrap_it_.git
   cd Scrap_it_
   ```

3. **Install Dependencies**
   ```bash
   # Frontend
   npm install

   # Backend (optional, for AI vision features)
   cd backend
   pip install -r requirements.txt
   cd ..
   ```

4. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## 💻 Development Workflow

* **Frontend Server**: Run `npm run dev` to start the local Vite development server at `http://localhost:5173`.
* **Backend Server**: Run `uvicorn server:app --host 0.0.0.0 --port 8000 --reload` inside the `backend` directory.
* **Testing Builds**: Ensure production build compiles without errors before opening a Pull Request:
  ```bash
  npm run build
  ```

---

## 🎨 Code Style & Conventions

* **Commit Messages**: Follow standard conventional commits format (e.g., `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
* **Styling**: Use Tailwind CSS utility classes and Lucide React icons.
* **Accessibility**: Maintain accessible contrast ratios, touch target sizes, and screen-reader/voice friendly descriptions.

---

## 📬 Submitting a Pull Request

1. Push your changes to your feature branch on GitHub.
2. Open a Pull Request pointing to the `main` branch of `niyamjain11/Scrap_it_`.
3. Provide a clear description of changes, including screenshots or videos for UI updates.
4. Ensure all automated checks and builds pass.

Thank you for helping build a cleaner, circular economy!
