import type { Actor } from '@actors/Actor';

export const ScrollToElement = {
    goElement: (selector: string) => async (actor: Actor) => {
        // Opción A: Scroll suave hasta el elemento
        await actor.page.locator(selector).scrollIntoViewIfNeeded();
    },
    goToEnd: () => async (actor: Actor) => {
        // Opción B: Ir hasta abajo de todo
        await actor.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }
};