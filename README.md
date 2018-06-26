# 6809/6309 Assembly Language Support in Atom

Adds language support for Motorola 6809 assembly to the [Atom Editor](https://atom.io). This is useful for writing code for the Vectrex.

This package contains the mnemonics for the
[Motorola 6809](https://en.wikipedia.org/wiki/Motorola_6809) and
[Hitachi 6309](https://en.wikipedia.org/wiki/Hitachi_6309)
microprocessors. It supports multiple toolchains listed below.

## Supported toolchains, assemblers, linkers, etc.

This package includes syntax highlighting for assembler directives, labels, etc. for the following toolchains:

Toolchain | Link | 6809 | 6309 | Platforms
----------|------|------|------|-----------
AS09 | http://www.kingswood-consulting.co.uk/assemblers/index.html | :heavy_check_mark: | :heavy_check_mark: | Linux, Windows
Crossware | http://www.crossware.com/smanuals/a6809/index.html | :heavy_check_mark: | :heavy_multiplication_x: | Windows
lwtools | http://lwtools.projects.l-w.ca | :heavy_check_mark: | :heavy_check_mark: | Linux, Mac, Windows

I'm happy to add more assemblers as requested. Please use Github's issue function to report bugs or improvement ideas. Contributions are greatly appreciated!
