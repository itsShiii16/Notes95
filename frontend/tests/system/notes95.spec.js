import { test, expect } from "@playwright/test";

// User Story 1: Create
// As a user, I want to create a new sticky note on the desktop,
// so that I can quickly jot down a thought.
test.describe("User Story 1: Create a sticky note", () => {
  test("should create a new sticky note and display it on the desktop", async ({ page }) => {
    await page.goto("/");

    // Click the "New Note" button to open the creation form
    await page.click('[data-testid="new-note-button"]');

    // Fill out the note form
    await page.fill('[data-testid="note-title-input"]', "Meeting Reminder");
    await page.fill('[data-testid="note-content-input"]', "Don't forget the CMSC 129 demo tomorrow.");
    await page.click('[data-testid="note-color-yellow"]');

    // Submit the form
    await page.click('[data-testid="note-submit-button"]');

    // Verify the new note appears on the desktop
    await expect(page.locator('[data-testid="note-card"]')).toHaveCount(1);
    await expect(page.locator('[data-testid="note-card"]')).toContainText("Meeting Reminder");
  });
});

// User Story 2: Update
// As a user, I want to edit the title, content, and color of an existing note,
// so that I can keep my notes up to date.
test.describe("User Story 2: Update a sticky note", () => {
  test("should edit an existing sticky note's title and color", async ({ page }) => {
    await page.goto("/");

    // First create a note to edit
    await page.click('[data-testid="new-note-button"]');
    await page.fill('[data-testid="note-title-input"]', "Old Title");
    await page.fill('[data-testid="note-content-input"]', "This content will be updated soon.");
    await page.click('[data-testid="note-color-blue"]');
    await page.click('[data-testid="note-submit-button"]');

    // Click on the existing note to edit it
    await page.click('[data-testid="note-card"]');

    // Change the title and color
    await page.fill('[data-testid="note-title-input"]', "Updated Title");
    await page.click('[data-testid="note-color-green"]');
    await page.click('[data-testid="note-submit-button"]');

    // Verify the note displays the updated information
    await expect(page.locator('[data-testid="note-card"]')).toContainText("Updated Title");
  });
});

// User Story 3: Delete
// As a user, I want to delete a note I no longer need,
// so that my desktop stays uncluttered.
test.describe("User Story 3: Delete a sticky note", () => {
  test("should delete an existing sticky note and remove it from the desktop", async ({ page }) => {
    await page.goto("/");

    // First create a note to delete
    await page.click('[data-testid="new-note-button"]');
    await page.fill('[data-testid="note-title-input"]', "Temporary Note");
    await page.fill('[data-testid="note-content-input"]', "This note will be deleted shortly.");
    await page.click('[data-testid="note-color-pink"]');
    await page.click('[data-testid="note-submit-button"]');

    // Verify the note exists before deletion
    await expect(page.locator('[data-testid="note-card"]')).toHaveCount(1);

    // Click the delete button on the note
    await page.click('[data-testid="note-delete-button"]');

    // Confirm deletion if there's a confirmation dialog
    // (test handles both with and without confirmation)
    const confirmDialog = page.locator('[data-testid="confirm-delete-button"]');
    if (await confirmDialog.isVisible()) {
      await confirmDialog.click();
    }

    // Verify the note is no longer displayed
    await expect(page.locator('[data-testid="note-card"]')).toHaveCount(0);
  });
});
