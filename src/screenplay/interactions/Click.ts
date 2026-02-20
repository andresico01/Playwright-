import type { Actor } from '@actors/Actor';

export const click = (webElement: string) => async (actor: Actor): Promise<void> => {
    await actor.page.click(webElement);
};