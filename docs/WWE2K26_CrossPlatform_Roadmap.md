# WWE 2K26 myGM Companion App
## Complete Cross-Platform Roadmap: Zero to iOS + Android
### Updated Guide — Thunkable Edition

---

## What Changed From the Previous Plan

The previous guide recommended **Kodular** as the build tool. Kodular is excellent but Android-only. Now that you're targeting both iOS and Android, **Thunkable** replaces Kodular as the primary build tool throughout. Everything else — the Google Sheets database, the feature set, the match rating formula, the legal/IP strategy, the community marketing plan — remains exactly the same.

Here is what the iOS addition costs in total:

| Cost | Amount | When |
|------|--------|------|
| Google Play Developer account | $25 one-time | Before publishing Android |
| Apple Developer Program | $99/year | Before publishing iOS |
| Thunkable Start plan | $59/month | Pay for 1–2 months only, then cancel |
| **Total** | **$183–$242** | Spread across ~3 months |

You do not need to pay everything upfront. The Thunkable subscription is the only recurring cost and only needs to be active when you are building and publishing — not while your app sits live on the stores.

---

## Understanding Thunkable: What It Is and Why It Works Here

Thunkable is a drag-and-drop app builder that produces **native apps for both Android and iOS from a single project**. You design your screens once, and Thunkable compiles separate Android (APK/AAB) and iOS (IPA) files from the same source. There is no coding involved — logic is built visually using "block" connectors similar to MIT App Inventor but with a more modern interface.

**Free plan capabilities:** Build unlimited projects, test live on your phone via the Thunkable Live companion app, connect Google Sheets as a data source, use all built-in components. The free plan is fully functional for development and testing.

**What requires the paid plan ($59/month):** Publishing your APK to Google Play and publishing your IPA to the App Store. You only need to be on the paid plan during the weeks you are actually submitting to the stores. Once submitted, you can cancel — your apps remain live indefinitely. You only need to resubscribe when pushing a significant update that requires a new store submission.

**Thunkable vs. the alternatives for cross-platform:**

| Tool | Free build/test | iOS publish | Android publish | Beginner-friendly | Notes |
|------|----------------|-------------|-----------------|-------------------|-------|
| **Thunkable** | ✅ | Paid ($59/mo) | Paid ($59/mo) | ✅ Excellent | Best beginner cross-platform option |
| FlutterFlow | ✅ | Paid ($39/mo) | Paid ($39/mo) | ⚠️ Steeper curve | More powerful but harder to learn |
| Adalo | ✅ | Paid ($50/mo) | Paid ($50/mo) | ✅ Good | Weaker data handling for lists |
| Glide | ✅ | ❌ PWA only | ❌ PWA only | ✅ Excellent | No native app, no store listing |
| Kodular | ✅ | ❌ Android only | ✅ Free | ✅ Excellent | Cannot do iOS at all |
| React Native / Expo | ✅ | Free (with Mac) | Free | ❌ Requires coding | Not suitable for complete beginner |

---

## Phase 1: Plan Everything Before Touching Any Tool (Days 1–5)

This phase costs nothing and saves weeks of rebuilding. Do not skip it.

### Step 1.1 — Paper wireframe every screen

Draw each screen as a phone-shaped rectangle on paper. Sketch where buttons, lists, search bars, and labels sit. Draw arrows between screens showing how navigation works. Do this on paper first — not in any digital tool. The physical act of sketching forces you to make decisions before you are inside the builder where it is easy to get distracted.

Your app needs exactly five screens in v1.0:

**Screen 1 — Home/Dashboard**
A welcome screen showing quick stats: how many superstars are on your roster, how many active rivalries, and the current week number. Acts as a hub with navigation buttons to each other screen.

**Screen 2 — Roster Tracker**
A scrollable, filterable list of all superstars on the user's brand. Each card shows name, overall rating, class, role (Face/Heel), and current stamina. Filters at the top: Brand dropdown, Class dropdown, search bar. Tap a superstar card to see full details and edit their stats.

**Screen 3 — Match Rating Calculator**
Two or more spinner dropdowns to select superstars from your roster. A match type selector (Singles, Tag Team, Triple Threat, Ladder, Hell in a Cell, etc.). A rivalry status toggle (Active rivalry / No rivalry). A "Calculate" button that outputs an estimated star rating (0–5) with a breakdown showing which factors boosted or reduced the score.

**Screen 4 — Rivalry Planner**
A list of active rivalries, each showing the two superstars involved, current heat level (1–4), weeks active, and target event (e.g., WrestleMania). An "Add Rivalry" button. Tap a rivalry to escalate the heat level, mark it resolved, or delete it.

**Screen 5 — Settings & About**
App version number, a prominent disclaimer (not affiliated with WWE or 2K), a link to your privacy policy, a link to your Ko-fi support page, and a toggle for any preferences (dark mode in v2.0).

### Step 1.2 — Define what is NOT in v1.0

Cut these features now and add them in later versions:

- Show card builder / drama curve optimizer
- Season planner (all 50 weeks mapped out)
- Fan score tracker
- Budget calculator
- Push notifications
- Cloud sync between devices
- Dark mode
- Head-to-head comparison tool
- Export to PDF/spreadsheet

This discipline is called building an MVP — Minimum Viable Product. A focused app that does four things excellently will get better reviews and more downloads than an app that tries to do everything but does it poorly.

### Step 1.3 — Set up your Google Sheet database

Go to sheets.google.com and create a new spreadsheet called "WWE2K26_Roster_DB". Set up these columns exactly as shown — column order matters for how Thunkable reads the data:

| Column | Header name | Example value |
|--------|-------------|---------------|
| A | Name | Seth Rollins |
| B | OVR | 94 |
| C | Class | Striker |
| D | Brand | Raw |
| E | Role | Face |
| F | Popularity | 88 |
| G | Stamina | 100 |
| H | RingLevel | Icon |
| I | PromoSkill | 4 |
| J | IsChampion | No |
| K | Gender | Male |
| L | Notes | Strong main event |

Add 15–20 sample superstars across different brands and classes. This test data is what you will use while building — real game data gets populated by users later. Share the sheet with "Anyone with the link can view" to allow Thunkable to read it.

---

## Phase 2: Learn Thunkable in One Focused Week (Days 6–14)

### Step 2.1 — Set up your accounts (Day 6)

Create a free Thunkable account at thunkable.com using your Google account. Install the **Thunkable Live** app on your Android phone from Google Play. This is the companion app that lets you test your project in real time on your phone while you edit in the browser — no need to export an APK every time you want to see a change.

### Step 2.2 — Complete the official beginner tutorials (Days 6–7)

Thunkable's YouTube channel (youtube.com/@Thunkable) has a "Getting Started" playlist that covers the interface in about 90 minutes total. Watch these in order:

1. "Thunkable Beginner Tutorial — Build Your First App" (covers the Designer and Blocks tabs)
2. "How to Connect Google Sheets to Thunkable" (critical for your app — watch this twice)
3. "How to Use Lists in Thunkable" (covers displaying multiple items — essential for the roster screen)

Do not just watch — follow along by building the example apps in your own Thunkable account simultaneously.

### Step 2.3 — Build two practice projects (Days 8–10)

**Practice Project 1 — A Simple Calculator**
Build an app with two number inputs, four operation buttons (+, -, ×, ÷), and a result label. This teaches you: TextInput components, Button click events, math blocks (add, subtract, multiply, divide), and Label output. Takes about 2–3 hours.

**Practice Project 2 — A Google Sheets List Reader**
Build an app that reads your roster Google Sheet and displays each superstar's name and OVR in a list. Add a search bar that filters the list as you type. This teaches you: Data Viewer List component, Google Sheets data source connection, filter logic blocks. This is essentially a prototype of your Roster screen. Takes about 3–4 hours.

These two practice projects together cover approximately 80% of the technical skills you need for the real app.

### Step 2.4 — Key Thunkable concepts to understand before building

**The Designer tab** is where you visually arrange components on a screen — drag buttons, labels, lists, and inputs into place. Think of it like a WYSIWYG editor.

**The Blocks tab** is where you define what happens when things occur — "when Button1 is clicked, do this calculation, then update Label1." Blocks are visual logic pieces that snap together like puzzle pieces. No typing code.

**Data Sources** are how Thunkable connects to external data. You will use Google Sheets as your data source. Once connected, your sheet's rows become objects your app can read, filter, and display.

**Local storage vs. cloud storage:** For rivalries and user-entered data, use Thunkable's built-in **Stored Variables** (device-level local storage — simple, free, no setup) for v1.0. For future versions where users might want cloud sync across devices, Thunkable integrates with Firebase (Google's free database — 1GB storage, 10GB/month transfer on the free tier).

**Common beginner mistakes to avoid:**
- Not testing on a real device after every small change (always keep Thunkable Live open on your phone)
- Building all screens at once instead of completing one screen fully before moving to the next
- Forgetting to rename components (leave defaults like "Button1" and you will confuse yourself within hours)
- Trying to make the app look perfect before it works — function first, aesthetics second

---

## Phase 3: Build the MVP Screen by Screen (Weeks 3–5)

Subscribe to Thunkable Start ($59) at the beginning of Week 3. You need it to be active when you publish in Week 6, and paying from Week 3 gives you a buffer. If you finish early, you may only need one month total.

Build screens in this exact order. Completing one screen fully before starting the next prevents the common trap of having five half-built screens that none work.

### Step 3.1 — Roster Tracker screen (Week 3, ~12 hours)

**Connect Google Sheets:**
In Thunkable's Data tab, add a new data source → Google Sheets → sign in with your Google account → select your WWE2K26_Roster_DB sheet. Thunkable will read the column headers automatically.

**Build the list:**
Add a **Data Viewer List** component to your screen. Set its data source to your Google Sheet. Map the fields: title → Name column, description → OVR + Class columns. The Data Viewer List will automatically populate with all rows from your sheet.

**Add the search bar:**
Add a TextInput component above the list. In the Blocks tab: "When TextInput text changes → filter the Data Viewer List where Name contains TextInput.text." Thunkable has a built-in filter block for Data Viewer Lists — this is a three-block connection.

**Add brand and class filters:**
Add two Dropdown components. Populate them with hardcoded options (Raw, SmackDown, NXT, Free Agent / Striker, Powerhouse, High-Flyer, Technician, Specialist). In Blocks: "When Dropdown value changes → filter the list where Brand equals Dropdown1.value AND Class equals Dropdown2.value." Combine with the search filter using AND logic.

**Add a detail screen:**
Create a new screen called "SuperstarDetail." In the roster list, add a "When row is clicked → navigate to SuperstarDetail, passing the superstar's data as a parameter." On the detail screen, display all columns from that row in readable labels. Add an "Edit" button that opens text inputs pre-filled with the current values, allowing users to update their own stamina or morale tracking.

### Step 3.2 — Match Rating Calculator screen (Week 4, Days 1–3, ~8 hours)

**Build the superstar selector:**
Add two Dropdown components labeled "Superstar 1" and "Superstar 2." Populate them dynamically from your Google Sheet's Name column using a "Get all values from column" block connected to an App Starts event. This ensures the dropdowns always reflect the current roster.

**Build the match type selector:**
Add a Dropdown with hardcoded options: Singles, Tag Team, Triple Threat, Fatal 4-Way, Ladder, Tables, Extreme Rules, Hell in a Cell, Steel Cage. Each type has a modifier value you will use in the formula.

**Build the rivalry toggle:**
Add a Switch component labeled "Active Rivalry?" A toggle is simpler than a dropdown for a true/false value.

**Build the formula in Blocks:**
When the Calculate button is clicked:
1. Get OVR of Superstar 1 from the Google Sheet (look up by name)
2. Get OVR of Superstar 2 from the Google Sheet
3. Calculate base score: (OVR1 + OVR2) ÷ 2
4. Apply match type modifier (Singles = ×1.0, Ladder = ×1.15, Hell in a Cell = ×1.25, Tag = ×0.9)
5. Apply rivalry bonus: if Switch is ON, add 8 points
6. Apply role bonus: if one is Face and one is Heel (check Role column), add 5 points
7. Convert to star rating: divide by 20, clamp between 1 and 5
8. Display result in a large Label as "⭐⭐⭐⭐ (4.2 Stars)"

Also display a breakdown: "Popularity: +X | Match Type: +X | Rivalry: +8 | Role Bonus: +5" so users understand what drove the score. This transparency is what makes the calculator genuinely useful rather than just a black box.

### Step 3.3 — Rivalry Planner screen (Week 4, Days 4–5, ~6 hours)

**Store data locally using Stored Variables:**
Thunkable's Stored Variables persist between app sessions on the same device. Store rivalries as a list of objects, each containing: SuperstarA (text), SuperstarB (text), HeatLevel (number 1–4), WeeksActive (number), TargetEvent (text).

**Build the rivalry list:**
Use a ListView or Data Viewer List populated from your stored variable. Each item shows "SuperstarA vs SuperstarB — Heat Level X — Week Y."

**Build the Add Rivalry form:**
A button opens a new screen with two Dropdown menus (populated from your Google Sheet roster), a number input for starting heat level, a text input for target event, and a Save button. On save, append the new rivalry object to your stored list and navigate back.

**Build heat level escalation:**
Tapping a rivalry in the list opens a detail view with an "Escalate Heat" button (increases HeatLevel by 1, max 4), a "Mark Resolved" button (removes from list), and a weeks counter that users can manually increment each week.

### Step 3.4 — Home Dashboard screen (Week 5, Day 1, ~3 hours)

Now that the data exists, build the dashboard. Display:
- Total superstars in the roster (count of Google Sheet rows)
- Active rivalries count (length of your stored rivalries list)
- Number of rivalries at Heat Level 4 (those need to be resolved soon — flag in red)
- A "Quick Calculate" shortcut button to the Calculator screen

This screen should load fast and give a useful snapshot at a glance.

### Step 3.5 — Settings & About screen + UI polish (Week 5, Days 2–4, ~6 hours)

**Settings screen content:**
- App name and version (e.g., "Ring Planner v1.0")
- Legal disclaimer (see exact wording in the Legal section below)
- Privacy policy link (opens in browser)
- Support link (Ko-fi or email)
- "Clear all data" button with a confirmation dialog (resets stored rivalries)

**UI polish — apply consistently across all screens:**
- Choose one colour palette and stick to it. Wrestling apps tend to use dark backgrounds (#1a1a2e or #0d0d0d) with a high-contrast accent colour (red #e63946 or gold #f4a261). Canva's colour palette generator is free.
- Use one font throughout. Thunkable supports Google Fonts — Roboto or Inter both look clean and professional.
- Add a consistent header bar on every screen showing the app name and a back button where needed.
- Ensure all buttons have adequate tap target size (minimum 44×44 points — Thunkable's default button height is fine).

**Test on both platforms before subscribing:**
Use Thunkable Live on Android to test the Android version. For iOS testing, install Thunkable Live from the App Store on any iPhone (your own, a friend's, or a family member's — they do not need a developer account). Test every screen, every button, every filter on both platforms at this stage. Fix all issues before paying for the subscription.

---

## Phase 4: Publishing to Google Play (Week 6)

### Step 4.1 — Register your Google Play Developer account

Go to play.google.com/console and sign in with your Google account. Complete the registration form — you will need to verify your identity with a government-issued ID and pay the $25 fee via credit or debit card. Enable 2-step verification on your Google account first (required). Account activation takes up to 48 hours.

### Step 4.2 — Build your Android AAB file

In Thunkable, go to your project → Publish → Android → Download AAB. This generates an Android App Bundle file — the format Google Play requires for all new apps since 2021. The build takes a few minutes. Download it to your computer.

### Step 4.3 — Create your store assets (do these while the AAB builds)

All free tools:

- **App icon:** 512×512px PNG with no transparency. Create in Canva (free tier). Use your app's colour scheme and a simple icon (a wrestling ring, a star rating icon, or a clipboard). Avoid any WWE logos or championship belt imagery.
- **Feature graphic:** 1024×500px PNG. A simple banner with your app name and a phone mockup. Canva has free phone mockup templates.
- **Screenshots:** Minimum 2, maximum 8. Take screenshots via Thunkable Live on your Android phone (press volume down + power button). Recommended: Roster screen, Calculator screen with a result showing, Rivalry Planner screen. Add simple text callouts in Canva.
- **Short description:** 80 characters maximum. Example: "Plan your myGM season — roster tracker, match calculator & rivalry planner."
- **Full description:** 4,000 characters maximum. Cover: what the app does, who it's for, key features, and the legal disclaimer. Write it as a fan talking to fans.

### Step 4.4 — The 12-tester closed testing requirement

**This is the most commonly missed step for new developers.** Since 2024, Google requires all new personal developer accounts to run a closed test with at least **12 opted-in testers for 14 consecutive days** before you can publish to production. You cannot skip or rush this — the 14-day clock only starts once 12 testers have actively opted in.

**How to recruit 12 testers:**
- Post in r/WWEGames: "Building a myGM companion app — looking for beta testers. Free app, Android only for now. DM me to join."
- Post in r/AndroidGaming and r/SideProject
- Post in the Official WWE 2K Community Discord
- Ask friends, family, and anyone in your network with an Android phone
- r/TestersCommunity and r/Betatests are mutual-testing communities specifically for this — developers help each other hit the 12-tester requirement
- Aim for 20–25 invites to account for people who sign up but never actually opt in

In Play Console: create a closed testing track → generate a shareable opt-in link → send it to your testers. They click the link, join the test, install the app, and Google starts counting. After 14 days with 12+ active testers, a button appears in Play Console to request production access. Google typically grants it within 1–3 days.

### Step 4.5 — Complete required Play Console sections

Before you can go live, these sections must all be marked complete in Play Console:

- **App content:** Content rating questionnaire (IARC — free, takes 5 minutes, expect "Everyone" rating for a planning tool), target audience and content settings, data safety form
- **Store listing:** App name, descriptions, screenshots, feature graphic, app icon, contact details
- **Pricing and distribution:** Set as Free. Select countries (start with all countries). Confirm it is not primarily directed at children
- **Data safety form:** Disclose what data your app collects. For v1.0 with no login and only local storage: select that you do not collect or share user data. If you add AdMob later, you must update this to disclose ad network data collection.

### Step 4.6 — Submit and wait

Upload your AAB to the production track. Submit for review. Initial reviews typically take **1–7 days**. Most rejections happen for one of three reasons: trademark issues in the app name/description, a broken or missing privacy policy URL, or a crash on first launch. If rejected, Play Console will tell you exactly why — fix it and resubmit.

---

## Phase 5: Publishing to iOS on the App Store (Week 7)

This phase is more complex than Google Play. Plan 2–3 full sessions of 2–3 hours each. You will need access to your friend's Mac for approximately 2–3 hours total, spread across 1–2 sessions.

### Step 5.1 — Register for the Apple Developer Program (do this in Week 5)

Go to developer.apple.com/programs and enroll. You need an Apple ID, a valid payment method, and identity verification. The $99/year fee is charged immediately. **Apple's approval process takes 24–48 hours** for individuals, so start this before you are ready to publish to avoid delays. Keep the receipt — this is a recurring annual fee you must pay every year to keep your iOS app live.

### Step 5.2 — Set up App Store Connect

App Store Connect (appstoreconnect.apple.com) is Apple's equivalent of Google Play Console. Once your developer account is active, log in and create a new App record:

- **Bundle ID:** This must match what Thunkable uses for your app. In Thunkable's project settings under iOS, note the Bundle ID (typically something like com.yourname.ringplanner). Enter this exact string in App Store Connect.
- **App name:** Your app's name as it will appear on the App Store (max 30 characters)
- **Primary language:** English
- **SKU:** Any unique identifier for your records (e.g., RINGPLANNER001)

### Step 5.3 — Build your iOS IPA in Thunkable

In Thunkable: Publish → iOS → you will be prompted to enter your Apple Developer credentials. Thunkable builds the IPA in its cloud (no Mac required for this step) and can upload it directly to App Store Connect via the App Store Connect API. Enter your Apple ID and an App Store Connect API key (generated in App Store Connect under Users and Access → Keys).

**This is where most beginners get stuck** — the API key setup. Here is the exact process:
1. In App Store Connect → Users and Access → Integrations → App Store Connect API
2. Click the + button to generate a new key
3. Give it "Developer" access level
4. Download the .p8 file (you can only download this once — save it)
5. Note the Key ID and Issuer ID shown on the same page
6. Enter all three values (Key ID, Issuer ID, and the .p8 file contents) in Thunkable's iOS publish settings

Thunkable then uploads your build to App Store Connect automatically. The build appears in App Store Connect within 15–30 minutes.

### Step 5.4 — What you need your friend's Mac for

**Your friend's Mac is needed for one specific task:** creating and managing your iOS distribution certificate and provisioning profile. Thunkable handles the build in the cloud, but Apple's signing process requires a valid distribution certificate that must be generated and managed through Xcode on a Mac.

**Session 1 on your friend's Mac (~1 hour):**
1. Install Xcode from the App Store (free, ~15GB — do this in advance so it's ready when you arrive)
2. Open Xcode → Preferences → Accounts → Add your Apple ID
3. Xcode will automatically generate your iOS Distribution certificate
4. Go to developer.apple.com → Certificates, IDs & Profiles → verify the certificate appears

That is the entire Mac-required step for the initial setup. Once the certificate exists in your Apple Developer account, Thunkable can use it for all future builds from any computer.

**If you cannot access your friend's Mac:**

Option A — **Use a cloud Mac service.** MacStadium (macstadium.com) and MacInCloud (macincloud.com) offer hourly Mac rentals. MacStadium's on-demand Mac mini starts at approximately $1/hour. You need the Mac for about 1 hour total. Cost: ~$1–$3.

Option B — **Use Codemagic** (codemagic.io). Codemagic is a cloud CI/CD service that handles iOS signing and submission entirely in the cloud. Their free tier includes 500 build minutes/month — more than enough for occasional app submissions. Thunkable can integrate with Codemagic, effectively replacing the need for a physical Mac entirely.

Option C — **GitHub Actions with macOS runners.** If your app is on GitHub, GitHub Actions provides free macOS runner minutes (currently 2,000 minutes/month on the free tier) that can run Xcode commands. This is more technical to set up but costs nothing.

For a complete beginner, **Option B (Codemagic) is the best Mac workaround** — it is free for your usage level, well-documented, and purpose-built for exactly this problem.

### Step 5.5 — Complete your App Store listing

In App Store Connect → your app → App Store tab:

- **Screenshots:** iPhone 6.5" screenshots are required (you can generate these from Thunkable Live on any iPhone, or use a simulator). You also need 6.7" screenshots (iPhone 15 Pro Max size). These can be identical — just export at the right dimensions. Canva's "iPhone mockup" templates let you place your screenshots into device frames for a professional look.
- **App preview video:** Optional but highly recommended. A 15–30 second screen recording showing the app in use increases conversion significantly. Record on your phone and trim in your phone's default video editor.
- **Description:** Similar to your Google Play description but written for an Apple audience. Apple's tone tends to be slightly more polished. Include all the same disclaimer language.
- **Keywords:** 100 characters of comma-separated search keywords. Research what players search for: "WWE planner, myGM tracker, wrestling roster, 2K companion, match planner, WWE draft."
- **Support URL:** Link to your privacy policy page or a simple website. Required by Apple.
- **Privacy Policy URL:** Required. Same URL as your Google Play policy.
- **Age Rating:** You will go through a questionnaire. Expect 4+ or 9+ for a planning tool.
- **Pricing:** Free.

### Step 5.6 — Submit for App Store Review

In App Store Connect, set your build (the one Thunkable uploaded), complete all required fields, and click Submit for Review. App Store reviews currently take **24–48 hours** on average, though complex apps can take up to a week. Apple reviews are stricter than Google Play.

**Common iOS rejection reasons and how to avoid them:**

- **Guideline 4.0 — Design:** App looks unfinished or has placeholder content. Fix: remove all test data, polish the UI, test every tap target.
- **Guideline 2.1 — Performance:** App crashes on launch. Fix: test extensively in Thunkable Live before submitting. Common cause is missing data source — if your Google Sheet is unavailable, show a graceful error message rather than crashing.
- **Guideline 5.2 — Intellectual Property:** App uses copyrighted material or misleadingly implies affiliation. Fix: original app name, no WWE/2K logos in the app icon or screenshots, prominent disclaimer on the Settings screen, neutral language in the description.
- **Guideline 3.1.1 — Business:** If you plan to add in-app purchases later, Apple must approve the IAP items too. Do not mention premium features in v1.0 if they are not yet implemented.

If rejected, Apple provides specific feedback in App Store Connect under the Resolution Center. Reply to the rejection with your explanation of the fix, resubmit, and the re-review typically happens within 24 hours.

---

## Phase 6: Legal, Privacy, and IP — What To Do Before You Publish Anything

### Your app name — the most important decision

**Do not use any of these words in your app name:** WWE, 2K, myGM, RAW, SmackDown, NXT, WrestleMania, SummerSlam, or any superstar name. These are all registered trademarks. Google's impersonation policy and Apple's Guideline 5.2 both prohibit this.

**Good name examples (original, descriptive, no trademarks):**
- Ring Planner
- GM Booker
- ShowRunner
- Squared Circle GM
- Bout Planner
- Card Builder
- Kayfabe Planner

Your app description can use the game's name nominatively: *"A fan-made planning tool for GM mode in WWE 2K games."* This is nominative fair use — you are identifying what the tool is for, not claiming affiliation.

**Do not use WWE championship belt imagery, superstar portraits, or the WWE logo** anywhere in your app icon, screenshots, or feature graphics. Use generic wrestling imagery (silhouettes, abstract icons, star rating graphics) or purely typographic branding.

### Your privacy policy — required by both stores

Both Google Play and the App Store require a live, hosted privacy policy URL. Use one of these free generators:

- **App Privacy Policy Generator** (app-privacy-policy-generator.firebaseapp.com) — free, specifically designed for mobile apps, outputs clean HTML you can host anywhere
- **Termly** (termly.io/products/privacy-policy-generator) — free tier, more comprehensive, hosted on Termly's servers so you have a permanent URL immediately

For hosting your policy for free: paste the generated HTML into a GitHub Pages site (free, permanent URL), a Google Sites page, or a Notion public page. The URL must be accessible without login — Apple and Google's reviewers will check it.

**What your policy must disclose for v1.0:**
- The app does not collect personal information
- All data (rivalries, roster edits) is stored locally on the device
- The app may display ads (even if not yet — add this prophylactically for when you add AdMob)
- If showing ads: the ad network (AdMob) collects device identifiers, IP address, and usage data as described in Google's Privacy Policy
- Contact email for privacy questions

**Add AdMob disclosures even in v1.0** to avoid having to resubmit both apps just to update your privacy policy when you add ads in v1.5.

### Your disclaimer — display it inside the app

On your Settings/About screen, include this exact disclaimer (or equivalent wording):

> *"This app is an independent fan-made tool and is not affiliated with, endorsed by, authorized by, or in any way connected to World Wrestling Entertainment, Inc. (WWE), Take-Two Interactive Software, Inc., 2K Games, or Visual Concepts. All WWE trademarks, service marks, trade names, and logos are the property of their respective owners. This app is provided solely as a planning utility for personal use."*

This wording follows the pattern used by successfully published gaming companion apps that have remained live for years. It does not guarantee legal protection, but it clearly establishes non-affiliation and is standard practice in the companion app space.

### Data compliance

**GDPR (European users):** Since your app stores no personal data and AdMob handles its own consent framework, your GDPR obligations are minimal. AdMob automatically handles consent management in the EU if you configure it correctly in AdMob settings.

**COPPA (children under 13):** Do not specifically target children. In Play Console's target audience settings, select "Adults (18+)" or "Everyone." Do not tick the box for primarily targeting children unless you intend to comply with the strict Families Policy, which prohibits interest-based advertising.

---

## Phase 7: Monetisation — All Options With Realistic Numbers

### Option 1 — AdMob (most reliable passive income)

AdMob is Google's mobile advertising network. Integration in Thunkable requires adding the AdMob extension and entering your AdMob App ID (generated free at admob.google.com). AdMob is free to set up, free to use, and pays per impression and click.

**Ad format guide for this specific app:**

Banner ads: A persistent strip at the bottom of high-dwell screens like the Roster and Rivalry Planner. Low revenue per user but completely passive. eCPM (earnings per 1,000 impressions) for a US/UK wrestling audience: $0.50–$1.50.

Interstitial ads (full-screen): Show after a major action — after saving a new rivalry, after completing a full draft analysis, after using the calculator 3+ times in a session. Cap at 1–2 per session to avoid user annoyance. eCPM: $5–$8.

Rewarded video ads: The highest-earning format. Users voluntarily watch a 15–30 second video in exchange for a reward. For your app: "Watch a video to unlock the Optimal Match Suggestion for this week." Users who volunteer for an ad are far more valuable than users who see one passively — completion rates exceed 95%. eCPM: $15–$30.

**AdMob payout:** The minimum payment threshold is $100. Payments are made monthly. Below $100 in a given month, earnings roll over to the next month.

| App size | Est. monthly AdMob revenue |
|----------|---------------------------|
| 500 downloads, ~40 DAU | $8–$30 |
| 1,000 downloads, ~100 DAU | $25–$90 |
| 2,500 downloads, ~300 DAU | $75–$255 |
| 5,000 downloads, ~600 DAU | $150–$500 |

Cross-platform doubles your potential audience compared to Android-only, meaningfully improving these numbers. iOS users in the US/UK have higher eCPMs than Android on average.

### Option 2 — In-App Purchase: Ad Removal / Pro Upgrade

A one-time purchase to remove all ads and/or unlock premium features. This is the most natural monetisation for a utility app. Google takes a 15% commission on IAP revenue under $1M/year. Apple takes 15% for developers under $1M/year (App Store Small Business Program — enroll separately at developer.apple.com/app-store/small-business-program/).

Suggested pricing: **$2.99 one-time** for "Ring Planner Pro" which removes all ads and unlocks:
- Season planner (all 50 weeks)
- Fan score estimator
- Drama curve analyser
- Export show cards to PDF
- Future premium features

The conversion rate for IAP in niche utility apps is typically 2–8% of active users. At 1,000 active users with a 3% conversion rate, that is 30 purchases × $2.54 (your cut after store fee) = **$76 one-time**, not recurring. As the user base grows, this compounds with each new user.

Thunkable supports in-app purchases via Google Play Billing (Android) and StoreKit (iOS). Implementation requires additional blocks and setup — save this for v1.5 rather than v1.0 to keep the initial build manageable.

### Option 3 — Ko-fi / Community Funding

Ko-fi (ko-fi.com) is completely free — zero platform fee on one-time tips, 5% fee on membership subscriptions. Set up a page at ko-fi.com/ringplanner (or whatever your app name is) in 10 minutes. Link to it in your Settings screen and in every Reddit post and Discord message. For an engaged niche community of 500–2,000 users, expect **$0–$50/month** in voluntary support. Small but meaningful, and it builds a direct relationship with your most loyal users.

### Option 4 — Affiliate Links

Amazon Associates (affiliate programme — free to join) pays 1–4% commission on purchases made through your links. If you link to WWE 2K26 on Amazon from your app's description or a "Where to Buy" section: at $60/sale × 2% = $1.20 per conversion. Not significant at small scale but costs nothing to implement.

### The Recommended Strategy

**Phase 1 (launch — first 3 months):** Free app, no ads, no IAP. Focus entirely on growing the user base and getting 5-star reviews. A clean app with no ads gets better initial reviews, which is critical for App Store and Play Store algorithmic ranking.

**Phase 2 (months 3–6):** Add AdMob banner ads on lower-priority screens and one rewarded video placement in the Calculator. Monitor user retention — if it drops sharply after adding ads, reduce ad frequency.

**Phase 3 (months 6+):** Add the $2.99 Pro IAP that removes ads and unlocks v2.0 premium features. This gives you two revenue streams (ad revenue from free users, IAP revenue from engaged users) and a compelling upgrade path.

**Ko-fi throughout:** Set it up from Day 1 and mention it once in your Settings screen. It costs nothing and occasionally yields genuine supporter income.

---

## Phase 8: Community Marketing — Getting Your First 1,000 Users

### Where WWE 2K players are (in priority order)

1. **r/WWEGames** — primary hub, 200,000+ members, directly linked from 2K's official website
2. **Official WWE 2K Discord** — 74,900+ members at discord.gg/wwe2k
3. **r/AndroidGaming and r/iOSGaming** — broader gaming audience, great for launch week
4. **YouTube myGM content creators** — Smacktalks (441K subs), Assemble (135K), Phoenix Nitro (113K), BDE (1.5M)
5. **The SmackDown Hotel** (thesmackdownhotel.com) — most-read myGM guide site on the internet
6. **TikTok #WWE2K26** — short-form video showing the app in use can go unexpectedly viral
7. **X/Twitter #WWEGames and #WWE2K26**

### The pre-launch community strategy (start now — Weeks 1–8)

Before your app exists, become a recognized, helpful member of r/WWEGames. The 9:1 rule: nine genuinely helpful contributions for every one mention of your app. Post useful myGM content: stamina rotation guides, drama curve explanations, optimal rivalry timing charts. People will remember you as "that person who makes helpful myGM guides" — which is exactly who they will trust with a planning tool.

In Weeks 5–6, hint that you are building something: "I've been working on a tool to help calculate match ratings — anyone interested in beta testing?" This builds anticipation and helps you recruit the 12 testers you need for Google Play.

### Launch week execution

**Reddit launch post template:**
Title: "I kept losing at myGM because I couldn't track stamina and rivalries — so I built a free app to help [Android & iOS]"
Body: Tell the story of the problem → solution narrative. Include 3–4 screenshots showing the app solving a real myGM problem. End with "completely free, no login required, link in comments."

Post to r/WWEGames first. If it does well (100+ upvotes), cross-post to r/AndroidApps and r/iOSGaming. Do not post to all simultaneously — let the first post gain momentum first.

**YouTube creator outreach:**
Email or DM 3–5 mid-tier creators (Assemble, Phoenix Nitro size — not the mega channels who won't respond). Offer free early access, be genuine about what the app does and doesn't do, and let them form their own opinion. One honest mention from a 100K-subscriber wrestling channel can drive hundreds of downloads overnight.

**The SmackDown Hotel:** Email the site owner directly. They regularly feature community tools in their guides. Getting a mention in their next myGM guide would place your app in front of exactly the right audience.

### Review strategy

Your App Store and Play Store rating is the single most important factor in long-term organic discovery. In your launch Reddit post, ask satisfied users to leave a review. Inside the app (after a user has used it 3+ times), show a polite in-app review prompt — both platforms have native APIs for this that Thunkable supports. A 4.5+ star rating with 20+ reviews significantly boosts algorithmic ranking in both stores.

Respond to every review, positive and negative. Developers who engage with feedback signal to both stores that the app is actively maintained and cared for — this influences ranking directly.

---

## Complete Week-by-Week Timeline

| Week | Phase | Key actions | Est. hours |
|------|-------|-------------|------------|
| 1 | Plan | Paper wireframes. Define MVP. Create Google Sheet. Watch Thunkable beginner playlist. | 8–10 |
| 2 | Learn | Build 2 practice apps (calculator + list reader). Test Google Sheets connection. Enroll in Apple Developer Program (takes 48hrs to activate — do this now). | 8–10 |
| 3 | Build | Subscribe to Thunkable Start ($59). Build Roster Tracker screen fully. Test on Android via Thunkable Live. | 10–12 |
| 4 | Build | Build Match Rating Calculator + Rivalry Planner. Full testing on Android. | 10–12 |
| 5 | Build | Build Home Dashboard + Settings screen. UI polish. Generate privacy policy. Create app icon + screenshots in Canva. Generate provisioning profile on friend's Mac (1hr). | 8–10 |
| 6 | Publish | Export Android AAB from Thunkable. Register Google Play account ($25). Upload to closed testing track. Recruit 12+ beta testers from Reddit/Discord. Build iOS IPA in Thunkable, upload to App Store Connect. Complete all store listing fields for both stores. | 6–8 |
| 7–8 | Test | 14-day mandatory closed testing period for Google Play. Collect tester feedback. Fix bugs. Submit iOS app to App Store review (no testing period required). iOS may go live during this window. | 4–6 |
| 9 | Launch | Request Google Play production access. Both apps should be live or imminently live. Prepare Reddit launch post. Create Ko-fi page. | 4–6 |
| 10 | Launch | Launch week. Post on r/WWEGames and r/AndroidGaming/r/iOSGaming. Respond to every comment and review. Monitor crash reports. Cancel Thunkable subscription if both apps are live (resubscribe only for future updates). | 6–8 |

**Total: approximately 70–90 hours across 10 weeks.** With evenings and weekends, this is comfortably achievable in 2.5 months.

---

## Your Full Cost Summary

| Item | Cost | When to pay |
|------|------|-------------|
| Apple Developer Program | $99/year | Week 2 |
| Google Play Developer account | $25 one-time | Week 6 |
| Thunkable Start plan | $59 × 1–2 months | Week 3 |
| Codemagic (Mac workaround, if needed) | $0 free tier | Week 5–6 |
| Canva (icons, screenshots) | $0 free tier | Week 5 |
| Privacy policy hosting (GitHub Pages / Notion) | $0 | Week 5 |
| Ko-fi setup | $0 | Week 9 |
| AdMob setup | $0 | After launch |
| **Total minimum** | **$183** | — |
| **Total maximum (2 months Thunkable)** | **$242** | — |

Every other tool, platform, tutorial, and service in this guide is free.

---

## Quick Reference Card

**Accounts to set up (in order):**
1. Thunkable — thunkable.com
2. Google Sheets — sheets.google.com
3. Apple Developer — developer.apple.com/programs
4. App Store Connect — appstoreconnect.apple.com
5. Google Play Console — play.google.com/console
6. AdMob — admob.google.com
7. Ko-fi — ko-fi.com

**Free tools needed:**
- Canva (canva.com) — app icon, screenshots, feature graphic
- App Privacy Policy Generator (app-privacy-policy-generator.firebaseapp.com) — privacy policy
- GitHub Pages (pages.github.com) — host your privacy policy for free
- Thunkable Live (Android + iOS app stores) — testing on device
- Codemagic (codemagic.io) — Mac workaround for iOS signing if needed

**Key communities to join now:**
- r/WWEGames
- Official WWE 2K Discord (discord.gg/wwe2k)
- r/TestersCommunity (for recruiting your 12 Google Play testers)
- Thunkable Community Forum (community.thunkable.com) — for technical questions

**Critical legal rules:**
- No "WWE," "2K," or "myGM" in your app name
- No WWE logos, championship belts, or superstar portraits in your icon or screenshots
- Privacy policy URL must be live before submitting to either store
- Disclaimer must be visible inside the app on the Settings screen
- User-entered data only — do not hardcode official game ratings

---

*This guide reflects platform policies and pricing as of March 2026. Google Play, App Store, Thunkable, and AdMob policies change regularly — always verify current requirements in each platform's official documentation before submitting.*
