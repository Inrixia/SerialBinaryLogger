import { SerialPort } from "serialport";
import { createWriteStream } from "fs";
import args from "args";

args.option("path", "The tcp ip address to connect to").option("baudRate", "The tcp port to connect to", 115200, parseInt);

const { path, baudRate } = <{ path: string; baudRate: number }>args.parse(process.argv);

if (path === undefined) throw new Error("You must specify a path to connect to");

const port = new SerialPort({ path, baudRate });
port.pipe(createWriteStream(`${Date.now()}.bin`));
