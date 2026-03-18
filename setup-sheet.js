// UFC Dashboard v2 — Google Sheet Auto-Setup
// 1. Open your Google Sheet
// 2. Extensions → Apps Script
// 3. Paste this → Run ▶️ → Authorize

function setupDashboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  function g(n){let s=ss.getSheetByName(n);if(!s)s=ss.insertSheet(n);s.clear();return s}

  // 1. Config (key-value pairs)
  let s=g('Config');
  s.appendRow(['Key','Value']);
  s.appendRow(['progress_current','$3.2M']);
  s.appendRow(['progress_goal','$10.0M']);
  s.appendRow(['progress_pct','32']);

  // 2. Stats (5 stat cards)
  s=g('Stats');
  s.appendRow(['Icon','Value','Label']);
  s.appendRow(['💰','$3.2M','Total Withdrawn']);
  s.appendRow(['✅','1,250','Total Completions']);
  s.appendRow(['👥','791','Total Traders']);
  s.appendRow(['🏆','1,350','$100K Accounts']);
  s.appendRow(['🎯','305','$50K Accounts']);

  // 3. Ticker
  s=g('Ticker');
  s.appendRow(['Icon','Name','Action','Amount']);
  s.appendRow(['💰','@CryptoKing_MY','withdrew','$4,200']);
  s.appendRow(['💰','@TraderJin88','withdrew','$2,800']);
  s.appendRow(['🎰','@AceTrader','jackpot','$8,500']);
  s.appendRow(['💰','@NightOwlFX','withdrew','$1,400']);
  s.appendRow(['💰','@BullRunBro','withdrew','$6,100']);
  s.appendRow(['🎰','@SatoshiSam','jackpot','$3,300']);
  s.appendRow(['💰','@WhaleCatcher','withdrew','$12,000']);
  s.appendRow(['💰','@DiamondHands_SG','withdrew','$5,700']);

  // 4. Sprint (monthly sprint data — 1 row per month)
  s=g('Sprint');
  s.appendRow(['Month','Target','Current','Pct','Jackpot','PropWD','TotalWD','JackpotWins','NewFunded','AvgWD']);
  s.appendRow(['March 2026','$420,000','$267,800','63.8','$124,500','$143,300','87','32','23','$3,079']);

  // 5. Belts (trader rank tiers)
  s=g('Belts');
  s.appendRow(['Color','Name','Range','Count']);
  s.appendRow(['white','White Trader','Below $10K withdrawn','342']);
  s.appendRow(['yellow','Yellow Trader','$10K — $20K withdrawn','128']);
  s.appendRow(['blue','Blue Trader','$20K — $50K withdrawn','74']);
  s.appendRow(['red','Red Trader','$50K — $100K withdrawn','18']);
  s.appendRow(['black','Black Trader','$100K+ withdrawn','5']);

  // 6. Leaderboard (total withdrawal leaderboard)
  s=g('Leaderboard');
  s.appendRow(['Emoji','Name','Subtitle','Belt','Tier','Withdrawals','Total']);
  s.appendRow(['🐋','WhaleCatcher','Malaysia • $100K Account','black','Black Trader','34','$147,200']);
  s.appendRow(['🦅','AceTrader','Singapore • $100K Account','black','Black Trader','28','$128,500']);
  s.appendRow(['🔥','BullRunBro','Indonesia • $100K Account','black','Black Trader','25','$112,000']);
  s.appendRow(['💎','DiamondHands_SG','Singapore • $100K Account','red','Red Trader','22','$84,800']);
  s.appendRow(['🌙','NightOwlFX','Thailand • $50K Account','red','Red Trader','19','$67,300']);
  s.appendRow(['🎓','TraderJin88','Malaysia • $100K Account','red','Red Trader','18','$58,400']);
  s.appendRow(['🏹','SniperEntry','Philippines • $50K Account','blue','Blue Trader','15','$43,600']);
  s.appendRow(['⚡','CryptoKing_MY','Malaysia • $100K Account','blue','Blue Trader','14','$38,200']);
  s.appendRow(['🌟','RisingStar_ID','Indonesia • $50K Account','blue','Blue Trader','12','$28,900']);
  s.appendRow(['💡','AlphaSeeker','Vietnam • $50K Account','yellow','Yellow Trader','10','$18,800']);

  // 7. Jackpot (jackpot leaderboard entries)
  s=g('Jackpot');
  s.appendRow(['Emoji','Name','Amount','Category','Date']);
  s.appendRow(['🐋','WhaleCatcher','$5,000','Jackpot 2','16 Mar 2026']);
  s.appendRow(['🦅','AceTrader','$4,200','Jackpot 2','16 Mar 2026']);
  s.appendRow(['🔥','BullRunBro','$3,800','Jackpot 2','15 Mar 2026']);
  s.appendRow(['⚡','CryptoKing_MY','$3,500','Jackpot 2','15 Mar 2026']);
  s.appendRow(['💎','DiamondHands_SG','$2,900','Jackpot 1','14 Mar 2026']);
  s.appendRow(['🌙','NightOwlFX','$2,400','Jackpot 1','14 Mar 2026']);
  s.appendRow(['🎓','TraderJin88','$2,100','Jackpot 1','13 Mar 2026']);
  s.appendRow(['🏹','SniperEntry','$1,800','Jackpot 1','12 Mar 2026']);
  s.appendRow(['💡','AlphaSeeker','$1,500','Jackpot 1','11 Mar 2026']);
  s.appendRow(['🌟','RisingStar_ID','$1,500','Jackpot 1','10 Mar 2026']);

  // 8. Rising Stars (no Belt/Tier columns)
  s=g('Rising Stars');
  s.appendRow(['Initials','Name','ThisMonth','Total','WDCount','Firm']);
  s.appendRow(['AR','Ahmad R.','$1,240','$4,640','3','PropW']);
  s.appendRow(['FS','Farah S.','$2,100','$8,200','5','PropW']);
  s.appendRow(['ML','Marcus L.','$3,400','$12,800','8','Bitfunded']);
  s.appendRow(['WT','Wei Ling T.','$890','$2,890','2','Hyrotrader']);
  s.appendRow(['DK','Darren K.','$5,200','$24,500','12','FundedXYZ']);
  s.appendRow(['PN','Priya N.','$650','$650','1st withdrawal!','PropW']);

  // 9. Winning Streaks (streak count + trader names)
  s=g('Streaks');
  s.appendRow(['Icon','Streak','Names']);
  s.appendRow(['🔥🔥🔥🔥🔥🔥🔥','7','WhaleCatcher']);
  s.appendRow(['🔥🔥🔥🔥🔥🔥','6','AceTrader, BullRunBro']);
  s.appendRow(['🔥🔥🔥🔥🔥','5','DiamondHands_SG, NightOwlFX, TraderJin88']);

  // 10. Withdrawals (recent withdrawals feed)
  s=g('Withdrawals');
  s.appendRow(['Name','Amount','Time','Account','Mode','Firm','Logo']);
  s.appendRow(['@AceTrader','$8,500','2 hours ago','$100K Account','Z Mode Hard','PropW','https://ufc.unitycrypto.com/assets/propw_small_logo-dc0ca349d166b5555f4f5bf7df7c0fe1d7f72828e66245d73bcd971cdd2cc2cc.png']);
  s.appendRow(['@CryptoKing_MY','$4,200','5 hours ago','$100K Account','Z Mode Normal','Hyrotrader','https://ufc.unitycrypto.com/assets/hyrotrader_small_logo-5b6f64d65522469d6c4fb709fcc46a19b3c0209679c93ea793e0190abc97e77d.png']);
  s.appendRow(['@TraderJin88','$2,800','8 hours ago','$50K Account','Scholarship','MyCryptoFund','https://ufc.unitycrypto.com/assets/mcf_logo-dd0b8ebf49605b26219226f57fc1fe8cc68f6fc02bc9825e2cb0a5a148eec419.png']);
  s.appendRow(['@NightOwlFX','$1,400','12 hours ago','$50K Account','Z Mode Hard','PropW','https://ufc.unitycrypto.com/assets/propw_small_logo-dc0ca349d166b5555f4f5bf7df7c0fe1d7f72828e66245d73bcd971cdd2cc2cc.png']);
  s.appendRow(['@BullRunBro','$6,100','1 day ago','$100K Account','Z Mode Hard','Pionex','https://ufc.unitycrypto.com/assets/pionex_small_logo-a1ee8b53f0a0ec71156b3ef5dfdb25a763dcbe15d7634033cf733ba7440a9e73.png']);
  s.appendRow(['@SatoshiSam','$3,300','1 day ago','$25K Account','Z Mode Normal','PropW','https://ufc.unitycrypto.com/assets/propw_small_logo-dc0ca349d166b5555f4f5bf7df7c0fe1d7f72828e66245d73bcd971cdd2cc2cc.png']);
  s.appendRow(['@WhaleCatcher','$12,000','2 days ago','$100K Account','Z Mode Hard','Hyrotrader','https://ufc.unitycrypto.com/assets/hyrotrader_small_logo-5b6f64d65522469d6c4fb709fcc46a19b3c0209679c93ea793e0190abc97e77d.png']);
  s.appendRow(['@DiamondHands_SG','$5,700','2 days ago','$100K Account','Scholarship','MyCryptoFund','https://ufc.unitycrypto.com/assets/mcf_logo-dd0b8ebf49605b26219226f57fc1fe8cc68f6fc02bc9825e2cb0a5a148eec419.png']);
  s.appendRow(['@PhoenixRise','$4,900','3 days ago','$50K Account','Z Mode Hard','Pionex','https://ufc.unitycrypto.com/assets/pionex_small_logo-a1ee8b53f0a0ec71156b3ef5dfdb25a763dcbe15d7634033cf733ba7440a9e73.png']);
  s.appendRow(['@AlphaSeeker','$2,100','3 days ago','$50K Account','Scholarship','PropW','https://ufc.unitycrypto.com/assets/propw_small_logo-dc0ca349d166b5555f4f5bf7df7c0fe1d7f72828e66245d73bcd971cdd2cc2cc.png']);

  // Clean up default sheet
  const s1=ss.getSheetByName('Sheet1');
  if(s1&&ss.getSheets().length>1)try{ss.deleteSheet(s1)}catch(e){}

  // Format all columns as plain text to prevent Google auto-formatting
  ss.getSheets().forEach(sheet => {
    const range = sheet.getDataRange();
    range.setNumberFormat('@');
  });

  SpreadsheetApp.getUi().alert('✅ UFC Dashboard v2 setup complete! 10 tabs created with sample data. All formatted as plain text.');
}
