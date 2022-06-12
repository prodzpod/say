/*
*
* .say DATABASE 
*
* All datas are AI-Generated. no real users or messages outside mine (prod@prodzpod) are used.
* Dynamic API is not implemented for time/financial/server-side issues.
*
*/

let USERS = [
    'prod@prodzpod',
    '정민우@younghoon88',
    '장기현@JKH.Style',
    'james@black.beach',
    'sanggyu@kim',
    '이동규@ldgkdus',
    '박철수@TALI',
    'kimyeonjin@kimyeonjin',
    'Casper lee@casperlee',
    '이건희@Yeonji',
    'baboo_seo@baboo_seo',
    '박한글@han_gl_park',
    'JINRIM KIM@gyohoowahwahwa',
    'davegong1@davegong1',
    '?@louis0715_901023',
    'yunneon0519@yunneon0519',
    '좌절했다!@subinbeom951224',
    'mijeonghoon1028@mijeonghoon1028',
    '슬립@slip_1806',
    '교실 // 열쇠도 있다@jimin0718',
    '하인@hain_',
    '삼겹살@samgyups',
    '데이터 분석기@kxz5p4d',
    '박제광@noh9de',
    '심인희@shiminhui98180426',
    '라메소@rameso_',
    '김태우@cheese0604',
    '우수@hoon9000',
    '맹규홍@kuihongmeng',
    '정 세 하@seha_jung',
    '장준혁@jayjay902',
    '강동욱@kangdongwook00',
    '이정현@susutou',
    '이동규@donggyu_lee1',
    '이해하지 못하는 인공지능 개념을...@wadeOyoyo',
    '서주호@seojuho',
    '한균동@hyun-dong',
    'hong@bk6g',
    '어우@uwzm',
    'Yoon-Hyeong Kim (Jinrim)@jinrim8',
    '다까은하하@dakkaeunha',
    '여우@yeowoo',
    '한현국@hyungkukhan',
    'Mari Weissberg-Kilani@mweissberggg',
    '다은@daun_n',
    '원희동@wonhidoong',
    'Orangetree@orangetree_0',
    'SOOJI KIM@soojihooni13',
    '구름@gu_reum',
    '김원홍@kimwonhongg',
    'Q.Yeonju//淵銓 𝕽𝖔𝖆💝@yeonjuuu',
    '정수민@Sumin1',
    '홍경은@hong0123',
    '다솜@dasom_2115',
    'COLIN@colin_kim',
    '친구요청 전부 받음@kkanggggji',
    '190127#1003 Day8-9@angel20180305',
    'yunneon0519@yunneon0519',
    '홍태진@hongtaejin_',
    '해리경⚡️@haerykim',
    '엔티@enteee_n',
    '김서운@seoon2',
    '동인. @dongin__',
    '홍수빈@hongsoobin_',
    'Hwa Young Kim@hykim7',
    'Dasom Lee @dasomlee_',
    '이서연@seoyeee',
    '이효리@SOROJUHYOLI',
    '김재균@kimjaegyun',
    '송윤미@song_yoonmi',
    '희경/Heegyeong@heegyeong',
    '자석@sook_1026',
    '박지호@pjh_q',
    '김동훈@kimdongwoon__90',
    '한달의 고요함🌙@Hndlgym1',
    '오송@osong_00',
    '찬주@chanjoo_0',
    'WOONG@Woonggggji',
    'my name is liz.💖 @lizzyzzzang',
    'YOONA(윤아)🌻@yunayoon_',
    '티리@teeree_',
    'Bora Kim @borakim0426',
    'Jin Park@jinhoon_park',
    '고순도 / 後任未定的公主@cotton_candy1332',
    'schmieden.vietnam+seoul@schmiedenco',
    '야간비@yakanbi',
    '(제주) 타이거 에니@nara_jeju',
    'MISO SOUP@misoisoup3135',
    '광윤대학교 커피독사@coffee_junkie22',
    'Aeolus Moon@aeolusmoon',
    'surakim.com🎨@sura_kimart',
    '최승민@seungmin_choi',
    'DongHoon.Kang@donghoonkang',
    '그놈@heumbeul',
    '용임@yondy',
    'JYO_0206@jyo_0206',
    'feeling like santa@seokjindd',
    '한얼굴@hanellgool_',
    '노우🧘‍♀️ @nowtalkss',
    'hong@hng',
    '정다은@Jindeung',
    'snow in the night sky @snow_wisps',
    'yeonju₍˄·͈༝·͈˄₎◞ ̑̑ෆ@yeonjuuu23',
    '아우라@aura_fkr',
    'suzi.io@suziiiii',
    '다크한공룡🐉 𝙋𝙧𝙞𝙢お借りします（=ω=) 💝🌸@darkdragon0223',
    '김진구@kimjingu_',
    '이다휘@Dahwi',
    '오징어버거@_zzingz',
    'hkr@harkkimapc',
    'seulbi@seulbiju',
    '하나@hanayo_0',
    'me@mokorin_me',
    'sanghyeon@sangheeon',
];

let RANDOM_COMMON = [
    "ㅎㅇ",'ㅎㅇ','ㅎㅇ','ㅎㅇ','ㅎㅇ',
    "안녕","안녕","안녕",
    "안녕하세요.",
    "안녕하세요!",
    "안녕하세요~",
    "ㅎㅇㅎㅇ~",
    "안녕!","안녕!",
    "잘자요",
    "저는 이만..",
    "자러가보겠습니다!",
    "고마워요!",
    "오늘도 잘 부탁합니다!",
    "감사합니다!",
    "좋아요!",
    "ㅇㅋ","ㅇㅋ","ㅇㅋ","ㄹㅇ","ㄹㅇㅋㅋ","ㄹㅇㅋㅋ","ㄹㅇ...","ㄹㅇ?","fdzz","fd","zzz","zz",
    "화이팅!",
    "님들",
    "오","오","오",
    "안녕히..",
    "자러감",
    "bb",
    "굿","굿",
    "와우",
    '환영합니다!', 
    '굿나잇',
    '굿모닝~',
    '안녕히계세요!',
    '안녕히 계세요.',
    '안녕히계세요~',
    '모닝!',
    '극','락','천','와','와','와','샌',
    'ㅋ','ㅋ','ㅋ','ㅋ','ㅋㅋ','ㅋㅋ','ㅋㅋ','ㅋㅋ..','ㅋㅋㅋ','ㅋㅋㅋ','ㅋㅋㅋ','ㅋㅋㅋㅋ','ㅋㅋㅋㅋ','ㅋㅋㅋㅋ','ㅋㅋㅋㅋ','ㅋㅋㅋㅋ','ㅋㅋㅋㅋㅋ','ㅋㅋㅋㅋㅋㅋㅋ','ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ','ㅋㅋㅋㅋㅋㅋㅋㅋㅋ...',
    'ㅎ','ㅎ','ㅎ','ㅎㅎ','ㅎㅎ','ㅎㅎ..','ㅎㅎㅎ','ㅎㅎㅎ','ㅎㅎㅎ','ㅎㅎㅎㅎ','ㅎㅎㅎㅎㅎㅎ','ㅎㅎㅎㅎㅎㅎㅎㅎㅎ'
];

let RANDOM = [
    {
        'init': "포럼에 자동으로 소리를 재생하는 봇을 추가하면 어떨까요?",
        'response': ["괜찮을거 같네요!", "@self 좋은 아이디어"],
        'responses': 2,
        'user': "!@self"
    },
    {
        'init': "봇은 꽤 재밌어 보여요.",
        'response': ["그래요, 즐겁습니다."],
        'responses': 1,
        'user': "!@self"
    },
    {
        'init': "@other, 나도 한 번 해볼까?",
        'response': ["네! 어서 해보십시오!", "네!", "ㅇㅇ", "당장하셈"],
        'responses': 1,
        'user': "@other"
    },
    {
        'init': "@other님, 게임 잘 하고 있어요! 지금 하고 있는데 정말 재밌어요.",
        'response': ["고마워요! 즐겨주셔서 기쁩니다.", "Thanks!"],
        'responses': 1,
        'user': "@other"
    },
    {
        'init': "@other ㄹㅇㅋㅋ",
        'responses': 0
    },
    {
        'init': "@other",
        'responses': 0
    },
    {
        'init': "@other",
        'responses': 0
    },
    {
        'init': "안녕하세요.",
        'response': ['ㅎㅇ', '안녕하세요!', '안녕하세요~', '안녕하세요.', '안녕', '환영합니다!', '새유전가?'],
        'responses': 5,
        'user': "!@self"
    },
    {
        'init': "#Overworld의 전투 시스템... 꽤 괜찮네요.",
        'response': ['고렙되면 더ㄱㅊ아짐', 'ㅇ', '그런가? 잘모르겠음', '감사합니다! 좋은 피드백 입니다.'],
        'responses': 2,
        'user': "!@self"
    },
    {
        'init': "#오버월드 이거 하니까 막히네..?",
        'response': ['할 줄 모르니?', '너무 어려워요?', '코스를 잘 따라가시면 할 수 있답니다.'],
        'responses': 2,
        'user': "!@self"
    },
    {
        'init': "@other님, 공허함은...",
        'response': ['...?', '그러면 어쩌지?'],
        'responses': 1,
        'user': "@other"
    },
    {
        'init': "@other, 나한테 가르쳐 주세...",
        'response': ['사실 지금 바쁘네요 ㅠ', '자세히 말해 주세', '그러니까, 이렇게 하면 끝!'],
        'responses': 1,
        'user': "@other"
    },
    {
        'init': "@other님, 도와 주ㅠㅠ",
        'response': ['좀 더 자세히 말해주세요.', '어디가 문제인 거죠?', '뭐가 필요하세요?'],
        'responses': 1,
        'user': "@other"
    },
    {
        'init': "@other님, 이거 볼만할까?",
        'response': ['다음 주에!', '가볼게요.', '확실합니다!'],
        'responses': 1,
        'user': "@other"
    },
    {
        'init': "@other님, 어땠나",
        'response': ['글쎄.. 어땠는지 모르겠다.', '한 번 해볼까?', '플레이하고 있어.'],
        'responses': 1,
        'user': "@other"
    },
    {
        'init': "@other, 이거 언제 만들어 주세",
        'response': ['당장!', '이거? 나중에', '내일 밤 하겠어.', '응'],
        'responses': 1,
        'user': "@other"
    },
    {
        'init': "@other, 이거 플레이하고 있는 분은?",
        'response': ['몇 분에 한 명쯤은 플레이하고 있어.', '여기서!', '나!'],
        'responses': 1,
        'user': "@other"
    },
    {
        'init': "여기 원래 마지막 글자 안나오",
        'response': ['ㅇㅇ', '원래그럼', '네', '가끔그'],
        'responses': 4,
        'user': "!@self"
    },
    {
        'init': "#오버월드 정말 멋있고 하기 좋은 게임이다",
        'response': ['@self, 동의합니다!', '저도 좋아해요~'],
        'responses': 2,
        'user': "!@self"
    },
    {
        'init': "오늘 저녁은 뭐해?",
        'response': ['아무거나 해', '정해지지 않음', '아... 음..'],
        'responses': 2,
        'user': "!@self"
    },
    {
        'init': "봇은 너무 강하다.",
        'response': ['그렇지 않으면 별로 재미가 없을 것 같아요.', '강하다고 생각해요?', '저도 그렇게 생각해요.', '나중에한 번 조금 강도를 줄이는 패치다.'],
        'responses': 3,
        'user': "!@self"
    },
    {
        'init': "오버월드 플레이하고 있어!",
        'response': ['@self 당신도?', '좋아요! 몇 분 전에 한번 플레이하고 있다고 했는데?', '좋아요! 함께할까?', '@self 나랑 한판 해요!'],
        'responses': 3,
        'user': "!@self"
    },
];

let RANDOM_FIRSTTIME = [
    'ㅎㅇ', '안녕하세요!', '안녕하세요~', '안녕하세요.', '안녕', '환영합니다!', '새유전가?'
]

let RANDOM_MYREPLY = [
    'ㅎㅇ', '안녕하세요!', '안녕하세요~', '안녕하세요.', 'ㅋ','ㅋ','ㅋ','ㅋ','ㅋㅋ','ㅋㅋ','ㅋㅋ','ㅋㅋ..','ㅋㅋㅋ','ㅋㅋㅋ','ㅋㅋㅋ','ㅋㅋㅋㅋ','ㅋㅋㅋㅋ','ㅋㅋㅋㅋ','ㅋㅋㅋㅋ','ㅋㅋㅋㅋ','ㅋㅋㅋㅋㅋ','ㅋㅋㅋㅋㅋㅋㅋ','ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ','ㅋㅋㅋㅋㅋㅋㅋㅋㅋ...',
    'ㅎ','ㅎ','ㅎ','ㅎㅎ','ㅎㅎ','ㅎㅎ..','ㅎㅎㅎ','ㅎㅎㅎ','ㅎㅎㅎ','ㅎㅎㅎㅎ','ㅎㅎㅎㅎㅎㅎ','ㅎㅎㅎㅎㅎㅎㅎㅎㅎ', 
    "와우", '<3'
]