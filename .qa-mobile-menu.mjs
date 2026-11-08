export default async function run(page) {
  const checks = [];
  for (const route of ["/", "/services/new-used-tires"]) {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto(`http://localhost:3000${route}`, {
      waitUntil: "domcontentloaded",
    });
    const menuButton = page.getByRole("button", {
      name: "Open navigation menu",
    });
    const present = await menuButton.count();
    if (!present) {
      checks.push({ route, buttonPresent: false });
      continue;
    }
    await menuButton.click();
    const menu = page.getByRole("navigation", { name: "Mobile navigation" });
    const visible = await menu.isVisible();
    const labels = await menu.getByRole("link").allTextContents();
    const contactLink = menu.getByRole("link", { name: "Contact" });
    await contactLink.click();
    await page.waitForURL("**/contact");
    checks.push({
      route,
      buttonPresent: true,
      menuVisible: visible,
      menuLabels: labels.map((label) => label.trim()),
      navigatedToContact: new URL(page.url()).pathname === "/contact",
    });
  }
  return checks;
}
