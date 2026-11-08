export default async function run(page) {
  const routes = [
    "/",
    "/contact",
    "/about",
    "/services/new-used-tires",
    "/service-area/cedar-rapids-52404",
    "/blog/winter-towing-auto-repair-cedar-rapids",
  ];
  const widths = [320, 360, 390, 430, 768, 1024, 1280, 1440];
  const results = [];

  for (const route of routes) {
    await page.goto(`http://localhost:3022${route}`, {
      waitUntil: "domcontentloaded",
    });
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      results.push({
        route,
        requestedWidth: width,
        ...(await page.evaluate(() => {
          const footer = document.querySelector("footer");
          return {
            viewport: window.innerWidth,
            documentWidth: document.documentElement.scrollWidth,
            horizontalOverflow:
              document.documentElement.scrollWidth > window.innerWidth + 1,
            footerOverflow: Boolean(
              footer && footer.scrollWidth > footer.clientWidth + 1,
            ),
          };
        })),
      });
    }
  }
  return results;
}
