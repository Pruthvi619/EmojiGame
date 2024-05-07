const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiButton = () => {
    clickEmoji(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickEmojiButton}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
