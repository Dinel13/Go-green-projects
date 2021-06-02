import React from "react";

import { waste } from "./data";

export default function Rekomendation({ category }) {
  return (
    <div>
      {waste.map(
        (was) =>
          was.category === category && (
            <>
              <p>{was.category}</p>
              <img src={was.icon} />
            </>
          )
      )}
    </div>
  );
}
