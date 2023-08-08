export function cutString(inputString: string, maxLength: number): string {
  if (inputString.length > maxLength) {
    return inputString.substring(0, maxLength) + "...";
  } else {
    return inputString;
  }
}
