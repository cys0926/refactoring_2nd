import invoices from "./invoices.json" assert { type: "json" };
import plays from "./plays.json" assert { type: "json" };
import { statement } from "./1-8/statement.js";

const result = statement(invoices[0], plays);

console.log(result);
