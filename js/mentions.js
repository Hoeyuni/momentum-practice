const mentions = [
  {
    mention: "늦었다고 생각할 땐 진짜 늦은 거다. 그러니 당장 시작해라.",
    author: "박명수",
  },
  {
    mention: "나는 날마다 모든 면에서 점점 좋아지고 있다.",
    author: "에밀쿠에",
  },
  {
    mention: "할 수 있다고 믿는 사람은 결국 그렇게 된다.",
    author: "샤론 드골",
  },
  {
    mention: "한 번 포기하면 습관이 된다. 절대 포기하지 말아라.",
    author: "마이클 조던",
  },
  {
    mention: "행운의 여신은 용기 있는 자를 좋아한다.",
    author: "버질",
  },
  {
    mention: "실패도 배우는 것이 있으면 성공이다",
    author: "말콤 포브스",
  },
  {
    mention: "실수를 두려워 말고 계속 도전하라.",
    author: "전 시몬즈",
  },
  {
    mention: "시간은 인간이 쓸 수 있는 가장 값진 것이다.",
    author: "테오프라스토스",
  },
  {
    mention: "3등은 괜찮다. 3류는 안된다.",
    author: "김태원",
  },
  {
    mention: "지치면 지는겁니다. 미치면 이기는 겁니다.",
    author: "싸이",
  },
];

const mention = document.querySelector("#mention span:first-child");
const author = document.querySelector("#mention span:last-child");

const todaymention = mentions[Math.floor(Math.random() * mentions.length)];

mention.innerText = todaymention.mention;
author.innerText = todaymention.author;
