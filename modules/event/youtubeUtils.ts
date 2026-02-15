export function youtubeVideoId(embedUrl: string): string | null {
  const match = embedUrl.match(/\/embed\/([^/?]+)/);
  return match?.[1] ?? null;
}

export function youtubeWatchUrl(embedUrl: string): string | null {
  const videoId = youtubeVideoId(embedUrl);
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : null;
}

export function youtubeThumbnailUrl(embedUrl: string): string | null {
  const videoId = youtubeVideoId(embedUrl);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
}
