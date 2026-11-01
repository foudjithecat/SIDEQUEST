# SIDEQUEST v2.0 · Find something worth doing

A small, free iPhone-installable web app for the moments when you're bored and want an idea that actually sounds enjoyable. No account, paid server, API, or programming needed.

## What's new in v2

- **All 120 activities have been rewritten**. This version focuses on simple everyday ideas and personal interests: photography, video editing, music, local outings, friends, creativity, curiosity, and small projects.
- Six more grounded categories: Go out, Create, With friends, Take it easy, Learn, and Switch it up.
- More natural writing throughout the interface: less RPG-style quest language.
- Points and levels are **off by default**. If you like them, go to Settings → Points and levels and check Show. The app still tracks accomplishments and milestones without them.
- Preserved features: time/inside/outside/solo/friends filters, random idea generator, favorites, done history, milestones, backups, offline service worker, custom Home Screen icon.
- All activities are optional. Skip anything that doesn't feel right or practical.

### What happens to your progress from v1?

The activities are entirely different now. To avoid marking a new activity as complete when you actually completed an unrelated old one, **v2 starts with a new local save**. It does not delete v1 storage on your device. However, previous v1 favorites/history do not automatically appear in v2 and v1 backups are not importable into v2. If you want an archive of your earlier progress, export it from the old app **before updating**. This is a one-time content update; v2 saves work normally thereafter.

## Updating your existing GitHub Pages app

If you've already uploaded SIDEQUEST v1 to GitHub, **do not create a new repository**.

1. Download `SIDEQUEST_PWA_v2.zip` and extract it on your computer.
2. Open your existing `sidequest` repository at github.com and click **Add file → Upload files**.
3. Drag the files inside the extracted folder onto GitHub. Upload `index.html`, `app.js`, `quests.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, `README.md`, and the `assets` folder.
4. GitHub should offer to replace files with the same names. Click **Commit changes**.
5. Open your existing GitHub Pages link in Safari while connected to the internet. Refresh the page, then close and reopen the Home Screen app if needed. An older offline copy may need a second reload to update.

Your GitHub Pages URL stays exactly the same, usually `https://USERNAME.github.io/sidequest/`.

## Installing from scratch (free)

1. Download and extract `SIDEQUEST_PWA_v2.zip`.
2. Sign in at <https://github.com/new>, create a repository called `sidequest`, and choose **Public**.
3. On the new repository click **uploading an existing file** (or **Add file → Upload files**). Upload **everything inside** the extracted app folder, not the ZIP itself. `index.html` must be at the repository root and icons must remain in `assets/`.
4. Click **Commit changes**.
5. Go to the repository **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)`, and **Save**.
6. Wait for GitHub to show your **Visit site** link on the Pages settings page and open it in iPhone **Safari**.
7. In Safari, choose **Share → Add to Home Screen**, enable **Open as Web App** if offered, and tap **Add**.
8. Open SIDEQUEST once while online so the files can be cached. Afterwards try opening it in Airplane Mode to test offline support.

## Test locally on Windows (optional)

Open a Command Prompt in the extracted folder (in File Explorer's address bar, type `cmd`), then run `py -m http.server 8000` if Python is installed. Visit `http://localhost:8000` on your computer. The app's full offline features require HTTP localhost or HTTPS. Opening index.html directly may not support offline features.

## Privacy, backups & notes

- Saved ideas, completed activities, filters and optional points stay in this browser/device using `localStorage`; the app has no account or cloud sync.
- Use **Settings → Export** to save a JSON backup and **Settings → Import** to restore a v2 backup.
- Removing site/app data can erase progress. Back it up before switching phones.
- Activities are suggestions, not obligations. Check weather, local opening hours, and your own circumstances before outdoor plans.
- The website's code is public if hosted with free GitHub Pages, but your on-device activity history is not uploaded to GitHub.

## Files

- `index.html`: page entry, metadata, loading references
- `app.js`: app interface, filtering, favorites, history, and saved settings
- `quests.js`: all 120 rewritten activities
- `styles.css`: mobile interface
- `manifest.webmanifest`: app manifest, Home Screen launch settings
- `sw.js`: offline service worker cache (version bumped for this update)
- `assets/`: app icons
