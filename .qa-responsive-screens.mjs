export default async function run(page) {
  const captures = [];
  for (const width of [320, 390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("http://localhost:3021/", { waitUntil: "networkidle" });
    const dimensions = await page.evaluate(() => ({
      viewport: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      h1: document.querySelector("h1")?.getBoundingClientRect().toJSON(),
      header: document
        .querySelector("header")
        ?.getBoundingClientRect()
        .toJSON(),
    }));
    const path = `D:/Yonas Tsadik/buruktowingautoservices/qa-home-${width}.png`;
    await page.screenshot({ path, fullPage: true });
    captures.push({ width, path, ...dimensions });
  }
  return captures;
}
