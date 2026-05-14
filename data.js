const recipes = [
    {
        id: 1, // '=' yerine ':' geldi
        name: "Antik Anadolu Çorbası",
        era: "Antik Çağ",
        category: "Çorbalar",
        image: "assets/soup.jpg", // Yazım hatası .jgb -> .jpg düzeltildi
        basePortion: 2,
        ingredients: [
            { name: "Kırmızı Mercimek", amount: 1, unit: "Su Bardağı" },
            { name: "Su", amount: 5, unit: "Su Bardağı" }
        ],
        history: "Bu tarif, Hitit tabletlerinde bulunan en eski yemek kayıtlarından biridir...",
        timeline: [
            { year: "M.Ö. 1600", event: "Hitit mutfağı ilk kez kayıt altına alındı." },
            { year: "1923", event: "Cumhuriyet sonrasına modern mutfaklarda popülerleşti." }
        ]
    }
];

export default recipes; // Dışa aktarma eklendi

