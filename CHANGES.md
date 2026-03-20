# UFC Dashboard Fix - March 20, 2026

## Problem
The live UFC scraping data from `ufc.unitycrypto.com/top_challengers` was incorrectly placed in the **Jackpot Leaderboard** section. It should have been in the **Total Withdrawal Leaderboard** section.

## Solution

### 1. Total Withdrawal Leaderboard (id="leaderboard")
✅ **MOVED** the live UFC scraping here
- Renamed function from `loadJackpotLeaderboard()` to `loadWithdrawalLeaderboard()`
- Added time period tabs (7D/30D/90D/YTD) with `data-days` attributes
- Changed table columns to: Rank (#), Trader, Tier, Total Withdrawal
- Added "Live data from UFC" subtitle with live dot indicator
- Now fetches from `ufc.unitycrypto.com/top_challengers?days=X`

### 2. Jackpot Leaderboard (id="jackpot")
✅ **REVERTED** back to loading from Google Sheet
- Removed time period tabs (now shows: All Time, 30D, 7D)
- Removed "Live data from UFC" subtitle
- Restored Google Sheet data loading via `fetchTab('Jackpot')`
- Table columns: Rank, Trader, Biggest Payout, Account
- Displays emoji, name, location, amount, and account size

### 3. JavaScript Changes
- Renamed `loadJackpotLeaderboard(days)` → `loadWithdrawalLeaderboard(days)`
- Updated function to use `lbBody` tbody instead of `jpBody`
- Added new Jackpot loading code that fetches from Google Sheet "Jackpot" tab
- Updated tab click handlers to use `lbTabs` instead of `jpTabs`
- Kept the UFC scraping logic intact (multi-page fetching, CORS proxy, HTML parsing)

## Commit
```
commit 095e18f
Fix: Move UFC live data to Total Withdrawal section, restore Jackpot to Google Sheet
```

## Testing
- ✅ Total Withdrawal Leaderboard now shows live UFC data with time filters
- ✅ Jackpot Leaderboard now loads from Google Sheet "Jackpot" tab
- ✅ All other sections (Sprint, Recent Withdrawals, etc.) remain intact
- ✅ No breaking changes to existing functionality

## Files Modified
- `index.html` (1 file, 15 insertions, 15 deletions)
