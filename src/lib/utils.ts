import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToMask(format: string): string {
  return format.replace(/[a-zA-Z]/g, "_");
}

export const formatFileName = (name: string) => {
  if (!name) return "Tidak ada nama file";
  const tempName = name?.split("/");
  const newName = tempName[tempName.length - 1];
  return newName;
};

export function formatErrorMessages(
  errorData: Record<string, string[] | string>
): string {
  return Object.entries(errorData)
    .map(([field, messages]) => {
      const readableField = field
        .replace(/([A-Z])/g, " $1") // camelCase to space
        .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter

      const text =
        Array.isArray(messages) && messages.length > 0
          ? messages.map((msg) => `• ${readableField}: ${msg}`).join("\n")
          : `• ${readableField}: ${messages}`;

      return text;
    })
    .join("\n");
}

export function formatCurrency(
  amount: number,
  options: CurrencyFormatOptions = {}
): string {
  const {
    locale = "id-ID",
    currency = "IDR",
    minimumFractionDigits = 0,
    compact = false,
  } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    notation: compact ? "compact" : "standard", // 'compact' -> 1jt, 1M
  }).format(amount);
}

export function parsePrice(value: string): string {
  return value.replace(/\D/g, ""); // buang titik/koma, hanya ambil digit
}

/**
 * Membersihkan tag HTML dari string
 */
export function cleanHTML(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Membatasi jumlah kata dari string
 */
export function limitWords(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text.trim();
  return words.slice(0, maxWords).join(" ") + "...";
}

export function shareLink(
  url: string,
  title: string = "Cek ini!",
  text: string = "Lihat tautan ini."
) {
  if (navigator.share) {
    navigator
      .share({
        title,
        text,
        url,
      })
      .then(() => console.log("Berhasil dibagikan"))
      .catch((err) => console.error("Gagal membagikan:", err));
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(url).then(() => {
      alert("Link disalin ke clipboard!");
    });
  }
}
