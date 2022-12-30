export class log {
  static success(msg: string) {
    console.log(`%c${msg}`, "color:#000000; background:#38E54D");
  }

  static danger(msg: string) {
    console.log(`%c${msg}`, "color: #FFFFFF; background:#DC0000");
  }

  static info(msg: string) {
    console.log(`%c${msg}`, "color: #000000; background: #FFB100");
  }
}
