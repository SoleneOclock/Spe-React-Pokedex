'use client';

// ci dessus on specifie que notre composant est un client component pour pouvoir gerer du state
import { useState } from 'react';

function LikeBtn() {
  const [nb, setNb] = useState(0);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        setNb(nb + 1);
      }}
    >
      {`${nb} ❤️`}
    </button>
  );
}

export default LikeBtn;
