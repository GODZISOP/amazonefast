export function parseClientInfo(fullName: string) {
  if (!fullName) {
    return { code: '', name: 'Client', avatarText: 'C' };
  }

  const str = fullName.trim();

  // 1. [CODE] Name e.g. [A] John, [01] John, [VIP] John, [AMZ-C01] John
  const bracketMatch = str.match(/^\[(.*?)\]\s*(.*)/);
  if (bracketMatch) {
    const code = bracketMatch[1].trim();
    const name = bracketMatch[2].trim() || 'Client';
    const avatar = code.length <= 4 ? code : (code.slice(0, 3) || 'C');
    return { code, name, avatarText: avatar.toUpperCase() };
  }

  // 2. AMZ-C01 John or AMZ-01 John
  const amzMatch = str.match(/^(AMZ-[A-Z0-9_\-#]+)\s*(.*)/i);
  if (amzMatch) {
    const code = amzMatch[1].trim();
    const name = amzMatch[2].trim() || 'Client';
    const numMatch = code.match(/AMZ-C?0*(\d+)/i);
    const avatar = numMatch ? `C${numMatch[1]}` : code.slice(-2);
    return { code, name, avatarText: avatar.toUpperCase() };
  }

  // 3. CODE - Name e.g. "01 - John" or "A - John"
  const dashMatch = str.match(/^([A-Za-z0-9_\-#]+)\s*[-:]\s*(.*)/);
  if (dashMatch) {
    const code = dashMatch[1].trim();
    const name = dashMatch[2].trim() || 'Client';
    return { code, name, avatarText: code.slice(0, 3).toUpperCase() };
  }

  // 4. Token match e.g. "01 John" or "A John" or "C1 John"
  const tokenMatch = str.match(/^([A-Za-z0-9_\-#]{1,6})\s+([A-Za-z].*)/);
  if (tokenMatch && (/^\d+$/.test(tokenMatch[1]) || /^[A-Za-z]\d*$/i.test(tokenMatch[1]))) {
    const code = tokenMatch[1].trim();
    const name = tokenMatch[2].trim() || 'Client';
    return { code, name, avatarText: code.toUpperCase() };
  }

  return {
    code: '',
    name: str,
    avatarText: str.slice(0, 2).toUpperCase() || 'C'
  };
}
