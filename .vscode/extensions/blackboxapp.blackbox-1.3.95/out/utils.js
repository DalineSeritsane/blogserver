const vscode = require("vscode");

function calculateEndPosition(startPosition, text) {
  const lines = text.split("\n");
  const lineCount = lines.length - 1;

  if (lineCount === 0) {
    // Single line, just move the character position forward
    return startPosition.translate(0, text.length);
  } else {
    // Multiple lines, move to the end of the last line
    const lastLineLength = lines[lineCount].length;
    return new vscode.Position(startPosition.line + lineCount, lastLineLength);
  }
}

module.exports = {
  calculateEndPosition,
};
