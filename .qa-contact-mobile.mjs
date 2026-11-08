export default async function run(page) {
  await page.setViewportSize({ width: 320, height: 844 });
  await page.goto("http://localhost:3022/contact", {
    waitUntil: "networkidle",
  });
  const layout = await page.evaluate(() => ({
    viewport: innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    emailLink: document
      .querySelector('a[href^="mailto:"]')
      ?.getBoundingClientRect()
      .toJSON(),
  }));
  await page.screenshot({
    path: "D:/Yonas Tsadik/buruktowingautoservices/qa-contact-320.png",
    fullPage: true,
  });
  return layout;
}
