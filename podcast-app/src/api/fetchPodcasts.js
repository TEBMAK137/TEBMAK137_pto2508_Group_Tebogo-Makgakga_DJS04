import { genres } from "../data.js";

const API_BASE = "https://podcast-api.netlify.app";

export const GENRE_MAP = Object.fromEntries(genres.map((g) => [g.id, g.title]));

function normalizePodcast(raw) {
  const genreIds = raw.genreIds ?? raw.genres ?? [];
  return {
    id: String(raw.id),
    title: raw.title,
    description: raw.description,
    seasons: raw.seasons,
    image: raw.image,
    updated: raw.updated,
    genreIds,
    genreNames: genreIds.map((id) => GENRE_MAP[id] || "Unknown"),
  };
}

export async function fetchAllPodcasts() {
  const response = await fetch(API_BASE);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return Array.isArray(data) ? data.map(normalizePodcast) : [];
}
