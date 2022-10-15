export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  ms: number
) {
  let timer: NodeJS.Timer;
  return function (...args: Parameters<F>) {
    // @ts-ignore
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), ms);
  };
}
