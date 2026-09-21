# Frequently Asked Questions (FAQ) ❓

Answers to common questions regarding the **SCRAPIT (Kabadiwala Connect)** platform architecture, anti-fraud algorithms, and circular economy mechanics.

---

### 1. How does the Anti-Cheating Digital Weighing Scale work?
Traditional scrap collectors frequently employ manipulated spring scales that under-weigh items by 20%–30%. SCRAPIT introduces:
* Bluetooth (BLE) wireless pairing with certified digital load cells.
* Real-time anti-tamper cryptographic weight slips issued directly to the customer's phone.
* Instant UPI payouts matching statutory CPCB benchmark rates.

---

### 2. How does the Computer Vision Engine handle cluttered scrap piles?
Single-pass object detection fails when small electronic parts (like RAM sticks, mice, or cables) are piled together. Our backend applies **quadrant-tiling inference**:
* It divides the incoming image into 4 overlapping quadrants (20% overlap buffer).
* Each tile undergoes inference alongside a full-frame pass.
* Global Non-Maximum Suppression (NMS) stitches and deduplicates detections with an IoU threshold of 0.45.

---

### 3. How does this benefit informal Kabadiwalas rather than replacing them?
SCRAPIT is designed to **empower and organize** informal kabadiwalas rather than displace them:
* Kabadiwalas receive nearby verified pickup requests with pre-calculated volume and optimal vehicle recommendations.
* Instead of selling unsegregated scrap at bottom-dollar prices to exploitative middlemen, they can aggregate e-waste into verified Lots and sell directly to authorized smelters at premium rates.
* Vernacular voice readouts in Hindi and Marathi ensure low-literacy field usability.

---

### 4. What is Extended Producer Responsibility (EPR)?
Under the E-Waste (Management) Rules 2022, electronic manufacturers (brands) are legally mandated to recycle a specified percentage of the equipment they sell. SCRAPIT's Recycler portal automatically generates verifiable CPCB mass-balance audit certificates, enabling authorized smelters to trade statutory EPR recycling credits directly to registered brands.
