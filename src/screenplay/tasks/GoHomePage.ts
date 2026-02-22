import { Actor } from "@actors/Actor";

export const BrowseLolPage = {
    goToHomePage: () => async (actor: Actor) => {
        await actor.page.goto('/');
        console.log(actor.page.url());
    }
};