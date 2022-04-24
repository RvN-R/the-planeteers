let items = [
    {
        'name': 'Cardboard',
        'id': "ppr-crdbrd",
        'category': 'paper',
        'image': 'assets/images/game-items/cardboard.png',
        'bin': 'recycle',
        'fact': 'fact1'
    },
    {
        'name': 'Paper',
        'id': "ppr-papr",
        'category': 'paper',
        'image': 'assets/images/game-items/paper.png',
        'bin': 'recycle',
        'fact': 'fact2'
    },
    {
        'name': 'Paper Bag',
        'id': "ppr-papr-bg",
        'category': 'paper',
        'image': 'assets/images/game-items/paper-bag.png',
        'bin': 'recycle',
        'fact': 'fact2'
    },
    {
        'name': 'Newspaper',
        'id': "ppr-nwspapr",
        'category': 'paper',
        'image': 'assets/images/game-items/newspaper.png',
        'bin': 'recycle',
        'fact': 'fact4'
    },
    {
        'name': 'Leaflet',
        'id': "ppr-lflt",
        'category': 'paper',
        'image': 'assets/images/game-items/leaflet.png',
        'bin': 'recycle',
        'fact': 'fact4'
    },
    {
        'name': 'Envelope',
        'id': "ppr-nvlp",
        'category': 'paper',
        'image': 'assets/images/game-items/envelope.png',
        'bin': 'recycle',
        'fact': 'fact2'
    },
    {
        'name': 'Book',
        'id': "ppr-bk",
        'category': 'paper',
        'image': 'assets/images/game-items/book.png',
        'bin': 'general-waste',
        'fact': 'fact5'
    },
    {
        'name': 'Magazine',
        'id': "ppr-magzn",
        'category': 'paper',
        'image': 'assets/images/game-items/magazine.png',
        'bin': 'recycle',
        'fact': 'fact4'
    },
    {
        'name': 'Milk Carton',
        'id': "ppr-ttpk-crtn",
        'category': 'paper',
        'image': 'assets/images/game-items/milk-carton.png',
        'bin': 'recycle',
        'fact': 'fact14'
    },
    {
        'name': 'Egg Box',
        'id': "ppr-egg-bx",
        'category': 'paper',
        'image': 'assets/images/game-items/egg-box.png',
        'bin': 'recycle',
        'fact': 'fact3'
    },
    {
        'name': 'Coffee Cup',
        'id': "ppr-coff-cp",
        'category': 'paper',
        'image': 'assets/images/game-items/coffee-cup.png',
        'bin': 'general-waste',
        'fact': 'fact9'
    },
    {
        'name': 'Plastic Bag',
        'id': "plst-bag",
        'category': 'plastic',
        'image': 'assets/images/game-items/plastic-bag.png',
        'bin': 'general-waste',
        'fact': 'fact7'
    },
    {
        'name': 'Cereal Bag',
        'id': "plstc-crl-bag",
        'category': 'plastic',
        'image': 'assets/images/game-items/cereal-bag.png',
        'bin': 'general-waste',
        'fact': 'fact6'
    },
    {
        'name': 'Pasta Bag',
        'id': "plstc-psta-bag",
        'category': 'plastic',
        'image': 'assets/images/game-items/pasta-bag.png',
        'bin': 'general-waste',
        'fact': 'fact6'
    },
    {
        'name': 'Zip-loc Bag',
        'id': "plstc-zplc-bag",
        'category': 'plastic',
        'image': 'assets/images/game-items/zip-loc-bag.png',
        'bin': 'general-waste',
        'fact': 'fact7'
    },
    {
        'name': 'Bubble Wrap',
        'id': "plstc-bubl-wrap",
        'category': 'plastic',
        'image': 'assets/images/game-items/bubble-wrap.png',
        'bin': 'general-waste',
        'fact': 'fact15'
    },
    {
        'name': 'Plastic Cola Bottle',
        'id': "plstc-ck-btl",
        'category': 'plastic',
        'image': 'assets/images/game-items/plastic-cola-bottle.png',
        'bin': 'recycle',
        'fact': 'fact8'
    },
    {
        'name': 'Plastic Water Bottle',
        'id': "plstc-wtr-btl",
        'category': 'plastic',
        'image': 'assets/images/game-items/plastic-water-bottle.png',
        'bin': 'recycle',
        'fact': 'fact8'
    },
    {
        'name': 'Shampoo Bottle',
        'id': "plstc-shp-btl",
        'category': 'plastic',
        'image': 'assets/images/game-items/shampoo-bottle.png',
        'bin': 'recycle',
        'fact': 'fact16'
    },
    {
        'name': 'Coca Cola Can',
        'id': "al-drk-ck-can",
        'category': 'aluminium',
        'image': 'assets/images/game-items/coca-cola-can.png',
        'bin': 'recycle',
        'fact': 'fact19'
    },
    {
        'name': 'Fanta Can',
        'id': "al-drk-fnta-can",
        'category': 'aluminium',
        'image': 'assets/images/game-items/fanta-can.png',
        'bin': 'recycle',
        'fact': 'fact19'
    },
    {
        'name': 'Sprite Can',
        'id': "al-drk-sprt-can",
        'category': 'aluminium',
        'image': 'assets/images/game-items/sprite-can.png',
        'bin': 'recycle',
        'fact': 'fact19'
    },
    {
        'name': 'Club Orange Can',
        'id': "al-drk-clubor-can",
        'category': 'aluminium',
        'image': 'assets/images/game-items/fanta-can.png',
        'bin': 'recycle',
        'fact': 'fact19'
    },
    {
        'name': 'Baked Bean Can',
        'id': "st-baked-bean-can",
        'category': 'steel',
        'image': 'assets/images/game-items/baked-bean-can.png',
        'bin': 'recycle',
        'fact': 'fact20'
    },
    {
        'name': 'Tuna Can',
        'id': "st-tuna-can",
        'category': 'steel',
        'image': 'assets/images/game-items/tuna-can.png',
        'bin': 'recycle',
        'fact': 'fact23'
    },
    {
        'name': 'Bread',
        'id': "org-fd-brd",
        'category': 'food',
        'image': 'assets/images/game-items/bread.png',
        'bin': 'organic',
        'fact': 'fact17'
    },
    {
        'name': 'Cooked Food',
        'id': "org-fd-ckd-fd",
        'category': 'food',
        'image': 'assets/images/game-items/cooked-food.png',
        'bin': 'organic',
        'fact': 'fact17'
    },
    {
        'name': 'Raw Food',
        'id': "org-fd-rw-fd",
        'category': 'food',
        'image': 'assets/images/game-items/raw-food.png',
        'bin': 'organic',
        'fact': 'fact17'
    },
    {
        'name': 'Fruit',
        'id': "org-fd-frt",
        'category': 'food',
        'image': 'assets/images/game-items/fruit.png',
        'bin': 'organic',
        'fact': 'fact18'
    },
    {
        'name': 'Veg',
        'id': "org-fd-vg",
        'category': 'food',
        'image': 'assets/images/game-items/veg.png',
        'bin': 'organic',
        'fact': 'fact18'
    },
    {
        'name': 'Tea Bag',
        'id': "org-fd-tbag",
        'category': 'food',
        'image': 'assets/images/game-items/tea-bag.png',
        'bin': 'organic',
        'fact': 'fact17'
    },
    {
        'name': 'Tea Leaves',
        'id': "org-fd-tlvs",
        'category': 'food',
        'image': 'assets/images/game-items/tea-leaves.png',
        'bin': 'organic',
        'fact': 'fact18'
    },
    {
        'name': 'Grass Cuttings',
        'id': "org-gdn-grass",
        'category': 'garden',
        'image': 'assets/images/game-items/grass-cuttings.png',
        'bin': 'organic',
        'fact': 'fact21'
    },
    {
        'name': 'Clippings',
        'id': "org-gdn-clip",
        'category': 'garden',
        'image': 'assets/images/game-items/clippings.png',
        'bin': 'organic',
        'fact': 'fact21'
    },
    {
        'name': 'Twigs',
        'id': "org-gdn-twig",
        'category': 'garden',
        'image': 'assets/images/game-items/twigs.png',
        'bin': 'organic',
        'fact': 'fact21'
    },
    {
        'name': 'leaves',
        'id': "org-gdn-lvs",
        'category': 'garden',
        'image': 'assets/images/game-items/leaves.png',
        'bin': 'organic',
        'fact': 'fact21'
    },
    {
        'name': 'Toothpaste Container',
        'id': "genw-cont-tp-cntr",
        'category': 'general',
        'image': 'assets/images/game-items/toothpaste-container.png',
        'bin': 'general-waste',
        'fact': 'fact22'
    },
    {
        'name': 'Ashes (cold)',
        'id': "genw-cont-ashes",
        'category': 'general',
        'image': 'assets/images/game-items/ashes.png',
        'bin': 'general-waste',
        'fact': 'fact22'
    },
    {
        'name': 'Nappies',
        'id': "genw-cont-nap",
        'category': 'general',
        'image': 'assets/images/game-items/nappies.png',
        'bin': 'general-waste',
        'fact': 'fact24'
    },
    {
        'name': 'Crisp, sweet or foil-based wrappers',
        'id': "genw-cont-wrap",
        'category': 'general',
        'image': 'assets/images/game-items/sweet-wrapper.png',
        'bin': 'general-waste',
        'fact': 'fact22'
    },
    {
        'name': 'Sanitary Waste',
        'id': "genw-cont-sanit",
        'category': 'general',
        'image': 'assets/images/game-items/sanitary-waste.png',
        'bin': 'general-waste',
        'fact': 'fact27'
    },
    {
        'name': 'Rigid Plastic Containers',
        'id': "genw-cont-rig-plstc-cont",
        'category': 'general',
        'image': 'assets/images/game-items/rigid-plastic-containers.png',
        'bin': 'general-waste',
        'fact': 'fact22'
    },
    {
        'name': 'Ceramics: broken cups, plates',
        'id': "genw-cont-ceramics",
        'category': 'general',
        'image': 'assets/images/game-items/ceramics.png',
        'bin': 'general-waste',
        'fact': 'fact26'
    },
    {
        'name': 'White Wine Bottle',
        'id': "gls-clr-wht-wn-btl",
        'category': 'glass-clear',
        'image': 'assets/images/game-items/wine-bottle.png',
        'bin': 'glass',
        'fact': 'fact12'
    },
    {
        'name': 'Beer Green Bottle',
        'id': "gls-grn-beer-btl",
        'category': 'glass-green',
        'image': 'assets/images/game-items/beer-bottle.png',
        'bin': 'glass',
        'fact': 'fact12'
    },
    {
        'name': 'Red Wine Bottle',
        'id': "gls-brn-wn-red-btl",
        'category': 'glass-green',
        'image': 'assets/images/game-items/wine-bottle.png',
        'bin': 'glass',
        'fact': 'fact13'
    },
    {
        'name': 'Beer Brown Bottle',
        'id': "gls-brn-beer-btl",
        'category': 'glass-brown',
        'image': 'assets/images/game-items/beer-bottle.png',
        'bin': 'glass',
        'fact': 'fact13'
    },
];