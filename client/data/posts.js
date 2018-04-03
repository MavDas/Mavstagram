const posts = [
   {
      "code":"BAcyDyQwcXX",
      "caption":"Nature #mahanadi",
      "likes":56,
      "id":"1161022966406956503",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/6da29104a2fdb639c1fbe44fdc54a95b/5B52EFDE/t51.2885-15/s750x750/sh0.08/e35/28752585_1709653852456916_5645232785397383168_n.jpg"
   },
   {
      "code":"BAcJeJrQca9",
      "caption":"Peace!",
      "likes":59,
      "id":"1160844458347054781",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/04db893682b4dee57124edc6ee172e01/5B6972DD/t51.2885-15/e35/28765175_423778564714064_4191630404333076480_n.jpg"
   },
   {
      "code":"BAF_KY4wcRY",
      "caption":"Happiness",
      "likes":79,
      "id":"1154606670337393752",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/64d1d6c3b57361cb3490ce03f7ee014d/5B5E6F74/t51.2885-15/e35/28433472_587501254935282_7720799263315197952_n.jpg"
   },
   {
      "code":"BAPIPRjQce9",
      "caption":"Dopest ever!",
      "likes":47,
      "id":"1157179863266871229",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/2bed805145824ea76551b786ff9eb1c1/5B659C1C/t51.2885-15/e35/15056541_1801677270071572_8015473537814888448_n.jpg"
   },
   {
      "code":"-hZh6IQcfN",
      "caption":"Biking is life!",
      "likes":66,
      "id":"1126293663140399053",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/c8825ca84eca4499f7c95fa1f1e1e239/5B6738F1/t51.2885-15/sh0.08/e35/p640x640/28433797_363385517509555_1151611887473917952_n.jpg"
   },
   {
      "code":"-B3eiIwcYV",
      "caption":"Amazing times!",
      "likes":33,
      "id":"1117418173361145365",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/9b4c382aa41de05a699923ba5a43f012/5B675CE4/t51.2885-15/e35/14596675_1337973792903702_4989912563773865984_n.jpg"
   },
   {
      "code":"BAhvZrRwcfu",
      "caption":"Taking me places already",
      "likes":30,
      "id":"1162418651480049646",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/1d3f9aba6f527853a9417f8e6bcedb9c/5B6BF7BA/t51.2885-15/s640x640/sh0.08/e35/27579687_185863082184558_663561039798861824_n.jpg"
   },
   {
      "code":"BAAJqbOQcW5",
      "caption":"Mandatory Beer Pic",
      "likes":40,
      "id":"1152964002473690553",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/96e89369b0b6072630c057b908b37dad/5B71229F/t51.2885-15/sh0.08/e35/p750x750/26265778_391180967960478_8003295570363940864_n.jpg"
   },
   {
      "code":"_4jHytwcUA",
      "caption":"Happy New Year 2018",
      "likes":62,
      "id":"1150824171912152320",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/b65eb8ee5e507990e310916736a4bf5f/5B537E06/t51.2885-15/e35/25025323_187787555292077_6482840335415246848_n.jpg"
   },
   {
      "code":"_zbaOlQcbn",
      "caption":"OverCast #mornings",
      "likes":52,
      "id":"1149382879529256679",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/0ad91923e7cec9d8733a7de8fad22654/5B730157/t51.2885-15/s640x640/sh0.08/e35/23667941_140027266652638_3184759288396513280_n.jpg"
   },
   {
      "code":"_rmvQfQce8",
      "caption":"High on life! #bestbuds",
      "likes":35,
      "id":"1147180903383025596",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/bffa4a18c0cfa7ca7dfc3a4dcfbc92a7/5B57365B/t51.2885-15/e35/22637125_846297708874957_1752469192184954880_n.jpg"
   },
   {
      "code":"_ep9kiQcVy",
      "caption":"Beauty personified #Aston",
      "likes":64,
      "id":"1143535906423162226",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/7553885f473ac09ef883aa4c65e0ba1d/5B674435/t51.2885-15/s750x750/sh0.08/e35/22277959_497222043967058_4761096299883790336_n.jpg"
   },
   {
      "code":"_XpJcrwcSn",
      "caption":"Welcoming the Sun!",
      "likes":74,
      "id":"1141561999742846119",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/8f3e09a9fbcdce5a25d25487524cd09e/5B6EBF0A/t51.2885-15/s750x750/sh0.08/e35/21435892_480308932356037_7761308565922381824_n.jpg"
   },
   {
      "code":"_KnU7MwceA",
      "caption":"Calm before the storm",
      "likes":54,
      "id":"1137894817632733056",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/e70952cf8a1de86147a16c674005459f/5B547B82/t51.2885-15/e35/20905544_170734666807365_379192728304484352_n.jpg"
   },
   {
      "code":"_HMejJQcY5",
      "caption":"Boo",
      "likes":18,
      "id":"1136932306813044281",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/e3513b135a45493d8c312785dcdf03d2/5B72C181/t51.2885-15/s750x750/sh0.08/e35/20905432_466874207028448_6228599548760031232_n.jpg"
   },
   {
      "code":"_Fq2zmwcaz",
      "caption":"Exclusive celebrations for exclusive events",
      "likes":48,
      "id":"1136502965197194931",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/222f1b713902b3bf4f6cc5b84fb45fee/5B5ADA4E/t51.2885-15/e35/19367715_449232752113427_4800226604456345600_n.jpg"
   },
   {
      "code":"_A2r0aQcfD",
      "caption":"Fam Bam",
      "likes":57,
      "id":"1135147611821557699",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/8a6c376934c800e87fb6481533c52d68/5B5EB0B9/t51.2885-15/s750x750/sh0.08/e35/18380071_122064171693943_6687950364106293248_n.jpg"
   },
   {
      "code":"-1rhFawccs",
      "caption":"Music #beats #boat",
      "likes":39,
      "id":"1132002270913873708",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/35bee419aa82ef4c0fbb4e63c7183815/5B6D4CF0/t51.2885-15/e35/18299021_449757665370348_2918741413652856832_n.jpg"
   },
   {
      "code":"-pjx-gQcVi",
      "caption":"Still graceful",
      "likes":81,
      "id":"1128590547628442978",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/75cf514eb441758139cb8b81666c940d/5B51E29B/t51.2885-15/e35/17267432_1066060720165449_7092223060014530560_n.jpg"
   },
   {
      "code":"-oTZ0zQcWt",
      "caption":"The Crazy one with the awesome one!",
      "likes":81,
      "id":"1128237044221461933",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/f7179beaa9accf441cc3f7112667dc21/5B3AAFC0/t51.2885-15/e35/17267737_191625268000624_204721355625594880_n.jpg"
   },
   {
      "code":"-mxKQoQcQh",
      "caption":"Another Milestone",
      "likes":47,
      "id":"1127804966031967265",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/d7c1f4461c37b8c66decad4c1809ba5e/5B6F8FEC/t51.2885-15/s640x640/sh0.08/e35/17127247_1296853880430387_5136741479691059200_n.jpg"
   },
   {
      "code":"-fasqlQceO",
      "caption":"The end!",
      "likes":46,
      "id":"1125735850454402958",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/884059a6176eeceb680548275e64f57e/5B75A308/t51.2885-15/s750x750/sh0.08/e35/16906444_426298651045923_4545525753789284352_n.jpg"
   },
   {
      "code":"-VBgtGQcSf",
      "caption":"Little moments we call life!",
      "likes":27,
      "id":"1122810327591928991",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/65b3feb61fc90f6c0256d8356b9e434d/5B3ACDDE/t51.2885-15/s750x750/sh0.08/e35/16583320_223886994739555_1675955857340235776_n.jpg"
   },
   {
      "code":"-FpTyHQcau",
      "caption":"the light above all else is the moon! Literally!",
      "likes":82,
      "id":"1118481761857291950",
      "display_src":"https://scontent-bom1-1.cdninstagram.com/vp/921fae5ac828a3b9471e1585d46c425e/5B3AC905/t51.2885-15/e35/14533737_312879469112280_406059007166382080_n.jpg"
   }
];


export default posts;
