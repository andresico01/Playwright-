import { Actor } from "@actors/Actor";

export const CheckHomePage = {
    checkHomePage: (option:string) => async (actor: Actor): Promise<void> => {
        await actor.page.waitForSelector(option);
    }
};