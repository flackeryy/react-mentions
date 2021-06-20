import PLACEHOLDERS from './placeholders'

const makeMentionsMarkup = (markup, id, display, type) => {
  return markup
    .replace(PLACEHOLDERS.id, id)
    .replace(PLACEHOLDERS.display, display)
    .replace(PLACEHOLDERS.type, type)
}

export default makeMentionsMarkup
