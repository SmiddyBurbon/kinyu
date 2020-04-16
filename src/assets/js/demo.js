export function getClub(team) {
  var club = team.toLowerCase();

  if (club.includes("liverpool")) { return "liverpool"; }
  else if (club.includes("man") && club.includes("city")) { return "mancity"; }
  else if (club.includes("man") && club.includes("united")) { return "manutd"; }
  else if (club.includes("leicester")) { return "leicester"; }
  else if (club.includes("chelsea")) { return "chelsea"; }
  else if (club.includes("tottenham")) { return "tottenham"; }
  else if (club.includes("arsenal")) { return "arsenal"; }
  else if (club.includes("aston")) { return "astonvilla"; }
  else if (club.includes("norwich")) { return "norwich"; }
  else if (club.includes("bournemouth")) { return "bournemouth"; }
  else if (club.includes("everton")) { return "everton"; }
  else if (club.includes("wolver")) { return "wolves"; }
  else if (club.includes("sheffield")) { return "sheffield"; }
  else if (club.includes("newcastle")) { return "newcastle"; }
  else if (club.includes("southampton")) { return "southampton"; }
  else if (club.includes("palace")) { return "palace"; }
  else if (club.includes("brighton")) { return "brighton"; }
  else if (club.includes("west ham")) { return "westham"; }
  else if (club.includes("watford")) { return "watford"; }
  else if (club.includes("burnley")) { return "burnley"; }
}
