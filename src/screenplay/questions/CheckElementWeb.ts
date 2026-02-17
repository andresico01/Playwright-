import { Actor } from "@actors/Actor";
import { expect } from "@playwright/test";

export const checkChampionPage = (webElement: string,checkValue: string) => async (actor: Actor): Promise<void> => {
    await expect(actor.page.locator(webElement)).toHaveText(checkValue);
};