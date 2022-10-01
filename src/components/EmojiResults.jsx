import { useEffect } from "react";
import clipboard from "clipboard";

const EmojiResults = ({ emojiData = [] }) => {
  useEffect(() => {
    clipboard();
  }, []);

  return <div>
    {
      emojiData.map(emoji => h1)
    }
  </div>;
};

export default EmojiResults;
