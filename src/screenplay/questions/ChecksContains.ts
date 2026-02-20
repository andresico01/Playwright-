import { Actor } from "@actors/Actor";
import {expect} from '@playwright/test';
import { getElements } from "@interactions/GetStringsElements";

export const checkTextElement = (webElement: string, text: string) => async (actor: Actor): Promise<void> => {
    const elementText = await getElements(webElement)(actor);
    console.log(elementText);
    console.log(actor.page.url());
    expect(elementText).toContain(text);
};