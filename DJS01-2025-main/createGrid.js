// createGrid.js //

import "./PodcastCard.js";

export function createGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container)
    throw new Error(`Container with id "${containerId}" not found`);

  return {
    render(podcastList, onSelect) {
      container.innerHTML = "";
      podcastList.forEach((podcast) => {
        const card = document.createElement("podcast-card");
        card.setPodcast(podcast);
        card.addEventListener("podcast-selected", (e) => {
          if (onSelect) onSelect(e.detail);
        });
        container.appendChild(card);
      });
    },
  };
}
