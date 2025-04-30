const API_BASE = import.meta.env.VITE_API_URL;

export const fetchServices = async () => {
  const res = await fetch(`${API_BASE}/services`);
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
};
