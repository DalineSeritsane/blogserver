/**
 * Analyzes the last line of a given code string and determines whether it's the beginning of a class, function, or endpoint.
 * 
 * @param {string} code - The code string to analyze.
 * @returns {string} - 'class', 'function', 'endpoint', or 'unknown' depending on the analysis result.
 */
function analyzeLastLine(code) {
    // Split the code into lines
    const lines = code.trim().split('\n');

    // Get the last line
    const lastLine = lines[lines.length - 1].trim();

    // Regular expressions for class, function, and endpoint declarations
    const classRegex = /(class|interface|enum|struct)\s+\w+/i;
    const functionRegex = /(function|def|func)\s+\w+/i;
    const endpointRegex = /(get|post|put|delete|patch|options|head|connect)\s+\/\w+/i;

    // Check for class declaration
    if (classRegex.test(lastLine)) {
        return 'class';
    }

    // Check for function declaration
    if (functionRegex.test(lastLine)) {
        return 'function';
    }

    // Check for endpoint declaration
    if (endpointRegex.test(lastLine)) {
        return 'endpoint';
    }

    // If none of the above, return 'unknown'
    return 'unknown';
}

module.exports = {
    analyzeLastLine
}

