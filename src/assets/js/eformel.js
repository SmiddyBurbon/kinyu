export function getCountry(city) {
  var country = city.toLowerCase();

  /*------VENUES------*/

  if (country.includes("diriyya")) { return "sa"; }
  else if (country.includes("marrakesch")) { return "ma"; }
  else if (country.includes("marrakesh")) { return "ma"; }
  else if (country.includes("marrakech")) { return "ma"; }
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
  else if (country.includes("sette")) { return "br"; }
  else if (country.includes("camara")) { return "br"; }

  else if (country.includes("evans")) { return "nz"; }
  else if (country.includes("hartley")) { return "nz"; }

  else if (country.includes("vandoorne")) { return "be"; }
  else if (country.includes("ambrosio")) { return "be"; }

  else if (country.includes("günther")) { return "de"; }
  else if (country.includes("gunther")) { return "de"; }
  else if (country.includes("abt") && !(country.includes("audi"))) { return "de"; }
  else if (country.includes("rast")) { return "de"; }
  else if (country.includes("lotterer")) { return "de"; }
  else if (country.includes("wehrlein")) { return "de"; }

  else if (country.includes("lopez")) { return "ar"; }

  else if (country.includes("dillmann")) { return "fr"; }
  else if (country.includes("vergne")) { return "fr"; }

  else if (country.includes("mortara")) { return "ch"; }
  else if (country.includes("buemi")) { return "ch"; }
  else if (country.includes("jani")) { return "ch"; }
  else if (country.includes("müller")) { return "ch"; }
  else if (country.includes("muller")) { return "ch"; }

  else if (country.includes("da costa")) { return "pt"; }

  else if (country.includes("rosenqvist")) { return "se"; }

  else if (country.includes("qing")) { return "cn"; }

  /*------TEST DRIVERS------*/

  else if (country.includes("cassidy")) { return "nz"; }
  else if (country.includes("camara")) { return "br"; }
  else if (country.includes("albuquerque")) { return "pt"; }
  else if (country.includes("lapierre")) { return "fr"; }
  else if (country.includes("kirkwood")) { return "us"; }
  else if (country.includes("nato")) { return "fr"; }
  else if (country.includes("hughes")) { return "uk"; }
  else if (country.includes("auer")) { return "at"; }
  else if (country.includes("linde")) { return "rs"; }
  else if (country.includes("fenestraz")) { return "fr"; }
  else if (country.includes("drudi")) { return "it"; }
  else if (country.includes("chadwick")) { return "uk"; }
  else if (country.includes("takaboshi")) { return "jp"; }
  else if (country.includes("preining")) { return "at"; }
  else if (country.includes("derani")) { return "br"; }
  else if (country.includes("marden")) { return "uk"; }
  else if (country.includes("eriksson")) { return "se"; }
  else if (country.includes("leclerc")) { return "mc"; }
  else if (country.includes("dejonghe")) { return "be"; }
  else if (country.includes("powell")) { return "uk"; }
  else if (country.includes("fuoco")) { return "it"; }
  else if (country.includes("cao")) { return "cn"; }
  else if (country.includes("makowiecki")) { return "fr"; }
  else if (country.includes("juncadella")) { return "es"; }

  /*------NUMBERS------*/

  else if (country == "2") { return "uk"; }
  else if (country == "4") { return "nl"; }
  else if (country == "3") { return "uk"; }
  else if (country == "5") { return "be"; }
  else if (country == "6") { return "br"; }
  else if (country == "7") { return "ch"; }
  else if (country == "11") { return "br"; }
  else if (country == "13") { return "pt"; }
  else if (country == "17") { return "nl"; }
  else if (country == "18") { return "ch"; }
  else if (country == "19") { return "br"; }
  else if (country == "20") { return "nz"; }
  else if (country == "22") { return "uk"; }
  else if (country == "23") { return "ch"; }
  else if (country == "25") { return "fr"; }
  else if (country == "27") { return "uk"; }
  else if (country == "28") { return "de"; }
  else if (country == "33") { return "de"; }
  else if (country == "36") { return "de"; }
  else if (country == "48") { return "ch"; }
  else if (country == "51") { return "uk"; }
  else if (country == "64") { return "be"; }
  else if (country == "66") { return "de"; }
  else if (country == "94") { return "uk"; }

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
  else if (name.includes("cassidy")) { return "virgin"; }

  else if (name.includes("lynn")) { return "mahindra"; }
  else if (name.includes("calado")) { return "jaguar"; }
  else if (name.includes("piquet")) { return "jaguar"; }
  else if (name.includes("evans")) { return "jaguar"; }

  else if (name.includes("vandoorne")) { return "mercedes"; }
  else if (name.includes("vries")) { return "mercedes"; }

  else if (name.includes("hartley")) { return "dragon"; }
  else if (name.includes("sette")) { return "dragon"; }
  else if (name.includes("camara")) { return "dragon"; }
  else if (name.includes("müller")) { return "dragon"; }

  else if (name.includes("dillmann")) { return "nio"; }
  else if (name.includes("turvey")) { return "nio"; }
  else if (name.includes("qing")) { return "nio"; }

  else if (name.includes("grassi")) { return "audi"; }
  else if (name.includes("abt")) { return "nio"; }
  else if (name.includes("rast")) { return "audi"; }

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

export function getFullTeam(driver) {
  var name = driver.toLowerCase();

  if (name.includes("bird")) { return "Envision Virgin Racing"; }
  else if (name.includes("frijns")) { return "Envision Virgin Racing"; }

  else if (name.includes("calado")) { return "Panasonic Jaguar Racing"; }
  else if (name.includes("piquet")) { return "Panasonic Jaguar Racing"; }
  else if (name.includes("evans")) { return "Panasonic Jaguar Racing"; }

  else if (name.includes("vandoorne")) { return "Mercedes-Benz EQ Formula E Team"; }
  else if (name.includes("vries")) { return "Mercedes-Benz EQ Formula E Team"; }

  else if (name.includes("hartley")) { return "GEOX Dragon"; }
  else if (name.includes("müller")) { return "GEOX Dragon"; }
  else if (name.includes("sette")) { return "GEOX Dragon"; }
  else if (name.includes("camara")) { return "GEOX Dragon"; }

  else if (name.includes("dillmann")) { return "NIO 333 Formula E Team"; }
  else if (name.includes("turvey")) { return "NIO 333 Formula E Team"; }
  else if (name.includes("qing")) { return "NIO 333 Formula E Team"; }
  else if (name.includes("abt")) { return "NIO 333 Formula E Team"; }

  else if (name.includes("grassi")) { return "Audi Sport ABT Schaeffler"; }
  else if (name.includes("rast")) { return "Audi Sport ABT Schaeffler"; }

  else if (name.includes("massa")) { return "ROKIT Venturi Racing"; }
  else if (name.includes("mortara")) { return "ROKIT Venturi Racing"; }

  else if (name.includes("rowland")) { return "Nissan e.dams"; }
  else if (name.includes("buemi")) { return "Nissan e.dams"; }

  else if (name.includes("vergne")) { return "DS Techeetah"; }
  else if (name.includes("da costa")) { return "DS Techeetah"; }

  else if (name.includes("günther")) { return "BMW i Andretti Motorsport"; }
  else if (name.includes("sims")) { return "BMW i Andretti Motorsport"; }

  else if (name.includes("ambrosio")) { return "Mahindra Racing"; }
  else if (name.includes("rosenqvist")) { return "Mahindra Racing"; }
  else if (name.includes("wehrlein")) { return "Mahindra Racing"; }
  else if (name.includes("lynn")) { return "Mahindra Racing"; }

  else if (name.includes("jani")) { return "TAG Heuer Porsche Formula E Team"; }
  else if (name.includes("lotterer")) { return "TAG Heuer Porsche Formula E Team"; }

  else if (name.includes("techeetah")) { return "DS Techeetah"; }
  else if (name.includes("mahindra")) { return "Mahindra Racing"; }
  else if (name.includes("virgin")) { return "Envision Virgin Racing"; }
  else if (name.includes("nissan")) { return "Nissan e.dams"; }
  else if (name.includes("bmw")) { return "BMW i Andretti Motorsport"; }
  else if (name.includes("audi")) { return "Audi Sport ABT Schaeffler"; }
  else if (name.includes("nio")) { return "NIO 333 Formula E Team"; }
  else if (name.includes("venturi")) { return "ROKIT Venturi Racing"; }
  else if (name.includes("dragon")) { return "GEOX Dragon"; }
  else if (name.includes("jaguar")) { return "Panasonic Jaguar Racing"; }
  else if (name.includes("hwa")) { return "HWA Racelab"; }
  else if (name.includes("mercedes")) { return "Mercedes-Benz EQ Formula E Team"; }
  else if (name.includes("porsche")) { return "TAG Heuer Porsche Formula E Team"; }
}

export function getPortrait(driver) {
  var name = driver.toLowerCase();

  if (name.includes("bird")) { return "bird"; }
  else if (name.includes("frijns")) { return "frijns"; }

  else if (name.includes("calado")) { return "calado"; }
  else if (name.includes("piquet")) { return "piquet"; }

  else if (name.includes("vandoorne")) { return "vandoorne"; }
  else if (name.includes("vries")) { return "devries"; }

  else if (name.includes("hartley")) { return "hartley"; }
  else if (name.includes("sette")) { return "settecamara"; }
  else if (name.includes("camara")) { return "settecamara"; }
  else if (name.includes("müller")) { return "mueller"; }

  else if (name.includes("turvey")) { return "turvey"; }
  else if (name.includes("qing")) { return "qing"; }

  else if (name.includes("grassi")) { return "digrassi"; }
  else if (name.includes("abt")) { return "abt"; }
  else if (name.includes("rast")) { return "rast"; }

  else if (name.includes("massa")) { return "massa"; }
  else if (name.includes("mortara")) { return "mortara"; }

  else if (name.includes("rowland")) { return "rowland"; }
  else if (name.includes("buemi")) { return "buemi"; }

  else if (name.includes("vergne")) { return "vergne"; }
  else if (name.includes("da costa")) { return "dacosta"; }

  else if (name.includes("günther")) { return "guenther"; }
  else if (name.includes("sims")) { return "sims"; }

  else if (name.includes("ambrosio")) { return "dambrosio"; }
  else if (name.includes("wehrlein")) { return "wehrlein"; }
  else if (name.includes("lynn")) { return "lynn"; }

  else if (name.includes("jani")) { return "jani"; }
  else if (name.includes("lotterer")) { return "lotterer"; }
}
