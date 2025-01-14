// useMockData.js
export default function useMockData() {
    const loading = null;
    const error = null;
    const apiData = [ { "_id": "642dd56a163feb4a0795985a", "name": "Flagship Ginger Beer", "description": "Our iconic, canonic ginger brew", "images": { "full_size": "https://i.postimg.cc/T2mjjGqn/Flagship-Ginger-Beer.jpg", "thumbnail": "https://i.postimg.cc/9zmqV6kf/Flagship-Ginger-Beer.jpg" }, "price": { "$numberDecimal": "3.75" }, "quantity_available": 45000 }, { "_id": "642dd588163feb4a0795985b", "name": "Ginger Beer", "description": "Our signature homemade ginger beer is made with fresh ginger, lemon juice, and honey. It has a spicy kick and is perfect for any occasion.", "images": { "full_size": "https://i.postimg.cc/K8cnyTX5/Ginger-Beer.jpg", "thumbnail": "https://i.postimg.cc/WhKDGh1D/Ginger-Beer.jpg" }, "price": { "$numberDecimal": "3.50" }, "quantity_available": 35000 }, { "_id": "642dd594163feb4a0795985c", "name": "Homemade Ginger Beer Recipe", "description": "Learn how to make your own ginger beer at home with this easy recipe! All you need is fresh ginger, sugar, lemon juice, and water.", "images": { "full_size": "https://i.postimg.cc/7LFGbGRd/Homemade-Ginger-Beer-Recipe.jpg", "thumbnail": "https://i.postimg.cc/sBJDNXs4/Homemade-Ginger-Beer-Recipe.jpg" }, "price": { "$numberDecimal": "0.01" }, "quantity_available": 1 }, { "_id": "642dd5c3163feb4a0795985e", "name": "Ginger Beer Concentrate", "description": "Our ginger beer concentrate is perfect for making homemade ginger beer or adding a spicy kick to your favorite cocktails. Made with real ginger and natural ingredients.", "images": { "full_size": "https://i.postimg.cc/gJLVTP9F/Ginger-Beer-Concentrate.jpg", "thumbnail": "https://i.postimg.cc/Q9sKFwx0/Ginger-Beer-Concentrate.jpg" }, "price": { "$numberDecimal": "9.99" }, "quantity_available": 50 }, { "_id": "642dd5d3163feb4a0795985f", "name": "Buy One Get One Free Ginger Beer", "description": "Get two bottles of our delicious ginger beer for the price of one! Limited time offer.", "images": { "full_size": "https://i.postimg.cc/7hggqMYK/Buy-One-Get-One-Free-Ginger-Beer.jpg", "thumbnail": "https://i.postimg.cc/T53y9bbb/Buy-One-Get-One-Free-Ginger-Beer.jpg" }, "price": { "$numberDecimal": "4.99" }, "quantity_available": 500 }, { "_id": "642dd5e1163feb4a07959860", "name": "Spicy Ginger Beer", "description": "Our spicy ginger beer is made with extra ginger and chili peppers for a fiery kick. Perfect for those who like their ginger beer with some extra heat.", "images": { "full_size": "https://i.postimg.cc/7ZLTRy7s/Spicy-Ginger-Beer.jpg", "thumbnail": "https://i.postimg.cc/ppgT94sz/Spicy-Ginger-Beer.jpg" }, "price": { "$numberDecimal": "5.99" }, "quantity_available": 7500 }, { "_id": "642dd615163feb4a07959863", "name": "Dark and Stormy Cocktail Recipe", "description": "This classic cocktail is made with ginger beer, dark rum, and lime juice. Learn how to make it at home with this easy recipe!", "images": { "full_size": "https://i.postimg.cc/wvNNkcJ9/Dark-and-Stormy-Cocktail-Recipe.jpg", "thumbnail": "https://i.postimg.cc/mzbhL98n/Dark-and-Stormy-Cocktail-Recipe.jpg" }, "price": { "$numberDecimal": "0.01" }, "quantity_available": 1 }, { "_id": "642dd622163feb4a07959864", "name": "Ginger Beer Sampler Pack", "description": "Try all of our delicious ginger beer flavors with our sampler pack! Includes original, spicy, and fruit-infused ginger beers.", "images": { "full_size": "https://i.postimg.cc/GhxkNQf2/Ginger-Beer-Sampler-Pack.jpg", "thumbnail": "https://i.postimg.cc/GH98Tkdw/Ginger-Beer-Sampler-Pack.jpg" }, "price": { "$numberDecimal": "19.99" }, "quantity_available": 250 }, { "_id": "642dd62e163feb4a07959865", "name": "Moscow Mule", "description": "Our Moscow Mule is made with vodka, lime juice, and spicy ginger beer. Served in a copper mug for the ultimate experience.", "images": { "full_size": "https://i.postimg.cc/qvZCVZxk/Moscow-Mule.jpg", "thumbnail": "https://i.postimg.cc/qNy72wFY/Moscow-Mule.jpg" }, "price": { "$numberDecimal": "9.99" }, "quantity_available": 500 }, { "_id": "643443f37ff3e46ad7644254", "name": "Ginger Lemonade", "description": "A refreshing and zesty drink made with fresh ginger, lemon juice and sparkling water. No added sugar or artificial flavors.", "images": { "full_size": "https://i.postimg.cc/W4Fq2650/Ginger-Lemonade.jpg", "thumbnail": "https://i.postimg.cc/942QbT5f/Ginger-Lemonade.jpg" }, "price": { "$numberDecimal": "3.80" }, "quantity_available": 15000 } ];
    const moduleCalled = "faked by useMockData";
    

    return { loading, error, apiData, moduleCalled };
}

// For Parent Module:
// const { loading, error, apiData, moduleCalled } = useMockData();
