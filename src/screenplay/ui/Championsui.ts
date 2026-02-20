export const checkChampionsPage = {
    Title: 'div[data-testid="title"] > h1',
    ChampionTarget: (champion: string) => `//div[@data-testid="card-title" and text()="${champion}"]`,
    ChampionHabilities:  '//div[@id="carousel-:Rj75la6:"]//ol[@data-testid="slides-container"]',
    ListHabilities: '//div[@id="carousel-:Rj75la6:"]//ol[@data-testid="slides-container"]//div[@class="icon-tab-label"]'

};