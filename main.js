import { picoPlacaValidator } from "./src/picoPlaca";
try {
  console.log(picoPlacaValidator("PDA-2675", "2023-02-22T00:00:00", "09:31"));
} catch (error) {
  console.warn(error.message);
}
