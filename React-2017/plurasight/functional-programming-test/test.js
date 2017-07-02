describe("isPalindrome", () => {
    it("returns true if the string is a palindrome", () => {
        expect(isPalindrome("abba")).toEqual(true);
    });
});


const isPalindrome = (str) => true;


describe("isPalindrome", () => {
    it("returns true if the string is a palindrome", () => {
        expect(isPalindrome("abba")).toEqual(true);
    });
    it("returns false if the string isn't a palindrome", () => {
        expect(isPalindrome("Bubba")).toEqual(false);
    });
});


const isPalindrome = (str) => {
    return str
        .split("")
        .reverse()
        .join("") === str;
};


describe("isPalindrome", () => {
    it("returns true if the string is a palindrome", () => {
        expect(isPalindrome("abba")).toEqual(true);
    });
    it("returns false if the string isn't a palindrome", () => {
        expect(isPalindrome("Bubba")).toEqual(false);
    });
    it("returns true if a number is a palindrome", () => {
        expect(isPalindrome(1001)).toEqual(true);
    });
});



const isPalindrome = (str) => {
    return str
        .toString()
        .split("")
        .reverse()
        .join("") === str.toString();
};






