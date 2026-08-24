$("style").last().append(`
  /* ==================== COMMON STYLES ==================== */
  #users .uzr.Hiden img.co,
  #users .uzr.Hnide img.co,
  #users .uzr.hieal img.co,
  #users .uzr.Sltem img.co,
  #users .uzr.nour1 img.co,
  #users .uzr.fyonka img.co {
    width: 1px !important;
    height: 1px !important;
    margin-right: 1px;
  }

  #users .uzr.Hiden span.uhash,
  #users .uzr.Hnide span.uhash,
  #users .uzr.hieal span.uhash,
  #users .uzr.Sltem span.uhash,
  #users .uzr.nour1 span.uhash,
  #users .uzr.fyonka span.uhash {
    -webkit-text-fill-color: #fff0;
    width: 1px !important;
    height: 1px !important;
    margin-right: 1px;
  }

  #users .uzr.Hiden img.u-ico,
  #users .uzr.Hnide img.u-ico,
  #users .uzr.hieal img.u-ico,
  #users .uzr.Sltem img.u-ico,
  #users .uzr.nour1 img.u-ico,
  #users .uzr.fyonka img.u-ico {
    margin-left: 9px;
  }

  #users .uzr.Hiden img.ustat,
  #users .uzr.Hnide img.ustat,
  #users .uzr.hieal img.ustat,
  #users .uzr.Sltem img.ustat,
  #users .uzr.nour1 img.ustat,
  #users .uzr.fyonka img.ustat {
    width: 54px !important;
    height: 52px !important;
    border-radius: 0 50px 50px 50px !important;
    margin-top: 5px !important;
    margin-left: 14px;
    min-height: 0% !important;
    z-index: 0 !important;
    display: none;
  }

  #users .uzr.Hiden .fitimg.u-pic,
  #users .uzr.Hnide .fitimg.u-pic,
  #users .uzr.hieal .fitimg.u-pic,
  #users .uzr.Sltem .fitimg.u-pic,
  #users .uzr.nour1 .fitimg.u-pic,
  #users .uzr.fyonka .fitimg.u-pic {
    height: 52px !important;
    padding: 28px !important;
    margin-top: 6px !important;
    margin-bottom: 8px !important;
    margin-left: 14px !important;
    border-radius: 100px !important;
    border: 1px solid #2e2e2e;
    box-shadow: 0 0 0 #000000, inset 0 0 4px #000000, 0 0 0 0 #000;
    filter: hue-rotate(360deg);
    z-index: 0 !important;
  }

  #users .uzr.Hiden .u-msg,
  #users .uzr.Hnide .u-msg,
  #users .uzr.hieal .u-msg,
  #users .uzr.Sltem .u-msg,
  #users .uzr.nour1 .u-msg,
  #users .uzr.fyonka .u-msg {
    font-size: 93% !important;
    padding: 0px !important;
    margin-top: 7px !important;
    margin-bottom: 7px !important;
    margin-left: 2px;
    background-image: url(https://up6.cc/2024/05/171571547944381.gif);
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000;
  }

  #users .uzr.Hiden,
  #users .uzr.Hnide,
  #users .uzr.hieal,
  #users .uzr.Sltem,
  #users .uzr.nour1,
  #users .uzr.fyonka {
    margin-top: 2px !important;
    margin-bottom: 3px !important;
    border-radius: 0;
    border: 1px solid #fff;
    background-size: 100%;
    box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 2px #000;
  }

  #users .uzr.Hiden .d-flex.fl,
  #users .uzr.Hnide .d-flex.fl,
  #users .uzr.hieal .d-flex.fl,
  #users .uzr.Sltem .d-flex.fl,
  #users .uzr.nour1 .d-flex.fl,
  #users .uzr.fyonka .d-flex.fl {
    padding-right: 0px !important;
  }

  /* ==================== COLOR VARIATIONS ==================== */
  #users .uzr.Hiden .u-topic,
  #users .uzr.nour1 .u-topic {
    -webkit-text-fill-color: #fff0;
    margin-left: 5px;
  }

  #users .uzr.Hnide .u-topic,
  #users .uzr.hieal .u-topic,
  #users .uzr.Sltem .u-topic,
  #users .uzr.fyonka .u-topic {
    -webkit-text-fill-color: #000000;
    margin-left: 5px;
  }

  /* ==================== BACKGROUND IMAGES ==================== */
  #users .uzr.Hiden { background-image: url(https://up6.cc/2026/07/178315565636471.png); }
  #users .uzr.Hnide { background-image: url(https://up6.cc/2026/07/178316505306971.png); }
  #users .uzr.hieal { background-image: url(https://up6.cc/2026/07/178316502327461.png); }
  #users .uzr.Sltem { background-image: url(https://up6.cc/2026/08/178758421372291.jpg); }
  #users .uzr.nour1 { background-image: url(https://up6.cc/2026/07/178315707229351.png); }
  /* خلفية تصميم فيونكة الغامدي */
  #users .uzr.fyonka { background-image: url(https://up6.cc/2026/08/178758845455221.jpg); }

  /* ==================== FRAMES ==================== */
  #users .uzr.Hiden .itarr_SHiden,
  #users .uzr.Hnide .itarr_Hnide,
  #users .uzr.hieal .itarr_hieal,
  #users .uzr.Sltem .itarr_Sltem,
  #users .uzr.nour1 .itarr_Nnour1,
  #users .uzr.fyonka .itarr_fyonka {
    width: 92px;
    height: 92px;
    margin-top: -45px;
    margin-left: -47px;
    cursor: pointer;
  }
`);

const userDecorations = [
  {
    name: "Nnour1",
    deco: "رُمإديُ",
    cls: "nour1",
    icon: "https://up6.cc/2025/08/175607860400631.gif"
  },
  {
    name: "hieal",
    deco: "خُيـــــال",
    cls: "hieal",
    icon: "https://up6.cc/2026/07/178316382027711.gif"
  },
  {
    name: "Hnide",
    deco: "هـدين",
    cls: "Hnide",
    icon: "https://up6.cc/2026/07/178316380068541.gif"
  },
  {
    name: "Sltem",
    deco: "𝐀𝐒𝐒𝐒𝐀𝐅",
    cls: "Sltem",
    icon: "https://up6.cc/2025/08/175434717954481.gif"
  },
  {
    name: "fyonka",
    deco: "فـيونـكة الـغـامـدي",
    cls: "fyonka",
    icon: "https://up6.cc/2026/08/178758868687511.gif"
  }
];

setInterval(() => {
  if (typeof myid !== "undefined" && myid != null) {
    userDecorations.forEach((item) => {
      const targetUser = $(users).find(`.uzr:contains('${item.deco}')`);

      if (targetUser.length) {
        targetUser.each(function() {
          const $user = $(this);
          if (!$user.hasClass(item.cls)) {
            $user.addClass(item.cls);
          }
          const picContainer = $user.find('.fitimg.u-pic');
          const frameClass = `itarr_${item.name}`;

          if (picContainer.length && picContainer.find(`.${frameClass}`).length === 0) {
            picContainer.append(`<img class="${frameClass}" title="اطاري" src="${item.icon}">`);
          }
        });
      }
    });
  }
}, 1500);
