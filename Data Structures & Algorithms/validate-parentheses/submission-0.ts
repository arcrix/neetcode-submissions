class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2) return false;

        const stack: string[] = [];
        const match: Record<string, string> = {
            ')': '(',
            ']': '[',
            '}': '{',
        };
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
                stack.push(s[i]);
            } else {
                if (stack.pop() !== match[s[i]]) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
