export const getStars = vote => {
  if(vote >= 0 && vote <= 2){return 1}
  if(vote > 2 && vote <= 4){return 2}
  if(vote > 4 && vote <= 6){return 3}
  if(vote > 6 && vote <= 8){return 4}
  if(vote > 8 && vote <= 10){return 5}
}