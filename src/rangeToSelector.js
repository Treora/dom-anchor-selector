import * as textQuote from 'dom-anchor-text-quote'

export default function rangeToSelector(range, root=window.document.body) {
    const selector = textQuote.fromRange(root, range)
    // TODO compose multiple selector types
    selector.type = 'TextQuoteSelector'
    return selector
}
