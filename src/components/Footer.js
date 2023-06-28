
function Footer() {
    return (
        <>
        <div className="rounded bg-background mb-1
                        font-gotham text-darkcream
                        lg:text-sm md:text-sm text-xs
                        lg:mt-24 md:mt-20 mt-8">
            <p>Designed in
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer"
                className="text-turqoise hover:text-orange font-semibold"> Figma
            </a>, coded in
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"
                className="text-turqoise hover:text-orange font-semibold"> VS Code
            </a>, version control with Git and
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="text-turqoise hover:text-orange font-semibold"> GitHub
            </a>.
            </p>
        </div>
        </>
    );
}

export default Footer;