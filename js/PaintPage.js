$(document).ready(function () {
  /*切換畫家作品分頁&頁面滑到最上方*/
  $("#tabs").tabs({
    event: "mouseover",
    activate: function(event, ui){
      $('html,body').animate({scrollTop:0}, 0);
    }
  });

  /*回首頁*/
  $('.web_title h1').click(function () {
    $(location).attr('href', 'index.html');
  });

  /*bgm*/
  var audio = new Audio("SRC/AUDIO/classical-music (1).mp3");
  //audio.play();
  audio.volume = 0.1;
  audio.loop = true;

  /*當滑鼠點擊到intro BTN ，介紹視窗顯示;點擊關閉則消失(包含dialog介紹視窗內的介紹文字變更)*/
  //各畫家畫作
  var dialog_artname = [
    ["Nascita di Venere 維納斯的誕生", "Primavera 春", "Nascita di Venere 維納斯的誕生", "L'Adorazione dei Magi 三王朝拜", "Venere e Marte 維納斯與戰神"],
    ["割掉耳朵後的自畫像", "夜晚露天咖啡座", "十五朵向日葵", "星空", "吃土豆的人"],
    ["達文西自畫像", "蒙娜麗莎", "安吉里之戰", "抱貂女郎", "最後的晚餐"],
    ["Het meisje met de parel 戴珍珠耳環的少女", "De Melkmeid 倒牛奶的女僕", "Femme tenant un luth 在窗邊拿著魯特琴的女子", "A Maid Asleep 睡著的女僕", "Het glas wijn 一杯酒"],
    ["聖喬治大戰惡龍", "聖母子與施洗者約翰", "基督被解下十字架", "雅典學派", "聖禮的辯論"],
  ]
  //各畫家畫作介紹
  var dialog_intro = [
    ["在早期的文藝復興，大約由這幅畫開始，作畫題材由聖經故事改為希臘（羅馬）神話，即由宗教變成異教題材。人物比例不對，頸部較長，下半身較大，肩膀也是窄小下塌，正是為了使她的身體線條更加優美而忽視了應有的正常形態，畫家重視感覺勝於比例。畫中有不少光暗，使人物穿的衣物有了柔軟、輕薄的感覺。",
      "描繪了耶穌降生後東方三博士來朝拜的一角：伯利恆上空出現一顆奇亮的星星，三博士測知將有救世主降生，他們就攜帶禮物與眾家人，有那奇亮的星星尋來的方向，並在伯利恆找到剛生下的小耶穌。傳統但宗教信仰在不同的人物千差萬別構圖，總是有學識淵博的博士與小耶穌。",
      "在早期的文藝復興，大約由這幅畫開始，作畫題材由聖經故事改為希臘（羅馬）神話，即由宗教變成異教題材。人物比例不對，頸部較長，下半身較大，肩膀也是窄小下塌，正是為了使她的身體線條更加優美而忽視了應有的正常形態，畫家重視感覺勝於比例。畫中有不少光暗，使人物穿的衣物有了柔軟、輕薄的感覺。",
      "波提切利在1480年代創作的這幅《春》，是送給美第奇家族成員的新婚賀禮。他經常為美第奇家族作畫，這個佛羅倫薩的名門望族對古希臘經典文學的思想和意象很有興趣，因此這幅畫中的人物形象和象徵意涵來自多位古代作家，其中最具影響力的是奧維德。",
      "愛神維納斯和戰神瑪爾斯躺在一起。維納斯穿著衣服，胸前掛著連接頭髮的飾品。端坐，兩眼有神地看著瑪爾斯。而瑪爾斯則是半裸地睡著了。邊上四個半羊人小鬼或者是半獸人在一旁戲弄熟睡的瑪爾斯，穿著他的鎧甲拿著他的武器，並且在他的耳邊吹號角（象征戰鬥）。瑪爾斯睡得像塊木頭，環繞背景的是一片愛神樹林。整個畫面構圖平穩，寧靜。象徵愛的力量征服了戰爭。"],
    ["這幅作於1888年2月的《割掉耳朵後的自畫像》，是給後人留下的第一幅展現梵谷當時在阿爾勒的精神狀態的自畫像。畫家有一個高高的向上斜的前額、一個強有力的鷹勾鼻子、三角形不對稱的臉孔和那突出的顴骨、下陷的雙頰，他的形象給人以極其深刻印象。梵谷的自畫像，往往成為對畫家心理探索的佐證，是畫家性格特徵的一面鏡子。畫家在描繪自己時，敢於剖析，毫不掩飾地揭示出他性格中最令人感到意外，卻又是最為動人的一面。此幅肖像作於他的「割耳朵事件」發生一個多月之後。此刻，畫家已找到了他內心的自我平衡。",
      "梵谷經常在晚上光顧離他住所不遠的咖啡館。咖啡館的耀眼燈光和布滿天空的星辰，激發了他作畫的熱情。他在這幅畫上，用黃和藍來表現一種獨特感受。畫中被燈光照成黃色的咖啡座和藍色星空的對比，使整幅畫顯得很美，洋溢著一種平和的詩意。梵谷曾說：「對我來說，晚上看來比白天更有活力，更有豐富的色彩，晚上作畫，看天上有閃爍的星星，地面有燈光，是一幅很美的與安詳的作品。」",
      "《十五朵向日葵》打破陳規，強烈的對比顏色和厚重的色塊結合得天衣無縫，更創造出新的對比色系，對往後的藝術發展產生深遠的影響。此畫以黃色和橙色為主調,用綠色和藍色的細膩筆觸勾勒出花瓣和花莖,簽名和一朵花的中心也使用了藍色。籽粒上的濃重色點具有醒目的效果,纖細的筆觸力圖表現花盤的飽滿和紋理的婀娜感覺。",
      "作為表現性的後印象主義畫家梵谷的作品，這幅畫有很強的筆觸。油畫中的主色調藍色代表不開心、陰沉的感覺。很粗的筆觸代表憂愁。畫中景象是一個望出窗外的景象。畫中的樹是柏樹，但畫得像黑色火舌一般，直上雲端，令人有不安之感。天空的紋理像渦狀星系，並伴隨眾多星點，而月亮則是以昏黃的月蝕形式出現。",
      "這幅《吃土豆的人》是梵谷接觸印象派之前的最重要作品。與前面以織布工為題材的作品相比，這幅畫的明顯不同在於人物成了主角。梵谷在這幅畫中加入了自己的主觀情感，而不再拘泥於寫實主義的「冷靜旁觀」。"],
    ["《自畫像》是達文西的素描精品。在達文西的藝術遺產中，大量的素描習作也頗值得重視，這些素描和他的正式作品一樣，同樣達到了極高的水平，被譽為素描藝術的典範。在這幅《自畫像》中，畫家觀察入微，用的線條豐富多變，剛柔相濟尤其善用濃密程度不同斜線表現光暗的微妙變化，此畫用線生動靈活，概括性強，簡單的寥寥數筆卻包含許多轉折，體面關係，發線代面，立體感很強，還有，人物的表情也很傳神。",
      "這是達文西的著名肖像畫作品，它代表了達文西的藝術思想。畫面描繪了一位恬靜端莊的美麗少女，她充滿著對生活的喜悅和信心。畫家敏捷地抓住少女一瞬間微笑的表情，表現出她微妙的心裡活動，給觀眾以豐富的聯 想。肖像以柔和的色調、細膩的手法刻畫了少女的臉部、頸部和手部。這種甜美的藝術風格和文藝復興時期對人性的歌頌，以及對女性美的欣賞觀念是完全一致的。達·文西用三年的時間在佛羅倫斯繪製了這幅肖像畫，結果這幅油畫成為了世界上最著名的油畫作品，並永載史冊。畫面中肖像人物的身世、訂畫的意圖以及後來是如何被法國王室收藏的，至今仍然是個謎團，無法確定。",
      "此幅精美的肖像畫，描繪了氣質高貴、外表文靜的切奇利亞·加勒蘭妮，她是米蘭的多維哥·史弗薩公爵的情婦，備受寵幸。畫家運用光線和陰影襯托出切奇利亞優雅的頭顱和柔美的臉龐，懷中抱著的毛色光潤、形態逼真的 白貂使畫面生動了起來。白貂在這裡取其象徵意義，成為他的個人化身，達文西的肖像畫真正做到了形神兼備而 得到世人的推崇。",
      "《最後的晚餐》是為米蘭聖瑪利亞修道院餐廳所畫的壁畫，取材於《聖經》中最重要的故事，也曾被達文西之前許多宗教畫家描繪過。但在之前，所有的畫家對畫面藝術形象處理都有一個共同的特點：那就是把猶大與眾門徒分隔開，畫在餐桌的對面，處在孤立被審判的位置上。這是因為畫家們對人的內心複雜情感無法表現，從形象上難以區別善惡。由於達文西對人的形象和心理作過深入的觀察和研究，能從人物的動作、姿態、表情中洞察人物微妙的心理活動並表現出來。這幅表現耶穌被捕前和門徒最後會餐訣別場面的濕壁畫，巧妙的構圖和獨具匠心的經營布局，使畫面上的廳堂與生活中的飯廳建築結構緊密聯結在一起，畫面占滿了修道院食堂大廳的整個牆面，使觀者感覺畫中的情景似乎就發生在眼前。",
      "504年，達文西和米開朗基羅受命在佛羅倫斯維奇歐宮五百人大廳的牆壁上繪製雄渾壯闊的戰爭場景，創作了著名的壁畫《安吉里之戰》，希望藉助這幅作品將佛羅倫斯軍隊1440年上演的經典戰役再次呈現在世人面前。由於一些原因，這幅用油畫顏料創作的壁畫最終未能完成。但與達文西同時代的人認為，《安吉里之戰》無疑是他最偉大的繪畫作品。"],
    ["十七世紀荷蘭畫家揚·弗美爾的作品。畫作以少女戴著的珍珠耳環作為視角的焦點，現時畫作存放在海牙的毛里茨住宅中。基本上，對弗美尔本人或者他的作品，後人所知的都不多。畫作署名「IVMeer」，但沒有日期。沒有人知道這幅畫作的代理權誰屬，甚至不知道作者有沒有交付過代理權給任何人。近年有專家指出此畫作可能是一幅「tronie」，即17世紀的荷蘭流行的頭像，而這種頭像嚴格而言算不上是一幅畫作。於1994年的修復後，畫作精密的顏色運用及畫中少女對其觀察者的親密目光更被專家所留意。",
      "此畫現藏於阿姆斯特丹國家博物館，是館中珍藏之一。實際上此畫的具體完成時間尚不確定，不同的來源之間有細微差異。按阿姆斯特丹國家博物館的說法，其完于1658年左右，按紐約大都會藝術博物館，其時間在1657–1658年間。也有認為是在1658–1661年間的。儘管標題裏寫的是“Melkmeid”，畫中人物可能只是一個廚房女僕，而並不是負責擠牛奶的“Melkmeid”（字面意思就是“牛奶女僕”）。畫中的女僕正在小心地將牛奶從牛奶罐中倒入一個今天所謂的荷蘭鍋（英语：Dutchoven）中。",
      "年輕女子在微調魯特琴的同時，望了窗外一眼。地板上散落的歌本和維奧爾琴代表她正在準備二重奏。荷蘭共和國富裕的年輕人將音樂視為教育的一部分，而業餘音樂會則為調情開啟了一個令人欣喜的機會。背景中的歐洲地圖反映出荷蘭家庭的當代裝飾，這是該國在航海和製圖領域中卓越地位的驕傲象徵。",
      "衣著優雅的年輕人正在看著一名女子喝完一杯酒。他把手放在酒壺上，似乎在等著重新裝滿酒杯。維梅爾採用了傳統的「葡萄酒、女性和歌曲」主題，並且明顯受到 ter Borch 畫作的影響，將其轉化為高雅的密談。在 ter Borch 的畫作中，騎士的手臂環繞著女人的肩膀，但維梅爾沒有明顯揭示這對畫中人的關係。我們也無從確定飲用酒精是否會導致踰矩的行為。維梅爾只提供些許暗示。椅子上的大魯特琴是經常在他畫作中出現的一種樂器，同時象徵著和諧與輕佻。玻璃窗還印有紋章，顯現一名手持韁繩的女性，這代表節制",
      "無人監督且行為不端的女僕是 17 世紀荷蘭畫家的常見主題。不過，在描繪年輕女僕在一杯葡萄酒旁邊打瞌睡時，維梅爾將一個普通的場景轉變成對光線、顏色和質地的細究，取代任何道德教條。雖然前景中倒塌的玻璃容器 (現已磨損)和皺巴巴的桌布暗示著訪客可能剛剛離開，但維梅爾選擇移除他最初納入站在門口的男性人物形象，提高了畫作的模糊性。"],
    ["拉斐爾共繪製了兩幅表現聖喬治與惡龍格鬥的油畫。我們所見的這一幅，以其迅猛的動作及無比生動的受驚的戰馬，表明了畫家深受佛羅倫斯風格，特別是達文西風格的熏陶。畫面上人與獸爭戰正烈，聖喬治鬆開馬韁，舉起利劍，正要給惡龍以致命的一擊。拉斐爾的這幅畫同烏切羅斯繪同樣主題的畫作相比較，我們便能立判兩者的高下。拉斐爾筆下的人物和馬和惡龍所顯現的格鬥張力十足、逼真；反觀烏切羅的畫就顯得平板呆滯了。相對於拉斐爾畫中的龍身上插著矛頭，斷成數截的矛柄散落在地上，更顯出搏鬥的艱苦卓絕。右邊那個脫離了危險的女郎正穿過荒石倉惶奔逃。左邊可見幾株纖細的樹幹，被擊敗的龍的身軀在樹幹的襯托下顯得格外醒目，背後的風景向遠處延伸，直到作為襯景的山崗和湖泊。在色彩的運用上，拉斐爾突出了白色戰馬與深色乃至黑色的騎士盔甲及龍的對比；作為襯景的小山則採用青褐色，此色調漸漸變淡，最後融進背景深處的藍天。",
      "目前傳世的拉斐爾聖母子畫像中，有很小幅的，也有大型的祭壇畫，呈現的氣氛也各有不同。這幅親和的聖母子像，又有《綠野的聖母子》之稱，是拉斐爾停留在佛羅倫斯時所作的。過去幾世紀，畫中聖母的容貌一直被許多藝術家視為美的模特兒。聖母子是拉斐爾最常創作的主題。由於這是基督教世界非常普遍的題材，創作的數量自然也最多，拉斐爾雖然也時常畫同樣的主題，卻不曾限於千篇一律，是一位相當難得的畫家。在他的畫中常可看到新的嘗試，這都是為了構圖上的調和而作的必然融入，絕對不是只是在標新立異。",
      "拉斐爾在這幅祭壇畫中，以三角形為基礎構圖，這種安排不僅成是作品的基礎，而且具有特別的意義，突顯出基督遺體被抬走的這個主題。這幅作品本是阿塔蘭塔．巴廖尼為追念被害的兒子而委託拉斐爾繪製的祭壇畫，巴廖尼希望在聖母的臉上表現出自己喪子之痛。過去專家們從十六張經過反覆修改的畫稿發現此畫其實是由兩幅畫稿合併而成。從某種程度上說，拉斐爾是在迫不得已的情況下將聖母昏厥的場面插入畫中的，描繪的角度從哀傷死去的基督的原始考慮轉向抬走基督的遺體。畫家設法彌合兩個場面的斷裂：右邊那個強壯的搬運者雖然是抬基督遺體的那組主要人物之一，身體卻向相反方向傾斜。即便如此，作品仍未能達成一幅畫完成時，在觀念上所需要的統一性。即使這幅畫的描繪非常細膩，但卻無法彌補少了統一性之後的缺憾。",
      "顯而易見，在「雅典學派」這幅壁畫的構圖上，建築學與透視法具有特別重要的作用和意義：一是製造氣氛，即布置了展開場景的空間，向縱深展開的拱門形成了人物活動的空間；二是簡潔的構圖，把眾多的人物按不同的組別加以布置安排。在這幅壁畫中，人物、學者、藝術家、哲學家全都被安排在一座宏偉的廳堂內，廳堂用柱子、壁龕、雕像、淺浮雕裝飾，這樣的布局突出了這個雄偉拱門的寓意及建築意義。大廳中央是脥下挾著「蒂邁烏斯篇」、富於象徵意義地以食指指天的柏拉圖，以及一手拿「倫理學」、另一隻手臂伸向前方的亞里士多德。這幅畫的特色是用簡單的形象來表達最複雜的思想，換句話說，拉斐爾成功的用十分具像的視覺符號表達出十分複雜的抽象理念。",
      "教皇朱力斯二世之所以委託拉斐爾承擔大廳的裝飾工作，是因為他確認拉斐爾不但畫藝精湛，還具有堅定的文藝復興新思想，並帶有羅馬教會所標榜的新世界觀念。《聖禮的辯論》在布局上與《雅典學派》迥然不同。《雅典學派》的結構採用了真正的建築學的配置，高挑的拱門形成了開闊的空間，人物的活動便在這個空間中進行；而在《聖禮的辯論》中，這一「建築」是由一組井然有序的人物來表示的，人物的對稱排列精確而又富於象徵意義，力圖表現作為精神世界象徵的空間性。《聖禮的辯論》的結構中那些平行的同心圓便是天國的象徵。作品既體現了結構、概念的統一，又不忽略細節的描繪。"]
  ]
  for (let i = 1; i <= 25; i++) {
    $(`#intro${i}`).click(() => {

      let painternum = Math.ceil(i / 5) - 1;
      let paintintro = (i - 1) % 5;

      $('#artname').text(dialog_artname[painternum][paintintro]);
      $('#introduction').text(dialog_intro[painternum][paintintro]);
      $(`#dialog`).dialog('open');
    });

    $(`#dialog button`).click(() => {
      $(`#dialog`).dialog('close');
    });
  }

  /*點擊愛心後動作(Sandro Botticelli)*/
  //創造一個陣列，計算每幅畫作的愛心點擊次數
  var countH = [];
  while (countH.length < 25) {
    countH.push(0);
  }
  //畫家名字及畫作名
  var paint = [
    ["Sandro Botticelli", "L\'Adorazione dei Magi", "Venus", "Nascita di Venere", "Primavera", "mythological painting"],
    ["van Gogh", "割掉耳朵後的自畫像", "夜晚露天咖啡座", "十五朵向日葵", "星夜", "吃土豆的人"],
    ["Da vinci", "達文西自畫像1", "蒙娜麗莎2", "抱貂女郎3", "最後的晚餐4", "安吉里之戰5"],
    ["Jan Vermeer", "Het meisje met de parel", "De Melkmeid", "Femme tenant un luth", "Het glas wijn", "A Maid Asleep"],
    ["Raphael", "聖喬治大戰惡龍", "聖母子與施洗者約翰1", "基督被解下十字架", "雅典學派", "聖禮的辯論"]
  ]
  for (let i = 1; i <= 25; i++) {

    $(`#heart${i}`).click(function () {
      //paint陣列用，${paint[painterCount][0]}代表作家
      var painterCount = Math.ceil(i / 5) - 1;
      //paint陣列用，${paint[painterCount][paintingCount]}代表作家的畫作
      var paintingCount = i % 5;
      if (paintingCount == 0) paintingCount = 5;
      //計算第幾個畫家用(從1開始，非陣列的0開始)
      var painter = Math.ceil(i / 5);
      //記算各畫作點擊愛心次數用
      countH[i - 1]++;

      //點擊空心愛心，顯示愛心購物車的愛心與畫作
      if (countH[i - 1] % 2 != 0) {
        //切換被點擊的空心愛心為實心愛心
        document.getElementById(`heart${i}`).src = 'SRC/icon/heartfull.png';
        //首次點擊到畫作的空心愛心，在愛心購物車內動態新增畫作與愛心
        if (countH[i - 1] == 1) {
          $(`#P${painter}`).html($(`#P${painter}`).html() + "<div style='float:left;'><div>").append(`<img id="p${i}" src="SRC/IMG/painter\'s paints/${paint[painterCount][0]}/${paint[painterCount][paintingCount]}.jpg" class="smallpicture">`);
          $(`#${painter}_heart`).html($(`#${painter}_heart`).html() + "<div style='float:left;'><div>").append(`<img id="hrt${i}" class="hrtcart" src="SRC/icon/heartfull.png" >`);
        }
        //非首次點擊空心愛心，顯示愛心購物車的愛心與畫作
        else {
          $(`#hrt${i}`).show();
          $(`#p${i}`).show();
        }
      }
      //點擊實心愛心，隱藏愛心購物車的愛心與畫作
      else {
        //切換被點擊的實心愛心為空心愛心
        document.getElementById(`heart${i}`).src = 'SRC/icon/heartunfull.png';
        $(`#hrt${i}`).hide();
        $(`#p${i}`).hide();
      }
    })
  }

  /*愛心購物車內畫家點擊slide*/
  var H_click = [false, false, false, false, false];
  for (let s = 1; s <= 5; s++) {

    $(`#P${s}`).slideUp();

    $(`#col-${s}`).click(() => {
      H_click[s - 1] = !H_click[s - 1];
      //true
      if (H_click[s - 1]) {
        $(`#P${s}`).slideDown();
        //所有畫家購物車除了點擊到的除外，都收起來
        H_click.forEach((item, index) => {
          if (index != s - 1) {
            $(`#P${index + 1}`).slideUp();
            H_click[index] = false;
          }
        });
      }
      //false
      else {
        $(`#P${s}`).slideUp();
      }
    })
  }

  /*對話框*/
  var msg = false;
  $('.msg').click(function () {
    msg = !msg;
    if (msg) {
      $('#hello').show();
    }
    else {
      $('#hello').hide();
    }
  })

  /*填上對話框上方的名字*/
  $('#paintername1').text($('#1').text());

  /*對話框內點擊對話*/
  var painterName = ["Sandro Botticelli", "van Gogh", "Da Vinci", "Jan Vermeer", "Raphael"];
  var painterImg = ["Sandro", "van", "Da", "jan", "raphael"];
  var painterWord = ["How are you?", "I like your paints.", "I\'m your fan.", "wellknow artwork?", "I love you."];
  var liveWord = ['Italy', 'Netherlands', 'Italy', 'Netherlands', 'Italy'];
  var howWord1 = ['How are you?', 'I like your paints.', 'I\'m your fan.', 'wellknow artwork?', 'I love you.'];
  var howWord2 = ['I\'m fine.Have a nice day.', 'Thank you!!!', 'Nice to meet you!!!', 'Het meisje met de parel.', 'Love you too!!!'];
  //點擊對話Btn出現內容
  function talk(count) {
    $CountArray = count - 1;
    $(`#hi${count}`).click(function () {
      $(`#talk${count}`).append(`
            <div class="btntalk" style="float: right; ">hi!!</div>
            <br><br>
            <div class="btntalk" style="float: left;">hello!!</div>
            <br><br>
          `);
    })
    $(`#live${count}`).click(function () {
      $(`#talk${count}`).append(`
            <div class="btntalk" style="float: right; ">where are you from?</div>
            <br><br>
            <div class="btntalk" style="float: left;">I am from ${liveWord[$CountArray]}.</div>
            <br><br>
          `);
    })
    $(`#how${count}`).click(function () {
      $(`#talk${count}`).append(`
            <div class="btntalk" style="float: right; ">${howWord1[$CountArray]}</div>
            <br><br>
            <div class="btntalk" style="float: left;">${howWord2[$CountArray]}</div>
            <br><br>
          `);
    })
  }
  //初始頁面點擊對話Btn出現內容
  talk(1);
  //切換道不同頁籤內容更換與對話Btn點擊出現內容
  for (let i = 1; i <= 5; i++) {
    $(`#ui-id-${i}`).mouseover(function () {
      $('#hello').html(`
          <p id="paintername${i}">${painterName[i - 1]}</p>
          <div id="talk${i}">
            <div class="talk-intro">
              <img class="picture" src="SRC/IMG/artist png/${painterImg[i - 1]}.png">
              <div class="btntalk" >Hello!!I\'am ${painterName[i - 1]}.
              </div>
            </div>
            <br><br>
          </div>
          <div id="talkclick"> 
            <button class="btntalk" id="hi${i}">hi</button>
            <button class="btntalk" id="live${i}">where are you from?</button>
            <button class="btntalk" id="how${i}">${painterWord[i - 1]}</button>
          </div>
        `)
      talk(i);
    })
  }

  //當 愛心購物車/對話框 開啟時，點擊到畫面中任意地方會將其關閉
  $('.all').click(() => {
    if ($('#collect').is(':visible')) {
      carVisible = !carVisible;
      $('#collect').hide();
    };
    if ($('#hello').is(':visible')) {
      msg = !msg;
      $('#hello').hide();
    };
  })

  /*分享按鈕以line分享圖片*/
  $('.share').click(function (e) {
    e.preventDefault();
    //取得目前網址
    var currentURL = window.location.href;
    //將目前網址的"/PaintPage.html"去掉(因路徑位置為直接接圖片位置)
    var newURL = currentURL.replace('/PaintPage.html', '');
    //取得點擊到的分享的標籤同一層的圖片位置
    var imagePath = $(this).siblings('.picture').attr('src');
    const imageUrl = `${newURL}/${imagePath}`;
    //分享到Line，encodeURIComponent 可將特殊字符進行URL編碼
    const shareUrl = 'https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(imageUrl);
    //在新視窗中開啟分享鏈結
    window.open(shareUrl, '_blank');
  })


  /*愛心購物車及menu在414px以上及以下的開啟與關閉方式*/
  const mediaQuery = window.matchMedia('(max-width: 414px)');
  var carVisible = false;
  var menu = false;

  function handleScreenChange() {
    if (mediaQuery.matches) {
      //愛心購物車在414px的視窗以下以slide方式開關
      //避免重複的點擊事件，需先取消之前的點擊事件
      $('.car').off('click');
      $('.car').click(function () {
        carVisible = !carVisible;
        if (carVisible) {
          $('#collect').slideDown();
        }
        else {
          $('#collect').slideUp().hide(50);
        }
      });

      //漢堡選單在414px的視窗以下點擊以slide方式開關
      $('#menu').off('click');
      $('#menu').click(() => {
        menu = !menu;
        if (menu) {
          $('#tabs ul').slideDown();
        }
        else {
          $('#tabs ul').slideUp();
        }
      })

      //在414px的視窗以下，menu的排版方式
      $('#tabs').css({
        'margin-top': '70'
      });
      $('#tabs ul').css({
        'flex-direction': 'column',
        'display': 'none',
        'position': 'fixed',
        'left': '0',
        'right': '0',
        'top': '45px'
      });

      //點擊畫家的tab後，menu會slideup
      $('#tabs ul li').click(() => {
        menu = !menu;
        $('#tabs ul').slideUp();
      })
    }

    else {
      /*dialog初始設定*/
      for (let i = 1; i <= 25; i++) {
        $(`#dialog`).dialog({
          autoOpen: false,
          show: { duration: 1000 },
          hide: { duration: 1000 }
        });
      };

      //愛心購物車在414px的視窗以上以slide方式開關
      $('.car').off('click');
      $('.car').click(function () {
        carVisible = !carVisible;
        if (carVisible) {
          $('#collect').show();
        }
        else {
          $('#collect').hide();
        }
      })

      menu = false;

      //在414px的視窗大小以上，menu的排版方式
      $('#tabs').css({
        'margin-top': 'auto'
      });
      $('#tabs ul').css({
        'display': 'flex',
        'flex-direction': 'row',
        'position': 'static'
      });

      //在414px的視窗大小以上，關閉點擊畫家tab讓menu消失的事件
      $('#tabs ul li').off('click');

    }
  }

  //初始視窗大小抓取並執行對應行為
  handleScreenChange();
  //當視窗大小改變時重新抓取視窗大小，並執行對應行為
  mediaQuery.addEventListener('change', handleScreenChange);

});