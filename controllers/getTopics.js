const getTopics = (req, res, next) => {
    //mock Category data
    const dataList = [
        {cate_id: "13", cate_title: "Anime and Manga", cate_img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1429f97b-f6b5-4c41-a918-1e1784d7520e/deexckz-c08eb847-2cb9-4689-8b9a-aef050fc6d73.png/v1/fill/w_280,h_350,q_70,strp/cm_noctemius_autumn_by_yoshimissu_deexckz-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDAwIiwicGF0aCI6IlwvZlwvMTQyOWY5N2ItZjZiNS00YzQxLWE5MTgtMWUxNzg0ZDc1MjBlXC9kZWV4Y2t6LWMwOGViODQ3LTJjYjktNDY4OS04YjlhLWFlZjA1MGZjNmQ3My5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lLPI_gdB2cIy68kR-Ti3jaYQcgC1brW_VMAk6zjHz60"},
        {cate_id: "14", cate_title: "Comics", cate_img: "https://cdn.pixabay.com/photo/2018/03/18/11/55/cartoon-3236539_960_720.jpg",},
        {cate_id: "15", cate_title: "Fan Art", cate_img: "https://cdn.pixabay.com/photo/2021/02/06/00/05/moon-5986386_960_720.png",},
        {cate_id: "16", cate_title: "Game Art", cate_img: "https://cdn.pixabay.com/photo/2020/08/11/12/11/character-5479766_960_720.jpg"},
        {cate_id: "17", cate_title: "Fantasy", cate_img: "https://cdn.pixabay.com/photo/2019/09/07/06/50/fantasy-4458063_960_720.jpg"},
        {cate_id: "18", cate_title: "Horror", cate_img: "https://cdn.pixabay.com/photo/2015/03/02/15/53/grim-reaper-656083_960_720.jpg"},
        {cate_id: "19", cate_title: "Seience Fiction", cate_img: "https://cdn.pixabay.com/photo/2019/12/31/22/38/fantasy-4732736_960_720.jpg"},
        {cate_id: "20", cate_title: "Animals", cate_img: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"},
        {cate_id: "21", cate_title: "Emotion", cate_img: "https://cdn.pixabay.com/photo/2021/03/03/01/45/potatoes-6064214_960_720.jpg"},
        {cate_id: "22", cate_title: "Nature", cate_img: "https://cdn.pixabay.com/photo/2021/02/26/19/31/snowdrop-6052942_960_720.jpg"},
    ];
    res
        .send(dataList)
        .status(200);
    next();
};

module.exports = getTopics;