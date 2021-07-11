import React from 'react';
import { Popover } from '@material-ui/core';
import Picker from 'emoji-picker-react';
export function EmojiPicker({ anchor, setAnchor, saveEmoji }) {
  const handleSave = (emoji) => {
    saveEmoji(emoji.emoji);
  };

  const onEmojiClick = (event, emoji) => {
    handleSave(emoji);
  };

  return (
    <Popover
      open={Boolean(anchor)}
      anchorEl={anchor}
      onClose={() => setAnchor(null)}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Picker onEmojiClick={onEmojiClick} />
    </Popover>
  );
}

export default EmojiPicker;
