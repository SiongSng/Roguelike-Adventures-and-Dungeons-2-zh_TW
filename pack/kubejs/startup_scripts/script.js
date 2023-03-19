// priority: 0

console.info("Starting recipe modification scripts...");

onEvent("item.registry", (event) => {
  // Register new items here
  // event.create('example_item').displayName('Example Item')
  event.create("mark_miner").displayName("I. Mark of the Miner").glow(true);
  event.create("mark_farmer").displayName("I. Mark of the Farmer").glow(true);
  event.create("mark_warrior").displayName("I. Mark of the Warrior").glow(true);
  event.create("mark_archer").displayName("I. Mark of the Archer").glow(true);
  event.create("mark_wizard").displayName("I. Mark of the Wizard").glow(true);
  event.create("mark_pirate").displayName("I. Mark of the Pirate").glow(true);
  event.create("mark_thief").displayName("I. Mark of the Thief").glow(true);
  event
    .create("mark_huntsman")
    .displayName("I. Mark of the Huntsman")
    .glow(true);
  event.create("mark_healer").displayName("I. Mark of the Healer").glow(true);
  event
    .create("mark_pitfighter")
    .displayName("I. Mark of the Pitfighter")
    .glow(true);
  event.create("mark_tamer").displayName("I. Mark of the Tamer").glow(true);

  event
    .create("mark_spelunker")
    .displayName("II. Mark of the Spelunker")
    .glow(true);
  event
    .create("mark_rancher")
    .displayName("II. Mark of the Rancher")
    .glow(true);
  event
    .create("mark_mercenary")
    .displayName("II. Mark of the Mercenary")
    .glow(true);
  event
    .create("mark_arbalester")
    .displayName("II. Mark of the Arbalester")
    .glow(true);
  event
    .create("mark_alchemist")
    .displayName("II. Mark of the Alchemist")
    .glow(true);
  event
    .create("mark_corsair")
    .displayName("II. Mark of the Corsair")
    .glow(true);
  event.create("mark_bandit").displayName("II. Mark of the Bandit").glow(true);
  event
    .create("mark_tracker")
    .displayName("II. Mark of the Tracker")
    .glow(true);
  event
    .create("mark_spiritualist")
    .displayName("II. Mark of the Spiritualist")
    .glow(true);
  event
    .create("mark_fighter")
    .displayName("II. Mark of the Fighter")
    .glow(true);
  event
    .create("mark_summoner")
    .displayName("II. Mark of the Summoner")
    .glow(true);

  event
    .create("mark_cavemaster")
    .displayName("III. Mark of the Cavemaster")
    .glow(true);
  event
    .create("mark_agrarian")
    .displayName("III. Mark of the Agrarian")
    .glow(true);
  event
    .create("mark_champion")
    .displayName("III. Mark of the Champion")
    .glow(true);
  event
    .create("mark_artillerist")
    .displayName("III. Mark of the Artillerist")
    .glow(true);
  event
    .create("mark_thaumaturge")
    .displayName("III. Mark of the Thaumaturge")
    .glow(true);
  event
    .create("mark_captain")
    .displayName("III. Mark of the Captain")
    .glow(true);
  event.create("mark_rogue").displayName("III. Mark of the Rogue").glow(true);
  event
    .create("mark_pursuer")
    .displayName("III. Mark of the Pursuer")
    .glow(true);
  event.create("mark_shaman").displayName("III. Mark of the Shaman").glow(true);
  event
    .create("mark_underdog")
    .displayName("III. Mark of the Underdog")
    .glow(true);
  event
    .create("mark_beastmaster")
    .displayName("III. Mark of the Beastmaster")
    .glow(true);

  event.create("arrow_down").displayName("綠色的下箭頭圖示");
  event.create("arrow_down_yellow").displayName("黃色的下箭頭圖示");
  event.create("arrow_up").displayName("上箭頭圖示");
  event.create("arrow_left").displayName("左箭頭圖示");

  event
    .create("copper_coin")
    .displayName("銅幣")
    .tooltip("可以透過完成任務取得");
  event.create("iron_coin").displayName("鐵幣").tooltip("可以透過完成任務取得");
  event.create("gold_coin").displayName("金幣").tooltip("可以透過完成任務取得");
  event
    .create("diamond_coin")
    .displayName("鑽石幣")
    .tooltip("可以透過完成任務取得");
  event
    .create("netherite_coin")
    .displayName("獄髓幣")
    .tooltip("可以透過完成任務取得");
  event.create("monster_coin").displayName("怪物幣");
  event
    .create("nether_coin")
    .displayName("地獄幣")
    .tooltip("可以透過完成地獄篇章的任務取得");

  event.create("diamond_nugget").displayName("鑽石硬塊");
  event.create("emerald_nugget").displayName("綠寶石硬塊");

  event
    .create("coin_01")
    .displayName("硬幣")
    .tooltip("您可以透過出售有價值的材料來獲得這些硬幣");
  event
    .create("coin_02")
    .displayName("一兩個硬幣")
    .tooltip("您可以透過出售有價值的材料來獲得這些硬幣");
  event
    .create("coin_03")
    .displayName("兩三個硬幣")
    .tooltip("您可以透過出售有價值的材料來獲得這些硬幣");
  event
    .create("coin_04")
    .displayName("十幾個硬幣")
    .tooltip("您可以透過出售有價值的材料來獲得這些硬幣");
  event
    .create("coin_05")
    .displayName("一打硬幣")
    .tooltip("您可以透過出售有價值的材料來獲得這些硬幣");
  event
    .create("coin_06")
    .displayName("一大堆硬幣")
    .tooltip("您可以透過出售有價值的材料來獲得這些硬幣");

  event
    .create("coin_q_1")
    .displayName("任務幣")
    .tooltip("您可以透過做某些任務來獲得這些硬幣");
  event
    .create("coin_q_2")
    .displayName("任務幣")
    .tooltip("您可以透過做某些任務來獲得這些硬幣");

  event.create("star").displayName("星星").glow(true);
  event.create("medal").displayName("勳章").glow(true);
  event.create("heart").displayName("心");
  event.create("heart-half").displayName("半顆心");
  event.create("caution").displayName("警告");
  event.create("chest").displayName("Chest");
  event.create("chest2").displayName("Chest 2");
  event.create("fire").displayName("Fire");
  event.create("forbid").displayName("Stop");
  event.create("help").displayName("Help");
  event.create("key").displayName("Key");
  event.create("key_01d").displayName("Old Key");
  event.create("lightning").displayName("Lightning");
  event.create("lock").displayName("Lock");
  event.create("lock-2").displayName("Lock Unlocked");
  event.create("mark").displayName("Mark");
  event.create("skull").displayName("Skull");
  event.create("skull2").displayName("Skull");
  event.create("skull3").displayName("Skull");
  event.create("ace").displayName("Ace of Spades");
  event.create("armour").displayName("Kit");
  event.create("bleed").displayName("Bleed");
  event.create("book2").displayName("Book");
  event.create("book3").displayName("Book");
  event.create("book4").displayName("Book");
  event.create("book_02f").displayName("Book");
  event.create("book_04g").displayName("Book");
  event.create("campfire").displayName("Fake Campfire");
  event.create("dice").displayName("Dice");
  event.create("letter").displayName("Letter");
  event.create("magnifier").displayName("Magnifying Glass");
  event.create("manuscript").displayName("Manuscript");
  event.create("map").displayName("Treasure Map");
  event.create("mine").displayName("Mine");
  event.create("ruby").displayName("Fake Ruby");
  event.create("scroll").displayName("Scroll");
  event.create("scroll2").displayName("Scroll");
  event.create("scroll_01c").displayName("Scroll");
  event.create("magicscroll").displayName("Magic Scroll");
  event.create("slash").displayName("Slashing");
  event.create("spellbook_01d").displayName("Spellbook");
  event.create("spyglass").displayName("Spyglass");
  event.create("levelup").displayName("Level Up");
  event.create("shield").displayName("Shield");
  event.create("ring").displayName("Ring");
  event.create("amulet").displayName("Amulet");
  event.create("rucksack").displayName("Rucksack");
  event.create("bomb").displayName("Bomb");
  event.create("dodge").displayName("Dodge");
  event.create("scaling").displayName("Scaling");
});
onEvent("block.registry", (event) => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});
