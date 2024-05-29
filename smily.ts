/**
 *
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */
export function countSmilyFace(texts: string[]): number {
  const smileyPattern = /[:;][-~]?[)D]/;
  return texts.filter((face) => smileyPattern.test(face)).length;
}
