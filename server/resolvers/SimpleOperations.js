/**
 * Simple Operations
 * 
 */

class SimpleOperations {
    basicOperators(question) {
        try {
            return eval(question)
        } catch {
            return false;
        }
    }

    contextedOperators() {
        // ..
    }
}

module.exports = SimpleOperations
