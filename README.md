<div align="center">

# 🪔 Shastiabdha Poorthi Invitation Web App

[![Live Demo](https://img.shields.io/badge/Live%20Demo-🪔-blueviolet?style=for-the-badge&logo=github&logoColor=white)](https://nakks-007.github.io/shastipoorthy-invitation/)

> **A beautifully crafted digital invitation experience built with Angular, designed to celebrate a traditional milestone event with a modern, interactive touch.**

</div>

## ✨ **Overview**

This project is a premium digital invitation website created for:

🎉 **Shastiabdha Poorthi (60th Birthday Ceremony)**  
💛 **Swarna Maangalya Dhaaranam**

It combines **cultural elegance + modern UI/UX**, delivering an immersive experience for guests.

## 🚀 **Features**

### 🎨 **UI / UX**
- ✅ Responsive mobile-first design
- ✅ Elegant glassmorphism + gradient theme
- ✅ Smooth animations & transitions
- ✅ Floating avatars & premium layout

### 📅 **Event Experience**
- 🗓️ Event details & program view
- 📍 Location navigation
- ⏳ Days-to-go countdown
- 🖼️ Memories gallery with loader

### 📲 **Smart Actions**
- 📞 One-tap call
- 💬 WhatsApp integration
- 📄 Download invitation (PNG)

### ⚡ **Performance**
- ⚙️ Optimized asset loading
- ⚡ Lazy rendering of images
- ✨ Loader experience for better UX

## 🛠️ **Tech Stack**

| Frontend | Styling | Language | Hosting | CI/CD |
|----------|---------|----------|---------|-------|
| ![Angular](https://img.shields.io/badge/Angular-Standalone-blue?style=flat&logo=angular&logoColor=white) | ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwindcss&logoColor=white) | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=flat&logo=github-pages&logoColor=white) | ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=github-actions&logoColor=white) |

## 🔁 **CI/CD (Auto Deployment)**

This project uses **GitHub Actions** for automated deployment.

### 🔄 **Workflow**
**Every push to main branch:**
1. 🏗️ Builds Angular app
2. 📦 Generates version metadata
3. 🚀 Deploys to GitHub Pages

**👉 Ensures:**
- ✅ Zero manual deployment
- ✅ Always up-to-date live site

## 🏷️ **Versioning System (Git Tags)**

This project follows a **Git Tag based versioning strategy**.

```bash
🔖 Example
git tag -a v1.0.1 -m "UI improvements & version tracking"
git push origin v1.0.1
```

### ⚙️ **Build Integration**
During build:
- **APP_VERSION** - `v1.0.1`
- **APP_COMMIT** - `abc123`
- **BUILD_DATE** - `...`

Injected into Angular app (`version.ts`) & displayed in UI (Footer)

## 📦 **Version Script**

**Custom script:**
```bash
npm run version:generate
```

**This script:**
- 📖 Reads latest Git tag
- 🔍 Reads commit hash
- ✨ Generates:
```typescript
export const APP_VERSION = 'v1.0.1';
export const APP_COMMIT = 'abc123';
export const BUILD_DATE = '...';
```

## 🧪 **Local Development**

```bash
🔧 Install dependencies
npm install

▶️ Run locally
ng serve
# Open: http://localhost:4200/
```

```bash
🏗️ Build
npm run build -- --base-href "/shastipoorthy-invitation/"
```

## 📁 **Project Structure**
src/
├── app/
│ ├── home/
│ ├── memories/
│ ├── location/
│ ├── footer/
│ └── navbar/
├── assets/
├── environments/
│ └── version.ts ← auto-generated
scripts/
└── version.js ← version generator

text

## 🎯 **Key Highlights**

| ✅ Production-level UI polish | ✅ CI/CD automated deployment |
|------------------------------|------------------------------|
| ✅ Git tag based version tracking | ✅ Real-world event use-case |
| ✅ Mobile-first UX | |

## 💡 **Future Enhancements**

- ⏳ Live countdown timer (hours/minutes)
- 📸 Lazy loading with skeleton UI
- 🔔 RSVP / attendance tracking
- 🌐 Multi-language support

## 👤 **Author**

**D. B. Naga Muruga**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/naga-muruga/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nakks-007)
[![Portfolio](https://img.shields.io/badge/Portfolio-00D4AA?style=for-the-badge&logo=netlify&logoColor=white)](https://naga-muruga-portfolio.netlify.app/)

## 🪔 **Acknowledgement**

> Built with love to celebrate a **once-in-a-lifetime milestone**, blending **tradition with technology**.

<div align="center">

**⭐ If you like this project**  
Give it a **star ⭐** and **share the love!**

</div>