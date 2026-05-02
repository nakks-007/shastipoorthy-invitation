<div align="center">

# 🪔 Shastiabdha Poorthi Invitation Web App

[![Live Demo](https://img.shields.io/badge/Live%20Demo-🪔-blueviolet?style=for-the-badge&logo=github&logoColor=white)](https://nakks-007.github.io/shastipoorthy-invitation/)

> **A beautifully crafted digital invitation experience built with Angular, designed to celebrate a traditional milestone event with a modern, interactive touch.**

</div>

## ✨ **Overview**

This project is a premium digital invitation website created for:

🎉 **Shastiabdha Poorthi (60th Birthday Ceremony)**  
💛 **Swarna Mangalya Dharanam**

It combines **cultural elegance + modern UI/UX**, delivering an immersive experience for guests.

<div align="center">

![Demo Preview](https://via.placeholder.com/800x400/FF6B6B/FFFFFF?text=Shastiabdha+Poorthi+Invitation) <!-- Replace with actual screenshot -->

</div>

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
