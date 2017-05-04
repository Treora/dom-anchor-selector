import * as textQuote from 'dom-anchor-text-quote'

export default function selectorToRange(selector, root=window.document.body) {
    switch (selector.type) {
        case 'TextQuoteSelector':
            return textQuote.toRange(root, selector)
        default:
            throw new Error(`Unknown selector type: '${selector.type}'`)
    }
    // TODO support more selector types
    // TODO support multiple selectors
    // TODO support refined selectors
}
