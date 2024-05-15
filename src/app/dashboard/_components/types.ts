export type SetCardsType = React.Dispatch<React.SetStateAction<CardType[]>>

export type ColumnProps = {
    title: string
    headingColor: string
    cards: CardType[]
    column: string
    setCards: SetCardsType
}

export type CardType = {
    title: string
    id: string
    column: string
}
