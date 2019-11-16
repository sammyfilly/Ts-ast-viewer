export default {
    fileName: `/lib.es2017.string.d.ts`,
    // File text is copyright Microsoft Corporation and is distributed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
    text: `/// <reference no-default-lib="true"/>\ninterface String{/**\n * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\n * The padding is applied from the start (left) of the current string.\n *\n * @param maxLength The length of the resulting string once the current string has been padded.\n *        If this parameter is smaller than the current string's length, the current string will be returned as it is.\n *\n * @param fillString The string to pad the current string with.\n *        If this string is too long, it will be truncated and the left-most part will be applied.\n *        The default value for this parameter is " " (U+0020).\n */padStart(maxLength:number ,fillString?:string ):string ;/**\n * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\n * The padding is applied from the end (right) of the current string.\n *\n * @param maxLength The length of the resulting string once the current string has been padded.\n *        If this parameter is smaller than the current string's length, the current string will be returned as it is.\n *\n * @param fillString The string to pad the current string with.\n *        If this string is too long, it will be truncated and the left-most part will be applied.\n *        The default value for this parameter is " " (U+0020).\n */padEnd(maxLength:number ,fillString?:string ):string ;}`
};