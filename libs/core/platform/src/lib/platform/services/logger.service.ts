export const consoleLogger =
  (dev: boolean) =>
  (
    level: 'debug' | 'info' | 'warn' | 'error',
    message: string,
    meta?: unknown
  ) => {
    const fn = level === 'debug' && !dev ? 'log' : level;
    console[fn](`[${level}] ${message}`, meta ?? '');
  };
