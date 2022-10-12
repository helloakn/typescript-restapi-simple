enum Colors {
  Reset ='\x1b[0m',
  Bright = '\x1b[1m',
  Dim = '\x1b[2m',
  Underscore = '\x1b[4m',
  Blink = '\x1b[5m',
  Reverse = '\x1b[7m',
  Hidden = '\x1b[8m',

  FgBlack = '\x1b[30m',
  FgRed = '\x1b[31m',
  FgGreen = '\x1b[32m',
  FgYellow = '\x1b[33m',
  FgBlue = '\x1b[34m',
  FgMagenta = '\x1b[35m',
  FgCyan = '\x1b[36m',
  FgWhite = '\x1b[37m',

  BgBlack = '\x1b[40m',
  BgRed = '\x1b[41m',
  BgGreen = '\x1b[42m',
  BgYellow = '\x1b[43m',
  BgBlue = '\x1b[44m',
  BgMagenta = '\x1b[45m',
  BgCyan = '\x1b[46m',
  BgWhite = '\x1b[47m'
}

type StaticImplements<I extends new (...args: any[]) => any, C extends I> = InstanceType<I>;
type Constructor<T> = { new (): T }

interface IDebug{

}

interface IDebugStatic {
	new (...args: any[]): IDebug;

	log(msg: string): IDebugStatic;
  warning(msg: string): IDebugStatic;
}

export default class Debug implements StaticImplements<IDebugStatic, typeof Debug> {
/**
* Usage:
*   Debug.log('msg')
*   Debug.log('msg').warning('this is warning')
*   or
*   new Debug().log('this is log').warning('this is warning')
**/
  public static Colors = Colors;
  public static log(msg: string): IDebugStatic {
    console.log(Colors.FgWhite, msg, Colors.Reset)
    return this;
  }

  public static logs(...msgs: string[]): void {
    console.log(...msgs)  
  }

  public static warning(msg: string): IDebugStatic {
    console.log(Colors.FgYellow, msg, Colors.Reset)
    return this;
  }
  
}