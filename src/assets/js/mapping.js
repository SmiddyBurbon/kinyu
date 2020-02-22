export function getCountry(city) {
  var country = city.toLowerCase();

  /*------VENUES------*/

  if (country.includes("diriyya")) { return "sa"; }
  else if (country.includes("marrakesch")) { return "ma"; }
  else if (country.includes("santiago")) { return "cl"; }
  else if (country.includes("mexico")) { return "mx"; }
  else if (country.includes("hong")) { return "hk"; }
  else if (country.includes("sanya")) { return "cn"; }
  else if (country.includes("rom")) { return "it"; }
  else if (country.includes("paris")) { return "fr"; }
  else if (country.includes("monaco")) { return "mc"; }
  else if (country.includes("berlin")) { return "de"; }
  else if (country.includes("bern")) { return "ch"; }
  else if (country.includes("swiss")) { return "ch"; }
  else if (country.includes("york")) { return "us"; }
  else if (country.includes("seoul")) { return "sk"; }
  else if (country.includes("london")) { return "uk"; }
  else if (country.includes("jakarta")) { return "in"; }
  else if (country.includes("valencia")) { return "es"; }

  /*------DRIVERS------*/

  else if (country.includes("bird")) { return "uk"; }
  else if (country.includes("lynn")) { return "uk"; }
  else if (country.includes("rowland")) { return "uk"; }
  else if (country.includes("paffett")) { return "uk"; }
  else if (country.includes("turvey")) { return "uk"; }
  else if (country.includes("sims")) { return "uk"; }
  else if (country.includes("calado")) { return "uk"; }

  else if (country.includes("frijns")) { return "nl"; }
  else if (country.includes("vries")) { return "nl"; }

  else if (country.includes("piquet")) { return "br"; }
  else if (country.includes("nasr")) { return "br"; }
  else if (country.includes("grassi")) { return "br"; }
  else if (country.includes("massa")) { return "br"; }

  else if (country.includes("evans")) { return "nz"; }
  else if (country.includes("hartley")) { return "nz"; }

  else if (country.includes("vandoorne")) { return "be"; }
  else if (country.includes("ambrosio")) { return "be"; }

  else if (country.includes("günther")) { return "de"; }
  else if (country.includes("abt") && !(country.includes("audi"))) { return "de"; }
  else if (country.includes("lotterer")) { return "de"; }
  else if (country.includes("wehrlein")) { return "de"; }

  else if (country.includes("lopez")) { return "ar"; }

  else if (country.includes("dillmann")) { return "fr"; }
  else if (country.includes("vergne")) { return "fr"; }

  else if (country.includes("mortara")) { return "ch"; }
  else if (country.includes("buemi")) { return "ch"; }
  else if (country.includes("jani")) { return "ch"; }
  else if (country.includes("müller")) { return "ch"; }

  else if (country.includes("da costa")) { return "pt"; }

  else if (country.includes("rosenqvist")) { return "se"; }

  else if (country.includes("qing")) { return "cn"; }

  /*------TEAMS------*/

  else if (country.includes("audi")) { return "audi"; }
  else if (country.includes("bmw")) { return "bmw"; }
  else if (country.includes("techeetah")) { return "techeetah"; }
  else if (country.includes("virgin")) { return "virgin"; }
  else if (country.includes("dragon")) { return "dragon"; }
  else if (country.includes("mahindra")) { return "mahindra"; }
  else if (country.includes("porsche")) { return "porsche"; }
  else if (country.includes("nio")) { return "nio"; }
  else if (country.includes("venturi")) { return "venturi"; }
  else if (country.includes("nissan")) { return "nissan"; }
  else if (country.includes("mercedes")) { return "mercedes"; }
  else if (country.includes("jaguar")) { return "jaguar"; }
}

export function getTeam(driver) {
  var name = driver.toLowerCase();

  if (name.includes("bird")) { return "virgin"; }
  else if (name.includes("frijns")) { return "virgin"; }

  else if (name.includes("lynn")) { return "jaguar"; }
  else if (name.includes("calado")) { return "jaguar"; }
  else if (name.includes("piquet")) { return "jaguar"; }
  else if (name.includes("evans")) { return "jaguar"; }

  else if (name.includes("vandoorne")) { return "mercedes"; }
  else if (name.includes("vries")) { return "mercedes"; }

  else if (name.includes("hartley")) { return "dragon"; }
  else if (name.includes("müller")) { return "dragon"; }

  else if (name.includes("dillmann")) { return "nio"; }
  else if (name.includes("turvey")) { return "nio"; }
  else if (name.includes("qing")) { return "nio"; }

  else if (name.includes("grassi")) { return "audi"; }
  else if (name.includes("abt")) { return "audi"; }

  else if (name.includes("massa")) { return "venturi"; }
  else if (name.includes("mortara")) { return "venturi"; }

  else if (name.includes("rowland")) { return "nissan"; }
  else if (name.includes("buemi")) { return "nissan"; }

  else if (name.includes("vergne")) { return "techeetah"; }
  else if (name.includes("da costa")) { return "techeetah"; }

  else if (name.includes("günther")) { return "bmw"; }
  else if (name.includes("sims")) { return "bmw"; }

  else if (name.includes("ambrosio")) { return "mahindra"; }
  else if (name.includes("rosenqvist")) { return "mahindra"; }
  else if (name.includes("wehrlein")) { return "mahindra"; }

  else if (name.includes("jani")) { return "porsche"; }
  else if (name.includes("lotterer")) { return "porsche"; }

  else if (name.includes("techeetah")) { return "techeetah"; }
  else if (name.includes("mahindra")) { return "mahindra"; }
  else if (name.includes("virgin")) { return "virgin"; }
  else if (name.includes("nissan")) { return "nissan"; }
  else if (name.includes("bmw")) { return "bmw"; }
  else if (name.includes("audi")) { return "audi"; }
  else if (name.includes("nio")) { return "nio"; }
  else if (name.includes("venturi")) { return "venturi"; }
  else if (name.includes("dragon")) { return "dragon"; }
  else if (name.includes("jaguar")) { return "jaguar"; }
  else if (name.includes("hwa")) { return "hwa"; }
  else if (name.includes("mercedes")) { return "mercedes"; }
  else if (name.includes("porsche")) { return "porsche"; }
}
