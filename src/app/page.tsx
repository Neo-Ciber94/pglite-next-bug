"use client";

import { PGlite } from "@electric-sql/pglite";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const db = useRef<PGlite>();
  const [data, setData] = useState<unknown>("PENDING");

  useEffect(() => {
    if (db.current) {
      return;
    }

    (async () => {
      db.current = new PGlite();
      const result = await db.current.query("SELECT NOW()");
      setData(result);
    })();
  }, []);

  return (
    <div>
      <h1>PGlite</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
