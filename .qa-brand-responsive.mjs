export default async function run(page) {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:3010", { waitUntil: "networkidle" });
  const mobile = await page.evaluate(() => ({
    viewport: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    headerWidth: document.querySelector("header")?.getBoundingClientRect()
      .width,
    logoWidth: document.querySelector("header img")?.getBoundingClientRect()
      .width,
    phoneWidth: document
      .querySelector('header a[href^="tel:"]')
      ?.getBoundingClientRect().width,
    tagline: document.querySelector("header img")?.alt,
  }));
  await page.locator("footer img").scrollIntoViewIfNeeded();
  await page.waitForFunction(() => {
    const image = document.querySelector("footer img");
    return (
      image instanceof HTMLImageElement &&
      image.complete &&
      image.naturalWidth > 0
    );
  });
  await page.screenshot({
    path: "D:/Yonas Tsadik/buruktowingautoservices/qa-brand-mobile.png",
    fullPage: true,
  });

  await page.setViewportSize({ width: 1280, height: 900 });
  const desktop = await page.evaluate(() => ({
    viewport: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    headerWidth: document.querySelector("header")?.getBoundingClientRect()
      .width,
    logoWidth: document.querySelector("header img")?.getBoundingClientRect()
      .width,
    phoneWidth: document
      .querySelector('header a[href^="tel:"]')
      ?.getBoundingClientRect().width,
  }));

  return { mobile, desktop };
}
