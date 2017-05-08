import * as textQuote from 'dom-anchor-text-quote'


export default function selectorToRange(selector) {
    const selectors = Array.isArray(selector) ? selector : [selector]
    const range = resolveSelectors(selectors)
    return range
}

function resolveSelectors(selectors) {
    const strategy = whateverWorks
    return strategy(selectors)
}

function resolveSelector(selector) {
    const root = window.document.body
    switch (selector.type) {
        case 'TextQuoteSelector':
            return textQuote.toRange(root, selector)
        default:
            throw new Error(`Unknown selector type: '${selector.type}'`)
    }
}

function whateverWorks(selectors) {
    const errors = []
    for (let selectorIndex = 0; selectorIndex < selectors.length; selectorIndex++) {
        const selector = selectors[selectorIndex]
        try {
            const range = resolveSelector(selector)
            // We successfully found the fragment, return it.
            return range
        } catch (err) {
            // Anchoring this selector did not succeed, try the next alternative.
            errors.push(err)
            continue
        }
    }
    // None of them worked, bummer.
    throw new Error(`Could not anchor any selector; errors: ${errors.map(e => `\n- ${e}`)}`)
}
