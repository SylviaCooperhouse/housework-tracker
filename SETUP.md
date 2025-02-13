# Housework Tracker - Setup Guide

## 📌 Overview
This guide provides step-by-step instructions to set up and run the **Housework Tracker** app using React Native and Expo. It covers installation, environment setup, and common troubleshooting steps.

---

## **1️⃣ Install Node.js and NVM**
### **🔹 Step 1: Install NVM (Node Version Manager)**
1. Download **nvm-setup.exe** from [NVM for Windows](https://github.com/coreybutler/nvm-windows/releases).
2. Run the installer and follow the setup instructions.
3. Restart your terminal (PowerShell or Command Prompt).

### **🔹 Step 2: Install Node.js**
Run the following commands:
```powershell
nvm install 20  # Install Node.js 20 (LTS)
nvm use 20      # Use Node.js 20
```
Check the installation:
```powershell
node -v  # Should return v20.x.x
```

---

## **2️⃣ Clone the Repository**
Run the following command to clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/housework-tracker.git
cd housework-tracker
```

---

## **3️⃣ Install Dependencies**
### **🔹 Step 1: Clean Up Old Dependencies (if needed)**
If you previously installed packages with an older Node.js version, remove them:
```powershell
rm -rf node_modules package-lock.json
npm cache clean --force
```

### **🔹 Step 2: Install Dependencies**
```bash
npm install
```

---

## **4️⃣ Run the App with Expo**
### **🔹 Step 1: Start Expo**
Run:
```bash
npx expo start --clear
```
This will open the **Expo Developer Tools** in your browser.

### **🔹 Step 2: Test on Your Device**
1. Install **Expo Go** on your phone from the App Store/Google Play.
2. Scan the QR code in Expo Developer Tools to run the app.

---

## **5️⃣ Common Issues & Fixes**
### **🚨 `os.availableParallelism is not a function` Error**
✅ **Solution:** Update Node.js to **v20** and reinstall dependencies:
```powershell
nvm install 20
nvm use 20
rm -rf node_modules package-lock.json
npm install
npx expo start --clear
```

### **🚨 `metro` or `expo` command not found**
✅ **Solution:** Ensure dependencies are installed:
```powershell
npm install -g expo-cli
npx expo start --clear
```

### **🚨 `Error: ENOSPC: System limit for number of file watchers reached`**
✅ **Solution:** Increase the file watchers limit (Linux/macOS only):
```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

---

## 🚀 **Next Steps**
Now that your environment is ready, we can start coding! 🎉 Let me know if you want to:
- Add new features
- Improve UI design
- Enhance database functionality

Let’s build this app! 🚀

