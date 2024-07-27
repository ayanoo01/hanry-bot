global.rpg = {

  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }

    const role = [
      { name: "طائر 🕊️", level: 0 },{ name: "عبد 🙍🏾‍♂️", level: 1 },
 { name: "فارس 🗡", level: 2 }, 
      { name: "نبيل 🛡", level: 4 }, { name: "ساحر🧙🏻‍♂️", level: 6 }, 
      { name: "قاتل شياطين", level: 8 }, { name: "مغتال ⚔️", level: 12 }, 
      { name: "صياد🎣🎽", level: 13 }, { name: "سياف 🗡✨", level: 14 }, 
      { name: "ساحر اعظم🧙🏻‍♂️", level: 16 }, { name: "امير 🤴", level: 20 }, 
      { name: "ملك👑", level: 24 }, { name: "خارق🍥", level: 28 }, 
      { name: "هاشيرا🔥🗡️", level: 32 }, { name: "شيطان سفلي😈🚬", level: 36 },
      { name: "شيطان علوي", level: 48 }, { name: "قائد الشيطاين🥀⚰️", level: 52 }, 
      { name: "ملك الشياطين", level: 56 }, { name: "تنين شيطاني", 
      { name: "تنين مقدس ⚜️", level: 100 },{ name: "ملك التنانين 🐲", level: 120 },{ name: "مستحضر ارواح 🧟‍♂️", level: 140 }
{ name: "سيد ظلال🕷☄️", level: 160 },{ name: "سيد المصير⚔️⚜️, level: 200 }

    ];

    return role.reverse().find(role => level >= role.level)
  }
      }
