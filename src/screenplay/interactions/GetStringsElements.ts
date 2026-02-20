import type { Actor } from '@actors/Actor';


export const getElements = (webElement: string) => async (actor: Actor): Promise<string[]> => {
    return await actor.page.locator(webElement).allTextContents();
};