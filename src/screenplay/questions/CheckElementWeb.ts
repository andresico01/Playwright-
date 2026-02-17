import { Actor } from "@actors/Actor";
import { checkChampionsPage } from "@ui/Chapionsui";

export const checkChampionPage = () => async (actor: Actor): Promise<void> => {
    const selector = checkChampionsPage.Title;
    await actor.page.waitForSelector(selector);
};