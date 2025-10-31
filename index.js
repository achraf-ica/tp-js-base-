const produits = [
  { nom: "Huile d'olive", prix: 70, expireLe: "2026-05-10" },
  { nom: "Miel de Taznakht", prix: 120, expireLe: "2027-03-20" },
  { nom: "Dattes de Erfoud", prix: 90, expireLe: "2025-11-15" },
];

// 2. Filtrer les produits non expirés
const aujourdHui = new Date();
const produitsValides = produits.filter(p => new Date(p.expireLe) > aujourdHui);

// 3. Calculer la somme totale
const total = produitsValides.reduce((somme, p) => somme + p.prix, 0);

// 4. Afficher le résultat formaté
console.log("Produits valides :");
produitsValides.forEach(p => console.log(`- ${p.nom} (${p.prix} MAD)`));
console.log(`Total : ${total} MAD`);
