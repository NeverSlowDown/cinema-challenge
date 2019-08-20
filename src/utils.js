export const getStars = vote => {
  let result = 1;
  if(vote >= 0 && vote <= 2){result = 1}
  if(vote > 2 && vote <= 4){result = 2}
  if(vote > 4 && vote <= 6){result = 3}
  if(vote > 6 && vote <= 8){result = 4}
  if(vote > 8 && vote <= 10){result = 5}
  
  return result;
}