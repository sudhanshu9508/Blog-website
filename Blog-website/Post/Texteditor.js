const textArea = document.getElementById("textArea");
const fontSizeSelector = document.getElementById("fontSize");
const fontSelect = document.getElementById("fontSelect");
const bulletedListButton = document.getElementById("bulletedList");
const numberedListButton = document.getElementById("numberedList");

// Ensure text area is focused on the first interaction
const focusTextArea = () => {
    textArea.focus();
};

// Toggle active state
const toggleActiveState = (element) => {
    element.classList.toggle("active");
};

// Apply font family
fontSelect.addEventListener("change", () => {
    textArea.focus();
    document.execCommand("fontName", false, fontSelect.value);
});

// Apply font size
fontSizeSelector.addEventListener("change", () => {
    textArea.focus();
    document.execCommand("fontSize", false, fontSizeSelector.value);
});

// Apply text formatting (bold, italic, underline, strike-through)
const formattingButtons = ["bold", "italic", "underline", "strikeThrough"];
formattingButtons.forEach((format) => {
    document.getElementById(format).addEventListener("click", (e) => {
        textArea.focus();
        document.execCommand(format);
        toggleActiveState(e.currentTarget);
    });
});

// Insert Link
document.getElementById("insertLink").addEventListener("click", () => {
    textArea.focus();
    const url = prompt("Enter the URL for the link:");
    if (url) document.execCommand("createLink", false, url);
});

// Insert Image
document.getElementById("insertImage").addEventListener("click", () => {
    textArea.focus();
    const url = prompt("Enter the URL for the image:");
    if (url) document.execCommand("insertImage", false, url);
});

// Apply bulleted list
bulletedListButton.addEventListener("click", (e) => {
    textArea.focus();
    document.execCommand("insertUnorderedList");
    toggleActiveState(e.currentTarget);
    // Ensure numberedListButton is not active
    numberedListButton.classList.remove("active");
});

// Apply numbered list
numberedListButton.addEventListener("click", (e) => {
    textArea.focus();
    document.execCommand("insertOrderedList");
    toggleActiveState(e.currentTarget);
    // Ensure bulletedListButton is not active
    bulletedListButton.classList.remove("active");
});

// Focus the text area when page loads
focusTextArea();