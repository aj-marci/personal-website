
function Footer() {
    return (
        <>
        <div className="mb-4 font-gotham text-charcoal
                        lg:text-sm md:text-sm text-xs lg:mt-24 md:mt-20 mt-8 font-extrabold
                        border-l-2 border-lightGreen pl-8 drop-shadow-large">
            <p>Designed in <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer"
                className="text-darkGreen hover:text-lightGreen underline decoration-dotted">Figma
            </a>, coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"
                className="text-darkGreen hover:text-lightGreen underline decoration-dotted">VS Code
            </a>, version control with Git and <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="text-darkGreen hover:text-lightGreen underline decoration-dotted">GitHub
            </a>.
            </p>
        </div>
        </>
    );
}

export default Footer;