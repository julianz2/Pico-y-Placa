// in main.js you can test the validation of pico y placa
// if you get false it means you don't have any restriction to exit and true you you can't use your car
import { picoPlacaValidator } from "./src/picoPlaca";
try {
  // Your plate,date and time  here

  console.log(picoPlacaValidator("PDA-2675", "2023-02-22T00:00:00", "09:29"));
} catch (error) {
  console.warn(error.message);
}
