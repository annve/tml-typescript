/* elk bestand dat een top-level import of top-level export statement bevat, 
   is een module */
/* wat gedeclareerd is in een module (file) , is enkel gekend in de module (file), 
   tenzij het geëxporteerd wordt */

export interface StringValidator {
    isAcceptable(s: string): boolean;
}