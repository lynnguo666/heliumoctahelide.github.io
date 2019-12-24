var story = [
    [
        "bg_lungmen_d",
        "char_1502_crowns",
        "char_144_red_8",
        "bg_indoor_n",
        "char_308_swire_6",
        "char_015_lmg",
        "char_308_swire_5",
        "avg_npc_036",
        "bg_outcity_1",
        "char_1507_mephisto_2",
        "avg_npc_016",
        "char_1507_mephisto_3",
        "char_1508_faust_1",
        "char_1507_mephisto_1"
    ],
    [
        "m_dia_mist_loop",
        "m_dia_mist_intro",
        "d_gen_transmissionget",
        "m_dia_darkness02_loop",
        "d_gen_transmission"
    ],
    [
        "voice.playMusic({intro:'m_dia_mist_intro', key:'m_dia_mist_loop', volume:0.6, crossfade:1.5, delay:0.5});background.showImage({screenadapt:'coverall', image:'bg_lungmen_d',fadetime:2,block:true});delay(2);playground.drawDialog({text:'与此同时，贫民区的另一处'});",
        "voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'弑君者',text:'不要慌张！慢慢说！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'整合运动成员',text:'但，但所有......所有同胞，都死了啊！'});",
        "playground.drawDialog({name:'整合运动成员',text:'发生什么了？发生什么了？！我们什么也没看到！什么也没看见就！！'});",
        "playground.drawDialog({name:'整合运动成员',text:'唔咕！'});",
        "voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'弑君者',text:'情况，向我报告！'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawDialog({text:'......'});",
        "voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'弑君者',text:'......'});",
        "playground.drawDialog({name:'弑君者',text:'向我报告！'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawDialog({text:'......呼。'});",
        "playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'弑君者',text:'什么人！'});",
        "playground.drawDialog({name:'弑君者',text:'......这个味道，别被迷惑！队友都还在！'});",
        "playground.drawDialog({name:'弑君者',text:'听我指挥！'});",
        "voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({});playground.drawDialog({name:'整合运动成员',text:'啊啊！红，红色的！！我看到了！！是红色的！！'});",
        "playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'弑君者',text:'让他安静！'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawDialog({text:'......（非人的笑声）'});",
        "playground.drawDialog({name:'整合运动成员',text:'我......我，我想回乌萨斯......'});",
        "playground.drawDialog({name:'整合运动成员',text:'这里有鬼！怪物！我看到两个女人的影子！'});",
        "playground.drawDialog({name:'整合运动成员',text:'呃，呃呃！！我想回去，想回去！'});",
        "playground.drawDialog({name:'整合运动成员',text:'弑君者，我们不该来，不该来！'});",
        "voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'弑君者',text:'回话！快回话！'});",
        "playground.drawDialog({name:'弑君者',text:'龙门贫民区的地形很复杂，不要被敌人干扰了！我们很安全！'});",
        "playground.drawDialog({name:'弑君者',text:'（明明已经释放浓雾了，为什么我们的位置还是曝光了？）'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({fadetime:2});background.showImage({fadetime:1,block:true});playground.drawDialog({name:'塔露拉',text:'剩下那个叛徒的位置，我已经知道了。'});",
        "playground.drawDialog({name:'塔露拉',text:'她就在龙门，去刺杀她，去巩固你的名字，去让你的敌人感到恐怖。'});",
        "playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'弑君者',text:'......！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'霜星',text:'杀完你的仇人，然后呢，你又该做什么？别忘了谁是真正的敌人。'});",
        "playground.clearDialog();playground.drawCharacter({name:'char_144_red_8',fadetime:0.4,block:true});delay(0.8);playground.drawCharacter({fadetime:0.3,block:true});delay(0.5);playground.drawCharacter({name:'char_1502_crowns'});playground.drawDialog({name:'弑君者',text:'——谁！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({screenadapt:'coverall', image:'bg_indoor_n'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_dia_darkness02_loop', key:'m_dia_darkness02_loop', volume:0.8, crossfade:1.5, delay:0.5});playground.drawCharacter({name:'char_308_swire_6',name2:'char_015_lmg',focus:1});playground.drawDialog({name:'诗怀雅',text:'给我接那个家伙！'});",
        "playground.drawCharacter({name:'char_308_swire_6',name2:'char_015_lmg',focus:2});playground.drawDialog({name:'警员',text:'抱歉，诗小姐，你在说谁？！'});",
        "playground.drawCharacter({name:'char_308_swire_6',name2:'char_015_lmg',focus:1});playground.drawDialog({name:'诗怀雅',text:'那个家伙！！'});",
        "playground.drawCharacter({name:'char_308_swire_6',name2:'char_015_lmg',focus:2});playground.drawDialog({name:'警员',text:'呃，啊？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'警员',text:'（她在说谁啊？）'});",
        "playground.drawDialog({name:'近卫局成员',text:'（可能是说那个吧......）'});",
        "playground.drawCharacter({name:'char_308_swire_6',name2:'char_015_lmg',focus:1});playground.drawDialog({name:'诗怀雅',text:'粉头发的下水道生物！100800-00200-rct211-93001！拨这个号码，她的电话！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'警员',text:'（这么长？她怎么背的下来的？！）'});",
        "playground.drawDialog({name:'近卫局成员',text:'（......这个号码，我有印象，是不是那家的小姐？）'});",
        "playground.drawCharacter({name:'char_308_swire_6',name2:'char_015_lmg',focus:1});playground.drawDialog({name:'诗怀雅',text:'还在交头接耳个什么！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:0.5, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playSound({key:'d_gen_transmissionget', volume:0.4});playground.drawDialog({name:'？？？',text:'您好。'});",
        "playground.drawCharacter({name:'char_308_swire_6'});playground.drawDialog({name:'诗怀雅',text:'臭老鼠！你在干嘛！是不是你！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'？？？',text:'......你为什么会怀疑我？'});",
        "playground.drawCharacter({name:'char_308_swire_6'});playground.drawDialog({name:'诗怀雅',text:'不是你就好啊，哎，让我白担心一场......'});",
        "playground.drawCharacter({});playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawCharacter({name:'char_308_swire_5'});playground.drawDialog({name:'诗怀雅',text:'......'});",
        "playground.drawDialog({name:'诗怀雅',text:'我怀疑你什么？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'？？？',text:'如果你是说特殊部队。是我。'});",
        "playground.drawCharacter({name:'char_308_swire_5'});playground.drawDialog({name:'诗怀雅',text:'......'});",
        "playground.drawDialog({name:'诗怀雅',text:'林雨霞，我听错了吧，我听错了对不对？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'林雨霞',text:'近卫局有近卫局该做的，我们有我们该做的。'});",
        "playground.drawDialog({name:'林雨霞',text:'魏彦吾想你们维护龙门的秩序，而我们去除那些龙门不需要的东西。'});",
        "playground.drawCharacter({name:'char_308_swire_5'});playground.drawDialog({name:'诗怀雅',text:'这支队伍，你知道他们在贫民区里做什么？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'林雨霞',text:'他们有好好帮你们消灭整合运动啊。'});",
        "playground.drawCharacter({name:'char_308_swire_6'});playground.drawDialog({name:'诗怀雅',text:'好不容易搭建起来的龙门缓冲社区，这是你父亲的心血！'});",
        "playground.drawDialog({name:'诗怀雅',text:'如果没有你父亲的努力，现在的龙门怎么可能是这样？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'林雨霞',text:'你知道他们的目标？'});",
        "playground.drawCharacter({name:'char_308_swire_6'});playground.drawDialog({name:'诗怀雅',text:'你们已经定好了，说贫民区是整合运动最大的潜藏点和入侵渠道，想要毁掉贫民区！'});",
        "playground.drawDialog({name:'诗怀雅',text:'我说的对不对？'});",
        "playground.drawDialog({name:'诗怀雅',text:'我们现在和罗德岛联手，整合运动完全不是我们的对手！你们不该做这些！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'林雨霞',text:'又在别人说明之前自顾自地猜测......'});",
        "playground.drawDialog({name:'林雨霞',text:'虽然整合运动确实不堪一击，但它们从来都不是民间力量能解决的问题。'});",
        "playground.drawDialog({name:'林雨霞',text:'运用真正的城邦力量清除威胁，这是我该做的。这是对抗入侵者的必需手段。'});",
        "playground.drawCharacter({name:'char_308_swire_5'});playground.drawDialog({name:'诗怀雅',text:'为什么不相信罗德岛和我们近卫局？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'林雨霞',text:'我们不信任罗德岛。以及，为什么要弄脏近卫局的手？'});",
        "playground.drawCharacter({name:'char_308_swire_5'});playground.drawDialog({name:'诗怀雅',text:'......脏手？'});",
        "playground.drawDialog({name:'诗怀雅',text:'别告诉我你们要做绝。那里有你父亲的一切。'});",
        "playground.drawCharacter({name:'char_308_swire_6'});playground.drawDialog({name:'诗怀雅',text:'跟破坏比起来，建设要艰难得多！'});",
        "playground.drawDialog({name:'诗怀雅',text:'砸坏一块玻璃，只需要一个人一秒钟......而造一块玻璃，你知道需要几道流程，多少时间吗？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'林雨霞',text:'诗怀雅。'});",
        "playground.drawCharacter({name:'char_308_swire_5'});playground.drawDialog({name:'诗怀雅',text:'嗯？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'林雨霞',text:'你知道市民们在害怕什么？你知道商会在忌惮什么？'});",
        "playground.drawCharacter({name:'char_308_swire_5'});playground.drawDialog({name:'诗怀雅',text:'你头脑锈了吗，现在我们不就是在对抗整合运动吗？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'林雨霞',text:'你果然什么都不懂。'});",
        "playground.drawCharacter({name:'char_308_swire_5'});playground.drawDialog({name:'诗怀雅',text:'行啊，臭老鼠......我不懂，我能否有幸请您为我解释清楚呢？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'林雨霞',text:'感染者......在不断增加。市民恐惧的是感染者，他们不会管这些感染者是整合运动又或者不是。'});",
        "playground.drawDialog({name:'林雨霞',text:'就这样了。别去搜排水系统。'});",
        "voice.playSound({key:'d_gen_transmission', volume:0.4});delay(1);playground.drawCharacter({name:'char_308_swire_6'});playground.drawDialog({name:'诗怀雅',text:'啊？'});",
        "playground.drawDialog({name:'诗怀雅',text:'喂？喂？！臭老鼠！！'});",
        "playground.drawDialog({name:'诗怀雅',text:'*龙门粗口粗口粗口*！你敢挂我电话！！你居然敢挂我电话！！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({});blocker.blocker({a:0,fadetime:1, block:true});playground.drawCharacter({name:'avg_npc_036'});playground.drawDialog({name:'林雨霞',text:'......'});",
        "playground.drawDialog({name:'林雨霞',text:'黑蓑们被陈逼走了？'});",
        "playground.drawDialog({name:'林雨霞',text:'这可怎么办，我该怎么办......'});",
        "playground.drawDialog({name:'林雨霞',text:'......他们应该会跳过陈，暗地加快进度。嗯，就这么做。'});",
        "playground.drawDialog({name:'林雨霞',text:'爸爸，如果当时的你是现在的我，你也会这么做的，对吧。'});",
        "playground.drawDialog({name:'林雨霞',text:'......我在做什么呀我......'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({screenadapt:'coverall', image:'bg_outcity_1', width:1, height:1});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({name:'char_1507_mephisto_2'});playground.drawDialog({name:'梅菲斯特',text:'怎么会？你说什么？'});",
        "playground.drawCharacter({name:'char_1507_mephisto_2',name2:'avg_npc_016',focus:2});playground.drawDialog({name:'幻影弩手',text:'......你的牧群正在衰亡。'});",
        "playground.drawDialog({name:'幻影弩手',text:'虽然一开始它们的攻势确实惊人，但......我们不知道这段时间里发生了什么。根据侦察，他们的数量并没有继续增长。'});",
        "playground.drawDialog({name:'幻影弩手',text:'虽然这个战术确实拖延了他们，但目前受到最大损伤的反而是一开始就遭到牧群袭击的整合运动队伍。'});",
        "playground.drawCharacter({name:'char_1507_mephisto_3',name2:'avg_npc_016',focus:1});playground.drawDialog({name:'梅菲斯特',text:'谁？是谁能做到？近卫局......近卫局不可能压制我的牧群！'});",
        "playground.drawCharacter({name:'char_1507_mephisto_3',name2:'avg_npc_016',focus:2});playground.drawDialog({name:'幻影弩手',text:'可我们的同胞......'});",
        "playground.drawCharacter({name:'char_1507_mephisto_3',name2:'avg_npc_016',focus:1});playground.drawDialog({name:'梅菲斯特',text:'近卫局的战术和装备我都考虑过了，想对抗我的牧群，必须要花上至少两天的时间，究竟是谁压制了我的牧群？！'});",
        "playground.drawCharacter({name:'char_1508_faust_1'});playground.drawDialog({name:'浮士德',text:'穿黑色雨披的人。'});",
        "playground.drawCharacter({name:'avg_npc_016'});playground.drawDialog({name:'幻影弩手',text:'队长！'});",
        "playground.drawCharacter({name:'char_1507_mephisto_2'});playground.drawDialog({name:'梅菲斯特',text:'浮士德！'});",
        "playground.drawCharacter({name:'char_1508_faust_1'});playground.drawDialog({name:'浮士德',text:'弩手们，调整现在的队伍！我和其他小队吸引了许多梅菲斯特的队员。'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'avg_npc_016',focus:2});playground.drawDialog({name:'幻影弩手',text:'......为什么？'});",
        "playground.drawCharacter({name:'char_1508_faust_1',name2:'avg_npc_016',focus:1});playground.drawDialog({name:'浮士德',text:'集聚起来的他们能帮我们阻拦近卫局。'});",
        "playground.drawCharacter({name:'char_1507_mephisto_1',name2:'char_1508_faust_1',focus:1});playground.drawDialog({name:'梅菲斯特',text:'浮士德，浮士德......你没受伤吧？'});",
        "playground.drawDialog({name:'梅菲斯特',text:'（为什么刚才要离开？）'});",
        "playground.drawCharacter({name:'char_1507_mephisto_1',name2:'char_1508_faust_1',focus:2});playground.drawDialog({name:'浮士德',text:'......因为我当时必须那么做。'});",
        "playground.drawCharacter({name:'char_1507_mephisto_1',name2:'char_1508_faust_1',focus:1});playground.drawDialog({name:'梅菲斯特',text:'看着你带着这么多同胞回来，真好。你也打算用他们的力量对抗近卫局吧？'});",
        "playground.drawDialog({name:'梅菲斯特',text:'他们虽然不会攻击我们，但我也不能指挥他们，刚刚还在为这件事苦恼呢。'});",
        "playground.drawDialog({name:'梅菲斯特',text:'但现在的数量不太够啊。'});",
        "playground.drawDialog({name:'梅菲斯特',text:'我需要更多的同胞去保护我们，必须要战胜那些近卫局，我们才能撤退。'});",
        "playground.drawDialog({name:'梅菲斯特',text:'嗯.......'});",
        "playground.drawCharacter({name:'char_1507_mephisto_1',name2:'char_1508_faust_1',focus:2});playground.drawDialog({name:'浮士德',text:'梅菲斯特，别再用那个法术了。'});",
        "playground.drawCharacter({name:'char_1507_mephisto_1',name2:'char_1508_faust_1',focus:1});playground.drawDialog({name:'梅菲斯特',text:'可浮士德以前说过，要活下去吧？这是最重要的吧？'});",
        "playground.drawCharacter({name:'char_1507_mephisto_1',name2:'char_1508_faust_1',focus:2});playground.drawDialog({name:'浮士德',text:'......那你为什么......'});",
        "playground.drawDialog({name:'浮士德',text:'......'});",
        "playground.drawDialog({name:'浮士德',text:'在近卫局大楼，你为什么说要为那个怪物而死？'});",
        "playground.drawCharacter({name:'char_1508_faust_1'});playground.drawDialog({name:'浮士德',text:'弩手们。'});",
        "playground.drawCharacter({name:'avg_npc_016'});playground.drawDialog({name:'幻影弩手',text:'是。'});",
        "playground.drawCharacter({name:'char_1508_faust_1'});playground.drawDialog({name:'浮士德',text:'控制住他。'});",
        "delay(0.3);playground.clearDialog();blocker.blocker({fadetime:2,block:true});playground.drawImage({});"
    ]
];