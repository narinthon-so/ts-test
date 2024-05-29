/**
 *
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
export function manipulate(text: string): string[] {
  const results: Set<string> = new Set();

  function permute(prefix: string, remaining: string) {
    console.log(`prefix = ${prefix}, remaining = ${remaining}`);
    if (remaining.length === 0) {
      results.add(prefix);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        permute(
          prefix + remaining[i],
          remaining.slice(0, i) + remaining.slice(i + 1)
        );
      }
    }
  }

  permute("", text);

  return Array.from(results);
}
