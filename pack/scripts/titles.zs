import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.entity.player.MCPlayerLoggedInEvent;
import crafttweaker.api.event.tick.MCPlayerTickEvent;
import crafttweaker.api.player.MCPlayerEntity;
import crafttweaker.api.world.MCWorld;


public class contributors_constants {
	public static val devUsers as string[] = ["Doctor_Mage", "Bizzoula", "TheFlame52", "Mihawkeyez", "Xaikii", "Zarchyar", "recyclebee"];
	public static val feedbackUsers as string[] = ["Asparagusus", "recyclebee", "Blapzapp", "Clank", "ManyullynShovel", "DiscordKitten63", "impostersunshine", "Alexluvu18", "HellsHound98", "KeyNapper", "ZeroReaper11", "airhaldeman", "Bizzoula", "polyorchid", "JamCatPlexer", "AliNebraska", "Crysi102", "Weakcheesysauce", "ThorbenP", "Lawyermood", "Rombus", "AhtiPlays", "Tylerrq", "SlimD", "CrimsonNectar", "EninTheReaper", "Fall3nFlame5", "Cesiya", "Vengenc3God", "ooglopboy", "Reindawn", "ColorlessKing", "BrowserCookiez", "CryoMaelstrom", "MrVenkam", "BlueRayser", "Shelmet67", "Rozerov", "tonicsense", "seejhae", "funkimunki123", "Izrul", "RegularInsanity", "enderbot65", "AyaDrevisOwO", "Gh0stdr4g0n17", "CrabRangooon", "aaronguner3", "Crayolavirus", "DerplingDev", "Rafael200pro", "Sir_Avocato", "Sirandrew123", "shatterwing", "Mekurushi", "Mankario", "t0srn", "M7MD_4e", "sleepyheadTM", "Nexe0nn", "Mandingduck", "DuoDuel84", "A_person42", "Menolakit", "Shaderius", "ad4mst", "FinnW", "xxAero", "Fireball5559", "WoodsyBread", "JBONA", "_Yazid_"];
	public static val patreonUsers as string[] = [];
}

CTEventManager.register<MCPlayerLoggedInEvent>((event) => {
	val player = event.getPlayer() as MCPlayerEntity;
	val world = player.getWorld();
	val username = player.getName().getString();
	if (username in contributors_constants.devUsers) {
		world.asServerWorld().server.executeCommand('ftbquests change_progress ' + username + ' complete 6237C8565A36FFF9', true);
	}
	if (username in contributors_constants.patreonUsers) {
		world.asServerWorld().server.executeCommand('ftbquests change_progress ' + username + ' complete 035217898B130AB7', true);
	}
	if (username in contributors_constants.feedbackUsers) {
		world.asServerWorld().server.executeCommand('ftbquests change_progress ' + username + ' complete 5D6983FD863F51B3', true);
	} else {
		if (player.getPersistentData().contains("feedbackNotified"))
			return;
		player.updatePersistentData({feedbackNotified: 1});
		world.asServerWorld().server.executeCommand("tellraw " + username + ' [{"text":"歡迎來到 ","color":"white"},{"text":"Roguelike 冒險與地下城 2! ","color":"green"},{"text":"如果您想要藉由回饋來幫助我們，請點擊","color":"white"},{"text":"這裡。 ","color":"yellow","hoverEvent":{"action":"show_text","contents":[{"text":"Feedback Form"}]},"clickEvent":{"action":"open_url","value":"https://bit.ly/RAD2Feedback1"}},{"text":"您還可以獲得一個","color":"white"},{"text":"自訂 Title","color":"light_purple","hoverEvent":{"action":"show_text","contents":[{"text":"貢獻者","color":"gold","bold":true}]}},{"text":".","color":"white","hoverEvent":{"action":"show_text","contents":[{"text":"","color":"gold"}]}}]', true);
	}
	
});
