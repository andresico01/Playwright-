import {Actor} from '@actors/Actor';
import {headerButtonRiot} from '@ui/Homeui';


export const PressHeaderOption = (option: string) => async (actor: Actor): Promise<void> => {
    const selector = headerButtonRiot(option);
    await actor.page.click(selector);
}; 

