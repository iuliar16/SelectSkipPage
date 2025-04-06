import { useEffect, useState } from "react";

export function useFetchSkips() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => {
        setSkips(data);
        setSelectedId(data[0]?.id);
        setLoading(false);
      });
  }, []);

  return { skips, loading, selectedId, setSelectedId };
}
