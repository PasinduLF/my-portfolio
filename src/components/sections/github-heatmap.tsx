"use client";

import { useState } from "react";

const CHART_COLOR = "3b82f6";

export function GithubHeatmap({ username }: { username: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <p className="text-sm text-muted-foreground">
        Contribution graph is temporarily unavailable —{" "}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          view contributions on GitHub ↗
        </a>
      </p>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://ghchart.rshah.org/${CHART_COLOR}/${username}`}
      alt={`${username}'s GitHub contribution graph`}
      className="min-w-[640px]"
      onError={() => setFailed(true)}
      onLoad={(e) => {
        // The chart service occasionally returns HTTP 200 with an empty
        // SVG body for some accounts, which loads "successfully" but
        // renders nothing — treat a naturally-zero-sized image as a
        // failure too so the text fallback shows instead of blank space.
        if (e.currentTarget.naturalWidth === 0) setFailed(true);
      }}
    />
  );
}
