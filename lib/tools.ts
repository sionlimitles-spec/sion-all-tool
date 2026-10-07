export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
}

export const TOOLS: Tool[] = [
  { slug: "word-counter", name: "Word Counter", description: "Hitung kata, karakter, dan kalimat secara instan.", category: "teks" },
  { slug: "case-converter", name: "Case Converter", description: "Ubah teks ke UPPER, lower, Title, atau Sentence case.", category: "teks" },
  { slug: "lorem-ipsum", name: "Lorem Ipsum Generator", description: "Buat teks placeholder Lorem Ipsum.", category: "teks" },
  { slug: "markdown-preview", name: "Markdown Preview", description: "Lihat preview markdown real-time.", category: "teks" },
  { slug: "text-diff", name: "Text Diff Checker", description: "Bandingkan dua teks dan lihat perbedaannya.", category: "teks" },
  { slug: "json-formatter", name: "JSON Formatter", description: "Beautify dan validate JSON.", category: "developer" },
  { slug: "base64", name: "Base64 Encoder", description: "Encode dan decode Base64.", category: "developer" },
  { slug: "url-encoder", name: "URL Encoder", description: "Encode dan decode URL.", category: "developer" },
  { slug: "regex-tester", name: "Regex Tester", description: "Test regular expression dengan highlight.", category: "developer" },
  { slug: "hash-generator", name: "Hash Generator", description: "Generate MD5, SHA-1, SHA-256.", category: "developer" },
  { slug: "uuid-generator", name: "UUID Generator", description: "Generate UUID v4.", category: "developer" },
  { slug: "color-picker", name: "Color Picker", description: "Pilih warna dan konversi HEX, RGB, HSL.", category: "developer" },
  { slug: "password-generator", name: "Password Generator", description: "Buat password kuat.", category: "developer" },
  { slug: "unit-converter", name: "Unit Converter", description: "Konversi panjang, berat, suhu, volume.", category: "konversi" },
  { slug: "csv-to-json", name: "CSV to JSON", description: "Konversi CSV ke JSON.", category: "konversi" },
  { slug: "timestamp", name: "Timestamp Converter", description: "Konversi Unix timestamp.", category: "konversi" },
  { slug: "number-base", name: "Number Base Converter", description: "Konversi biner, oktal, desimal, hex.", category: "konversi" },
  { slug: "image-compressor", name: "Image Compressor", description: "Kompres gambar tanpa upload.", category: "gambar" },
  { slug: "image-resizer", name: "Image Resizer", description: "Ubah ukuran gambar.", category: "gambar" },
  { slug: "image-to-base64", name: "Image to Base64", description: "Konversi gambar ke Base64.", category: "gambar" },
  { slug: "age-calculator", name: "Age Calculator", description: "Hitung umur dari tanggal lahir.", category: "kalkulator" },
  { slug: "percentage", name: "Percentage Calculator", description: "Hitung persentase dan diskon.", category: "kalkulator" },
  { slug: "bmi", name: "BMI Calculator", description: "Hitung Body Mass Index.", category: "kalkulator" },
  { slug: "loan", name: "Loan Calculator", description: "Hitung cicilan bulanan.", category: "kalkulator" },
  { slug: "qr-code", name: "QR Code Generator", description: "Generate QR code dari teks atau URL.", category: "web" },
];

export const CATEGORIES = ["teks", "developer", "konversi", "gambar", "kalkulator", "web"];

export function getToolBySlug(slug: string) {
  return TOOLS.find((t) => t.slug === slug);
    }
