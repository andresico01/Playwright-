import { Actor } from "@actors/Actor";

export const BrowseLolPage = {
    goToHomePage: () => async (actor: Actor) => {
        await actor.page.goto('https://www.leagueoflegends.com/es-es/');
    }
};