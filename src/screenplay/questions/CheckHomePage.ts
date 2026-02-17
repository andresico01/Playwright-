import { Actor } from "@actors/Actor";
import { expect } from "@playwright/test";

export const CheckHomePage = {
    checkHomePage: (option:string) => async (actor: Actor): Promise<void> => {
    
        await expect(actor.page.locator(option)).toBeVisible();
        
    }
};