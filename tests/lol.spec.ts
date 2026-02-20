import { test } from '@playwright/test';
import { Actor } from '@actors/Actor';
import { PressHeaderOption } from '@tasks/PressHeaderOption';
import {BrowseLolPage} from '@tasks/GoHomePage';
import {checkChampionPage} from '@questions/CheckElementWeb';
import { CheckHomePage } from '@questions/CheckHomePage';
import {AkaliTarget} from '@ui/Homeui';
import { ScrollToElement } from '@interactions/Scroll';
import { checkChampionsPage } from '@ui/Championsui';
import { click } from '@interactions/Click';
import { checkTextElement } from '@questions/ChecksContains';

let actor: Actor;

const JANNA:string = 'Janna';

test.beforeEach(async ({ page }) => {
    actor = Actor.named('John', page);
    await actor.attemptsTo(
    BrowseLolPage.goToHomePage()
    )
});


test('Press Header Option Test', async ({ page }) => {  
   
    await actor.attemptsTo(
    
    PressHeaderOption('champions'),
    checkChampionPage(checkChampionsPage.Title,'CAMPEÓN')
    );

});

test('Check element in home page', async ({page}) => {

    await actor.attemptsTo(
    ScrollToElement.goElement(AkaliTarget),
    CheckHomePage.checkHomePage(AkaliTarget)
    );

});

test('press and check janna champion', async ({page}) => {

    await actor.attemptsTo( 
        PressHeaderOption('champions'),
        ScrollToElement.goElement(checkChampionsPage.ChampionTarget(JANNA)),
        checkChampionPage(checkChampionsPage.ChampionTarget(JANNA),JANNA),
        click(checkChampionsPage.ChampionTarget(JANNA)),
        ScrollToElement.goElement(checkChampionsPage.ChampionHabilities),
        checkTextElement(checkChampionsPage.ListHabilities,'Viento a Favor')

    )
});