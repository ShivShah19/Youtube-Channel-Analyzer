# 📊 YouTube Channel Analyzer

Analyze any YouTube channel's growth with easy-to-understand graphs and statistics — powered by the YouTube Data API.

---

## 🚀 Project Overview

YouTube Channel Analyzer is a web app where users can paste any YouTube channel URL and instantly view key statistics such as:
- 📈 Total views over time
- 🎥 Number of videos uploaded each year
- 💬 Total and average comments per year
- 📊 Total & Average views received annually.

All the data is beautifully visualized using interactive graphs to help understand a channel's growth journey.

---

## 🔥 Key Features

- Input any **YouTube channel link**
- Extract and display:
  - Profile picture, description and their country.
  - Total Subscribers and Views
  - Year-wise Video Upload Statistics
  - Total & Views by year
  - Total & Average Comments by year
- Graphs showing:
  - Views Growth Over Time
  - Video Upload Trend
- Responsive and clean UI
- Built purely with **React.js** and **YouTube Data API** — no AI models used.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TailwindCSS, Recharts
- **API**: YouTube Data API v3
- **Libraries**: Axios, React Router, Recharts.

---

## 🧠 How It Works

1. User pastes a YouTube Channel URL.
2. App extracts the **Channel ID** from the URL.
3. App makes requests to the YouTube API:
   - Fetches videos, views, comments
   - Calculates averages
4. Displays data in interactive graphs and statistic cards.

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ShivShah19/Youtube-Channel-Analyzer.git
   cd Youtube-Channel-Analyzer 
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your YouTube API key:
   ```
   VITE_YT_API=your_api_key_here
   ```

4. Run the app:
   ```bash
   npm run dev
   ```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

# 🌟

_If you like this project, give it a ⭐️ and share it!_
