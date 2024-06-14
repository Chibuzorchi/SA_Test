class CommonMethods {
    GetCodeFromHTML(doc, element, textForQuery) {
        // Find all elements matching the selector
        const docArr = [...doc.querySelectorAll(element)];
        // Filter to find the one containing the textForQuery
        const textCode = docArr
            .map(el => el.innerHTML)
            .filter(txt => txt.includes(textForQuery));
        // Extract digits from the text
        const code = textCode.join(" ").match(/\d+/)[0];
        return code;
    }
}

export default new CommonMethods();
