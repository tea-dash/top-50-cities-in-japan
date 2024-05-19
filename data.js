const citiesData = [
    {
        "name": "Tokyo",
        "population": 13929286,
        "lat": 36,
        "lon": 140,
        "famous_foods": [
            {"english": "Sushi", "japanese": "寿司"},
            {"english": "Ramen", "japanese": "ラーメン"},
            {"english": "Tempura", "japanese": "天ぷら"}
        ]
    },
    {
        "name": "Yokohama",
        "population": 3775000,
        "lat": 35,
        "lon": 140,
        "famous_foods": [
            {"english": "Shumai", "japanese": "焼売"},
            {"english": "Sanma-men", "japanese": "サンマーメン"},
            {"english": "Naporitan", "japanese": "ナポリタン"}
        ]
    },
    {
        "name": "Osaka",
        "population": 2713000,
        "lat": 35,
        "lon": 136,
        "famous_foods": [
            {"english": "Takoyaki", "japanese": "たこ焼き"},
            {"english": "Okonomiyaki", "japanese": "お好み焼き"},
            {"english": "Kushikatsu", "japanese": "串カツ"}
        ]
    },
    {
        "name": "Nagoya",
        "population": 2305000,
        "lat": 35,
        "lon": 137,
        "famous_foods": [
            {"english": "Hitsumabushi", "japanese": "ひつまぶし"},
            {"english": "Miso Katsu", "japanese": "味噌カツ"},
            {"english": "Tebasaki", "japanese": "手羽先"}
        ]
    },
    {
        "name": "Sapporo",
        "population": 1952000,
        "lat": 43,
        "lon": 141,
        "famous_foods": [
            {"english": "Jingisukan", "japanese": "ジンギスカン"},
            {"english": "Soup Curry", "japanese": "スープカレー"},
            {"english": "Sapporo Ramen", "japanese": "札幌ラーメン"}
        ]
    },
    {
        "name": "Fukuoka",
        "population": 1620000,
        "lat": 34,
        "lon": 130,
        "famous_foods": [
            {"english": "Hakata Ramen", "japanese": "博多ラーメン"},
            {"english": "Motsunabe", "japanese": "もつ鍋"},
            {"english": "Mentaiko", "japanese": "明太子"}
        ]
    },
    {
        "name": "Kawasaki",
        "population": 1546000,
        "lat": 36,
        "lon": 140,
        "famous_foods": [
            {"english": "Kawasaki Dumplings", "japanese": "川崎餃子"},
            {"english": "Shumai", "japanese": "焼売"},
            {"english": "Kawasaki Curry", "japanese": "川崎カレー"}
        ]
    },
    {
        "name": "Kyoto",
        "population": 1475000,
        "lat": 35,
        "lon": 136,
        "famous_foods": [
            {"english": "Kaiseki Ryori", "japanese": "懐石料理"},
            {"english": "Yudofu", "japanese": "湯豆腐"},
            {"english": "Matcha Sweets", "japanese": "抹茶スイーツ"}
        ]
    },
    {
        "name": "Kobe",
        "population": 1537000,
        "lat": 35,
        "lon": 135,
        "famous_foods": [
            {"english": "Kobe Beef", "japanese": "神戸牛"},
            {"english": "Sobameshi", "japanese": "そばめし"},
            {"english": "Kobe Pudding", "japanese": "神戸プリン"}
        ]
    },
    {
        "name": "Saitama",
        "population": 1332000,
        "lat": 36,
        "lon": 140,
        "famous_foods": [
            {"english": "Unagi", "japanese": "うなぎ"},
            {"english": "Soka Senbei", "japanese": "草加煎餅"},
            {"english": "Sayama Tea", "japanese": "狭山茶"}
        ]
    },
    {
        "name": "Hiroshima",
        "population": 1194000,
        "lat": 34,
        "lon": 132,
        "famous_foods": [
            {"english": "Hiroshima Okonomiyaki", "japanese": "広島お好み焼き"},
            {"english": "Tsukemen", "japanese": "つけ麺"},
            {"english": "Oysters", "japanese": "牡蠣"}
        ]
    },
    {
        "name": "Sendai",
        "population": 1086000,
        "lat": 38,
        "lon": 141,
        "famous_foods": [
            {"english": "Gyutan", "japanese": "牛タン"},
            {"english": "Zunda Mochi", "japanese": "ずんだ餅"},
            {"english": "Kakitamajiru", "japanese": "かきたま汁"}
        ]
    },
    {
        "name": "Kitakyushu",
        "population": 940978,
        "lat": 34,
        "lon": 131,
        "famous_foods": [
            {"english": "Yaki Curry", "japanese": "焼きカレー"},
            {"english": "Hakata Tonkotsu Ramen", "japanese": "博多とんこつラーメン"},
            {"english": "Kawara Soba", "japanese": "瓦そば"}
        ]
    },
    {
        "name": "Chiba",
        "population": 979768,
        "lat": 36,
        "lon": 140,
        "famous_foods": [
            {"english": "Peanuts", "japanese": "ピーナッツ"},
            {"english": "Namerou", "japanese": "なめろう"},
            {"english": "Chiba Soba", "japanese": "千葉そば"}
        ]
    },
    {
        "name": "Sakai",
        "population": 833068,
        "lat": 35,
        "lon": 135,
        "famous_foods": [
            {"english": "Mozuku", "japanese": "もずく"},
            {"english": "Sakai Udon", "japanese": "堺うどん"},
            {"english": "Kishimen", "japanese": "きしめん"}
        ]
    },
    {
        "name": "Niigata",
        "population": 804193,
        "lat": 38,
        "lon": 139,
        "famous_foods": [
            {"english": "Koshihikari Rice", "japanese": "コシヒカリ"},
            {"english": "Noppe Soup", "japanese": "のっぺい汁"},
            {"english": "Hegi Soba", "japanese": "へぎそば"}
        ]
    },
    {
        "name": "Hamamatsu",
        "population": 796123,
        "lat": 35,
        "lon": 138,
        "famous_foods": [
            {"english": "Unagi Pie", "japanese": "うなぎパイ"},
            {"english": "Hamamatsu Gyoza", "japanese": "浜松餃子"},
            {"english": "Mikan", "japanese": "みかん"}
        ]
    },
    {
        "name": "Shizuoka",
        "population": 691911,
        "lat": 35,
        "lon": 138,
        "famous_foods": [
            {"english": "Shizuoka Oden", "japanese": "静岡おでん"},
            {"english": "Sakura Shrimp", "japanese": "桜えび"},
            {"english": "Wasabi", "japanese": "わさび"}
        ]
    },
    {
        "name": "Okayama",
        "population": 721891,
        "lat": 35,
        "lon": 134,
        "famous_foods": [
            {"english": "Barazushi", "japanese": "ばら寿司"},
            {"english": "Kibi Dango", "japanese": "きびだんご"},
            {"english": "Mamakari", "japanese": "ままかり"}
        ]
    },
    {
        "name": "Kumamoto",
        "population": 739859,
        "lat": 33,
        "lon": 131,
        "famous_foods": [
            {"english": "Basashi", "japanese": "馬刺し"},
            {"english": "Taipien", "japanese": "太平燕"},
            {"english": "Kumamoto Ramen", "japanese": "熊本ラーメン"}
        ]
    },
    {
        "name": "Kagoshima",
        "population": 593882,
        "lat": 32,
        "lon": 131,
        "famous_foods": [
            {"english": "Kurobuta Pork", "japanese": "黒豚"},
            {"english": "Shirokuma", "japanese": "白熊"},
            {"english": "Satsuma-age", "japanese": "薩摩揚げ"}
        ]
    },
    {
        "name": "Funabashi",
        "population": 644469,
        "lat": 36,
        "lon": 140,
        "famous_foods": [
            {"english": "Funabashi Ramen", "japanese": "船橋ラーメン"},
            {"english": "Bara Sushi", "japanese": "ばら寿司"},
            {"english": "Peanuts", "japanese": "ピーナッツ"}
        ]
    },
    {
        "name": "Hachioji",
        "population": 577513,
        "lat": 36,
        "lon": 139,
        "famous_foods": [
            {"english": "Hachioji Ramen", "japanese": "八王子ラーメン"},
            {"english": "Takoyaki", "japanese": "たこ焼き"},
            {"english": "Shumai", "japanese": "焼売"}
        ]
    },
    {
        "name": "Higashi-Osaka",
        "population": 509498,
        "lat": 35,
        "lon": 136,
        "famous_foods": [
            {"english": "Takoyaki", "japanese": "たこ焼き"},
            {"english": "Okonomiyaki", "japanese": "お好み焼き"},
            {"english": "Kushikatsu", "japanese": "串カツ"}
        ]
    },
    {
        "name": "Matsuyama",
        "population": 516482,
        "lat": 34,
        "lon": 133,
        "famous_foods": [
            {"english": "Jakoten", "japanese": "じゃこ天"},
            {"english": "Taimeshi", "japanese": "鯛めし"},
            {"english": "Botchan Dango", "japanese": "坊ちゃん団子"}
        ]
    },
    {
        "name": "Naha",
        "population": 319435,
        "lat": 26,
        "lon": 128,
        "famous_foods": [
            {"english": "Okinawa Soba", "japanese": "沖縄そば"},
            {"english": "Goya Champuru", "japanese": "ゴーヤチャンプルー"},
            {"english": "Sata Andagi", "japanese": "サーターアンダギー"}
        ]
    },
    {
        "name": "Kanazawa",
        "population": 465699,
        "lat": 37,
        "lon": 137,
        "famous_foods": [
            {"english": "Kanazawa Curry", "japanese": "金沢カレー"},
            {"english": "Jibuni", "japanese": "治部煮"},
            {"english": "Gori", "japanese": "ゴリ"}
        ]
    },
    {
        "name": "Ichikawa",
        "population": 491165,
        "lat": 36,
        "lon": 140,
        "famous_foods": [
            {"english": "Ichikawa Udon", "japanese": "市川うどん"},
            {"english": "Peanuts", "japanese": "ピーナッツ"},
            {"english": "Namerou", "japanese": "なめろう"}
        ]
    },
    {
        "name": "Oita",
        "population": 478490,
        "lat": 33,
        "lon": 132,
        "famous_foods": [
            {"english": "Toriten", "japanese": "とり天"},
            {"english": "Dango-Jiru", "japanese": "だんご汁"},
            {"english": "Bungo Beef", "japanese": "豊後牛"}
        ]
    },
    {
        "name": "Nagasaki",
        "population": 421229,
        "lat": 33,
        "lon": 130,
        "famous_foods": [
            {"english": "Champon", "japanese": "ちゃんぽん"},
            {"english": "Sara Udon", "japanese": "皿うどん"},
            {"english": "Kasutera", "japanese": "カステラ"}
        ]
    },
    {
        "name": "Kurashiki",
        "population": 476800,
        "lat": 35,
        "lon": 134,
        "famous_foods": [
            {"english": "Mamakari Sushi", "japanese": "ままかり寿司"},
            {"english": "Kibi Dango", "japanese": "きびだんご"},
            {"english": "Denraku", "japanese": "でんらく"}
        ]
    },
    {
        "name": "Gifu",
        "population": 399777,
        "lat": 35,
        "lon": 137,
        "famous_foods": [
            {"english": "Hoba Miso", "japanese": "朴葉味噌"},
            {"english": "Keichan", "japanese": "けいちゃん"},
            {"english": "Ayugashi", "japanese": "あゆ菓子"}
        ]
    },
    {
        "name": "Nishinomiya",
        "population": 481942,
        "lat": 35,
        "lon": 135,
        "famous_foods": [
            {"english": "Nishinomiya Sushi", "japanese": "西宮寿司"},
            {"english": "Udon", "japanese": "うどん"},
            {"english": "Tai Meshi", "japanese": "鯛めし"}
        ]
    },
    {
        "name": "Matsudo",
        "population": 487878,
        "lat": 36,
        "lon": 140,
        "famous_foods": [
            {"english": "Peanuts", "japanese": "ピーナッツ"},
            {"english": "Namerou", "japanese": "なめろう"},
            {"english": "Matsudo Ramen", "japanese": "松戸ラーメン"}
        ]
    },
    {
        "name": "Toyama",
        "population": 413521,
        "lat": 37,
        "lon": 137,
        "famous_foods": [
            {"english": "Masu Sushi", "japanese": "鱒寿司"},
            {"english": "Toyama Black Ramen", "japanese": "富山ブラックラーメン"},
            {"english": "Firefly Squid", "japanese": "ホタルイカ"}
        ]
    },
    {
        "name": "Toyota",
        "population": 423727,
        "lat": 35,
        "lon": 137,
        "famous_foods": [
            {"english": "Gohei Mochi", "japanese": "五平餅"},
            {"english": "Miso Katsu", "japanese": "味噌カツ"},
            {"english": "Dengaku", "japanese": "田楽"}
        ]
    },
    {
        "name": "Nagano",
        "population": 376536,
        "lat": 37,
        "lon": 138,
        "famous_foods": [
            {"english": "Soba", "japanese": "そば"},
            {"english": "Nozawana", "japanese": "野沢菜"},
            {"english": "Oyaki", "japanese": "おやき"}
        ]
    },
    {
        "name": "Himeji",
        "population": 531548,
        "lat": 35,
        "lon": 135,
        "famous_foods": [
            {"english": "Himeji Oden", "japanese": "姫路おでん"},
            {"english": "Anago", "japanese": "穴子"},
            {"english": "Kakinoha Sushi", "japanese": "柿の葉寿司"}
        ]
    },
    {
        "name": "Utsunomiya",
        "population": 519223,
        "lat": 37,
        "lon": 140,
        "famous_foods": [
            {"english": "Gyoza", "japanese": "餃子"},
            {"english": "Utsunomiya Ramen", "japanese": "宇都宮ラーメン"},
            {"english": "Strawberries", "japanese": "いちご"}
        ]
    },
    {
        "name": "Fujisawa",
        "population": 435052,
        "lat": 35,
        "lon": 139,
        "famous_foods": [
            {"english": "Shirasu Don", "japanese": "しらす丼"},
            {"english": "Fujisawa Udon", "japanese": "藤沢うどん"},
            {"english": "Sardines", "japanese": "いわし"}
        ]
    },
    {
        "name": "Okinawa",
        "population": 138431,
        "lat": 26,
        "lon": 128,
        "famous_foods": [
            {"english": "Okinawa Soba", "japanese": "沖縄そば"},
            {"english": "Goya Champuru", "japanese": "ゴーヤチャンプルー"},
            {"english": "Sata Andagi", "japanese": "サーターアンダギー"}
        ]
    },
    {
        "name": "Kashiwa",
        "population": 426209,
        "lat": 36,
        "lon": 140,
        "famous_foods": [
            {"english": "Kashiwa Ramen", "japanese": "柏ラーメン"},
            {"english": "Peanuts", "japanese": "ピーナッツ"},
            {"english": "Namerou", "japanese": "なめろう"}
        ]
    },
    {
        "name": "Suita",
        "population": 382127,
        "lat": 35,
        "lon": 136,
        "famous_foods": [
            {"english": "Takoyaki", "japanese": "たこ焼き"},
            {"english": "Okonomiyaki", "japanese": "お好み焼き"},
            {"english": "Kushikatsu", "japanese": "串カツ"}
        ]
    },
    {
        "name": "Soka",
        "population": 248920,
        "lat": 36,
        "lon": 140,
        "famous_foods": [
            {"english": "Soka Senbei", "japanese": "草加煎餅"},
            {"english": "Peanuts", "japanese": "ピーナッツ"},
            {"english": "Unagi", "japanese": "うなぎ"}
        ]
    },
    {
        "name": "Kochi",
        "population": 334750,
        "lat": 34,
        "lon": 134,
        "famous_foods": [
            {"english": "Katsuo no Tataki", "japanese": "かつおのたたき"},
            {"english": "Sawachi Ryori", "japanese": "皿鉢料理"},
            {"english": "Yuzu", "japanese": "柚子"}
        ]
    },
    {
        "name": "Takamatsu",
        "population": 416267,
        "lat": 34,
        "lon": 134,
        "famous_foods": [
            {"english": "Sanuki Udon", "japanese": "讃岐うどん"},
            {"english": "Olive Beef", "japanese": "オリーブ牛"},
            {"english": "Honetsuki-dori", "japanese": "骨付鳥"}
        ]
    },
    {
        "name": "Kawagoe",
        "population": 353868,
        "lat": 36,
        "lon": 139,
        "famous_foods": [
            {"english": "Sweet Potato", "japanese": "さつまいも"},
            {"english": "Unagi", "japanese": "うなぎ"},
            {"english": "Kashiya Yokocho Sweets", "japanese": "菓子屋横丁のスイーツ"}
        ]
    },
    {
        "name": "Akita",
        "population": 314880,
        "lat": 40,
        "lon": 140,
        "famous_foods": [
            {"english": "Kiritanpo", "japanese": "きりたんぽ"},
            {"english": "Inaniwa Udon", "japanese": "稲庭うどん"},
            {"english": "Iburi-gakko", "japanese": "いぶりがっこ"}
        ]
    },
    {
        "name": "Morioka",
        "population": 291835,
        "lat": 40,
        "lon": 141,
        "famous_foods": [
            {"english": "Wanko Soba", "japanese": "わんこそば"},
            {"english": "Reimen", "japanese": "冷麺"},
            {"english": "Jajamen", "japanese": "じゃじゃ麺"}
        ]
    },
    {
        "name": "Nara",
        "population": 355329,
        "lat": 35,
        "lon": 136,
        "famous_foods": [
            {"english": "Kaki no Ha Sushi", "japanese": "柿の葉寿司"},
            {"english": "Miwa Somen", "japanese": "三輪そうめん"},
            {"english": "Chagayu", "japanese": "茶粥"}
        ]
    }
]
