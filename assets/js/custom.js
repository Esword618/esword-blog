/**
 * Custom javascript for Lruihao blog.
 * @author @Lruihao https://lruihao.cn
 */
const Blog = new (function () {
  /**
   * Current environment is local or not.
   * @type {Boolean}
   */
  this.isLocal = window.location.href.startsWith('http://localhost') || window.location.href.startsWith('http://127.0.0.1');

  /**
   * Baidu auto push.
   * @link https://ziyuan.baidu.com
   * @returns {Blog}
   */
  this.baiduPush = () => {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
      bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bp, s);
    return this;
  };
  /**
   * Baidu statistics.
   * @link https://tongji.baidu.com
   * @returns {Blog}
   */
  this.baiduStatistics = () => {
    var _hmt = _hmt || [];
    var hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?d25f1e053205bf07562f33365fef04d7';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
    return this;
  };
  /**
   * Console some infomation
   * @returns {Blog}
   */
  this.consoleInfo = () => {
    console.log(
      "\n`              @@#``@@@@@@@@@@@@@@@@@@##,`   \n`              @@#`;@@@@@@@@@@@@@@@@@@@':'   \n`              @@#`@@@@@@@@@@@@@@@@@@@#+#;`  \n`              @@#`@@@@@@@@@@@@@@@@@@###@'.  \n`              @@+.@@@@@@@@@@@@@@@@@@@@@##,  \n`              @@#,@@@@@@@@@@@@@@@@@@@@@@#,  \n`              #@#:@@@@@@@@@@@@@@@@@@@@@@@,  \n`              #@#'@@@@@@@@@@@@@@@@@@@@@@@.  \n`              +@#;@@@@@@@@@@@@@@@@@@@@@@#   \n`          `;: ;@#'@@@@@@@@@@@@@@@@@@+'+@'   \n`    `,,;';'+';'@@+:@@@@@@@@@@@@##@#',.:#;   \n,, ``    ``..,:;@@#'@@@@@@@@#####@@@@#:`:.   \n`       `````:++@@@@@@@@@@@@@###@@@@#+,..    \n        ``````.#@@@@@@@@@@@@@@#@@@#++#'``    \n`    ```.,,:,.`:@@@@@@@@@@@@@###@@@##'.`     \n``..`````..,::;+@@@@@@@@@@@@#+`::+##'`.      \n`      ````.```,@@@@@@@@@@@##;``.,';` `      \n``.;@@@@@@@@@@@@@@@@@@@@@@###;``..``````     \n#@@@@@@@@@@@@@@@@@@@@@@@@##@#;``,``,.``      \n@@@@@@@@@@@@@@@@@@@.`````..``.. +` `:`       \n@+''++#####@@#`.@@@``````` ` `,```  ``       \n';;;;'+##+'+.`;+@@@,..```` `` :,.            \n;::,,:;+#++``,,#@@@'..``````` ,`.``          \n;,,,,...'#.,,..#@@@#,,.`````` .````          \n:,,,,....`,::;''+#@#;,..`````````.``         \n:,,,.....'##++''';:+':,.`..,,...`            \n:,,,...#####+'+#@@@'.';+:.  ` ``             \n;,,.`'####'#,`.`+@@@+'``` `.`                \n;,.`#@@@#+:'+++##+@##@,,,,`                  \n',.#@@###'''';:,.```,+#.                     \n+,#@@@####;,,..```````````````         `.:,::\n+@@@@###+;,,..``````````````````          `.,\n#@@@##+',,,........``````````````            \n@@@@#+:,,,,`........``````````               \n@@@#+:,,,,.`````.....``````````           `` \n@@##':,......`````....```  `````          ```\n@@@#':,....,..``````..````    ```         ```\n@@@#',....,,,..```````````     ```         ..\n@@@#,.....,,,,.``  ````````   ``````         \n@@@+....,,,,,..`````````````   ``````````    \n@@@:....,,,,.LiRuihao````````  ```````````` \n#@@,....,,,,.Always Be Yourself !````````````\n,##,,...,::,.````````````..``````   `......``\n,'#,,..,,:::.`````````........``````   `.,,..\n"
    );
    console.log(
      '%c 菠菜眾長 | lruihao.cn %c mail: 1024@lruihao.cn %c\n\n您好！\n欢迎光顾我的博客，\n请多多指教。\n',
      'color: #FF0000; background: #4bffba; padding:5px 0; border-radius: 5px 5px 5px 5px;',
      'background: #fadfa3; padding:5px 0; border-radius: 5px 5px 5px 5px;',
      ''
    );
    return this;
  };

  /**
   * Rest in Peace. R.I.P 🕯️
   * @2022-3-28 [3.21-mu5735] 沉痛哀悼 132 名遇难同胞：东航航班失事，遇难者含旅客 123 人，机组 9 人
   * @2022-12-03 江泽民同志逝世，享年96岁
   * @returns {Blog}
   */
  this.RIP = () => {
    if (new Date() < new Date('2022-12-03')) {
      document.querySelector('html').style.filter = 'grayscale(100%)';
    }
    return this;
  };

  /**
   * 获取随机网易云评论
   * 配合 random-comment shortcode
   * @name Blog#getRandomComment
   */
  this.getRandomComment = () => {
    fetch('https://api.uomg.com/api/comments.163?mid=2280569152')
    .then(response => response.json())
    .then((comment) => {
      document.querySelector('.pic-backdrop').style.backgroundImage = `url(${comment.data.picurl.slice(5)})`;
      const $avatar = document.querySelector('.comment-avatar');
      $avatar.alt = `${comment.data.nickname}'s avatar`;
      $avatar.src = comment.data.avatarurl.slice(5);
      $avatar.classList.remove('d-none');
      document.querySelector('.comment-nickname').innerHTML = comment.data.nickname;
      document.querySelector('.comment-content').innerHTML = comment.data.content.replace('\n','<br/>');
      document.querySelector('.music-name').innerHTML = comment.data.name;
      document.querySelector('.artists-name').innerHTML = comment.data.artistsname;
      const $player = document.createElement('meting-js');
      $player.setAttribute('auto', comment.data.url);
      const $music = document.querySelector('.netease-music');
      $music.innerHTML = '';
      $music.appendChild($player);
    })
  };

  /**
   * 初始化 random-comment shortcode
   * @name Blog#initRandomComment
   * @returns {Blog}
   */
  this.initRandomComment = () => {
    if (!document.querySelector('.netease-music') || !document.querySelector('.comment-163')) {
      return;
    }
    this.getRandomComment();
    document.querySelector('.comment-163').addEventListener('click', () => {
      this.getRandomComment();
    });
    return this;
  };

  /**
   * Initialize.
   * @returns {Blog}
   */
  this.init = () => {
    if (!this.isLocal) {
      // SEO etc.
      this.baiduStatistics()
          .baiduPush();
    }
    // Custom infos.
    // this.RIP();
    this.consoleInfo();
    return this;
  };
})();

/**
 * Immediate.
 */
(() => {
  Blog.init();
  // It will be executed when the DOM tree is built.
  document.addEventListener('DOMContentLoaded', () => {
    Blog.initRandomComment();
  });
})();
