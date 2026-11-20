/**
 * Central download configuration. Leave a value empty ("") until the real one
 * exists: the UI shows "Coming soon" instead of a fake link.
 */
export const siteConfig = {
  domain: "aiki.lol",
  iosPwaUrl: "",        // e.g. "https://app.aiki.lol"
  androidApkUrl: "",    // e.g. "https://aiki.lol/downloads/aiki.apk"
  appVersion: "",       // e.g. "1.0.0"
  apkSize: "",          // e.g. "28 MB"
  supportEmail: "",     // e.g. "support@aiki.lol"
  privacyPolicyUrl: "", // e.g. "https://aiki.lol/privacy"
  termsUrl: "",
} as const;
