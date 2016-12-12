export type MenuTree = {
    title: string,
    items?: MenuTree[]
}

export interface IMenu {
    toggle (label: string): void,
    mount(): void,
    populate(host:Element, items:MenuTree[]): void,
    destroy(): void
}