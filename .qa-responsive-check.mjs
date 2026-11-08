export default async function run(page) {
  const routes = [
    "/",
    "/contact",
    "/about",
    "/services/new-used-tires",
    "/service-area/cedar-rapids-52404",
    "/blog/winter-towing-auto-repair-cedar-rapids",
  ];
  const targetWidths = [320, 360, 390, 430, 768, 1024, 1280, 1440];
  const results = [];

  for (const route of routes) {
    await page.goto(`http://localhost:3010${route}`, {
      waitUntil: "domcontentloaded",
    });
    for (const targetWidth of targetWidths) {
      await page.setViewportSize({ width: targetWidth + 64, height: 900 });
      const measurements = await page.evaluate(() => {
        const footer = document.querySelector("footer");
        const header = document.querySelector("header");
        return {
          viewport: window.innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          horizontalOverflow:
            document.documentElement.scrollWidth > window.innerWidth + 1,
          headerScrollWidth: header?.scrollWidth ?? 0,
          headerClientWidth: header?.clientWidth ?? 0,
          footerOverflow: Boolean(
            footer && footer.scrollWidth > footer.clientWidth + 1,
          ),
        };
      });
      results.push({ route, targetWidth, ...measurements });
    }
  }

  return results;
}
