/* 
1. test () - regExp.text(str)
2. match() - returns a of pattern, index, input and group, if we do not use global flag
3. search() - returns index of match else -1;
4. replace() - replace the match with other str ie. str.replace(pattern, replaceStr)
*/

const txt = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;

const regExp = /(\d+(?:,\d{3})*(?:\.\d{2})?) euro/g; // regular Exp

const matches = txt.match(regExp); // find matches
let totalIncome = 0; // calculates total income

if (matches) {
  for (const match in matches) {
    const amount = parseFloat(match.replace(" euro", "").replace(/,/g, ""));
    totalIncome += amount;
  }
}

console.log(totalIncome);
