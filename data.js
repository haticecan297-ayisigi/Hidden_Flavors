const  recipes = [
    {
        id = 1,
        name: "Antik Anadolu Çorbası",
        era: "Antik Çağ",  //Filtreleme için
        category: "Çorbalar",
        image: "assets/soup.jgb",
        basePortion: 2,  //Porsiyon hesaplayıcı için temel değer
        ingredients:[
            {name: "Kırmızı Mercimek", amount: 1, unit : "Su Bardağı"},
            {name: "Su", amount: 5, unit: "Su Bardağı"}
        ],
        history: "Bu tarif, Hitit tabletlerinde bulunan en eski yemek kayıtlarından biridir...",
        //Zaman tüneli özelliği için zorunlu 
        timeline:[
            {year: "M.Ö. 1600", event: "Hitit mutfağı ilk kez kayıt altına alındı."},
            {year: "1923", event: "Cumhuriyet sonrasına modern mutfaklarda popülerleşti."}
        ]
    },
    //Diğer tarifleri de aynı mantıkta ekleyeceğiz
];

