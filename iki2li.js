import { os } from "./core/os.js";
import { iki2li } from "./core/iki2li-native.js";
import { PQ } from "./core/PQ-runner.js";

const value = os.load();
const pulse = iki2li.pulse(value);

PQ.start(pulse);
