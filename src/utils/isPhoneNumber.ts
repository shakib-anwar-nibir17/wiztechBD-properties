export function isPhoneNumber(value: string): boolean {
  const phoneStartRegex = /^(\+?880|0)?1[3-9]/;
  const digitsOnly = value.replaceAll(/\s/g, "");
  return (
    phoneStartRegex.test(digitsOnly) ||
    (/^\d+$/.test(digitsOnly) && digitsOnly.length > 3)
  );
}
