const MIN_CONTENT_LENGTH = 10;
const ALLOWED_COLORS = ["yellow", "blue", "green", "pink"];

function isBlank(value) {
  return !value || value.trim() === "";
}

function isAllowedColor(color) {
  return ALLOWED_COLORS.includes(color);
}

function validateNote(title, content, color) {
  const errors = [];

  if (isBlank(title)) {
    errors.push("Title is required.");
  }

  if (isBlank(content) || content.trim().length < MIN_CONTENT_LENGTH) {
    errors.push(`Content must be at least ${MIN_CONTENT_LENGTH} characters long.`);
  }

  if (!isAllowedColor(color)) {
    errors.push("Color must be yellow, blue, green, or pink.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

module.exports = {
  validateNote,
  isAllowedColor
};