# CLAUDE.md — myGM Pal Project Context

This file is read automatically by Claude Code at the start of every session.
It gives Claude the context needed to work on this project without re-briefing.

---

## Project Identity

**App:** myGM Pal — WWE 2K26 myGM mode companion app
**Studio:** No Sell Studios
**Developer:** Adam Morris — Perth (Wellard), Western Australia
**ABN:** 51 094 614 156
**Status:** Pre-build — wireframes complete, infrastructure live, build starting

---

## What This Project Is

A fan-made mobile companion app for WWE 2K26's myGM mode. No competing app exists
on either app store. The app is a "suggestion engine" — not just a reference tool.
It tracks the user's season state and gives data-driven booking recommendations.

**Platform:** Android + iOS (built simultaneously in Thunkable)
**Monetisation:** Free with AdMob ads. One-time $2.99 "Pro" IAP removes ads.

---

## Repo Structure

```
/
├── CLAUDE.md                    ← You are here — read first every session
├── README.md                    ← Public-facing project overview
├── docs/
│   ├── myGMPal_Master_Plan.md   ← COMPLETE project reference — read this
│   ├── myGMPal_Wireframes.md    ← Screen architecture and design decisions
│   └── WWE2K26_CrossPlatform_Roadmap.md ← Week-by-week build timeline
├── website/
│   ├── index.html               ← Live at mygmpal.com
│   ├── privacy-policy.html      ← Live at mygmpal.com/privacy-policy.html
│   └── CNAME                    ← GitHub Pages domain config
├── wireframes/
│   ├── screen-01-load.html      ← Interactive wireframe prototypes
│   ├── screen-02-setup.html
│   └── ...                      ← Screens 1-5 locked, 6-13 pending
├── data/
│   └── roster.json              ← WWE 2K26 superstar database (101 superstars)
└── assets/
    └── logos/                   ← Brand assets
```

---

## Key Documents — Read These

Before doing any work, read:
1. `docs/myGMPal_Master_Plan.md` — everything about the project
2. `docs/myGMPal_Wireframes.md` — screen architecture and decisions

---

## Infrastructure (All Live)

| Item | Detail |
|------|--------|
| Website | https://mygmpal.com |
| Privacy Policy | https://mygmpal.com/privacy-policy.html |
| GitHub Repo | github.com/myGMpal/site |
| Email | hello@mygmpal.com (Zoho) |
| Domain registrar | VentraIP |
| Hosting | GitHub Pages (free, CI/CD via GitHub Actions) |
| Google Sheet (roster) | https://docs.google.com/spreadsheets/d/1WruDPVPa97ufrPn1OuWnHv8LCuRXm8HaKSOHWYe-aE0 |

---

## App Build Tool

**Thunkable** (thunkable.com) — drag-and-drop cross-platform builder.
Adam is a non-coder. Thunkable builds Android + iOS simultaneously.
Claude Code cannot directly edit Thunkable projects — but can:
- Build data files (JSON) that Thunkable imports
- Build and maintain the website
- Calculate and validate logic (match ratings, draft scores)
- Generate App Store listing copy and assets
- Maintain documentation

---

## Current Status

### Completed ✅
- Domain mygmpal.com purchased and live
- Email hello@mygmpal.com on Zoho
- Privacy policy live
- Homepage live
- ABN registered: 51 094 614 156
- D-U-N-S number requested (pending)
- Both logos finalised (No Sell Studios + myGM Pal)
- Wireframes Screens 1–5 locked

### Pending ⏳
- Apple Developer Program ($99 USD — waiting on D-U-N-S)
- Google Play Console ($25 USD — waiting on D-U-N-S)
- Wireframes Screens 6–13 (pick up at Screen 6 — Initial Booking)
- Match rating formula full breakdown
- App Store listing copy
- Thunkable build (Week 3+)

---

## Developer Notes

- Adam cannot code but understands concepts — explain implementation clearly without dumbing down
- Do not reference Apex Elements or any other project in this repo — separate IP
- All button styles must be hardcoded inline in HTML (CSS classes get stripped in iframe contexts)
- The wireframe prototypes were built as interactive HTML — preserve interactivity when editing
- Roster data lives in Google Sheets (source of truth) and should be mirrored to data/roster.json

---

## Common Tasks Claude Code Will Handle

1. **Website edits** — edit website/index.html or website/privacy-policy.html, commit and push
2. **Wireframe updates** — edit HTML files in wireframes/, test locally
3. **Data work** — build/update data/roster.json from Google Sheets export
4. **Logic validation** — run JS/Python scripts to verify match rating calculations
5. **Documentation** — update docs/myGMPal_Master_Plan.md when decisions are made
6. **Deployment** — commit and push to main → GitHub Actions auto-deploys website

---

## Git Workflow

**Strategy: GitHub Flow** — short-lived feature branches, PRs to merge back to main.
Every push to main auto-deploys the website via GitHub Actions.
The website root is the `/website/` folder.

### Branch naming convention
```
feature/   → new wireframes, new app screens, new features
phase/     → GSD phase execution work
data/      → roster.json or data file updates
fix/       → bug fixes on live website
docs/      → documentation-only changes
chore/     → tooling, CI, .gitignore type work
```

### Standard feature branch workflow
```bash
# Start work
git checkout -b feature/issue-N-short-name

# Do the work, commit normally
git add <files>
git commit -m "feat: description"

# Push and open PR
git push -u origin feature/issue-N-short-name
# Click "Create PR" in Claude Desktop Code tab header
# OR: gh pr create --title "..." --body "Closes #N"

# Merge PR → branch deletes → main auto-deploys
```

### Exceptions (commit direct to main — low risk, no website impact)
- GSD phase planning docs (`.planning/` folder)
- CLAUDE.md updates
- README updates

### GitHub auth note
- Git push/pull uses SSH (configured permanently — key tied to myGMpal org)
- `gh` CLI is authenticated as `myGMpal` (active) with full admin scopes — PAT stored in Windows Credential Manager + `.claude/github-token` (gitignored)
- `Amorris-kwinana` remains as an inactive fallback account in `gh` — do NOT use for this project
- Remote URL: `git@github.com:myGMpal/site.git` (SSH — never change to HTTPS)
- To switch accounts: `gh auth switch --user myGMpal`

---

## Conversation & Branch Strategy

**One conversation = one GitHub Issue.**

Context windows accumulate. Long sessions that cover multiple topics become less reliable.
Keep each Claude session scoped to a single issue or GSD phase.

### Start ritual (every new conversation)
1. Open Claude Desktop → Code tab → verify you're on the right branch
2. Paste the standard handoff: *"Read CLAUDE.md, docs/myGMPal_Master_Plan.md, and docs/myGMPal_Wireframes.md. Then confirm you're up to speed."*
3. Tell Claude the GitHub Issue number you're working on: *"We're working on Issue #N — [title]"*
4. Claude creates/switches to the feature branch: `git checkout -b feature/issue-N-short-name`

### End ritual (when the issue is done)
1. All deliverables committed and pushed to the feature branch
2. Click "Create PR" in the Claude Desktop Code tab header (it'll be lit up, not greyed)
3. Merge the PR on GitHub.com → branch auto-deletes
4. Confirm `main` is clean and deployed
5. Close the GitHub Issue
6. Start a new conversation for the next issue

### Conversation cap
If a session runs past ~30 turns or ~2 hours without completing the issue scope,
use `/gsd:pause-work` to create a handoff document, then start a fresh conversation.

### Claude Desktop Code tab — what the header widgets mean
| Widget | Meaning |
|--------|---------|
| `main ← main` | On main, tracking origin/main — no feature branch active |
| `feature/X ← main` | On a feature branch — ready to PR when work is done |
| `+N -N` (View Diff) | Total lines added/deleted by Claude this session (cumulative, including committed) |
| Create PR (greyed) | You're on main — switch to a feature branch first |
| Create PR (active) | You're on a feature branch with commits — click to open a PR |

---

*Last updated: 25 March 2026*
*Read docs/myGMPal_Master_Plan.md for full project detail*
