// Fungsi untuk mengonversi objek ke FormData
export const convertToFormData = <D extends object>(data: D): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === null || typeof value === "undefined") return;

    // Jika value berupa array
    if (Array.isArray(value)) {
      const validItems = value.filter((v) => v !== null && v !== undefined);

      if (validItems.length === 1) {
        const item = validItems[0];
        if (item instanceof File || item instanceof Blob) {
          formData.append(key, item);
        } else if (typeof item === "object") {
          formData.append(key, JSON.stringify(item));
        } else {
          formData.append(key, String(item));
        }
      } else {
        validItems.forEach((item) => {
          if (item instanceof File || item instanceof Blob) {
            formData.append(key, item);
          } else if (typeof item === "object") {
            formData.append(key, JSON.stringify(item));
          } else {
            formData.append(key, String(item));
          }
        });
      }
    } else if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    } else if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, String(value));
    }
  });

  return formData;
};
