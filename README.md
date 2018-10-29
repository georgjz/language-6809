
**NOTE**: I've started to rewrite this package to use tree-sitter parsers instead of textMate grammars. Starting with version 0.7.0, the old textMate-style grammars will no longer be updated. I'll rewrite them by and by.

I'll keep the old grammars active until I finish the tree-sitter equivalent.

# 6809/6309 Assembly Language Support in Atom
Adds language support for Motorola 6809 and Hitachi 6309 assembly to the [Atom Editor](https://atom.io). This is useful for writing code for the Vectrex.

This package contains the mnemonics for the
[Motorola 6809](https://en.wikipedia.org/wiki/Motorola_6809) and
[Hitachi 6309](https://en.wikipedia.org/wiki/Hitachi_6309)
microprocessors. It supports multiple toolchains listed below.

Additionally, starting with version 0.7.3, I'll start adding support for various [Motorola 68000](https://en.wikipedia.org/wiki/Motorola_68000) assemblers and toolchain.

## Supported toolchains, assemblers, linkers, etc.
This package includes syntax highlighting for assembler directives, labels, etc. for the following toolchains:

Toolchain | Link | 6809 | 6309 | Platforms
----------|------|------|------|-----------
AS09 | http://www.kingswood-consulting.co.uk/assemblers/index.html | :heavy_check_mark: | :heavy_check_mark: | Linux, Windows
asm6809 | http://www.6809.org.uk/asm6809/doc/asm6809.shtml | :heavy_check_mark: | :heavy_check_mark: | Linux, Windows
Crossware | http://www.crossware.com/smanuals/a6809/index.html | :heavy_check_mark: | :heavy_multiplication_x: | Windows
EDTASM+ | http://www.cocopedia.com/wiki/index.php/EDTASM%2B | :heavy_check_mark: | :heavy_multiplication_x: | TRS-80/COCO
lwtools | http://lwtools.projects.l-w.ca | :heavy_check_mark: | :heavy_check_mark: | Linux, Windows, OS X

### Support for 68000 assemblers
Toolchain | Link | 68000 | Platforms
----------|------|-------|-----------
vasmmot | http://sun.hasenbraten.de/vasm/ | :heavy_check_mark: | Linux, Windows, OS X

**Note**: *This problem will be solved once the switch to tree-sitter parsers is done.*
Some of the older assemblers demand a certain source code format:

`LABEL OPCODE OPERAND COMMENT`

You will need to switch your tabs settings to "hard" for this to work correctly.

* To create a line with only a label, append at least three whitespaces characters to it
* for a line with only a opcode and operand, put at least one whitespace character before the opcode, then use *only one* whitespace character to separate the opcode from the operand field
    * you cannot use whitespace characters within the operand field
* everything after that is considered a comment

It takes a bit getting used too, but that's how it worked on old assembler editors!

I'm happy to add more assemblers as requested. Please use Github's issue function to report bugs or improvement ideas. Contributions are greatly appreciated!
