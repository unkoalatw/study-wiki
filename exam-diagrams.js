// 歷屆段考全真試題 視覺圖表與地圖向量生成器 (SVG & Visual Diagrams)
window.EXAM_DIAGRAMS = {
  render: function(type, desc) {
    if (!type || !this[type]) return "";
    return `
      <div class="exam-diagram-container" style="margin: 1rem 0; padding: 1rem; background: #0f172a; border: 1px solid #334155; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow-x: auto;">
        ${this[type]()}
        ${desc ? `<div class="diagram-caption" style="margin-top: 0.6rem; font-size: 0.82rem; color: #94a3b8; text-align: center;">📷 圖：${desc}</div>` : ""}
      </div>
    `;
  },

  // 1. Q2 希臘半圓形露天劇場
  greek_theater: function() {
    return `
      <svg width="340" height="200" viewBox="0 0 340 200" style="max-width:100%; height:auto;">
        <defs>
          <radialGradient id="caveaGrad" cx="50%" cy="100%" r="90%">
            <stop offset="0%" stop-color="#334155" />
            <stop offset="100%" stop-color="#1e293b" />
          </radialGradient>
        </defs>
        <!-- 山坡同心階梯觀眾席 (Cavea) -->
        <path d="M 30,170 A 140,140 0 0,1 310,170 L 260,170 A 90,90 0 0,0 80,170 Z" fill="url(#caveaGrad)" stroke="#475569" stroke-width="2"/>
        <path d="M 45,170 A 125,125 0 0,1 295,170" fill="none" stroke="#64748b" stroke-dasharray="4,4" stroke-width="1.5"/>
        <path d="M 60,170 A 110,110 0 0,1 280,170" fill="none" stroke="#64748b" stroke-dasharray="4,4" stroke-width="1.5"/>
        <path d="M 75,170 A 95,95 0 0,1 265,170" fill="none" stroke="#64748b" stroke-dasharray="4,4" stroke-width="1.5"/>
        <!-- 放射狀走道階梯 -->
        <line x1="170" y1="30" x2="170" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="90" y1="65" x2="120" y2="105" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="250" y1="65" x2="220" y2="105" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- 中央圓形樂池舞台 (Orchestra) -->
        <circle cx="170" cy="140" r="32" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="2"/>
        <circle cx="170" cy="140" r="4" fill="#38bdf8"/>
        <!-- 後台建築 (Skene) -->
        <rect x="110" y="165" width="120" height="22" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="170" y="180" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">後台建築 (Skene)</text>
        <text x="170" y="144" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">表演圓形舞台</text>
        <text x="170" y="22" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">依山開鑿半圓形階梯看台 (階層式觀眾席)</text>
      </svg>
    `;
  },

  // 2. Q4 死者之書天平秤心臟
  weighing_heart: function() {
    return `
      <svg width="340" height="210" viewBox="0 0 340 210" style="max-width:100%; height:auto;">
        <!-- 埃及風格邊框裝飾 -->
        <rect x="10" y="10" width="320" height="190" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>
        <text x="170" y="32" fill="#facc15" font-size="13" font-weight="bold" text-anchor="middle">《死者之書》心臟稱重審判情境</text>
        <!-- 審判天平主柱 -->
        <line x1="170" y1="50" x2="170" y2="175" stroke="#eab308" stroke-width="4"/>
        <rect x="150" y="170" width="40" height="10" rx="2" fill="#ca8a04"/>
        <!-- 橫樑 -->
        <line x1="105" y1="75" x2="235" y2="75" stroke="#eab308" stroke-width="3"/>
        <!-- 左盤：亡者心臟 -->
        <line x1="105" y1="75" x2="85" y2="120" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="105" y1="75" x2="125" y2="120" stroke="#cbd5e1" stroke-width="1.5"/>
        <path d="M 80,120 Q 105,135 130,120 Z" fill="#ca8a04"/>
        <!-- 心臟符號 -->
        <path d="M 105,108 C 100,102 93,105 93,111 C 93,118 105,126 105,126 C 105,126 117,118 117,111 C 117,105 110,102 105,108 Z" fill="#ef4444"/>
        <text x="105" y="145" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">亡者之心臟</text>
        <!-- 右盤：真理之羽 (瑪特之羽) -->
        <line x1="235" y1="75" x2="215" y2="120" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="235" y1="75" x2="255" y2="120" stroke="#cbd5e1" stroke-width="1.5"/>
        <path d="M 210,120 Q 235,135 260,120 Z" fill="#ca8a04"/>
        <!-- 羽毛 -->
        <path d="M 235,98 Q 242,108 235,120 Q 230,108 235,98 Z" fill="#38bdf8"/>
        <text x="235" y="145" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">真理之羽 (瑪特)</text>
        <!-- 胡狼頭阿努比斯示意 -->
        <circle cx="50" cy="115" r="16" fill="#334155" stroke="#facc15" stroke-width="1.5"/>
        <path d="M 40,105 L 36,90 L 46,102" fill="#334155" stroke="#facc15" stroke-width="1.5"/>
        <text x="50" y="145" fill="#cbd5e1" font-size="10" text-anchor="middle">阿努比斯 (導引)</text>
        <!-- 冥王奧西里斯審判視察 -->
        <rect x="270" y="95" width="35" height="50" rx="4" fill="#334155" stroke="#4ade80" stroke-width="1.5"/>
        <text x="287" y="125" fill="#4ade80" font-size="10" font-weight="bold" text-anchor="middle">奧西里斯</text>
        <text x="287" y="137" fill="#4ade80" font-size="9" text-anchor="middle">(宣判死後重生)</text>
        <text x="170" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">心臟若比羽毛輕，靈魂方得通過審判獲得永生復活</text>
      </svg>
    `;
  },

  // 3. Q7 拉丁語系國家表
  table_latin: function() {
    return `
      <div style="width: 100%; max-width: 380px; background: #1e293b; border-radius: 8px; border: 1px solid #334155; overflow: hidden;">
        <div style="background: #0284c7; padding: 0.5rem; text-align: center; font-weight: bold; font-size: 0.9rem; color: #fff;">
          拉丁語聯盟成員國分布簡表
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: center;">
          <tr style="background: #334155; color: #cbd5e1;">
            <th style="padding: 0.5rem; border-right: 1px solid #475569;">歐洲 (起源地區)</th>
            <th style="padding: 0.5rem;">美洲</th>
          </tr>
          <tr>
            <td style="padding: 0.6rem; border-right: 1px solid #334155; color: #f8fafc; font-weight: 600;">法國、西班牙、葡萄牙、義大利…</td>
            <td style="padding: 0.6rem; color: #94a3b8;">墨西哥、巴西、秘魯、巴拿馬…</td>
          </tr>
        </table>
      </div>
    `;
  },

  // 4. Q9 亞歷山大東征帝國版圖
  alexander_empire: function() {
    return `
      <svg width="340" height="210" viewBox="0 0 340 210" style="max-width:100%; height:auto;">
        <rect width="340" height="210" fill="#0f172a" rx="8"/>
        <!-- 海洋水體 -->
        <!-- 地中海 -->
        <path d="M 20,95 Q 60,90 100,105 Q 110,120 70,125 Z" fill="#0369a1" fill-opacity="0.5"/>
        <!-- 黑海 -->
        <path d="M 60,40 Q 95,35 120,50 Q 90,65 60,40 Z" fill="#0369a1" fill-opacity="0.5"/>
        <!-- 紅海 -->
        <path d="M 105,140 L 125,185 L 118,190 L 100,145 Z" fill="#0369a1" fill-opacity="0.5"/>
        <!-- 波斯灣 -->
        <path d="M 180,135 L 210,175 L 202,180 L 175,140 Z" fill="#0369a1" fill-opacity="0.5"/>
        <!-- 亞歷山大帝國疆界多邊形 -->
        <path d="M 40,60 L 80,45 L 130,55 L 180,50 L 250,70 L 305,115 L 280,165 L 200,165 L 170,130 L 125,145 L 90,140 L 65,115 L 40,75 Z" 
              fill="#d97706" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2" stroke-dasharray="2,2"/>
        <text x="180" y="95" fill="#fcd34d" font-size="12" font-weight="bold" text-anchor="middle">亞歷山大帝國版圖</text>
        <text x="180" y="112" fill="#cbd5e1" font-size="9" text-anchor="middle">(橫跨歐、亞、非三洲，東至印度河)</text>
        <!-- 重要標示點 A (埃及尼羅河三角洲) -->
        <circle cx="85" cy="122" r="14" fill="#dc2626" fill-opacity="0.8" stroke="#fef2f2" stroke-width="2"/>
        <text x="85" y="127" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">A</text>
        <text x="85" y="152" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">埃及 (A處)</text>
        <!-- 其他地標參考 -->
        <text x="40" y="52" fill="#94a3b8" font-size="9">希臘/馬其頓</text>
        <text x="210" y="120" fill="#94a3b8" font-size="9">兩河流域/波斯</text>
        <text x="290" y="150" fill="#94a3b8" font-size="9">印度河流域</text>
      </svg>
    `;
  },

  // 5. Q11 地中海城市分佈圖 (甲乙丙丁)
  map_mediterranean_cities: function() {
    return `
      <svg width="340" height="210" viewBox="0 0 340 210" style="max-width:100%; height:auto;">
        <rect width="340" height="210" fill="#0f172a" rx="8"/>
        <!-- 歐洲與地中海輪廓簡繪 -->
        <!-- 地中海水域 -->
        <path d="M 20,85 Q 70,80 120,95 Q 180,100 240,85 L 290,110 L 260,150 Q 150,140 50,140 Z" fill="#0284c7" fill-opacity="0.35"/>
        <text x="150" y="115" fill="#38bdf8" font-size="11" font-weight="600" opacity="0.8">地中海</text>
        <!-- 點 甲 (義大利/羅馬) -->
        <circle cx="105" cy="70" r="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="105" y="75" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">甲</text>
        <text x="105" y="52" fill="#94a3b8" font-size="9" text-anchor="middle">義大利 (羅馬)</text>
        <!-- 點 乙 (希臘半島/雅典) -->
        <circle cx="165" cy="80" r="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="165" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">乙</text>
        <text x="165" y="64" fill="#94a3b8" font-size="9" text-anchor="middle">希臘 (雅典)</text>
        <!-- 點 丙 (尼羅河三角洲/開羅/昂) -->
        <circle cx="230" cy="140" r="13" fill="#dc2626" fill-opacity="0.8" stroke="#ffffff" stroke-width="2"/>
        <text x="230" y="145" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">丙</text>
        <path d="M 230,153 L 235,190" stroke="#38bdf8" stroke-width="3"/> <!-- 尼羅河 -->
        <text x="230" y="130" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">埃及 (尼羅河下流)</text>
        <!-- 點 丁 (北非/迦太基) -->
        <circle cx="95" cy="130" r="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="95" y="135" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">丁</text>
        <text x="95" y="153" fill="#94a3b8" font-size="9" text-anchor="middle">北非 (迦太基)</text>
      </svg>
    `;
  },

  // 6. Q12 卡奈克神廟石柱圖
  karnak_temple: function() {
    return `
      <svg width="340" height="200" viewBox="0 0 340 200" style="max-width:100%; height:auto;">
        <rect width="340" height="200" fill="#1e293b" rx="8"/>
        <!-- 宏偉巨柱頂梁 -->
        <rect x="20" y="25" width="300" height="20" fill="#ca8a04" rx="2"/>
        <text x="170" y="39" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">橫梁雕刻：法老向阿蒙神獻祭銘文</text>
        <!-- 柱頭 (紙莎草花蕾形) -->
        <path d="M 50,45 C 40,55 80,55 70,45 Z" fill="#eab308"/>
        <path d="M 120,45 C 110,55 150,55 140,45 Z" fill="#eab308"/>
        <path d="M 190,45 C 180,55 220,55 210,45 Z" fill="#eab308"/>
        <path d="M 260,45 C 250,55 290,55 280,45 Z" fill="#eab308"/>
        <!-- 四根多柱廳巨型石柱 -->
        <rect x="52" y="55" width="16" height="115" fill="#a16207" stroke="#ca8a04"/>
        <rect x="122" y="55" width="16" height="115" fill="#a16207" stroke="#ca8a04"/>
        <rect x="192" y="55" width="16" height="115" fill="#a16207" stroke="#ca8a04"/>
        <rect x="262" y="55" width="16" height="115" fill="#a16207" stroke="#ca8a04"/>
        <!-- 石柱上的象形文字紋路示意 -->
        <line x1="56" y1="70" x2="64" y2="70" stroke="#fef08a" stroke-width="1.5"/>
        <line x1="56" y1="90" x2="64" y2="90" stroke="#fef08a" stroke-width="1.5"/>
        <line x1="56" y1="120" x2="64" y2="120" stroke="#fef08a" stroke-width="1.5"/>
        <line x1="126" y1="75" x2="134" y2="75" stroke="#fef08a" stroke-width="1.5"/>
        <line x1="126" y1="105" x2="134" y2="105" stroke="#fef08a" stroke-width="1.5"/>
        <line x1="196" y1="80" x2="204" y2="80" stroke="#fef08a" stroke-width="1.5"/>
        <!-- 底座與朝拜小人剪影 -->
        <rect x="20" y="170" width="300" height="15" fill="#78350f"/>
        <!-- 信徒向神廟法老與神像祈禱 -->
        <circle cx="160" cy="155" r="4" fill="#cbd5e1"/>
        <line x1="160" y1="159" x2="160" y2="170" stroke="#cbd5e1" stroke-width="2"/>
        <text x="170" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">世界遺產「卡奈克神廟」多柱廳巨柱與象形文字浮雕</text>
      </svg>
    `;
  },

  // 7. Q17 西亞瑣羅亞斯德/祆教發源地圖
  map_zoroaster: function() {
    return `
      <svg width="340" height="210" viewBox="0 0 340 210" style="max-width:100%; height:auto;">
        <rect width="340" height="210" fill="#0f172a" rx="8"/>
        <!-- 黑海 & 裏海 -->
        <path d="M 40,30 Q 75,25 100,40 Q 80,55 45,35 Z" fill="#0284c7" fill-opacity="0.4"/>
        <text x="70" y="38" fill="#38bdf8" font-size="8">黑海</text>
        <path d="M 170,25 Q 185,55 180,80 Q 165,60 168,30 Z" fill="#0284c7" fill-opacity="0.4"/>
        <text x="180" y="55" fill="#38bdf8" font-size="8">裏海</text>
        <!-- 波斯灣 -->
        <path d="M 180,145 Q 215,160 220,195 Q 190,175 175,150 Z" fill="#0284c7" fill-opacity="0.4"/>
        <text x="210" y="175" fill="#38bdf8" font-size="8">波斯灣</text>
        <!-- 點 丙 (小亞細亞) -->
        <circle cx="60" cy="65" r="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="60" y="70" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">丙</text>
        <text x="60" y="87" fill="#94a3b8" font-size="9" text-anchor="middle">小亞細亞</text>
        <!-- 點 甲 (美索不達米亞 / 兩河) -->
        <circle cx="125" cy="95" r="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="125" y="100" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">甲</text>
        <text x="125" y="117" fill="#94a3b8" font-size="9" text-anchor="middle">兩河流域</text>
        <!-- 點 乙 (阿拉伯半島) -->
        <circle cx="95" cy="155" r="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="95" y="160" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">乙</text>
        <text x="95" y="177" fill="#94a3b8" font-size="9" text-anchor="middle">阿拉伯半島</text>
        <!-- 點 丁 (伊朗高原 / 波斯) -->
        <circle cx="235" cy="95" r="14" fill="#dc2626" fill-opacity="0.8" stroke="#ffffff" stroke-width="2"/>
        <text x="235" y="100" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">丁</text>
        <text x="235" y="122" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">伊朗高原 (波斯)</text>
        <text x="235" y="134" fill="#f87171" font-size="8" text-anchor="middle">祆教/瑣羅亞斯德發源地</text>
      </svg>
    `;
  },

  // 8. Q20 撲克牌方塊K (凱撒大帝)
  poker_caesar: function() {
    return `
      <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap;">
        <svg width="120" height="175" viewBox="0 0 120 175" style="border: 2px solid #cbd5e1; border-radius: 10px; background: #fff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);">
          <!-- 撲克牌花色與數字 -->
          <text x="10" y="24" fill="#ef4444" font-size="20" font-weight="bold">K</text>
          <polygon points="17,32 23,40 17,48 11,40" fill="#ef4444"/>
          <!-- 倒反角標 -->
          <text x="110" y="162" fill="#ef4444" font-size="20" font-weight="bold" text-anchor="end">K</text>
          <polygon points="103,135 109,143 103,151 97,143" fill="#ef4444"/>
          <!-- 羅馬統帥凱撒造型圖案 (手持戰斧頭側身) -->
          <circle cx="60" cy="70" r="22" fill="#fed7aa" stroke="#ef4444" stroke-width="1.5"/>
          <!-- 桂冠 -->
          <path d="M 45,62 Q 60,50 75,62" fill="none" stroke="#16a34a" stroke-width="3"/>
          <!-- 羅馬戰甲 -->
          <path d="M 42,92 L 78,92 L 82,125 L 38,125 Z" fill="#991b1b" stroke="#7f1d1d"/>
          <!-- 羅馬束棒戰斧 (Fasces/Battleaxe) -->
          <line x1="82" y1="55" x2="82" y2="125" stroke="#475569" stroke-width="3"/>
          <path d="M 82,60 Q 95,68 82,76 Z" fill="#64748b"/>
          <text x="60" y="145" fill="#1e293b" font-size="9" font-weight="bold" text-anchor="middle">CAESAR</text>
        </svg>
        <div style="max-width: 180px; font-size: 0.8rem; color: #cbd5e1; line-height: 1.4;">
          <b style="color: #ef4444;">撲克牌方塊K：</b><br/>
          傳統撲克牌中唯一「側臉」持戰斧的國王，代表羅馬終身獨裁官<b>凱撒 (Julius Caesar)</b>。
        </div>
      </div>
    `;
  },

  // 9. Q22 斯巴達人生涯成長圖解
  spartan_life: function() {
    return `
      <div style="width: 100%; max-width: 480px; background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 0.8rem; font-size: 0.82rem;">
        <div style="font-weight: bold; color: #f59e0b; margin-bottom: 0.6rem; text-align: center; font-size: 0.95rem;">
          ⚔️ 某城邦公民生活教育各階段進程
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="background: #0f172a; padding: 0.5rem; border-left: 4px solid #ef4444; border-radius: 4px;">
            <b style="color: #f87171;">【出生時】：</b>長老檢驗嬰兒體質，健康留育，虛弱者<b>直接丟棄深山深淵中</b>。
          </div>
          <div style="background: #0f172a; padding: 0.5rem; border-left: 4px solid #f59e0b; border-radius: 4px;">
            <b style="color: #fbbf24;">【7~11歲 準備期】：</b>離家集體生活，赤身、赤腳以鍛鍊刻苦忍耐體力。
          </div>
          <div style="background: #0f172a; padding: 0.5rem; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <b style="color: #60a5fa;">【12~19歲 正式軍事訓練】：</b>整年只穿一件單衣，睡草床，偷竊食物不被抓與格鬥殺人皆為生存戰技訓練。
          </div>
          <div style="background: #0f172a; padding: 0.5rem; border-left: 4px solid #10b981; border-radius: 4px;">
            <b style="color: #34d399;">【20~29歲 編入軍營】：</b>正式入伍成為戰士，即使結婚也需住軍營，全體義務參加每日聚食。
          </div>
          <div style="background: #0f172a; padding: 0.5rem; border-left: 4px solid #8b5cf6; border-radius: 4px;">
            <b style="color: #a78bfa;">【30~60歲 全權公民期】：</b>過家庭生活，但必須全體按月支付軍營聚餐費，<b>付不起者即剝奪市民公民權</b>。
          </div>
        </div>
      </div>
    `;
  },

  // 10. Q23 歐亞非交界帝國必爭之地地圖 (小亞細亞)
  map_anatolia_strife: function() {
    return `
      <svg width="340" height="210" viewBox="0 0 340 210" style="max-width:100%; height:auto;">
        <rect width="340" height="210" fill="#0f172a" rx="8"/>
        <!-- 海域水體 -->
        <path d="M 30,110 Q 90,95 160,115 Q 220,105 280,120 L 290,160 Q 150,150 40,150 Z" fill="#0284c7" fill-opacity="0.3"/>
        <text x="140" y="135" fill="#38bdf8" font-size="10">地中海</text>
        <path d="M 195,40 Q 235,35 260,50 Q 230,65 195,45 Z" fill="#0284c7" fill-opacity="0.3"/>
        <text x="230" y="52" fill="#38bdf8" font-size="8">黑海</text>
        <!-- 丁 (伊比利半島) -->
        <circle cx="35" cy="115" r="11" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="35" y="119" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">丁</text>
        <text x="35" y="137" fill="#94a3b8" font-size="8" text-anchor="middle">伊比利</text>
        <!-- 乙 (義大利半島) -->
        <circle cx="105" cy="90" r="11" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="105" y="94" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">乙</text>
        <text x="105" y="75" fill="#94a3b8" font-size="8" text-anchor="middle">義大利</text>
        <!-- 丙 (希臘半島) -->
        <circle cx="160" cy="100" r="11" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="160" y="104" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">丙</text>
        <text x="160" y="85" fill="#94a3b8" font-size="8" text-anchor="middle">希臘</text>
        <!-- 甲 (小亞細亞半島) -->
        <circle cx="230" cy="80" r="15" fill="#dc2626" fill-opacity="0.8" stroke="#ffffff" stroke-width="2"/>
        <text x="230" y="85" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">甲</text>
        <text x="230" y="106" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">小亞細亞 (安納托利亞)</text>
        <text x="230" y="118" fill="#94a3b8" font-size="8" text-anchor="middle">波斯、亞歷山大、羅馬、東羅馬皆統治</text>
      </svg>
    `;
  },

  // 11. Q25 漢摩拉比法典石柱
  hammurabi_stele: function() {
    return `
      <svg width="220" height="240" viewBox="0 0 220 240" style="max-width:100%; height:auto;">
        <!-- 玄武岩圓錐形石碑主體 -->
        <path d="M 40,230 L 55,40 Q 110,15 165,40 L 180,230 Z" fill="#1e293b" stroke="#475569" stroke-width="2"/>
        <!-- 頂部浮雕區域 (太陽神沙瑪什授權漢摩拉比) -->
        <rect x="58" y="38" width="104" height="60" rx="4" fill="#334155"/>
        <!-- 沙瑪什神 (坐姿、肩噴火焰光芒) -->
        <rect x="125" y="55" width="25" height="35" fill="#f59e0b" rx="2"/>
        <text x="137" y="75" fill="#1e293b" font-size="7" font-weight="bold" text-anchor="middle">太陽神</text>
        <!-- 漢摩拉比 (恭敬站立接受權杖) -->
        <rect x="75" y="48" width="16" height="42" fill="#cbd5e1" rx="2"/>
        <text x="83" y="70" fill="#0f172a" font-size="7" font-weight="bold" text-anchor="middle">國王</text>
        <line x1="91" y1="62" x2="125" y2="62" stroke="#f59e0b" stroke-width="2"/>
        <!-- 下方滿刻楔形文字刻紋線條 -->
        <g stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2">
          <line x1="55" y1="110" x2="165" y2="110"/>
          <line x1="53" y1="125" x2="167" y2="125"/>
          <line x1="51" y1="140" x2="169" y2="140"/>
          <line x1="49" y1="155" x2="171" y2="155"/>
          <line x1="47" y1="170" x2="173" y2="170"/>
          <line x1="45" y1="185" x2="175" y2="185"/>
          <line x1="43" y1="200" x2="177" y2="200"/>
          <line x1="41" y1="215" x2="179" y2="215"/>
        </g>
        <text x="110" y="235" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">《漢摩拉比法典》玄武岩石柱</text>
      </svg>
    `;
  },

  // 12. Q26 四大古文明地圖
  four_cradles_map: function() {
    return `
      <svg width="340" height="200" viewBox="0 0 340 200" style="max-width:100%; height:auto;">
        <rect width="340" height="200" fill="#0f172a" rx="8"/>
        <!-- 世界歐亞非大陸示意塊 -->
        <path d="M 30,60 Q 100,50 160,55 Q 260,40 310,70 L 300,140 Q 210,130 160,160 L 60,170 Q 20,130 30,60 Z" fill="#1e293b" stroke="#334155"/>
        <!-- 丁：尼羅河流域 (埃及) -->
        <circle cx="65" cy="115" r="11" fill="#0284c7" stroke="#ffffff" stroke-width="1.5"/>
        <text x="65" y="119" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">丁</text>
        <text x="65" y="137" fill="#38bdf8" font-size="9" text-anchor="middle">尼羅河流域</text>
        <!-- 丙：兩河流域 (美索不達米亞) -->
        <circle cx="115" cy="95" r="11" fill="#0284c7" stroke="#ffffff" stroke-width="1.5"/>
        <text x="115" y="99" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">丙</text>
        <text x="115" y="80" fill="#38bdf8" font-size="9" text-anchor="middle">兩河流域</text>
        <!-- 乙：印度河流域 -->
        <circle cx="185" cy="105" r="11" fill="#0284c7" stroke="#ffffff" stroke-width="1.5"/>
        <text x="185" y="109" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">乙</text>
        <text x="185" y="125" fill="#38bdf8" font-size="9" text-anchor="middle">印度河流域</text>
        <!-- 甲：黃河流域 (中國) -->
        <circle cx="265" cy="85" r="11" fill="#0284c7" stroke="#ffffff" stroke-width="1.5"/>
        <text x="265" y="89" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">甲</text>
        <text x="265" y="105" fill="#38bdf8" font-size="9" text-anchor="middle">黃河流域</text>
        <text x="170" y="185" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">四大古文明：皆起源於大河流域沃土，皆獨立發明文字</text>
      </svg>
    `;
  },

  // 13. Q27 S.P.Q.R. 羅馬鷹徽
  spqr_emblem: function() {
    return `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #881337; padding: 1.2rem; border-radius: 10px; border: 3px solid #f59e0b; max-width: 300px; box-shadow: 0 4px 6px rgba(0,0,0,0.4);">
        <!-- 金鷹與月桂冠 -->
        <div style="font-size: 2.2rem; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">🦅</div>
        <div style="font-size: 1.8rem; font-weight: 900; letter-spacing: 6px; color: #fef08a; text-shadow: 0 2px 4px rgba(0,0,0,0.6); margin: 0.3rem 0;">
          S · P · Q · R
        </div>
        <div style="font-size: 0.8rem; color: #fde68a; font-weight: 600; text-align: center; letter-spacing: 1px;">
          SENATVS POPVLVSQVE ROMANVS
        </div>
        <div style="font-size: 0.78rem; color: #fecdd3; margin-top: 0.3rem; text-align: center;">
          (元老院與羅馬公民 —— 羅馬共和體制之最高國家象徵)
        </div>
      </div>
    `;
  },

  // 14. Q28 蘇美祈禱者像
  sumerian_statue: function() {
    return `
      <svg width="200" height="220" viewBox="0 0 200 220" style="max-width:100%; height:auto;">
        <rect width="200" height="220" fill="#1e293b" rx="8"/>
        <!-- 圓光頭與長鬍鬚 -->
        <ellipse cx="100" cy="50" rx="20" ry="22" fill="#e2e8f0"/>
        <!-- 圓睜大眼睛 (青金石與貝殼鑲嵌) -->
        <circle cx="92" cy="48" r="6" fill="#fff" stroke="#000" stroke-width="1.5"/>
        <circle cx="92" cy="48" r="3" fill="#0284c7"/>
        <circle cx="108" cy="48" r="6" fill="#fff" stroke="#000" stroke-width="1.5"/>
        <circle cx="108" cy="48" r="3" fill="#0284c7"/>
        <!-- 濃密波浪形大鬍子 -->
        <path d="M 85,62 C 85,95 115,95 115,62 Z" fill="#334155" stroke="#1e293b"/>
        <!-- 胸前雙手交疊緊握祈禱姿勢 -->
        <ellipse cx="100" cy="100" rx="15" ry="8" fill="#cbd5e1" stroke="#475569"/>
        <!-- 穿著柔軟波浪羊毛裙 (Kaunakes) -->
        <path d="M 75,108 L 65,185 L 135,185 L 125,108 Z" fill="#f8fafc" stroke="#cbd5e1"/>
        <g stroke="#94a3b8" stroke-dasharray="2,2">
          <line x1="72" y1="125" x2="128" y2="125"/>
          <line x1="70" y1="145" x2="130" y2="145"/>
          <line x1="68" y1="165" x2="132" y2="165"/>
        </g>
        <rect x="60" y="185" width="80" height="15" fill="#475569" rx="3"/>
        <text x="100" y="212" fill="#94a3b8" font-size="9" text-anchor="middle">羅浮宮館藏蘇美阿斯馬爾祈禱雕像</text>
      </svg>
    `;
  },

  // 15. Q29 羅塞塔石碑
  rosetta_stone: function() {
    return `
      <svg width="220" height="240" viewBox="0 0 220 240" style="max-width:100%; height:auto;">
        <!-- 不規則黑色玄武岩/花崗閃長岩石碑 -->
        <path d="M 30,40 Q 60,20 180,25 L 195,225 L 25,220 Z" fill="#0f172a" stroke="#475569" stroke-width="2"/>
        <!-- 第一層：古埃及聖書體象形文字 -->
        <rect x="40" y="42" width="140" height="42" fill="#1e293b" stroke="#ca8a04" stroke-width="1"/>
        <text x="110" y="58" fill="#facc15" font-size="9" font-weight="bold" text-anchor="middle">【1】古埃及象形文字 (聖書體)</text>
        <text x="110" y="73" fill="#94a3b8" font-size="7.5" text-anchor="middle">祭司神官使用之神聖文字</text>
        <!-- 第二層：埃及草書通俗體 -->
        <rect x="38" y="94" width="145" height="52" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
        <text x="110" y="112" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">【2】埃及草書 (世俗體)</text>
        <text x="110" y="128" fill="#94a3b8" font-size="7.5" text-anchor="middle">平民與官員日常行政書寫</text>
        <!-- 第三層：古希臘文 -->
        <rect x="36" y="156" width="150" height="52" fill="#1e293b" stroke="#4ade80" stroke-width="1"/>
        <text x="110" y="174" fill="#4ade80" font-size="9" font-weight="bold" text-anchor="middle">【3】古希臘文字</text>
        <text x="110" y="190" fill="#94a3b8" font-size="7.5" text-anchor="middle">托勒密統治階層通用語言 (對照關鍵)</text>
        <text x="110" y="232" fill="#cbd5e1" font-size="8.5" text-anchor="middle">1799年羅塞塔石碑（大英博物館）</text>
      </svg>
    `;
  },

  // 16. Q33 加德水道橋
  pont_du_gard: function() {
    return `
      <svg width="340" height="200" viewBox="0 0 340 200" style="max-width:100%; height:auto;">
        <rect width="340" height="200" fill="#0f172a" rx="8"/>
        <!-- 天空背景 -->
        <!-- 最頂層 (第三層)：密集的連續小型圓拱 (輸水導管渠) -->
        <rect x="20" y="45" width="300" height="20" fill="#78350f"/>
        <g stroke="#0f172a" stroke-width="2" fill="#ca8a04">
          <circle cx="35" cy="55" r="5"/><circle cx="55" cy="55" r="5"/><circle cx="75" cy="55" r="5"/>
          <circle cx="95" cy="55" r="5"/><circle cx="115" cy="55" r="5"/><circle cx="135" cy="55" r="5"/>
          <circle cx="155" cy="55" r="5"/><circle cx="175" cy="55" r="5"/><circle cx="195" cy="55" r="5"/>
          <circle cx="215" cy="55" r="5"/><circle cx="235" cy="55" r="5"/><circle cx="255" cy="55" r="5"/>
          <circle cx="275" cy="55" r="5"/><circle cx="295" cy="55" r="5"/>
        </g>
        <text x="170" y="38" fill="#facc15" font-size="9" font-weight="bold" text-anchor="middle">頂層密閉引水道渠 (長50公里，每日供水4萬立方米)</text>
        <!-- 第二層：中型石拱 -->
        <rect x="20" y="65" width="300" height="40" fill="#92400e"/>
        <g fill="#0f172a">
          <path d="M 30,105 A 20,25 0 0,1 70,105 Z"/>
          <path d="M 85,105 A 20,25 0 0,1 125,105 Z"/>
          <path d="M 145,105 A 25,30 0 0,1 195,105 Z"/>
          <path d="M 215,105 A 20,25 0 0,1 255,105 Z"/>
          <path d="M 270,105 A 20,25 0 0,1 310,105 Z"/>
        </g>
        <!-- 底層：巨型拱跨與人車通行道路 -->
        <rect x="20" y="105" width="300" height="55" fill="#78350f"/>
        <g fill="#0f172a">
          <path d="M 35,160 A 30,45 0 0,1 95,160 Z"/>
          <path d="M 125,160 A 45,55 0 0,1 215,160 Z"/>
          <path d="M 245,160 A 30,45 0 0,1 305,160 Z"/>
        </g>
        <!-- 加爾東河 (河流) -->
        <rect x="0" y="160" width="340" height="40" fill="#0284c7" fill-opacity="0.6"/>
        <text x="170" y="180" fill="#e0f2fe" font-size="10" font-weight="bold" text-anchor="middle">加爾東河 (Gardon)</text>
        <text x="170" y="193" fill="#cbd5e1" font-size="8.5" text-anchor="middle">古羅馬高架水道橋實用工程</text>
      </svg>
    `;
  },

  // 17. Q34 羅馬帝國版圖
  map_roman_empire_reach: function() {
    return `
      <svg width="340" height="210" viewBox="0 0 340 210" style="max-width:100%; height:auto;">
        <rect width="340" height="210" fill="#0f172a" rx="8"/>
        <!-- 地中海水域 (羅馬內海) -->
        <path d="M 30,100 Q 80,90 140,110 Q 200,100 260,115 L 270,150 Q 150,140 40,145 Z" fill="#0284c7" fill-opacity="0.3"/>
        <text x="140" y="130" fill="#38bdf8" font-size="10">地中海 (我們的大海)</text>
        <!-- 甲 (西班牙) -->
        <circle cx="50" cy="105" r="11" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="50" y="109" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">甲</text>
        <text x="50" y="88" fill="#94a3b8" font-size="8" text-anchor="middle">西班牙 (行省)</text>
        <!-- 乙 (義大利) -->
        <circle cx="115" cy="85" r="11" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="115" y="89" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">乙</text>
        <text x="115" y="68" fill="#94a3b8" font-size="8" text-anchor="middle">義大利本土</text>
        <!-- 丙 (希臘) -->
        <circle cx="170" cy="95" r="11" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="170" y="99" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">丙</text>
        <text x="170" y="78" fill="#94a3b8" font-size="8" text-anchor="middle">希臘半島</text>
        <!-- 丁 (波斯高原深處，非羅馬統治) -->
        <circle cx="280" cy="95" r="15" fill="#dc2626" fill-opacity="0.8" stroke="#ffffff" stroke-width="2"/>
        <text x="280" y="100" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">丁</text>
        <text x="280" y="120" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">波斯高原深處</text>
        <text x="280" y="132" fill="#f87171" font-size="8" text-anchor="middle">(未曾被羅馬統治)</text>
      </svg>
    `;
  },

  // 18. Q42 羅馬歷史四大發展時期表格
  roman_eras_table: function() {
    return `
      <div style="width: 100%; max-width: 480px; background: #1e293b; border: 1px solid #334155; border-radius: 8px; overflow: hidden; font-size: 0.83rem;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #0284c7; color: #fff; text-align: left;">
            <th style="padding: 0.5rem; width: 50px; text-align: center;">代號</th>
            <th style="padding: 0.5rem;">政治特色描述</th>
            <th style="padding: 0.5rem; width: 100px;">歷史對應時期</th>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 0.5rem; text-align: center; font-weight: bold; color: #f59e0b;">甲</td>
            <td style="padding: 0.5rem; color: #e2e8f0;">分權制衡體制，頒布成文法(十二表法)，地中海成為「我們的大海」</td>
            <td style="padding: 0.5rem; color: #38bdf8; font-weight: 600;">共和時期 (②)</td>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 0.5rem; text-align: center; font-weight: bold; color: #f59e0b;">乙</td>
            <td style="padding: 0.5rem; color: #e2e8f0;">初期以國王為中心，後期受伊特拉斯坎等外族統治</td>
            <td style="padding: 0.5rem; color: #38bdf8; font-weight: 600;">王政時期 (①)</td>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 0.5rem; text-align: center; font-weight: bold; color: #f59e0b;">丙</td>
            <td style="padding: 0.5rem; color: #e2e8f0;">平等遭到剝奪，所有人都聽命於奧古斯都一人</td>
            <td style="padding: 0.5rem; color: #38bdf8; font-weight: 600;">帝國初期盛世 (③)</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem; text-align: center; font-weight: bold; color: #f59e0b;">丁</td>
            <td style="padding: 0.5rem; color: #e2e8f0;">政治失去安定，制度遭破壞，外患內亂，軍備消耗造成嚴重經濟危機</td>
            <td style="padding: 0.5rem; color: #38bdf8; font-weight: 600;">帝國晚期衰亡 (④)</td>
          </tr>
        </table>
      </div>
    `;
  }
};
