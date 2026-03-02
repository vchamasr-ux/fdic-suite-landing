import asyncio
from playwright.async_api import async_playwright
import sys

async def run():
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page(viewport={"width": 1920, "height": 947})
            print("Navigating to https://fintechprospector.vercel.app...")
            await page.goto("https://fintechprospector.vercel.app", wait_until="networkidle")
            print("Waiting for page animations...")
            await page.wait_for_timeout(3000)
            print("Taking screenshot...")
            await page.screenshot(path="public/screenshots/prospector.png")
            await browser.close()
            print("Success! Saved to public/screenshots/prospector.png")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    asyncio.run(run())
