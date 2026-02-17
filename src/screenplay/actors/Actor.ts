import type { Page } from '@playwright/test';

export class Actor {
    constructor(
        public readonly name: string, 
        public readonly page: Page
    ) {}

    static named(name: string, page: Page): Actor {
        return new Actor(name, page);
    }

    // El corazón de Screenplay: El actor hace cosas
    async attemptsTo(...tasks: Array<(actor: Actor) => Promise<void>>): Promise<void> {
        for (const task of tasks) {
            await task(this);
        }
    }
}