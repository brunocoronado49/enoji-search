import emoojiList from '../data/emoojiList.json'

export const filterEmoji = (search, max) => {
  return emoojiList.filter(emoji => {
    if (emoji.title.toLowerCase().includes(search.toLowerCase())) {
      return true
    }

    if (emoji.keywords.includes(search)) {
      return true
    }
    return false
  }).slice(0, max)
}
