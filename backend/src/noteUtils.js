const ALLOWED_COLORS = ["yellow", "blue", "green", "pink"];

function isAllowedColor(color) {
  return ALLOWED_COLORS.includes(color);
}

function validateNote(title, content, color) {
  const errors = [];

  if (!title || title.trim() === "") {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length < 10) {
    errors.push("Content must be at least 10 characters long.");
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