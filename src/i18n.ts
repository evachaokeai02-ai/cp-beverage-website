export const translations = {
  en: {
    nav: {
      products: "Our Products",
      story: "Brand Story",
      inquiry: "Inquiry",
      contact: "Contact Us",
    },
    hero: {
      badge: "CP (Shangri-la) Beverage Co.",
      title1: "One Sip to",
      title2: "Colorful Shangri-La.",
      subtitle:
        '"The rainbow clouds drifting above Kawaboge Peak—radiant, full, untouched by the world—are the rare purity and quiet blessing that belong only to Shangri-La."',
      explore: "Explore Products",
      touch: "Get in Touch",
    },
    footer: {
      explore: "Explore",
      contact: "Contact",
      products: "Our Products",
      story: "Brand Story",
      email: "info@cpbeverage.com",
      company:
        "CP (Shangri-la) Beverage Co. is a leader in functional hydration, dedicated to quality and innovation.",
      region: "China / International",
      rights: "© 2026 CP (Shangri-la) Beverage Co. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Trade",
    },
  },

  zh: {
    nav: {
      products: "产品",
      story: "品牌故事",
      inquiry: "咨询",
      contact: "联系我们",
    },
    hero: {
      badge: "正大香格里拉饮品有限公司",
      title1: "一口开启",
      title2: "多彩香格里拉",
      subtitle: "卡瓦博格峰上的彩云，是香格里拉独有的纯净与祝福。",
      explore: "探索产品",
      touch: "联系我们",
    },
    footer: {
      explore: "探索",
      contact: "联系",
      products: "产品",
      story: "品牌故事",
      email: "info@cpbeverage.com",
      company: "正大香格里拉饮品专注功能性补水饮品，致力于品质与创新。",
      region: "中国 / 国际市场",
      rights: "© 2026 正大香格里拉饮品有限公司 版权所有",
      privacy: "隐私政策",
      terms: "贸易条款",
    },
  },
};

export type Language = keyof typeof translations;
