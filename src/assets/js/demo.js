export function getClub(team) {
  console.log(team)
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
  else if (club.includes("wolves")) { return "wolves"; }
  else if (club.includes("sheffield")) { return "sheffield"; }
  else if (club.includes("newcastle")) { return "newcastle"; }
  else if (club.includes("southampton")) { return "southampton"; }
  else if (club.includes("palace")) { return "palace"; }
  else if (club.includes("brighton")) { return "brighton"; }
  else if (club.includes("west ham")) { return "westham"; }
  else if (club.includes("watford")) { return "watford"; }
  else if (club.includes("burnley")) { return "burnley"; }
  else if (club.includes("leeds")) { return "leeds"; }
  else if (club.includes("fulham")) { return "fulham"; }
  else if (club.includes("west brom")) { return "westbrom"; }

  else if (club.includes("turkey")) { return "tr"; }
  else if (club.includes("italy")) { return "it"; }
  else if (club.includes("wales")) { return "wa"; }
  else if (club.includes("switzerland")) { return "ch"; }
  else if (club.includes("denmark")) { return "dk"; }
  else if (club.includes("finland")) { return "fi"; }
  else if (club.includes("belgium")) { return "be"; }
  else if (club.includes("russia")) { return "ru"; }
  else if (club.includes("netherlands")) { return "nl"; }
  else if (club.includes("ukraine")) { return "ua"; }
  else if (club.includes("austria")) { return "at"; }
  else if (club.includes("macedonia")) { return "mk"; }
  else if (club.includes("england")) { return "en"; }
  else if (club.includes("croatia")) { return "hr"; }
  else if (club.includes("scotland")) { return "sc"; }
  else if (club.includes("czech")) { return "cz"; }
  else if (club.includes("spain")) { return "es"; }
  else if (club.includes("sweden")) { return "se"; }
  else if (club.includes("poland")) { return "pl"; }
  else if (club.includes("slovakia")) { return "sk"; }
  else if (club.includes("hungary")) { return "hu"; }
  else if (club.includes("germany")) { return "de"; }
  else if (club.includes("france")) { return "fr"; }
  else if (club.includes("portugal")) { return "pt"; }

  return club;
}
