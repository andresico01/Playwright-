import { test } from '@playwright/test';
import { Actor } from '@actors/Actor';
import { PressHeaderOption } from '@tasks/PressHeaderOption';
import {BrowseLolPage} from '@tasks/GoHomePage';
import {checkChampionPage} from '@questions/CheckElementWeb';
import { CheckHomePage } from '@questions/CheckHomePage';
import {AkaliTarget} from '@ui/Homeui';
import { ScrollToElement } from '@interactions/Scroll';
import { checkChampionsPage } from '@ui/Championsui';

test('Press Header Option Test', async ({ page }) => {
    const actor = Actor.named('John', page);    
   
    await actor.attemptsTo(
    BrowseLolPage.goToHomePage(),
    PressHeaderOption('champions'),
    checkChampionPage(checkChampionsPage.Title,'CAMPEÓN')
    );

});

test('Check element in home page', async ({page}) => {
    const actor = Actor.named('John', page);   
    await actor.attemptsTo(
    BrowseLolPage.goToHomePage(),
    ScrollToElement.goElement(AkaliTarget),
    CheckHomePage.checkHomePage(AkaliTarget)
    );

});