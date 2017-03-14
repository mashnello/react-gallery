let data = {
    "6987155412345": {
        "src": "/react-gallery/src/images/luggage.jpg",
        "name": "Luggage",
        "tooltip": ""
    },
    "6987155412346": {
        "src": "/react-gallery/src/images/sofa.jpg",
        "name": "Sofa",
        "tooltip": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    "6987155412347": {
        "src": "/react-gallery/src/images/kermit.jpg",
        "name": "Kermit",
        "tooltip": "Lorem ipsum dolor sit."
    },
    "6987155412348": {
        "src": "/react-gallery/src/images/yawn.jpg",
        "name": "Yawning",
        "tooltip": "Lorem ipsum dolor sit."
    },
    "6987155412349": {
        "src": "/react-gallery/src/images/teddy.jpg",
        "name": "Teddy",
        "tooltip": "Lorem ipsum dolor sit."
    },
    "6987155412356": {
        "src": "/react-gallery/src/images/alone.jpg",
        "name": "Alone",
        "tooltip": "Lorem ipsum dolor sit."
    },
    "6987155412357": {
        "src": "/react-gallery/src/images/antique.jpg",
        "name": "Antique",
        "tooltip": "Lorem ipsum."
    },
    "6987155412358": {
        "src": "/react-gallery/src/images/clown.jpg",
        "name": "Clown",
        "tooltip": "Lorem ipsum dolor sit amet."
    },
    "9871554123459": {
        "src": "/react-gallery/src/images/fur.jpg",
        "name": "Fur",
        "tooltip": "Lorem ipsum dolor sit."
    },
    "9871554123460": {
        "src": "/react-gallery/src/images/sad.jpg",
        "name": "Sad",
        "tooltip": "Lorem ipsum dolor sit."
    },
    "9871554123461": {
        "src": "/react-gallery/src/images/shopping.jpg",
        "name": "Shopping",
        "tooltip": "Lorem ipsum dolor sit."
    },
    "9871554123462": {
        "src": "/react-gallery/src/images/sweet.jpg",
        "name": "Sweet",
        "tooltip": "Lorem ipsum dolor sit."
    }
};

export const setData = (newData) => {
    data = newData;
}

export const fetchImages = () => {
    return data;
}