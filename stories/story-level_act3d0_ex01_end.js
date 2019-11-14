var story = [
    [
        "bg_hotel",
        "avg_npc_017_1",
        "avg_npc_017_5",
        "avg_npc_017_3",
        "avg_npc_017_6",
        "avg_npc_017_2",
        "ac3_title1"
    ],
    [
        "d_gen_phonevibration",
        "m_dia_farce_loop",
        "m_dia_farce_intro",
        "m_sys_fesready_loop",
        "m_sys_fesready_intro"
    ],
    [
        "voice.playSound({key:'d_gen_phonevibration',volume:0.6});delay(1);playground.drawDialog({text:'叮铃铃，叮铃铃，叮铃铃......'});",
        "playground.drawDialog({text:'咚砰叭砰咚砰叭砰擦擦擦擦擦'});",
        "voice.playSound({key:'d_gen_phonevibration',volume:0.6});playground.drawDialog({text:'欸欸欸欸欸~♪（人声vocal）'});",
        "playground.drawDialog({name:'经纪人',text:'还不起床！'});",
        "playground.drawDialog({name:'D.D.D.',text:'哎......哎呀！'});",
        "playground.drawDialog({name:'D.D.D.',text:'昨，昨晚high太晚了啦！让我再多睡会儿......'});",
        "playground.clearDialog();background.showImage({image:'bg_hotel',screenadapt:'coverall',fadetime:2});voice.playMusic({intro:'m_dia_farce_intro', key:'m_dia_farce_loop', volume:0.8, crossfade:1.5});delay(1);playground.drawCharacter({name:'avg_npc_017_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'D.D.D.',text:'呼啊，冷水澡还是很棒！我有预感，今天会是很棒的一天！'});",
        "playground.drawCharacter({name:'avg_npc_017_1', focus:-1});playground.drawDialog({name:'经纪人',text:'先把青草汁喝了，已经让侍应生放在你的酒店冰箱里了。'});",
        "playground.drawCharacter({name:'avg_npc_017_5'});playground.drawDialog({name:'D.D.D.',text:'那个也太难喝了吧！'});",
        "playground.drawCharacter({name:'avg_npc_017_5', focus:-1});playground.drawDialog({name:'经纪人',text:'我可是知道的，你在昨天黑曜石节的主持节目里大喊了两分钟对吧？'});",
        "playground.drawCharacter({name:'avg_npc_017_3'});playground.drawDialog({name:'D.D.D.',text:'是，是哦。'});",
        "playground.drawCharacter({name:'avg_npc_017_3', focus:-1});playground.drawDialog({name:'经纪人',text:'虽然你不是歌手，但也要好好保养嗓子啊？不过昨天的演出很成功，祝贺你。'});",
        "playground.drawCharacter({name:'avg_npc_017_6'});playground.drawDialog({name:'D.D.D.',text:'哎，我不知道。'});",
        "playground.drawDialog({name:'D.D.D.',text:'我试过了，不论怎么努力，我还是有那种感觉，我就是没法超过D.litHun.'});",
        "playground.drawCharacter({name:'avg_npc_017_6', focus:-1});playground.drawDialog({name:'经纪人',text:'你已经做得很好了。'});",
        "playground.drawCharacter({name:'avg_npc_017_1'});playground.drawDialog({name:'D.D.D.',text:'是吗？嗯......无所谓啦。我决定了，之前那张合作专辑，要比上次再多做四首remix的demo，这样合作方也有挑选的空间。'});",
        "playground.drawCharacter({name:'avg_npc_017_1', focus:-1});playground.drawDialog({name:'经纪人',text:'再加量？！你这几天已经混了二十六首了，哪怕你把它当作没出席活动时的练习，也不可以这样透支体力！'});",
        "playground.drawCharacter({name:'avg_npc_017_2'});playground.drawDialog({name:'D.D.D.',text:'没事的，昨天晚上，就在演出里，我摸到了个新点子，这几个方向我都想试试。'});",
        "playground.drawDialog({name:'D.D.D.',text:'我已经差不多知道自己的极限在哪里了。既然我知道它在那里，我就得不断冲击它，让它变得更高，让我更难摸到它，这才是进步。'});",
        "playground.drawCharacter({name:'avg_npc_017_2', focus:-1});playground.drawDialog({name:'经纪人',text:'可演出怎么办？你的日程表可是一直排到下一年啊！'});",
        "playground.drawCharacter({name:'avg_npc_017_1'});playground.drawDialog({name:'D.D.D.',text:'绝对没问题！演出的精力是放在另一个槽里的！'});",
        "playground.drawCharacter({name:'avg_npc_017_1', focus:-1});playground.drawDialog({name:'经纪人',text:'已经听不懂你在说什么了！'});",
        "playground.drawCharacter({name:'avg_npc_017_2'});playground.drawDialog({name:'D.D.D.',text:'哎呀，这么长时间以来，我有什么出差错的地方吗？'});",
        "playground.drawCharacter({name:'avg_npc_017_2', focus:-1});playground.drawDialog({name:'经纪人',text:'上次你可是把整个录音棚里的灯全爆了！'});",
        "playground.drawCharacter({name:'avg_npc_017_1'});playground.drawDialog({name:'D.D.D.',text:'那是法术的问题，不是音乐吧！'});",
        "playground.drawDialog({name:'D.D.D.',text:'不过，你也提醒到我了。'});",
        "playground.drawDialog({name:'D.D.D.',text:'如果理论是正确的，那我在构思和乐感上......绝对能达到更高的高度。'});",
        "playground.drawCharacter({name:'avg_npc_017_1', focus:-1});playground.drawDialog({name:'经纪人',text:'......源石技艺和音乐的关系只是种假说，你可不要被牵着鼻子走哦？'});",
        "playground.drawCharacter({name:'avg_npc_017_3'});playground.drawDialog({name:'D.D.D.',text:'咦，我有鼻子的吗？'});",
        "playground.drawCharacter({name:'avg_npc_017_3', focus:-1});playground.drawDialog({name:'经纪人',text:'这是该现在由你来问我的事情吗！'});",
        "playground.drawCharacter({name:'avg_npc_017_2'});playground.drawDialog({name:'D.D.D.',text:'但莱塔尼亚人做到了。'});",
        "playground.drawCharacter({name:'avg_npc_017_2', focus:-1});playground.drawDialog({name:'经纪人',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_017_2'});playground.drawDialog({name:'D.D.D.',text:'音符、调子、曲式、织体，都和源石技艺的编织一模一样。'});",
        "playground.drawDialog({name:'D.D.D.',text:'呜啊！太沉重了！感觉这也不是那么适合我的思考！'});",
        "playground.drawCharacter({name:'avg_npc_017_2', focus:-1});playground.drawDialog({name:'经纪人',text:'你能知道这一点，我已经很欣慰了，呜呜。'});",
        "playground.drawCharacter({name:'avg_npc_017_3'});playground.drawDialog({name:'D.D.D.',text:'我可能要去放松一下。'});",
        "playground.drawCharacter({name:'avg_npc_017_3', focus:-1});playground.drawDialog({name:'经纪人',text:'挺好的，别憋太久了。'});",
        "playground.drawDialog({name:'经纪人',text:'等等，可也别再把一整个城区弄停电了！'});",
        "playground.drawCharacter({name:'avg_npc_017_5'});playground.drawDialog({name:'D.D.D.',text:'哎呀，不会的！我会有分寸的！'});",
        "playground.drawCharacter({name:'avg_npc_017_6'});playground.drawDialog({name:'D.D.D.',text:'对了对了，上次你说的那个什么克洛宁，我也见过一面了。'});",
        "playground.drawCharacter({name:'avg_npc_017_6', focus:-1});playground.drawDialog({name:'经纪人',text:'感觉怎么样？'});",
        "playground.drawCharacter({name:'avg_npc_017_6'});playground.drawDialog({name:'D.D.D.',text:'实话说......作为合作伙伴，应该不怎么样吧。他大概是只看钱的那种人。'});",
        "playground.drawCharacter({name:'avg_npc_017_6', focus:-1});playground.drawDialog({name:'经纪人',text:'我上次看合同的时候也有这样的感觉......无所谓，赞助商这边也是塞壬说了算。我还是信得过你看人的眼光的。'});",
        "playground.drawDialog({name:'经纪人',text:'在外面也小心点，据说汐斯塔不简单。Grace那个号也暂时别再用了。'});",
        "playground.drawCharacter({name:'avg_npc_017_1'});playground.drawDialog({name:'D.D.D.',text:'安心啦，说了我是有分寸的，这可是堡垒中的堡垒，秘密中的秘密！'});",
        "playground.drawCharacter({name:'avg_npc_017_1', focus:-1});playground.drawDialog({name:'经纪人',text:'你的秘密小组织，是吗？'});",
        "playground.drawCharacter({name:'avg_npc_017_1'});playground.drawDialog({name:'D.D.D.',text:'音乐人总要有自己的空间！'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({fadetime:2});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.8, block:true});delay(1);blocker.blocker({a:0, fadetime:0.8, block:true});background.showImage({image:'bg_hotel',screenadapt:'coverall',fadetime:2});voice.playSound({key:'d_gen_phonevibration',volume:0.6});playground.drawCharacter({name:'avg_npc_017_2'});playground.drawDialog({name:'D.D.D.',text:'嗯？有简讯......还好，不愧是旅游城市，城际网路还是很快的嘛。'});",
        "playground.drawDialog({name:'D.D.D.',text:'咦，这个频道？'});",
        "background.showImage({fadetime:2});voice.playMusic({intro:'m_sys_fesready_intro', key:'m_sys_fesready_loop', volume:0.8, crossfade:1.5});playground.drawDialog({name:'D.D.D.',text:'“From Ada.Closure.Church”......咦，居然是可露希尔吗？'});",
        "playground.drawCharacter({name:'avg_npc_017_2', focus:-1});playground.drawDialog({name:'D.D.D.',text:'“听说这次音乐节非常成功，祝贺你:P”'});",
        "playground.drawCharacter({});playground.drawImage({image:'ac3_title1', fadetime:3,block:true});playground.drawDialog({text:'“很久没见了，Grace. 你还联系得到Dijkstra吗？找机会再叫他一起去做点大事吧！”'});",
        "playground.drawDialog({text:'“对了，注意身体:3”'});",
        "playground.drawDialog({name:'D.D.D.',text:'天哪......'});",
        "playground.drawDialog({name:'D.D.D.',text:'果然今天也会是很棒的一天！'});"
    ]
];